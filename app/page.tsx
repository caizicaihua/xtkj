import type { Metadata } from "next";
import Image from "next/image";
import Icon, { type IconName } from "./ui-icon";
import { company, games } from "./site-content";

export const metadata: Metadata = {
  title: "HengQingKeJi | Good Games. Great Connections.",
  description:
    "Explore our mobile game portfolio and discover how HengQingKeJi connects great games with their next players through thoughtful performance marketing.",
};

const services: { icon: IconName; title: string; description: string }[] = [
  { icon: "target", title: "Find your players", description: "Audience insights, channel planning, and hands-on user acquisition built around your game." },
  { icon: "sparkle", title: "Make creative count", description: "Fresh concepts, localized storytelling, and a clear rhythm for testing what connects." },
  { icon: "chart", title: "Keep getting better", description: "Thoughtful decisions on budgets, bidding, and campaigns, guided by real performance signals." },
  { icon: "bars", title: "See the whole picture", description: "Clear reporting that turns campaign results into useful context for your next decision." },
];

const values = [
  { title: "Games come first", text: "We start with the genre, the player, and what makes each game worth discovering." },
  { title: "A shared perspective", text: "Open conversations, clear reporting, and decisions your team can follow." },
  { title: "Learning that moves you forward", text: "Every test brings a question. Every result helps shape a better next step." },
];

const steps = [
  { title: "Understand", text: "Get to know your game, your audience, and the goal ahead." },
  { title: "Plan", text: "Choose the channels, creative ideas, and signals that matter." },
  { title: "Test", text: "Launch focused experiments and learn from how players respond." },
  { title: "Grow", text: "Turn the findings into a clearer plan for what comes next." },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />A playful spirit. A global outlook.</p>
            <h1 id="hero-title">Good games.<br /><span>Great connections.</span></h1>
            <p className="hero-description">We bring games and people closer. Explore our worlds of play, and discover a thoughtful approach to growing yours.</p>
            <div className="hero-actions">
              <a className="button" href="#games">Explore our games<Icon name="arrow" /></a>
              <a className="button button-secondary" href="#contact">Partner with us</a>
            </div>
            <div className="hero-note">
              <span className="note-icon"><Icon name="globe" /></span>
              <p>Based in China.<br /><strong>Connected to a world of possibilities.</strong></p>
            </div>
          </div>
          <div className="hero-showcase" aria-label="Explore our four games">
            <div className="showcase-glow" aria-hidden="true" />
            <div className="showcase-caption"><Icon name="game" />Your next little escape</div>
            <div className="showcase-grid">
              {games.map((game) => (
                <a className={"preview-tile " + game.color} href={"#game-" + game.slug} key={game.slug} aria-label={"Explore " + game.title}>
                  <div className="preview-art">
                    <Image src={game.icon} alt="" width={120} height={120} unoptimized loading="eager" />
                    <span className="preview-spark" aria-hidden="true">✦</span>
                  </div>
                  <div className="preview-caption">
                    <div><h2>{game.title}</h2><p>{game.category}</p></div>
                    <Icon name="external" />
                  </div>
                </a>
              ))}
            </div>
            <span className="showcase-footnote"><span className="status-dot" />Four worlds. Plenty to discover.</span>
          </div>
        </div>
      </section>

      <section className="games-section section" id="games" aria-labelledby="games-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Discover our games</p><h2 id="games-title">Find your kind of play.</h2></div>
            <p>From blooming gardens to underwater adventures,<br className="desktop-break" /> a little curiosity can take you a long way.</p>
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
          <p className="games-note"><Icon name="game" />Four distinct games. A shared love of play.</p>
        </div>
      </section>

      <section className="services-section section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">What we do</p><h2 id="services-title">A thoughtful path<br />from discovery to growth.</h2></div>
            <p>Practical marketing support for game teams.<br className="desktop-break" /> Built around your players, creative, and ambitions.</p>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <article className="service-card" key={service.title}>
                <span className="service-icon"><Icon name={service.icon} /></span>
                <h3>{service.title}</h3><p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">Meet HengQingKeJi</p>
            <h2 id="about-title">Curious about games.<br />Clear about growth.</h2>
            <p>We are an independent game growth studio based in China, working with game publishers and teams with a global perspective.</p>
            <p>Our work connects the creative side of play with the practical side of performance. We listen closely, test with purpose, and build a shared understanding of what works.</p>
            <a className="text-link" href="#contact">Get to know us<Icon name="arrow" /></a>
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
            <div><p className="eyebrow">Let&apos;s make something happen</p><h2 id="contact-title">A new chapter starts<br />with a conversation.</h2><p>Tell us about your game. We&apos;ll take it from there.</p></div>
            <div className="contact-action"><a className="button button-white" href={company.mailto}><Icon name="mail" />{company.email}<Icon name="external" /></a><span>Open to global collaboration</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
