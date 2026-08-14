"use client";
import React from 'react';

export default function ScenarioReviewForm({ formName }: { formName: string }) {
  return (
    <form id="lead-form" className="w-full flex flex-col gap-6" name={formName} method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value={formName} />
      
      <span className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase block mb-2">Scenario Review</span>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="f-name" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Your Name</label>
          <input type="text" id="f-name" name="full_name" required className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-company" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Brokerage / Firm</label>
          <input type="text" id="f-company" name="company" className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-phone" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Phone Number</label>
          <input type="tel" id="f-phone" name="phone" required className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-email" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Email Address</label>
          <input type="email" id="f-email" name="email" required className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-filetype" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">File Type</label>
          <select id="f-filetype" name="file_type" required defaultValue="" className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors appearance-none">
            <option value="" disabled>Select file type...</option>
            <option value="Purchase (first-time)">Purchase (first-time)</option>
            <option value="Purchase (move-up)">Purchase (move-up)</option>
            <option value="Purchase (investment)">Purchase (investment)</option>
            <option value="Self-employed">Self-employed</option>
            <option value="New to Canada">New to Canada</option>
            <option value="Refinance / equity">Refinance / equity</option>
            <option value="Commercial">Commercial</option>
            <option value="Construction">Construction</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-obstacle" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Key Obstacle (if any)</label>
          <select id="f-obstacle" name="obstacle" defaultValue="" className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors appearance-none">
            <option value="" disabled>Select obstacle...</option>
            <option value="Bank decline">Bank decline</option>
            <option value="Non-standard income">Non-standard income</option>
            <option value="Credit / insolvency history">Credit / insolvency history</option>
            <option value="Down payment source">Down payment source</option>
            <option value="Too many properties / DSR">Too many properties / DSR</option>
            <option value="Zoning / environmental">Zoning / environmental</option>
            <option value="Tight timeline">Tight timeline</option>
            <option value="Just need a second opinion">Just need a second opinion</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="f-notes" className="font-mono text-[11px] tracking-[0.14em] text-[#6E6A63] uppercase">Scenario Notes</label>
          <textarea id="f-notes" name="notes" rows={4} placeholder="Location, value, existing debt, what you're trying to achieve..." className="w-full bg-[#161616] border border-[#2C2C2A] px-4 py-3.5 font-sans text-[16px] text-white outline-none focus:border-bronze transition-colors resize-y"></textarea>
        </div>
      </div>

      <div className="font-mono text-[10.5px] tracking-[0.08em] text-[#B08A4E] bg-[#242424] border border-[#2C2C2A] p-[12px_16px] flex items-center justify-center gap-2 mt-4">
        <span>🔒</span> BCFSA & RECA Compliant &middot; 100% Confidential
      </div>

      <button type="submit" className="inline-flex items-center justify-center min-h-[54px] w-full bg-white text-ink font-sans font-medium text-[16px] tracking-[0.02em] hover:bg-bronze hover:text-white transition-colors duration-300 mt-2">
        Submit This Scenario &rarr;
      </button>
    </form>
  );
}
