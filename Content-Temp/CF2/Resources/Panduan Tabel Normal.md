---
topic: "Cara Penggunaan Tabel Distribusi Normal"
topic_id: "REF-ZTABLE"
parent_topic: "Resources"
exam: "CF2"
type: "reference-guide"
covers: ["2.6 Distribusi Kontinu Umum", "4.2 Distribusi Sampel", "4.7 Selang Kepercayaan"]
ref_book: "Hogg-Tanis-Zimmerman (2015) Bab 3 | Miller (2014) Bab 6 | Lembar Ujian CF2 PAI"
tags: [CF2, Normal, TabelZ, QuickReference, Resources]
date_created: "2025-02-21"
status: "reference"
---

# 📐 Panduan Penggunaan Tabel Distribusi Normal — CF2

> [!ABSTRACT] Cara Pakai Note Ini
> Note ini adalah **panduan prosedural**, bukan penjelasan teori.
> Fokus: cara membaca tabel yang tersedia di lembar ujian CF2 PAI secara tepat dan cepat.
> Untuk teori distribusi Normal, lihat [[2.6 Distribusi Kontinu Umum]].

---

### Quick Lookup — Tabel 1: Half-Table $P(0 \leq Z \leq z)$

Sumber: Tabel 1 lembar ujian CF2 PAI (Oktober 2024). Nilai dipilih dari $z$ yang paling strategis untuk soal-soal CF2.

| $z$ | $P(0{\leq}Z{\leq}z)$ | $z$ | $P(0{\leq}Z{\leq}z)$ | $z$ | $P(0{\leq}Z{\leq}z)$ | $z$ | $P(0{\leq}Z{\leq}z)$ |
|---|---|---|---|---|---|---|---|
| 0.00 | 0.0000 | 1.00 | 0.3413 | 2.00 | 0.4772 | 3.00 | 0.4987 |
| 0.10 | 0.0398 | 1.05 | 0.3531 | 2.05 | 0.4798 | 3.10 | 0.4990 |
| 0.20 | 0.0793 | 1.10 | 0.3643 | 2.10 | 0.4821 | 3.20 | 0.4993 |
| 0.25 | 0.0987 | 1.15 | 0.3749 | 2.15 | 0.4842 | 3.30 | 0.4995 |
| 0.30 | 0.1179 | 1.20 | 0.3849 | 2.20 | 0.4861 | 3.40 | 0.4997 |
| 0.40 | 0.1554 | 1.25 | 0.3944 | 2.25 | 0.4878 | 3.50 | 0.4998 |
| 0.50 | 0.1915 | 1.28 | 0.3997 | 2.30 | 0.4893 | 3.60 | 0.4998 |
| 0.60 | 0.2257 | 1.30 | 0.4032 | 2.33 | 0.4901 | 3.70 | 0.4999 |
| 0.67 | 0.2486 | 1.35 | 0.4115 | 2.40 | 0.4918 | 3.80 | 0.4999 |
| 0.70 | 0.2580 | 1.40 | 0.4192 | 2.45 | 0.4929 | 3.90 | 0.5000 |
| 0.75 | 0.2734 | 1.45 | 0.4265 | 2.50 | 0.4938 | | |
| 0.80 | 0.2881 | 1.50 | 0.4332 | 2.55 | 0.4946 | | |
| 0.84 | 0.2995 | 1.55 | 0.4394 | 2.58 | 0.4951 | | |
| 0.90 | 0.3159 | 1.60 | 0.4452 | 2.60 | 0.4953 | | |
| 0.95 | 0.3289 | 1.645 | 0.4500 | 2.70 | 0.4965 | | |
| 0.96 | 0.3315 | 1.65 | 0.4505 | 2.80 | 0.4974 | | |
| 0.975 | 0.3340 | 1.70 | 0.4554 | 2.90 | 0.4981 | | |
| 0.98 | 0.3365 | 1.75 | 0.4599 | | | | |
| 0.99 | 0.3389 | 1.80 | 0.4641 | | | | |
| | | 1.90 | 0.4713 | | | | |
| | | 1.96 | 0.4750 | | | | |
| | | 1.98 | 0.4761 | | | | |

> [!NOTE] Nilai Kritis Strategis di Tabel 1
> - $z = 1.28$ → $P = 0.3997 \approx 0.4000$: gunakan untuk persentil ke-90 (one-tail 10%)
> - $z = 1.645$ → $P = 0.4500$: gunakan untuk persentil ke-95 (one-tail 5%) — **interpolasi** antara $z=1.64$ ($P=0.4495$) dan $z=1.65$ ($P=0.4505$)
> - $z = 1.96$ → $P = 0.4750$: gunakan untuk CI 95% two-tail (persentil ke-97.5)
> - $z = 2.33$ → $P = 0.4901 \approx 0.4900$: gunakan untuk persentil ke-99 (one-tail 1%)
> - $z = 2.58$ → $P = 0.4951 \approx 0.4950$: gunakan untuk CI 99% two-tail (persentil ke-99.5)

---

### Quick Lookup — Tabel 2: Left-Tail $\Phi(z) = P(Z \leq z)$

Sumber: Tabel 2 lembar ujian CF2 PAI (Oktober 2024). Mencakup seluruh rentang $z$ dari $-4.00$ hingga $3.95$ dengan step $0.05$.

