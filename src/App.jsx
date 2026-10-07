import { useEffect, useState } from "react";
import "./index.css";

const projects = {
  sakshampath: {
    number: "01",
    type: "AI · CAREER PLATFORM",
    title: "SakshamPath",
    short:
      "An AI-powered career companion that turns a student's current skills into a practical path toward becoming job-ready.",
    overview:
      "SakshamPath connects skill discovery, personalized learning, resume building and job discovery into one guided experience.",
    problem:
      "Students often know they want a job but do not know what to learn first, which resources to trust, or how to turn learning into a strong resume.",
    idea:
      "A conversational AI assistant understands the student's starting point and creates a step-by-step route instead of giving a generic list of courses.",
    features: ["AI skill discovery", "Personalized learning path", "Resume building", "Job recommendations"],
    tech: "React · JavaScript · AI APIs · REST APIs",
    accent: "violet",
  },
  civic: {
    number: "02",
    type: "AI · CIVIC TECH",
    title: "Civic Sense",
    short:
      "A civic-tech concept that uses AI-assisted reporting to identify potholes and map problem locations.",
    overview:
      "Civic Sense makes local infrastructure problems easier to report, visualize and understand.",
    problem:
      "Small civic issues can remain invisible because reporting them is often inconvenient and scattered across different channels.",
    idea:
      "Combine simple reporting with location data and AI-assisted detection so a problem can become a visible point on a map.",
    features: ["Pothole detection", "Location mapping", "Issue reporting", "Visual problem map"],
    tech: "HTML · CSS · JavaScript · AI",
    accent: "lime",
  },
  papapet: {
    number: "03",
    type: "PET TECH · CREATIVE",
    title: "Papapet",
    short:
      "A pet-commerce brand experience focused on fast delivery, pet products and creative social-first marketing.",
    overview:
      "Papapet brings pet products and accessories closer to pet parents through a fast, friendly digital experience.",
    problem:
      "Pet parents need reliable access to everyday products, especially when something is needed immediately.",
    idea:
      "Make pet shopping feel quick and approachable while using strong creative content to build a community around pet parents.",
    features: ["Pet product discovery", "Fast delivery", "Social campaigns", "Brand content"],
    tech: "Web · Social Media · Video · Digital Marketing",
    accent: "orange",
  },
};

