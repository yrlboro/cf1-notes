# ActuNotes — Panduan Instalasi Tema

## File yang Disertakan

```
quartz.config.ts       → letakkan di root repo (ganti file yang ada)
quartz.layout.ts       → letakkan di root repo (ganti file yang ada)
custom.scss            → letakkan di quartz/styles/ (ganti file yang ada)
```

---

## Langkah Instalasi

### 1. Backup dulu
```bash
cp quartz.config.ts quartz.config.ts.backup
cp quartz.layout.ts quartz.layout.ts.backup
cp quartz/styles/custom.scss quartz/styles/custom.scss.backup
```

### 2. Copy file baru
```bash
# Dari folder download ini ke root repo Quartz kamu
cp quartz.config.ts   /path/to/your-quartz-repo/
cp quartz.layout.ts   /path/to/your-quartz-repo/
cp custom.scss        /path/to/your-quartz-repo/quartz/styles/
```

### 3. Jalankan build lokal untuk preview
```bash
npx quartz build --serve
# Buka http://localhost:8080
```

### 4. Kalau sudah oke, push ke GitHub
```bash
git add .
git commit -m "style: apply ActuNotes Precision Dark + Warm Editorial theme"
git push
```

---

## Penyesuaian Lanjutan

### Ganti nama & URL site
Di `quartz.config.ts`, ubah bagian ini:
```ts
pageTitle: "ActuNotes",       // nama di sidebar
baseUrl: "actunotes.my.id",   // domain kamu
```

### Ganti warna accent
**Dark mode** — cari & ubah `#d4a853` (gold) di `quartz.config.ts`:
```ts
darkMode: {
  secondary: "#d4a853",   // ← ganti warna accent dark mode di sini
}
```

**Light mode** — cari & ubah `#1a6b4a` (forest green):
```ts
lightMode: {
  secondary: "#1a6b4a",   // ← ganti warna accent light mode di sini
}
```

### Ganti font
Di `quartz.config.ts`, bagian `typography`:
```ts
typography: {
  header: "Instrument Serif",   // font judul (dark mode)
  body: "Geist",                // font isi
  code: "Geist Mono",           // font kode
}
```
Untuk light mode, font Lora + DM Sans di-load via `@import` di `custom.scss`
dan di-switch otomatis saat user ganti tema.

### Tambah/hapus komponen sidebar
Di `quartz.layout.ts`, edit bagian `left:` atau `right:`:
```ts
left: [
  Component.PageTitle(),
  Component.Search(),
  Component.Darkmode(),       // ← hapus baris ini untuk hilangkan toggle
  Component.Explorer(),
],
```

---

## Catatan Penting

- **Jangan edit `quartz/styles/base.scss`** — akan di-overwrite saat `npx quartz update`
- `custom.scss` aman dari update Quartz karena tidak di-track upstream
- Semua token warna pakai prefix `--an-` agar tidak clash dengan variabel Quartz bawaan
- Font Geist & Instrument Serif di-fetch via Google Fonts CDN otomatis
- Font Lora & DM Sans (light mode) di-fetch via `@import` di `custom.scss`

---

## Troubleshooting

**Font tidak muncul**
→ Pastikan koneksi internet aktif saat build pertama kali (Google Fonts CDN)
→ Atau set `cdnCaching: false` di `quartz.config.ts` untuk force re-fetch

**Warna tidak berubah**
→ Clear browser cache (Ctrl+Shift+R)
→ Pastikan `@use "./base.scss"` ada di baris pertama `custom.scss`

**Layout berantakan di mobile**
→ Quartz menangani mobile layout secara terpisah — sudah ada di `@media (max-width: 800px)` di `custom.scss`

**Explorer/file tree tidak muncul**
→ Cek `quartz.layout.ts`, pastikan `Component.DesktopOnly(Component.Explorer(...))` ada di array `left:`