**Bagian Negatif** ($z < 0$):

| $z$ | $\Phi(z)$ | $z$ | $\Phi(z)$ | $z$ | $\Phi(z)$ | $z$ | $\Phi(z)$ |
|---|---|---|---|---|---|---|---|
| −4.00 | 0.0000 | −3.00 | 0.0013 | −2.00 | 0.0228 | −1.00 | 0.1587 |
| −3.95 | 0.0000 | −2.95 | 0.0016 | −1.95 | 0.0256 | −0.95 | 0.1711 |
| −3.90 | 0.0000 | −2.90 | 0.0019 | −1.90 | 0.0287 | −0.90 | 0.1841 |
| −3.85 | 0.0001 | −2.85 | 0.0022 | −1.85 | 0.0322 | −0.85 | 0.1977 |
| −3.80 | 0.0001 | −2.80 | 0.0026 | −1.80 | 0.0359 | −0.80 | 0.2119 |
| −3.75 | 0.0001 | −2.75 | 0.0030 | −1.75 | 0.0401 | −0.75 | 0.2266 |
| −3.70 | 0.0001 | −2.70 | 0.0035 | −1.70 | 0.0446 | −0.70 | 0.2420 |
| −3.65 | 0.0001 | −2.65 | 0.0040 | −1.65 | 0.0495 | −0.65 | 0.2578 |
| −3.60 | 0.0002 | −2.60 | 0.0047 | −1.60 | 0.0548 | −0.60 | 0.2743 |
| −3.55 | 0.0002 | −2.55 | 0.0054 | −1.55 | 0.0606 | −0.55 | 0.2912 |
| −3.50 | 0.0002 | −2.50 | 0.0062 | −1.50 | 0.0668 | −0.50 | 0.3085 |
| −3.45 | 0.0003 | −2.45 | 0.0071 | −1.45 | 0.0735 | −0.45 | 0.3264 |
| −3.40 | 0.0003 | −2.40 | 0.0082 | −1.40 | 0.0808 | −0.40 | 0.3446 |
| −3.35 | 0.0004 | −2.35 | 0.0094 | −1.35 | 0.0885 | −0.35 | 0.3632 |
| −3.30 | 0.0005 | −2.30 | 0.0107 | −1.30 | 0.0968 | −0.30 | 0.3821 |
| −3.25 | 0.0006 | −2.25 | 0.0122 | −1.25 | 0.1056 | −0.25 | 0.4013 |
| −3.20 | 0.0007 | −2.20 | 0.0139 | −1.20 | 0.1151 | −0.20 | 0.4207 |
| −3.15 | 0.0008 | −2.15 | 0.0158 | −1.15 | 0.1251 | −0.15 | 0.4404 |
| −3.10 | 0.0010 | −2.10 | 0.0179 | −1.10 | 0.1357 | −0.10 | 0.4602 |
| −3.05 | 0.0011 | −2.05 | 0.0202 | −1.05 | 0.1469 | −0.05 | 0.4801 |

**Bagian Positif** ($z \geq 0$):

| $z$ | $\Phi(z)$ | $z$ | $\Phi(z)$ | $z$ | $\Phi(z)$ | $z$ | $\Phi(z)$ |
|---|---|---|---|---|---|---|---|
| 0.00 | 0.5000 | 1.00 | 0.8413 | 2.00 | 0.9772 | 3.00 | 0.9987 |
| 0.05 | 0.5199 | 1.05 | 0.8531 | 2.05 | 0.9798 | 3.05 | 0.9989 |
| 0.10 | 0.5398 | 1.10 | 0.8643 | 2.10 | 0.9821 | 3.10 | 0.9990 |
| 0.15 | 0.5596 | 1.15 | 0.8749 | 2.15 | 0.9842 | 3.15 | 0.9992 |
| 0.20 | 0.5793 | 1.20 | 0.8849 | 2.20 | 0.9861 | 3.20 | 0.9993 |
| 0.25 | 0.5987 | 1.25 | 0.8944 | 2.25 | 0.9878 | 3.25 | 0.9994 |
| 0.30 | 0.6179 | 1.30 | 0.9032 | 2.30 | 0.9893 | 3.30 | 0.9995 |
| 0.35 | 0.6368 | 1.35 | 0.9115 | 2.35 | 0.9906 | 3.35 | 0.9996 |
| 0.40 | 0.6554 | 1.40 | 0.9192 | 2.40 | 0.9918 | 3.40 | 0.9997 |
| 0.45 | 0.6736 | 1.45 | 0.9265 | 2.45 | 0.9929 | 3.45 | 0.9997 |
| 0.50 | 0.6915 | 1.50 | 0.9332 | 2.50 | 0.9938 | 3.50 | 0.9998 |
| 0.55 | 0.7088 | 1.55 | 0.9394 | 2.55 | 0.9946 | 3.55 | 0.9998 |
| 0.60 | 0.7257 | 1.60 | 0.9452 | 2.60 | 0.9953 | 3.60 | 0.9998 |
| 0.65 | 0.7422 | 1.65 | 0.9505 | 2.65 | 0.9960 | 3.65 | 0.9999 |
| 0.70 | 0.7580 | 1.70 | 0.9554 | 2.70 | 0.9965 | 3.70 | 0.9999 |
| 0.75 | 0.7734 | 1.75 | 0.9599 | 2.75 | 0.9970 | 3.75 | 0.9999 |
| 0.80 | 0.7881 | 1.80 | 0.9641 | 2.80 | 0.9974 | 3.80 | 0.9999 |
| 0.85 | 0.8023 | 1.85 | 0.9678 | 2.85 | 0.9978 | 3.85 | 0.9999 |
| 0.90 | 0.8159 | 1.90 | 0.9713 | 2.90 | 0.9981 | 3.90 | 1.0000 |
| 0.95 | 0.8289 | 1.95 | 0.9744 | 2.95 | 0.9984 | 3.95 | 1.0000 |

