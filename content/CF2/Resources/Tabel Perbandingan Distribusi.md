---
topic: "Tabel Perbandingan Distribusi — CF2 Quick Reference"
topic_id: "REF-DIST"
parent_topic: "Resources"
exam: "CF2"
type: "cheat-sheet"
covers: ["2.5 Distribusi Diskrit Umum", "2.6 Distribusi Kontinu Umum"]
ref_book: "Hogg-Tanis-Zimmerman (2015) | Miller (2014)"
tags: [CF2, Distribusi, CheatSheet, QuickReference, Probabilitas]
date_created: "2026-02-21"
status: "reference"
---

# 📋 Tabel Perbandingan Distribusi — CF2 Quick Reference

> [!ABSTRACT] Cara Pakai
> Tabel ini menggunakan parametrisasi **Hogg-Tanis-Zimmerman (2015)** sebagai acuan primer.
> Jika menemukan notasi berbeda di sumber lain, cek kolom **Notasi Alternatif**.
> Semua simbol didefinisikan di bagian bawah tabel.

> [!WARNING] Collision Warning Simbol
> - $\beta$: dipakai sebagai parameter scale Gamma **DAN** sebagai probabilitas Type II error di inferensi — selalu cek konteks.
> - $\lambda$: dipakai sebagai mean Poisson **DAN** sebagai rate di parametrisasi Eksponensial alternatif (bukan HTZ).
> - $\theta$: dipakai sebagai scale/mean Eksponensial di HTZ — bukan rate.

---

## Distribusi Diskrit

> [!NOTE] Lihat detail derivasi di [[2.5 Distribusi Diskrit Umum]]

| **Distribusi** | **Parameter** | **Support** | **PMF** $p(x)$ | **Mean** $E[X]$ | **Variansi** $\text{Var}(X)$ | **MGF** $M_X(t)$ | **Sifat Khusus** |
|---|---|---|---|---|---|---|---|
| **Bernoulli** $X \sim \text{Bernoulli}(p)$ | $p \in (0,1)$: probabilitas sukses | $x \in \{0, 1\}$ | $p^x (1-p)^{1-x}$ | $p$ | $p(1-p)$ | $M_X(t) = (1-p) + pe^t$, $\forall t \in \mathbb{R}$ | **Special case of** Binomial dengan $n=1$ |
| **Binomial** $X \sim B(n, p)$ | $n \in \mathbb{Z}^+$: jumlah trial; $p \in (0,1)$: prob. sukses | $x \in \{0, 1, \ldots, n\}$ | $\displaystyle\binom{n}{x} p^x (1-p)^{n-x}$ | $np$ | $np(1-p)$ | $M_X(t) = \left[(1-p) + pe^t\right]^n$, $\forall t \in \mathbb{R}$ | **Reproductive** (p sama); **Limit of** — Poisson saat $n \to \infty$, $np \to \lambda$ |
| **Poisson** $X \sim \text{Poisson}(\lambda)$ | $\lambda > 0$: rata-rata kejadian | $x \in \{0, 1, 2, \ldots\}$ | $\displaystyle\frac{e^{-\lambda}\lambda^x}{x!}$ | $\lambda$ | $\lambda$ | $M_X(t) = e^{\lambda(e^t - 1)}$, $\forall t \in \mathbb{R}$ | **Mean = Variance**; **Reproductive**; **Limit of** Binomial |
| **Geometrik** $X \sim \text{Geom}(p)$ | $p \in (0,1)$: prob. sukses | $x \in \{1, 2, 3, \ldots\}$ *(jumlah trial sampai sukses pertama)* | $(1-p)^{x-1}p$ | $\dfrac{1}{p}$ | $\dfrac{1-p}{p^2}$ | $M_X(t) = \dfrac{pe^t}{1-(1-p)e^t}$, $t < -\ln(1-p)$ | **Memoryless**: $P(X > s+t \mid X > s) = P(X > t)$; **Special case of** NB dengan $r=1$ |
| **Hipergeometrik** $X \sim \text{HGeom}(N, K, n)$ | $N \in \mathbb{Z}^+$: populasi; $K \in \mathbb{Z}^+$: objek interest; $n \in \mathbb{Z}^+$: sampel | $x \in \{\max(0, n+K-N), \ldots, \min(n,K)\}$ | $\displaystyle\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$ | $\dfrac{nK}{N}$ | $\dfrac{nK(N-K)(N-n)}{N^2(N-1)}$ | Tidak ada bentuk tertutup sederhana | Tanpa pengembalian; sampling tanpa replacement; mendekati Binomial saat $N \to \infty$ |
| **Binomial Negatif** $X \sim \text{NB}(r, p)$ | $r \in \mathbb{Z}^+$: jumlah sukses yang diinginkan; $p \in (0,1)$: prob. sukses | $x \in \{r, r+1, r+2, \ldots\}$ *(jumlah trial sampai sukses ke-$r$)* | $\displaystyle\binom{x-1}{r-1} p^r (1-p)^{x-r}$ | $\dfrac{r}{p}$ | $\dfrac{r(1-p)}{p^2}$ | $M_X(t) = \left[\dfrac{pe^t}{1-(1-p)e^t}\right]^r$, $t < -\ln(1-p)$ | **Special case**: Geometrik = NB dengan $r=1$; jumlah $r$ Geometrik independen |

