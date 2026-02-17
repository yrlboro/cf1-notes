---
title: Distribusi Gamma
aliases:
  - Gamma Distribution
  - Distribusi Gamma
  - Sum of Exponentials
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - ContinuousDistributions
exam_weight: 5-10%
difficulty: Medium
learning_objective: A.1.e
created:
  "{ date:YYYY-MM-DD }":
updated:
  "{ date:YYYY-MM-DD }":
status: active
---

# Exam P - Continuous Distributions - Gamma Distribution

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: A.1.e (Univariate Probability Distributions - Continuous)
> - **Kategori Silabus**: Continuous Distributions
> - **Skill yang Diuji**: Calculate, Interpret, Apply, Recognize
> - **Bobot Relatif**: ~5-10% (Sering muncul dalam konteks Poisson Process)
> - **Level Kesulitan**: Medium (Hard jika salah membedakan parameter scale vs rate)
> - **Prerequisite Topics**: [[Exponential Distribution]], [[Poisson Distribution]], Integration Techniques
> - **Connected Topics**: [[Chi-Square Distribution]], [[Beta Distribution]], [[Moment Generating Functions]]

---

## 1. Intuisi (Feynman Principle)

> [!tip] Intuisi: The Earthquake Manager
> Bayangkan Anda adalah seorang manajer klaim di sebuah perusahaan asuransi gempa bumi.
> 
> - **[[Exponential Distribution]]** adalah model untuk "waktu tunggu sampai gempa **pertama** terjadi". Sifatnya *memoryless*.
> - **Distribusi Gamma** adalah generalisasi dari cerita itu. Gamma menjawab pertanyaan: *"Berapa lama saya harus menunggu sampai gempa ke-$\alpha$ terjadi?"*
> 
> Jika $\alpha = 1$, kita menunggu 1 gempa (kembali ke Eksponensial).
> Jika $\alpha = 5$, kita menjumlahkan waktu tunggu dari 5 kejadian eksponensial yang independen.
> 
> **Inti Konsep:** Gamma adalah jumlah dari beberapa waktu tunggu Eksponensial yang independen.

---

## 2. Definisi Formal

> [!info] Definisi Formal
> 
> **Definisi Matematis (PDF):**
> Variabel acak $X$ berdistribusi Gamma dengan parameter *shape* $\alpha > 0$ dan *scale* $\theta > 0$, dinotasikan $X \sim \text{Gamma}(\alpha, \theta)$, memiliki PDF:
> 
> $$
> f_X(x) = \frac{1}{\Gamma(\alpha)\theta^\alpha} x^{\alpha-1} e^{-x/\theta}, \quad x > 0
> $$
> 
> Dimana $\Gamma(\alpha)$ adalah **Fungsi Gamma**, didefinisikan sebagai:
> $$
> \Gamma(\alpha) = \int_0^\infty y^{\alpha-1} e^{-y} \, dy
> $$
> 
> **Parameter & Batasan:**
> - **Support**: $x \in (0, \infty)$
> - **Shape ($\alpha$)**: Menentukan bentuk kurva (skewness).
> - **Scale ($\theta$)**: Menentukan seberapa "lebar" penyebarannya (satuan waktu/uang).
> 
> **Properti Fungsi Gamma (Wajib Hafal):**
> 1. Untuk integer $n$: $\Gamma(n) = (n-1)!$
> 2. Rekursif: $\Gamma(\alpha) = (\alpha-1)\Gamma(\alpha-1)$
> 3. $\Gamma(1) = 1$
> 4. $\Gamma(0.5) = \sqrt{\pi}$ (Penting untuk koneksi ke Normal/Chi-Square)
> 
> **Rumus Utama (Exam Critical):**
> $$
> \begin{align}
> E[X] &= \alpha\theta \\
> \text{Var}(X) &= \alpha\theta^2 \\
> M_X(t) &= \left( \frac{1}{1-\theta t} \right)^\alpha, \quad t < \frac{1}{\theta}
> \end{align}
> $$
> 
> **Asumsi Eksplisit:**
> - Kejadian yang mendasari (jika $\alpha$ integer) mengikuti [[Poisson Process]] dengan rate $\lambda = 1/\theta$.
> - Interval waktu antar kejadian bersifat independen.

---

## 3. Jembatan Logika

> [!note] Jembatan: Intuisi → Matematika
> Mengapa rumusnya terlihat seperti itu?
> 
> 1.  **Komponen $x^{\alpha-1}$ (The Growth):**
>     Mewakili akumulasi waktu. Karena menunggu $\alpha$ kejadian, probabilitas waktu total dekat 0 itu sangat kecil. Kurva harus "naik" dulu dari nol.
> 
> 2.  **Komponen $e^{-x/\theta}$ (The Decay):**
>     Sifat eksponensial dasar. Semakin lama waktu berlalu, semakin kecil kemungkinan kita *masih* menunggu kejadian tersebut (ekor distribusi menipis).
> 
> 3.  **Konstanta Normalisasi $\frac{1}{\Gamma(\alpha)\theta^\alpha}$:**
>     Pengali agar total luas area di bawah kurva sama dengan 1.
> 
> **The Golden Link (Reproductive Property):**
> Jika $X_1, X_2, ..., X_n$ adalah i.i.d. $\text{Exp}(\theta)$, maka:
> $$
> Y = \sum_{i=1}^n X_i \sim \text{Gamma}(\alpha=n, \theta)
> $$
> Ini menjelaskan mengapa Mean Gamma adalah $n \times \text{Mean Exp}$ ($n\theta$) dan Variansnya adalah $n \times \text{Var Exp}$ ($n\theta^2$).

