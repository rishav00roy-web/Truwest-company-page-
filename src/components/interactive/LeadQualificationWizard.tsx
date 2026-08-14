"use client";
import React, { useState } from 'react';

interface LeadQualificationWizardProps {
  formName: string;
  pageSource: string;
  defaultGoal?: string;
}

export default function LeadQualificationWizard({ formName, pageSource, defaultGoal }: LeadQualificationWizardProps) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState(defaultGoal || '');
  const [value, setValue] = useState('');

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleGoal = (g: string) => {
    setGoal(g);
    nextStep();
  };

  const handleValue = (v: string) => {
    setValue(v);
    nextStep();
  };

  return (
    <form id="lead-form" className="w-full flex flex-col gap-6" name={formName} method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="page_source" value={pageSource} />
      <input type="hidden" name="financing_goal" value={goal} />
      <input type="hidden" name="value_range" value={value} />

      <div className="flex gap-2 mb-4" aria-hidden="true">
        <i className={`h-[3px] flex-1 transition-colors duration-300 ${step >= 1 ? 'bg-bronze' : 'bg-[#2C2C2A]'}`}></i>
        <i className={`h-[3px] flex-1 transition-colors duration-300 ${step >= 2 ? 'bg-bronze' : 'bg-[#2C2C2A]'}`}></i>
        <i className={`h-[3px] flex-1 transition-colors duration-300 ${step >= 3 ? 'bg-bronze' : 'bg-[#2C2C2A]'}`}></i>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-6 animate-fade-in">
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Step 1 of 3</span>
          <div className="font-serif font-medium text-[26px] md:text-[32px] text-white leading-[1.1]">What is your primary financing goal?</div>
          <div className="flex flex-col gap-[8px]">
            {['Buy a Home', 'Refinance / Equity', 'Mortgage Renewal', 'Self-Employed Approval'].map(g => (
              <button key={g} type="button" className="group flex justify-between items-center bg-[#242424] hover:bg-[#2C2C2A] border border-[#2C2C2A] p-[20px_24px] text-left transition-colors duration-300" onClick={() => handleGoal(g)}>
                <span className="font-sans font-medium text-[16.5px] text-[#EDEBE6]">{g}</span>
                <span className="text-bronze font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-6 animate-fade-in">
          <button type="button" className="self-start font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase hover:text-white transition-colors" onClick={prevStep}>&larr; Back</button>
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Step 2 of 3</span>
          <div className="font-serif font-medium text-[26px] md:text-[32px] text-white leading-[1.1]">Estimated property or loan value?</div>
          <div className="flex flex-col gap-[8px]">
            {['$300k – $500k', '$500k – $1M', '$1M+', 'Not sure yet'].map(v => (
              <button key={v} type="button" className="group flex justify-between items-center bg-[#242424] hover:bg-[#2C2C2A] border border-[#2C2C2A] p-[20px_24px] text-left transition-colors duration-300" onClick={() => handleValue(v)}>
                <span className="font-sans font-medium text-[16.5px] text-[#EDEBE6]">{v}</span>
                <span className="text-bronze font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-6 animate-fade-in">
          <button type="button" className="self-start font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase hover:text-white transition-colors" onClick={prevStep}>&larr; Back</button>
          <span className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Step 3 of 3</span>
          <div className="font-serif font-medium text-[26px] md:text-[32px] text-white leading-[1.1]">Where should we send your options?</div>
          
          <div className="bg-[#242424] border border-[#2C2C2A] p-5 font-sans text-[14.5px] text-[#B8B4AC] leading-[1.6]">
            Goal: <b className="text-white font-medium">{goal}</b><br />
            Value: <b className="text-white font-medium">{value}</b>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="f-name" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Full Name</label>
              <input type="text" id="f-name" name="full_name" required className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="f-phone" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Phone Number</label>
              <input type="tel" id="f-phone" name="phone" required className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="f-email" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Email Address</label>
              <input type="email" id="f-email" name="email" required className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors" />
            </div>
          </div>

          <p className="font-sans text-[12.5px] text-[#6E6A63] leading-[1.6] max-w-[400px]">
            By submitting this form, you consent to TruWest Mortgage contacting you regarding your inquiry.
            Do not submit confidential financial documents through this form.
          </p>

          <div className="font-mono text-[10.5px] tracking-[0.08em] text-[#B08A4E] bg-[#242424] border border-[#2C2C2A] p-[12px_16px] flex items-center justify-center gap-2">
            <span>🔒</span> BCFSA & RECA Compliant &middot; 100% Confidential
          </div>

          <button type="submit" className="inline-flex items-center justify-center min-h-[54px] w-full bg-white text-ink font-sans font-medium text-[16px] tracking-[0.02em] hover:bg-bronze hover:text-white transition-colors duration-300 mt-2">
            Get My Qualification Breakdown &rarr;
          </button>
        </div>
      )}
    </form>
  );
}
