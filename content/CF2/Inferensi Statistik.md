---
title: "Limit Theorems & Sampling Distributions"
aliases: ["Central Limit Theorem", "CLT", "Law of Large Numbers", "Sampling Distributions"]
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - Statistics
  - LimitTheorems
exam_weight: 10-15%
difficulty: Medium
learning_objective: "Topic 8 (Limit Theorems)"
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
status: active
---

# Limit Theorems & Sampling Distributions

> [!abstract] Posisi dalam Exam P
> - **Learning Objective**: Topic 8 (Limit Theorems)
> - **Kategori**: Univariate & Multivariate Probability (Asymptotic Behavior)
> - **Skill yang Diuji**: Calculate (probabilities for sums/means), Apply (CLT approximation), Interpret (LLN)
> - **Bobot**: ~10-15% (Sering muncul 2-4 soal)
> - **Prerequisite**: [[Expected Value]], [[Variance]], [[Normal Distribution]], [[Independence]]
> - **Related Topics**: [[Aggregate Loss Models]], [[Risk Pooling]]

---

## 1. Intuisi (Feynman Principle)

> [!tip] Intuisi: Order from Chaos
> Bayangkan Anda adalah manajer kasino atau perusahaan asuransi.
> 
> Jika Anda melihat **satu** penjudi, hasilnya sangat tidak pasti. Dia bisa menang besar (Anda rugi) atau kalah telak (Anda untung). Grafiknya berantakan dan tidak terprediksi.
> 
> Namun, jika ada **10.000** penjudi bermain bersamaan, sesuatu yang ajaib terjadi. Rata-rata kemenangan mereka menjadi sangat stabil dan terprediksi. Tidak peduli apakah mereka main slot, poker, atau roulette (asalkan independen), total uang yang keluar masuk kasino akan membentuk kurva lonceng (**Normal Distribution**) yang sangat cantik.
> 
> **[[Central Limit Theorem]] (CLT)** adalah jaminan matematis bahwa "ketidateraturan individu akan menjadi keteraturan kolektif" jika jumlah sampelnya cukup besar. Inilah alasan mengapa asuransi bisa beroperasi: ketidakpastian satu orang ditanggung oleh kepastian statistik orang banyak.

---

## 2. Definisi Formal

> [!info] Definisi Formal: Central Limit Theorem
> **Definisi:**
> Misalkan $X_1, X_2, \dots, X_n$ adalah barisan variabel acak yang **independent and identically distributed (i.i.d)** dengan rata-rata $E[X_i] = \mu$ dan varians $\text{Var}(X_i) = \sigma^2 < \infty$.
> 
> Definisikan **Sample Sum** $S_n$ dan **Sample Mean** $\bar{X}_n$:
> $$S_n = \sum_{i=1}^n X_i$$
> $$\bar{X}_n = \frac{S_n}{n} = \frac{1}{n}\sum_{i=1}^n X_i$$
> 
> Maka, untuk $n$ yang besar (secara praktis $n \geq 30$), variabel acak terstandarisasi $Z_n$ akan konvergen secara distribusi ke **Standard Normal Distribution** $N(0,1)$:
> 
> $$
> \lim_{n \to \infty} P\left( \frac{S_n - n\mu}{\sigma\sqrt{n}} \leq z \right) = \Phi(z)
> $$
> 
> $$
> \lim_{n \to \infty} P\left( \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \leq z \right) = \Phi(z)
> $$
> 
> Dimana $\Phi(z)$ adalah CDF dari [[Standard Normal Distribution]].
> 
> **Parameter Distribusi Pendekatan ($n$ besar):**
> 1. $S_n \approx N(n\mu, n\sigma^2)$
> 2. $\bar{X}_n \approx N(\mu, \frac{\sigma^2}{n})$
> 
> **Asumsi Eksplisit:**
> - **Independence:** $X_i$ tidak mempengaruhi $X_j$.
> - **Finite Variance:** $\sigma^2 < \infty$ (tidak berlaku untuk heavy-tailed distributions tertentu seperti Cauchy).
> - **Identical Distribution:** Sampel berasal dari populasi yang sama.

