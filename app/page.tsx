"use client";

import { useState, useEffect } from 'react';
import styles from './styles.module.css';

// ---------------------------------------------------------------------------
// DATA
// ---------------------------------------------------------------------------

const projects = [
  {
    code: 'OPS-001',
    title: 'Tactical Operations Dashboard',
    tags: ['React', 'TypeScript', 'Real-time Data'],
    desc: 'A real-time situational awareness dashboard for joint operations centers. Aggregates multi-source feeds into a single unified operator interface.',
    status: 'ACTIVE',
    classification: 'UNCLASSIFIED',
  },
  {
    code: 'OPS-002',
    title: 'Mission Planning Interface',
    tags: ['Next.js', 'Mapbox', 'Defense UI'],
    desc: 'End-to-end mission planning tool with route optimization, asset deconfliction, and collaborative editing for planning teams.',
    status: 'COMPLETE',
    classification: 'UNCLASSIFIED',
  },
  {
    code: 'OPS-003',
    title: 'Logistics Tracking System',
    tags: ['Vue', 'D3.js', 'REST API'],
    desc: 'Theater-level logistics visualization enabling commanders to monitor supply chain status and predictively identify sustainment risks.',
    status: 'COMPLETE',
    classification: 'UNCLASSIFIED',
  },
  {
    code: 'OPS-004',
    title: 'Communications Network Monitor',
    tags: ['React', 'WebSockets', 'Node.js'],
    desc: 'Persistent monitoring interface for tactical communications infrastructure with automated fault detection and alerting.',
    status: 'ACTIVE',
    classification: 'UNCLASSIFIED',
  },
  {
    code: 'OPS-005',
    title: 'Personnel Readiness Tracker',
    tags: ['TypeScript', 'PostgreSQL', 'Next.js'],
    desc: 'Unit readiness management system tracking qualifications, training currency, and medical clearance status across large formations.',
    status: 'ACTIVE',
    classification: 'UNCLASSIFIED',
  },
  {
    code: 'OPS-006',
    title: 'After-Action Report Generator',
    tags: ['Python', 'React', 'LLM Integration'],
    desc: 'Structured after-action report generation tool that ingests raw event data and produces formatted, standards-compliant documentation.',
    status: 'ACTIVE',
    classification: 'UNCLASSIFIED',
  },
];

const designs = [
  { title: 'Brand Identity System', tag: 'Branding / Identity' },
  { title: 'UI Component Library', tag: 'Design Systems' },
  { title: 'Data Visualization Kit', tag: 'Information Design' },
  { title: 'Operator Interface Guide', tag: 'UX / Product Design' },
  { title: 'Print & Publication', tag: 'Graphic Design' },
  { title: 'Iconography Set', tag: 'Visual Design' },
];

const webProjects = [
  {
    url: 'https://ops-dashboard.dev',
    title: 'Operations Dashboard',
    stack: ['React', 'TypeScript', 'D3.js'],
    desc: 'Real-time operations monitoring interface with live data feeds and alert management.',
  },
  {
    url: 'https://mission-planner.dev',
    title: 'Mission Planning Tool',
    stack: ['Next.js', 'Mapbox', 'Supabase'],
    desc: 'Collaborative mission planning platform with geospatial visualization and team sync.',
  },
  {
    url: 'https://logtrack.mil',
    title: 'Logistics Tracker',
    stack: ['Vue 3', 'Node.js', 'PostgreSQL'],
    desc: 'Supply chain visibility platform serving theater-level logistics coordination.',
  },
  {
    url: 'https://comms-monitor.dev',
    title: 'Comms Network Monitor',
    stack: ['React', 'WebSockets', 'Redis'],
    desc: 'Persistent fault-detection interface for tactical communication infrastructure.',
  },
];

