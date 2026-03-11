
**1. Identifikasi Variabel**
- $A(0) = 10.000.000$
- $A(2) = 12.500.000$
- $n = 2$
- Dicari: (a) $i$ (compound), (b) $i_{\text{simple}}$, (c) PV dengan $d = 0.10$

**2. Time Diagram**
```
t=0                              t=2
|--------------------------------|
A(0)=10,000,000            A(2)=12,500,000

Compound: A(2) = A(0)(1+i)^2
Simple: A(2) = A(0)(1 + 2i)
```

**3. Equation of Value**

**(a) Compound interest:**
$$
A(2) = A(0)(1+i)^2
$$

**(b) Simple interest:**
$$
A(2) = A(0)(1 + ni)
$$

**(c) Present value dengan discount rate:**
$$
PV = A(2) \times v^2 = A(2) \times (1-d)^2
$$

**4. Eksekusi Aljabar**

**(a) Compound Interest Rate:**

$$
12.500.000 = 10.000.000 (1+i)^2
$$

$$
(1+i)^2 = \frac{12.500.000}{10.000.000} = 1.25
$$

$$
1+i = \sqrt{1.25} = 1.118034
$$

$$
i = 1.118034 - 1 = 0.118034 \approx 11.80\%
$$

**(b) Simple Interest Rate:**

$$
12.500.000 = 10.000.000 (1 + 2i_{\text{simple}})
$$

$$
1 + 2i_{\text{simple}} = 1.25
$$

$$
2i_{\text{simple}} = 0.25
$$

$$
i_{\text{simple}} = 0.125 = 12.5\%
$$

**(c) Present Value dengan $d = 10\%$:**

Discount factor:
$$
v = 1 - d = 1 - 0.10 = 0.90
$$

Present value:
$$
PV = 12.500.000 \times (0.90)^2 = 12.500.000 \times 0.81 = 10.125.000
$$

**5. Verification**

Cek compound: $(1.118034)^2 = 1.25$ ✓

Cek simple: $1 + 2(0.125) = 1.25$ ✓

Logika finansial: Compound rate (11.80%) < simple rate (12.5%) untuk same growth karena compound benefit dari reinvestment. Present value dengan $d=10\%$ adalah Rp 10.125 juta, sedikit lebih tinggi dari principal Rp 10 juta karena discount rate (10%) < implied interest rate (~11.8%).
