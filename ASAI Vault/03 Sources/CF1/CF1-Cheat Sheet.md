# 📋 CF1 — All-in-One Cheat Sheet
**Ujian:** 3 jam · 30 soal pilihan ganda · Passing mark ~60%
**Tags:** #CF1 #CheatSheet #MatematikaKeuangan

---

## ⚖️ Bobot Ujian

| # | Topik | Bobot | Prioritas |
|---|-------|-------|-----------|
| 1 | Nilai Waktu dari Uang | 10–20% | 🟡 Medium |
| 2 | Anuitas & Nilai Arus Kas | **20–30%** | 🔴 High |
| 3 | Struktur Jangka Waktu | **20–30%** | 🔴 High |
| 4 | Pengembalian Pinjaman | 5–15% | 🟡 Medium |
| 5 | Model Obligasi | 10–20% | 🟡 Medium |
| 6 | Produk Derivatif | 5–15% | 🟢 Low |
| 7 | Portofolio | 5–15% | 🟢 Low |

---

## TOPIK 1 — Nilai Waktu dari Uang

### 1.1 Interest Rates & Discount Rates

| Konsep | Formula |
|--------|---------|
| Accumulation (compound) | $A(n) = A(0)(1+i)^n$ |
| Present Value | $PV = FV \cdot v^n = \dfrac{FV}{(1+i)^n}$ |
| Discount factor | $v = \dfrac{1}{1+i} = 1 - d$ |
| Discount rate dari $i$ | $d = \dfrac{i}{1+i} = iv$ |
| Interest rate dari $d$ | $i = \dfrac{d}{1-d} = \dfrac{d}{v}$ |
| Simple interest | $A(n) = A(0)(1+in)$ |

> **Aturan:** $d < i$ selalu (untuk $i > 0$) · Compound default, simple hanya jika disebut eksplisit

---

### 1.2 Effective, Nominal & Force of Interest

| Konversi | Formula |
|----------|---------|
| Nominal → Efektif | $i = \left(1 + \dfrac{i^{(m)}}{m}\right)^m - 1$ |
| Efektif → Nominal | $i^{(m)} = m\left[(1+i)^{1/m} - 1\right]$ |
| Force of interest | $\delta = \ln(1+i) \iff i = e^\delta - 1$ |
| Accumulation (varying $\delta$) | $a(t) = e^{\int_0^t \delta_s \, ds}$ |
| Nominal discount rate | $d^{(m)} = m\left[1-(1-d)^{1/m}\right]$ |

> **Urutan wajib hafal:** $d < d^{(m)} < \delta < i^{(m)} < i$ untuk $m \geq 2, i > 0$

---

### 1.3 Cash Flow Equations & Inflation

| Konsep | Formula |
|--------|---------|
| Equation of value (PV basis) | $\sum_k C_k \cdot v^{t_k} = 0$ |
| Equation of value (FV basis) | $\sum_k C_k \cdot (1+i)^{n-t_k} = 0$ |
| **Fisher Equation (EXACT)** | $(1+i) = (1+r)(1+q) \implies r = \dfrac{1+i}{1+q}-1$ |
| Nominal → Real cashflow | $C_t^{\text{real}} = \dfrac{C_t^{\text{nom}}}{(1+q)^t}$ |
| Ekuivalensi | $\sum_t \dfrac{C_t^{\text{nom}}}{(1+i)^t} = \sum_t \dfrac{C_t^{\text{real}}}{(1+r)^t}$ |

> $i$ = nominal rate, $r$ = real rate, $q$ = inflation rate. **Jangan gunakan aproksimasi** $i \approx r + q$.

---

### 1.4 Accumulation & Present Value