---

## 3. Jembatan Logika

> [!note] Jembatan: Intuisi → Matematika
> Mari kita bedah penskalaan varians yang sering membingungkan.
> 
> **1. Mengapa Variance $S_n$ adalah $n\sigma^2$?**
> Karena $X_i$ independen, varians bersifat aditif:
> $$\text{Var}(\sum X_i) = \sum \text{Var}(X_i) = \sum \sigma^2 = n\sigma^2$$
> *Makna:* "Total ketidakpastian" bertambah seiring banyaknya sampel.
> 
> **2. Mengapa Variance $\bar{X}_n$ adalah $\sigma^2/n$?**
> Lihat definisi $\bar{X} = \frac{1}{n}S_n$. Ingat sifat $\text{Var}(cX) = c^2 \text{Var}(X)$:
> $$
> \text{Var}(\bar{X}) = \text{Var}\left(\frac{1}{n} S_n\right) = \left(\frac{1}{n}\right)^2 \text{Var}(S_n) = \frac{1}{n^2} (n\sigma^2) = \frac{\sigma^2}{n}
> $$
> *Makna Geometris:* Saat $n \to \infty$, $\text{Var}(\bar{X}) \to 0$. Artinya, kurva lonceng $\bar{X}$ menjadi sangat kurus dan tinggi (spike) tepat di $\mu$. Inilah **Law of Large Numbers**: rata-rata sampel semakin akurat mendekati rata-rata populasi.
> 
> **3. Mengapa dibagi $\sqrt{n}$ dalam standarisasi?**
> Standard Deviation adalah $\sqrt{\text{Variance}}$.
> - Jika $\text{Var}(S_n) = n\sigma^2$, maka $SD(S_n) = \sigma\sqrt{n}$.
> - Maka $Z = \frac{\text{Variable} - \text{Mean}}{\text{SD}} = \frac{S_n - n\mu}{\sigma\sqrt{n}}$.

---

## 4. Contoh Soal (Authentic SOA Style)

### Soal A: Fundamental (Direct Application)

> [!example] Soal A: Sum of Claims
> **Soal:**
> Sebuah perusahaan asuransi memiliki 100 pemegang polis otomotif. Klaim tahunan setiap pemegang polis adalah variabel acak i.i.d dengan rata-rata $\mu = 500$ dan standar deviasi $\sigma = 200$. Hitung probabilitas bahwa total klaim dari 100 polis ini melebihi 53.000.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - $n=100$, $\mu=500$, $\sigma=200$
>    - Ditanya: $P(S_{100} > 53000)$
> 
> 2. **Setup Parameter $S_n$:**
>    $$E[S_{100}] = n\mu = 100(500) = 50.000$$
>    $$\text{Var}(S_{100}) = n\sigma^2 = 100(200^2)$$
>    $$SD(S_{100}) = \sigma\sqrt{n} = 200\sqrt{100} = 2.000$$
> 
> 3. **Execution (Standardisasi):**
>    $$
>    \begin{align}
>    P(S_{100} > 53000) &= P\left( Z > \frac{53000 - 50000}{2000} \right) \\
>    &= P(Z > 1.5)
>    \end{align}
>    $$
>    Dari tabel Normal standar: $\Phi(1.5) = 0.9332$.
>    $$P(Z > 1.5) = 1 - 0.9332 = 0.0668$$
> 
> 4. **Verification:**
>    - ✓ Total 53k adalah 1.5 SD di atas mean 50k. Probabilitas kecil (tail event) masuk akal.

### Soal B: Exam-Typical (Reverse CLT)

