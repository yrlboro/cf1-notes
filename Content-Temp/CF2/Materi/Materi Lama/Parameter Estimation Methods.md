---
title: "Parameter Estimation Methods (MoM, MLE, Bayesian)"
aliases: ["Method of Moments", "Maximum Likelihood Estimation", "MLE", "Bayesian Estimation", "Parameter Estimation"]
tags:
  - ActuarialScience
  - ExamP
  - Probability
  - StatisticalInference
  - Estimation
  - MethodOfMoments
  - MaximumLikelihood
  - BayesianStatistics
exam_weight: 10-15%
difficulty: Medium to Hard
learning_objective: "2.a, 2.f"
created: 2026-01-16
updated: 2026-01-16
status: active
---

# Parameter Estimation Methods

> [!abstract] Outline
> - **Learning Objective ID**: 2.a (Linear combinations), 2.f (Basic estimation concepts)
> - **Kategori Silabus**: Univariate Probability Distributions / Parameter Estimation
> - **Skill yang Diuji**: Calculate, Interpret, Apply, Recognize
> - **Bobot Relatif**: ~10-15% of exam questions
> - **Level Kesulitan Tipikal**: Medium to Hard (varies by distribution complexity)
> - **Prerequisite Topics**: [[Expected Value]], [[Variance]], [[Common Probability Distributions]], [[Solving Systems of Equations]], [[Basic Calculus]], [[Random Samples]]
> - **Connected Topics**: [[Distribution Identification]], [[Moment Generating Functions]], [[Transformations of Random Variables]], [[Properties of Expected Values]], [[Statistical Inference]]

---

## 1. Intuisi

> [!tip] Intuisi: Method of Moments (MoM)
> Bayangkan Anda adalah seorang detektif yang harus menebak resep kue milik nenek berdasarkan kue yang sudah jadi. Anda tahu bahwa resep tersebut menggunakan takaran tertentu (parameter), tetapi Anda tidak tahu pastinya. Yang Anda punya adalah beberapa kue yang sudah jadi (data sampel).
> 
> **Method of Moments** pada dasarnya mengatakan: "Jika saya membuat kue dengan resep yang benar, rata-rata hasil kue saya harus sama dengan rata-rata kue nenek yang saya lihat." Jika kue nenek rata-rata beratnya 500 gram dan memiliki tingkat kemanisan tertentu, maka parameter resep yang benar harusnya menghasilkan kue dengan karakteristik rata-rata yang sama.
> 
> Ini adalah pendekatan matching: ==cocokkan momen teoritis (yang bergantung pada parameter yang tidak diketahui) dengan momen sampel (yang bisa Anda hitung dari data)==.

> [!tip] Intuisi: Maximum Likelihood Estimation (MLE)
> Bayangkan Anda menemukan 5 koin emas di sebuah gua. Anda tahu ada 3 kemungkinan: gua ini dulunya tempat penyimpanan bajak laut kaya (banyak koin), pedagang biasa (sedang), atau musafir miskin (sedikit). Pertanyaannya: mana yang paling masuk akal?
> 
> **Maximum Likelihood** berkata: "Pilih penjelasan yang membuat apa yang Anda lihat menjadi paling mungkin terjadi." Jika tempat bajak laut kaya membuat penemuan 5 koin menjadi sangat mungkin (likelihood tinggi), sementara tempat musafir miskin membuat ini hampir mustahil (likelihood rendah), maka tebakan terbaik adalah tempat bajak laut.
> 
> Secara matematis: ==dari semua kemungkinan nilai parameter, pilih yang membuat data observasi Anda memiliki probabilitas tertinggi untuk muncul==.

> [!tip] Intuisi: Bayesian Estimation
> Bayangkan Anda seorang dokter yang mendiagnosis pasien. Anda tidak mulai dari nol — Anda punya pengetahuan prior: "80% pasien dengan gejala ini biasanya penyakit A." Kemudian datang hasil lab (data baru). Bayesian estimation menggabungkan kedua informasi ini: pengetahuan sebelumnya PLUS bukti baru, untuk mendapatkan kesimpulan yang lebih baik.
> 
> Ini berbeda dengan MLE yang "amnesia" — MLE tidak peduli pengetahuan sebelumnya, hanya melihat data. ==Bayesian lebih bijak: menggunakan pengalaman masa lalu sambil tetap update dengan informasi baru==.

---