// ---------------------------------------------------------------------------
// NAV BAR
// ---------------------------------------------------------------------------

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'IDENT', href: '#hero' },
    { label: 'OPS', href: '#projects' },
    { label: 'ASSETS', href: '#designs' },
    { label: 'WEB SYSTEMS', href: '#web' },
    { label: 'INTEL', href: '#intel' },
    { label: 'COMMS', href: '#contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        {/* Left: callsign (no back button — this IS the root page) */}
        <div className={styles.navLeft}>
          <span className={styles.navCallsign}>JAMESON</span>
          <span className={styles.navSlash}>//</span>
          <span className={styles.navLabel}>OPERATOR PROFILE</span>
        </div>

        {/* Center: anchor links (hidden on mobile) */}
        <div className={styles.navCenter}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: online indicator + hamburger */}
        <div className={styles.navRight}>
          <span className={styles.onlineDot} aria-hidden="true" />
          <span className={styles.onlineLabel}>ONLINE</span>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ---------------------------------------------------------------------------
// HERO SECTION
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Identity card */}
        <div className={styles.identityCard}>
          <div className={styles.cardCornerTL} aria-hidden="true" />
          <div className={styles.cardCornerTR} aria-hidden="true" />
          <div className={styles.cardCornerBL} aria-hidden="true" />
          <div className={styles.cardCornerBR} aria-hidden="true" />

          <div className={styles.classificationBanner}>
            UNCLASSIFIED // FOR DEMONSTRATION ONLY
          </div>

          <div className={styles.identityBody}>
            <p className={styles.identityLabel}>OPERATOR DESIGNATION</p>
            <h1 className={styles.identityName}>B. JAMESON</h1>
            <p className={styles.identityRole}>Defense Technology Designer</p>

            <ul className={styles.specList} aria-label="Specializations">
              {[
                'UI/UX Design',
                'Systems Architecture',
                'Defense Technology',
                'Web Engineering',
              ].map((spec) => (
                <li key={spec} className={styles.specItem}>
                  <span className={styles.specPrefix} aria-hidden="true">
                    &gt;
                  </span>
                  {spec}
                </li>
              ))}
            </ul>

            <div className={styles.clearedBadge}>
              // CLEARED FOR PUBLIC VIEWING
            </div>
          </div>
        </div>

        {/* Radar */}
        <div className={styles.radarWrapper} aria-hidden="true">
          <div className={styles.radar}>
            <div className={styles.radarRings} />
            <div className={styles.radarCrosshairH} />
            <div className={styles.radarCrosshairV} />
            <div className={styles.radarSweep} />
            <div
              className={`${styles.radarBlip} ${styles.radarBlip1}`}
            />
            <div
              className={`${styles.radarBlip} ${styles.radarBlip2}`}
            />
            <div
              className={`${styles.radarBlip} ${styles.radarBlip3}`}
            />
            <div
              className={`${styles.radarBlip} ${styles.radarBlip4}`}
            />
          </div>
          <p className={styles.radarLabel}>AREA SCAN // ACTIVE</p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// PROJECTS SECTION
// ---------------------------------------------------------------------------

