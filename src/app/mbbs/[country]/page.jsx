"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import countriesData from "../../../data/countries/index";
import styles from "./country.module.css";

/* ─── Section Components ─────────────────────────────────── */

function HeroSection({ section, flag, country }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      {section.content.map((para, i) => (
        <p key={i} className={styles.contentText} style={{ marginBottom: 14 }}>
          {para}
        </p>
      ))}
    </div>
  );
}

function InfoGridSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.title}</h2>
      <div className={styles.infoGrid}>
        {section.data.map((item, i) => (
          <div key={i} className={styles.infoCard}>
            <span className={styles.infoCardIcon}>{item.icon}</span>
            <p className={styles.infoCardLabel}>{item.label}</p>
            <p className={styles.infoCardValue}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContentSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <p className={styles.contentText}>{section.content}</p>
    </div>
  );
}

function NumberedListSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <ol className={styles.numberedList}>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

function CardsSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      {section.intro && <p className={styles.cardsIntro}>{section.intro}</p>}
      <div className={styles.cardsGrid}>
        {section.cards.map((card, i) => (
          <div key={i} className={styles.featureCard}>
            <span className={styles.featureCardIcon}>{card.icon}</span>
            <p className={styles.featureCardTitle}>{card.title}</p>
            <p className={styles.featureCardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonTableSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              {section.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i}>
                {section.headers.map((h, j) => (
                  <td key={j}>{row[h]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DataTableSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      {section.intro && <p className={styles.tableIntro}>{section.intro}</p>}
      <div className={styles.tableWrapper}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              {section.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i}>
                {section.headers.map((h, j) => (
                  <td key={j}>{row[h]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 10 }}>
        * Fees mentioned are approximate and subject to change.
      </p>
    </div>
  );
}

function UniversityDetailSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <div className={styles.universityCard}>
        <div className={styles.universityHeader}>
          <div className={styles.universityIconBox}>🎓</div>
          <h2 className={styles.universityTitle}>{section.heading}</h2>
        </div>
        <div className={styles.universityBody}>{section.content}</div>
      </div>
    </div>
  );
}

function ProcessListSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.processSteps}>
        {section.steps.map((step, i) => (
          <div key={i} className={styles.processStep}>
            <div className={styles.stepBadge}>{i + 1}</div>
            <div className={styles.stepContent}>
              <p className={styles.stepTitle}>{step.title}</p>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListSection({ section }) {
  const introData = section.intro || section.content;
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      
      {Array.isArray(introData) ? (
        introData.map((para, i) => (
          <p key={i} className={styles.listContent}>
            {para}
          </p>
        ))
      ) : introData ? (
        <p className={styles.listContent}>{introData}</p>
      ) : null}

      <ul className={styles.bulletList}>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {section.note && <div className={styles.listNote}>📌 {section.note}</div>}
    </div>
  );
}

function FAQSection({ section }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.faqList}>
        {section.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className={styles.faqQuestionText}>{faq.question}</span>
                <span className={styles.faqChevron}>{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && <div className={styles.faqAnswer}>{faq.answer}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Info Cards (Georgia brief overview) ───────────────── */
function InfoCardsSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.infoGrid}>
        {section.data.map((item, i) => (
          <div key={i} className={styles.infoCard}>
            <span className={styles.infoCardIcon}>{item.icon}</span>
            <p className={styles.infoCardLabel}>{item.label}</p>
            <p className={styles.infoCardValue}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Content Columns (3-column paragraphs) ─────────────── */
function ContentColumnsSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      {section.heading && <h2 className={styles.sectionHeading}>{section.heading}</h2>}
      <div className={styles.contentColumns}>
        {section.content.map((para, i) => (
          <p key={i} className={styles.contentText}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ─── Content With Subsections ──────────────────────────── */
function ContentWithSubsectionsSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      {section.intro && (
        <p className={styles.contentText} style={{ marginBottom: "24px" }}>
          {section.intro}
        </p>
      )}
      <div className={styles.processSteps}>
        {section.subsections.map((sub, i) => (
          <div key={i} className={styles.processStep}>
            <div className={styles.stepBadge}>{i + 1}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{sub.title}</h3>
              <p className={styles.stepDesc}>{sub.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Two Column Cards ───────────────────────────────────── */
function TwoColumnCardsSection({ section }) {
  const renderCol = (col) => {
    if (col.type === "list") {
      return (
        <div>
          {col.heading && (
            <h3 className={styles.stepTitle} style={{ marginBottom: "12px", color: "#f97316" }}>
              {col.heading}
            </h3>
          )}
          <ul className={styles.bulletList}>
            {col.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    if (col.type === "info-cards") {
      return (
        <div>
          {col.heading && (
            <h3 className={styles.stepTitle} style={{ marginBottom: "12px", color: "#f97316" }}>
              {col.heading}
            </h3>
          )}
          <div className={styles.infoGrid} style={{ marginTop: 0, gridTemplateColumns: "1fr" }}>
            {col.data.map((item, i) => (
              <div key={i} className={styles.infoCard} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "14px 18px" }}>
                {item.icon && <span className={styles.infoCardIcon} style={{ fontSize: "28px", margin: 0 }}>{item.icon}</span>}
                <div>
                  <p className={styles.infoCardLabel} style={{ marginBottom: "2px" }}>{item.label}</p>
                  <p className={styles.infoCardValue} style={{ fontSize: "15px" }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.twoColGrid}>
        {renderCol(section.leftColumn)}
        {renderCol(section.rightColumn)}
      </div>
    </div>
  );
}

/* ─── Two Column Features ────────────────────────────────── */
function TwoColumnFeaturesSection({ section }) {
  const renderCol = (col) => (
    <div className={styles.featureCol}>
      <p className={styles.featureColHeading}>{col.subheading}</p>
      <div className={styles.featureColItems}>
        {col.items.map((item, i) => (
          <div key={i} className={styles.featureColItem}>
            <div className={styles.featureColIcon}>{item.icon}</div>
            <div>
              <p className={styles.featureColTitle}>{item.title}</p>
              <p className={styles.featureColDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.twoColGrid}>
        {renderCol(section.leftColumn)}
        {renderCol(section.rightColumn)}
      </div>
    </div>
  );
}

/* ─── Two Column List ────────────────────────────────────── */
function TwoColumnListSection({ section }) {
  return (
    <div className={styles.sectionCard} id={section.id}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.twoColListGrid}>
        <ul className={styles.bulletList}>
          {section.leftColumnItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul className={styles.bulletList}>
          {section.rightColumnItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Section Router ─────────────────────────────────────── */
function renderSection(section, flag, country) {
  switch (section.type) {
    case "hero":
      return <HeroSection key={section.id} section={section} flag={flag} country={country} />;
    case "info-grid":
      return <InfoGridSection key={section.id} section={section} />;
    case "content":
      return <ContentSection key={section.id} section={section} />;
    case "content-with-subsections":
      return <ContentWithSubsectionsSection key={section.id} section={section} />;
    case "numbered-list":
      return <NumberedListSection key={section.id} section={section} />;
    case "cards":
      return <CardsSection key={section.id} section={section} />;
    case "comparison-table":
      return <ComparisonTableSection key={section.id} section={section} />;
    case "data-table":
      return <DataTableSection key={section.id} section={section} />;
    case "university-detail":
      return <UniversityDetailSection key={section.id} section={section} />;
    case "process-list":
      return <ProcessListSection key={section.id} section={section} />;
    case "list":
      return <ListSection key={section.id} section={section} />;
    case "faq":
      return <FAQSection key={section.id} section={section} />;
    case "info-cards":
      return <InfoCardsSection key={section.id} section={section} />;
    case "content-columns":
      return <ContentColumnsSection key={section.id} section={section} />;
    case "two-column-features":
      return <TwoColumnFeaturesSection key={section.id} section={section} />;
    case "two-column-cards":
      return <TwoColumnCardsSection key={section.id} section={section} />;
    case "two-column-list":
      return <TwoColumnListSection key={section.id} section={section} />;
    case "list-with-intro":
    case "content-with-list":
      return <ListSection key={section.id} section={section} />;
    case "toc":
      return null;
    default:
      return null;
  }
}

/* ─── TOC (Sidebar) ──────────────────────────────────────── */
function SidebarTOC({ sections }) {
  const tocSection = sections.find((s) => s.type === "toc");
  if (!tocSection) return null;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.tocCard}>
        <p className={styles.tocTitle}>On This Page</p>
        <ul className={styles.tocList}>
          {tocSection.items.map((item, i) => (
            <li key={i}>
              <a href={`#${item.anchor}`} className={styles.tocItem}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

/* ─── Hero Stats (quick-glance numbers) ─────────────────── */
function HeroStats({ infoSection }) {
  if (!infoSection) return null;
  const highlights = infoSection.data.filter((d) =>
    ["Number of Universities", "Course Duration", "Intake", "Avg Tuition Fees"].includes(d.label)
  );
  return (
    <div className={styles.heroStats}>
      {highlights.map((h, i) => (
        <div key={i} className={styles.heroStat}>
          <span className={styles.statValue}>{h.value.split(" ")[0]}</span>
          <span className={styles.statLabel}>{h.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Page Component ─────────────────────────────────────── */
export default function CountryPage({ params }) {
  const { country } = use(params);
  const data = countriesData[country.toLowerCase()];

  if (!data) notFound();

  const heroSection = data.sections.find((s) => s.type === "hero");
  const infoSection = data.sections.find((s) => s.type === "info-grid" || s.type === "info-cards");

  return (
    <main className={styles.pageWrapper}>
      {/* ── Hero Banner ── */}
      <div className={styles.heroBanner}>
        <div className={styles.heroBannerInner}>
          <nav className={styles.heroBreadcrumb}>
            <a href="/">Home</a>
            <span>›</span>
            <a href="#">MBBS Abroad</a>
            <span>›</span>
            <span>MBBS in {data.heroCountry}</span>
          </nav>

          <span className={styles.heroFlag}>{data.heroFlag}</span>

          <h1 className={styles.heroTitle}>
            MBBS in <span>{data.heroCountry}</span>
          </h1>

          {heroSection && (
            <div className={styles.heroContent}>
              <p>{heroSection.content[0]}</p>
            </div>
          )}

          <HeroStats infoSection={infoSection} />
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className={styles.mainLayout}>
        {/* Sticky Sidebar */}
        <SidebarTOC sections={data.sections} />

        {/* Content */}
        <div className={styles.contentArea}>
          {data.sections.map((section) => renderSection(section, data.heroFlag, data.heroCountry))}

          {/* CTA Strip */}
          <div className={styles.ctaStrip}>
            <div className={styles.ctaText}>
              <h3>Ready to Study MBBS in {data.heroCountry}?</h3>
              <p>Get free expert counselling and apply to top universities today.</p>
            </div>
            <a href="/contact-us" className={styles.ctaBtn}>
              Get Free Counselling →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
