import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Module {
  code: string
  title: string
  desc: string
  slug: string
  status: "active" | "pending"
  progress?: number
}

const PAI_MODULES: Module[] = [
  { code: "CF1", title: "Matematika Keuangan", desc: "Nilai waktu uang, anuitas, pinjaman, dan obligasi.", slug: "CF1", status: "active", progress: 65 },
  { code: "CF2", title: "Probabilitas & Statistika", desc: "Distribusi peluang, variabel acak, dan teori estimasi.", slug: "CF2", status: "active", progress: 40 },
  { code: "CF3", title: "Ekonomi & Pasar Keuangan", desc: "Makroekonomi, mikroekonomi, dan ekonomi keuangan.", slug: "CF3", status: "pending" },
  { code: "CF4", title: "Akuntansi & Manaj. Keuangan", desc: "Laporan keuangan, manajemen modal, dan analisis rasio.", slug: "CF4", status: "pending" },
  { code: "TA1", title: "Metode Statistika", desc: "Analisis regresi, model linear, dan pengolahan data.", slug: "TA1", status: "pending" },
  { code: "TA2", title: "Teori Risiko", desc: "Model risiko, teori kredibilitas, dan ruin theory.", slug: "TA2", status: "pending" },
  { code: "TA3", title: "Matematika Aktuaria", desc: "Model asuransi jiwa jangka panjang dan anuitas hidup.", slug: "TA3", status: "pending" },
  { code: "BA1", title: "Investasi", desc: "Teori portofolio, pasar modal, dan instrumen derivatif.", slug: "BA1", status: "pending" },
  { code: "BA2", title: "Manajemen Risiko Perusahaan", desc: "Identifikasi, mitigasi, dan manajemen risiko korporat (ERM).", slug: "BA2", status: "pending" },
  { code: "BA4G", title: "Asuransi Umum", desc: "Rating, cadangan klaim, dan reasuransi asuransi umum.", slug: "BA4G", status: "pending" },
  { code: "PM2", title: "Manajemen Aktuaria", desc: "Siklus kontrol aktuaria dan manajemen produk asuransi.", slug: "PM2", status: "pending" },
]

const AAMAI_MODULES: Module[] = [
  { code: "AAMAI 101", title: "Prinsip Dasar Asuransi & Manajemen Risiko", desc: "Fondasi konseptual asuransi: prinsip indemnitas, insurable interest, subrogasi, dan kerangka manajemen risiko.", slug: "AAMAI-101", status: "pending" },
]

const ModuleCard = ({ mod }: { mod: Module }) => (
  <a href={`/${mod.slug}`} class={`mod-card ${mod.status === "active" ? "mod-active" : ""}`}>
    <div class={`mod-code ${mod.status === "pending" ? "mod-code-muted" : ""}`}>{mod.code}</div>
    <div class="mod-title">{mod.title}</div>
    <div class="mod-desc">{mod.desc}</div>
    <div class="mod-footer">
      <div class="mod-status">
        <div class={`mod-dot ${mod.status === "active" ? "dot-active" : "dot-pending"}`}></div>
        <span>{mod.status === "active" ? `Aktif${mod.progress ? ` · ${mod.progress}%` : ""}` : "Belum mulai"}</span>
      </div>
      <span class="mod-arrow">→</span>
    </div>
    {mod.progress && (
      <div class="mod-progress-bar">
        <div class="mod-progress-fill" style={`width: ${mod.progress}%`}></div>
      </div>
    )}
  </a>
)

const ModuleGrid: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  return (
    <div class="module-grid-section">
      <div class="section-header">
        <span class="section-title">PAI Exams</span>
        <span class="section-count">11 modul · Persatuan Aktuaris Indonesia</span>
      </div>
      <div class="module-grid">
        {PAI_MODULES.map(mod => <ModuleCard mod={mod} />)}
      </div>

      <div class="section-header">
        <span class="section-title">AAMAI Exams</span>
        <span class="section-count">1 modul · Ahli Asuransi Manajemen Indonesia</span>
      </div>
      {AAMAI_MODULES.map(mod => (
        <a href={`/${mod.slug}`} class="highlight-card">
          <div class="hl-icon">🛡️</div>
          <div class="hl-body">
            <div class="hl-label">{mod.code}</div>
            <div class="hl-title">{mod.title}</div>
            <div class="hl-desc">{mod.desc}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

ModuleGrid.css = `
  .module-grid-section { margin-bottom: 48px; }

  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--lightgray);
  }
  .section-title {
    font-family: var(--codeFont);
    font-size: 11px;
    font-weight: 500;
    color: var(--darkgray);
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }
  .section-count {
    font-family: var(--codeFont);
    font-size: 11px;
    color: var(--gray);
  }

  .module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 2px;
    background: var(--lightgray);
    border: 1px solid var(--lightgray);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .mod-card {
    background: var(--light);
    padding: 18px 20px 14px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    text-decoration: none;
    position: relative;
    transition: background 0.15s;
    overflow: hidden;
  }
  .mod-card:hover { background: var(--lightgray); }
  .mod-card:hover .mod-arrow { opacity: 1; }
  .mod-active { border-top: 2px solid var(--secondary); }

  .mod-code {
    font-family: var(--codeFont);
    font-size: 10px;
    font-weight: 500;
    color: var(--secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .mod-code-muted { color: var(--gray); }

  .mod-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--dark);
    line-height: 1.3;
  }
  .mod-desc {
    font-size: 12px;
    color: var(--gray);
    line-height: 1.5;
    flex: 1;
  }
  .mod-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    padding-top: 9px;
    border-top: 1px solid var(--lightgray);
  }
  .mod-status {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--codeFont);
    font-size: 10px;
    color: var(--gray);
  }
  .mod-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dot-active { background: var(--secondary); }
  .dot-pending { background: var(--gray); }

  .mod-arrow {
    font-size: 12px;
    color: var(--gray);
    opacity: 0;
    transition: opacity 0.15s;
  }

  .mod-progress-bar {
    height: 2px;
    background: var(--lightgray);
    border-radius: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0; left: 0; right: 0;
  }
  .mod-progress-fill {
    height: 100%;
    background: var(--secondary);
    border-radius: 1px;
  }

  .highlight-card {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 20px 22px;
    background: var(--light);
    border: 1px solid var(--lightgray);
    border-radius: 10px;
    text-decoration: none;
    transition: border-color 0.15s, background 0.15s;
    margin-bottom: 40px;
  }
  .highlight-card:hover {
    background: var(--lightgray);
    border-color: var(--secondary);
  }
  .hl-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: var(--lightgray);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }
  .hl-label {
    font-family: var(--codeFont);
    font-size: 10px;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 3px;
  }
  .hl-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--dark);
    margin-bottom: 5px;
    letter-spacing: -0.01em;
  }
  .hl-desc {
    font-size: 12px;
    color: var(--gray);
    line-height: 1.55;
  }
`

export default (() => ModuleGrid) satisfies QuartzComponentConstructor