function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionInner}>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionSuper}>MISSION LOG</p>
          <h2 className={styles.sectionTitle}>// ACTIVE OPERATIONS</h2>
          <div className={styles.sectionDivider} />
        </header>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.code} className={styles.projectCard}>
              <div className={styles.projectCornerTL} aria-hidden="true" />
              <div className={styles.projectCornerTR} aria-hidden="true" />
              <div className={styles.projectCornerBL} aria-hidden="true" />
              <div className={styles.projectCornerBR} aria-hidden="true" />

              <div className={styles.projectClassStrip}>
                {project.classification}
              </div>

              <div className={styles.projectBody}>
                <p className={styles.projectCode}>{project.code}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className={styles.projectDesc}>{project.desc}</p>

                <div className={styles.projectFooter}>
                  <div className={styles.projectStatus}>
                    <span
                      className={`${styles.statusDot} ${
                        project.status === 'ACTIVE'
                          ? styles.statusDotActive
                          : styles.statusDotComplete
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={
                        project.status === 'ACTIVE'
                          ? styles.statusLabelActive
                          : styles.statusLabelComplete
                      }
                    >
                      {project.status}
                    </span>
                  </div>

                  <button
                    className={styles.viewDetailsBtn}
                    disabled
                    aria-disabled="true"
                    title="Case study coming soon"
                  >
                    VIEW DETAILS &gt;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// DESIGNS SECTION
// ---------------------------------------------------------------------------

function DesignsSection() {
  return (
    <section id="designs" className={styles.section}>
      <div className={styles.sectionInner}>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionSuper}>ASSET LIBRARY</p>
          <h2 className={styles.sectionTitle}>// VISUAL DESIGN</h2>
          <div className={styles.sectionDivider} />
        </header>

        <div className={styles.galleryGrid}>
          {designs.map((item, index) => (
            <div key={item.title} className={styles.galleryItem}>
              <div
                className={`${styles.galleryThumb} ${
                  styles[`galleryThumb${index + 1}` as keyof typeof styles]
                }`}
              >
                <div className={styles.galleryOverlay}>
                  <p className={styles.galleryOverlayTitle}>{item.title}</p>
                  <button
                    className={styles.galleryOverlayBtn}
                    disabled
                    title="Asset preview coming soon"
                  >
                    VIEW ASSET &gt;
                  </button>
                </div>
              </div>
              <div className={styles.galleryMeta}>
                <p className={styles.galleryMetaTitle}>{item.title}</p>
                <p className={styles.galleryMetaTag}>{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// WEB DESIGNS SECTION
// ---------------------------------------------------------------------------

function WebDesignsSection() {
  return (
    <section id="web" className={styles.section}>
      <div className={styles.sectionInner}>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionSuper}>DIGITAL SYSTEMS</p>
          <h2 className={styles.sectionTitle}>// WEB ENGINEERING</h2>
          <div className={styles.sectionDivider} />
        </header>

        <div className={styles.webGrid}>
          {webProjects.map((project, index) => (
            <div key={project.url} className={styles.webCard}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span className={`${styles.browserDot} ${styles.browserDotRed}`} />
                    <span className={`${styles.browserDot} ${styles.browserDotYellow}`} />
                    <span className={`${styles.browserDot} ${styles.browserDotGreen}`} />
                  </div>
                  <span className={styles.browserUrl}>{project.url}</span>
                </div>
                <div
                  className={`${styles.browserContent} ${
                    styles[`browserContent${index + 1}` as keyof typeof styles]
                  }`}
                  aria-hidden="true"
                />
              </div>
              <div className={styles.webMeta}>
                <h3 className={styles.webMetaTitle}>{project.title}</h3>
                <div className={styles.webMetaStack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.webStackPill}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={styles.webMetaDesc}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// INTEL FEED SECTION
// ---------------------------------------------------------------------------

type Post = {
  id: string;
  title: string;
  content: string;
  topic: string;
  created_at: string;
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  const day = String(d.getUTCDate()).padStart(2, '0');
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const month = months[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${day} ${month} ${year}`;
}

function IntelCard({ post }: { post: Post }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(post.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <article className={styles.intelCard}>
      <div className={styles.intelCardHeader}>
        <span className={styles.intelTopicBadge}>{post.topic}</span>
        <span className={styles.intelDate}>{formatDate(post.created_at)}</span>
      </div>

      <div className={styles.intelCardBody}>
        <h3 className={styles.intelTitle}>{post.title}</h3>
        <p className={`${styles.intelContent} ${expanded ? '' : styles.intelContentClamped}`}>
          {post.content}
        </p>
      </div>

      <div className={styles.intelCardFooter}>
        <button
          className={styles.intelToggleBtn}
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? 'COLLAPSE' : 'EXPAND TRANSMISSION'}
        </button>
        <button
          className={`${styles.intelCopyBtn} ${copied ? styles.intelCopied : ''}`}
          onClick={handleCopy}
          aria-label="Copy post content to clipboard"
        >
          {copied ? 'COPIED \u2713' : 'COPY TO CLIPBOARD'}
        </button>
      </div>
    </article>
  );
}

function IntelFeedSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts ?? []);
      })
      .catch(() => {
        setPosts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="intel" className={styles.section}>
      <div className={styles.sectionInner}>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionSuper}>INTEL FEED</p>
          <h2 className={styles.sectionTitle}>// LINKEDIN CONTENT</h2>
          <div className={styles.sectionDivider} />
        </header>

        {loading ? (
          <div className={styles.intelLoading}>
            <span className={styles.intelLoadingDot} aria-hidden="true" />
            <span className={styles.intelLoadingText}>LOADING INTEL...</span>
          </div>
        ) : posts.length === 0 ? (
          <p className={styles.intelEmpty}>
            NO TRANSMISSIONS LOGGED YET. CHECK BACK SOON.
          </p>
        ) : (
          <div className={styles.intelGrid}>
            {posts.map((post) => (
              <IntelCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CONTACT SECTION
// ---------------------------------------------------------------------------

function ContactSection() {
  const contactItems = [
    { label: 'EMAIL', value: 'b.jameson@defense.dev' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/benjaminjameson/' },
    { label: 'GITHUB', value: 'github.com/Jaymoe-su' },
    { label: 'LOCATION', value: 'Washington, D.C. Metro Area' },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.sectionInner}>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionSuper}>COMMUNICATIONS</p>
          <h2 className={styles.sectionTitle}>// ESTABLISH CONTACT</h2>
          <div className={styles.sectionDivider} />
        </header>

        <div className={styles.contactGrid}>
          {/* Terminal */}
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <div className={styles.terminalDots} aria-hidden="true">
                <span className={`${styles.terminalDot} ${styles.terminalDotRed}`} />
                <span className={`${styles.terminalDot} ${styles.terminalDotYellow}`} />
                <span className={`${styles.terminalDot} ${styles.terminalDotGreen}`} />
              </div>
              <span className={styles.terminalBarTitle}>
                JAMESON // BIOGRAPHICAL DATA
              </span>
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$ </span>
                <span className={styles.terminalCmd}>whoami</span>
              </p>
              <p className={styles.terminalOutput}>
                Defense technology professional with expertise in human-centered
                interface design for complex operational environments.
              </p>

              <p className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$ </span>
                <span className={styles.terminalCmd}>cat expertise.txt</span>
              </p>
              <ul className={styles.terminalList}>
                {[
                  'UI/UX Design',
                  'Frontend Engineering',
                  'Defense Tech Applications',
                  'Systems Architecture',
                  'Design Systems',
                ].map((skill) => (
                  <li key={skill} className={styles.terminalListItem}>
                    <span className={styles.terminalBullet} aria-hidden="true">
                      &gt;
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>

              <p className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$ </span>
                <span className={styles.terminalCursor} aria-hidden="true">
                  _
                </span>
              </p>
            </div>
          </div>

          {/* Contact panel */}
          <div className={styles.contactPanel}>
            <h3 className={styles.contactPanelTitle}>ESTABLISH COMMS</h3>

            <ul className={styles.contactList}>
              {contactItems.map((item) => (
                <li key={item.label} className={styles.contactItem}>
                  <span className={styles.contactItemLabel}>{item.label}</span>
                  <span className={styles.contactItemValue}>{item.value}</span>
                </li>
              ))}
            </ul>

            <button className={styles.contactCta}>INITIATE CONTACT</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// PAGE ROOT
// ---------------------------------------------------------------------------

export default function PersonalBrandPage() {
  return (
    <div className={styles.page}>
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <DesignsSection />
      <WebDesignsSection />
      <IntelFeedSection />
      <ContactSection />

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerLeft}>
            JAMESON // ALL INFORMATION UNCLASSIFIED
          </span>
          <span className={styles.footerRight}>
            SYS.STATUS: ONLINE &nbsp;|&nbsp; BUILD: 2.4.1
          </span>
        </div>
      </footer>
    </div>
  );
}
