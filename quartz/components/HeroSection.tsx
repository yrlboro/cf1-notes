import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const HeroSection: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  return (
    <div class="hero-section">
      <div class="hero-eyebrow">ASAI Study Notes · PAI &amp; AAMAI</div>
      <h1 class="hero-title">
        Navigating the <em>Actuarial Maze.</em>
      </h1>
      <p class="hero-desc">
        Catatan personal untuk persiapan ujian PAI dan AAMAI.
        Disusun sebagai dokumentasi mandiri agar materi bisa diakses
        kapan saja dan di mana saja.
      </p>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="stat-value">12</span>
          <span class="stat-label">Modul</span>
        </div>
        <div class="hero-stat">
          <span class="stat-value">CF1–2</span>
          <span class="stat-label">Aktif</span>
        </div>
        <div class="hero-stat">
          <span class="stat-value">2026</span>
          <span class="stat-label">Target</span>
        </div>
        <div class="hero-stat">
          <span class="stat-value highlight">18%</span>
          <span class="stat-label">Progress</span>
        </div>
      </div>
    </div>
  )
}

HeroSection.css = `
  .hero-section {
    margin-bottom: 56px;
  }
  .hero-eyebrow {
    font-family: var(--codeFont);
    font-size: 11px;
    font-weight: 500;
    color: var(--secondary);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .hero-eyebrow::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background: var(--secondary);
  }
  .hero-title {
    font-family: var(--headerFont);
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1.18;
    letter-spacing: -0.025em;
    color: var(--dark);
    margin-bottom: 14px;
    font-weight: 400;
  }
  .hero-title em {
    font-style: italic;
    font-weight: 300;
    color: var(--secondary);
  }
  .hero-desc {
    font-size: 15px;
    color: var(--darkgray);
    max-width: 500px;
    line-height: 1.75;
    margin-bottom: 28px;
    font-weight: 300;
  }
  .hero-stats {
    display: flex;
    border: 1px solid var(--lightgray);
    border-radius: 8px;
    width: fit-content;
    overflow: hidden;
  }
  .hero-stat {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 14px 22px;
    border-right: 1px solid var(--lightgray);
  }
  .hero-stat:last-child {
    border-right: none;
  }
  .stat-value {
    font-family: var(--codeFont);
    font-size: 20px;
    font-weight: 500;
    color: var(--dark);
    letter-spacing: -0.03em;
  }
  .stat-value.highlight {
    color: var(--secondary);
  }
  .stat-label {
    font-size: 10px;
    font-family: var(--codeFont);
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`

export default (() => HeroSection) satisfies QuartzComponentConstructor