> [!NOTE] Catatan Tabel 2
> Tabel 2 di lembar ujian CF2 mencantumkan nilai dalam step $\Delta z = 0.05$. Untuk mendapatkan presisi ke desimal ketiga (misalnya $z = 1.645$), gunakan **interpolasi linear** seperti yang dijelaskan di Section 5.

---

## Section 1 — Identifikasi Tabel Sebelum Menggunakan

> [!DANGER] Jebakan Paling Umum di Ujian CF2
> Lembar ujian CF2 PAI menyediakan **dua tipe tabel Normal sekaligus** dalam satu lembar formula. Keduanya terlihat serupa tetapi mengukur area yang berbeda. Menggunakan angka dari tipe yang salah adalah **kesalahan fatal** karena hasilnya tampak masuk akal secara numerik — tidak ada error yang terlihat — namun jawaban akhir akan salah. Misalnya, membaca $P(Z \leq 1.00) = 0.3413$ (Tipe 1) padahal yang dibutuhkan adalah $\Phi(1.00) = 0.8413$ (Tipe 2) adalah kesalahan yang langsung mengubah jawaban secara signifikan tanpa peringatan apapun.
> **Wajib: cek tipe tabel SEBELUM membaca nilainya.**

| Cara Cek | Tipe 1 — Half-Table | Tipe 2 — Left-Tail $\Phi(z)$ |
|---|---|---|
| Nilai di $z = 0.00$ | **0.0000** | **0.5000** |
| Nilai di $z = 1.00$ | 0.3413 | 0.8413 |
| Mencakup $z$ negatif? | Tidak | Ya |
| Notasi tabel | $P(0 \leq Z \leq z)$ | $\Phi(z) = P(Z \leq z)$ |
| Formula tabel | $\displaystyle\int_0^z \frac{1}{\sqrt{2\pi}} e^{-t^2/2}\, dt$ | $\displaystyle\int_{-\infty}^z \frac{1}{\sqrt{2\pi}} e^{-t^2/2}\, dt$ |
| Relasi antar keduanya | $P(0 \leq Z \leq z) = \Phi(z) - 0.5$ | $\Phi(z) = P(0 \leq Z \leq z) + 0.5$ |

### Cara Membaca Baris dan Kolom Tabel

Pada kedua tipe tabel, struktur pembacaan nilai $z$ menggunakan dua indeks:

- **Baris** = dua digit pertama nilai $z$ (misalnya $1.2$ untuk $z = 1.2x$)
- **Kolom** = digit ketiga nilai $z$ (misalnya kolom $0.03$ untuk $z = 1.23$)

**Contoh Pembacaan — Tipe 1 (Half-Table):**

Cari $P(0 \leq Z \leq 1.23)$:
1. Temukan baris $1.2$
2. Temukan kolom $0.03$
3. Baca nilai: **0.3907**

Artinya: area antara $z=0$ dan $z=1.23$ adalah $0.3907$ (sekitar 39.07% dari total luas kurva).

**Contoh Pembacaan — Tipe 2 (Left-Tail $\Phi(z)$):**

Cari $\Phi(1.23) = P(Z \leq 1.23)$:
1. Temukan baris $1.2$
2. Temukan kolom $0.03$
3. Baca nilai: **0.8907**

Artinya: probabilitas $Z$ lebih kecil atau sama dengan $1.23$ adalah $0.8907$.

> [!NOTE] Verifikasi Cepat Konsistensi
> Perhatikan: $0.8907 = 0.3907 + 0.5$. Ini membuktikan relasi $\Phi(z) = P(0 \leq Z \leq z) + 0.5$ berlaku. Jika dua nilai yang Anda baca tidak memiliki selisih tepat $0.5$, Anda mungkin membaca dari baris/kolom yang berbeda.

---

## Section 2 — Standarisasi: Konversi X ke Z

> [!NOTE] Formula Standarisasi
> $$Z = \frac{X - \mu}{\sigma}$$
> - $X$ = variabel acak asli yang berdistribusi $N(\mu, \sigma^2)$
> - $\mu$ = mean (rata-rata) populasi
> - $\sigma$ = standar deviasi populasi ($\sigma > 0$; **bukan** variansi $\sigma^2$)
> - $Z$ = variabel acak terstandarisasi, $Z \sim N(0, 1)$
>
> Setelah konversi, semua probabilitas dapat dibaca dari tabel $Z$ standar.

