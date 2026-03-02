---
title: Distribusi Exponential-NotebookLM
aliases:
  - Exponential Distribution
  - Distribusi Eksponensial
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - UnivariateDistributions
exam_weight: 10-15%
difficulty: EasyMedium
learning_objective: Univariate Continuous Distributions - Exponential
created: 2024-05-22
updated: 2024-05-22
status: active
---

# Distribusi Exponential

> [!abstract] Posisi dalam Exam P
> - **Learning Objective ID**: Univariate Continuous Distributions - Exponential.
> - **Kategori Silabus**: Univariate Continuous Distributions.
> - **Skill yang Diuji**: Calculate (probabilitas/momen), Apply (sifat memoryless), Recognise (hubungan dengan proses Poisson).
> - **Bobot Relatif**: ~10–15% dari topik distribusi univariat.
> - **Prerequisite**: [[Kalkulus Dasar - Integrasi]], [[Poisson Distribution]].
> - **Related Topics**: [[Poisson Process]], [[Gamma Distribution]], [[Order Statistics]], [[Insurance Deductibles]].

---

## 1. Intuisi

> [!tip] Intuisi (Feynman Principle)
> **Bayangkan Anda adalah** seorang teknisi yang sedang memantau sebuah bola lampu yang baru saja dinyalakan. Anda ingin tahu berapa lama waktu yang dibutuhkan sampai lampu tersebut akhirnya putus. Konsep ini pada dasarnya adalah model untuk **"waktu tunggu"** hingga suatu kejadian terjadi secara acak.
>
> Hal yang paling unik dari distribusi ini adalah sifatnya yang **"tidak punya ingatan"** (*memoryless*); jika lampu tersebut sudah menyala selama 100 jam, peluang ia akan bertahan 10 jam lagi adalah sama persis dengan peluang lampu baru bertahan selama 10 jam pertama. Masa lalu tidak mempengaruhi masa depan dalam model ini.

---

## 2. Definisi Formal

> [!info] Definisi Formal
> **Definisi Matematis:**
> Variabel acak kontinyu $X$ dikatakan memiliki distribusi eksponensial dengan parameter mean $\theta$ jika fungsi padat peluangnya (**PDF**) adalah:
> $$
> f_X(x) = \begin{cases} \frac{1}{\theta} e^{-\frac{x}{\theta}}, & x \geq 0 \\ 0, & \text{lainnya} \end{cases}
> $$
>
> **Parameter & Batasan:**
> - $\theta$ (Mean/Scale Parameter): $\theta > 0$.
> - $\lambda$ (Rate Parameter): $\lambda = \frac{1}{\theta}$, sehingga $f_X(x) = \lambda e^{-\lambda x}$.
>
> **Support:**
> $S_X = \{x \in \mathbb{R} : x \geq 0\}$.
>
> **Rumus Utama:**
> - **CDF**: $F_X(x) = P(X \leq x) = 1 - e^{-\frac{x}{\theta}}$ untuk $x \geq 0$.
> - **Survival Function**: $S_X(x) = P(X > x) = e^{-\frac{x}{\theta}}$.
> - **Expected Value**: $E[X] = \mu_X = \theta$.
> - **Variance**: $\text{Var}(X) = \sigma^2_X = \theta^2$.
> - **MGF**: $M_X(t) = (1 - \theta t)^{-1}$ untuk $t < \frac{1}{\theta}$.

---

## 3. Jembatan Logika

> [!note] Jembatan Intuisi → Matematika
> Translasi dari intuisi "waktu tunggu" ke rumus matematis dilakukan melalui hubungan dengan **Proses Poisson**:
> 1. **Makna Integral**: Karena waktu bersifat kontinyu, probabilitas dalam rentang waktu $(a, b)$ adalah luas di bawah kurva $f_X(x)$.
> 2. **Konstanta Normalisasi**: Faktor $\frac{1}{\theta}$ di depan PDF memastikan bahwa total area di bawah kurva tepat bernilai 1.
> 3. **Derivasi dari Poisson**: Jika rata-rata jumlah kejadian per unit waktu adalah $\lambda$, maka probabilitas tidak ada kejadian hingga waktu $t$ (berdasarkan Poisson) adalah $P(X > t) = \frac{e^{-\lambda t}(\lambda t)^0}{0!} = e^{-\lambda t}$. Komplemen dari ini adalah CDF: $F_X(t) = 1 - e^{-\lambda t}$. Turunan dari CDF ini menghasilkan PDF eksponensial.

