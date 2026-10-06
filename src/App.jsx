import "./index.css";

function App() {
  return (
    <div className="site">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="logo">AMAN.</a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <main>

        <section className="hero">
          <div className="hero-left">

            <div className="eyebrow">
              DEVELOPER · AI · WEB3 · CREATIVE
            </div>

            <h1>
              Hi, I'm
              <br />
              Aman Patel<span>.</span>
            </h1>

            <p className="hero-subtitle">
              I build digital products, experiment with AI
              and explore Web3.
            </p>

            <p className="hero-description">
              Developer and creative technologist focused on
              turning ideas into useful digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button-dark">
                View my work
              </a>

              <a href="#contact" className="button button-light">
                Let's talk
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/amankmp"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="mailto:ap7612394@gmail.com">
                Email ↗
              </a>
            </div>

          </div>

          <div className="hero-right">
            <div className="hero-orbit">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>

              <div className="orbit-core">
                AP
              </div>
            </div>
          </div>
        </section>


        {/* WORK */}
        <section id="work" className="section work-section">

          <div className="section-label">
            01 — SELECTED WORK
          </div>

          <div className="work-heading">
            <h2>Things I've been building.</h2>

            <p>
              A mix of development, AI, creative work and
              experiments that turn ideas into something real.
            </p>
          </div>


          <div className="work-list">

            {/* SAKSHAMPATH */}
            <article className="project-card">

              <div className="project-visual sakshampath-visual">

                <div className="visual-top">
                  <span>SAKSHAMPATH</span>
                  <span>01</span>
                </div>

                <div className="visual-content">

                  <div className="visual-window">

                    <div className="window-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="window-body">
                      <small>AI CAREER PLATFORM</small>

                      <strong>
                        Find your path.
                      </strong>

                      <div className="visual-line line-one"></div>
                      <div className="visual-line line-two"></div>
                      <div className="visual-line line-three"></div>

                      <div className="visual-button">
                        START JOURNEY
                      </div>
                    </div>

                  </div>

                </div>

              </div>


              <div className="project-info">

                <div className="project-number">
                  01
                </div>

                <div className="project-details">

                  <div className="project-category">
                    AI · EDTECH · CAREER
                  </div>

                  <h3>SakshamPath</h3>

                  <p>
                    An AI-powered platform designed to help
                    students discover skills, build learning
                    paths, create resumes and find opportunities.
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>AI</span>
                    <span>APIs</span>
                    <span>Career Tech</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

            </article>


            {/* CIVIC SENSE */}
            <article className="project-card">

              <div className="project-visual civic-visual">

                <div className="map-grid"></div>

                <div className="map-ui">

                  <div className="map-header">
                    <span>CIVIC SENSE</span>
                    <span>LIVE MAP</span>
                  </div>

                  <div className="map-points">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                  <div className="map-card">
                    <small>REPORTED ISSUE</small>
                    <strong>Pothole detected</strong>
                    <span>Location identified</span>
                  </div>

                </div>

              </div>


              <div className="project-info">

                <div className="project-number">
                  02
                </div>

                <div className="project-details">

                  <div className="project-category">
                    AI · CIVIC TECH · WEB
                  </div>

                  <h3>Civic Sense</h3>

                  <p>
                    A civic-tech concept focused on identifying
                    potholes and mapping reported problem
                    locations using technology and AI.
                  </p>

                  <div className="project-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>AI</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

            </article>


            {/* PAPAPET */}
            <article className="project-card">

              <div className="project-visual papapet-visual">

                <div className="papapet-word">
                  PAPAPET
                </div>

                <div className="pet-circle">
                  <span>CREATIVE</span>
                </div>

                <div className="papapet-bottom">
                  <span>CONTENT</span>
                  <span>MARKETING</span>
                  <span>VIDEO</span>
                </div>

              </div>


              <div className="project-info">

                <div className="project-number">
                  03
                </div>

                <div className="project-details">

                  <div className="project-category">
                    CREATIVE · MARKETING · VIDEO
                  </div>

                  <h3>Papapet</h3>

                  <p>
                    Creative and marketing work across social
                    media, video editing, campaigns and digital
                    content for a pet-focused startup.
                  </p>

                  <div className="project-tags">
                    <span>Video Editing</span>
                    <span>Content</span>
                    <span>Marketing</span>
                    <span>Social Media</span>
                  </div>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

            </article>

          </div>

        </section>


        {/* ABOUT */}
        <section id="about" className="section about">

          <div className="section-label">
            02 — ABOUT ME
          </div>

          <div className="about-intro">
            <h2>
              I like building things
              <br />
              that feel <em>useful.</em>
            </h2>
          </div>

          <div className="about-details">

            <div>
              <span className="about-title">
                WHO I AM
              </span>

              <p>
                I'm Aman — a developer, creative and
                technology enthusiast who enjoys turning
                ideas into real digital experiences.
              </p>
            </div>

            <div>
              <span className="about-title">
                WHAT I DO
              </span>

              <p>
                I work across frontend development,
                AI-powered products, creative content,
                video editing and digital marketing.
              </p>
            </div>

            <div>
              <span className="about-title">
                CURRENTLY EXPLORING
              </span>

              <p>
                AI systems, APIs, Web3, blockchain,
                smart contracts and better ways to
                build products.
              </p>
            </div>

          </div>

        </section>


        {/* SKILLS */}
        <section id="skills" className="section skills-section">

          <div className="section-label">
            03 — SKILLS
          </div>

          <div className="skills-heading">
            <h2>
              Tools I use.
            </h2>

            <p>
              A growing toolkit across technology and
              creative work.
            </p>
          </div>


          <div className="skills-grid">

            <div className="skill-block">
              <span>01</span>

              <h3>Development</h3>

              <p>
                HTML · CSS · JavaScript · React · Java
                · Git · GitHub
              </p>
            </div>


            <div className="skill-block">
              <span>02</span>

              <h3>AI & APIs</h3>

              <p>
                AI-powered applications · APIs ·
                AI integrations · experimentation
              </p>
            </div>


            <div className="skill-block">
              <span>03</span>

              <h3>Web3 & Blockchain</h3>

              <p>
                Blockchain fundamentals · Web3 ·
                Smart Contracts · DApps
              </p>
            </div>


            <div className="skill-block">
              <span>04</span>

              <h3>Creative</h3>

              <p>
                Video Editing · Content Creation ·
                Social Media · Digital Marketing
              </p>
            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="contact-section">

          <div className="section-label">
            04 — CONTACT
          </div>

          <div className="contact-content">

            <h2>
              Have an idea?
              <br />
              Let's make it real.
            </h2>

            <a
              href="mailto:ap7612394@gmail.com"
              className="contact-email"
            >
              ap7612394@gmail.com ↗
            </a>

            <div className="contact-links">

              <a
                href="https://github.com/amankmp"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="mailto:ap7612394@gmail.com">
                Email ↗
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <span>
          © 2026 Aman Patel
        </span>

        <span>
          Built with React
        </span>

      </footer>

    </div>
  );
}

export default App;