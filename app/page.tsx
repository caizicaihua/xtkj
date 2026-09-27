import type { Metadata } from "next";
import Image from "next/image";
import Icon, { type IconName } from "./ui-icon";
import { company, games, siteMetadata } from "./site-content";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  alternates: { canonical: "/" },
};

const services: { icon: IconName; title: string; description: string }[] = [
  { icon: "target", title: "TikTok campaign management", description: "Campaign planning, audience selection, ad setup, and day-to-day delivery management around your advertising objectives." },
  { icon: "sparkle", title: "Ad creative testing", description: "Creative planning and testing for TikTok ads, with regular reviews of which messages and formats connect with your audience." },
  { icon: "chart", title: "Campaign optimization", description: "Budget, bidding, and audience adjustments informed by delivery and performance data from your TikTok campaigns." },
  { icon: "bars", title: "Performance reporting", description: "Reports on ad spend, impressions, clicks, and conversions to help your team understand results and plan the next campaign." },
];

const values = [
  { title: "A focus on TikTok advertising", text: "Our core work is planning, running, and optimizing advertising campaigns on TikTok." },
  { title: "Clear communication", text: "Campaign objectives, budgets, creative plans, and reporting are discussed with the client." },
  { title: "Decisions informed by results", text: "We review campaign data to guide creative tests and day-to-day delivery adjustments." },
];

const steps = [
  { title: "Understand", text: "Define your business, target audience, and TikTok advertising objectives." },
  { title: "Plan", text: "Agree on campaign structure, budgets, creative ideas, and reporting needs." },
  { title: "Launch", text: "Set up ads and review campaign delivery and early performance." },
  { title: "Optimize", text: "Use campaign reports to refine audiences, creative, and budget allocation." },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />TikTok advertising services</p>
            <h1 id="hero-title">TikTok advertising.<br /><span>Built around you.</span></h1>
            <p className="hero-company" lang="zh-CN">{company.legalName} · 专注 TikTok 广告投放</p>
            <p className="hero-description">We help businesses plan, launch, and optimize TikTok advertising campaigns, with creative testing, day-to-day ad management, and clear performance reporting.</p>
            <div className="hero-actions">
              <a className="button" href="#services">Explore our services<Icon name="arrow" /></a>
              <a className="button button-secondary" href="#contact">Discuss your campaign</a>
            </div>
            <div className="hero-note">
              <span className="note-icon"><Icon name="globe" /></span>
              <p>Company website: <a href={company.website}>{company.websiteLabel}</a><br /><strong>Business enquiries: <a href={company.mailto}>{company.email}</a></strong></p>
            </div>
          </div>
          <aside className="company-card" aria-labelledby="company-title">
            <p className="eyebrow">Company profile</p>
            <h2 id="company-title" lang="zh-CN">{company.legalName}</h2>
            <p className="company-card-intro">The company behind the {company.name} brand and this website.</p>
            <dl className="company-details">
              <div><dt>Website brand</dt><dd>{company.name}</dd></div>
              <div><dt>Company website</dt><dd><a href={company.website}>{company.websiteLabel}<Icon name="external" /></a></dd></div>
              <div><dt>Business email</dt><dd><a href={company.mailto}>{company.email}<Icon name="mail" /></a></dd></div>
              <div><dt>Primary business</dt><dd>TikTok advertising services<span lang="zh-CN">TikTok 广告投放与运营</span></dd></div>
            </dl>
            <p className="company-card-note">Our business email uses the same {company.domain} domain as our company website.</p>
          </aside>
        </div>
      </section>

      <section className="services-section section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Our primary business</p><h2 id="services-title">TikTok advertising,<br />from planning to reporting.</h2></div>
            <p>We provide TikTok ad campaign management,<br className="desktop-break" /> creative testing, optimization, and reporting.</p>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <article className="service-card" key={service.title}>
                <span className="service-icon"><Icon name={service.icon} /></span>
                <h3>{service.title}</h3><p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="service-details-grid">
            <article className="service-detail-card">
              <p className="eyebrow">Where we operate</p>
              <h3>Our primary markets</h3>
              <p>Our main operating markets include Brazil, Bangladesh, and Pakistan.</p>
              <ul className="market-list" aria-label="Primary operating markets">
                {company.primaryMarkets.map(market => <li key={market}>{market}</li>)}
              </ul>
            </article>
            <article className="service-detail-card" id="api-use">
              <p className="eyebrow">Requested API access</p>
              <h3>Planned use of TikTok Business API</h3>
              <p>We are applying for API access to retrieve advertising reports and create or adjust ads as part of our TikTok advertising services.</p>
              <p>This requested access is intended for advertising accounts our company is authorized to manage.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">Our company</p>
            <h2 id="about-title">One company.<br />A clear advertising focus.</h2>
            <p><strong lang="zh-CN">{company.legalName}</strong> operates this website under the <strong>{company.name}</strong> brand. Our primary business is providing <strong>TikTok advertising services</strong>.</p>
            <p>We work with advertisers on campaign planning, ad delivery, creative testing, ongoing optimization, and performance reporting.</p>
            <p>Our company website is <a href={company.website}>{company.websiteLabel}</a>. The email <a href={company.mailto}>{company.email}</a> is our business contact address. Both use our {company.domain} domain.</p>
            <a className="text-link" href="#contact">Contact our company<Icon name="arrow" /></a>
          </div>
          <div className="about-values">
            <span className="values-label">What you can expect from us</span>
            {values.map(value => (
              <div className="value-item" key={value.title}>
                <span><Icon name="check" /></span>
                <div><h3>{value.title}</h3><p>{value.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="games-section section" id="games" aria-labelledby="games-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Game showcase</p><h2 id="games-title">Explore four worlds of play.</h2></div>
            <p>Discover the games featured on our website.<br className="desktop-break" /> Each listing links to its Google Play page.</p>
          </div>
          <div className="games-grid">
            {games.map(game => (
              <article className={"product-card " + game.color} id={"game-" + game.slug} key={game.slug}>
                <div className="product-art">
                  <Image className="product-screenshot" src={game.screenshot} alt={game.title + " game preview"} width={225} height={400} unoptimized />
                </div>
                <div className="product-copy">
                  <span className="category-tag">{game.category}</span>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <a className="store-link" href={game.href} target="_blank" rel="noopener noreferrer" aria-label={"View " + game.title + " on Google Play"}>
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="currentColor" aria-hidden="true"><path d="M1 1.5v16L15.5 9.5 1 1.5Z" /></svg>
                    Google Play<Icon name="external" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="games-note"><Icon name="game" />Explore each game on Google Play.</p>
        </div>
      </section>

      <section className="process-section section" aria-labelledby="process-title">
        <div className="container">
          <div className="process-heading"><p className="eyebrow">How we work</p><h2 id="process-title">Good collaboration. Clear next steps.</h2></div>
          <ol className="process-list">
            {steps.map((step, index) => (
              <li className="process-step" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact-banner">
            <div><p className="eyebrow">Contact our company</p><h2 id="contact-title">Let&apos;s plan your<br />TikTok advertising.</h2><p><span lang="zh-CN">{company.legalName}</span><br />Tell us about your campaign and business goals.</p></div>
            <div className="contact-action"><a className="button button-white" href={company.mailto}><Icon name="mail" />{company.email}<Icon name="external" /></a><span>Company website: {company.websiteLabel}</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
