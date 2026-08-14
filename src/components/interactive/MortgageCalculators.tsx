"use client";
import React, { useState, useMemo } from 'react';
import Script from 'next/script';

// Helper functions (ported from calc.js)
const money = (n: number) => {
  if (isNaN(n) || !isFinite(n)) return '—';
  return '$' + Math.round(n).toLocaleString('en-US');
};
const perRate = (r: number, n: number) => Math.pow(1 + r / 200, 2 / n) - 1;
const pmt = (pv: number, i: number, n: number) => (pv * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
const insurancePremiumPct = (ltv: number) => {
  if (ltv <= 0.8) return 0;
  if (ltv <= 0.85) return 0.028;
  if (ltv <= 0.90) return 0.031;
  if (ltv <= 0.95) return 0.040;
  return null;
};
const maxPriceByDown = (d: number) => {
  if (d < 25000) return d / 0.05;
  if (d < 50000) return 500000 + (d - 25000) / 0.10;
  return d / 0.20;
};
const maxPriceByIncome = (D: number, maxTotalFinanced: number) => {
  let lo = D, hi = D + maxTotalFinanced;
  for (let k = 0; k < 60; k++) {
    const mid = (lo + hi) / 2;
    const base = mid - D;
    const pct = base <= 0 ? 0 : insurancePremiumPct(base / mid);
    const req = pct === null ? Infinity : base * (1 + pct);
    if (req <= maxTotalFinanced) lo = mid; else hi = mid;
  }
  return lo;
};

export default function MortgageCalculators({ hasPtt = false }: { hasPtt?: boolean }) {
  const [tab, setTab] = useState(1);

  // Affordability State
  const [income, setIncome] = useState(120000);
  const [debts, setDebts] = useState(500);
  const [down, setDown] = useState(100000);
  const [rate, setRate] = useState(4.49);
  const [tax, setTax] = useState(350);
  const [condo, setCondo] = useState(0);

  // Affordability Logic
  const affordData = useMemo(() => {
    const HEAT = 150, GDS = 0.39, TDS = 0.44, AMORT = 25 * 12;
    const qualRate = Math.max(rate + 2, 5.25);
    const i = perRate(qualRate, 12);
    const grossM = income / 12;
    const shelterCondo = condo * 0.5;
    const avail = Math.min(GDS * grossM - tax - HEAT - shelterCondo, TDS * grossM - debts - tax - HEAT - shelterCondo);

    if (income <= 0 || avail <= 0) return { error: 'Standard ratios don’t produce a positive result with these inputs.' };
    if (down <= 0) return { error: 'Enter a down payment amount.' };

    const factor = (1 - Math.pow(1 + i, -AMORT)) / i;
    const maxTotalFinanced = avail * factor;
    const pIncome = maxPriceByIncome(down, maxTotalFinanced);
    const pDown = maxPriceByDown(down);
    const price = Math.min(pIncome, pDown);

    if (price <= down + 1) return { error: 'These inputs don’t leave room for a mortgage.' };

    const limitMsg = pDown < pIncome + 1 ? 'limited by down payment.' : 'limited by income/debt.';
    const base = price - down;
    const pct = insurancePremiumPct(base / price) || 0;
    const prem = base * pct;
    const total = base + prem;
    const qpay = pmt(total, i, AMORT);

    return { price, down, base, pct, prem, total, qualRate, qpay, limitMsg };
  }, [income, debts, down, rate, tax, condo]);

  // PTT State
  const [pttPrice, setPttPrice] = useState(850000);
  const pttData = useMemo(() => {
    const t1 = Math.min(pttPrice, 200000) * 0.01;
    const t2 = Math.max(0, Math.min(pttPrice, 2000000) - 200000) * 0.02;
    const t3 = Math.max(0, pttPrice - 2000000) * 0.03;
    const t4 = Math.max(0, pttPrice - 3000000) * 0.02;
    return { t1, t2, t3, t4, total: t1 + t2 + t3 + t4 };
  }, [pttPrice]);

  return (
    <section className="py-[140px] px-6 bg-[#F5F3EE]" id="calculators">
      <div className="max-w-[1140px] mx-auto">
        <span className="font-mono text-[11.5px] tracking-[0.22em] uppercase text-bronze block mb-[22px]">Mortgage Tools</span>
        <h2 className="font-serif font-medium text-[clamp(38px,5vw,60px)] leading-[1.05] text-ink mb-6">Run your own numbers.</h2>
        <p className="font-sans text-[18px] leading-[1.65] text-stone mb-[60px]">Estimates for planning — not approvals, rate offers or advice.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-line border border-line mb-[40px]">
          <button className={`p-6 text-left transition-colors duration-300 ${tab === 1 ? 'bg-ink' : 'bg-white hover:bg-[#FAFAF7]'}`} onClick={() => setTab(1)}>
            <span className={`block font-mono text-[11px] tracking-[0.18em] uppercase mb-4 ${tab === 1 ? 'text-bronze' : 'text-stone'}`}>Tool 01</span>
            <span className={`block font-serif font-medium text-[22px] mb-2 ${tab === 1 ? 'text-white' : 'text-ink'}`}>Mortgage Payment</span>
            <span className={`block font-sans text-[14px] leading-[1.5] ${tab === 1 ? 'text-[#B8B4AC]' : 'text-stone'}`}>What will it actually cost, per month or per payday?</span>
          </button>
          <button className={`p-6 text-left transition-colors duration-300 ${tab === 2 ? 'bg-ink' : 'bg-white hover:bg-[#FAFAF7]'}`} onClick={() => setTab(2)}>
            <span className={`block font-mono text-[11px] tracking-[0.18em] uppercase mb-4 ${tab === 2 ? 'text-bronze' : 'text-stone'}`}>Tool 02</span>
            <span className={`block font-serif font-medium text-[22px] mb-2 ${tab === 2 ? 'text-white' : 'text-ink'}`}>Affordability</span>
            <span className={`block font-sans text-[14px] leading-[1.5] ${tab === 2 ? 'text-[#B8B4AC]' : 'text-stone'}`}>How much home do your numbers realistically support?</span>
          </button>
          {hasPtt && (
            <button className={`p-6 text-left transition-colors duration-300 ${tab === 3 ? 'bg-ink' : 'bg-white hover:bg-[#FAFAF7]'}`} onClick={() => setTab(3)}>
              <span className={`block font-mono text-[11px] tracking-[0.18em] uppercase mb-4 ${tab === 3 ? 'text-bronze' : 'text-stone'}`}>Tool 03</span>
              <span className={`block font-serif font-medium text-[22px] mb-2 ${tab === 3 ? 'text-white' : 'text-ink'}`}>BC Property Transfer Tax</span>
              <span className={`block font-sans text-[14px] leading-[1.5] ${tab === 3 ? 'text-[#B8B4AC]' : 'text-stone'}`}>The closing cost too many buyers forget to budget.</span>
            </button>
          )}
        </div>

        <div className="min-h-[500px]">
          {tab === 1 && (
            <div className="bg-white border border-line p-8 md:p-12">
              <div 
                className="bendigi-calculators"
                // @ts-expect-error - bendigi widget custom attributes are not part of the DOM typings
                apikey="e14ae5e49319a630:7BRq84gZj5qS8m-pCcz1h8_fJUqNoE6E" 
                theme="auto" 
                navpositiontop="80px" 
                navpositiontopmobile="66px" 
                tools="simple-mtg"
              ></div>
              <Script src="https://tools.bendigi.com/assets/calculators.js" />
            </div>
          )}
          {tab === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[380px_1fr] gap-[1px] bg-line border border-line">
              <div className="bg-white p-8 md:p-[40px_32px]">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10.5px] tracking-[0.1em] text-stone uppercase">Gross annual household income ($)</label>
                    <input className="w-full bg-[#FAFAF7] border border-line px-4 py-3 font-sans text-[16px] text-ink outline-none focus:border-bronze transition-colors" type="number" value={income} onChange={e => setIncome(Number(e.target.value))} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10.5px] tracking-[0.1em] text-stone uppercase">Monthly debt payments ($)</label>
                    <input className="w-full bg-[#FAFAF7] border border-line px-4 py-3 font-sans text-[16px] text-ink outline-none focus:border-bronze transition-colors" type="number" value={debts} onChange={e => setDebts(Number(e.target.value))} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10.5px] tracking-[0.1em] text-stone uppercase">Down payment available ($)</label>
                    <input className="w-full bg-[#FAFAF7] border border-line px-4 py-3 font-sans text-[16px] text-ink outline-none focus:border-bronze transition-colors" type="number" value={down} onChange={e => setDown(Number(e.target.value))} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10.5px] tracking-[0.1em] text-stone uppercase">Interest rate (%)</label>
                    <input className="w-full bg-[#FAFAF7] border border-line px-4 py-3 font-sans text-[16px] text-ink outline-none focus:border-bronze transition-colors" type="number" value={rate} step="0.01" onChange={e => setRate(Number(e.target.value))} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10.5px] tracking-[0.1em] text-stone uppercase">Est. monthly property tax ($)</label>
                    <input className="w-full bg-[#FAFAF7] border border-line px-4 py-3 font-sans text-[16px] text-ink outline-none focus:border-bronze transition-colors" type="number" value={tax} onChange={e => setTax(Number(e.target.value))} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10.5px] tracking-[0.1em] text-stone uppercase">Monthly condo/strata fees ($)</label>
                    <input className="w-full bg-[#FAFAF7] border border-line px-4 py-3 font-sans text-[16px] text-ink outline-none focus:border-bronze transition-colors" type="number" value={condo} onChange={e => setCondo(Number(e.target.value))} />
                  </div>
                </div>
              </div>
              <div className="bg-[#1C1C1C] p-8 md:p-[60px] text-white flex flex-col justify-center">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-bronze block mb-4">Estimated maximum purchase price</span>
                <span className="font-serif font-medium text-[clamp(42px,6vw,84px)] leading-[1] text-white block mb-4">{affordData.error ? '—' : money(affordData.price!)}</span>
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] block mb-8">estimate only</span>
                {affordData.limitMsg && <p className="font-sans text-[14.5px] text-[#EDEBE6] bg-[#2A2A28] border border-[#3A3A38] px-4 py-3 mb-8">{affordData.limitMsg}</p>}
                
                <ul className="list-none m-0 p-0 mb-10 border-t border-[#2C2C2A]">
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">Down payment</span>
                    <span className="text-white text-right">{money(down)}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">Base mortgage amount</span>
                    <span className="text-white text-right">{affordData.error ? '—' : money(affordData.base!)}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">Est. mortgage default-insurance premium</span>
                    <span className="text-white text-right">{affordData.error ? '—' : (affordData.pct! > 0 ? money(affordData.prem!) : 'Not applicable')}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">Est. total mortgage incl. premium</span>
                    <span className="text-white text-right">{affordData.error ? '—' : money(affordData.total!)}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">Stress-test rate used</span>
                    <span className="text-white text-right">{affordData.error ? '—' : affordData.qualRate?.toFixed(2) + '%'}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">Est. qualifying payment</span>
                    <span className="text-white text-right">{affordData.error ? '—' : money(affordData.qpay!) + '/mo'}</span>
                  </li>
                </ul>
                
                {affordData.error && <p className="font-sans text-[14.5px] text-[#FF8585] bg-[#331A1A] border border-[#4D2626] px-4 py-3 mb-6">{affordData.error}</p>}
                <p className="font-sans text-[12.5px] text-[#6E6A63] leading-[1.6]">Assumes a 25-year amortization, $150/month heating, 50% of any condo/strata fees, and standard 39% GDS / 44% TDS limits, stress-tested at your rate + 2% (minimum 5.25%).</p>
              </div>
            </div>
          )}
          {tab === 3 && hasPtt && (
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[380px_1fr] gap-[1px] bg-line border border-line">
              <div className="bg-white p-8 md:p-[40px_32px]">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-[0.1em] text-stone uppercase">Purchase price ($)</label>
                  <input className="w-full bg-[#FAFAF7] border border-line px-4 py-3 font-sans text-[16px] text-ink outline-none focus:border-bronze transition-colors" type="number" value={pttPrice} onChange={e => setPttPrice(Number(e.target.value))} />
                </div>
              </div>
              <div className="bg-[#1C1C1C] p-8 md:p-[60px] text-white flex flex-col justify-center">
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-bronze block mb-4">Estimated BC residential property transfer tax</span>
                <span className="font-serif font-medium text-[clamp(42px,6vw,84px)] leading-[1] text-white block mb-4">{money(pttData.total)}</span>
                <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#6E6A63] block mb-10">general rate, before exemptions</span>
                
                <ul className="list-none m-0 p-0 mb-10 border-t border-[#2C2C2A]">
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">1% on the first $200,000</span>
                    <span className="text-white text-right">{money(pttData.t1)}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">2% on $200,000–$2,000,000</span>
                    <span className="text-white text-right">{money(pttData.t2)}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">3% above $2,000,000</span>
                    <span className="text-white text-right">{money(pttData.t3)}</span>
                  </li>
                  <li className="flex justify-between py-4 border-b border-[#2C2C2A] text-[15px] font-sans">
                    <span className="text-[#9C988F]">Further 2% above $3,000,000</span>
                    <span className="text-white text-right">{money(pttData.t4)}</span>
                  </li>
                </ul>
                <p className="font-sans text-[12.5px] text-[#6E6A63] leading-[1.6]">First-time buyer and newly built home exemptions may reduce or eliminate this tax — confirm with Dil before budgeting.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