---

## Distribusi Kontinu

> [!NOTE] Lihat detail derivasi di [[2.6 Distribusi Kontinu Umum]]

| **Distribusi** | **Parameter** | **Support** | **PDF** $f(x)$ | **Mean** $E[X]$ | **Variansi** $\text{Var}(X)$ | **MGF** $M_X(t)$ | **Sifat Khusus** |
|---|---|---|---|---|---|---|---|
| **Uniform** $X \sim U(a, b)$ | $a < b$, $a,b \in \mathbb{R}$ | $x \in (a, b)$ | $\dfrac{1}{b-a}$ | $\dfrac{a+b}{2}$ | $\dfrac{(b-a)^2}{12}$ | $M_X(t) = \dfrac{e^{tb}-e^{ta}}{t(b-a)}$, $t \neq 0$; $M_X(0)=1$ | **Symmetric** di sekitar $\frac{a+b}{2}$; **Location-scale family** |
| **Eksponensial** $X \sim \text{Exp}(\theta)$ | $\theta > 0$: scale (mean), $\theta = 1/\lambda$ | $x \in (0, \infty)$ | $\dfrac{1}{\theta}e^{-x/\theta}$ | $\theta$ | $\theta^2$ | $M_X(t) = \dfrac{1}{1-\theta t}$, $t < \dfrac{1}{\theta}$ | **Memoryless**: $P(X > s+t \mid X > s) = P(X > t)$; **Special case of** Gamma dengan $\alpha=1$ |
| **Gamma** $X \sim \Gamma(\alpha, \beta)$ | $\alpha > 0$: shape; $\beta > 0$: scale | $x \in (0, \infty)$ | $\dfrac{1}{\Gamma(\alpha)\beta^\alpha}x^{\alpha-1}e^{-x/\beta}$ | $\alpha\beta$ | $\alpha\beta^2$ | $M_X(t) = \left(\dfrac{1}{1-\beta t}\right)^\alpha$, $t < \dfrac{1}{\beta}$ | **Reproductive**; **Special case**: Exp = $\Gamma(1,\theta)$; Chi-kuadrat = $\Gamma(\nu/2, 2)$ |
| **Normal** $X \sim N(\mu, \sigma^2)$ | $\mu \in \mathbb{R}$: mean; $\sigma^2 > 0$: variansi | $x \in (-\infty, \infty)$ | $\dfrac{1}{\sigma\sqrt{2\pi}}\exp\!\left[-\dfrac{(x-\mu)^2}{2\sigma^2}\right]$ | $\mu$ | $\sigma^2$ | $M_X(t) = \exp\!\left(\mu t + \dfrac{\sigma^2 t^2}{2}\right)$, $\forall t \in \mathbb{R}$ | **Symmetric** di sekitar $\mu$; **Reproductive**; **Location-scale family**; **Limit of** banyak distribusi (CLT) |
| **Chi-Kuadrat** $X \sim \chi^2(\nu)$ | $\nu \in \mathbb{Z}^+$: derajat bebas | $x \in (0, \infty)$ | $\dfrac{1}{\Gamma(\nu/2)\,2^{\nu/2}}x^{\nu/2-1}e^{-x/2}$ | $\nu$ | $2\nu$ | $M_X(t) = \left(\dfrac{1}{1-2t}\right)^{\nu/2}$, $t < \dfrac{1}{2}$ | **Special case of** Gamma: $\chi^2(\nu) = \Gamma(\nu/2, 2)$; **Reproductive**; $Z^2 \sim \chi^2(1)$ jika $Z \sim N(0,1)$ |
| **Student-$t$** $X \sim t(\nu)$ | $\nu \in \mathbb{Z}^+$: derajat bebas | $x \in (-\infty, \infty)$ | $\dfrac{\Gamma\!\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\,\Gamma\!\left(\frac{\nu}{2}\right)}\left(1+\dfrac{x^2}{\nu}\right)^{-(\nu+1)/2}$ | $0$ (untuk $\nu > 1$) | $\dfrac{\nu}{\nu-2}$ (untuk $\nu > 2$) | MGF tidak ada dalam bentuk tertutup untuk distribusi $t$ | **Symmetric** di sekitar 0; **Heavy-tailed** dibanding Normal; mendekati $N(0,1)$ saat $\nu \to \infty$ |
| **$F$-distribusi** $X \sim F(\nu_1, \nu_2)$ | $\nu_1, \nu_2 \in \mathbb{Z}^+$: derajat bebas pembilang & penyebut | $x \in (0, \infty)$ | $\dfrac{\Gamma\!\left(\frac{\nu_1+\nu_2}{2}\right)}{\Gamma\!\left(\frac{\nu_1}{2}\right)\Gamma\!\left(\frac{\nu_2}{2}\right)}\left(\dfrac{\nu_1}{\nu_2}\right)^{\nu_1/2}\dfrac{x^{\nu_1/2-1}}{\left(1+\frac{\nu_1}{\nu_2}x\right)^{(\nu_1+\nu_2)/2}}$ | $\dfrac{\nu_2}{\nu_2-2}$ (untuk $\nu_2 > 2$) | $\dfrac{2\nu_2^2(\nu_1+\nu_2-2)}{\nu_1(\nu_2-2)^2(\nu_2-4)}$ (untuk $\nu_2 > 4$) | MGF tidak ada dalam bentuk tertutup untuk distribusi $F$ | **Heavy-tailed**; $\frac{1}{F(\nu_1,\nu_2)} \sim F(\nu_2,\nu_1)$; $[t(\nu)]^2 \sim F(1,\nu)$ |

