import Link from "next/link";
import BrandMark from "./brand-mark";
import Icon from "./ui-icon";
import { company } from "./site-content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label={`${company.name} home`}><BrandMark /><span>{company.name}</span></Link>
            <p>TikTok advertising services.<br />Campaign planning, delivery, and optimization.</p>
            <p>Website operated by<br /><strong lang="zh-CN">{company.legalName}</strong><br />under the {company.name} brand.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <h2>Explore</h2>
            <Link href="/#services">TikTok ad services</Link>
            <Link href="/#about">Our company</Link>
            <Link href="/#games">Game showcase</Link>
          </nav>
          <div className="footer-contact">
            <h2>Stay in touch</h2>
            <a href={company.mailto}>{company.email}<Icon name="external" /></a>
            <p>Company website<br /><a href={company.website}>{company.websiteLabel}</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 <span lang="zh-CN">{company.legalName}</span> · {company.name}. All rights reserved.</p>
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