## 2. Definisi Formal

### A. Method of Moments (MoM)

> [!info] Definisi Formal: Method of Moments
> **Definisi Matematis:**
> 
> Misalkan $X_1, X_2, \ldots, X_n$ adalah sampel acak berukuran $n$ dari populasi dengan fungsi massa/kepadatan probabilitas $f(x; \theta_1, \ldots, \theta_k)$, di mana $\theta_1, \ldots, \theta_k$ adalah parameter yang tidak diketahui.
> 
> **Momen populasi ke-$j$:**
> 
> $$\mu_j' = E[X^j] = \int_{-\infty}^{\infty} x^j f(x; \theta_1, \ldots, \theta_k) \, dx$$
> 
> (atau summation untuk diskrit)
> 
> **Momen sampel ke-$j$:**
> 
> $$M_j' = \frac{1}{n} \sum_{i=1}^{n} X_i^j$$
> 
> **Estimator Method of Moments** diperoleh dengan menyelesaikan sistem persamaan:
> 
> $$\mu_1'(\theta_1, \ldots, \theta_k) = M_1'$$
> $$\mu_2'(\theta_1, \ldots, \theta_k) = M_2'$$
> $$\vdots$$
> $$\mu_k'(\theta_1, \ldots, \theta_k) = M_k'$$
> 
> **Parameter & Batasan:**
> - $n \geq 1$: ukuran sampel
> - $k$: jumlah parameter yang harus diestimasi
> - Momen populasi harus finite dan bisa diekspresikan dalam bentuk parameter
> 
> **Asumsi:**
> 1. $X_1, \ldots, X_n$ adalah sampel acak (i.i.d.)
> 2. Momen populasi exist dan finite
> 3. Sistem persamaan memiliki solusi unik

### B. Maximum Likelihood Estimation (MLE)

> [!info] Definisi Formal: Maximum Likelihood Estimation
> **Fungsi likelihood** untuk sampel $X_1, \ldots, X_n$:
> 
> $$L(\theta \mid x_1, \ldots, x_n) = \prod_{i=1}^{n} f(x_i; \theta)$$
> 
> **Log-likelihood:**
> 
> $$\ell(\theta) = \ln L(\theta) = \sum_{i=1}^{n} \ln f(x_i; \theta)$$
> 
> **MLE** $\hat{\theta}$ memaksimalkan $L(\theta)$ atau $\ell(\theta)$:
> 
> $$\hat{\theta} = \arg\max_{\theta} \ell(\theta)$$
> 
> **Prosedur:**
> 1. Tulis likelihood function
> 2. Ambil log
> 3. Diferensiasi: $\frac{d\ell}{d\theta} = 0$
> 4. Solve untuk $\theta$
> 5. Verifikasi maksimum (turunan kedua < 0)

### C. Bayesian Estimation