---

## 4. Contoh Soal

> [!example] Contoh Soal A (Fundamental)
> **Soal:** Waktu klaim asuransi motor mengikuti distribusi eksponensial dengan mean 4 tahun. Hitunglah probabilitas bahwa klaim terjadi dalam 2 tahun pertama.
>
> **Solusi:**
> 1. **Identifikasi**: $\theta = 4$. Ditanya $P(X \leq 2)$.
> 2. **Setup**: Gunakan CDF $F_X(x) = 1 - e^{-\frac{x}{\theta}}$.
> 3. **Eksekusi**:
> $$
> \begin{align}
> F_X(2) &= 1 - e^{-\frac{2}{4}} \\
> &= 1 - e^{-0.5} \\
> &\approx 0.39347
> \end{align}
> $$
> 4. **Verification**: Hasil $\approx 0.39$ berada dalam rentang.

> [!example] Contoh Soal B (Exam-Typical)
> **Soal:** Masa pakai baterai laptop terdistribusi eksponensial. Diketahui probabilitas baterai bertahan lebih dari 10 jam adalah 0.20. Jika baterai sudah bertahan 5 jam, berapakah probabilitas ia bertahan setidaknya 10 jam lagi?.
>
> **Solusi:**
> 5. **Identifikasi**: Masalah melibatkan sifat **memoryless**.
> 6. **Setup**: $P(X > s + t | X > s) = P(X > t)$.
> 7. **Eksekusi**:
> Kita mencari $P(X > 5 + 10 | X > 5)$, yang ekuivalen dengan $P(X > 10)$.
> Dari data soal, $P(X > 10) = 0.20$.
> 8. **Verification**: Tidak perlu menghitung $\theta$ karena properti memoryless memberikan jawaban langsung.

> [!example] Contoh Soal C (Challenging)
> **Soal:** Klaim asuransi $X \sim \text{Exp}(\theta=1000)$. Polis memiliki **deductible** $d=500$ dan **payout limit** $L=2000$ di atas deductible (maksimum pembayaran 2000). Tentukan ekspektasi pembayaran asuransi $Y$.
>
> **Solusi:**
> 9. **Identifikasi**: $X \sim \text{Exp}(1000)$. $Y = \min(\max(0, X-500), 2000)$.
> 10. **Setup**: Ekspektasi pembayaran dengan deductible $d$ dan limit tambahan $L$ adalah:
> $$E[Y] = \int_{d}^{d+L} (x-d) f_X(x) dx + \int_{d+L}^{\infty} L f_X(x) dx$$.
> 11. **Eksekusi**:
> Menggunakan shortcut integrasi untuk distribusi eksponensial:
> $$
> \begin{align}
> E[Y] &= \theta(e^{-\frac{d}{\theta}} - e^{-\frac{d+L}{\theta}}) \\
> &= 1000(e^{-\frac{500}{1000}} - e^{-\frac{2500}{1000}}) \\
> &= 1000(e^{-0.5} - e^{-2.5}) \\
> &\approx 1000(0.60653 - 0.08208) = 524.45
> \end{align}
> $$
> 12. **Verification**: Ekspektasi pembayaran (524.45) harus lebih kecil dari mean klaim original (1000) karena adanya limitasi polis.

---

## 5. Verification & Sanity Check