| Konsep | Formula |
|--------|---------|
| Compound (constant $i$) | $a(t) = (1+i)^t$ |
| Varying rates (per period) | $a(n) = (1+i_1)(1+i_2)\cdots(1+i_n)$ |
| Force of interest (varying) | $a(t) = e^{\int_0^t \delta_s\,ds}$ |
| Partial accumulation $[t_1 \to t_2]$ | $a(t_1,t_2) = \dfrac{a(t_2)}{a(t_1)}$ |
| Instantaneous force | $\delta_t = \dfrac{a'(t)}{a(t)} = \dfrac{d}{dt}\ln a(t)$ |

---

### 1.5 NPV, IRR, DWRR, TWRR

$$NPV(i) = \sum_{t=0}^{n} C_t \cdot v^t \qquad \text{Terima jika } NPV > 0$$

**IRR** = nilai $i^*$ sehingga $NPV(i^*) = 0$ → gunakan interpolasi linear

$$i^* \approx i_1 + \frac{NPV_1}{NPV_1 - NPV_2}(i_2 - i_1)$$

**Dollar-Weighted Rate of Return (DWRR):**

$$i_{DW} \approx \frac{B - A - \sum C_k}{A + \sum C_k(1 - t_k)}$$

dimana $A$ = awal, $B$ = akhir, $C_k$ = kontribusi ke-$k$ pada waktu $t_k \in [0,1]$

**Time-Weighted Rate of Return (TWRR):**

$$1 + i_{TW} = \prod_{k=1}^{m}(1 + r_k) \qquad r_k = \frac{V_k}{V_{k-1} + C_{k-1}} - 1$$

| | DWRR | TWRR |
|-|------|------|
| Perspektif | Investor | Manajer |
| Sensitif timing | Ya | Tidak |
| Kegunaan | Pengalaman investor | Evaluasi manajer |

> **DWRR = TWRR** hanya jika **tidak ada** kontribusi/penarikan di tengah periode

---

## TOPIK 2 — Anuitas & Nilai Arus Kas

### 2.1 Annuity-Immediate & Annuity-Due

$$\boxed{a_{\overline{n}|i} = \frac{1-v^n}{i}} \qquad \boxed{s_{\overline{n}|i} = \frac{(1+i)^n - 1}{i}}$$

$$\ddot{a}_{\overline{n}|i} = (1+i)\cdot a_{\overline{n}|i} = \frac{1-v^n}{d} \qquad \ddot{s}_{\overline{n}|i} = (1+i)\cdot s_{\overline{n}|i}$$

| Relasi               | Formula                                                        |
| -------------------- | -------------------------------------------------------------- |
| FV dari PV           | $s_{\overline{n}} = a_{\overline{n}} \cdot (1+i)^n$            |
| Level payment        | $R = \dfrac{L}{a_{\overline{n}i}}$                             |
| Perpetuity-immediate | $a_{\overline{\infty}} = \dfrac{1}{i}$                         |
| Perpetuity-due       | $\ddot{a}_{\overline{\infty}} = \dfrac{1}{d} = \dfrac{1+i}{i}$ |

> **Annuity-immediate:** pembayaran di **akhir** periode (default)  
> **Annuity-due:** pembayaran di **awal** periode ($\times(1+i)$ dari immediate)

---

### 2.2 Perpetuity

| Jenis                             | Formula                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| Perpetuity-immediate              | $PV = \dfrac{R}{i}$                                                                       |
| Perpetuity-due                    | $PV = \dfrac{R}{d} = \dfrac{R(1+i)}{i}$                                                   |
| Deferred perpetuity ($m$ periode) | $PV = \dfrac{R \cdot v^m}{i}$                                                             |
| Growing perpetuity ($g < i$)      | $PV = \dfrac{R}{i-g}$                                                                     |
| Selisih annuity–perpetuity        | $a_{\overline{\infty}} - a_{\overline{n}} = \dfrac{v^n}{i} = {}_{n}a_{\overline{\infty}}$ |

---

### 2.3 Varying Annuities

**Geometric annuity** ($i \neq g$, pembayaran pertama $R$, tumbuh $g$ per periode):

$$PV = R \cdot \frac{1-\left(\frac{1+g}{1+i}\right)^n}{i-g}$$

Jika $i = g$: $PV = \dfrac{Rn}{1+i}$

**Arithmetic increasing annuity** (pembayaran ke-$t$ = $t$):

$$(Ia)_{\overline{n}|i} = \frac{\ddot{a}_{\overline{n}|i} - nv^n}{i}$$

**Arithmetic decreasing annuity** (pembayaran ke-$t$ = $n-t+1$):

$$(Da)_{\overline{n}|i} = \frac{n - a_{\overline{n}|i}}{i}$$

**Identitas kritis:**

$$(Ia)_{\overline{n}|} + (Da)_{\overline{n}|} = (n+1)\cdot a_{\overline{n}|}$$

**General arithmetic** (pembayaran ke-$k$ = $P+(k-1)Q$):

$$PV = (P-Q)\cdot a_{\overline{n}|} + Q\cdot(Ia)_{\overline{n}|}$$

---

### 2.4 Continuous Annuities

$$\bar{a}_{\overline{n}|\delta} = \frac{1-e^{-\delta n}}{\delta} = \frac{1-v^n}{\delta} \qquad \bar{s}_{\overline{n}|\delta} = \frac{e^{\delta n}-1}{\delta}$$

| Relasi                         | Formula                                                                   |
| ------------------------------ | ------------------------------------------------------------------------- |
| Konversi discrete → continuous | $\bar{a}_{\overline{n}} = \dfrac{i}{\delta}\cdot a_{\overline{n}}$        |
| Deferred continuous            | ${}_{m}\bar{a}_{\overline{n}} = e^{-\delta m}\cdot\bar{a}_{\overline{n}}$ |
| Continuous perpetuity          | $\bar{a}_{\overline{\infty}} = \dfrac{1}{\delta}$                         |

---

### 2.5 Deferred Annuities

$${}_{m|}a_{\overline{n}|} = v^m \cdot a_{\overline{n}|} = a_{\overline{m+n}|} - a_{\overline{m}|}$$

> **Timing immediate:** pembayaran pertama di $t = m+1$  
> **Timing due:** pembayaran pertama di $t = m$

---

### 2.6 Varying Interest Rates

$$A(0,n) = \prod_{k=1}^{n}(1+i_k) \qquad PV_k = \frac{R}{\prod_{j=1}^{k}(1+i_j)}$$

**Strategi dua blok** (rate $i$ untuk $m$ periode, rate $j$ untuk $n-m$ periode):

$$PV = R\cdot a_{\overline{m}|i} + R\cdot a_{\overline{n-m}|j}\cdot(1+i)^{-m}$$

---

## TOPIK 3 — Struktur Jangka Waktu Suku Bunga

### 3.1 Spot Rates & Forward Rates

| Konsep | Formula |
|--------|---------|
| Spot rate dari ZCB | $s_t = \left(\dfrac{F}{P(0,t)}\right)^{1/t} - 1$ |
| Forward rate (general) | $f_{t_1,t_2} = \left[\dfrac{(1+s_{t_2})^{t_2}}{(1+s_{t_1})^{t_1}}\right]^{1/(t_2-t_1)} - 1$ |
| One-period forward | $f_{n,n+1} = \dfrac{(1+s_{n+1})^{n+1}}{(1+s_n)^n} - 1$ |
| No-arbitrage condition | $(1+s_{t_2})^{t_2} = (1+s_{t_1})^{t_1}(1+f_{t_1,t_2})^{t_2-t_1}$ |

---

### 3.2 Yield Curve & Bootstrapping

**Harga obligasi dengan spot rates:**

$$P = \sum_{t=1}^{n} \frac{Fr}{(1+s_t)^t} + \frac{C}{(1+s_n)^n}$$

**YTM** (yield to maturity — satu flat rate):

$$P = Fr\cdot a_{\overline{n}|y} + C\cdot v_y^n$$

**Bootstrapping** — isolasi $s_n$ secara rekursif dari tenor terpendek ke terpanjang:

$$s_n = \left(\frac{Fr+C}{P_n - Fr\sum_{t=1}^{n-1}(1+s_t)^{-t}}\right)^{1/n} - 1$$

> Normal yield curve (upward-sloping): $s_1 < s_2 < \cdots < s_n$, maka $s_1 < YTM < s_n$

---

### 3.3 Duration (Macaulay & Modified)

$$\boxed{D_{\text{Mac}} = \frac{\sum_t t\cdot C_t\cdot v^t}{P} = \sum_t t\cdot w_t} \qquad \boxed{D_{\text{Mod}} = \frac{D_{\text{Mac}}}{1+i}}$$

**Perkiraan perubahan harga:**

$$\frac{\Delta P}{P} \approx -D_{\text{Mod}}\cdot\Delta i$$

$$\text{DV01} = D_{\text{Mod}}\cdot P\cdot 0{,}0001$$

**Duration portofolio:**

$$D_{\text{port}} = \sum_k w_k D_k, \quad w_k = \frac{P_k}{P_{\text{port}}}$$

**Shortcut ZCB:** $D_{\text{Mac, ZCB}} = n$ · **Obligasi par** ($r = i$): $D_{\text{Mac}} = \dfrac{1+i}{i}\left(1-v^n\right) = \ddot{a}_{\overline{n}|}$

---

### 3.4 Convexity

$$CX = \frac{1}{P}\cdot\frac{d^2P}{di^2} = \frac{\sum_t t(t+1)\cdot C_t\cdot v^{t+2}}{P}$$

**Aproksimasi orde-2:**

$$\frac{\Delta P}{P} \approx -D_{\text{Mod}}\cdot\Delta i + \frac{1}{2}\cdot CX\cdot(\Delta i)^2$$

$$CX_{\text{ZCB}} = \frac{n(n+1)}{(1+i)^2} \qquad CX_{\text{port}} = \sum_k w_k\cdot CX_k$$

> Gunakan koreksi convexity jika $|\Delta i| \geq 100$ bps

---

### 3.5 Immunization

**Tiga syarat Redington** (pada yield $i_0$):

$$\boxed{PV_A = PV_L} \qquad \boxed{D_{\text{Mac},A} = D_{\text{Mac},L}} \qquad \boxed{CX_A > CX_L}$$

**Surplus setelah pergeseran yield:**

$$S(i_0 + \Delta i) \approx \frac{1}{2}(CX_A - CX_L)\cdot PV_L\cdot(\Delta i)^2 \geq 0$$

**Lever rule** — alokasi dua instrumen ($D_1 < D_L < D_2$):

$$w_1 = \frac{D_2 - D_L}{D_2 - D_1}, \quad w_2 = \frac{D_L - D_1}{D_2 - D_1}$$

> **Barbell** (2 ZCB mengapit liabilitas) selalu $CX_A > CX_L$ → Syarat 3 otomatis terpenuhi  
> **Full immunization:** apit setiap liabilitas dengan dua arus kas aset secara individual

---

## TOPIK 4 — Pengembalian Pinjaman

### 4.1 & 4.2 Amortization Method

| Konsep                | Formula                                      |
| --------------------- | -------------------------------------------- |
| Level payment         | $R = \dfrac{L}{a_{\overline{n}i}}$           |
| Saldo prospektif      | $OB_t = R\cdot a_{\overline{n-t}i}$          |
| Saldo retrospektif    | $OB_t = L(1+i)^t - R\cdot s_{\overline{t}i}$ |
| Principal ke-$t$      | $PR_t = R\cdot v^{n-t+1}$                    |
| Bunga ke-$t$          | $I_t = R(1-v^{n-t+1})$                       |
| Pertumbuhan principal | $PR_{t+1} = PR_t\cdot(1+i)$                  |
| Total bunga           | $\sum I_t = nR - L$                          |

> **Prospektif** = hitung dari sisa pembayaran · **Retrospektif** = hitung dari akumulasi pembayaran lalu  
> **Balloon payment** > $R$ (saldo besar) · **Drop payment** < $R$ (saldo kecil di akhir)

---

### 4.3 Sinking Fund Method

| Konsep                   | Formula                                 |
| ------------------------ | --------------------------------------- |
| Setoran SF               | $D = \dfrac{L}{s_{\overline{n}j}}$      |
| Total outlay per periode | $\text{Outlay} = Li + D$                |
| Saldo SF setelah $t$     | $SF_t = D\cdot s_{\overline{t}j}$       |
| Bunga SF periode $t$     | $I_t^{SF} = SF_{t-1}\cdot j$            |
| Net interest periode $t$ | $\text{Net Interest}_t = Li - I_t^{SF}$ |

> Sinking fund: **hanya bayar bunga** ke kreditur, pokok dikumpulkan di rekening terpisah (rate $j$ mungkin $\neq i$)

---

## TOPIK 5 — Model Penentuan Harga Obligasi

### 5.1 Bond Pricing

**Notasi:** $F$ = face value, $C$ = redemption value, $r$ = coupon rate, $i$ = yield, $n$ = term, $Fr$ = coupon per period

$$\boxed{P = Fr\cdot a_{\overline{n}|i} + C\cdot v^n} \qquad \text{(Basic Formula)}$$

$$P = C + (Fr - Ci)\cdot a_{\overline{n}|i} \qquad \text{(Makeham Formula)}$$

| Relasi $r$ vs $i$ | Harga | Status |
|-------------------|-------|--------|
| $r > i$ | $P > C$ | Premium |
| $r = i$ | $P = C$ | Par |
| $r < i$ | $P < C$ | Discount |

> Jika $C = F$: gunakan Basic. Jika $C \neq F$: Makeham lebih cepat.

---

### 5.2 Book Value & Amortization

| Konsep                       | Formula                                              |
| ---------------------------- | ---------------------------------------------------- |
| Book value (prospektif)      | $B_t = Fr\cdot a_{\overline{n-t}i} + C\cdot v^{n-t}$ |
| Book value (retrospektif)    | $B_t = P(1+i)^t - Fr\cdot s_{\overline{t}i}$         |
| Amortization premium ke-$t$  | $PA_t = (Fr - Ci)\cdot v^{n-t+1}$                    |
| Accumulation discount ke-$t$ | $DA_t = (Ci - Fr)\cdot v^{n-t+1}$                    |
| Interest earned              | $I_t = i\cdot B_{t-1}$                               |

> **Premium bond** ($r > i$): $B_t$ turun menuju $C$ · **Discount bond** ($r < i$): $B_t$ naik menuju $C$  
> Total amortization = $|P - C|$ · Verifikasi: $B_0 = P$ dan $B_n = C$

---

### 5.3 Yield Rate & Coupon Calculations

**Pricing equation** (fundamental):
$$P = Fr\cdot a_{\overline{n}|i} + C\cdot v^n$$

**Linear interpolation untuk YTM:**

$$i \approx i_1 + \frac{P_1 - P}{P_1 - P_2}\cdot(i_2 - i_1), \quad P_1 > P > P_2, \; i_1 < i_2$$

**Coupon rate dari harga:**

$$Fr = \frac{P - C\cdot v^n}{a_{\overline{n}|i}}, \quad r = \frac{Fr}{F}$$

**Approximate YTM (quick check):**

$$i \approx \frac{Fr + (C-P)/n}{(P+C)/2}$$

---

## TOPIK 6 — Produk Derivatif

### 6.1 Options: Call & Put

| Posisi | Payoff | Profit |
|--------|--------|--------|
| Long Call | $\max(S_T - K, 0)$ | Payoff $- C_0 e^{rT}$ |
| Short Call | $-\max(S_T - K, 0)$ | Payoff $+ C_0 e^{rT}$ |
| Long Put | $\max(K - S_T, 0)$ | Payoff $- P_0 e^{rT}$ |
| Short Put | $-\max(K - S_T, 0)$ | Payoff $+ P_0 e^{rT}$ |

**Put-Call Parity** (European, no dividend):

$$C_0 - P_0 = S_0 - Ke^{-rT}$$

> **Breakeven Call:** $S_T = K + C_0 e^{rT}$ · **Breakeven Put:** $S_T = K - P_0 e^{rT}$

---

### 6.2 Forwards & Futures

| Kondisi | Forward Price |
|---------|--------------|
| No dividend | $F_{0,T} = S_0 e^{rT}$ |
| Dividend yield $\delta$ | $F_{0,T} = S_0 e^{(r-\delta)T}$ |
| Storage cost $c$ | $F_{0,T} = S_0 e^{(r+c)T}$ |
| Discrete dividends $D_t$ | $F_{0,T} = (S_0 - PV(D))\,e^{rT}$ |

$$\text{Prepaid forward: } F^P_{0,T} = S_0 e^{-\delta T}$$

$$\text{Payoff long forward} = S_T - F_{0,T}$$

$$\text{Mark-to-market (long, waktu } t): \; V_t = S_t - F_{0,T}e^{-r(T-t)}$$

---

### 6.3 Option Strategies

| Strategi | Komponen | Payoff Maksimum | Breakeven |
|----------|----------|-----------------|-----------|
| **Long call** | Buy call $K$ | Tidak terbatas | $K + C e^{rT}$ |
| **Protective put** | Stock + Long put | Tidak terbatas | $S_0 + P e^{rT}$ |
| **Bull call spread** | Long call $K_1$ + Short call $K_2$ | $K_2 - K_1$ (nett cost) | $K_1 + \text{net cost}$ |
| **Bear put spread** | Long put $K_2$ + Short put $K_1$ | $K_2 - K_1$ (nett cost) | $K_2 - \text{net cost}$ |
| **Collar** | Long put $K_1$ + Short call $K_2$ | $K_2$ (floor $K_1$) | — |
| **Straddle** | Long call + Long put (same $K$) | Tidak terbatas | $K \pm (C+P)e^{rT}$ |
| **Strangle** | Long put $K_1$ + Long call $K_2$ ($K_1 < K_2$) | Tidak terbatas | Dua titik |
| **Butterfly** | Long $K_1$, Short $2K_2$, Long $K_3$ | $K_2 - K_1$ (di $S_T = K_2$) | Dua titik |

**Straddle payoff:** $|S_T - K|$

**Bull call spread payoff:**
$$\begin{cases} 0 & S_T \leq K_1 \\ S_T - K_1 & K_1 < S_T < K_2 \\ K_2 - K_1 & S_T \geq K_2 \end{cases}$$

**Collar value:**
$$\begin{cases} K_1 & S_T \leq K_1 \\ S_T & K_1 < S_T < K_2 \\ K_2 & S_T \geq K_2 \end{cases}$$

---

## TOPIK 7 — Portofolio & CAPM

### 7.1 CAPM & Factor Models

$$\boxed{E[R_i] = R_f + \beta_i(E[R_m] - R_f)}$$

| Konsep | Formula |
|--------|---------|
| Beta (dari covariance) | $\beta_i = \dfrac{\text{Cov}(R_i,R_m)}{\text{Var}(R_m)}$ |
| Beta (dari correlation) | $\beta_i = \rho_{i,m}\dfrac{\sigma_i}{\sigma_m}$ |
| Portfolio beta | $\beta_p = \sum_i w_i\beta_i$ |
| Variance decomposition | $\sigma_i^2 = \beta_i^2\sigma_m^2 + \sigma^2(\varepsilon_i)$ |
| Market & risk-free | $\beta_m = 1, \quad \beta_f = 0$ |

> **Undervalued:** forecast return > CAPM required return → BUY  
> **Overvalued:** forecast return < CAPM required return → SELL/AVOID

---

### 7.2 Mean-Variance Portfolio Theory

$$E[R_p] = \sum_i w_i E[R_i]$$

**Variance dua aset:**

$$\sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\rho_{12}\sigma_1\sigma_2$$

**Sharpe Ratio:**

$$S = \frac{E[R_p] - R_f}{\sigma_p}$$

**Diversification:** $\sigma_p < \sum_i w_i\sigma_i$ jika $\rho_{ij} < 1$

**CML (Capital Market Line):**

$$E[R] = R_f + w_m(E[R_m] - R_f), \quad \sigma = w_m\sigma_m$$

**MVP (Minimum Variance Portfolio)** dua aset:

$$w_1^* = \frac{\sigma_2^2 - \rho_{12}\sigma_1\sigma_2}{\sigma_1^2 + \sigma_2^2 - 2\rho_{12}\sigma_1\sigma_2}$$

---

## 🔥 MASTER FORMULA SHEET (Quick Reference)

### Anuitas Dasar
$$a_{\overline{n}|} = \frac{1-v^n}{i} \quad s_{\overline{n}|} = \frac{(1+i)^n-1}{i} \quad \ddot{a}_{\overline{n}|} = (1+i)a_{\overline{n}|}$$

### Obligasi
$$P = Fr\cdot a_{\overline{n}|} + C\cdot v^n \qquad B_t = Fr\cdot a_{\overline{n-t}|} + Cv^{n-t}$$

### Duration & Convexity
$$D_{\text{Mac}} = \frac{\sum t\cdot C_t v^t}{P} \quad D_{\text{Mod}} = \frac{D_{\text{Mac}}}{1+i} \quad \frac{\Delta P}{P} \approx -D_{\text{Mod}}\Delta i + \frac{1}{2}CX(\Delta i)^2$$

### Loan
$$R = \frac{L}{a_{\overline{n}|}} \quad OB_t = R\cdot a_{\overline{n-t}|} \quad PR_t = Rv^{n-t+1}$$

### Derivatif
$$F_{0,T} = S_0 e^{rT} \quad C_0 - P_0 = S_0 - Ke^{-rT}$$

### Spot & Forward
$$(1+s_{t_2})^{t_2} = (1+s_{t_1})^{t_1}(1+f_{t_1,t_2})^{t_2-t_1}$$

---

## ⚠️ JEBAKAN UMUM (Common Traps)

| # | Jebakan | Koreksi |
|---|---------|---------|
| 1 | Mencampur simple & compound | Default = **compound** kecuali soal menyebut "simple" |
| 2 | $d = i$ | Selalu $d < i$ untuk $i > 0$ |
| 3 | Fisher: $i = r + q$ | Gunakan exact: $(1+i)=(1+r)(1+q)$ |
| 4 | Lupa fractional exponent | 18 bulan = 1.5 tahun → $(1+i)^{1.5}$ |
| 5 | Annuity-due vs immediate | Due = $\times(1+i)$; baca kapan pembayaran pertama |
| 6 | Interpolasi YTM: arah | Higher yield → lower price; pastikan bracket tepat |
| 7 | $DV01$ vs $D_{\text{Mod}}$ | $DV01 = D_{\text{Mod}}\times P\times 0.0001$ |
| 8 | DWRR vs TWRR | TWRR untuk evaluasi manajer, bukan investor |
| 9 | Forward: cost of carry | Dividend yield mengurangi $F$; storage cost menambah $F$ |
| 10 | Book value obligasi discount | Bergerak **naik** menuju $C$ (bukan turun) |

---

## 🧭 DECISION TREE KILAT

```
Soal CF1
├── Satu cash flow tunggal? → Topik 1.1 / 1.4: A(n) = A(0)(1+i)^n
├── Multiple cash flows?
│   ├── Level payments? 
│   │   ├── Finite → 2.1 annuity-immediate/due
│   │   └── Infinite → 2.2 perpetuity
│   ├── Varying payments?
│   │   ├── Geometric growth → 2.3 geometric annuity
│   │   └── Arithmetic → 2.3 (Ia) atau (Da)
│   └── Rates berbeda per periode → 2.6
├── Obligasi?
│   ├── Hitung harga → 5.1: P = Fr·a + C·v^n
│   ├── Book value/amortization → 5.2
│   └── Cari yield/kupon → 5.3: interpolasi
├── Pinjaman?
│   ├── Cicilan langsung ke kreditur → 4.2 amortisasi
│   └── Dana terpisah → 4.3 sinking fund
├── Term structure?
│   ├── Spot & forward rates → 3.1 / 3.2
│   ├── Sensitivitas harga → 3.3 duration, 3.4 convexity
│   └── Lindung nilai → 3.5 immunization (Redington)
├── Derivatif?
│   ├── Hak pilihan (optional) → 6.1 options
│   ├── Kewajiban (mandatory) → 6.2 forwards
│   └── Kombinasi options → 6.3 strategies
└── Portofolio?
    ├── Expected return & beta → 7.1 CAPM
    └── Variance, Sharpe, diversifikasi → 7.2 MV theory
```

---

## 📐 KONVERSI RATE PENTING

$$d \;=\; \frac{i}{1+i} \;=\; iv \quad\longleftrightarrow\quad i \;=\; \frac{d}{1-d}$$

$$i = \left(1+\frac{i^{(m)}}{m}\right)^m - 1 \quad\longleftrightarrow\quad i^{(m)} = m\left[(1+i)^{1/m}-1\right]$$

$$\delta = \ln(1+i) \quad\longleftrightarrow\quad i = e^\delta - 1$$

$$\text{Urutan: } d < d^{(m)} < \delta < i^{(m)} < i$$

---

*📖 Ref: Vaaler (Math Interest Theory) · Kellison (Theory of Interest) · McDonald (Derivatives Markets) · Ross et al. (Corp Finance)*  
*🗓️ Last updated: 2026-03-13 · #CF1 #CheatSheet #Obsidian*