> [!info] Definisi Formal: Bayesian Estimation
> Parameter $\theta$ diperlakukan sebagai variabel acak dengan prior $\pi(\theta)$.
> 
> **Posterior distribution** (Bayes' Theorem):
> 
> $$\pi(\theta \mid x_1, \ldots, x_n) = \frac{L(\theta) \cdot \pi(\theta)}{\int L(\theta) \cdot \pi(\theta) \, d\theta}$$
> 
> Atau: ==Posterior $\propto$ Likelihood $\times$ Prior==
> 
> **Bayesian Estimator (Posterior Mean):**
> 
> $$\hat{\theta}_{\text{Bayes}} = E[\theta \mid X_1, \ldots, X_n]$$

---

## 3. Jembatan Logika

> [!note] Mengapa Method of Moments Bekerja?
> 
> 1. **Law of Large Numbers**: Ketika $n \to \infty$, momen sampel $M_j' \to \mu_j'$
> 2. **Rata-rata sampel** $\bar{X}$ adalah unbiased estimator untuk $E[X]$
> 3. **Momen sebagai signature**: First moment (lokasi), second moment (spread)
> 4. ==MoM mencari parameter yang membuat signature teoritis = empiris==

> [!note] Mengapa Maximum Likelihood Bekerja?
> 
> 1. **Produk untuk independence**: $P(X_1, X_2, \ldots) = \prod P(X_i)$
> 2. **Log untuk kemudahan**: Produk → sum, lebih stabil numerik
> 3. **Diferensiasi untuk optimasi**: First-order condition menemukan critical points
> 4. ==MLE menjawab: parameter mana yang membuat data paling probable?==

> [!note] Mengapa Bayesian Bekerja?
> 
> 1. **Bayes' Theorem**: $P(\theta \mid \text{data}) = \frac{P(\text{data} \mid \theta) \cdot P(\theta)}{P(\text{data})}$
> 2. **Conjugate priors**: Prior dan posterior dari family yang sama
> 3. **Weighted average**: Posterior mean adalah kombinasi prior dan data
> 4. ==Bayesian: update belief berdasarkan evidence baru==

---

## 4. Contoh Soal

> [!example] Soal A (Fundamental): MoM - Exponential
> **Soal:** Sampel dari Exp($\lambda$): 3.2, 1.5, 2.8, 4.1, 2.4. Estimasi $\lambda$ dengan MoM.
> 
> **Solusi:**
> 1. $E[X] = 1/\lambda$ untuk Exponential
> 2. $\bar{x} = (3.2+1.5+2.8+4.1+2.4)/5 = 2.8$
> 3. Set $1/\lambda = 2.8$
> 4. $\hat{\lambda} = 1/2.8 = 5/14 \approx 0.357$
> 
> **Jawaban: $\hat{\lambda} = 5/14$**

> [!example] Soal B (Exam-Typical): MLE - Gamma
> **Soal:** Sampel dari Gamma($\alpha=2$, $\beta$): 4, 6, 3, 5. Cari MLE untuk $\beta$.
> 
> **Solusi:**
> 1. PDF: $f(x) = \frac{1}{\beta^2}xe^{-x/\beta}$ (karena $\Gamma(2)=1$)
> 2. Log-likelihood: $\ell(\beta) = -2n\ln\beta - \frac{1}{\beta}\sum x_i$
> 3. Diferensiasi: $\frac{d\ell}{d\beta} = -\frac{2n}{\beta} + \frac{\sum x_i}{\beta^2} = 0$
> 4. Solve: $\hat{\beta} = \frac{\sum x_i}{2n} = \frac{\bar{x}}{2}$
> 5. $\bar{x} = 4.5$, jadi $\hat{\beta} = 2.25$
> 
> **Jawaban: $\hat{\beta} = \bar{X}/\alpha = 2.25$**

> [!example] Soal C (Challenging): Bayesian - Poisson with Gamma Prior
> **Soal:** Poisson data: 5,7,6,8. Prior: Gamma(3,2). Cari posterior dan Bayesian estimate.
> 
> **Solusi:**
> 1. Likelihood: $L(\lambda) \propto \lambda^{26}e^{-4\lambda}$
> 2. Prior: $\pi(\lambda) \propto \lambda^{2}e^{-\lambda/2}$
> 3. Posterior: $\propto \lambda^{28}e^{-4.5\lambda}$ = Gamma(29, 2/9)
> 4. Bayesian estimate: $29 \times 2/9 = 58/9 \approx 6.444$
> 5. MLE: $\bar{x} = 6.5$
> 
> **Posterior mean (6.444) adalah weighted average dari prior mean (6) dan MLE (6.5)**

---

## 5. Verification & Sanity Check

> [!success] Checklist Verifikasi
> 
> **Method of Moments:**
> - ✓ Parameter dalam valid range?
> - ✓ Sample size cukup ($n \geq k$ parameters)?
> - ✓ Solusi unique dan physically meaningful?
> 
> **Maximum Likelihood:**
> - ✓ Second derivative < 0 (maksimum)?
> - ✓ Solution di interior parameter space?
> - ✓ Probabilitas constraints terpenuhi?
> 
> **Bayesian:**
> - ✓ Posterior is proper distribution?
> - ✓ Conjugacy preserved?
> - ✓ Posterior mean antara prior mean dan MLE?

---

## 6. Visualisasi Mental

> [!quote] Visualisasi: MoM
> Overlay histogram data dengan PDF teoritis. Adjust parameter $\theta$ sampai:
> - Peak histogram = Peak theoretical
> - Spread histogram = Spread theoretical

> [!quote] Visualisasi: MLE
> Grafik likelihood function vs $\theta$:
> - Kurva berbentuk bukit
> - Peak di $\hat{\theta}_{\text{MLE}}$
> - First derivative = 0 di peak

> [!quote] Visualisasi: Bayesian
> Tiga kurva: Prior (wide) + Likelihood (peaked) → Posterior (compromise)
> Peak posterior adalah weighted average

---

## 7. Jebakan Umum

> [!warning] Kesalahan Notasi
> - ✗ $E[X] = \lambda$ untuk Exp → ✓ $E[X] = 1/\lambda$
> - ✗ Sample variance always use $n$ → ✓ Use $n-1$ for unbiased
> - ✗ $L(\theta) = P(\theta \mid X)$ → ✓ $L(\theta) = P(X \mid \theta)$

> [!warning] Kesalahan Konseptual
> **Misconception 1:** "MLE selalu unbiased"
> - **Truth:** MLE asymptotically unbiased, bisa biased untuk finite $n$
> 
> **Misconception 2:** "MoM selalu lebih mudah"
> - **Truth:** Untuk simple distributions yes, complex no
> 
> **Misconception 3:** "Bayesian butuh banyak data"
> - **Truth:** Bayesian powerful untuk small sample!

> [!danger] Red Flags
> 🚩 "Exponential with mean $\theta$" → Parameterization berbeda!
> 🚩 "Gamma($\alpha$, $\theta$)" → Rate vs scale parameterization?
> 🚩 "Unbiased estimator for $\sigma^2$" → Must use $n-1$
> 🚩 "Conjugate prior" → Must memorize pairs!

---

## 8. Ringkasan Eksekutif

> [!summary] Quick Reference: Common Estimators
> 
> | Distribution | Parameter | MoM/MLE |
> |--------------|-----------|---------|
> | Exp($\lambda$) | $\lambda$ | $1/\bar{X}$ |
> | Poisson($\lambda$) | $\lambda$ | $\bar{X}$ |
> | Gamma($\alpha$,$\beta$) known $\alpha$ | $\beta$ | $\bar{X}/\alpha$ |
> | Normal($\mu$,$\sigma^2$) known $\sigma$ | $\mu$ | $\bar{X}$ |

> [!summary] Conjugate Pairs (MEMORIZE!)
> 
> | Likelihood | Prior | Posterior |
> |------------|-------|-----------|
> | Binomial | Beta | Beta |
> | Poisson | Gamma | Gamma |
> | Exponential | Gamma | Gamma |
> | Normal (known var) | Normal | Normal |

> [!summary] Decision Tree
> 
> ```mermaid
> graph TD
>     A[Estimation Problem] --> B{Soal specify MLE?}
>     B -->|Yes| C[Use MLE]
>     B -->|No| D{Prior given?}
>     D -->|Yes| E[Bayesian]
>     D -->|No| F{Specify MoM?}
>     F -->|Yes| G[MoM]
>     F -->|No| H[Choose fastest: usually MoM for simple]
> ```

> [!summary] Exam Strategy
> **Time Management:**
> - MoM: 2-4 min
> - MLE simple: 4-6 min
> - Bayesian conjugate: 5-7 min
> 
> **Must Memorize:**
> - Common distribution means/variances
> - Conjugate prior pairs
> - MLE invariance property
> - Bias formula: $\text{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$

---

## 📚 References

- **Primary**: Ross, S. *A First Course in Probability*
- **Secondary**: Hogg, R., Tanis, E., Zimmerman, D. *Probability and Statistical Inference*
- **SOA**: Exam P Learning Objectives 2.a, 2.f

## 🔗 Related Notes

- [[Expected Value]]
- [[Variance]]
- [[Exponential Distribution]]
- [[Poisson Distribution]]
- [[Gamma Distribution]]
- [[Normal Distribution]]
- [[Bayes Theorem]]
- [[Law of Large Numbers]]

## 📝 Study Checklist

- [ ] Understand intuition for all 3 methods
- [ ] Memorize common estimators table
- [ ] Memorize conjugate pairs
- [ ] Solve Contoh Soal A
- [ ] Solve Contoh Soal B
- [ ] Solve Contoh Soal C
- [ ] Review common traps
- [ ] Practice with past exam questions

---

**Suggested Folder Structure:**
```
📁 Actuarial Science/
├── 📁 Exam P/
│   ├── 📁 01 - General Probability/
│   ├── 📁 02 - Univariate Distributions/
│   ├── 📁 03 - Multivariate Distributions/
│   ├── 📁 04 - Techniques & Applications/  ← File ini
│   └── 📁 Practice Problems/
```

**Last Updated:** 2026-01-16
