
## ⏱️ Time Value of Money

### Accumulation & Amount Functions

- $A(t) = K a(t)$
    
- $A(0)=K$, $a(0)=1$
    

### Effective Interest Rate

- $i_t = \dfrac{a(t)-a(t-1)}{a(t-1)} = \dfrac{A(t)-A(t-1)}{A(t-1)}$
    

### Simple Interest

- $a(t)=1+it$
    
- $i_t=\dfrac{i}{1+i(t-1)}$
    

### Compound Interest

- $a(t)=(1+i)^t$
    
- $i_t=i$
    

### Discount Rate

- $d_t=\dfrac{a(t)-a(t-1)}{a(t)}$
    
- $d=\dfrac{i}{1+i}$
    
- $v=\dfrac{1}{1+i}$
    
- $1-d=v$
    

### Nominal Rates

- $(1+\dfrac{i^{(m)}}{m})^m = 1+i$
    
- $(1-\dfrac{d^{(m)}}{m})^m = 1-d$
    
- $i^{(m)} = m\left((1+i)^{1/m}-1\right)$
    
- $d^{(m)} = m\left(1-(1-d)^{1/m}\right)$
    

### Force of Interest

- $\delta_t=\dfrac{a'(t)}{a(t)}=\dfrac{d}{dt}\ln a(t)$
    
- $a(t)=e^{\int_0^t \delta_r dr}$
    
- Constant: $\delta=\ln(1+i)$
    

### Present & Accumulated Value

- $PV$ of $1$ due in $t$:
    
    - $(1+i)^{-t}=v^t=e^{-\delta t}=(1-d)^t$
        
- $AV$ of $1$ at time $t$:
    
    - $(1+i)^t=e^{\delta t}=(1-d)^{-t}$
        
- $AV$ from $t_1$ to $t_2$:
    
    - $\dfrac{a(t_2)}{a(t_1)}=e^{\int_{t_1}^{t_2}\delta_t dt}$
        

---
## 📐 Annuities

### Annuity-Immediate

- $a_n=\dfrac{1-v^n}{i}$
    
- $s_n=\dfrac{(1+i)^n-1}{i}$
    
- $s_n=(1+i)^n a_n$
    

### Annuity-Due

- $\ddot a_n=\dfrac{1-v^n}{d}=(1+i)a_n$
    
- $\ddot s_n=\dfrac{(1+i)^n-1}{d}=(1+i)s_n$
    

### Continuous Annuity

- $\bar a_n=\dfrac{1-v^n}{\delta}=\int_0^n e^{-\delta t}dt$
    
- $\bar s_n=\dfrac{(1+i)^n-1}{\delta}$
    

### Deferred Annuity

- ${}_m|a_n = v^m a_n = a_{m+n}-a_m$
    

### Perpetuity

- $a_\infty=\dfrac{1}{i}$
    
- $\ddot a_\infty=\dfrac{1}{d}$
    
- $\bar a_\infty=\dfrac{1}{\delta}$
    

---

## 📈 Increasing & Decreasing Annuities
### Increasing (Arithmetic)

- $(Ia)_n=\dfrac{\ddot a_n-nv^n}{i}$
    
- $(Is)_n=\dfrac{s_{n+1}-(n+1)}{i}$
    
- $(I\ddot a)_n=\dfrac{\ddot a_n-nv^n}{d}$
    
- $(I\ddot s)_n=\dfrac{s_{n+1}-(n+1)}{d}$
    

### Decreasing

- $(Da)_n=\dfrac{n-a_n}{i}$
    
- $(Ds)_n=\dfrac{n(1+i)^n-s_n}{i}$
    
- $(D\ddot a)_n=\dfrac{n-a_n}{d}$
    
- $(D\ddot s)_n=\dfrac{n(1+i)^n-s_n}{d}$
    

### Increasing Perpetuity

- $(Ia)_\infty=\dfrac{1}{i^2}=\dfrac{1}{id}$
    
- $(I\ddot a)_\infty=\dfrac{1}{d^2}$
    

---

## 🔁 m-thly Annuities

- $a_n^{(m)}=\dfrac{1-v^n}{i^{(m)}}$
    
- $\ddot a_n^{(m)}=\dfrac{1-v^n}{d^{(m)}}$
    
- $(Ia)_n^{(m)}=\dfrac{\ddot a_n-nv^n}{i^{(m)}}$
    

---

## 📉 Continuously Increasing Annuity

- $(\bar I\bar a)_n=\dfrac{\bar a_n-nv^n}{\delta}=\int_0^n t e^{-\delta t}dt$
    
- $(\bar I\bar s)_n=\dfrac{\bar s_n-n}{\delta}$
    

---

## 🔄 Varying Payments

- $PV=\int_0^n f(t)e^{-\delta t}dt$
    
- If $\delta$ varies:
    
    - $PV=\int_0^n f(t)e^{-\int_0^t\delta_r dr}dt$
        

---

## 📐 Geometric Annuities

### Immediate

- $PV=\dfrac{1-\left(\dfrac{1+k}{1+i}\right)^n}{i-k}$
    
- $FV=\dfrac{(1+i)^n-(1+k)^n}{i-k}$
    

### Due

- $PV=\dfrac{1-\left(\dfrac{1+k}{1+i}\right)^n}{d-kv}$
    
- $FV=\dfrac{(1+i)^n-(1+k)^n}{d-kv}$
    

---

## 🏦 Loans
### Level Payment Loan

- $L=Pa_n$
    
- $P=Pr_t+I_t$
    
- $I_t=iB_{t-1}$
    
- $Pr_t=P-I_t$
    
- $B_t=B_{t-1}-Pr_t$
    
- Prospective: $B_t=P a_{n-t}$
    
- Retrospective: $B_t=L(1+i)^t-Ps_t$
    

---

## 📜 Bonds

### Price

- $P=Fra_n+Cv^n$
    
- $P=C+(Fr-Ci)a_n$
    
- $K=Cv^n$, $g=\dfrac{Fr}{C}$
    
- $P=K+\dfrac{g}{i}(C-K)$
    

### Book Value

- $B_t=Fra_{n-t}+Cv^{n-t}$
    

### Premium / Discount

- If $g>i$: Premium $=(Fr-Ci)a_n$
    
- If $g<i$: Discount $=(Ci-Fr)a_n$
    

---

## 📊 Spot & Forward Rates
### Spot Rate

- $P_t=(1+r_t)^{-t}$
    

### Forward Rate

- $f_{[t,t+1]}=\dfrac{(1+r_{t+1})^{t+1}}{(1+r_t)^t}-1$
    
- $f_{[t,t+m]}=\left(\dfrac{(1+r_{t+m})^{t+m}}{(1+r_t)^t}\right)^{1/m}-1$
    

---

## ⏳ Duration & Convexity

### Duration

- $D_{mac}=\dfrac{\sum tA_tv^t}{\sum A_tv^t}$
    
- $D_{mod}=\dfrac{D_{mac}}{1+i}$
    

Special cases:

- Perpetuity: $D_{mac}=\dfrac{1+i}{i}=\dfrac{1}{d}$
    
- Level annuity: $D_{mac}=\dfrac{(Ia)_n}{a_n}$
    
- Par bond: $D_{mac}=\ddot a_n$
    

### Convexity

- $C_{mac}=\dfrac{d^2P/d\delta^2}{P}$
    
- $C_{mod}=C_{mac}+\dfrac{D_{mac}}{(1+i)^2}$
    

---

## 🛡️ Immunization
### Redington Conditions

- $PV(A)=PV(L)$
    
- $D_{mod}(A)=D_{mod}(L)$
    
- $C_{mod}(A)>C_{mod}(L)$
    

### Exact Matching

- Match **amount** and **timing** of all cash flows exactly
    

---
