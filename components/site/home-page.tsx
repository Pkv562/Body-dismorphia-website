"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { posts } from "@/data/posts";
import { vlogs } from "@/data/vlogs";

type BlogComment = {
  id: string;
  name: string;
  content: string;
  createdAt: string;
};

const COMMENT_STORAGE_KEY = "mirror-blog-comments";

function getYouTubeId(url: string): string | null {
  const shortMatch = url.match(/youtu\.be\/([\w-]{11})/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([\w-]{11})/);
  if (longMatch) return longMatch[1];
  return null;
}

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
  const isSingleBlog = posts.length === 1;
  const isSingleVlog = vlogs.length === 1;
  const [playingVlogId, setPlayingVlogId] = useState<string | null>(null);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);
  const [commentsBySlug, setCommentsBySlug] = useState<Record<string, BlogComment[]>>({});
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const modalOverlayRef = useRef<HTMLDivElement>(null);

  const selectedPost = useMemo(() => posts[currentPost], [currentPost]);
  const selectedComments = useMemo(() => commentsBySlug[selectedPost.slug] ?? [], [commentsBySlug, selectedPost.slug]);

  const persistComments = (nextComments: Record<string, BlogComment[]>) => {
    setCommentsBySlug(nextComments);
    try {
      window.localStorage.setItem(COMMENT_STORAGE_KEY, JSON.stringify(nextComments));
    } catch {
      // Ignore storage failures to avoid breaking modal UX.
    }
  };

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

  useEffect(() => {
    try {
      const rawComments = window.localStorage.getItem(COMMENT_STORAGE_KEY);
      if (!rawComments) return;

      const parsedComments = JSON.parse(rawComments) as Record<string, BlogComment[]>;
      if (parsedComments && typeof parsedComments === "object") {
        setCommentsBySlug(parsedComments);
      }
    } catch {
      setCommentsBySlug({});
    }
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    setCommentText("");
  }, [currentPost, isModalOpen]);

  const openPost = (index: number) => {
    setCurrentPost(index);
    if (isBlogModalEnabled) {
      setIsModalOpen(true);
    }
  };

  const openVlog = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedContent = commentText.trim();
    if (!normalizedContent) return;

    const normalizedName = commentName.trim() || "Anonymous";
    const newComment: BlogComment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: normalizedName,
      content: normalizedContent,
      createdAt: new Date().toISOString(),
    };

    const postComments = commentsBySlug[selectedPost.slug] ?? [];
    const nextComments = {
      ...commentsBySlug,
      [selectedPost.slug]: [newComment, ...postComments],
    };

    persistComments(nextComments);
    setCommentText("");
  };

  const handleDeleteComment = (commentId: string) => {
    const postComments = commentsBySlug[selectedPost.slug] ?? [];
    const updatedPostComments = postComments.filter((comment) => comment.id !== commentId);
    const nextComments = {
      ...commentsBySlug,
      [selectedPost.slug]: updatedPostComments,
    };

    persistComments(nextComments);
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
              <p className="hero-eyebrow">Featured Blog and Vlog - Filipino Youth and Mental Health</p>
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
                  Read the Blog -&gt;
                </a>
                <a href="#vlogs" className="btn-ghost">
                  Watch the Vlog
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
                Featured <em>Blog</em>
              </h2>
            </div>
            <p className="section-desc">One featured blog post exploring the roots of body dysmorphia among Filipino youth.</p>
          </div>

          <div className={`blog-grid${isSingleBlog ? " single-item" : ""}`}>
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className={`blog-card${isSingleBlog ? "" : ` reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ""}`}`}
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
              <p className="section-tag">Featured Video</p>
              <h2 className="section-title">
                Watch the <em>Vlog</em>
              </h2>
            </div>
            <p className="section-desc">
              One companion vlog that brings the blog&apos;s core ideas into a more direct, conversational format.
            </p>
          </div>

          <div className={`vlog-grid${isSingleVlog ? " single-item" : ""}`}>
            {vlogs.map((vlog, index) => (
              <div
                key={vlog.id}
                className={`vlog-card${isSingleVlog ? "" : ` reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ""}`}`}
              >
                {playingVlogId === vlog.id && getYouTubeId(vlog.url) ? (
                  <div className="vlog-thumb">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(vlog.url)}?autoplay=1`}
                      title={vlog.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                ) : (
                  <div
                    className="vlog-thumb"
                    onClick={() => setPlayingVlogId(vlog.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setPlayingVlogId(vlog.id);
                      }
                    }}
                  >
                    <div
                      className="vlog-thumb-bg"
                      style={vlog.thumbnail ? {
                        backgroundImage: `url(${vlog.thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      } : undefined}
                    />
                    <div className="vlog-thumb-pattern" style={{ opacity: vlog.thumbnail ? 0 : 1 }} />
                    <span className="vlog-ep-num">{vlog.epNum}</span>
                    <div className="play-btn">Play</div>
                  </div>
                )}
                <div className="vlog-info">
                  <div className="vlog-ep-tag">{vlog.epTag}</div>
                  <div className="vlog-title">{vlog.title}</div>
                  <div className="vlog-desc">{vlog.desc}</div>

                </div>
              </div>
            ))}

            {isSingleVlog ? (
              <aside className="vlog-side-panel">
                <div className="vlog-side-copy">
                  <p className="vlog-side-kicker">About This Vlog</p>
                  <h3>Single Documentary Episode</h3>
                  <p>
                    Single documentary-style episode with motion graphics, split-screens, animated brain responses, text overlays,
                    and subtle family-table shadows. No physical props, pure visuals and voice.
                  </p>
                  <p>
                    It traces colonial roots, social media pressure, family puna culture, and appearance-based hiring bias, then
                    ends with clear actions viewers can use right away.
                  </p>
                  <p className="vlog-side-note">Focus: concise visuals, clear narration, practical call to action.</p>
                </div>
              </aside>
            ) : null}
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
              This project is grounded in peer-reviewed studies, national statistics, and clinical analysis of BDD among Filipino youth.
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
              A research-based blog and vlog project addressing body dysmorphia and body image anxiety among Filipino youth.
            </p>
          </div>
          <div className="footer-col">
            <h4>Blog</h4>
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
          <p>This project is based on peer-reviewed research including national statistics and clinical studies.</p>
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
            <span className="modal-series">The Mirror We Inherited - Featured Blog</span>
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
            <span className="modal-meta-item">{posts.length === 1 ? "Featured blog post" : `Series Post ${currentPost + 1} of ${posts.length}`}</span>
          </div>
          <div className="modal-body">{selectedPost.body}</div>

          <section className="modal-comments" aria-label="Blog comments">
            <div className="modal-comments-head">
              <h3>Comments</h3>
              <span>{selectedComments.length}</span>
            </div>

            <form className="modal-comment-form" onSubmit={handleSubmitComment}>
              <input
                type="text"
                className="modal-comment-input"
                value={commentName}
                onChange={(event) => setCommentName(event.target.value)}
                maxLength={50}
                placeholder="Your name (optional)"
              />
              <textarea
                className="modal-comment-textarea"
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
                maxLength={600}
                placeholder="Share your reflection..."
                required
              />
              <div className="modal-comment-form-footer">
                <p>Comments are saved on this browser only.</p>
                <button type="submit" className="modal-comment-submit">
                  Post Comment
                </button>
              </div>
            </form>

            <div className="modal-comment-list">
              {selectedComments.length === 0 ? (
                <p className="modal-comment-empty">No comments yet. Be the first to share a thought.</p>
              ) : (
                selectedComments.map((comment) => (
                  <article key={comment.id} className="modal-comment-item">
                    <div className="modal-comment-top">
                      <div>
                        <strong>{comment.name}</strong>
                        <span>{new Date(comment.createdAt).toLocaleString()}</span>
                      </div>
                      <button type="button" className="modal-comment-delete" onClick={() => handleDeleteComment(comment.id)}>
                        Delete
                      </button>
                    </div>
                    <p>{comment.content}</p>
                  </article>
                ))
              )}
            </div>
          </section>

          {posts.length > 1 ? (
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
          ) : null}

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
