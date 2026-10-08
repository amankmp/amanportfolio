import { useEffect, useState } from "react";
import "./index.css";

const github = "https://github.com/amankmp";
const sakshamPath = "https://github.com/omsinghethdev/SakshamPath";
const civicSense = github;
const instagram = "https://www.instagram.com/papapet.in/";

const creativeWorks = [
  ["/creative/movie-poster.jpg", "Movie poster", "Poster / Composite"],
  ["/creative/dreams.jpg", "Podcast visual", "Thumbnail / Social"],
  ["/creative/portraits.jpg", "Creator portraits", "Social / Thumbnail"],
  ["/creative/shorts-grid.jpg", "Short-form covers", "Shorts / Social"],
  ["/creative/hustling.jpg", "Podcast visual", "Thumbnail / Social"],
  ["/creative/winner.jpg", "AI concept", "Concept / Thumbnail"],
  ["/creative/daily-news.jpg", "News visual", "Editorial / Thumbnail"],
];

const pawfumeWorks = [
  ["/papapet/pawfume-orange.png", "Pawfume — Orange", "Papapet campaign"],
  ["/papapet/pawfume-lavender.png", "Pawfume — Lavender", "Papapet campaign"],
  ["/papapet/pawfume-lotus.png", "Pawfume — Lotus", "Papapet campaign"],
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function GrowthCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 2600;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 30000));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return <>{count.toLocaleString("en-IN")}{count >= 30000 ? "+" : ""}</>;
}

function ProjectArt({ type }) {
  if (type === "saksham") return <div className="project-art art-red"><div className="art-grid"/><div className="art-orbit o1"/><div className="art-orbit o2"/><div className="art-core">AI<small>CAREER</small></div><div className="float-card fc1">SKILLS → PATH</div><div className="float-card fc2">RESUME + JOBS</div></div>;
  return <div className="project-art art-gold"><div className="map-lines"/><div className="map-road r1"/><div className="map-road r2"/><div className="map-pin p1">!</div><div className="map-pin p2">!</div><div className="map-panel"><span>AI + MAP</span><strong>CIVIC ISSUE</strong></div></div>;
}