> [!success] Verification
> ✓ **Constraint**: Probabilitas selalu $0 \leq P \leq 1$.
> ✓ **Unit**: Jika $\theta$ dalam "tahun", maka $E[X]$ juga dalam "tahun".
> ✓ **Limiting Case**: Saat $x \to \infty$, $F_X(x) \to 1$, yang berarti kegagalan pasti terjadi pada akhirnya.
> ✓ **Relationship**: Dalam distribusi Eksponensial, **Mean = Standard Deviation** ($\theta = \sqrt{\theta^2}$).

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> - **PDF**: Bayangkan kurva yang dimulai di titik tertinggi pada $x=0$ (yaitu $1/\theta$) lalu meluruh secara halus mendekati nol seperti perosotan (skid) yang tidak pernah menyentuh tanah.
> - **CDF**: Bayangkan kurva berbentuk busur yang naik cepat di awal lalu melandai perlahan menuju garis horizontal 1.0 (asymptote).
> - **Area**: Probabilitas $P(a < X < b)$ adalah luas di bawah kurva PDF di antara interval tersebut.

---

## 7. Jebakan Umum

> [!warning] Jebakan Umum (Exam Traps)
> **Kesalahan Notasi**
> - ✗ Menggunakan $\lambda$ sebagai mean $\to$ ✓ $\lambda$ adalah **rate**, mean adalah $1/\lambda = \theta$. ==Selalu cek apakah soal memberikan mean atau rate.==
>
> **Kesalahan Konseptual**
> - Mengira bahwa benda yang "tua" lebih mungkin rusak daripada yang "muda". Faktanya, peluangnya sama (sifat *Memoryless*).
>
> **Kesalahan Kalkulus**
> - Lupa mengalikan dengan $-1$ saat melakukan integrasi $e^{-x/\theta}$.

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> **Must-Remember:**
> 1. **Memoryless**: $P(X > t+s | X > s) = P(X > t) = e^{-t/\theta}$.
> 2. **Mean = SD**: $\mu = \sigma = \theta$.
> 3. **Poisson Connection**: Jika jumlah kejadian per unit waktu $\sim \text{Poisson}(\lambda)$, maka waktu antar kejadian $\sim \text{Exp}(1/\lambda)$.
> 4. **Deductible Shortcut**: $E[(X-d)_+] = \theta e^{-d/\theta}$.
>
> **Kapan Digunakan:**
> - Kata kunci: "waiting time", "time until failure", "inter-arrival time", "hazard rate is constant".
>
> **Decision Tree:**
> ```mermaid
> graph TD
> A[Apakah Laju Kegagalan / Hazard Rate Konstan?] -- Ya --> B[Distribusi Exponential]
> A -- Tidak --> C[Gunakan Weibull atau Gamma]
> B -- Mencari Probabilitas? --> D[Gunakan CDF: 1 - e^-x/theta]
> B -- Ada Deductible? --> E[Gunakan Sifat Memoryless]
> ```

---

## 📚 References
- **Primary**: Hogg, R., Tanis, E., & Zimmerman, D. (2015). *Probability and Statistical Inference*. Section [3.2], pp..
- **Secondary**: Hogg, R., McKean, J., & Craig, A. (2018). *Introduction to Mathematical Statistics*. Section [3.3], pp..
- **Tertiary**: Freund, J., Miller, I., & Miller, M. (2014). *John E. Freund's Mathematical Statistics with Applications*. Section [6.3], pp..
- **SOA Exam P Learning Objective**: Univariate Continuous Distributions.

## 🔗 Related Notes
- [[Konsep Dasar Probabilitas]]
- [[Ekspektasi dan Varians]]
- [[Poisson Distribution]]
- [[Gamma Distribution]]

## 📝 Study Log
- [ ] Read intuition section
- [ ] Understand formal definition
- [ ] Solve Contoh Soal A
- [ ] Solve Contoh Soal B
- [ ] Solve Contoh Soal C
- [ ] Review common traps
- [ ] Memorize cheat sheet

---
**Catatan Organisasi Folder**:
Simpan file ini di: `📁 Actuarial Science > 📁 Exam P > 📁 02 - Univariate Distributions`.