> [!NOTE] Formula Invers (untuk Persentil)
> $$X = \mu + Z_p \cdot \sigma$$
> - $Z_p$ = nilai $z$ yang sesuai dengan persentil ke-$p$ dari distribusi $N(0,1)$, dibaca dari tabel secara terbalik (lookup invers)
> - Digunakan ketika diketahui probabilitas dan diminta mencari nilai $x$ yang bersesuaian

### Nilai $z$ Kritis yang Wajib Hafal

Nilai-nilai berikut adalah yang paling sering muncul di soal CF2, khususnya untuk selang kepercayaan dan uji hipotesis:

| Persentil / Kepercayaan | $z$ (dari Tipe 2, left-tail $\Phi$) | Penggunaan Umum |
|---|---|---|
| 90% (one-tail) | **1.282** | CI 80%, uji one-tail $\alpha = 10\%$ |
| 95% (one-tail) | **1.645** | CI 90%, uji one-tail $\alpha = 5\%$ |
| 97.5% (one-tail) | **1.960** | CI 95%, uji two-tail $\alpha = 5\%$ |
| 99% (one-tail) | **2.326** | CI 98%, uji one-tail $\alpha = 1\%$ |
| 99.5% (one-tail) | **2.576** | CI 99%, uji two-tail $\alpha = 1\%$ |

> [!WARNING] Nilai $z$ di Atas Dibaca dari Tipe 2 (Left-Tail)
> Semua nilai $z_p$ pada tabel di atas adalah nilai di mana $\Phi(z_p) = p$, yaitu dibaca dari **Tipe 2**.
> Jika tabel yang tersedia adalah **Tipe 1 (half-table)**, lakukan konversi:
> $$z_p \text{ dari Tipe 1} \Leftrightarrow P(0 \leq Z \leq z_p) = p - 0.5$$
> Contoh: untuk $z_{0.975}$, cari nilai $z$ di Tipe 1 di mana $P(0 \leq Z \leq z) = 0.975 - 0.5 = 0.4750$ → $z = 1.960$.

---

## Section 3 — Enam Kasus Standar dan Cara Penyelesaiannya

### Kasus 1 — Left-Tail: $P(X < a)$

**Deskripsi area:** Seluruh area di bawah kurva dari $-\infty$ hingga nilai $a$. Ini adalah kasus paling langsung.

**Prosedur:**
1. Standarisasi: $z_a = \dfrac{a - \mu}{\sigma}$
2. Jika menggunakan **Tipe 2**: baca $\Phi(z_a)$ langsung
3. Jika menggunakan **Tipe 1** dan $z_a > 0$: $P(X < a) = 0.5 + P(0 \leq Z \leq z_a)$

**Contoh Numerik:**

Diketahui $X \sim N(70, 100)$ (artinya $\mu = 70$, $\sigma = 10$). Cari $P(X < 83)$.

$$z_a = \frac{83 - 70}{10} = \frac{13}{10} = 1.30$$

- **Tipe 2:** $P(X < 83) = \Phi(1.30) = \mathbf{0.9032}$
- **Tipe 1:** $P(X < 83) = 0.5 + P(0 \leq Z \leq 1.30) = 0.5 + 0.4032 = \mathbf{0.9032}$ ✓

---

### Kasus 2 — Right-Tail: $P(X > a)$

**Deskripsi area:** Area di bawah kurva dari $a$ hingga $+\infty$. Gunakan komplemen.

**Prosedur:**
1. Standarisasi: $z_a = \dfrac{a - \mu}{\sigma}$
2. Jika menggunakan **Tipe 2**: $P(X > a) = 1 - \Phi(z_a)$
3. Jika menggunakan **Tipe 1** dan $z_a > 0$: $P(X > a) = 0.5 - P(0 \leq Z \leq z_a)$

**Contoh Numerik:**

Diketahui $X \sim N(50, 25)$ (artinya $\mu = 50$, $\sigma = 5$). Cari $P(X > 57.5)$.

$$z_a = \frac{57.5 - 50}{5} = \frac{7.5}{5} = 1.50$$

- **Tipe 2:** $P(X > 57.5) = 1 - \Phi(1.50) = 1 - 0.9332 = \mathbf{0.0668}$
- **Tipe 1:** $P(X > 57.5) = 0.5 - P(0 \leq Z \leq 1.50) = 0.5 - 0.4332 = \mathbf{0.0668}$ ✓

---

### Kasus 3 — Interval Simetris: $P(-a < Z < a)$

**Deskripsi area:** Area di sekitar pusat kurva yang simetris terhadap $z = 0$. Kasus ini sering muncul dalam konteks selang kepercayaan.

**Prosedur:**
- **Tipe 1 (paling langsung):** $P(-a < Z < a) = 2 \cdot P(0 \leq Z \leq a)$
- **Tipe 2:** $P(-a < Z < a) = 2\Phi(a) - 1$

**Contoh Numerik:**

Cari $P(-1.96 < Z < 1.96)$.

- **Tipe 1:** $P(-1.96 < Z < 1.96) = 2 \times P(0 \leq Z \leq 1.96) = 2 \times 0.4750 = \mathbf{0.9500}$
- **Tipe 2:** $P(-1.96 < Z < 1.96) = 2\Phi(1.96) - 1 = 2(0.9750) - 1 = \mathbf{0.9500}$ ✓