function Home() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  useReveal();

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <main id="top">
      <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />
      <section className="hero">
        <div className="hero-bg" />
        <nav className="nav">
          <a className="logo" href="#top">AMAN<span>.</span></a>
          <div className="nav-links">
            <a href="#papapet">Papapet</a><a href="#creative">Creative</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>
          </div>
          <a className="nav-available" href="mailto:ap7612394@gmail.com"><span/> Available</a>
        </nav>
        <div className="hero-inner">
          <div className="hero-copy reveal visible">
            <p className="eyebrow"><span className="eyebrow-dot"/> DEVELOPER · AI · WEB3 · CREATIVE</p>
            <h1 className="hero-title"><span className="title-line">I BUILD</span><span className="title-line title-electric"><span>DIGITAL</span> <span>THINGS</span></span><span className="title-line">THAT FEEL ALIVE.</span></h1>
            <p className="hero-sub">I'm Aman Patel — a developer and creative builder exploring AI, Web3, digital products, video and visual storytelling.</p>
            <div className="hero-actions"><a className="primary-btn" href="#work">Explore my work <span>↘</span></a><a className="text-btn" href="mailto:ap7612394@gmail.com">Let's talk ↗</a></div>
          </div>
          <div className="hero-visual reveal visible delay-1">
            <div className="hero-red-glow"/><div className="hero-ring ring-outer"/><div className="hero-ring ring-middle"/><div className="hero-ring ring-inner"/>
            <div className="portrait-frame"><div className="portrait-shine"/><img src="/aman.png" alt="Aman Patel" className="hero-portrait"/></div>
            <div className="hero-chip chip-ai">AI / API</div><div className="hero-chip chip-web3">WEB3</div><div className="hero-chip chip-code">REACT</div>
          </div>
        </div>
        <div className="scroll-line"><span/> SCROLL TO EXPLORE</div>
      </section>

      <div className="marquee"><div className="marquee-track"><span>DEVELOPMENT</span><b>✦</b><span>AI</span><b>✦</b><span>WEB3</span><b>✦</b><span>VIDEO</span><b>✦</b><span>GRAPHICS</span><b>✦</b><span>MARKETING</span><b>✦</b><span>DEVELOPMENT</span><b>✦</b><span>AI</span><b>✦</b><span>VIDEO</span></div></div>

      <section id="work" className="intro section-pad reveal"><div className="section-number">00</div><div className="two-worlds"><p className="eyebrow">A LITTLE ABOUT THE WORK</p><h2>Two sides.<br/><em>One portfolio.</em></h2><p className="intro-copy">My work lives in two clear worlds — content and technology. Choose the side you want to explore.</p><div className="side-grid"><a className="side-card content-side" href="#papapet"><span>01</span><div><small>CONTENT SIDE</small><strong>Create · Grow · Market</strong><p>Papapet, social media, video editing, graphics, campaigns and marketing.</p></div><b>↘</b></a><a className="side-card tech-side" href="#projects"><span>02</span><div><small>TECH SIDE</small><strong>Build · Solve · Experiment</strong><p>SakshamPath, Civic Sense, AI, Web3 and future development projects.</p></div><b>↘</b></a></div></div></section>

      <section id="papapet" className="papapet-section section-pad">
        <div className="section-head reveal"><div><span className="section-kicker">01 — PAPAPET</span><h2>From content to community.</h2></div><p>A social-media and creative experience built around real startup work.</p></div>
        <div className="growth-card reveal">
          <div className="growth-copy"><span className="mini-label">SOCIAL MEDIA GROWTH</span><h3>Building attention into a community.</h3><p>One of the strongest parts of my Papapet experience was working around social content, creative ideas and audience growth.</p><a href={instagram} target="_blank" rel="noreferrer" className="instagram-link">@papapet.in <span>↗</span></a></div>
          <div className="growth-number-wrap"><div className="growth-number"><GrowthCounter/></div><span>FOLLOWERS</span><div className="growth-line"><i/></div><div className="growth-stages"><span>0</span><span>5K</span><span>10K</span><span>20K</span><strong>30K+</strong></div></div>
        </div>
        <div className="papapet-story reveal"><div className="story-photo"><img src="/papapet/paws-event.jpeg" alt="Aman volunteering at a Paws event from the Papapet startup side"/><span>PAWS EVENT · ON-GROUND EXPERIENCE</span></div><div className="story-copy"><span className="mini-label">ON-GROUND EXPERIENCE</span><h3>Learning what pet parents actually care about.</h3><p>I volunteered at the Paws event from the Papapet startup side, interacted with pet parents and got first-hand exposure to how a pet-focused brand connects with its community offline.</p><div className="story-points"><span>COMMUNITY</span><span>EVENT</span><span>MARKETING</span></div></div></div>
        <div className="role-strip reveal"><div><span>MY ROLE</span><strong>Social Media Manager & Video Editor</strong></div><div><span>FOCUS</span><strong>Content · Campaigns · Growth</strong></div><div><span>BRAND</span><strong>Papapet</strong></div></div>
      </section>

      <section id="creative" className="creative-section section-pad">
        <div className="section-head reveal"><div><span className="section-kicker">02 — VIDEO EDITING & GRAPHICS</span><h2>Visual work, made to be seen.</h2></div><p>Video edits, YouTube work, thumbnails and campaign graphics shown as a visual reference of what I can create.</p></div>
        <div className="creative-feature reveal"><div><span className="creative-index">VIDEO EDITING</span><h3>From raw footage to a finished story.</h3><p>Pacing, storytelling, sound, motion and visual composition — built for digital content.</p></div><div className="creative-stat"><strong>06+</strong><span>video pieces & published edits</span></div></div>
        <div className="video-grid">
          <article className="media-card reveal"><div className="media-frame video-frame"><video controls preload="metadata" poster="/videos/video-edit-01.jpg"><source src="/videos/video-edit-01.mp4" type="video/mp4"/></video><span className="media-badge">VIDEO EDIT</span></div><div className="media-info"><div><span>VIDEO 01</span><h3>Vertical edit</h3></div><span>↗</span></div></article>
          <article className="media-card reveal delay-1"><div className="media-frame video-frame landscape-frame"><video controls preload="metadata" poster="/videos/video-edit-02.jpg"><source src="/videos/video-edit-02.mp4" type="video/mp4"/></video><span className="media-badge">VIDEO EDIT</span></div><div className="media-info"><div><span>VIDEO 02</span><h3>Story edit</h3></div><span>↗</span></div></article>
        </div>
        <div className="creative-subhead reveal"><div><span className="section-kicker">02A — YOUTUBE</span><h3>Published edits.</h3></div><span>PLAY DIRECTLY ON THE SITE</span></div>
        <div className="youtube-grid">{[["qFVhlYqKSSo","YouTube Edit 01"],["h9SIsLDXuWM","YouTube Edit 02"],["HISqQGMXAcY","YouTube Edit 03"],["dqZKnG9xwkA","YouTube Edit 04"]].map(([id,title],i)=><article className="media-card reveal" key={id}><div className="media-frame youtube-frame"><iframe src={`https://www.youtube.com/embed/${id}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div><div className="media-info"><div><span>YOUTUBE / 0{i+1}</span><h3>{title}</h3></div><a href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer">↗</a></div></article>)}</div>
        <div className="creative-subhead reveal"><div><span className="section-kicker">02B — GRAPHICS & CAMPAIGNS</span><h3>Work references.</h3></div><span>INCLUDING PAPAPET CAMPAIGN WORK</span></div>
        <div className="graphics-grid">{[...pawfumeWorks,...creativeWorks].map(([src,title,type],i)=><button className="graphic-card reveal" key={src} type="button" onClick={()=>window.open(src,"_blank")}><img src={src} alt={title} loading="lazy"/><span className="graphic-overlay"><small>{type}</small><strong>{title}</strong><i>↗</i></span></button>)}</div>
      </section>

      <section id="projects" className="projects-section section-pad">
        <div className="section-head reveal"><div><span className="section-kicker">03 — DEVELOPMENT PROJECTS</span><h2>Things I've built.</h2></div><p>Development work, separated from the creative portfolio. Click a project to open its GitHub.</p></div>
        <div className="dev-grid">
          <a className="dev-card reveal" href={sakshamPath} target="_blank" rel="noreferrer"><div className="dev-top"><span>01</span><span>AI · CAREER PLATFORM</span></div><ProjectArt type="saksham"/><div className="dev-info"><h3>SakshamPath</h3><p>An AI-assisted platform designed to help students discover skills, build a learning path, create resumes and find relevant jobs.</p><div className="tag-row"><span>React</span><span>AI</span><span>APIs</span><span>GitHub ↗</span></div></div></a>
          <a className="dev-card reveal delay-1" href={civicSense} target="_blank" rel="noreferrer"><div className="dev-top"><span>02</span><span>AI · CIVIC TECH</span></div><ProjectArt type="civic"/><div className="dev-info"><h3>Civic Sense</h3><p>A civic-tech concept focused on pothole detection, issue reporting and latitude/longitude-based mapping of reported problems.</p><div className="tag-row"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>AI</span><span>GitHub ↗</span></div></div></a>
        </div>
      </section>

      <section id="about" className="about-section section-pad"><div className="section-head reveal"><div><span className="section-kicker">04 — ABOUT ME</span><h2>Code, ideas & a little chaos.</h2></div></div><div className="about-grid"><div className="about-big reveal"><div className="about-gradient"/><span>AP</span><p>DEVELOPER<br/>CREATOR<br/>EXPLORER</p></div><div className="about-copy reveal delay-1"><p className="large-copy">I enjoy working at the intersection of <strong>technology and creativity.</strong></p><p>From AI-powered products and Web3 experiments to social content, video editing and digital marketing, I like learning by making things.</p><p>I'm interested in practical products, strong visual communication and experiences that feel simple to the person using them.</p></div></div></section>
      <section id="skills" className="skills-section section-pad"><div className="section-head reveal"><div><span className="section-kicker">05 — TOOLKIT</span><h2>What I work with.</h2></div></div><div className="skills-cloud reveal">{["HTML","CSS","JavaScript","React","Java","Git","GitHub","AI APIs","Web3","Blockchain","Smart Contracts","Video Editing","Content","Digital Marketing"].map((skill,i)=><span className={`skill-pill p${i%5}`} key={skill}>{skill}</span>)}</div></section>
      <section id="contact" className="contact-section section-pad reveal"><p className="section-kicker">06 — CONTACT</p><h2>Have an idea?<br/><span>Let's make it real.</span></h2><a className="contact-email" href="mailto:ap7612394@gmail.com">ap7612394@gmail.com ↗</a><div className="contact-links"><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aman-patel-4027812b0/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:ap7612394@gmail.com">Email ↗</a></div></section>
      <footer><span>© 2026 AMAN PATEL</span><span>BUILT WITH REACT · MADE WITH CURIOSITY</span></footer>
    </main>
  );
}

export default function App(){ return <Home/>; }