---

## Hubungan Antar Distribusi

> [!NOTE] Bagian ini paling sering diuji di CF2 — hafal kondisi dan pernyataan formalnya.

| **Hubungan** | **Kondisi** | **Pernyataan Formal** | **Implikasi Ujian** |
|---|---|---|---|
| Bernoulli → Binomial | $n$ trial Bernoulli independen dengan prob. sukses $p$ sama | $X = X_1 + X_2 + \cdots + X_n$, $X_i \sim \text{Bernoulli}(p)$ $\Rightarrow$ $X \sim B(n,p)$ | Soal yang meminta distribusi jumlah trial Bernoulli independen identik |
| Binomial → Poisson (approx.) | $n \to \infty$, $p \to 0$, $np \to \lambda$ (konstan) | $B(n,p) \xrightarrow{d} \text{Poisson}(\lambda)$ saat $n$ besar, $p$ kecil | Pakai aproksimasi Poisson jika $n \geq 20$ dan $p \leq 0.05$ |
| Geometrik → Binomial Negatif | Jumlah $r$ variabel Geometrik$(p)$ independen | $X = X_1 + \cdots + X_r$, $X_i \sim \text{Geom}(p)$ $\Rightarrow$ $X \sim \text{NB}(r,p)$ | Soal tentang waktu tunggu sampai sukses ke-$r$ |
| Eksponensial → Gamma | Jumlah $\alpha$ variabel Eksponensial$(\theta)$ independen | $X = X_1 + \cdots + X_\alpha$, $X_i \sim \text{Exp}(\theta)$ $\Rightarrow$ $X \sim \Gamma(\alpha,\theta)$ | Waktu tunggu sampai kejadian ke-$\alpha$ dalam proses Poisson |
| Gamma → Chi-Kuadrat | $\alpha = \nu/2$ dan $\beta = 2$ (khusus) | $\Gamma(\nu/2,\, 2) = \chi^2(\nu)$ | Identifikasi distribusi Chi-kuadrat sebagai kasus khusus Gamma |
| Normal Standar → Chi-Kuadrat | $Z_1, \ldots, Z_\nu$ i.i.d. $N(0,1)$ | $Z_1^2 + Z_2^2 + \cdots + Z_\nu^2 \sim \chi^2(\nu)$ | Konstruksi statistik uji chi-kuadrat dari variabel Normal standar |
| Normal & Chi-Kuadrat → Student-$t$ | $Z \sim N(0,1)$, $V \sim \chi^2(\nu)$, independen | $T = \dfrac{Z}{\sqrt{V/\nu}} \sim t(\nu)$ | Konstruksi statistik uji $t$ pada inferensi mean Normal |
| Chi-Kuadrat → $F$ | $U \sim \chi^2(\nu_1)$, $V \sim \chi^2(\nu_2)$, independen | $F = \dfrac{U/\nu_1}{V/\nu_2} \sim F(\nu_1,\nu_2)$ | Konstruksi statistik uji rasio variansi (uji $F$) |
| Student-$t$ → $F$ | $T \sim t(\nu)$ | $T^2 \sim F(1, \nu)$ | Ekuivalensi uji $t$ dua sisi dengan uji $F$ pada ANOVA sederhana |
| $F$ → Reciprocal $F$ | $X \sim F(\nu_1, \nu_2)$ | $\dfrac{1}{X} \sim F(\nu_2, \nu_1)$ | Membaca tabel $F$ untuk kuantil bawah dari kuantil atas |
| Binomial → Normal (CLT) | $n$ besar, $p$ tidak ekstrem; $np \geq 5$ dan $n(1-p) \geq 5$ | $\dfrac{X - np}{\sqrt{np(1-p)}} \xrightarrow{d} N(0,1)$ saat $n \to \infty$ | Aproksimasi Normal untuk peluang Binomial; gunakan koreksi kontinuitas $\pm 0.5$ |
| $t(\nu)$ → Normal | $\nu \to \infty$ | $t(\nu) \xrightarrow{d} N(0,1)$ | Untuk $\nu > 30$, distribusi $t$ mendekati Normal standar |

