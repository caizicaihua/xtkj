import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XingTuiKeJi | Game Growth, Measured",
  description:
    "XingTuiKeJi helps game teams plan, test, and optimize performance marketing campaigns across global mobile channels.",
};

const services = [
  {
    number: "01",
    title: "User acquisition",
    text: "Channel planning and campaign operations built around the audiences that matter to your game.",
  },
  {
    number: "02",
    title: "Creative intelligence",
    text: "A practical testing rhythm for concepts, formats, hooks, and localized creative variations.",
  },
  {
    number: "03",
    title: "Performance optimization",
    text: "Budget, bidding, and campaign structure decisions informed by clear performance signals.",
  },
  {
    number: "04",
    title: "Measurement support",
    text: "Reporting frameworks that connect delivery data with the growth decisions your team needs to make.",
  },
];

const principles = [
  ["Game-first", "We begin with the game's genre, market, and player journey."],
  ["Test with intent", "Every experiment starts with a clear creative or audience question."],
  ["Operate transparently", "Clear reporting, shared context, and accountable campaign decisions."],
];

const featuredGames = [
  {
    title: "Petal Panic Drift",
    detail:
      "A floral match-3 puzzle game with collectible blooms, limited moves, and obstacle-clearing level goals.",
    href: "https://play.google.com/store/apps/details?id=com.HK7377Game.PetalPanicDrift",
    theme: "petal-panic",
    short: "PP",
    image: "/petal-panic-drift.png",
    promo: "/petal-panic-drift-promo.png",
  },
  {
    title: "Prism Cascade",
    detail:
      "Swap adjacent gems to form lines of three or more, clear objectives, and unlock new content and rewards.",
    href: "https://play.google.com/store/apps/details?id=com.silvestrepa.prismcascade",
    theme: "prism-cascade",
    short: "PC",
    image: "/prism-cascade.png",
    promo: "/prism-cascade-promo.png",
  },
  {
    title: "Pipe Dasher",
    detail:
      "A 360-degree 3D ring-track runner controlled by tilting your device to navigate left and right.",
    href: "https://play.google.com/store/apps/details?id=com.silvestrepa.pipedasher",
    theme: "pipe-dasher",
    short: "PD",
    image: "/pipe-dasher.png",
    promo: "/pipe-dasher-promo.png",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="signal signal-one" aria-hidden="true" />
        <div className="signal signal-two" aria-hidden="true" />
        <div className="hero-dashboard" aria-hidden="true">
          <div className="dashboard-topline">
            <span>LIVE CAMPAIGN VIEW</span>
            <span className="dashboard-status">ACTIVE</span>
          </div>
          <div className="dashboard-columns">
            <div className="dashboard-panel panel-chart">
              <span className="mini-label">CREATIVE TESTING</span>
              <div className="chart-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="chart-line" />
            </div>
            <div className="dashboard-panel panel-game">
              <span className="mini-label">GAMEPLAY HOOK</span>
              <div className="game-stage">
                <div className="game-path" />
                <span className="game-unit unit-a" />
                <span className="game-unit unit-b" />
                <span className="game-unit unit-c" />
              </div>
            </div>
            <div className="dashboard-panel panel-score">
              <span className="mini-label">MARKET SIGNAL</span>
              <strong>READY</strong>
              <span>Plan / Test / Learn</span>
            </div>
          </div>
        </div>

        <header className="site-header">
          <a className="brand" href="#top" aria-label="XingTuiKeJi home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>XingTuiKeJi</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#games">Games</a>
            <a href="#approach">Approach</a>
            <a href="#privacy">Privacy</a>
          </nav>
          <a className="header-contact" href="#contact">Contact</a>
        </header>

        <div className="hero-content">
          <p className="eyebrow">PERFORMANCE MARKETING FOR GAMES</p>
          <h1>Build player growth with a sharper signal.</h1>
          <p className="hero-copy">
            XingTuiKeJi supports game teams with campaign planning, creative testing,
            and performance optimization for global growth.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start a conversation</a>
            <a className="text-link" href="#services">Explore our services <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-footer">
          <span>Independent growth partner</span>
          <span>China-based, globally minded</span>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker">WHAT WE DO</div>
        <div className="intro-layout">
          <h2>Advertising operations designed around how games actually grow.</h2>
          <p>
            We work with game publishers and studios to turn paid media into a disciplined
            learning system. The focus is practical: find the right audiences, give them
            a relevant reason to engage, and improve the next decision with evidence.
          </p>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div className="section-kicker">OUR SERVICES</div>
          <p>Focused support across the campaign lifecycle.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-games section" id="games">
        <div className="section-heading games-heading">
          <div>
            <div className="section-kicker">FEATURED GAMES</div>
            <h2>Games live on Google Play.</h2>
          </div>
          <p>Explore three mobile titles in our current portfolio.</p>
        </div>
        <div className="games-grid">
          {featuredGames.map((game) => (
            <article className="game-card" key={game.title}>
              <div className={`game-art ${game.theme}${game.image ? " has-image" : ""}${game.promo ? " has-promo" : ""}`} aria-hidden="true">
                {game.promo && <img className="game-promo" src={game.promo} alt="" />}
                {game.image ? (
                  <img className="game-icon" src={game.image} alt="" />
                ) : (
                  <>
                    <span className="game-art-code">{game.short}</span>
                    <i className="art-piece art-one" />
                    <i className="art-piece art-two" />
                    <i className="art-piece art-three" />
                  </>
                )}
              </div>
              <div className="game-card-copy">
                <p className="game-meta">AVAILABLE ON GOOGLE PLAY</p>
                <h3>{game.title}</h3>
                <p>{game.detail}</p>
                <a href={game.href} target="_blank" rel="noreferrer">
                  View on Google Play <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="approach-visual" aria-hidden="true">
          <div className="loop loop-one" />
          <div className="loop loop-two" />
          <div className="loop-center">01<br /><span>BRIEF</span></div>
          <div className="loop-label label-plan">02 / PLAN</div>
          <div className="loop-label label-test">03 / TEST</div>
          <div className="loop-label label-learn">04 / LEARN</div>
        </div>
        <div className="approach-copy">
          <div className="section-kicker">HOW WE WORK</div>
          <h2>A calm operating system for a fast-moving market.</h2>
          <p>
            We set a clear objective, establish the signal to watch, test the variables
            that can change the outcome, then convert learnings into the next operating plan.
          </p>
          <a className="text-link dark-link" href="#contact">Discuss your launch <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="principles section">
        <div className="section-kicker">WORKING PRINCIPLES</div>
        <div className="principle-list">
          {principles.map(([title, description], index) => (
            <article className="principle" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy section" id="privacy">
        <div className="privacy-layout">
          <div>
            <div className="section-kicker">PRIVACY</div>
            <h2>Data practices built for clarity.</h2>
          </div>
          <div className="privacy-copy">
            <p>
              XingTuiKeJi processes business contact details and campaign-related data only
              where needed to provide requested services, operate campaigns, and communicate
              with our clients. We do not sell personal information.
            </p>
            <p>
              We apply reasonable administrative and technical safeguards, retain information
              only as long as necessary for the stated purpose or legal obligations, and
              respond to applicable data access or deletion requests.
            </p>
            <p>
              For privacy questions or requests, contact <a href="mailto:ad@bluyb.xyz">ad@bluyb.xyz</a>.
            </p>
            <p className="privacy-date">Last updated: July 10, 2026</p>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-topline">XINGTUIKEJI / GAME GROWTH</div>
        <h2>Let&apos;s make the next campaign more useful.</h2>
        <a className="contact-email" href="mailto:ad@bluyb.xyz">ad@bluyb.xyz</a>
        <div className="contact-meta">
          <span>Business location: China</span>
          <span>Available for global collaboration</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>XingTuiKeJi</span>
        </a>
        <span>© 2026 XingTuiKeJi. All rights reserved.</span>
        <a href="#privacy">Privacy Policy</a>
      </footer>
    </main>
  );
}