function ProjectVisual({ project }) {
  if (project.accent === "violet") {
    return (
      <div className="project-art art-violet">
        <div className="art-grid" />
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="art-core">
          <span>AI</span>
          <small>PATH</small>
        </div>
        <div className="floating-card card-one">SKILLS → PATH</div>
        <div className="floating-card card-two">RESUME + JOBS</div>
      </div>
    );
  }

  if (project.accent === "lime") {
    return (
      <div className="project-art art-lime">
        <div className="map-lines" />
        <div className="map-road road-one" />
        <div className="map-road road-two" />
        <div className="map-pin pin-one">!</div>
        <div className="map-pin pin-two">!</div>
        <div className="map-pin pin-three">!</div>
        <div className="map-panel">
          <span>LIVE MAP</span>
          <strong>03 ISSUES</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art art-orange">
      <div className="pet-sun" />
      <div className="pet-ring ring-one" />
      <div className="pet-ring ring-two" />
      <div className="pet-badge">PAW<br />PET</div>
      <div className="pet-pill">FAST · FRESH · RELIABLE</div>
      <div className="pet-bubble bubble-one">30 MIN</div>
      <div className="pet-bubble bubble-two">LOVE</div>
    </div>
  );
}

function ProjectPage({ slug, onBack }) {
  const project = projects[slug];

  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), [slug]);

  return (
    <main className="project-page">
      <div className={`page-glow page-glow-${project.accent}`} />
      <div className="project-page-top">
        <button className="back-btn" onClick={onBack}>← Back to work</button>
        <span>{project.number} / 03</span>
      </div>

      <section className="project-hero">
        <div className="project-copy reveal">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="project-lead">{project.short}</p>
        </div>
        <div className="project-page-art reveal delay-1">
          <ProjectVisual project={project} />
        </div>
      </section>

      <section className="case-grid">
        <div className="case-main">
          <span className="mini-label">OVERVIEW</span>
          <h2>{project.overview}</h2>
        </div>
        <div className="case-side">
          <div><span className="mini-label">PROBLEM</span><p>{project.problem}</p></div>
          <div><span className="mini-label">IDEA</span><p>{project.idea}</p></div>
        </div>
      </section>

      <section className="feature-section">
        <div>
          <span className="mini-label">WHAT'S INSIDE</span>
          <h2>Built around a real user journey.</h2>
        </div>
        <div className="feature-list">
          {project.features.map((feature, index) => (
            <div className="feature-row" key={feature}>
              <span>0{index + 1}</span>
              <strong>{feature}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="case-footer">
        <div><span className="mini-label">STACK / ROLE</span><p>{project.tech}</p></div>
        <button className="magnetic-btn" onClick={onBack}>View all projects ↗</button>
      </section>
    </main>
  );
}

function Home({ openProject }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />

      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-orb orb-red" />
        <div className="hero-orb orb-warm" />
        <div className="hero-orb orb-gold" />

        <nav className="nav">
          <a className="logo" href="#top">AMAN<span>.</span></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#creative">Creative</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-available" href="mailto:ap7612394@gmail.com">
            <span /> Available
          </a>
        </nav>

        <div className="hero-inner" id="top">
          <div className="hero-copy reveal visible">
            <p className="eyebrow"><span className="eyebrow-dot" /> DEVELOPER · AI · WEB3 · CREATIVE</p>
            <h1>
              I build
              <span className="gradient-text"> digital things</span>
              <br />that feel alive.
            </h1>
            <p className="hero-sub">
              I'm Aman Patel — a developer and creative builder exploring AI,
              Web3 and experiences that turn ideas into something people can use.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#work">Explore my work <span>↘</span></a>
              <a className="text-btn" href="mailto:ap7612394@gmail.com">Let's talk ↗</a>
            </div>
          </div>

          <div className="hero-visual reveal visible delay-1">
            <div className="hero-red-glow" />
            <div className="hero-ring ring-outer" />
            <div className="hero-ring ring-middle" />
            <div className="hero-ring ring-inner" />
            <div className="portrait-frame">
              <div className="portrait-shine" />
              <img src="/aman.png" alt="Aman Patel" className="hero-portrait" />
            </div>
            <div className="hero-chip chip-ai">AI / API</div>
            <div className="hero-chip chip-web3">WEB3</div>
            <div className="hero-chip chip-code">REACT</div>
            <div className="hero-star star-one">✦</div>
            <div className="hero-star star-two">✦</div>
          </div>
        </div>

        <div className="scroll-line"><span /> SCROLL TO EXPLORE</div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>DEVELOPMENT</span><b>✦</b><span>AI</span><b>✦</b><span>WEB3</span><b>✦</b><span>VIDEO</span><b>✦</b><span>CREATIVE</span><b>✦</b>
          <span>DEVELOPMENT</span><b>✦</b><span>AI</span><b>✦</b><span>WEB3</span><b>✦</b><span>VIDEO</span><b>✦</b><span>CREATIVE</span><b>✦</b>
        </div>
      </div>

      <section className="intro section-pad reveal">
        <div className="section-number">00</div>
        <div>
          <p className="eyebrow">A LITTLE ABOUT THE WORK</p>
          <h2>I don't want my portfolio to just <em>show</em> projects. I want it to show how I think.</h2>
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="section-head reveal">
          <div><span className="section-kicker">01 — SELECTED WORK</span><h2>Things I've built.</h2></div>
          <p>Click a project to explore the story behind it.</p>
        </div>

        <div className="projects-list">
          {Object.entries(projects).map(([slug, project]) => (
            <article
              className={`project-card project-${project.accent} reveal`}
              key={slug}
              onClick={() => openProject(slug)}
            >
              <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-content">
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p>{project.short}</p>
                  <button>View case study <span>↗</span></button>
                </div>
                <ProjectVisual project={project} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="creative" className="creative-section section-pad">
        <div className="section-head reveal">
          <div>
            <span className="section-kicker">02 — VIDEO & CREATIVE</span>
            <h2>Edits that tell a story.</h2>
          </div>
          <p>Selected video edits, YouTube work, thumbnails and visual design created for digital content.</p>
        </div>

        <div className="creative-feature reveal">
          <div className="creative-feature-copy">
            <span className="creative-index">01 / VIDEO EDITING</span>
            <h3>From raw footage to a finished story.</h3>
            <p>I work across short-form edits, storytelling, pacing, motion, sound and visual composition — built for attention without losing the story.</p>
            <div className="creative-tags"><span>EDITING</span><span>STORYTELLING</span><span>SHORT FORM</span></div>
          </div>
          <div className="creative-feature-line" />
          <div className="creative-feature-stat"><strong>02</strong><span>featured video edits</span></div>
        </div>

        <div className="video-grid">
          <article className="media-card local-video-card reveal">
            <div className="media-frame video-frame">
              <video controls preload="metadata" poster="/videos/video-edit-01.jpg">
                <source src="/videos/video-edit-01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="media-badge">LOCAL EDIT</span>
            </div>
            <div className="media-info"><div><span>VIDEO 01</span><h3>Vertical edit</h3></div><span className="media-arrow">↗</span></div>
          </article>

          <article className="media-card local-video-card reveal delay-1">
            <div className="media-frame video-frame landscape-frame">
              <video controls preload="metadata" poster="/videos/video-edit-02.jpg">
                <source src="/videos/video-edit-02.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span className="media-badge">LOCAL EDIT</span>
            </div>
            <div className="media-info"><div><span>VIDEO 02</span><h3>Story edit</h3></div><span className="media-arrow">↗</span></div>
          </article>
        </div>

        <div className="creative-subhead reveal">
          <div><span className="section-kicker">02A — YOUTUBE</span><h3>Published edits.</h3></div>
          <span>PLAY DIRECTLY ON THE SITE</span>
        </div>

        <div className="youtube-grid">
          {[
            ["qFVhlYqKSSo", "YouTube Edit 01"],
            ["h9SIsLDXuWM", "YouTube Edit 02"],
            ["HISqQGMXAcY", "YouTube Edit 03"],
            ["dqZKnG9xwkA", "YouTube Edit 04"],
          ].map(([id, title], index) => (
            <article className="media-card youtube-card reveal" key={id}>
              <div className="media-frame youtube-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="media-info"><div><span>YOUTUBE / 0{index + 1}</span><h3>{title}</h3></div><a className="media-arrow" href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer">↗</a></div>
            </article>
          ))}
        </div>

        <div className="creative-subhead reveal graphics-heading">
          <div><span className="section-kicker">02B — THUMBNAILS & GRAPHICS</span><h3>Visual work.</h3></div>
          <span>SELECTED CREATIVE OUTPUT</span>
        </div>

        <div className="graphics-grid">
          {[
            ["/creative/movie-poster.jpg", "Movie poster", "Poster / Composite"],
            ["/creative/dreams.jpg", "Podcast thumbnail", "Thumbnail / Social"],
            ["/creative/portraits.jpg", "Creator portraits", "Social / Thumbnail"],
            ["/creative/shorts-grid.jpg", "Short-form covers", "Shorts / Social"],
            ["/creative/hustling.jpg", "Podcast visual", "Thumbnail / Social"],
            ["/creative/winner.jpg", "AI concept", "Concept / Thumbnail"],
            ["/creative/daily-news.jpg", "News visual", "Editorial / Thumbnail"],
          ].map(([src, title, type], index) => (
            <button className={`graphic-card graphic-${index + 1} reveal`} key={src} type="button" onClick={() => window.open(src, "_blank")}>
              <img src={src} alt={title} loading="lazy" />
              <span className="graphic-overlay"><small>{type}</small><strong>{title}</strong><i>↗</i></span>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-pad">
        <div className="section-head reveal">
          <div><span className="section-kicker">03 — ABOUT ME</span><h2>Code, ideas & a little chaos.</h2></div>
        </div>
        <div className="about-grid">
          <div className="about-big reveal">
            <div className="about-gradient" />
            <span>AP</span>
            <p>DEVELOPER<br />CREATOR<br />EXPLORER</p>
          </div>
          <div className="about-copy reveal delay-1">
            <p className="large-copy">I enjoy working at the intersection of <strong>technology and creativity.</strong></p>
            <p>From building AI-powered products to creating social content and exploring Web3, I like learning by making things.</p>
            <p>I'm especially interested in products that solve practical problems and feel simple to the person using them.</p>
            <div className="stats">
              <div><strong>03</strong><span>Featured projects</span></div>
              <div><strong>05</strong><span>Creative + tech lanes</span></div>
              <div><strong>∞</strong><span>Things to learn</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section section-pad">
        <div className="section-head reveal">
          <div><span className="section-kicker">04 — TOOLKIT</span><h2>What I work with.</h2></div>
        </div>
        <div className="skills-cloud reveal">
          {["HTML", "CSS", "JavaScript", "React", "Java", "Git", "GitHub", "AI APIs", "Web3", "Blockchain", "Smart Contracts", "Video Editing", "Content", "Digital Marketing"].map((skill, i) => (
            <span className={`skill-pill p${i % 5}`} key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="journey section-pad reveal">
        <div className="journey-card">
          <div><span className="section-kicker">05 — CURRENTLY</span><h2>Learning in public.<br /><i>Building in private.</i></h2></div>
          <div className="journey-orbit"><span>AI</span><span>WEB3</span><span>BUILD</span></div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad reveal">
        <p className="section-kicker">06 — CONTACT</p>
        <h2>Have an idea?<br /><span>Let's make it real.</span></h2>
        <a className="contact-email" href="mailto:ap7612394@gmail.com">ap7612394@gmail.com ↗</a>
        <div className="contact-links">
          <a href="https://github.com/amankmp" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/aman-patel-4027812b0/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:ap7612394@gmail.com">Email ↗</a>
        </div>
      </section>

      <footer><span>© 2026 AMAN PATEL</span><span>BUILT WITH REACT · MADE WITH CURIOSITY</span></footer>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const match = route.match(/^#\/project\/(.+)$/);
  const slug = match?.[1];

  if (slug && projects[slug]) {
    return <ProjectPage slug={slug} onBack={() => (window.location.hash = "#work")} />;
  }

  return <Home openProject={(projectSlug) => (window.location.hash = `#/project/${projectSlug}`)} />;
}
