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
            <p>A little play. A wider world.<br />Helping great games find their people.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <h2>Explore</h2>
            <Link href="/#games">Our games</Link>
            <Link href="/#services">What we do</Link>
            <Link href="/#about">About us</Link>
          </nav>
          <div className="footer-contact">
            <h2>Stay in touch</h2>
            <a href={company.mailto}>{company.email}<Icon name="external" /></a>
            <p>Based in China.<br />Open to global collaboration.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