Ini menjelaskan mengapa $z = 1.96$ digunakan untuk CI 95%: area tengah adalah tepat 95%.

---

### Kasus 4 — Interval Umum: $P(a < X < b)$ (tidak simetris)

**Deskripsi area:** Area antara dua nilai $a$ dan $b$ di mana $a < b$, keduanya tidak harus simetris terhadap $\mu$.

**Prosedur:**
1. Standarisasi kedua batas: $z_a = \dfrac{a - \mu}{\sigma}$, $z_b = \dfrac{b - \mu}{\sigma}$
2. **Tipe 2:** $P(a < X < b) = \Phi(z_b) - \Phi(z_a)$
3. **Tipe 1:** Terapkan kasus 1 untuk masing-masing batas, lalu kurangkan

**Contoh Numerik:**

Diketahui $X \sim N(100, 225)$ (artinya $\mu = 100$, $\sigma = 15$). Cari $P(85 < X < 121)$.

$$z_a = \frac{85 - 100}{15} = \frac{-15}{15} = -1.00 \qquad z_b = \frac{121 - 100}{15} = \frac{21}{15} = 1.40$$

- **Tipe 2:**
$$P(85 < X < 121) = \Phi(1.40) - \Phi(-1.00) = 0.9192 - 0.1587 = \mathbf{0.7605}$$

- **Tipe 1:** (perhatikan $z_a$ negatif, gunakan simetri — lihat Kasus 5)
$$P(Z < -1.00) = 0.5 - P(0 \leq Z \leq 1.00) = 0.5 - 0.3413 = 0.1587$$
$$P(Z < 1.40) = 0.5 + P(0 \leq Z \leq 1.40) = 0.5 + 0.4192 = 0.9192$$
$$P(85 < X < 121) = 0.9192 - 0.1587 = \mathbf{0.7605}$$ ✓

---

### Kasus 5 — $z$ Negatif: $P(Z < -a)$ atau $P(X < a)$ di mana $z < 0$

**Deskripsi area:** Area di bawah kurva di sebelah kiri nilai $z$ yang negatif. Tabel Tipe 1 **tidak mencakup $z$ negatif** — gunakan simetri kurva Normal.

**Prinsip Simetri:**
$$P(Z < -a) = P(Z > a) = 1 - \Phi(a) \quad \text{(Tipe 2)}$$
$$P(Z < -a) = 0.5 - P(0 \leq Z \leq a) \quad \text{(Tipe 1)}$$

**Prosedur (Tipe 1):**
1. Ubah $z$ negatif menjadi positif: gunakan $|z|$
2. Baca $P(0 \leq Z \leq |z|)$ dari tabel
3. Kurangkan dari 0.5: $P(Z < -|z|) = 0.5 - P(0 \leq Z \leq |z|)$

**Contoh Numerik:**

Diketahui $X \sim N(200, 400)$ (artinya $\mu = 200$, $\sigma = 20$). Cari $P(X < 170)$.

$$z = \frac{170 - 200}{20} = \frac{-30}{20} = -1.50$$

- **Tipe 2:** $\Phi(-1.50) = 1 - \Phi(1.50) = 1 - 0.9332 = \mathbf{0.0668}$
- **Tipe 1:** $P(Z < -1.50) = 0.5 - P(0 \leq Z \leq 1.50) = 0.5 - 0.4332 = \mathbf{0.0668}$ ✓

---

### Kasus 6 — Mencari Nilai $x$ dari Probabilitas (Invers / Persentil)

**Deskripsi:** Diberikan $P(X < x) = p$, cari nilai $x$. Ini adalah **lookup terbalik** — kita tahu probabilitas dan mencari nilai $z$ yang bersesuaian.

**Prosedur:**
1. Cari $z_p$ di tabel: temukan nilai dalam tabel yang sama dengan $p$ (atau paling dekat), baca nilai $z$ yang bersesuaian
2. Hitung $x$: gunakan formula invers $x = \mu + z_p \cdot \sigma$

**Prosedur Interpolasi Linear (jika nilai $p$ tidak persis ada di tabel):**

Jika $p$ berada di antara dua nilai tabel $p_1$ dan $p_2$ yang bersesuaian dengan $z_1$ dan $z_2$:
$$z_p \approx z_1 + \frac{p - p_1}{p_2 - p_1} \cdot (z_2 - z_1)$$

**Contoh Numerik:**

Diketahui $X \sim N(60, 64)$ (artinya $\mu = 60$, $\sigma = 8$). Cari $x$ di mana $P(X < x) = 0.90$.

**Langkah 1 — Cari $z_{0.90}$:**

- **Tipe 2:** Cari di tabel nilai yang mendekati $0.9000$.
  - $\Phi(1.28) = 0.8997$
  - $\Phi(1.29) = 0.9015$
  - Interpolasi: $z_{0.90} \approx 1.28 + \dfrac{0.9000 - 0.8997}{0.9015 - 0.8997} \times (1.29 - 1.28) = 1.28 + \dfrac{0.0003}{0.0018} \times 0.01 \approx 1.282$

- **Tipe 1:** Cari nilai yang mendekati $0.90 - 0.50 = 0.4000$.
  - $P(0 \leq Z \leq 1.28) = 0.3997$
  - $P(0 \leq Z \leq 1.29) = 0.4015$
  - Interpolasi identik → $z_{0.90} \approx 1.282$

