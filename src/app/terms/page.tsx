import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import LegalPage, { LegalSection } from '@/components/sections/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use | TruWest Mortgage',
  description:
    'The terms that apply to using the TruWest Mortgage website, its calculators and its enquiry forms.',
  alternates: { canonical: 'https://truwestmortgage.com/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="18 August 2026"
      intro="What this website is, what it is not, and the limits of what you can rely on it for."
    >
      <LegalSection heading="This site is information, not advice">
        <p>
          Everything here is general information about mortgage financing in British Columbia and
          Alberta. It is not financial, legal or tax advice, and it is not advice about your particular
          situation. Nothing on this site is an approval, a pre-approval, a commitment to lend, or a rate
          offer. A mortgage is arranged after a licensed broker reviews your actual file.
        </p>
      </LegalSection>

      <LegalSection heading="Calculators and estimates">
        <p>
          The calculators produce estimates for planning only. What you can actually borrow depends on
          credit, income documentation, property details, lender guidelines, mortgage-insurance
          requirements and other factors that a calculator cannot see. Rates, qualification rules,
          Property Transfer Tax thresholds and lender programs all change, sometimes at short notice.
        </p>
        <p>
          Some calculators are supplied by Canadian Mortgage App and use their own default rates, ratios
          and assumptions, which they may update at any time. Use of those tools is subject to{' '}
          <a
            href="https://canadianmortgageapp.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-ink"
          >
            their terms
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="The site assistant">
        <p>
          The chat assistant is an automated tool that points you to the right page. Its answers are
          generated, may be wrong or incomplete, and are not advice from a licensed broker. Do not rely
          on it for numbers or eligibility, and do not enter personal or financial details into it. When
          it matters, call{' '}
          <a href="tel:+16045930197" className="underline hover:text-ink">(604) 593-0197</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Submitting an enquiry">
        <p>
          Submitting a form starts a conversation; it does not create a broker-client relationship and it
          obliges neither side to proceed. Please give accurate information, and please do not send
          confidential financial documents through the forms — a secure method is arranged when documents
          are needed. How submissions are handled is set out in our{' '}
          <Link href="/privacy" className="underline hover:text-ink">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="Links to other sites">
        <p>
          This site links to third-party services, including the online application, the calculator tools
          and Google. Those sites are outside our control and are governed by their own terms and privacy
          practices. A link is not an endorsement of everything on the far side of it.
        </p>
      </LegalSection>

      <LegalSection heading="Content">
        <p>
          The text, design, images and layout of this site belong to TruWest Mortgage. You are welcome to
          read, print and share pages for your own use. Republishing the content as your own, or copying
          it for a competing service, is not permitted.
        </p>
      </LegalSection>

      <LegalSection heading="Availability and limits">
        <p>
          The site is provided as it stands. We take reasonable care to keep it accurate and available,
          but we do not warrant that it will be uninterrupted, error-free, or current at every moment.
          To the extent the law allows, TruWest Mortgage is not liable for loss arising from reliance on
          the general information, estimates or automated tools on this site. Nothing here limits any
          liability that cannot be limited by law, including obligations owed under mortgage brokerage
          regulation in British Columbia and Alberta.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law and changes">
        <p>
          These terms are governed by the laws of British Columbia and the applicable laws of Canada. If
          they change, the date at the top of this page changes with them; continuing to use the site
          means the current version applies.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
