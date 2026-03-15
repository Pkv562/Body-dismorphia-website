"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { posts } from "@/data/posts";
import { vlogs } from "@/data/vlogs";

const mirrorPortraitSets = {
  current: {
    realSrc: "/mirror-real.svg",
    filteredSrc: "/mirror-filtered.svg",
    leftLabel: "Real Self",
    rightLabel: "Filtered Self",
  },
  test: {
    realSrc: "/filipino-beauty.jpg",
    filteredSrc: "/white-beauty.webp",
    leftLabel: "Reality",
    rightLabel: "Expectation",
  },
} as const;

export function HomePage() {
  const isBlogModalEnabled = true;
  const activeMirrorPortraits = mirrorPortraitSets.test;
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);
  const modalOverlayRef = useRef<HTMLDivElement>(null);

  const selectedPost = useMemo(() => posts[currentPost], [currentPost]);

  useEffect(() => {
    const onScroll = () => {
      setIsNavScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
      if (event.key === "ArrowRight") {
        setCurrentPost((prev) => Math.min(posts.length - 1, prev + 1));
      }
      if (event.key === "ArrowLeft") {
        setCurrentPost((prev) => Math.max(0, prev - 1));
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    modalOverlayRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPost, isModalOpen]);

  const openPost = (index: number) => {
    setCurrentPost(index);
    if (isBlogModalEnabled) {
      setIsModalOpen(true);
    }
  };

  const openVlog = () => {
    window.alert("Vlog link coming soon! This video episode will be available on YouTube shortly. Stay tuned!");
  };

  return (
    <>
      <nav id="mainNav" className={isNavScrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          <span />
          The Mirror We Inherited
        </a>
        <ul className="nav-links">
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#vlogs">Vlogs</a>
          </li>
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-line-top" />
        <div className="hero-content">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">A 4-Part Series - Filipino Youth and Mental Health</p>
              <h1 className="hero-title">
                Shattering
                <br />
                the <em>Mirror</em>
              </h1>
              <p className="hero-subtitle">
                Redefining the Filipino reflection - understanding the cultural, digital, and domestic roots of body dysmorphia.
              </p>
              <div className="hero-cta-row">
                <a href="#blog" className="btn-primary">
                  Read the Series -&gt;
                </a>
                <a href="#vlogs" className="btn-ghost">
                  Watch the Vlogs
                </a>
              </div>
            </div>

            <div className="hero-mirror-wrap" aria-hidden="true">
              <div className="mirror-frame">
                <div className="mirror-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="portrait portrait-real" src={activeMirrorPortraits.realSrc} alt="" draggable={false} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="portrait portrait-filtered" src={activeMirrorPortraits.filteredSrc} alt="" draggable={false} />
                  <div className="mirror-split-line" />
                  <div className="mirror-glass-fx" />
                </div>
                <div className="mirror-caption-row">
                  <span>{activeMirrorPortraits.leftLabel}</span>
                  <span>{activeMirrorPortraits.rightLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stat-bar">
          <div className="hero-stat">
            <div className="stat-number">52%</div>
            <div className="stat-label">of Filipino youth aged 18-24 experience harmful body image effects on life satisfaction</div>
          </div>
          <div className="hero-stat">
            <div className="stat-number">4+</div>
            <div className="stat-label">hours per day - the average Filipino social media usage, highest globally</div>
          </div>
          <div className="hero-stat">
            <div className="stat-number">90s</div>
            <div className="stat-label">of appearance-ideal short-form content can significantly decrease body satisfaction</div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="blog">
        <div className="section">
          <div className="section-header reveal">
            <div>
              <p className="section-tag">The Mirror We Inherited</p>
              <h2 className="section-title">
                Blog <em>Series</em>
              </h2>
            </div>
            <p className="section-desc">
              Four deep-dives into the crisis of body image anxiety among Filipino youth - from historical roots to concrete solutions.
            </p>
          </div>

          <div className="blog-grid">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className={`blog-card reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ""}`}
                onClick={() => openPost(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openPost(index);
                  }
                }}
              >
                <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="card-tag">{post.cardTag}</div>
                <h3 className="card-title">
                  {post.title} - {post.subtitle}
                </h3>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-meta">
                  <span className="card-time">{post.date}</span>
                  <div className="card-arrow">-&gt;</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="vlogs">
        <div className="section">
          <div className="section-header reveal">
            <div>
              <p className="section-tag">Video Series</p>
              <h2 className="section-title">
                Watch the <em>Vlogs</em>
              </h2>
            </div>
            <p className="section-desc">
              The companion video series to our written posts. Each episode brings the research to life with conversation and lived
              experience.
            </p>
          </div>

          <div className="vlog-grid">
            {vlogs.map((vlog, index) => (
              <div
                key={vlog.id}
                className={`vlog-card reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ""}`}
                onClick={openVlog}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openVlog();
                  }
                }}
              >
                <div className="vlog-thumb">
                  <div className="vlog-thumb-bg" />
                  <div className="vlog-thumb-pattern" />
                  <span className="vlog-ep-num">{vlog.epNum}</span>
                  <div className="play-btn">Play</div>
                </div>
                <div className="vlog-info">
                  <div className="vlog-ep-tag">{vlog.epTag}</div>
                  <div className="vlog-title">{vlog.title}</div>
                  <div className="vlog-desc">{vlog.desc}</div>
                  <div className="vlog-placeholder-note">Video link coming soon</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="research">
        <div className="section">
          <div className="section-header reveal">
            <div>
              <p className="section-tag">Academic Foundation</p>
              <h2 className="section-title">
                The <em>Research</em>
              </h2>
            </div>
            <p className="section-desc">
              This series is grounded in peer-reviewed studies, national statistics, and clinical analysis of BDD among Filipino youth.
            </p>
          </div>

          <div className="research-layout">
            <div className="research-text reveal">
              <h3>A Comprehensive Analysis of Body Dysmorphia and Aesthetic Anxiety Among Filipino Youth</h3>
              <p>
                The current Philippine social setting is experiencing an underlying crisis of self-understanding, wherein the convergence
                of colonial legacy, digital hyperconnectivity, and conventional household values has created an environment conducive to
                body image concerns and Body Dysmorphic Disorder (BDD).
              </p>
              <div className="pull-quote">
                <blockquote>
                  &quot;The objective is to create a society where the Filipino child looks in the mirror and does not see a list of
                  flaws to be corrected, but rather a reflection of a heritage that is diverse, resilient, and beautiful in and of
                  itself.&quot;
                </blockquote>
                <cite>- The Mirror of a Nation, 2026 Research Paper</cite>
              </div>
              <p>
                The research traces the crisis across four dimensions: the historical architecture of the Mestiza ideal, the digital
                panopticon of social media, domestic puna culture, and institutionalized discrimination in employment practices.
              </p>
            </div>

            <div className="data-points reveal reveal-delay-1">
              <div className="data-point">
                <div className="data-point-num">52%</div>
                <div className="data-point-info">
                  <div className="data-point-label">
                    of Filipinos aged 18-24 report harmful effects on life satisfaction from body image concerns
                  </div>
                  <div className="data-point-source">2025 National Survey</div>
                </div>
              </div>
              <div className="data-point">
                <div className="data-point-num">47.5%</div>
                <div className="data-point-info">
                  <div className="data-point-label">
                    of variability in BDD symptoms among 16-18 year olds can be explained by body image and self-esteem
                  </div>
                  <div className="data-point-source">Social Media and BDD Study, PH</div>
                </div>
              </div>
              <div className="data-point">
                <div className="data-point-num">$9.67B</div>
                <div className="data-point-info">
                  <div className="data-point-label">value of the skin whitening industry in the Philippines</div>
                  <div className="data-point-source">Philippine Beauty Market Data</div>
                </div>
              </div>
              <div className="data-point">
                <div className="data-point-num">4+ hrs</div>
                <div className="data-point-info">
                  <div className="data-point-label">daily social media usage by average Filipinos, among the highest worldwide</div>
                  <div className="data-point-source">Global Social Media Index</div>
                </div>
              </div>
              <div className="data-point">
                <div className="data-point-num">12-13</div>
                <div className="data-point-info">
                  <div className="data-point-label">typical age of BDD onset among Filipino adolescents</div>
                  <div className="data-point-source">Developmental Psychology Research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="resources">
        <div className="resources-bg">
          <div className="section">
            <div className="section-header reveal">
              <div>
                <p className="section-tag">Do Not Be Afraid to Ask for Help</p>
                <h2 className="section-title">
                  Mental Health <em>Resources</em>
                </h2>
              </div>
              <p className="section-desc">
                Philippine organizations dedicated to supporting those with body image and BDD concerns. Using them is strength, not
                weakness.
              </p>
            </div>

            <div className="crisis-banner reveal">
              <div className="crisis-banner-text">
                <h4>If you are in crisis right now</h4>
                <p>
                  Contact the <strong>National Center for Mental Health (NCMH)</strong> at <strong>0917-899-USAP (8727)</strong> for free
                  24/7 crisis intervention and consultation.
                </p>
              </div>
            </div>

            <div className="resources-grid">
              <div className="resource-card reveal">
                <div className="resource-org">Crisis and Consultation</div>
                <div className="resource-contact">National Center for Mental Health (NCMH)</div>
                <div className="resource-desc">0917-899-USAP (8727) - 24/7 crisis intervention and free consultation.</div>
              </div>
              <div className="resource-card reveal reveal-delay-1">
                <div className="resource-org">Youth-Focused</div>
                <div className="resource-contact">In Touch Community Services</div>
                <div className="resource-desc">+63 2 8893 7603 - Specialized youth-focused counseling and crisis support.</div>
              </div>
              <div className="resource-card reveal reveal-delay-2">
                <div className="resource-org">Psychosocial Support</div>
                <div className="resource-contact">Philippine Mental Health Association</div>
                <div className="resource-desc">0917-565-2036 - Online psychosocial support and therapy resources.</div>
              </div>
              <div className="resource-card reveal reveal-delay-3">
                <div className="resource-org">Digital Advocacy</div>
                <div className="resource-contact">MentalHealthPH</div>
                <div className="resource-desc">mentalhealthph.org - Digital directory of mental health professionals and resources.</div>
              </div>
              <div className="resource-card reveal reveal-delay-1">
                <div className="resource-org">University Students</div>
                <div className="resource-contact">UPD PsychServ</div>
                <div className="resource-desc">psycserv.upd@up.edu.ph - Free counseling services for university students.</div>
              </div>
              <div className="resource-card reveal reveal-delay-2">
                <div className="resource-org">Crisis Helpline</div>
                <div className="resource-contact">Natasha Goulbourn Foundation</div>
                <div className="resource-desc">0917-899-USAP (8727) - Crisis helpline and mental health education support.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>The Mirror We Inherited</h3>
            <p>
              A research-based blog and vlog series addressing body dysmorphia and body image anxiety among Filipino youth.
            </p>
          </div>
          <div className="footer-col">
            <h4>Series</h4>
            <ul>
              {posts.map((post, index) => (
                <li key={post.slug}>
                  <button type="button" className="text-link" onClick={() => openPost(index)}>
                    {String(index + 1).padStart(2, "0")} - {post.tag}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Topics</h4>
            <ul>
              <li>
                <a href="#blog">Body Dysmorphic Disorder</a>
              </li>
              <li>
                <a href="#blog">Colonial Mentality</a>
              </li>
              <li>
                <a href="#blog">Puna Culture</a>
              </li>
              <li>
                <a href="#blog">Digital Well-being</a>
              </li>
              <li>
                <a href="#resources">Mental Health Resources</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>This series is based on peer-reviewed research including national statistics and clinical studies.</p>
          <div className="footer-cta-tag">Do not be afraid to ask for help.</div>
        </div>
      </footer>

      <div
        ref={modalOverlayRef}
        className={`modal-overlay${isModalOpen ? " open" : ""}`}
        id="modalOverlay"
        onClick={(event) => {
          if (event.currentTarget === event.target) {
            setIsModalOpen(false);
          }
        }}
      >
        <div className="modal-panel" id="modalPanel">
          <div className="modal-header">
            <span className="modal-series">The Mirror We Inherited - Series</span>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} type="button" aria-label="Close modal">
              X
            </button>
          </div>

          <div className="modal-post-tag">{selectedPost.tag}</div>
          <h2 className="modal-title">{selectedPost.title}</h2>
          <p className="modal-subtitle">{selectedPost.subtitle}</p>
          <div className="modal-meta-row">
            <span className="modal-meta-item">Read: {selectedPost.readTime}</span>
            <span className="modal-meta-item">Date: {selectedPost.date}</span>
            <span className="modal-meta-item">
              Series Post {currentPost + 1} of {posts.length}
            </span>
          </div>
          <div className="modal-body">{selectedPost.body}</div>

          <div className="modal-nav">
            <button
              className="modal-nav-btn"
              onClick={() => setCurrentPost((prev) => Math.max(0, prev - 1))}
              disabled={currentPost === 0}
              type="button"
            >
              Previous
            </button>
            <span className="modal-series-counter">
              {currentPost + 1} of {posts.length}
            </span>
            <button
              className="modal-nav-btn"
              onClick={() => setCurrentPost((prev) => Math.min(posts.length - 1, prev + 1))}
              disabled={currentPost === posts.length - 1}
              type="button"
            >
              Next
            </button>
          </div>

          <div className="modal-page-link-wrap">
            <Link href={`/blog/${selectedPost.slug}`} className="btn-ghost">
              Open Full Blog Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