**Langkah 2 — Hitung $x$:**
$$x = \mu + z_p \cdot \sigma = 60 + 1.282 \times 8 = 60 + 10.256 = \mathbf{70.256}$$

Interpretasi: 90% nilai $X$ berada di bawah $70.256$.

---

> [!SUMMARY] Pola Umum — Ringkasan Keenam Kasus
>
> | Kasus | Formula Umum (Tipe 2) | Formula Umum (Tipe 1) |
> |---|---|---|
> | $P(X < a)$ | $\Phi(z_a)$ | $0.5 + P(0 \leq Z \leq z_a)$ jika $z_a > 0$ |
> | $P(X > a)$ | $1 - \Phi(z_a)$ | $0.5 - P(0 \leq Z \leq z_a)$ jika $z_a > 0$ |
> | $P(a < X < b)$ | $\Phi(z_b) - \Phi(z_a)$ | Sesuai tanda $z$, kerjakan kasus per kasus |
> | $P(-a < Z < a)$ | $2\Phi(a) - 1$ | $2 \cdot P(0 \leq Z \leq a)$ |
> | $P(Z < -a)$ | $1 - \Phi(a)$ | $0.5 - P(0 \leq Z \leq a)$ |
> | Cari $x$ dari $P(X < x) = p$ | $x = \mu + z_p \sigma$ | $x = \mu + z_p \sigma$ |

---

## Section 4 — Tabel t, Chi-Square, dan F: Perbedaan Cara Baca

> [!IMPORTANT] Perbedaan Fundamental: Tabel Z vs Tabel t/$\chi^2$/F
> Tabel $Z$ berfungsi sebagai **probabilitas → nilai**: Anda memasukkan nilai $z$, tabel mengeluarkan probabilitas $\Phi(z)$.
>
> Tabel $t$, $\chi^2$, dan $F$ berfungsi **sebaliknya**: Anda memasukkan tingkat signifikansi $\alpha$ dan derajat bebas, tabel mengeluarkan **nilai kritis**. Arah lookup-nya berlawanan dengan tabel $Z$.
>
> Jangan mencoba "membaca probabilitas" dari tabel $t$, $\chi^2$, atau $F$ dengan cara yang sama seperti tabel $Z$.

### Tabel $t$

Distribusi $t$ digunakan ketika variansi populasi $\sigma^2$ tidak diketahui dan diganti dengan variansi sampel $s^2$.

**Struktur tabel:**
- **Baris** = derajat bebas $\nu$ (degrees of freedom)
- **Kolom** = $\alpha$ (upper-tail probability, yaitu $P(T > t_{\alpha,\nu}) = \alpha$)

**Notasi:** $t_{\alpha, \nu}$ adalah nilai $t$ di mana $P(T > t_{\alpha,\nu}) = \alpha$ untuk $T \sim t(\nu)$.

**Simetri:** Karena distribusi $t$ simetris terhadap nol:
$$t_{1-\alpha, \nu} = -t_{\alpha, \nu}$$

Contoh: $t_{0.975, 10} = -t_{0.025, 10}$. Untuk CI 95% two-tail, gunakan $\pm t_{0.025, \nu}$.

**Nilai kritis umum untuk CI 95% (two-tail):** baca kolom $\alpha = 0.025$, baris $\nu = n - 1$.

> [!NOTE] Konvergensi ke $Z$
> Saat $\nu \to \infty$, distribusi $t$ mendekati distribusi Normal standar: $t_{\alpha, \infty} \to z_\alpha$. Sebagai aturan praktis, untuk $\nu > 120$, nilai $t$ dapat diaproksimasi dengan nilai $z$.

### Tabel Chi-Square ($\chi^2$)

Distribusi $\chi^2$ digunakan untuk inferensi mengenai variansi $\sigma^2$ dan uji goodness-of-fit.

**Struktur tabel:**
- **Baris** = derajat bebas $\nu$
- **Kolom** = $\alpha$ (upper-tail probability, yaitu $P(\chi^2 > \chi^2_{\alpha,\nu}) = \alpha$)

**Notasi:** $\chi^2_{\alpha, \nu}$ adalah nilai di mana $P(\chi^2 > \chi^2_{\alpha,\nu}) = \alpha$.

**Perbedaan kritis — distribusi $\chi^2$ TIDAK simetris:**

Tidak ada aturan simetri seperti distribusi $t$. Untuk CI two-tail, diperlukan **dua nilai kritis yang berbeda**:
- Batas atas CI untuk $\sigma^2$: gunakan $\chi^2_{\alpha/2, \nu}$ (nilai kecil dari tabel, kolom $\alpha/2$)
- Batas bawah CI untuk $\sigma^2$: gunakan $\chi^2_{1-\alpha/2, \nu}$ (nilai besar dari tabel, kolom $1-\alpha/2$)

**Penggunaan utama di CF2:** Selang kepercayaan untuk variansi populasi $\sigma^2$:
$$\left(\frac{(n-1)s^2}{\chi^2_{\alpha/2,\, n-1}},\; \frac{(n-1)s^2}{\chi^2_{1-\alpha/2,\, n-1}}\right)$$

