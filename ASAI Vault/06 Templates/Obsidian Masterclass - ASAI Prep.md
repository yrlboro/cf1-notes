# Obsidian Masterclass — Tailored untuk Persiapan ASAI

> [!info] Tentang Guide Ini
> Guide ini **bukan** overview umum — ini adalah step-by-step playbook yang dirancang khusus untuk kamu sebagai praktisi actuarial yang sedang mempersiapkan ujian ASAI dari PAI. Setiap contoh, template, dan query menggunakan konteks **7 mata ujian ASAI** (A10–A70) dan workflow belajar actuarial.

---

## Daftar Isi

- [[#Part 1 — Vault Architecture untuk ASAI Prep]]
- [[#Part 2 — Dataview Deep Dive]]
- [[#Part 3 — Plugin Ecosystem & Setup]]
- [[#Part 4 — Zettelkasten untuk Actuarial Knowledge]]
- [[#Part 5 — Templates Siap Pakai]]
- [[#Part 6 — Dashboard & Automation]]

---

# Part 1 — Vault Architecture untuk ASAI Prep

## Step 1: Buat Folder Structure

Buka vault kamu, lalu buat folder berikut (klik kanan di file explorer → New folder):

```
ASAI Vault/
├── 00 Inbox/                  ← Tangkap ide cepat di sini
├── 01 Exams/                  ← Satu subfolder per mata ujian
│   ├── A10 Matematika Keuangan/
│   ├── A20 Probabilita dan Statistika/
│   ├── A30 Ekonomi/
│   ├── A40 Akuntansi/
│   ├── A50 Metode Statistika/
│   ├── A60 Matematika Aktuaria/
│   └── A70 Pemodelan dan Teori Risiko/
├── 02 Concepts/               ← Atomic notes (Zettelkasten)
├── 03 Sources/                ← Literature notes dari buku/paper
├── 04 Problem Sets/           ← Latihan soal + solusi
├── 05 MOCs/                   ← Maps of Content (hub notes)
├── 06 Templates/              ← Template files
├── 07 Daily/                  ← Daily study log
├── 08 R Scripts/              ← Kode R untuk simulasi & modeling
├── Assets/                    ← Gambar, PDF, lampiran
└── Archives/                  ← Materi yang sudah selesai
```

## Step 2: Buat Core MOC (Map of Content)

Buat file `05 MOCs/ASAI Master MOC.md`:

```markdown
---
type: MOC
created: 2026-03-13
---
# 🎯 ASAI Master MOC

## Mata Ujian

| Kode | Nama | Status | Target |
|------|------|--------|--------|
| A10 | [[A10 MOC\|Matematika Keuangan]] | 🔄 | Mei 2026 |
| A20 | [[A20 MOC\|Probabilita & Statistika]] | 🔄 | Mei 2026 |
| A30 | [[A30 MOC\|Ekonomi]] | 📋 | Nov 2026 |
| A40 | [[A40 MOC\|Akuntansi]] | 📋 | Nov 2026 |
| A50 | [[A50 MOC\|Metode Statistika]] | 📋 | 2027 |
| A60 | [[A60 MOC\|Matematika Aktuaria]] | 📋 | 2027 |
| A70 | [[A70 MOC\|Pemodelan & Teori Risiko]] | 📋 | 2027 |

## Quick Links
- [[Study Dashboard]]
- [[Weekly Review Template]]
- [[Problem Set Tracker]]

## Referensi Utama
- [[Kellison - Theory of Interest]] → A10
- [[Wackerly - Mathematical Statistics]] → A20, A50
- [[Bowers - Actuarial Mathematics]] → A60
- [[Klugman - Loss Models]] → A70
```

> [!tip] Cara Pakai MOC
> MOC ini jadi "home base" kamu. Setiap kali buka Obsidian, mulai dari sini. Ctrl+O → ketik "ASAI Master" → Enter. Semua navigasi berangkat dari note ini.

---

# Part 2 — Dataview Deep Dive

## Step 1: Install Dataview

1. Buka **Settings** → **Community plugins** → matikan **Restricted mode**
2. Klik **Browse** → ketik `Dataview` → klik **Install** → **Enable**
3. Masuk ke **Dataview settings**:
   - ✅ Enable JavaScript Queries
   - ✅ Enable Inline Queries
   - Date format: `yyyy-MM-dd`

## Step 2: Pahami Frontmatter

Frontmatter adalah metadata YAML di bagian paling atas setiap note, diapit oleh `---`. Ini yang membuat Dataview bisa "melihat" note kamu sebagai data.

### Contoh frontmatter untuk study note:

```yaml
---
type: concept
exam: A10
topic: compound-interest
chapter: 2
source: "Kellison - Theory of Interest"
status: review
difficulty: 2
date: 2026-03-13
confidence: 70
tags:
  - interest-rate
  - time-value-of-money
---
```

Penjelasan tiap field:

| Field | Tipe | Fungsi | Contoh Value |
|-------|------|--------|--------------|
| `type` | text | Jenis note | `concept`, `problem`, `literature`, `formula`, `fleeting` |
| `exam` | text | Mata ujian ASAI | `A10`, `A20`, ..., `A70` |
| `topic` | text | Sub-topik spesifik | `compound-interest`, `survival-models` |
| `chapter` | number | Bab di buku referensi | `1`, `2`, `3` |
| `source` | text | Buku/sumber | `"Kellison - Theory of Interest"` |
| `status` | text | Progress belajar | `draft`, `learning`, `review`, `mastered` |
| `difficulty` | number | Tingkat kesulitan 1-5 | `1` (mudah) sampai `5` (sangat sulit) |
| `confidence` | number | Seberapa paham (0-100) | `70` artinya 70% paham |
| `date` | date | Tanggal dibuat/update | `2026-03-13` |

> [!warning] Konsistensi adalah Kunci
> Sekali kamu tentukan format value (misal status pakai `learning` bukan `Learning`), **stick with it**. Dataview case-sensitive. Satu typo = note hilang dari query.

## Step 3: Query Basics — TABLE

### Use Case 1: "Saya mau lihat semua topik A10 yang belum dikuasai"

````markdown
```dataview
TABLE 
  topic AS "Topik",
  status AS "Status",
  confidence AS "Confidence",
  difficulty AS "Difficulty"
FROM "01 Exams/A10 Matematika Keuangan"
WHERE status != "mastered"
SORT confidence ASC
```
````

**Apa yang terjadi:**
- `TABLE` → tampilkan sebagai tabel
- `FROM "01 Exams/A10..."` → ambil notes dari folder A10
- `WHERE status != "mastered"` → filter yang belum dikuasai
- `SORT confidence ASC` → urutkan dari confidence terendah (prioritas belajar)

**Hasil yang muncul:**

| File | Topik | Status | Confidence | Difficulty |
|------|-------|--------|------------|------------|
| Annuity Due | annuity-due | learning | 30 | 4 |
| Bond Pricing | bond-pricing | draft | 45 | 3 |
| Compound Interest | compound-interest | review | 70 | 2 |

### Use Case 2: "Berapa progress saya per mata ujian?"

````markdown
```dataview
TABLE 
  length(rows) AS "Total Notes",
  length(filter(rows, (r) => r.status = "mastered")) AS "Mastered",
  round(length(filter(rows, (r) => r.status = "mastered")) / length(rows) * 100) + "%" AS "Progress"
FROM "01 Exams"
WHERE type = "concept"
GROUP BY exam
SORT exam ASC
```
````

**Apa yang terjadi:**
- `GROUP BY exam` → kelompokkan per mata ujian
- `length(rows)` → hitung jumlah notes di grup itu
- `filter(rows, ...)` → filter di dalam grup yang sudah mastered
- Hasilnya: tabel progress per exam dengan persentase

**Hasil:**

| Exam | Total Notes | Mastered | Progress |
| ---- | ----------- | -------- | -------- |
| A10  | 25          | 15       | 60%      |
| A20  | 18          | 5        | 28%      |
| A60  | 12          | 0        | 0%       |

### Use Case 3: "Tampilkan semua rumus penting untuk review cepat"

````markdown
```dataview
TABLE WITHOUT ID
  file.link AS "Formula",
  exam AS "Exam",
  formula AS "Rumus"
FROM "02 Concepts"
WHERE type = "formula"
SORT exam ASC
```
````

> [!tip] `TABLE WITHOUT ID` menghilangkan kolom nama file default, supaya lebih bersih.

Untuk ini, note formula kamu perlu punya field `formula` di frontmatter:

```yaml
---
type: formula
exam: A10
formula: "PV = FV × (1+i)^(-n)"
tags:
  - present-value
---
```

## Step 4: Query Basics — LIST dan TASK

### Use Case 4: "List semua soal latihan yang belum dikerjakan"

````markdown
```dataview
LIST
FROM "04 Problem Sets"
WHERE status = "unsolved"
SORT difficulty DESC
```
````

### Use Case 5: "Kumpulkan semua tasks dari vault"

````markdown
```dataview
TASK
FROM "07 Daily"
WHERE !completed AND contains(text, "A10")
SORT file.name DESC
LIMIT 20
```
````

Ini akan scan semua checkbox `- [ ]` di folder Daily yang mengandung teks "A10".

## Step 5: Inline Queries

Inline queries bisa disisipkan langsung di dalam paragraf. Syntax: `` `= ekspresi` ``

### Contoh di dalam note:

```markdown
# A10 Matematika Keuangan — Overview

Total topik yang sudah saya catat: `= length(filter(dv.pages("01 Exams/A10 Matematika Keuangan"), (p) => p.type = "concept"))`

Yang sudah mastered: `= length(filter(dv.pages("01 Exams/A10 Matematika Keuangan"), (p) => p.status = "mastered"))`

Note ini terakhir diupdate: `= this.file.mtime`
```

**Hasilnya di reading view:**
> Total topik yang sudah saya catat: **25**
> Yang sudah mastered: **15**
> Note ini terakhir diupdate: **March 13, 2026**

## Step 6: DataviewJS — Advanced

DataviewJS memberi akses penuh ke JavaScript. Ini berguna kalau DQL standar kurang fleksibel.

### Use Case 6: "Heatmap-style overview — topik mana yang lemah?"

````markdown
```dataviewjs
const exams = ["A10", "A20", "A30", "A40", "A50", "A60", "A70"];
const pages = dv.pages('"01 Exams" or "02 Concepts"')
  .where(p => p.type === "concept" && p.exam);

let tableData = [];

for (let exam of exams) {
  const examPages = pages.where(p => p.exam === exam);
  const total = examPages.length;
  const mastered = examPages.where(p => p.status === "mastered").length;
  const learning = examPages.where(p => p.status === "learning").length;
  const avgConf = total > 0 
    ? Math.round(examPages.values.reduce((sum, p) => sum + (p.confidence || 0), 0) / total) 
    : 0;
  
  // Emoji indicator berdasarkan avg confidence
  let indicator = "🔴";
  if (avgConf >= 80) indicator = "🟢";
  else if (avgConf >= 50) indicator = "🟡";
  else if (avgConf >= 30) indicator = "🟠";
  
  tableData.push([exam, total, mastered, learning, avgConf + "%", indicator]);
}

dv.table(
  ["Exam", "Total", "Mastered", "Learning", "Avg Confidence", "Status"],
  tableData
);
```
````

**Hasil:**

| Exam | Total | Mastered | Learning | Avg Confidence | Status |
|------|-------|----------|----------|----------------|--------|
| A10 | 25 | 15 | 7 | 68% | 🟡 |
| A20 | 18 | 5 | 10 | 42% | 🟠 |
| A30 | 0 | 0 | 0 | 0% | 🔴 |

### Use Case 7: "Spaced repetition — note mana yang harus di-review hari ini?"

````markdown
```dataviewjs
// Review jadwal berdasarkan confidence level
// confidence < 40 → review tiap 1 hari
// confidence 40-60 → review tiap 3 hari
// confidence 60-80 → review tiap 7 hari
// confidence > 80 → review tiap 14 hari

const today = dv.date("today");
const pages = dv.pages('"01 Exams" or "02 Concepts"')
  .where(p => p.type === "concept" && p.status !== "mastered" && p.date);

let reviewDue = [];

for (let p of pages) {
  const conf = p.confidence || 0;
  let interval;
  if (conf < 40) interval = 1;
  else if (conf < 60) interval = 3;
  else if (conf < 80) interval = 7;
  else interval = 14;
  
  const lastReview = dv.date(p.date);
  const daysSince = Math.floor((today - lastReview) / (1000 * 60 * 60 * 24));
  
  if (daysSince >= interval) {
    reviewDue.push([
      p.file.link,
      p.exam,
      conf + "%",
      daysSince + " hari lalu",
      "⚡ Review sekarang"
    ]);
  }
}

if (reviewDue.length > 0) {
  dv.table(
    ["Note", "Exam", "Confidence", "Last Review", "Action"],
    reviewDue.sort((a, b) => a[2] - b[2])  // sort by confidence ascending
  );
} else {
  dv.paragraph("✅ Semua note sudah up to date! Tidak ada yang perlu di-review hari ini.");
}
```
````

**Kenapa ini powerful:**
Kamu bikin spaced repetition system sendiri tanpa plugin tambahan. Setiap kali selesai review, update field `date` dan `confidence` di frontmatter note → Dataview otomatis recalculate.

### Use Case 8: "Weakest topics — prioritas belajar minggu ini"

````markdown
```dataviewjs
const pages = dv.pages('"01 Exams" or "02 Concepts"')
  .where(p => p.type === "concept" && p.confidence && p.confidence < 50)
  .sort(p => p.confidence, 'asc')
  .limit(10);

dv.header(3, "🔥 Top 10 Weakest Topics");
dv.table(
  ["Topic", "Exam", "Confidence", "Difficulty"],
  pages.map(p => [p.file.link, p.exam, p.confidence + "%", "⭐".repeat(p.difficulty || 1)])
);
```
````

---

# Part 3 — Plugin Ecosystem & Setup

## Tier 1: Install Hari Ini

### Plugin 1: Templater

**Apa:** Template engine advanced — bisa pakai JavaScript di dalam template.

**Install:** Settings → Community Plugins → Browse → "Templater" → Install → Enable

**Setup penting:**
1. Templater Settings → Template folder: `06 Templates`
2. ✅ Trigger Templater on new file creation
3. Tambah folder template: `01 Exams` → template: `Concept Note Template`

**Cara pakai:**
1. Buat template di `06 Templates/` (lihat Part 5 untuk template lengkap)
2. Buat note baru → Ctrl+P → "Templater: Insert template" → pilih template
3. Atau: set auto-trigger saat buat note di folder tertentu

**Contoh Templater syntax yang berguna:**

```markdown
<%* 
// Prompt user untuk input
const exam = await tp.system.suggester(
  ["A10 - Mat Keuangan", "A20 - Prob & Stat", "A30 - Ekonomi", 
   "A40 - Akuntansi", "A50 - Met Statistika", "A60 - Mat Aktuaria", 
   "A70 - Pemodelan"],
  ["A10", "A20", "A30", "A40", "A50", "A60", "A70"]
);
const topic = await tp.system.prompt("Nama topik:");
const difficulty = await tp.system.suggester(
  ["1 - Mudah", "2 - Sedang", "3 - Menengah", "4 - Sulit", "5 - Sangat Sulit"],
  [1, 2, 3, 4, 5]
);

// Rename file otomatis
await tp.file.rename(topic);
-%>
---
type: concept
exam: <% exam %>
topic: <% topic.toLowerCase().replace(/ /g, "-") %>
status: draft
difficulty: <% difficulty %>
confidence: 0
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - <% exam.toLowerCase() %>
---
```

> [!tip] Kenapa Templater > built-in Templates?
> Built-in templates Obsidian cuma copy-paste teks statis. Templater bisa:
> - Prompt kamu untuk isi data
> - Auto-rename file
> - Insert tanggal dinamis
> - Run JavaScript logic
> - Move file ke folder yang tepat

### Plugin 2: Calendar + Periodic Notes

**Install:** Cari "Calendar" dan "Periodic Notes" → Install keduanya

**Setup:**
1. Calendar settings → sudah default OK
2. Periodic Notes settings:
   - Daily Note folder: `07 Daily`
   - Daily Note template: `06 Templates/Daily Study Log.md`
   - Weekly Note: ✅ Enable → folder: `07 Daily/Weekly`
   - Weekly template: `06 Templates/Weekly Review.md`

**Cara pakai:**
- Klik tanggal di calendar sidebar → otomatis buat daily note dari template
- Klik minggu (angka di kiri) → buat weekly review

### Plugin 3: Tasks

**Install:** Cari "Tasks" → Install → Enable

**Syntax tasks:**

```markdown
- [ ] Kerjakan soal bab 3 Kellison 📅 2026-03-15 ⏫
- [ ] Review annuity formula 📅 2026-03-16 🔼
- [ ] Baca chapter 5 Bowers 📅 2026-03-20 🔽
- [x] Selesaikan compound interest notes ✅ 2026-03-12
```

Penjelasan emoji:
- `📅` → due date
- `⏫` → highest priority
- `🔼` → high priority
- `🔽` → low priority  
- `✅` → completion date
- `🔁` → recurring (misal `🔁 every week`)

**Query tasks dari seluruh vault:**

````markdown
```tasks
not done
due before next monday
sort by priority
group by tags
```
````

## Tier 2: Install Setelah Nyaman dengan Tier 1

### Plugin 4: QuickAdd

**Kenapa:** Satu hotkey → pilih jenis note → isi data → note langsung jadi di folder yang benar.

**Setup step-by-step:**
1. Install QuickAdd
2. Settings → QuickAdd → ketik "New Concept Note" → Add Choice → pilih **Template**
3. Konfigurasi:
   - Template path: `06 Templates/Concept Note Template.md`
   - File name format: `{{VALUE}}`
   - Create in folder: ✅ → `02 Concepts`
4. Klik ⚡ icon → set sebagai Macro
5. Assign hotkey: Settings → Hotkeys → cari "QuickAdd" → set `Ctrl+Shift+N`

**Workflow:**
`Ctrl+Shift+N` → pilih "New Concept Note" → ketik nama → Templater prompt muncul → isi exam, difficulty → note jadi otomatis di folder yang benar.

### Plugin 5: Kanban

**Kenapa:** Visual board untuk track progress per exam.

**Cara buat:**
1. Ctrl+P → "Kanban: Create new board"
2. Nama: "A10 Progress Board"

```markdown
---
kanban-plugin: basic
---
## 📋 Belum Mulai
- [ ] Sinking Fund
- [ ] Yield Rate

## 📖 Sedang Belajar
- [ ] Bond Pricing @{2026-03-15}
- [ ] Amortization Schedule

## 🔄 Perlu Review
- [ ] Compound Interest
- [ ] Annuity Immediate

## ✅ Dikuasai
- [x] Simple Interest
- [x] Present Value
- [x] Future Value
```

Drag & drop cards antar kolom saat progress berubah.

### Plugin 6: Excalidraw

**Kenapa:** Visualisasi konsep actuarial — decision trees, timeline cash flows, distribusi probabilitas.

**Use case actuarial:**
- Gambar timeline cash flow untuk annuity
- Decision tree untuk compound vs simple interest
- Diagram hubungan antar konsep di A60
- Visualisasi loss distribution untuk A70

**Cara pakai:**
1. Ctrl+P → "Excalidraw: Create new drawing"
2. Gambar di canvas
3. Embed di note lain: `![[Drawing Name.excalidraw]]`

### Plugin 7: Linter

**Kenapa:** Auto-format semua note kamu on save. Konsistensi tanpa effort.

**Recommended settings:**
- ✅ YAML Title: auto-add title from filename
- ✅ YAML Sort: konsisten urutan frontmatter keys
- ✅ Heading blank lines: spasi otomatis sekitar heading
- ✅ Trailing spaces: hapus spasi di akhir baris
- ✅ Consecutive blank lines: max 1 baris kosong

## Tier 3: Nice to Have

| Plugin | Fungsi | Kapan Install |
|--------|--------|---------------|
| **Various Complements** | Auto-complete frontmatter values, internal links | Saat vault sudah 100+ notes |
| **Style Settings** | GUI untuk tweak theme | Saat pakai theme Minimal/AnuPpuccin |
| **Commander** | Custom buttons di header/sidebar | Saat workflow sudah stabil |
| **Obsidian Git** | Auto-backup vault ke GitHub | Segera (data safety!) |
| **Tag Wrangler** | Rename/merge tags di seluruh vault | Saat tags mulai berantakan |
| **DB Folder** | Folder-as-database dengan UI spreadsheet | Alternatif visual untuk Dataview |

> [!warning] Tentang Obsidian Git
> Ini seharusnya Tier 1 dari segi pentingnya. Vault kamu = knowledge capital. Backup secara regular ke GitHub/GitLab. Setup:
> 1. Install plugin
> 2. Buat private repo di GitHub
> 3. Di plugin settings, set auto-backup setiap 30 menit
> 4. Selesai — vault kamu aman

---

# Part 4 — Zettelkasten untuk Actuarial Knowledge

## Prinsip Dasar

Zettelkasten bukan tentang mengumpulkan informasi — tapi tentang **membangun pemahaman** melalui koneksi antar ide. Ini sangat cocok untuk actuarial karena:

- Konsep di A10 (interest) jadi fondasi A60 (life contingencies)
- Probabilitas di A20 dipakai di A70 (risk modeling)
- Ekonomi A30 nyambung ke bond pricing di A10
- Semua saling terhubung — dan itulah yang Zettelkasten tangkap

## Jenis Notes — Dengan Contoh Nyata

### 1. Fleeting Note

Ide cepat yang muncul saat belajar. Belum diproses, belum rapi.

**Contoh file:** `00 Inbox/ide-force-of-interest.md`

```markdown
Baru sadar bahwa force of interest δ itu sebenarnya 
continuous compounding limit dari i. 

Kayaknya ini bisa di-link ke konsep limit di kalkulus.
Dan mungkin ada hubungannya sama instantaneous hazard rate 
di survival analysis (A60)?

Cek nanti.
```

**Apa yang kamu lakukan selanjutnya:**
→ Proses jadi permanent note di sesi review berikutnya.

### 2. Literature Note

Ringkasan dari sumber tertentu. Bukan copy-paste — tulis dengan kata-kata sendiri.

**Contoh file:** `03 Sources/Kellison Ch2 - Compound Interest.md`

```yaml
---
type: literature
source: "Kellison - Theory of Interest"
chapter: 2
exam: A10
date: 2026-03-13
tags:
  - a10
  - compound-interest
---
```

```markdown
# Kellison Chapter 2 — Compound Interest

## Ringkasan
Bab ini membahas fondasi compound interest: bagaimana uang 
tumbuh secara eksponensial ketika bunga dihitung atas bunga.

## Key Takeaways
1. Accumulation function: $a(t) = (1+i)^t$
   → Lihat [[Accumulation Function]]
2. Present value: $v = \frac{1}{1+i}$ — ini discount factor
   → Lihat [[Discount Factor]]
3. Hubungan antara nominal rate $i^{(m)}$ dan effective rate $i$:
   $(1+i) = (1 + \frac{i^{(m)}}{m})^m$
   → Lihat [[Nominal vs Effective Rate]]
4. Force of interest: $\delta = \ln(1+i)$
   → Lihat [[Force of Interest]]

## Soal yang Menarik
- Contoh 2.3.1 — compound interest dengan fractional period
  → Catat di [[Problem - Fractional Period Interest]]

## Yang Belum Paham
- Kenapa force of interest bisa negatif? Kapan itu terjadi 
  di dunia nyata?
```

> [!important] Perhatikan Link Pattern
> Setiap konsep penting langsung di-link ke note terpisah (`[[Accumulation Function]]`, dll). Ini yang bikin Zettelkasten bekerja — knowledge terhubung, bukan terkurung di satu note.

### 3. Permanent Note (Zettel) — Atomic Concept

Satu note = satu konsep. Ditulis dengan kata-kata sendiri. Self-contained.

**Contoh file:** `02 Concepts/Force of Interest.md`

```yaml
---
type: concept
exam: A10
topic: force-of-interest
source: "Kellison - Theory of Interest"
chapter: 2
status: review
difficulty: 3
confidence: 60
date: 2026-03-13
tags:
  - a10
  - interest-rate
  - continuous
---
```

````markdown
# Force of Interest (δ)

## Definisi
Force of interest adalah **instantaneous rate of interest** — 
laju pertumbuhan uang pada satu titik waktu tertentu.

$$\delta = \lim_{m \to \infty} i^{(m)} = \ln(1+i)$$

Atau secara umum untuk accumulation function $a(t)$:
$$\delta_t = \frac{a'(t)}{a(t)}$$

## Intuisi
Bayangkan kamu punya Rp 1.000.000 di bank. Effective annual 
rate $i = 10\%$. Kalau bunga dihitung:
- Tahunan: $(1.10)^1 = 1.10$ → 10%
- Bulanan: $(1 + 0.10/12)^{12} = 1.10471$ → 10.47%
- Harian: $(1 + 0.10/365)^{365} = 1.10516$ → 10.52%
- **Continuous**: $e^{0.10} = 1.10517$ → 10.52%

Force of interest δ = 0.09531 (yaitu ln(1.10)).

## Koneksi
- **Ke atas (fondasi):** Ini adalah limit dari [[Nominal Rate]] 
  saat compounding frequency → ∞
- **Ke samping (analog):** Mirip dengan **hazard rate** 
  $\mu_x$ di [[Survival Analysis]] — keduanya instantaneous rate. 
  $\delta$ mengukur "laju pertumbuhan uang", $\mu_x$ mengukur 
  "laju kematian". Hubungan ini penting di [[A60 MOC|A60]].
- **Ke bawah (aplikasi):** Digunakan dalam [[Continuous Annuity]] 
  dan [[Continuous Insurance Models]]
- **Across exams:** Di A70, force of interest muncul dalam 
  discounting claim reserves secara continuous

## R Code
```r
# Force of interest dari effective rate
i <- 0.10
delta <- log(1 + i)
cat("Force of interest:", delta, "\n")

# Accumulation dengan force of interest
t <- 5
a_t <- exp(delta * t)
cat("Accumulated value after", t, "years:", a_t, "\n")

# Variable force of interest
# delta(t) = 0.05 + 0.01*t
delta_t <- function(t) 0.05 + 0.01 * t
a_integral <- exp(integrate(delta_t, 0, 5)$value)
cat("Accumulated value (variable delta):", a_integral, "\n")
```

## Rumus Penting
| Formula | Keterangan |
|---------|------------|
| $\delta = \ln(1+i)$ | Dari effective rate |
| $i = e^\delta - 1$ | Ke effective rate |
| $d = 1 - e^{-\delta}$ | Ke discount rate |
| $a(t) = e^{\int_0^t \delta_s \, ds}$ | General accumulation |
````

> [!tip] Perhatikan Bagian "Koneksi"
> Ini jantung dari Zettelkasten. Setiap note bukan silo — ia terhubung ke atas (fondasi), ke samping (analogi), ke bawah (aplikasi), dan ke exam lain. Graph view akan menunjukkan cluster yang makin kaya seiring waktu.

### 4. Problem Note

Untuk latihan soal — linked ke konsep yang relevan.

**Contoh file:** `04 Problem Sets/A10 - Bond Pricing Problem 1.md`

```yaml
---
type: problem
exam: A10
topic: bond-pricing
source: "Kellison - Theory of Interest"
chapter: 7
status: solved
difficulty: 3
confidence: 80
date: 2026-03-13
time-spent: 25
tags:
  - a10
  - bond
---
```

````markdown
# A10 — Bond Pricing Problem 1

## Soal
Sebuah bond dengan face value $1,000, coupon rate 8% 
(semi-annual), jatuh tempo dalam 10 tahun. 
Yield rate 10% per tahun. Tentukan harga bond.

## Konsep yang Dipakai
- [[Bond Pricing Formula]]
- [[Present Value of Annuity]]
- [[Discount Factor]]

## Solusi

**Step 1:** Identifikasi variabel
- $F = 1000$ (face value)
- $r = 0.04$ (coupon rate per period = 8%/2)
- $Fr = 40$ (coupon payment)
- $i = 0.05$ (yield per period = 10%/2)
- $n = 20$ (jumlah period = 10 × 2)

**Step 2:** Harga bond = PV coupons + PV face value
$$P = Fr \cdot a_{\overline{n}|i} + F \cdot v^n$$
$$P = 40 \cdot a_{\overline{20}|0.05} + 1000 \cdot (1.05)^{-20}$$

**Step 3:** Hitung
$$a_{\overline{20}|0.05} = \frac{1 - 1.05^{-20}}{0.05} = 12.4622$$
$$P = 40(12.4622) + 1000(0.37689) = 498.49 + 376.89 = 875.38$$

## Jawaban
$P = \$875.38$

Bond dijual **at a discount** karena yield > coupon rate.

## Refleksi
- Ingat: semi-annual → bagi 2 semua rate dan kali 2 period
- Hubungan premium/discount: yield > coupon → discount, yield < coupon → premium
- Error yang hampir saya buat: lupa adjust ke semi-annual

## R Verification
```r
F <- 1000; r <- 0.04; i <- 0.05; n <- 20
Fr <- F * r
a_n <- (1 - (1+i)^(-n)) / i
P <- Fr * a_n + F * (1+i)^(-n)
cat("Bond price:", round(P, 2)) # 875.38
```
````

## Linking Strategy — Contoh di Graph View

Setelah beberapa minggu, graph view kamu akan terlihat seperti ini:

```
Force of Interest ←→ Nominal Rate ←→ Effective Rate
       ↓                                    ↓
Continuous Annuity ←→ Annuity Immediate ←→ Discount Factor
       ↓                    ↓
Survival Analysis    Bond Pricing ←→ Present Value
  (A60)                (A10)
       ↓
Hazard Rate ←→ Force of Mortality
  (A60)            (A60)
```

Koneksi "Force of Interest ↔ Hazard Rate" adalah insight yang **tidak akan muncul** kalau kamu belajar A10 dan A60 di silo. Zettelkasten memaksa kamu menemukan koneksi ini.


---

# Part 5 — Templates Siap Pakai

Taruh semua template di folder `06 Templates/`.

## Template 1: Concept Note

**File:** `06 Templates/Concept Note.md`

````markdown
<%*
const exam = await tp.system.suggester(
  ["A10 - Mat Keuangan", "A20 - Prob & Stat", "A30 - Ekonomi", 
   "A40 - Akuntansi", "A50 - Met Statistika", "A60 - Mat Aktuaria", 
   "A70 - Pemodelan & Teori Risiko"],
  ["A10", "A20", "A30", "A40", "A50", "A60", "A70"]
);
const topic = await tp.system.prompt("Nama topik:");
const diff = await tp.system.suggester(
  ["1 ⭐", "2 ⭐⭐", "3 ⭐⭐⭐", "4 ⭐⭐⭐⭐", "5 ⭐⭐⭐⭐⭐"],
  [1, 2, 3, 4, 5]
);
await tp.file.rename(topic);
-%>
---
type: concept
exam: <% exam %>
topic: <% topic.toLowerCase().replace(/ /g, "-") %>
status: draft
difficulty: <% diff %>
confidence: 0
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - <% exam.toLowerCase() %>
---
# <% topic %>

## Definisi


## Intuisi


## Rumus Penting

| Formula | Keterangan |
|---------|------------|
|  |  |

## Koneksi
- **Fondasi:** 
- **Analogi:** 
- **Aplikasi:** 

## Contoh


## R Code
```r

```
````

## Template 2: Literature Note

**File:** `06 Templates/Literature Note.md`

````markdown
<%*
const source = await tp.system.prompt("Judul buku/sumber:");
const chapter = await tp.system.prompt("Chapter/Bab:");
const exam = await tp.system.suggester(
  ["A10", "A20", "A30", "A40", "A50", "A60", "A70"],
  ["A10", "A20", "A30", "A40", "A50", "A60", "A70"]
);
await tp.file.rename(source + " Ch" + chapter);
-%>
---
type: literature
source: "<% source %>"
chapter: <% chapter %>
exam: <% exam %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - <% exam.toLowerCase() %>
  - literature
---
# <% source %> — Chapter <% chapter %>

## Ringkasan


## Key Takeaways
1. 
2. 
3. 

## Konsep untuk Di-extract
- [ ] [[]] →
- [ ] [[]] →
- [ ] [[]] →

## Yang Belum Paham

````

## Template 3: Problem Set

**File:** `06 Templates/Problem Note.md`

````markdown
<%*
const exam = await tp.system.suggester(
  ["A10", "A20", "A30", "A40", "A50", "A60", "A70"],
  ["A10", "A20", "A30", "A40", "A50", "A60", "A70"]
);
const topic = await tp.system.prompt("Topik soal:");
const diff = await tp.system.suggester(
  ["1", "2", "3", "4", "5"], [1, 2, 3, 4, 5]
);
await tp.file.rename(exam + " - " + topic);
-%>
---
type: problem
exam: <% exam %>
topic: <% topic.toLowerCase().replace(/ /g, "-") %>
status: unsolved
difficulty: <% diff %>
confidence: 0
date: <% tp.date.now("YYYY-MM-DD") %>
time-spent: 0
tags:
  - <% exam.toLowerCase() %>
  - problem
---
# <% exam %> — <% topic %>

## Soal


## Konsep yang Dipakai
- [[]]

## Solusi


## Jawaban


## Refleksi
- Apa yang sulit?
- Error yang hampir dibuat?
- Pattern yang bisa dikenali?

## R Verification
```r

```
````

## Template 4: Daily Study Log

**File:** `06 Templates/Daily Study Log.md`

```markdown
---
type: daily
date: <% tp.date.now("YYYY-MM-DD") %>
study-hours: 0
exams-studied: []
mood: 
tags:
  - daily
---
# 📅 <% tp.date.now("dddd, D MMMM YYYY") %>

## 🎯 Focus Hari Ini
- [ ] 

## 📖 Apa yang Dipelajari
### Exam: 
- 
- 

## 💡 Insights / Koneksi Baru
- 

## ❓ Questions yang Muncul
- 

## ⏱️ Study Log
| Waktu | Durasi | Aktivitas | Exam |
|-------|--------|-----------|------|
|  |  |  |  |

## 📊 Review
- Mood: /5
- Produktivitas: /5
- Total jam belajar hari ini: 
```

## Template 5: Weekly Review

**File:** `06 Templates/Weekly Review.md`

````markdown
---
type: weekly
week: <% tp.date.now("YYYY-[W]ww") %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - weekly
  - review
---
# 📊 Weekly Review — <% tp.date.now("YYYY [Week] ww") %>

## Progress Minggu Ini

### Notes Dibuat Minggu Ini
```dataview
TABLE type, exam, status
FROM ""
WHERE date >= date("<% tp.date.now("YYYY-MM-DD", -7) %>")
  AND date <= date("<% tp.date.now("YYYY-MM-DD") %>")
  AND type != "daily" AND type != "weekly"
SORT date DESC
```

### Soal Dikerjakan
```dataview
TABLE exam, difficulty, confidence, time-spent AS "Menit"
FROM "04 Problem Sets"
WHERE date >= date("<% tp.date.now("YYYY-MM-DD", -7) %>")
SORT exam ASC
```

### Total Study Hours
```dataviewjs
const pages = dv.pages('"07 Daily"')
  .where(p => p.date >= dv.date("<% tp.date.now('YYYY-MM-DD', -7) %>") 
    && p.date <= dv.date("<% tp.date.now('YYYY-MM-DD') %>"));
const total = pages.values.reduce((sum, p) => sum + (p["study-hours"] || 0), 0);
dv.paragraph(`**Total: ${total} jam**`);
```

## Refleksi
### Apa yang berjalan baik?
- 

### Apa yang bisa diperbaiki?
- 

### Aha moments minggu ini?
- 

## Rencana Minggu Depan
- [ ] 
- [ ] 
- [ ] 
````

---

# Part 6 — Dashboard & Automation

## Master Study Dashboard

Buat file `05 MOCs/Study Dashboard.md` — ini jadi homepage kamu:

````markdown
---
type: dashboard
---
# 📊 ASAI Study Dashboard

## 🔴🟡🟢 Progress per Exam

```dataviewjs
const exams = [
  {code: "A10", name: "Mat Keuangan"},
  {code: "A20", name: "Prob & Stat"},
  {code: "A30", name: "Ekonomi"},
  {code: "A40", name: "Akuntansi"},
  {code: "A50", name: "Met Statistika"},
  {code: "A60", name: "Mat Aktuaria"},
  {code: "A70", name: "Pemodelan"}
];

const pages = dv.pages('"01 Exams" or "02 Concepts"')
  .where(p => p.type === "concept");

let rows = [];
for (let e of exams) {
  const ep = pages.where(p => p.exam === e.code);
  const total = ep.length;
  const mastered = ep.where(p => p.status === "mastered").length;
  const pct = total > 0 ? Math.round(mastered / total * 100) : 0;
  const bar = "█".repeat(Math.floor(pct/10)) + "░".repeat(10 - Math.floor(pct/10));
  const indicator = pct >= 80 ? "🟢" : pct >= 40 ? "🟡" : "🔴";
  rows.push([
    `${indicator} ${e.code}`, 
    e.name, 
    `${mastered}/${total}`, 
    `${bar} ${pct}%`
  ]);
}
dv.table(["", "Exam", "Mastered", "Progress"], rows);
```

## ⚡ Review Due Today

```dataviewjs
const today = dv.date("today");
const pages = dv.pages('"01 Exams" or "02 Concepts"')
  .where(p => p.type === "concept" && p.status !== "mastered" && p.date);

let due = [];
for (let p of pages) {
  const conf = p.confidence || 0;
  let interval = conf < 40 ? 1 : conf < 60 ? 3 : conf < 80 ? 7 : 14;
  const last = dv.date(p.date);
  const days = Math.floor((today - last) / 86400000);
  if (days >= interval) {
    due.push([p.file.link, p.exam, conf + "%", days + "d ago"]);
  }
}
if (due.length > 0) {
  dv.table(["Note", "Exam", "Confidence", "Last Review"], 
    due.sort((a,b) => parseInt(a[2]) - parseInt(b[2])).slice(0, 15));
} else {
  dv.paragraph("✅ Tidak ada yang perlu di-review hari ini!");
}
```

## 🔥 Weakest Topics

```dataview
TABLE exam, confidence, difficulty
FROM "01 Exams" OR "02 Concepts"
WHERE type = "concept" AND confidence < 50
SORT confidence ASC
LIMIT 10
```

## 📝 Recent Activity

```dataview
TABLE type, exam, status
FROM ""
WHERE type != "daily" AND type != "weekly" AND type != "dashboard" AND type != "MOC"
SORT file.mtime DESC
LIMIT 10
```

## 📅 Study Hours This Week

```dataviewjs
const today = dv.date("today");
const weekAgo = dv.date("today").minus({days: 7});
const pages = dv.pages('"07 Daily"')
  .where(p => p.date && p.date >= weekAgo);
const total = pages.values.reduce((sum, p) => sum + (p["study-hours"] || 0), 0);
const avg = pages.length > 0 ? (total / pages.length).toFixed(1) : 0;
dv.paragraph(`📊 Total minggu ini: **${total} jam** (rata-rata ${avg} jam/hari)`);
```

## ⏳ Tasks

```tasks
not done
sort by due
limit 15
```
````

## Obsidian URI — Quick Capture dari Luar

Kamu bisa buka note tertentu dari browser atau app lain:

```
obsidian://open?vault=ASAI%20Vault&file=05%20MOCs%2FStudy%20Dashboard
```

Bookmark URL ini di browser kamu → satu klik langsung ke dashboard.

## Hotkey Cheatsheet

Setelah semua plugin terinstall, setup hotkeys ini:

| Hotkey | Action |
|--------|--------|
| `Ctrl+O` | Quick switcher |
| `Ctrl+P` | Command palette |
| `Ctrl+Shift+N` | QuickAdd: New Concept Note |
| `Ctrl+Shift+P` | QuickAdd: New Problem Note |
| `Ctrl+Shift+L` | QuickAdd: New Literature Note |
| `Ctrl+Shift+D` | Open today's daily note |
| `Alt+D` | Open Study Dashboard |
| `Ctrl+Shift+F` | Search seluruh vault |

---

# Appendix: Workflow Cheatsheet

```
┌───────────────────────────────────────────────--──┐
│                DAILY WORKFLOW                     │
├─────────────────────────────────────────────────--┤
│                                                   │
│  1. Buka Daily Note (Calendar sidebar)            │
│     ↓                                             │
│  2. Set focus: exam apa hari ini?                 │
│     ↓                                             │
│  3. Belajar → capture di Inbox                    │
│     ↓                                             │
│  4. Process Inbox:                                │
│     • Fleeting → extract jadi Concept Note        │
│     • Source → Literature Note + extract concepts │
│     • Soal → Problem Note                         │
│     ↓                                             │
│  5. LINK semua note baru ke note yang sudah ada   │
│     ↓                                             │
│  6. Update frontmatter (status, confidence)       │
│     ↓                                             │
│  7. Check Dashboard → review yang due             │
│     ↓                                             │
│  8. Update Daily Note (study hours, refleksi)     │
│                                                   │
├─────────────────────────────────────────────────--┤
│               WEEKLY WORKFLOW                     │
├─────────────────────────────────────────────────--┤
│                                                   │
│  1. Buat Weekly Review (Calendar sidebar)         │
│  2. Dataview queries otomatis populate            │
│  3. Refleksi: apa yang jalan, apa yang nggak      │
│  4. Explore Graph View — cari orphan notes        │
│  5. Update MOCs kalau ada cluster baru            │
│  6. Plan minggu depan                             │
│                                                   │
└─────────────────────────────────────────────────--┘
```

---

> [!tip] Mulai dari Mana?
> 1. **Hari 1:** Setup folder structure + install Dataview, Templater, Calendar
> 2. **Hari 2:** Copy templates ke vault + buat 3 concept notes sebagai test
> 3. **Hari 3:** Buat Study Dashboard + ASAI Master MOC
> 4. **Minggu 1:** Pakai workflow daily selama seminggu penuh
> 5. **Minggu 2:** Evaluasi, install plugin Tier 2 sesuai kebutuhan
> 6. **Bulan 1:** Vault kamu sudah 50+ notes, graph view mulai bermakna
> 
> Jangan coba setup semuanya sekaligus. **Iterasi > perfection.**
