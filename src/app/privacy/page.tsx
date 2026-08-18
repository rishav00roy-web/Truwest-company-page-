import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import LegalPage, { LegalSection } from '@/components/sections/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | TruWest Mortgage',
  description:
    'How TruWest Mortgage collects, uses and protects the personal information submitted through this website.',
  alternates: { canonical: 'https://truwestmortgage.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="18 August 2026"
      intro="What this website collects, why, who it is shared with, and how to have it removed. Written to describe what the site actually does, not what a template assumes."
    >
      <LegalSection heading="Who this covers">
        <p>
          This policy covers truwestmortgage.com. TruWest Mortgage operates from 215-12565 88 Ave,
          Surrey, BC V3W 3J7 and can be reached at{' '}
          <a href="tel:+16045930197" className="underline hover:text-ink">(604) 593-0197</a> or{' '}
          <a href="mailto:info@truwestmortgage.com" className="underline hover:text-ink">info@truwestmortgage.com</a>.
          Handling of personal information is governed by Canada&apos;s Personal Information Protection
          and Electronic Documents Act and, in British Columbia, the Personal Information Protection Act.
        </p>
      </LegalSection>

      <LegalSection heading="What the forms collect">
        <p>
          The enquiry forms ask for your name, phone number and email address, and depending on the
          form, your financing goal, an approximate property or loan value, your company name, the file
          type, the obstacle you are facing, and any notes you choose to add. The page you submitted
          from is recorded so we know what you were reading.
        </p>
        <p>
          Nothing else is required, and the forms ask you not to send confidential financial documents
          through them. If a document is needed, we arrange a secure method separately. Submitting a
          form does not involve a credit check and has no effect on your credit score.
        </p>
      </LegalSection>

      <LegalSection heading="What it is used for">
        <p>
          To respond to your enquiry and to discuss mortgage options with you, including by phone and
          text message, which is the consent you give when you submit a form. It is not sold, rented or
          traded, and it is not used for unrelated marketing.
        </p>
        <p>
          If your file proceeds, information may be shared with lenders, mortgage insurers and service
          providers as needed to arrange financing. That sharing is discussed with you at the time, not
          done silently from a website submission.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and tracking">
        <p>
          This site sets no cookies of its own and runs no advertising or analytics trackers. The
          calculator tools on the calculators page are supplied by Canadian Mortgage App and store a
          session identifier in your browser so the calculators keep their state while you use them.
        </p>
      </LegalSection>

      <LegalSection heading="Third parties involved">
        <p>
          <strong className="text-ink font-medium">Canadian Mortgage App</strong> provides the
          calculators and the online application. When you use those tools you are interacting with
          their service under their terms and privacy practices.
        </p>
        <p>
          <strong className="text-ink font-medium">The site assistant</strong> is a chat widget that
          answers questions about which page you need. Messages you type are sent to a third-party
          language-model provider to generate a reply, and your IP address is used briefly to limit
          how many messages one visitor can send. Do not enter personal or financial details into it —
          it exists to point you at pages, not to take your file.
        </p>
        <p>
          <strong className="text-ink font-medium">Hosting.</strong> The site runs on Vercel, whose
          servers process requests and keep standard access logs.
        </p>
      </LegalSection>

      <LegalSection heading="How long it is kept">
        <p>
          Enquiry information is kept for as long as it takes to respond and, where a file proceeds, for
          the period that record-keeping rules for licensed mortgage brokerages require. You can ask for
          it to be deleted sooner where no legal obligation requires it to be retained.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You can ask what personal information is held about you, ask for corrections, ask for deletion,
          or withdraw consent to be contacted. Email{' '}
          <a href="mailto:info@truwestmortgage.com" className="underline hover:text-ink">info@truwestmortgage.com</a>{' '}
          or call{' '}
          <a href="tel:+16045930197" className="underline hover:text-ink">(604) 593-0197</a> and we will
          action it. If you are not satisfied with the response, you can contact the Office of the Privacy
          Commissioner of Canada.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          If this policy changes, the date at the top of this page changes with it. See also our{' '}
          <Link href="/terms" className="underline hover:text-ink">Terms of Use</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