### Tabel F

Distribusi $F$ digunakan untuk membandingkan dua variansi populasi.

**Struktur tabel:**
- **Baris** = $\nu_2$ (derajat bebas denominator)
- **Kolom** = $\nu_1$ (derajat bebas numerator)
- Setiap tabel berlaku untuk **satu nilai $\alpha$ tertentu** — di lembar ujian CF2 biasanya tersedia beberapa sub-tabel untuk $\alpha$ berbeda

**Notasi:** $F_{\alpha, \nu_1, \nu_2}$ adalah nilai di mana $P(F > F_{\alpha,\nu_1,\nu_2}) = \alpha$ untuk $F \sim F(\nu_1, \nu_2)$.

**Simetri yang sering dilupakan (lower-tail):**
$$F_{1-\alpha,\, \nu_1,\, \nu_2} = \frac{1}{F_{\alpha,\, \nu_2,\, \nu_1}}$$

Perhatikan: $\nu_1$ dan $\nu_2$ **dibalik posisinya** di sisi kanan. Ini digunakan saat menghitung batas bawah CI untuk rasio variansi $\sigma_1^2/\sigma_2^2$.

**Penggunaan utama di CF2:** Uji rasio dua variansi dan selang kepercayaan untuk $\sigma_1^2/\sigma_2^2$.

### Perbandingan Keempat Tabel

| Aspek | Tabel $Z$ | Tabel $t$ | Tabel $\chi^2$ | Tabel $F$ |
|---|---|---|---|---|
| Tabel memberi | Probabilitas $\Phi(z)$ | Nilai kritis | Nilai kritis | Nilai kritis |
| Index baris | Nilai $z$ | Derajat bebas $\nu$ | Derajat bebas $\nu$ | df denominator $\nu_2$ |
| Index kolom | Digit ke-3 nilai $z$ | Upper-tail $\alpha$ | Upper-tail $\alpha$ | df numerator $\nu_1$ |
| Simetris? | Ya | Ya | Tidak | Tidak (gunakan relasi invers) |
| Arah lookup | $z \rightarrow$ probabilitas | $\alpha, \nu \rightarrow$ nilai kritis | $\alpha, \nu \rightarrow$ nilai kritis | $\alpha, \nu_1, \nu_2 \rightarrow$ nilai kritis |
| Relasi simetri | $P(Z < -z) = 1 - \Phi(z)$ | $t_{1-\alpha,\nu} = -t_{\alpha,\nu}$ | Tidak ada | $F_{1-\alpha,\nu_1,\nu_2} = 1/F_{\alpha,\nu_2,\nu_1}$ |
| Penggunaan utama CF2 | Probabilitas Normal | CI/uji untuk $\mu$ (σ² tidak diketahui) | CI/uji untuk $\sigma^2$ | Uji rasio $\sigma_1^2/\sigma_2^2$ |

---

## Section 5 — Jebakan Ujian dan Prosedur Cepat

> [!BUG] Kesalahan Tipe Tabel
> **Skenario:** Peserta ingin menghitung $P(Z \leq 1.00)$ dan langsung membaca nilai dari tabel tanpa mengecek tipenya.
>
> - Jika tabel adalah Tipe 1 (half-table), nilai yang dibaca adalah $P(0 \leq Z \leq 1.00) = 0.3413$
> - Nilai yang seharusnya adalah $\Phi(1.00) = P(Z \leq 1.00) = 0.8413$
> - Selisih: $0.8413 - 0.3413 = 0.5000$ — kesalahan besar yang tidak terlihat sebagai "error"
>
> **Dampak konkret:** Jika soal meminta batas atas CI 90% untuk rata-rata dan peserta menggunakan $z = 0.3413$ (hasil baca salah tipe) alih-alih $z = 1.282$, interval yang dihitung akan jauh lebih sempit dari yang seharusnya dan jawaban akhir akan salah total.
>
> **Solusi:** Selalu cek nilai di $z = 0$ sebelum menggunakan tabel. Tipe 1 → $0.0000$. Tipe 2 → $0.5000$.

> [!BUG] Kesalahan Tanda $z$ Negatif
> **Skenario:** Peserta mendapatkan $z = -1.50$ dari standarisasi dan mencoba langsung mencari $z = -1.50$ di tabel Tipe 1.
>
> Tabel Tipe 1 **tidak memiliki baris untuk $z$ negatif**. Beberapa peserta salah mengambil nilai $z = 1.50$ dan menggunakannya langsung sebagai $P(Z < -1.50)$, padahal $P(0 \leq Z \leq 1.50) = 0.4332$, bukan $P(Z < -1.50)$.
>
> **Langkah yang benar (Tipe 1):**
> 1. Ambil nilai mutlak: $|{-1.50}| = 1.50$
> 2. Baca $P(0 \leq Z \leq 1.50) = 0.4332$ dari tabel
> 3. Kurangkan dari 0.5: $P(Z < -1.50) = 0.5 - 0.4332 = 0.0668$
>
> **Langkah yang benar (Tipe 2):** Gunakan simetri $\Phi(-a) = 1 - \Phi(a)$:
> $\Phi(-1.50) = 1 - \Phi(1.50) = 1 - 0.9332 = 0.0668$