> [!example] Soal B: Finding Sample Size
> **Soal:**
> Anda sedang mengestimasi rata-rata tinggi badan populasi ($\mu$). Diketahui standar deviasi populasi adalah $\sigma = 15$ cm. Anda ingin 95% yakin bahwa rata-rata sampel ($\bar{X}$) berada dalam jarak 2 cm dari rata-rata populasi sebenarnya. Berapa jumlah sampel minimum ($n$) yang diperlukan?
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - Target: $n$
>    - Kondisi: $P(|\bar{X} - \mu| \leq 2) = 0.95$
> 
> 2. **Setup:**
>    Inequality: $-2 \leq \bar{X} - \mu \leq 2$.
>    Bagi dengan $SD(\bar{X}) = \sigma/\sqrt{n} = 15/\sqrt{n}$:
>    $$P\left( \frac{-2}{15/\sqrt{n}} \leq Z \leq \frac{2}{15/\sqrt{n}} \right) = 0.95$$
> 
> 3. **Execution:**
>    Untuk area tengah 95% pada Normal standar, batas kritis adalah $z = 1.96$.
>    Maka, batas kanan harus sama dengan 1.96:
>    $$
>    \begin{align}
>    \frac{2\sqrt{n}}{15} &= 1.96 \\
>    \sqrt{n} &= \frac{1.96 \times 15}{2} = 14.7 \\
>    n &= (14.7)^2 = 216.09
>    \end{align}
>    $$
> 
> 4. **Verification (Rounding):**
>    - ✓ Karena $n$ harus integer dan "minimum required", kita harus **round up** (ceiling).
>    - **Jawab: $n = 217$.**

### Soal C: Challenging (Continuity Correction)

> [!example] Soal C: Discrete Sum Approximation
> **Soal:**
> Misalkan $X_i$ adalah hasil lemparan dadu 6 sisi yang adil (1, 2, ..., 6). Kita melempar dadu 300 kali. Hitung estimasi probabilitas bahwa jumlah total mata dadu ($S_{300}$) kurang dari atau sama dengan 1030, menggunakan koreksi kontinuitas.
> 
> **Solusi:**
> 
> 1. **Identifikasi:**
>    - Discrete Uniform Distribution, $n=300$.
>    - Ditanya: $P(S_{300} \leq 1030)$.
> 
> 2. **Hitung Momen Individual:**
>    $$E[X] = 3.5$$
>    $$\text{Var}(X) = \frac{(6-1+1)^2 - 1}{12} = \frac{35}{12} \approx 2.9167$$
> 
> 3. **Setup Parameter $S_{300}$:**
>    $$E[S_{300}] = 300(3.5) = 1050$$
>    $$\text{Var}(S_{300}) = 300(\frac{35}{12}) = 875$$
>    $$SD(S_{300}) = \sqrt{875} \approx 29.58$$
> 
> 4. **Continuity Correction (KRUSIAL):**
>    - Event: $S_{300} \leq 1030$ (Discrete).
>    - Continuity Correction: Untuk mencakup seluruh "batang" histogram 1030, ambil batas atasnya $\to$ **1030.5**.
> 
> 5. **Execution:**
>    $$
>    \begin{align}
>    P(S_{300} \leq 1030) &\approx P\left( Z \leq \frac{1030.5 - 1050}{29.58} \right) \\
>    &= P\left( Z \leq \frac{-19.5}{29.58} \right) \\
>    &= P(Z \leq -0.66)
>    \end{align}
>    $$
>    Dari tabel: $1 - \Phi(0.66) = 1 - 0.7454 = 0.2546$.
> 
> 6. **Verification:**
>    - ✓ Mean 1050, Target 1030 (di kiri mean). Probabilitas < 0.5 (0.2546) masuk akal.

---

## 5. Verification & Sanity Check

> [!success] Checklist Validasi
> Saat mengerjakan soal limit theorems, selalu cek:
> - ✓ **Constraint Probabilitas**: Hasil harus $0 \leq P \leq 1$.
> - ✓ **Sample Size**: Apakah $n \geq 30$? Jika tidak, CLT mungkin tidak akurat (kecuali populasi asal Normal).
> - ✓ **Logic**: Jika nilai target jauh di atas mean, probabilitas cumulative harus tinggi (> 0.5). Jika jauh di bawah, harus rendah (< 0.5).

---

## 6. Visualisasi Mental