---

## 4. Contoh Soal (SOA Exam P Authentic Style)

> [!example] Soal A (Fundamental - 30% difficulty)
> **Soal:**
> Total nilai klaim asuransi kesehatan ($X$) mengikuti distribusi Gamma dengan mean 10.000 dan varians 20.000.000. Tentukan parameter $\alpha$ dan $\theta$ dari distribusi ini.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - $E[X] = 10.000$
>    - $\text{Var}(X) = 20.000.000$
> 
> 2. **Setup:**
>    Gunakan rumus momen standar:
>    $$
>    \begin{align}
>    \alpha\theta &= 10.000 \quad (1) \\
>    \alpha\theta^2 &= 20.000.000 \quad (2)
>    \end{align}
>    $$
> 
> 3. **Eksekusi:**
>    Bagi persamaan (2) dengan (1):
>    $$
>    \frac{\alpha\theta^2}{\alpha\theta} = \frac{20.000.000}{10.000} \implies \theta = 2.000
>    $$
>    Substitusi kembali ke (1) untuk cari $\alpha$:
>    $$
>    \alpha(2.000) = 10.000 \implies \alpha = 5
>    $$
> 
> 4. **Verification:**
>    - ✓ $\alpha > 0$ dan $\theta > 0$, parameter valid.

> [!example] Soal B (Exam-Typical - 60% difficulty)
> **Soal:**
> Waktu yang dibutuhkan untuk melayani satu pelanggan di sebuah bank berdistribusi Eksponensial dengan rata-rata 4 menit. Jika bank melayani 5 pelanggan secara berurutan, dan waktu pelayanan antar pelanggan saling bebas, hitung probabilitas bahwa total waktu pelayanan melebihi 20 menit.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - Satu pelanggan: $X_i \sim \text{Exp}(\text{mean}=4) \implies \theta = 4$.
>    - Total waktu $Y = \sum_{i=1}^5 X_i$.
>    - Ditanya: $P(Y > 20)$.
> 
> 2. **Setup (Logic Link):**
>    - $Y \sim \text{Gamma}(\alpha=5, \theta=4)$.
>    - **Jangan integral manual!** Gunakan hubungan dengan [[Poisson Process]].
>    - Rate Poisson: $\lambda = 1/\theta = 1/4$ per menit.
>    - Expected number dalam 20 menit: $\Lambda = \lambda \times 20 = 5$.
> 
> 3. **Eksekusi:**
>    "Waktu tunggu pelanggan ke-5 > 20 menit" $\iff$ "Jumlah pelanggan dalam 20 menit < 5".
>    $$
>    P(Y > 20) = P(N_{20} < 5) = P(N_{20} \leq 4)
>    $$
>    Hitung sum Poisson:
>    $$
>    \begin{align}
>    P(N \leq 4) &= \sum_{k=0}^4 \frac{e^{-5} 5^k}{k!} \\
>    &= e^{-5} \left( \frac{5^0}{0!} + \frac{5^1}{1!} + \frac{5^2}{2!} + \frac{5^3}{3!} + \frac{5^4}{4!} \right) \\
>    &= e^{-5} (1 + 5 + 12.5 + 20.833 + 26.041) \\
>    &\approx 0.440
>    \end{align}
>    $$
> 
> 4. **Exam Tips:**
>    Metode ini menghemat ~10 menit dibanding integral Gamma function manual.

> [!example] Soal C (Challenging - 90% difficulty)
> **Soal:**
> Diketahui $X \sim \text{Gamma}(\alpha, \theta)$. Tentukan distribusi dari $Y = cX$ dimana $c > 0$ adalah sebuah konstanta. Gunakan metode MGF.
> 
> **Solusi:**
> 
> 1. **Identifikasi:** Transformasi variabel $Y=cX$.
> 
> 2. **Setup:**
>    MGF dari $X$ adalah $M_X(t) = (1 - \theta t)^{-\alpha}$.
>    Kita cari $M_Y(t) = E[e^{tY}]$.
> 
> 3. **Eksekusi:**
>    $$
>    \begin{align}
>    M_Y(t) &= E[e^{t(cX)}] \\
>    &= E[e^{(ct)X}] \\
>    &= M_X(ct)
>    \end{align}
>    $$
>    Substitusi $ct$ ke dalam rumus MGF $X$:
>    $$
>    M_Y(t) = (1 - \theta (ct))^{-\alpha} = (1 - (c\theta)t)^{-\alpha}
>    $$
>    
> 4. **Kesimpulan:**
>    Bentuk di atas adalah MGF Gamma dengan parameter scale baru $\theta' = c\theta$.
>    $$
>    Y \sim \text{Gamma}(\alpha, c\theta)
>    $$
>    *Scaling variabel Gamma hanya mengubah scale, tidak mengubah shape.*