> [!BUG] Salah Baca Derajat Bebas untuk Tabel $t$
> **Skenario:** Peserta menggunakan $\nu = n$ (ukuran sampel) langsung sebagai derajat bebas saat lookup tabel $t$.
>
> Derajat bebas yang benar bergantung pada konteks:
> - **Satu sampel, uji untuk $\mu$:** $\nu = n - 1$
> - **Dua sampel independen, variansi sama (pooled):** $\nu = n_1 + n_2 - 2$
> - **Dua sampel independen, variansi tidak sama (Welch):** $\nu$ dihitung dengan formula Welch-Satterthwaite (biasanya diberikan di soal)
> - **Data berpasangan:** $\nu = n_d - 1$ di mana $n_d$ adalah jumlah pasangan
>
> Menggunakan $\nu = n$ alih-alih $\nu = n-1$ akan menghasilkan nilai kritis $t$ yang sedikit lebih kecil (karena $t$ menurun seiring $\nu$ meningkat), sehingga CI terlalu sempit dan kesimpulan uji hipotesis bisa salah.

> [!BUG] Kesalahan Tabel F — Derajat Bebas Terbalik
> **Skenario 1 — Lookup salah urutan df:**
> Peserta ingin mencari $F_{0.05, 4, 10}$ (numerator df = 4, denominator df = 10) tetapi secara tidak sengaja membaca baris $\nu_1 = 4$ dan kolom $\nu_2 = 10$ — padahal strukturnya adalah baris = df denominator ($\nu_2$) dan kolom = df numerator ($\nu_1$). Pastikan orientasi tabel dikonfirmasi dari header.
>
> **Skenario 2 — Lower-tail F:**
> Untuk mendapatkan nilai lower-tail $F_{1-\alpha, \nu_1, \nu_2}$ (dibutuhkan untuk batas bawah CI rasio variansi), gunakan:
> $$F_{1-\alpha,\, \nu_1,\, \nu_2} = \frac{1}{F_{\alpha,\, \nu_2,\, \nu_1}}$$
> Perhatikan bahwa df **dibalik** ($\nu_1 \leftrightarrow \nu_2$) di sisi kanan. Banyak peserta lupa membalik df dan langsung mengambil $1/F_{\alpha, \nu_1, \nu_2}$ — ini salah.

### Prosedur Cepat 3 Langkah (untuk Soal Normal)

**Langkah 1 — Identifikasi Tipe Tabel**
Sebelum membaca angka apapun, lihat nilai di $z = 0$:
- $0.0000$ → Tipe 1 (half-table): tabel memberi $P(0 \leq Z \leq z)$
- $0.5000$ → Tipe 2 (left-tail): tabel memberi $\Phi(z) = P(Z \leq z)$

**Langkah 2 — Standarisasi**
Konversi nilai $X$ ke nilai $Z$:
$$Z = \frac{X - \mu}{\sigma}$$
Jika $Z$ negatif, gunakan simetri. Jangan langsung mencari $z$ negatif di Tipe 1.

**Langkah 3 — Terapkan Formula Sesuai Kasus**
Tentukan kasus dari bentuk probabilitas yang diminta dan terapkan formula dari Section 3 yang bersesuaian. Jika soal meminta nilai $x$ (bukan probabilitas), lakukan lookup invers (Kasus 6).

> [!CAUTION] Interpolasi Linear untuk Nilai $z$ Tidak Tersedia
> Di beberapa versi tabel CF2, nilai seperti $z = 1.645$ mungkin tidak tersedia persis (tabel melompat dari $z = 1.64$ ke $z = 1.65$). Gunakan **interpolasi linear**:
>
> **Prosedur:**
> Misalkan diketahui $\Phi(1.64) = 0.9495$ dan $\Phi(1.65) = 0.9505$, dan dibutuhkan $\Phi(1.645)$:
> $$\Phi(1.645) \approx 0.9495 + \frac{1.645 - 1.64}{1.65 - 1.64} \times (0.9505 - 0.9495) = 0.9495 + 0.5 \times 0.0010 = 0.9500$$
>
> **Formula umum:** Jika $z$ berada di antara $z_1$ dan $z_2$ (dengan nilai tabel $p_1$ dan $p_2$):
> $$\Phi(z) \approx p_1 + \frac{z - z_1}{z_2 - z_1} \times (p_2 - p_1)$$
>
> Interpolasi linear memberikan presisi yang cukup untuk ujian CF2. Untuk lookup invers (Kasus 6), rumus interpolasi dibalik: masukkan probabilitas, keluarkan nilai $z$.

---

> [!NOTE] Referensi Tabel
> Tabel yang dibahas di note ini adalah tabel yang tersedia di **lembar ujian resmi CF2 PAI**.
> Untuk konten distribusi Normal secara teoritis, lihat [[2.6 Distribusi Kontinu Umum]].
> Untuk penggunaan dalam konteks inferensi, lihat [[4.7 Selang Kepercayaan]] dan [[4.8 Uji Hipotesis]].

*📖 Ref: Hogg-Tanis-Zimmerman (2015) Bab 3 | Miller (2014) Bab 6 | Lembar Ujian CF2 PAI | 🗓️ 2025-02-21 | #CF2 #TabelNormal #Resources*