> [!quote] Visualisasi Mental
> **Transformasi Grafik CLT:**
> 1. **Awal (Individu):** Bayangkan histogram $X_i$ berbentuk kotak (Uniform) atau miring (Exponential).
> 2. **Proses ($S_n$):** Saat $n$ bertambah, histogram $S_n$ bergeser ke kanan (mean membesar $n\mu$) dan melebar (variance membesar $n\sigma^2$).
> 3. **Proses ($\bar{X}_n$):** Histogram $\bar{X}_n$ tetap berpusat di $\mu$, tapi semakin "kurus" dan tinggi (spike).
> 4. **Continuity Correction:** Bayangkan histogram diskrit sebagai balok-balok. Kurva Normal halus berjalan di atasnya. "At most 1030" berarti kita ingin luas balok 1030 penuh, jadi kita integralkan sampai tepi kanan balok (1030.5).

---

## 7. Jebakan Umum (Exam Traps)

> [!warning] Jebakan Umum
> **1. Salah Variance Sum vs Mean:**
> - ✗ $\text{Var}(S_n) = \sigma^2$ (Salah, ini variance individu)
> - ✗ $\text{Var}(\bar{X}) = n\sigma^2$ (Salah, ini variance sum)
> - ✓ $\text{Var}(S_n) = n\sigma^2$
> - ✓ $\text{Var}(\bar{X}) = \frac{\sigma^2}{n}$
> 
> **2. Lupa Akar Kuadrat saat Standardisasi:**
> - Sering terjadi: $Z = \frac{S_n - n\mu}{n\sigma^2}$ (Membagi dengan Variance).
> - Seharusnya: $Z = \frac{S_n - n\mu}{\sqrt{n\sigma^2}} = \frac{S_n - n\mu}{\sigma\sqrt{n}}$ (Membagi dengan SD).
> 
> **3. Continuity Correction Trap:**
> - Hanya digunakan jika variabel asli **Integer/Diskrit** dan kita mendekatinya dengan **Normal**.
> - Aturan Jempol:
>   - $P(X \leq k) \to \text{use limit } k + 0.5$
>   - $P(X < k) \to P(X \leq k-1) \to \text{use limit } k - 0.5$
>   - $P(X \geq k) \to \text{use limit } k - 0.5$

---

## 8. Ringkasan Eksekutif

> [!summary] Exam Cheat Sheet
> **MUST-REMEMBER FORMULAS:**
> 
> 1. **Standardisasi Sum ($S_n$):**
>    $$Z = \frac{S_n - n\mu}{\sigma\sqrt{n}}$$
> 
> 2. **Standardisasi Mean ($\bar{X}$):**
>    $$Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}}$$
> 
> 3. **Continuity Correction (Integer $X$):**
>    Approximating $P(S_n \leq K)$ with Normal $\to$ use limit $K + 0.5$.
> 
> **QUICK DECISION TREE:**
> ```mermaid
> graph TD
>     A[Soal tentang Total/Avg Sample?] -->|Yes| B{n > 30 atau Normal?}
>     B -->|Yes| C[Gunakan CLT Normal Approx]
>     B -->|No| D[Cek Exact Distribution]
>     C --> E{Variabel Diskrit/Integer?}
>     E -->|Yes| F[Gunakan Continuity Correction]
>     E -->|No| G[Standardisasi Langsung]
> ```

---

## 📚 References

- **Primary**: Ross, S. (2014). *A First Course in Probability*. Chapter 8 (Limit Theorems).
- **Secondary**: Hogg, R., Tanis, E., & Zimmerman, D. (2015). *Probability and Statistical Inference*.
- **SOA**: Exam P Learning Objective Topic 8.

## 🔗 Related Notes

- [[Expected Value]]
- [[Variance and Standard Deviation]]
- [[Normal Distribution]]
- [[Chebyshevs Inequality]] (Bound instead of approximation)

## 📝 Study Log

- [ ] Read intuition section
- [ ] Understand formal definition ($S_n$ vs $\bar{X}$)
- [ ] Solve Contoh Soal A (Insurance Sum)
- [ ] Solve Contoh Soal B (Sample Size $n$)
- [ ] Solve Contoh Soal C (Continuity Correction)
- [ ] Review common traps (Variance divisors)
- [ ] Memorize cheat sheet formulas

---

**Last Updated:** {{date:YYYY-MM-DD}}