---

## Notasi Alternatif Antar Buku

> [!WARNING] Perbedaan parametrisasi ini adalah sumber kesalahan paling umum saat berpindah referensi.

| **Distribusi** | **Parametrisasi HTZ (Primer)** | **Parametrisasi Alternatif** | **Konversi** |
|---|---|---|---|
| **Eksponensial** | $\theta > 0$ sebagai **scale** (mean), PDF: $\frac{1}{\theta}e^{-x/\theta}$ | $\lambda > 0$ sebagai **rate**, PDF: $\lambda e^{-\lambda x}$ (banyak buku lain, termasuk Wikipedia) | $\theta = \dfrac{1}{\lambda}$; MGF: $\frac{1}{1-\theta t}$ vs $\frac{\lambda}{\lambda - t}$ |
| **Gamma** | $(\alpha, \beta)$: $\alpha$ = shape, $\beta$ = **scale**, PDF: $\frac{x^{\alpha-1}e^{-x/\beta}}{\Gamma(\alpha)\beta^\alpha}$ | $(\alpha, \lambda)$: $\alpha$ = shape, $\lambda$ = **rate**, PDF: $\frac{\lambda^\alpha x^{\alpha-1}e^{-\lambda x}}{\Gamma(\alpha)}$ (Hogg-McKean-Craig & beberapa buku lain) | $\beta = \dfrac{1}{\lambda}$; $E[X] = \alpha\beta = \alpha/\lambda$ |
| **Geometrik** | $X$ = **jumlah trial** sampai sukses pertama, support $\{1,2,3,\ldots\}$, PMF: $(1-p)^{x-1}p$ | $Y$ = **jumlah gagal** sebelum sukses pertama, support $\{0,1,2,\ldots\}$, PMF: $(1-p)^y p$ (Miller & buku lain) | $Y = X - 1$; $E[X] = 1/p$ vs $E[Y] = (1-p)/p$ |
| **Binomial Negatif** | $X$ = **jumlah trial** sampai sukses ke-$r$, support $\{r, r+1, \ldots\}$, PMF: $\binom{x-1}{r-1}p^r(1-p)^{x-r}$ | $Y$ = **jumlah gagal** sebelum sukses ke-$r$, support $\{0,1,2,\ldots\}$, PMF: $\binom{y+r-1}{r-1}p^r(1-p)^y$ | $Y = X - r$; $E[X] = r/p$ vs $E[Y] = r(1-p)/p$ |
| **Chi-Kuadrat** | $\chi^2(\nu)$ — kasus khusus Gamma: $\Gamma(\nu/2, 2)$ | Beberapa sumber menulis $\chi^2(\nu) = \Gamma(\nu/2, 1/2)$ dengan rate parametrization | Pastikan $\beta = 2$ (scale) atau $\lambda = 1/2$ (rate) bergantung konvensi Gamma yang dipakai |
| **Normal** | $N(\mu, \sigma^2)$: parameter kedua adalah **variansi** $\sigma^2$ | Beberapa software dan buku menulis $N(\mu, \sigma)$ dengan parameter kedua adalah **standar deviasi** $\sigma$ | Selalu verifikasi: apakah $N(0,1)$ atau $N(0,1^2)$? Keduanya sama, tapi notasi berbeda bisa menyesatkan |
| **Hipergeometrik** | $\text{HGeom}(N, K, n)$: $N$ = populasi, $K$ = jumlah sukses di populasi, $n$ = ukuran sampel | Beberapa buku menggunakan $(M, N, n)$ atau $(N, M, n)$ dengan urutan berbeda | Selalu cek: parameter mana yang merupakan ukuran populasi, jumlah "sukses", dan ukuran sampel |

---

> [!NOTE] Referensi Parametrisasi
> Seluruh tabel ini menggunakan konvensi **Hogg, Tanis & Zimmerman (2015)** sebagai acuan primer.
> Untuk detail derivasi, lihat [[2.5 Distribusi Diskrit Umum]] dan [[2.6 Distribusi Kontinu Umum]].

*📖 Ref: Hogg-Tanis-Zimmerman (2015) Bab 2–3 | Miller (2014) Bab 3–7 | 🗓️ 2026-02-21 | #CF2 #Distribusi #CheatSheet*