---

## 5. Verification & Sanity Check

> [!success] Verification
> **Cek Soal A:**
> - Mean: $5 \times 2000 = 10.000$ ✓
> - Var: $5 \times (2000)^2 = 20.000.000$ ✓
> 
> **Cek Soal C:**
> - Jika $X$ dalam jam, dan $Y$ dalam menit ($c=60$), rata-rata $Y$ harus 60 kali $X$.
> - Rumus: $E[Y] = \alpha(c\theta) = c(\alpha\theta) = c E[X]$. Konsisten. ✓

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> **Bayangkan Grafik PDF Gamma:**
> 
> 1.  **Start Point:** Selalu mulai dari $x=0$.
> 2.  **$\alpha = 1$:** Ini adalah **Distribusi Eksponensial**! Mulai tinggi di sumbu y, lalu meluncur turun.
> 3.  **$\alpha > 1$:** Mulai dari 0, naik membentuk **puncak (hump)**, lalu turun perlahan (skewed right).
> 4.  **$\alpha \to \infty$:** Semakin besar $\alpha$, semakin simetris dan mirip Distribusi Normal.
> 
> **Interpretasi Area:** Ekor panjang ke kanan menunjukkan kemungkinan kecil terjadinya *extreme events* (contoh: klaim asuransi jumbo).

---

## 7. Jebakan Umum (Common Exam Traps)

> [!warning] Jebakan Maut (Exam Traps)
> 
> **💀 JEBAKAN #1: Scale vs Rate**
> - **Scale ($\theta$):** Satuan sama dengan $X$ (misal: jam). Rumus $E[X] = \alpha\theta$. (SOA Tables & Hogg/Tanis)
> - **Rate ($\lambda$):** Satuan kebalikan $X$ (misal: per jam). Rumus $E[X] = \alpha/\lambda$. (Ross)
> - **Cara Deteksi:** Jika soal ada $e^{-\lambda x}$, itu Rate. Jika $e^{-x/\theta}$, itu Scale.
> 
> **💀 JEBAKAN #2: Sum of Gammas**
> - $X + Y \sim \text{Gamma}(\alpha_1+\alpha_2, \theta)$
> - ==SYARAT MUTLAK:== $\theta$ (scale) HARUS SAMA. Jika scale beda, tidak bisa dijumlahkan langsung.
> 
> **💀 JEBAKAN #3: "At least" vs "At most"**
> - $P(T_{time} > t) \iff P(N_{events} < \alpha)$
> - Waktu *lebih* lama berarti kejadian yang terkumpul *kurang* dari target. Jangan terbalik!

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> 
> **MUST-REMEMBER:**
> 1. Notasi: $X \sim \text{Gamma}(\alpha, \theta)$
> 2. Mean: $\mu = \alpha\theta$
> 3. Variance: $\sigma^2 = \alpha\theta^2$
> 4. MGF: $M(t) = (1-\theta t)^{-\alpha}$
> 5. Poisson Link (untuk integer $\alpha$): $P(X > x) = P(N(x) < \alpha)$
> 
> **QUICK DECISION TREE:**
> ```mermaid
> graph TD
>     A[Soal Waktu Tunggu / Klaim] --> B{Berapa jumlah kejadian n?}
>     B -->|n = 1| C[Gunakan EKSPONENSIAL]
>     B -->|n > 1| D{Apa yang dicari?}
>     D -->|Mean/Var| E[Rumus E=αθ, V=αθ²]
>     D -->|Probabilitas| F{Apakah α integer?}
>     F -->|YES| G[Gunakan Tabel POISSON]
>     F -->|NO| H[Integral Gamma Manual/Approximation]
> ```

---

## 📚 References

- **Primary**: Hogg, R., Tanis, E., & Zimmerman, D. *Probability and Statistical Inference*.
- **Secondary**: Ross, S. *A First Course in Probability*.
- **SOA**: Exam P Learning Objective A.1.e

## 🔗 Related Notes

- [[Exponential Distribution]]
- [[Poisson Distribution]]
- [[Moment Generating Functions]]
- [[Chi-Square Distribution]]

## 📝 Study Log

- [ ] Read intuition (Earthquake analogy)
- [ ] Memorize PDF and Parameters ($\alpha, \theta$)
- [ ] Understand the Poisson Link derivation
- [ ] Solve Soal A (Basic Calc)
- [ ] Solve Soal B (Poisson Link)
- [ ] Solve Soal C (MGF Scaling)
- [ ] Verify understanding of Scale vs Rate trap

---

**Last Updated:** {{date:YYYY-MM-DD}}