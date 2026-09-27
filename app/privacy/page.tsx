import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../ui-icon";
import { company } from "../site-content";

export const metadata: Metadata = {
  title: "Privacy Policy | HengQingKeJi",
  description: "Learn how HengQingKeJi handles business contact details and campaign-related data, and how to contact us about privacy.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="privacy-page">
      <div className="container legal-container">
        <Link className="back-link" href="/"><Icon name="arrow" />Back to home</Link>
        <div className="legal-heading">
          <p className="eyebrow">Your information matters</p>
          <h1>Privacy policy</h1>
          <p>Last updated: September 27, 2026</p>
        </div>
        <article className="legal-content">
          <section>
            <h2>How we use information</h2>
            <p>{company.name} processes business contact details and campaign-related data only where needed to provide requested services, operate campaigns, and communicate with our clients. We do not sell personal information.</p>
          </section>
          <section>
            <h2>Protection and retention</h2>
            <p>We apply reasonable administrative and technical safeguards, retain information only as long as necessary for the stated purpose or legal obligations, and respond to applicable data access or deletion requests.</p>
          </section>
          <section>
            <h2>Contact us</h2>
            <p>For privacy questions or requests, contact <a href={company.mailto}>{company.email}</a>.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
