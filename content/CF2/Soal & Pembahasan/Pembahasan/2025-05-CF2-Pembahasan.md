## **No. 1**

Kerugian yang disebabkan oleh kebakaran pada gedung komersial dimodelkan dengan menggunakan variabel acak $X$ dengan fungsi kepadatan peluang sebagai berikut:

$$f(x) = \begin{cases} 0{,}005(20 - x), & \text{untuk } 0 < x < 20 \text{ miliar} \\ 0, & \text{selainnya} \end{cases}$$

Jika diketahui kerugian akibat kebakaran melebihi 8 miliar, berapakah peluang kerugian tersebut melebihi 16 miliar?

a. $\dfrac{1}{25}$  
b. $\dfrac{1}{9}$  
c. $\dfrac{1}{8}$  
d. $\dfrac{1}{3}$  
e. $\dfrac{3}{7}$

> [!summary]+ **Jawaban No. 1**
> **(b). $\dfrac{1}{9}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> > Di sini $A = \{X > 16\}$, $B = \{X > 8\}$, sehingga $A \cap B = \{X > 16\}$.
>
> **Diketahui:**
> - $f(x) = 0{,}005(20-x)$ untuk $0 < x < 20$ (kontinu, support $(0,20)$)
> - Target: $P(X > 16 \mid X > 8)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Irisan**
> > $\{X > 16\} \cap \{X > 8\} = \{X > 16\}$
> >
> > **Langkah 2: Hitung $P(X > 16)$ — pembilang**
> > $$P(X > 16) = \int_{16}^{20} 0{,}005(20-x)\,dx = 0{,}005\left[20x - \frac{x^2}{2}\right]_{16}^{20}$$
> > $$= 0{,}005\left[\left(400 - 200\right) - \left(320 - 128\right)\right] = 0{,}005(200 - 192) = 0{,}005 \times 8 = 0{,}04$$
> >
> > **Langkah 3: Hitung $P(X > 8)$ — penyebut**
> > $$P(X > 8) = \int_{8}^{20} 0{,}005(20-x)\,dx = 0{,}005\left[20x - \frac{x^2}{2}\right]_{8}^{20}$$
> > $$= 0{,}005\left[(400-200)-(160-32)\right] = 0{,}005(200 - 128) = 0{,}005 \times 72 = 0{,}36$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> > $$P(X > 16 \mid X > 8) = \frac{0{,}04}{0{,}36} = \frac{1}{9}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X>16)$ langsung sebagai jawaban tanpa mengkondisikan pada $\{X>8\}$.
> > > - Lupa bahwa untuk $A \subseteq B$ berlaku $P(A \cap B) = P(A)$, sehingga pembilang cukup $P(X>16)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kerugian melebihi 16" berarti $X > 16$, bukan $X \geq 16$ (karena kontinu, keduanya sama, tapi penting untuk diketahui).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "jika diketahui..." → selalu gunakan formula probabilitas bersyarat.
> > > - Jika $A \subset B$ → irisan langsung = $A$, tidak perlu hitung ulang.

---

## **No. 2**

Portofolio kerugian asuransi kebakaran, dinyatakan dengan variabel acak $X$, memiliki fungsi kepadatan peluang sebagai berikut:

$$f(x) = \begin{cases} \dfrac{(2{,}5)(200)^{2{,}5}}{x^{3{,}5}}, & \text{untuk } x > 200 \text{ juta} \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah perbedaan persentil ke-30 dan persentil ke-70 dari $X$! (Pilihlah jawaban yang paling mendekati!)

a. 35 juta  
b. 93 juta  
c. 124 juta  
d. 231 juta  
e. 298 juta

> [!summary]+ **Jawaban No. 2**
> **(b). $93$ juta**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > Distribusi Pareto: CDF adalah $F(x) = 1 - \left(\dfrac{\theta}{x}\right)^{\alpha}$ untuk $x > \theta$.
> > Persentil ke-$p$: $F(\pi_p) = p \Rightarrow \pi_p = \theta(1-p)^{-1/\alpha}$.
> > Di sini $\alpha = 2{,}5$ (parameter shape) dan $\theta = 200$ (parameter scale/lokasi).
>
> **Diketahui:**
> - $f(x) = \dfrac{(2{,}5)(200)^{2{,}5}}{x^{3{,}5}}$ untuk $x > 200$ → distribusi Pareto dengan $\alpha = 2{,}5$, $\theta = 200$
> - Target: $\pi_{70} - \pi_{30}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan CDF**
> > $$F(x) = \int_{200}^{x} \frac{(2{,}5)(200)^{2{,}5}}{t^{3{,}5}}\,dt = 1 - \left(\frac{200}{x}\right)^{2{,}5}$$
> >
> > **Langkah 2: Hitung Persentil ke-30 ($\pi_{30}$)**
> > $$F(\pi_{30}) = 0{,}30 \Rightarrow 1 - \left(\frac{200}{\pi_{30}}\right)^{2{,}5} = 0{,}30$$
> > $$\left(\frac{200}{\pi_{30}}\right)^{2{,}5} = 0{,}70 \Rightarrow \pi_{30} = \frac{200}{(0{,}70)^{0{,}4}}$$
> > $$(0{,}70)^{0{,}4} = e^{0{,}4 \ln(0{,}70)} = e^{0{,}4 \times (-0{,}35667)} = e^{-0{,}14267} \approx 0{,}8671$$
> > $$\pi_{30} \approx \frac{200}{0{,}8671} \approx 230{,}7 \text{ juta}$$
> >
> > **Langkah 3: Hitung Persentil ke-70 ($\pi_{70}$)**
> > $$\left(\frac{200}{\pi_{70}}\right)^{2{,}5} = 0{,}30 \Rightarrow \pi_{70} = \frac{200}{(0{,}30)^{0{,}4}}$$
> > $$(0{,}30)^{0{,}4} = e^{0{,}4 \ln(0{,}30)} = e^{0{,}4 \times (-1{,}20397)} = e^{-0{,}48159} \approx 0{,}6178$$
> > $$\pi_{70} \approx \frac{200}{0{,}6178} \approx 323{,}7 \text{ juta}$$
> >
> > **Langkah 4: Hitung Selisih**
> > $$\pi_{70} - \pi_{30} \approx 323{,}7 - 230{,}7 = 93{,}0 \text{ juta}$$
> >
> > **Hasil Akhir:** **(b)**. $93$ juta
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menukar $\alpha$ dan $1/\alpha$ saat menghitung invers CDF.
> > > - Lupa bahwa $0{,}4 = 1/2{,}5$, sehingga pangkat yang digunakan adalah $1/\alpha$ bukan $\alpha$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan $F(\pi_{70}) = 0{,}30$ (terbalik dengan $\pi_{30}$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut distribusi dengan PDF berbentuk $cx^{-(\alpha+1)}$ → ini Pareto, gunakan CDF analistik.
> > > - Selalu periksa: apakah support $x > \theta$ dan bukan $x > 0$.

---

## **No. 3**

Anda diberikan informasi sebagai berikut:

(i) $P(A \cup B) = 0{,}7$  
(ii) $P(A \cup B^C) = 0{,}9$

Tentukan $P(A)$!

a. $0{,}2$  
b. $0{,}3$  
c. $0{,}4$  
d. $0{,}6$  
e. $0{,}8$

> [!summary]+ **Jawaban No. 3**
> **(d). $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
> > $$P(A \cup B^C) = P(A) + P(B^C) - P(A \cap B^C)$$
> > $$P(A) = P(A \cap B) + P(A \cap B^C)$$
>
> **Diketahui:**
> - $P(A \cup B) = 0{,}7$
> - $P(A \cup B^C) = 0{,}9$
> - Target: $P(A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspresikan kedua persamaan**
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}7 \quad \cdots (1)$$
> > $$P(A \cup B^C) = P(A) + P(B^C) - P(A \cap B^C) = 0{,}9 \quad \cdots (2)$$
> >
> > **Langkah 2: Jumlahkan (1) dan (2)**
> > $$(1)+(2): \quad 2P(A) + P(B) + P(B^C) - P(A \cap B) - P(A \cap B^C) = 1{,}6$$
> > Karena $P(B) + P(B^C) = 1$ dan $P(A \cap B) + P(A \cap B^C) = P(A)$:
> > $$2P(A) + 1 - P(A) = 1{,}6$$
> > $$P(A) = 0{,}6$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa identitas $P(A \cap B) + P(A \cap B^C) = P(A)$ (partisi $A$ oleh $B$).
> > > - Tidak memanfaatkan $P(B) + P(B^C) = 1$ saat menjumlahkan dua persamaan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah membaca $P(A \cup B^C)$ sebagai $P(A \cup B)^C$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan dua persamaan dengan komplemen → coba jumlahkan kedua persamaan dan manfaatkan identitas komplemen.

---

## **No. 4**

Suatu perusahaan manufaktur yang memproduksi bohlam lampu dengan umur hidup yang diukur dalam bulan, diketahui mengikuti distribusi normal dengan mean sebesar 3 dan varians sebesar 1. Krisna membeli beberapa bohlam lampu untuk menggantikan bohlam-bohlam yang rusak. Bohlam lampu memiliki umur hidup yang saling bebas.

Berapakah minimum banyaknya bohlam yang harus dibeli oleh Krisna agar dapat digunakan setidaknya 40 bulan dengan peluang setidaknya $0{,}9772$?

a. 14  
b. 16  
c. 20  
d. 40  
e. 55

> [!summary]+ **Jawaban No. 4**
> **(b). $16$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] · [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> > Jika $X_i \sim N(\mu, \sigma^2)$ i.i.d., maka $S_n = \sum_{i=1}^n X_i \sim N(n\mu, n\sigma^2)$.
> > $$P(S_n \geq 40) \geq 0{,}9772$$
>
> **Diketahui:**
> - $X_i \sim N(3, 1)$ i.i.d., $\mu = 3$, $\sigma^2 = 1$
> - Target: $\min n$ sehingga $P(S_n \geq 40) \geq 0{,}9772$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi Total Umur**
> > $S_n = X_1 + \cdots + X_n \sim N(3n, n)$
> >
> > **Langkah 2: Standardisasi**
> > $$P(S_n \geq 40) = P\!\left(Z \geq \frac{40 - 3n}{\sqrt{n}}\right) \geq 0{,}9772$$
> > Karena $P(Z \geq -2) = 0{,}9772$, kita butuh:
> > $$\frac{40 - 3n}{\sqrt{n}} \leq -2$$
> >
> > **Langkah 3: Selesaikan Pertidaksamaan**
> > $$40 - 3n \leq -2\sqrt{n}$$
> > $$3n - 2\sqrt{n} - 40 \geq 0$$
> > Substitusi $u = \sqrt{n}$: $3u^2 - 2u - 40 \geq 0$
> > $$u = \frac{2 \pm \sqrt{4 + 480}}{6} = \frac{2 \pm 22}{6}$$
> > Ambil akar positif: $u = \frac{24}{6} = 4$, sehingga $\sqrt{n} \geq 4 \Rightarrow n \geq 16$.
> >
> > **Langkah 4: Verifikasi**
> > Untuk $n = 16$: $\frac{40 - 48}{4} = \frac{-8}{4} = -2$ → $P(Z \geq -2) = 0{,}9772$ ✓
> >
> > **Hasil Akhir:** **(b)**. $16$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(Z \geq 2) = 0{,}9772$ alih-alih $P(Z \geq -2) = 0{,}9772$.
> > > - Lupa bahwa $P(Z \geq -2) = \Phi(2) \approx 0{,}9772$ karena simetri distribusi normal.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Dapat digunakan setidaknya 40 bulan" = total umur $S_n \geq 40$, bukan rata-rata $\geq 40$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "peluang setidaknya $0{,}9772$" → ingat $\Phi(2) \approx 0{,}9772$ dan nilai kritis $z = -2$ untuk ekor kiri.

---

## **No. 5**

Rumah Sakit Sumber Sehat menerima $\frac{1}{5}$ dari keseluruhan pengiriman vaksin flu dari perusahaan farmasi X dan sisanya dari perusahaan farmasi selainnya. Setiap pengiriman memuat vial vaksin dengan jumlah yang sangat banyak. Untuk pengiriman yang dilakukan oleh farmasi X, 10% vial dinyatakan tidak efektif. Untuk setiap perusahaan farmasi yang lainnya, 2% vial dinyatakan tidak efektif. Pihak rumah sakit melakukan pengujian terhadap 30 vial yang diambil secara acak dari vial-vial yang dikirimkan oleh seluruh perusahaan farmasi dan menemukan bahwa 1 vial tidak efektif.

Tentukan peluang bahwa 1 vial yang tidak efektif tersebut berasal dari Perusahaan farmasi X! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}10$  
b. $0{,}14$  
c. $0{,}37$  
d. $0{,}63$  
e. $0{,}86$

> [!summary]+ **Jawaban No. 5**
> **(a). $0{,}10$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > **Teorema Bayes:**
> > $$P(H \mid E) = \frac{P(E \mid H) \cdot P(H)}{P(E)}$$
> > **Distribusi Binomial:** $P(X = k \mid n, p) = \binom{n}{k}p^k(1-p)^{n-k}$
>
> **Diketahui:**
> - $P(\text{X}) = 1/5$, $P(\text{lain}) = 4/5$
> - $p_X = 0{,}10$ (prob. tidak efektif dari X), $p_{\text{lain}} = 0{,}02$
> - 30 vial diuji, 1 tidak efektif; Target: $P(\text{X} \mid k=1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(k=1 \mid \text{dari X})$**
> > Jika pengiriman dari X: $K \sim B(30, 0{,}10)$
> > $$P(K=1 \mid X) = \binom{30}{1}(0{,}10)^1(0{,}90)^{29} = 30 \times 0{,}10 \times (0{,}90)^{29}$$
> > $(0{,}90)^{29} \approx 0{,}04661$
> > $$P(K=1 \mid X) \approx 30 \times 0{,}10 \times 0{,}04661 = 0{,}13983$$
> >
> > **Langkah 2: Hitung $P(k=1 \mid \text{dari lain})$**
> > Jika pengiriman dari lain: $K \sim B(30, 0{,}02)$
> > $$P(K=1 \mid \text{lain}) = \binom{30}{1}(0{,}02)^1(0{,}98)^{29} = 30 \times 0{,}02 \times (0{,}98)^{29}$$
> > $(0{,}98)^{29} \approx 0{,}5580$
> > $$P(K=1 \mid \text{lain}) \approx 30 \times 0{,}02 \times 0{,}5580 = 0{,}33480$$
> >
> > **Langkah 3: Hitung $P(k=1)$ dengan Hukum Probabilitas Total**
> > $$P(K=1) = P(K=1 \mid X) \cdot P(X) + P(K=1 \mid \text{lain}) \cdot P(\text{lain})$$
> > $$= 0{,}13983 \times \frac{1}{5} + 0{,}33480 \times \frac{4}{5}$$
> > $$= 0{,}02797 + 0{,}26784 = 0{,}29581$$
> >
> > **Langkah 4: Terapkan Teorema Bayes**
> > $$P(X \mid K=1) = \frac{P(K=1 \mid X) \cdot P(X)}{P(K=1)} = \frac{0{,}02797}{0{,}29581} \approx 0{,}0945 \approx 0{,}10$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan proporsi 10%/2% langsung sebagai likelihood tanpa mempertimbangkan distribusi binomial dari sampel 30 vial.
> > > - Mengabaikan fakta bahwa pengujian dilakukan atas 30 vial (sampel), bukan seluruh populasi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah mengartikan "1 vial tidak efektif berasal dari X" sebagai soal tanpa distribusi binomial.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "n vial diambil acak dan ditemukan k tidak efektif" → gunakan likelihood Binomial di dalam Bayes.

---

## **No. 6**

Suatu perusahaan elektronik memberikan garansi mesin yang menyatakan bahwa mesin akan digantikan jika terjadi kerusakan atau jika mesin sudah berusia 4 tahun, yang mana yang terlebih dahulu terjadi. Usia mesin pada saat terjadi kegagalan, $X$, memiliki fungsi kepadatan peluang sebagai berikut:

$$f(x) = \begin{cases} \dfrac{1}{5}, & \text{untuk } 0 < x < 5 \\ 0, & \text{selainnya} \end{cases}$$

$Y$ merupakan usia dari mesin pada saat penggantian. Tentukan varians dari $Y$! (Pilihlah jawaban yang paling mendekati!)

a. $1{,}3$  
b. $1{,}4$  
c. $1{,}7$  
d. $2{,}1$  
e. $7{,}5$

> [!summary]+ **Jawaban No. 6**
> **(c). $1{,}7$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > $Y = \min(X, 4)$: variabel campuran (mixed).
> > $$E[Y] = \int_0^4 x \cdot f(x)\,dx + 4 \cdot P(X \geq 4)$$
> > $$E[Y^2] = \int_0^4 x^2 \cdot f(x)\,dx + 16 \cdot P(X \geq 4)$$
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2$$
>
> **Diketahui:**
> - $X \sim U(0,5)$: $f(x) = 1/5$ untuk $0 < x < 5$
> - $Y = \min(X, 4)$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $P(X \geq 4)$**
> > $$P(X \geq 4) = \int_4^5 \frac{1}{5}\,dx = \frac{1}{5}$$
> >
> > **Langkah 2: Hitung $E[Y]$**
> > $$E[Y] = \int_0^4 x \cdot \frac{1}{5}\,dx + 4 \cdot \frac{1}{5} = \frac{1}{5}\cdot\frac{16}{2} + \frac{4}{5} = \frac{8}{5} + \frac{4}{5} = \frac{12}{5} = 2{,}4$$
> >
> > **Langkah 3: Hitung $E[Y^2]$**
> > $$E[Y^2] = \int_0^4 x^2 \cdot \frac{1}{5}\,dx + 16 \cdot \frac{1}{5} = \frac{1}{5}\cdot\frac{64}{3} + \frac{16}{5} = \frac{64}{15} + \frac{48}{15} = \frac{112}{15} \approx 7{,}467$$
> >
> > **Langkah 4: Hitung Varians**
> > $$\text{Var}(Y) = \frac{112}{15} - (2{,}4)^2 = \frac{112}{15} - \frac{144}{25} = \frac{2800 - 2160}{375} = \frac{640}{375} \approx 1{,}707 \approx 1{,}7$$
> >
> > **Hasil Akhir:** **(c)**. $1{,}7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(Y)$ menggunakan distribusi $X$ uniform secara langsung tanpa mempertimbangkan truncation di $y = 4$.
> > > - Melupakan titik massa pada $Y = 4$ (probabilitas $1/5$) yang membuat $Y$ menjadi variabel campuran.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah menafsirkan "digantikan jika terjadi kerusakan atau usia 4 tahun" sebagai $Y = X$ tanpa batasan atas.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "yang mana terlebih dahulu terjadi" → ini $\min(X, c)$, bukan $X$ biasa.
> > > - Variabel $Y = \min(X,c)$ selalu bersifat campuran: kontinu di $(0,c)$ dan titik massa di $c$.

---

## **No. 7**

Suatu pengujian diagnostik mengenai pendeteksian suatu penyakit memiliki 2 kemungkinan: 1 jika terdapat penyakit dan 0 jika tidak terdapat penyakit.

Misal $X$ merupakan kondisi keberadaan penyakit pasien saat ini dan $Y$ merupakan hasil pengecekan diagnostik. Fungsi kepadatan peluang bersama dari $X$ dan $Y$ diberikan sebagai berikut:

$$P(X = 0, Y = 0) = 0{,}800$$
$$P(X = 0, Y = 1) = 0{,}025$$
$$P(X = 1, Y = 0) = 0{,}050$$
$$P(X = 1, Y = 1) = 0{,}125$$

Hitunglah $Var(Y | X = 1)$! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}13$  
b. $0{,}15$  
c. $0{,}20$  
d. $0{,}51$  
e. $0{,}71$

> [!summary]+ **Jawaban No. 7**
> **(c). $0{,}20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] · [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> > $$P(Y = y \mid X = x) = \frac{P(X=x, Y=y)}{P(X=x)}$$
> > $$\text{Var}(Y \mid X=x) = E[Y^2 \mid X=x] - (E[Y \mid X=x])^2$$
> > Untuk variabel Bernoulli bersyarat: $\text{Var}(Y|X=1) = p(1-p)$ dengan $p = P(Y=1|X=1)$.
>
> **Diketahui:**
> - Joint PMF diberikan
> - Target: $\text{Var}(Y \mid X = 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Marginal $P(X=1)$**
> > $$P(X=1) = P(X=1,Y=0) + P(X=1,Y=1) = 0{,}050 + 0{,}125 = 0{,}175$$
> >
> > **Langkah 2: Hitung Distribusi Bersyarat $Y \mid X=1$**
> > $$P(Y=0 \mid X=1) = \frac{0{,}050}{0{,}175} = \frac{2}{7} \approx 0{,}2857$$
> > $$P(Y=1 \mid X=1) = \frac{0{,}125}{0{,}175} = \frac{5}{7} \approx 0{,}7143$$
> >
> > **Langkah 3: Hitung Variansi Bersyarat**
> > $Y \mid X=1 \sim \text{Bernoulli}(p)$ dengan $p = 5/7$.
> > $$\text{Var}(Y \mid X=1) = p(1-p) = \frac{5}{7} \times \frac{2}{7} = \frac{10}{49} \approx 0{,}204 \approx 0{,}20$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X=1)$ yang keliru (misalnya tidak menjumlahkan seluruh nilai $Y$).
> > > - Lupa normalisasi: distribusi bersyarat harus dijumlahkan menjadi 1.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung $\text{Var}(Y)$ marginal alih-alih $\text{Var}(Y \mid X=1)$ bersyarat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $Y$ bersyarat hanya bernilai 0 atau 1 → langsung gunakan rumus Bernoulli $p(1-p)$.

---

## **No. 8**

Misal $X_1, X_2, X_3$ merupakan variabel acak dari sebaran diskret dengan fungsi kepadatan peluang sebagai berikut:

$$p(x) = \begin{cases} \dfrac{1}{3}, & x = 0 \\ \dfrac{2}{3}, & x = 1 \\ 0, & \text{selainnya} \end{cases}$$

Tentukanlah fungsi pembangkit momen $M(t)$ dari $Y = X_1 X_2 X_3$!

a. $\dfrac{19}{27} + \dfrac{8}{27}e^{t}$  
b. $1 + 2e^{t}$  
c. $\left(\dfrac{1}{3} + \dfrac{2}{3}e^{t}\right)^3$  
d. $\dfrac{1}{27} + \dfrac{8}{27}e^{t}$  
e. $\dfrac{1}{3} + \dfrac{2}{3}e^{3t}$

> [!summary]+ **Jawaban No. 8**
> **(a). $\dfrac{19}{27} + \dfrac{8}{27}e^{t}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] · [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > $$M_Y(t) = E[e^{tY}] = \sum_y e^{ty} P(Y=y)$$
> > Untuk $Y = X_1 X_2 X_3$ dengan $X_i \in \{0,1\}$: $Y = 1$ hanya jika $X_1 = X_2 = X_3 = 1$.
>
> **Diketahui:**
> - $X_i \sim \text{Bernoulli}(2/3)$ i.i.d., support $\{0,1\}$
> - $Y = X_1 X_2 X_3$
> - Target: $M_Y(t)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi $Y$**
> > Karena $X_i \in \{0,1\}$, produk $Y = X_1 X_2 X_3$ juga bernilai 0 atau 1.
> > $Y = 1 \Leftrightarrow X_1 = X_2 = X_3 = 1$ (karena jika ada yang 0, produknya 0).
> > $$P(Y=1) = P(X_1=1) \cdot P(X_2=1) \cdot P(X_3=1) = \left(\frac{2}{3}\right)^3 = \frac{8}{27}$$
> > $$P(Y=0) = 1 - \frac{8}{27} = \frac{19}{27}$$
> >
> > **Langkah 2: Hitung MGF**
> > $$M_Y(t) = e^{t \cdot 0} \cdot P(Y=0) + e^{t \cdot 1} \cdot P(Y=1) = \frac{19}{27} + \frac{8}{27}e^t$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{19}{27} + \dfrac{8}{27}e^{t}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memilih opsi (c): $\left(\frac{1}{3}+\frac{2}{3}e^t\right)^3$ adalah MGF dari $X_1+X_2+X_3$, bukan $X_1 X_2 X_3$.
> > > - Mengira MGF produk = produk MGF (ini hanya berlaku untuk penjumlahan variabel bebas, bukan perkalian).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $Y = X_1 X_2 X_3$ (perkalian), bukan $X_1 + X_2 + X_3$ (penjumlahan).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mendefinisikan $Y$ sebagai *produk* variabel Bernoulli → tentukan PMF $Y$ terlebih dahulu, baru hitung MGF langsung dari definisi.

---

## **No. 9**

Banyaknya hari yang dilalui di antara awal tahun kalender dan kejadian di mana pengendara berisiko tinggi terlibat dalam suatu kecelakaan diketahui mengikuti distribusi eksponensial. Perusahaan asuransi menduga 30% pengendara berisiko tinggi akan terlibat dalam suatu kecelakaan dalam 50 hari pertama pada suatu tahun kalender.

Berapa porsi pengendara berisiko tinggi yang diekspektasikan akan terlibat kecelakaan dalam 80 hari pertama dalam suatu tahun kalender? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}15$  
b. $0{,}34$  
c. $0{,}43$  
d. $0{,}57$  
e. $0{,}66$

> [!summary]+ **Jawaban No. 9**
> **(c). $0{,}43$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > $X \sim \text{Exp}(\lambda)$: $F(x) = 1 - e^{-\lambda x}$ untuk $x > 0$.
> > Di sini $\lambda$ adalah rate (bukan scale). $E[X] = 1/\lambda$.
>
> **Diketahui:**
> - $P(X \leq 50) = 0{,}30$
> - Target: $P(X \leq 80)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan Parameter $\lambda$**
> > $$P(X \leq 50) = 1 - e^{-50\lambda} = 0{,}30$$
> > $$e^{-50\lambda} = 0{,}70 \Rightarrow -50\lambda = \ln(0{,}70) \Rightarrow \lambda = -\frac{\ln(0{,}70)}{50} = \frac{0{,}35667}{50} \approx 0{,}007133$$
> >
> > **Langkah 2: Hitung $P(X \leq 80)$**
> > $$P(X \leq 80) = 1 - e^{-80\lambda} = 1 - e^{-80 \times 0{,}007133} = 1 - e^{-0{,}5707}$$
> > $$= 1 - (0{,}70)^{80/50} = 1 - (0{,}70)^{1{,}6}$$
> > $$(0{,}70)^{1{,}6} = e^{1{,}6 \times \ln(0{,}70)} = e^{1{,}6 \times (-0{,}35667)} = e^{-0{,}57067} \approx 0{,}5653$$
> > $$P(X \leq 80) \approx 1 - 0{,}5653 = 0{,}4347 \approx 0{,}43$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}43$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan skala linear: $P(X \leq 80) = 80/50 \times 0{,}30 = 0{,}48$ — ini salah karena eksponensial tidak linear.
> > > - Menggunakan memoryless property secara keliru di sini (memoryless berlaku untuk probabilitas bersyarat, bukan untuk $P(X \leq 80)$ langsung).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan satu probabilitas distribusi eksponensial → gunakan untuk mencari $\lambda$, lalu hitung probabilitas lain.
> > > - Trik: $P(X \leq t_2) = 1 - (1-P(X \leq t_1))^{t_2/t_1}$ untuk distribusi eksponensial.

---

## **No. 10**

Suatu perusahaan asuransi umum menanggung risiko pengendara dalam jumlah yang besar. Misal $X$ merepresentasikan besaran kerugian (dalam juta) yang dialami atas asuransi kecelakaan kendaraan bermotor, dan $Y$ merepresentasikan besaran kerugian (dalam juta) atas asuransi tanggung gugat. $X$ dan $Y$ memiliki fungsi kepadatan peluang bersama sebagai berikut:

$$f(x, y) = \begin{cases} \dfrac{2x + 2 - y}{4}, & \text{untuk } 0 < x < 1 \text{ dan } 0 < y < 2 \\ 0, & \text{selainnya} \end{cases}$$

Berapa peluang total kerugian setidaknya 1 juta? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}33$  
b. $0{,}38$  
c. $0{,}41$  
d. $0{,}71$  
e. $0{,}75$

> [!summary]+ **Jawaban No. 10**
> **(d). $0{,}71$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> > $$P(X + Y \geq 1) = \iint_{x+y \geq 1} f(x,y)\,dx\,dy$$
> > Lebih mudah: $P(X+Y \geq 1) = 1 - P(X+Y < 1)$.
>
> **Diketahui:**
> - $f(x,y) = \dfrac{2x+2-y}{4}$ untuk $0<x<1$, $0<y<2$
> - Target: $P(X+Y \geq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X+Y < 1)$ dengan mengintegralkan di wilayah $x+y<1$, $x>0$, $y>0$**
> > Wilayah: $0 < x < 1$, $0 < y < 1-x$ (dan $y < 2$, otomatis terpenuhi karena $y < 1-x < 1 < 2$).
> > $$P(X+Y<1) = \int_0^1 \int_0^{1-x} \frac{2x+2-y}{4}\,dy\,dx$$
> >
> > **Langkah 2: Integral dalam (terhadap $y$)**
> > $$\int_0^{1-x} \frac{2x+2-y}{4}\,dy = \frac{1}{4}\left[(2x+2)y - \frac{y^2}{2}\right]_0^{1-x}$$
> > $$= \frac{1}{4}\left[(2x+2)(1-x) - \frac{(1-x)^2}{2}\right]$$
> > $$= \frac{(1-x)}{4}\left[(2x+2) - \frac{(1-x)}{2}\right] = \frac{(1-x)}{4} \cdot \frac{4x+4-1+x}{2} = \frac{(1-x)(5x+3)}{8}$$
> >
> > **Langkah 3: Integral luar (terhadap $x$)**
> > $$P(X+Y<1) = \int_0^1 \frac{(1-x)(5x+3)}{8}\,dx = \frac{1}{8}\int_0^1 (5x+3-5x^2-3x)\,dx$$
> > $$= \frac{1}{8}\int_0^1 (2x+3-5x^2)\,dx = \frac{1}{8}\left[x^2+3x-\frac{5x^3}{3}\right]_0^1$$
> > $$= \frac{1}{8}\left(1+3-\frac{5}{3}\right) = \frac{1}{8}\cdot\frac{7}{3} = \frac{7}{24} \approx 0{,}2917$$
> >
> > **Langkah 4: Hitung $P(X+Y \geq 1)$**
> > $$P(X+Y \geq 1) = 1 - \frac{7}{24} = \frac{17}{24} \approx 0{,}708 \approx 0{,}71$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}71$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegralkan langsung $P(X+Y \geq 1)$ tanpa memperhatikan batas wilayah integrasi yang rumit — lebih mudah melalui komplemen.
> > > - Kesalahan batas integral: ketika $x$ mendekati 1, batas $y$ dari $1-x$ mendekati 0.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut $P(X+Y \geq c)$ dengan $c$ di tengah support → gunakan komplemen dan pisahkan wilayah integrasi.

---

## **No. 11**

Suatu produk asuransi memiliki pola profit yang direpresentasikan oleh formula berikut:

$$Z = 3X - Y - 5$$

$X$ dan $Y$ merupakan variabel acak yang saling bebas dengan $Var(X) = 1$ dan $Var(Y) = 2$.

Berapakah varians dari $Z$?

a. $1$  
b. $5$  
c. $7$  
d. $11$  
e. $16$

> [!summary]+ **Jawaban No. 11**
> **(d). $11$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] · [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> > Untuk $X$ dan $Y$ independen:
> > $$\text{Var}(aX + bY + c) = a^2\text{Var}(X) + b^2\text{Var}(Y)$$
>
> **Diketahui:**
> - $\text{Var}(X) = 1$, $\text{Var}(Y) = 2$, $X \perp Y$
> - $Z = 3X - Y - 5$
> - Target: $\text{Var}(Z)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Sifat Varians**
> > Konstanta $-5$ tidak mempengaruhi varians:
> > $$\text{Var}(Z) = \text{Var}(3X - Y) = 3^2\text{Var}(X) + (-1)^2\text{Var}(Y) = 9(1) + 1(2) = 11$$
> > (Karena $X \perp Y$, kovariansinya nol.)
> >
> > **Hasil Akhir:** **(d)**. $11$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengikutsertakan konstanta $-5$ dalam perhitungan varians: $\text{Var}(Z) \neq 9(1) + 1(2) + 25$.
> > > - Lupa kuadratkan koefisien: menulis $3\text{Var}(X) + \text{Var}(Y) = 5$ (pilihan b).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut variabel *saling bebas* → kovarians = 0, varians penjumlahan/pengurangan hanya melibatkan $a^2\text{Var}(X)$.
> > > - Konstanta selalu hilang dalam varians.

---

## **No. 12**

Suatu perangkat terdiri dari dua sirkuit. Sirkuit kedua merupakan cadangan dari sirkuit yang pertama, sehingga sirkuit kedua hanya akan digunakan ketika sirkuit pertama mengalami kegagalan. Perangkat dinyatakan gagal jika dan hanya jika sirkuit kedua mengalami kegagalan. Misal $X$ dan $Y$ secara berurutan merupakan waktu dimana sirkuit pertama dan sirkuit kedua mengalami kegagalan.

$X$ dan $Y$ memiliki fungsi kepadatan peluang bersama sebagai berikut:

$$f(x, y) = \begin{cases} 6e^{-x}e^{-2y}, & \text{untuk } 0 < x < y < \infty \\ 0, & \text{selainnya} \end{cases}$$

Berapakah nilai harapan waktu di mana perangkat dinyatakan gagal? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}33$  
b. $0{,}50$  
c. $0{,}67$  
d. $0{,}83$  
e. $1{,}00$

> [!summary]+ **Jawaban No. 12**
> **(d). $0{,}83$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> > Perangkat gagal saat $Y$ (waktu kegagalan sirkuit kedua). Hitung $E[Y]$ menggunakan distribusi marginal $f_Y(y)$.
> > $$f_Y(y) = \int_0^y 6e^{-x}e^{-2y}\,dx$$
>
> **Diketahui:**
> - $f(x,y) = 6e^{-x}e^{-2y}$ untuk $0 < x < y < \infty$
> - Perangkat gagal pada waktu $Y$
> - Target: $E[Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Distribusi Marginal $f_Y(y)$**
> > $$f_Y(y) = \int_0^y 6e^{-x}e^{-2y}\,dx = 6e^{-2y}\left[-e^{-x}\right]_0^y = 6e^{-2y}(1-e^{-y})$$
> > $$= 6e^{-2y} - 6e^{-3y}, \quad y > 0$$
> >
> > **Langkah 2: Hitung $E[Y]$**
> > $$E[Y] = \int_0^\infty y\,(6e^{-2y} - 6e^{-3y})\,dy$$
> > Menggunakan $\int_0^\infty y e^{-\lambda y}\,dy = 1/\lambda^2$:
> > $$E[Y] = 6 \cdot \frac{1}{4} - 6 \cdot \frac{1}{9} = \frac{6}{4} - \frac{6}{9} = \frac{3}{2} - \frac{2}{3} = \frac{9-4}{6} = \frac{5}{6} \approx 0{,}833$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}83$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan batas bawah $x > 0$ saat mengintegralkan untuk mendapat marginal $f_Y(y)$ — batas integral dalam adalah dari 0 ke $y$, bukan 0 ke $\infty$.
> > > - Menghitung $E[X]$ alih-alih $E[Y]$ (perangkat gagal pada saat $Y$, bukan $X$).
> >
> > > [!CAUTION] Red Flags
> > > - Support $0 < x < y$ → saat marginalisasi terhadap $y$, batas $x$ dari 0 sampai $y$ (bukan $\infty$).
> > > - Gunakan rumus $\int_0^\infty ye^{-\lambda y}dy = 1/\lambda^2$ untuk mempercepat perhitungan.

---

## **No. 13**

Sebaran peluang dari besaran klaim (claim severity) untuk suatu polis asuransi kendaraan bermotor diberikan oleh tabel berikut:

| Besaran Klaim (dalam juta) | Peluang |
|:-:|:-:|
| $20$ | $0{,}15$ |
| $30$ | $0{,}10$ |
| $40$ | $0{,}05$ |
| $50$ | $0{,}20$ |
| $60$ | $0{,}10$ |
| $70$ | $0{,}10$ |
| $80$ | $0{,}30$ |

Berapa persen klaim berada dalam satu deviasi standar dari rataan besaran klaim?

a. $45\%$  
b. $55\%$  
c. $65\%$  
d. $85\%$  
e. $100\%$

> [!summary]+ **Jawaban No. 13**
> **(a). $45\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > $$E[X] = \sum x \cdot p(x), \quad E[X^2] = \sum x^2 \cdot p(x), \quad \sigma = \sqrt{E[X^2] - (E[X])^2}$$
> > Interval: $(\mu - \sigma,\, \mu + \sigma)$
>
> **Diketahui:**
> - Distribusi diskrit dengan 7 titik massa
> - Target: $P(\mu - \sigma \leq X \leq \mu + \sigma)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$**
> > $$E[X] = 20(0{,}15)+30(0{,}10)+40(0{,}05)+50(0{,}20)+60(0{,}10)+70(0{,}10)+80(0{,}30)$$
> > $$= 3 + 3 + 2 + 10 + 6 + 7 + 24 = 55$$
> >
> > **Langkah 2: Hitung $E[X^2]$**
> > $$E[X^2] = 400(0{,}15)+900(0{,}10)+1600(0{,}05)+2500(0{,}20)+3600(0{,}10)+4900(0{,}10)+6400(0{,}30)$$
> > $$= 60+90+80+500+360+490+1920 = 3500$$
> >
> > **Langkah 3: Hitung $\sigma$**
> > $$\text{Var}(X) = 3500 - 55^2 = 3500 - 3025 = 475$$
> > $$\sigma = \sqrt{475} \approx 21{,}79$$
> >
> > **Langkah 4: Tentukan Interval dan Hitung Probabilitas**
> > Interval: $(55 - 21{,}79,\, 55 + 21{,}79) = (33{,}21,\, 76{,}79)$
> > Nilai klaim dalam interval: $40, 50, 60, 70$ (nilai 20, 30, 80 berada di luar)
> > $$P = 0{,}05 + 0{,}20 + 0{,}10 + 0{,}10 = 0{,}45 = 45\%$$
> >
> > **Hasil Akhir:** **(a)**. $45\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memasukkan nilai 30 atau 80 ke dalam interval (perlu periksa apakah $30 > 33{,}21$ — tidak, dan apakah $80 < 76{,}79$ — tidak).
> > > - Lupa mengkuadratkan nilai klaim saat menghitung $E[X^2]$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu cek setiap nilai klaim terhadap batas interval $(\mu \pm \sigma)$ satu per satu.
> > > - Distribusi diskrit dengan dispersi tinggi sering menghasilkan % dalam 1-SD yang jauh di bawah 68% (aturan empiris hanya berlaku untuk distribusi normal).

---

## **No. 14**

Total besaran klaim dari produk asuransi kesehatan mengikuti sebaran dengan fungsi kepadatan peluang (dalam ribu rupiah): $f(x) = \dfrac{1}{1{.}000}e^{-\frac{x}{1{.}000}}$ untuk $x > 0$. Premi untuk produk ini ditentukan sebesar nilai ekspektasi total besaran klaim ditambah 100 ribu rupiah.

Jika 100 polis saling bebas terjual, berapakah peluang aproksimasi normal dari perusahaan asuransi akan membayarkan klaim melebihi premi yang diterima?

a. $0{,}001$  
b. $0{,}159$  
c. $0{,}333$  
d. $0{,}407$  
e. $0{,}460$

> [!summary]+ **Jawaban No. 14**
> **(b). $0{,}159$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] · [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> > $X_i \sim \text{Exp}(\lambda = 1/1000)$: $\mu = 1000$, $\sigma^2 = 1{.}000^2 = 10^6$.
> > Premi per polis $= \mu + 100 = 1{.}100$.
> > Total premi dari 100 polis $= 100 \times 1{.}100 = 110{.}000$.
> > Total klaim $S_{100} = \sum_{i=1}^{100} X_i$; dengan CLT: $S_{100} \approx N(100{.}000,\, 100 \times 10^6)$.
>
> **Diketahui:**
> - $X_i \sim \text{Exp}$ dengan mean 1000 dan varians $10^6$, i.i.d.
> - $n = 100$, Total premi $= 110{.}000$
> - Target: $P(S_{100} > 110{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi Aproksimasi $S_{100}$**
> > $$E[S_{100}] = 100 \times 1000 = 100{.}000$$
> > $$\text{Var}(S_{100}) = 100 \times 10^6 = 10^8 \Rightarrow \text{SD}(S_{100}) = 10{.}000$$
> >
> > **Langkah 2: Standardisasi**
> > $$P(S_{100} > 110{.}000) = P\!\left(Z > \frac{110{.}000 - 100{.}000}{10{.}000}\right) = P(Z > 1)$$
> >
> > **Langkah 3: Hitung Probabilitas**
> > $$P(Z > 1) = 1 - \Phi(1) \approx 1 - 0{,}8413 = 0{,}1587 \approx 0{,}159$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}159$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk distribusi eksponensial: $\sigma^2 = (1/\lambda)^2 = \mu^2$, bukan $\mu$. Jangan gunakan $\text{Var}(X_i) = 1000$.
> > > - Menggunakan $\text{SD}(S_{100}) = \sqrt{100} \times 1000 = 10{.}000$ (benar), tapi kadang keliru mengambil $\text{SD}(X_i) = 1000$ tanpa dikali $\sqrt{n}$.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi eksponensial: mean = SD = $1/\lambda$. Gunakan properti ini untuk mengecek perhitungan.
> > > - "Premi = mean + loading" → total premi dari $n$ polis = $n(\mu + \text{loading})$.

---

## **No. 15**

Suatu Perusahaan menawarkan produk polis asuransi jiwa dasar kepada karyawannya. Selain itu, Perusahaan juga menawarkan asuransi jiwa tambahan kepada karyawannya. Untuk membeli produk asuransi jiwa tambahan, karyawan diwajibkan membeli asuransi jiwa dasar. Misal $X$ merupakan proporsi dari total karyawan yang membeli polis asuransi jiwa dasar, dan $Y$ merupakan proporsi dari total karyawan membeli polis asuransi jiwa tambahan. Misal $X$ dan $Y$ memiliki fungsi kepadatan peluang bersama $f(x, y) = 2(x + y)$ dengan daerah di mana kepadatan (density) nya bernilai positif.

Jika diketahui 10% dari total karyawan membeli polis asuransi jiwa dasar, berapa peluang kurang dari 5% karyawan membeli polis asuransi tambahan? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}010$  
b. $0{,}013$  
c. $0{,}108$  
d. $0{,}417$  
e. $0{,}500$

> [!summary]+ **Jawaban No. 15**
> **(d). $0{,}417$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> > Support: $0 < y < x < 1$ (karena $Y \leq X$: proporsi tambahan ≤ proporsi dasar).
> > $$f_{Y|X}(y|x) = \frac{f(x,y)}{f_X(x)}$$
> > $$P(Y < 0{,}05 \mid X = 0{,}10) = \int_0^{0{,}05} f_{Y|X}(y \mid 0{,}10)\,dy$$
>
> **Diketahui:**
> - $f(x,y) = 2(x+y)$ dengan support $0 < y < x < 1$
> - $X = 0{,}10$ (diketahui)
> - Target: $P(Y < 0{,}05 \mid X = 0{,}10)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Marginal $f_X(x)$**
> > $$f_X(x) = \int_0^x 2(x+y)\,dy = 2\left[xy + \frac{y^2}{2}\right]_0^x = 2\left(x^2 + \frac{x^2}{2}\right) = 3x^2$$
> >
> > **Langkah 2: Hitung PDF Bersyarat $f_{Y|X}(y|x)$**
> > $$f_{Y|X}(y|x) = \frac{2(x+y)}{3x^2}, \quad 0 < y < x$$
> >
> > **Langkah 3: Substitusi $x = 0{,}10$ dan Hitung Probabilitas**
> > $$P(Y < 0{,}05 \mid X = 0{,}10) = \int_0^{0{,}05} \frac{2(0{,}10 + y)}{3(0{,}10)^2}\,dy = \int_0^{0{,}05} \frac{2(0{,}10+y)}{0{,}03}\,dy$$
> > $$= \frac{2}{0{,}03}\left[0{,}10y + \frac{y^2}{2}\right]_0^{0{,}05} = \frac{2}{0{,}03}\left(0{,}005 + 0{,}00125\right) = \frac{2 \times 0{,}00625}{0{,}03} = \frac{0{,}0125}{0{,}03} \approx 0{,}4167$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}417$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan support: $0 < y < x$ (bukan $0 < y < 1$) karena syarat $Y \leq X$ (tambahan ≤ dasar).
> > > - Menggunakan $f_X(x) = \int_0^1 f(x,y)dy$ (salah batas) alih-alih $\int_0^x$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan konteks "diperlukan syarat A untuk membeli B" → support adalah $0 < y < x < 1$, bukan kotak $[0,1]^2$.

---

## **No. 16**

Suatu polis asuransi mengganti biaya manfaat perawatan gigi, $X$, hingga maksimum benefit sebesar 250. Fungsi kepadatan peluang untuk $X$ yaitu:

$$f(x) = \begin{cases} ce^{-0{,}004x}, & \text{untuk } x \geq 0 \\ 0, & \text{selainnya} \end{cases}$$

Dengan $c$ merupakan suatu konstanta.

Hitunglah median manfaat dari produk ini! (Pilihlah jawaban yang paling mendekati!)

a. $161$  
b. $165$  
c. $173$  
d. $182$  
e. $250$

> [!summary]+ **Jawaban No. 16**
> **(c). $173$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > Manfaat $B = \min(X, 250)$: variabel campuran.
> > $X \sim \text{Exp}(\lambda = 0{,}004)$, $c = 0{,}004$.
> > Median $m$: $P(B \leq m) = 0{,}5$.
>
> **Diketahui:**
> - $X \sim \text{Exp}(0{,}004)$: $F_X(x) = 1 - e^{-0{,}004x}$
> - $B = \min(X, 250)$
> - Target: median $m$ dari $B$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi $B$**
> > $B$ adalah campuran: kontinu di $[0, 250)$ dan titik massa di $B = 250$ dengan $P(B=250) = P(X \geq 250) = e^{-0{,}004 \times 250} = e^{-1} \approx 0{,}3679$.
> >
> > **Langkah 2: Cek Apakah Median di Bagian Kontinu atau di $250$**
> > $P(B = 250) \approx 0{,}3679 < 0{,}5$ → median bukan di 250.
> > Cari $m < 250$ sehingga $P(B \leq m) = 0{,}5$:
> > $$P(B \leq m) = F_X(m) = 1 - e^{-0{,}004m} = 0{,}5$$
> >
> > **Langkah 3: Selesaikan untuk $m$**
> > $$e^{-0{,}004m} = 0{,}5 \Rightarrow -0{,}004m = \ln(0{,}5) = -0{,}6931$$
> > $$m = \frac{0{,}6931}{0{,}004} = 173{,}3 \approx 173$$
> >
> > **Hasil Akhir:** **(c)**. $173$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari median $X$ tanpa mempertimbangkan cap/truncation di 250 — hasilnya sama karena $173 < 250$, tapi prosedurnya berbeda secara konseptual.
> > > - Mengira median selalu di $250$ karena ada titik massa di sana.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Median manfaat" berarti median dari $B = \min(X, 250)$, bukan median dari $X$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu cek $P(B = \text{cap})$: jika $< 0{,}5$, median ada di bagian kontinu; jika $\geq 0{,}5$, median = cap.

---

## **No. 17**

Seorang aktuaris menentukan banyaknya tornado yang terjadi di negara P dan Q dalam satu tahun memiliki distribusi bersama sebagai berikut:

| | **Banyaknya tornado di negara Q dalam satu tahun** | | | |
|:-:|:-:|:-:|:-:|:-:|
| **Banyaknya tornado di negara P dalam satu tahun** | **0** | **1** | **2** | **3** |
| **0** | $0{,}12$ | $0{,}06$ | $0{,}05$ | $0{,}02$ |
| **1** | $0{,}13$ | $0{,}15$ | $0{,}12$ | $0{,}03$ |
| **2** | $0{,}05$ | $0{,}15$ | $0{,}10$ | $0{,}02$ |

Hitunglah varians bersyarat dari banyaknya tornado yang terjadi dalam satu tahun di negara Q, jika diketahui tidak ada tornado yang terjadi di negara P! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}51$  
b. $0{,}84$  
c. $0{,}88$  
d. $0{,}99$  
e. $1{,}76$

> [!summary]+ **Jawaban No. 17**
> **(d). $0{,}99$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] · [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> > $$P(Q=q \mid P=0) = \frac{P(P=0, Q=q)}{P(P=0)}$$
> > $$\text{Var}(Q \mid P=0) = E[Q^2 \mid P=0] - (E[Q \mid P=0])^2$$
>
> **Diketahui:**
> - Distribusi bersama dalam tabel
> - Kondisi: $P = 0$ (baris pertama)
> - Target: $\text{Var}(Q \mid P = 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Marginal $P(P=0)$**
> > $$P(P=0) = 0{,}12 + 0{,}06 + 0{,}05 + 0{,}02 = 0{,}25$$
> >
> > **Langkah 2: Distribusi Bersyarat $Q \mid P=0$**
> > $$P(Q=0|P=0) = 0{,}12/0{,}25 = 0{,}48$$
> > $$P(Q=1|P=0) = 0{,}06/0{,}25 = 0{,}24$$
> > $$P(Q=2|P=0) = 0{,}05/0{,}25 = 0{,}20$$
> > $$P(Q=3|P=0) = 0{,}02/0{,}25 = 0{,}08$$
> >
> > **Langkah 3: Hitung $E[Q \mid P=0]$**
> > $$E[Q|P=0] = 0(0{,}48)+1(0{,}24)+2(0{,}20)+3(0{,}08) = 0+0{,}24+0{,}40+0{,}24 = 0{,}88$$
> >
> > **Langkah 4: Hitung $E[Q^2 \mid P=0]$**
> > $$E[Q^2|P=0] = 0(0{,}48)+1(0{,}24)+4(0{,}20)+9(0{,}08) = 0+0{,}24+0{,}80+0{,}72 = 1{,}76$$
> >
> > **Langkah 5: Hitung Variansi Bersyarat**
> > $$\text{Var}(Q|P=0) = 1{,}76 - (0{,}88)^2 = 1{,}76 - 0{,}7744 = 0{,}9856 \approx 0{,}99$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}99$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Melaporkan $E[Q^2|P=0] = 1{,}76$ sebagai varians (pilihan e) tanpa mengurangkan $(E[Q|P=0])^2$.
> > > - Lupa membagi dengan $P(P=0) = 0{,}25$ untuk normalisasi distribusi bersyarat.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu normalisasi distribusi bersyarat terlebih dahulu sebelum menghitung momen.
> > > - Jangan lupa rumus $\text{Var} = E[X^2] - (E[X])^2$.

---

## **No. 18**

Seorang aktuaris menemukan bahwa pemegang polis memiliki tendensi untuk klaim sebanyak 2 kali dalam suatu periode polis sebesar tiga kali lipat dibandingkan klaim sebanyak 4 kali dalam suatu periode polis.

Jika banyaknya klaim yang diajukan mengikuti sebaran Poisson, berapakah varians dari banyaknya klaim yang diajukan?

a. $\dfrac{1}{\sqrt{3}}$  
b. $1$  
c. $\sqrt{2}$  
d. $2$  
e. $4$

> [!summary]+ **Jawaban No. 18**
> **(d). $2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > $X \sim \text{Poisson}(\lambda)$: $P(X=k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$, $\text{Var}(X) = \lambda$.
>
> **Diketahui:**
> - $P(X=2) = 3 \cdot P(X=4)$
> - Target: $\text{Var}(X) = \lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan**
> > $$\frac{e^{-\lambda}\lambda^2}{2!} = 3 \cdot \frac{e^{-\lambda}\lambda^4}{4!}$$
> >
> > **Langkah 2: Sederhanakan**
> > Bagi kedua sisi dengan $e^{-\lambda}$:
> > $$\frac{\lambda^2}{2} = 3 \cdot \frac{\lambda^4}{24} = \frac{\lambda^4}{8}$$
> > $$\frac{\lambda^2}{2} = \frac{\lambda^4}{8} \Rightarrow 4\lambda^2 = \lambda^4 \Rightarrow \lambda^2 = 4 \Rightarrow \lambda = 2$$
> >
> > **Langkah 3: Kesimpulan**
> > $\text{Var}(X) = \lambda = 2$
> >
> > **Hasil Akhir:** **(d)**. $2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa untuk Poisson, varians = mean = $\lambda$.
> > > - Salah menyederhanakan: membagi dengan $\lambda^2$ lupa mengecek $\lambda \neq 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan rasio $P(X=a)/P(X=b)$ untuk Poisson → hubungan langsung dengan $\lambda$ via PMF.

---

## **No. 19**

Suatu dealer mobil mampu menjual 0, 1 atau 2 mobil mewah setiap harinya. Saat menjual mobil, dealer juga menawarkan pelanggan untuk membeli perpanjangan garansi mobil. Misal $X$ merupakan banyaknya mobil mewah yang dijual dalam sehari, dan $Y$ merupakan banyaknya perpanjangan garansi mobil yang terjual.

$$P(X = 0, Y = 0) = \frac{1}{6}; \quad P(X = 1, Y = 0) = \frac{1}{12}; \quad P(X = 2, Y = 0) = \frac{1}{12}$$
$$P(X = 1, Y = 1) = \frac{1}{6}; \quad P(X = 2, Y = 1) = \frac{1}{3}; \quad P(X = 2, Y = 2) = \frac{1}{6}$$

Berapakah varians dari $X$? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}47$  
b. $0{,}58$  
c. $0{,}83$  
d. $1{,}42$  
e. $2{,}58$

> [!summary]+ **Jawaban No. 19**
> **(b). $0{,}58$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> > $$P(X=x) = \sum_y P(X=x, Y=y)$$
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
>
> **Diketahui:**
> - Joint PMF diberikan
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Marginal $P(X=x)$**
> > $$P(X=0) = \frac{1}{6}$$
> > $$P(X=1) = \frac{1}{12} + \frac{1}{6} = \frac{1}{12} + \frac{2}{12} = \frac{3}{12} = \frac{1}{4}$$
> > $$P(X=2) = \frac{1}{12} + \frac{1}{3} + \frac{1}{6} = \frac{1}{12} + \frac{4}{12} + \frac{2}{12} = \frac{7}{12}$$
> > Cek: $\frac{1}{6}+\frac{1}{4}+\frac{7}{12} = \frac{2}{12}+\frac{3}{12}+\frac{7}{12} = \frac{12}{12} = 1$ ✓
> >
> > **Langkah 2: Hitung $E[X]$**
> > $$E[X] = 0\cdot\frac{1}{6} + 1\cdot\frac{1}{4} + 2\cdot\frac{7}{12} = 0 + \frac{1}{4} + \frac{14}{12} = \frac{3}{12} + \frac{14}{12} = \frac{17}{12}$$
> >
> > **Langkah 3: Hitung $E[X^2]$**
> > $$E[X^2] = 0\cdot\frac{1}{6} + 1\cdot\frac{1}{4} + 4\cdot\frac{7}{12} = 0 + \frac{1}{4} + \frac{28}{12} = \frac{3}{12} + \frac{28}{12} = \frac{31}{12}$$
> >
> > **Langkah 4: Hitung Varians**
> > $$\text{Var}(X) = \frac{31}{12} - \left(\frac{17}{12}\right)^2 = \frac{31}{12} - \frac{289}{144} = \frac{372}{144} - \frac{289}{144} = \frac{83}{144} \approx 0{,}576 \approx 0{,}58$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}58$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(Y)$ alih-alih $\text{Var}(X)$.
> > > - Lupa menjumlahkan semua nilai $y$ untuk mendapatkan marginal $P(X=x)$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu verifikasi $\sum_x P(X=x) = 1$ setelah menghitung marginal.

---

## **No. 20**

Suatu polis asuransi memberikan manfaat penggantian biaya kerugian hingga limit benefit 10 juta. Kerugian pemegang polis $Y$, mengikuti distribusi dengan fungsi kepadatan peluang sebagai berikut:

$$f(y) = \begin{cases} \dfrac{2}{y^3}, & \text{untuk } y > 1 \\ 0, & \text{selainnya} \end{cases}$$

Berapakah nilai harapan dari manfaat yang dibayarkan oleh polis asuransi tersebut?

a. $1{,}0$ juta  
b. $1{,}3$ juta  
c. $1{,}8$ juta  
d. $1{,}9$ juta  
e. $2{,}0$ juta

> [!summary]+ **Jawaban No. 20**
> **(d). $1{,}9$ juta**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] · [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > Manfaat $B = \min(Y, 10)$.
> > $$E[B] = \int_1^{10} y \cdot f(y)\,dy + 10 \cdot P(Y > 10)$$
>
> **Diketahui:**
> - $f(y) = 2/y^3$ untuk $y > 1$ (Pareto dengan $\alpha=2$, $\theta=1$)
> - Limit manfaat = 10
> - Target: $E[\min(Y, 10)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(Y > 10)$**
> > $$P(Y > 10) = \int_{10}^\infty \frac{2}{y^3}\,dy = \left[-\frac{1}{y^2}\right]_{10}^\infty = \frac{1}{100} = 0{,}01$$
> >
> > **Langkah 2: Hitung $\int_1^{10} y \cdot f(y)\,dy$**
> > $$\int_1^{10} y \cdot \frac{2}{y^3}\,dy = \int_1^{10} \frac{2}{y^2}\,dy = \left[-\frac{2}{y}\right]_1^{10} = -\frac{2}{10} + 2 = \frac{9}{5} = 1{,}8$$
> >
> > **Langkah 3: Hitung $E[B]$**
> > $$E[B] = 1{,}8 + 10 \times 0{,}01 = 1{,}8 + 0{,}1 = 1{,}9$$
> >
> > **Hasil Akhir:** **(d)**. $1{,}9$ juta
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegralkan $\int_1^\infty y f(y)dy = E[Y]$ tanpa mempertimbangkan cap di 10.
> > > - Lupa menambahkan kontribusi titik massa di $B=10$ (yakni $10 \times P(Y>10)$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "manfaat hingga limit" → $B = \min(Y, \text{limit})$, gunakan formula nilai harapan variabel campuran.

---

## **No. 21**

Suatu Perusahaan asuransi memiliki cabang di 3 kota: J, K, dan L. Karena lokasi dari ketiga cabang berada di pulau yang berbeda, maka dapat diasumsikan bahwa kerugian yang terjadi di ketiga kota tersebut saling bebas. Fungsi pembangkit momen dari sebaran kerugian di 3 kota tersebut diberikan sebagai berikut:

$$M_J(t) = (1 - 2t)^{-3} \qquad M_K(t) = (1 - 2t)^{-2{,}5} \qquad M_L(t) = (1 - 2t)^{-4{,}5}$$

$X$ merepresentasikan kerugian total dari 3 kota tersebut.

Tentukan nilai dari $E(X^3)$!

a. $1{.}320$  
b. $2{.}082$  
c. $5{.}760$  
d. $8{.}000$  
e. $10{.}560$

> [!summary]+ **Jawaban No. 21**
> **(e). $10{.}560$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > Karena J, K, L independen: $M_X(t) = M_J(t) \cdot M_K(t) \cdot M_L(t)$.
> > MGF berbentuk $(1-2t)^{-\alpha}$ adalah distribusi Gamma dengan parameter shape $\alpha$ dan scale $\beta = 2$.
> > Momen ke-$k$ dari Gamma($\alpha, \beta$): $E[X^k] = \dfrac{\Gamma(\alpha+k)}{\Gamma(\alpha)} \cdot \beta^k$.
>
> **Diketahui:**
> - MGF masing-masing kota diberikan
> - $X = J + K + L$ (independen)
> - Target: $E[X^3]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan MGF Total**
> > $$M_X(t) = (1-2t)^{-3}(1-2t)^{-2{,}5}(1-2t)^{-4{,}5} = (1-2t)^{-10}$$
> > Jadi $X \sim \Gamma(\alpha=10, \beta=2)$.
> >
> > **Langkah 2: Hitung $E[X^3]$**
> > $$E[X^3] = \frac{\Gamma(10+3)}{\Gamma(10)} \cdot 2^3 = \frac{\Gamma(13)}{\Gamma(10)} \cdot 8 = \frac{12!}{9!} \cdot 8 = (10 \times 11 \times 12) \times 8$$
> > $$= 1{.}320 \times 8 = 10{.}560$$
> >
> > **Hasil Akhir:** **(e)**. $10{.}560$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $\Gamma(13)/\Gamma(10) = 12 \times 11 \times 10 = 1{.}320$ (bukan $12! / 9!$ dalam bentuk faktorial penuh).
> > > - Tidak mengalikan dengan $\beta^k = 2^3 = 8$.
> > > - Menghitung $E[X]^3$ alih-alih $E[X^3]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika MGF berbentuk $(1-\beta t)^{-\alpha}$ → distribusi Gamma, gunakan formula momen Gamma untuk efisiensi.
> > > - MGF dari penjumlahan variabel independen = produk MGF individual.

---

## **No. 22**

Berapakah peluang dari 5 kartu yang diambil secara acak dan tanpa pengembalian dari setumpuk kartu standar yang berjumlah 52 kartu, terdiri dari 1 Raja Sekop, 1 Raja lainnya, 2 Ratu, serta 1 kartu lainnya yang bukan Raja atau Ratu?

a. $\dfrac{\dbinom{4}{2}\dbinom{4}{2}\dbinom{44}{1}}{\dbinom{52}{5}}$  
b. $\dfrac{\dbinom{3}{1}\dbinom{4}{2}\dbinom{44}{1}}{\dbinom{52}{5}}$  
c. $\dfrac{\dbinom{7}{3}\dbinom{44}{1}}{\dbinom{52}{5}}$  
d. $\dfrac{\dbinom{3}{1}\dbinom{4}{2}\dbinom{11}{1}}{\dbinom{52}{5}}$  
e. $\dfrac{\dbinom{3}{1}\dbinom{4}{2}}{\dbinom{52}{5}}$

> [!summary]+ **Jawaban No. 22**
> **(b). $\dfrac{\dbinom{3}{1}\dbinom{4}{2}\dbinom{44}{1}}{\dbinom{52}{5}}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > Aturan perkalian counting:
> > - Pilih 1 Raja Sekop dari 1 kartu Raja Sekop: $\binom{1}{1} = 1$
> > - Pilih 1 Raja lain (non-Sekop) dari 3 Raja yang tersisa: $\binom{3}{1}$
> > - Pilih 2 Ratu dari 4 Ratu: $\binom{4}{2}$
> > - Pilih 1 kartu bukan Raja/Ratu dari $52-4-4=44$ kartu: $\binom{44}{1}$
>
> **Diketahui:**
> - 52 kartu standar: 4 Raja, 4 Ratu, 44 lainnya
> - Target: 5 kartu = {1 Raja Sekop, 1 Raja lainnya, 2 Ratu, 1 bukan Raja/Ratu}
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Pembilang**
> > - 1 Raja Sekop dari 1: $\binom{1}{1} = 1$
> > - 1 Raja lain dari 3 Raja non-Sekop: $\binom{3}{1}$
> > - 2 Ratu dari 4: $\binom{4}{2}$
> > - 1 kartu non-Raja non-Ratu dari 44: $\binom{44}{1}$
> >
> > Pembilang: $1 \times \binom{3}{1} \times \binom{4}{2} \times \binom{44}{1} = \binom{3}{1}\binom{4}{2}\binom{44}{1}$
> >
> > **Langkah 2: Hitung Penyebut**
> > Memilih 5 kartu dari 52: $\binom{52}{5}$
> >
> > **Langkah 3: Peluang**
> > $$P = \frac{\binom{3}{1}\binom{4}{2}\binom{44}{1}}{\binom{52}{5}}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{\binom{3}{1}\binom{4}{2}\binom{44}{1}}{\binom{52}{5}}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memilih 2 Raja dari 4 (opsi a: $\binom{4}{2}$) mengabaikan syarat bahwa satu Raja harus spesifik Raja Sekop.
> > > - Salah menghitung kartu bukan Raja/Ratu: $52-4-4=44$, bukan $52-4-4-4=40$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Raja Sekop" adalah satu kartu spesifik, sehingga $\binom{1}{1}=1$ (tidak ada pilihan); raja lainnya dipilih dari 3 sisa.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut kartu spesifik (seperti "Raja Sekop") → kartu itu sudah tertentu, yang dipilih hanya sisanya.

---

## **No. 23**

Misal $X$ merupakan variabel acak diskret dengan fungsi peluang $P(X = x) = \dfrac{2}{3^x}$ untuk $x = 1, 2, 3, \ldots$

Berapakah peluang $X$ merupakan angka genap?

a. $\dfrac{1}{4}$  
b. $\dfrac{2}{7}$  
c. $\dfrac{1}{3}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{3}{4}$

> [!summary]+ **Jawaban No. 23**
> **(a). $\dfrac{1}{4}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > Deret geometri: $\sum_{k=1}^\infty r^k = \dfrac{r}{1-r}$ untuk $|r| < 1$.
>
> **Diketahui:**
> - $P(X=x) = 2/3^x$ untuk $x = 1, 2, 3, \ldots$
> - Target: $P(X \text{ genap}) = P(X=2) + P(X=4) + \cdots$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi PMF Valid**
> > $$\sum_{x=1}^\infty \frac{2}{3^x} = 2 \cdot \frac{1/3}{1-1/3} = 2 \cdot \frac{1}{2} = 1 \checkmark$$
> >
> > **Langkah 2: Hitung $P(X \text{ genap})$**
> > $$P(X \text{ genap}) = \sum_{k=1}^\infty P(X=2k) = \sum_{k=1}^\infty \frac{2}{3^{2k}} = 2\sum_{k=1}^\infty \left(\frac{1}{9}\right)^k$$
> > $$= 2 \cdot \frac{1/9}{1-1/9} = 2 \cdot \frac{1/9}{8/9} = 2 \cdot \frac{1}{8} = \frac{1}{4}$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{1}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan $1/3^x$ (lupa faktor 2 dalam PMF).
> > > - Menggunakan rasio $r = 1/3$ alih-alih $r = 1/9 = (1/3)^2$ untuk nilai genap.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk mencari $P(X \in \{2,4,6,...\})$ dari distribusi geometric-like, substitusikan $x = 2k$ dan gunakan deret geometri dengan $r = (r_\text{original})^2$.

---

## **No. 24**

Misal $X$ memiliki sebaran binomial dengan parameter $n$ dan $p$, dan distribusi bersyarat dari $Y$ jika diketahui $X = x$ mengikuti sebaran Poisson dengan rataan $x$.

Tentukan varians dari $Y$!

a. $x$  
b. $np$  
c. $np(1 - p)$  
d. $np^2$  
e. $np(2 - p)$

> [!summary]+ **Jawaban No. 24**
> **(e). $np(2-p)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Distribusi Bersyarat]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Hogg-McKean-Craig Bab 2 |
>
> > [!info]+ **Rumus**
> > **Hukum Variansi Total:**
> > $$\text{Var}(Y) = E[\text{Var}(Y|X)] + \text{Var}(E[Y|X])$$
> > $Y|X=x \sim \text{Poisson}(x)$: $E[Y|X=x] = x$, $\text{Var}(Y|X=x) = x$.
> > $X \sim B(n,p)$: $E[X]=np$, $\text{Var}(X)=np(1-p)$, $E[X^2] = np(1-p)+(np)^2$.
>
> **Diketahui:**
> - $X \sim B(n,p)$
> - $Y \mid X=x \sim \text{Poisson}(x)$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Momen Bersyarat**
> > $$E[Y|X] = X, \quad \text{Var}(Y|X) = X$$
> >
> > **Langkah 2: Terapkan Hukum Variansi Total**
> > $$\text{Var}(Y) = E[\text{Var}(Y|X)] + \text{Var}(E[Y|X]) = E[X] + \text{Var}(X)$$
> >
> > **Langkah 3: Substitusi Momen Binomial**
> > $$\text{Var}(Y) = np + np(1-p) = np(1 + 1 - p) = np(2-p)$$
> >
> > **Hasil Akhir:** **(e)**. $np(2-p)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $\text{Var}(Y) = E[X] = np$ (hanya mengambil $E[\text{Var}(Y|X)]$ tanpa menambahkan $\text{Var}(E[Y|X])$).
> > > - Menjawab $\text{Var}(Y) = \text{Var}(X) = np(1-p)$ (hanya mengambil $\text{Var}(E[Y|X])$ tanpa menambahkan $E[\text{Var}(Y|X)]$).
> >
> > > [!CAUTION] Red Flags
> > > - Hukum variansi total **selalu** terdiri dari dua suku: $E[\text{Var}(Y|X)] + \text{Var}(E[Y|X])$. Jangan lupa salah satu.

---

## **No. 25**

Seorang aktuaris melakukan studi pengalaman mengenai kemungkinan berbagai kategori usia pengendara yang terlibat dalam setidaknya satu kecelakaan dalam periode satu tahun. Hasil studi diberikan sebagai berikut:

| Kategori Usia Pengendara | % Banyaknya Pengendara | Peluang Setidaknya Satu Kecelakaan Terjadi |
|:-:|:-:|:-:|
| Remaja | $8\%$ | $0{,}15$ |
| Dewasa Muda | $16\%$ | $0{,}08$ |
| Paruh Baya | $45\%$ | $0{,}04$ |
| Usia Tua | $31\%$ | $0{,}05$ |
| Total | $100\%$ | |

Jika seorang pengendara diketahui terlibat dalam setidaknya satu kecelakaan di tahun lalu, berapakah peluang pengendara tersebut dari kategori Dewasa Muda? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}06$  
b. $0{,}16$  
c. $0{,}19$  
d. $0{,}22$  
e. $0{,}25$

> [!summary]+ **Jawaban No. 25**
> **(d). $0{,}22$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > Teorema Bayes:
> > $$P(\text{DM} \mid A) = \frac{P(A \mid \text{DM}) \cdot P(\text{DM})}{P(A)}$$
> > $$P(A) = \sum_i P(A \mid C_i) P(C_i)$$
>
> **Diketahui:**
> - Prior: Remaja 8%, Dewasa Muda (DM) 16%, Paruh Baya 45%, Usia Tua 31%
> - Likelihood kecelakaan: 0,15; 0,08; 0,04; 0,05
> - Target: $P(\text{DM} \mid \text{kecelakaan})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A)$ dengan Hukum Total**
> > $$P(A) = 0{,}08(0{,}15) + 0{,}16(0{,}08) + 0{,}45(0{,}04) + 0{,}31(0{,}05)$$
> > $$= 0{,}012 + 0{,}0128 + 0{,}018 + 0{,}0155 = 0{,}0583$$
> >
> > **Langkah 2: Terapkan Bayes**
> > $$P(\text{DM} \mid A) = \frac{0{,}16 \times 0{,}08}{0{,}0583} = \frac{0{,}0128}{0{,}0583} \approx 0{,}2196 \approx 0{,}22$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}22$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab 0,16 (proporsi Dewasa Muda di populasi) tanpa mengkondisikan pada kecelakaan.
> > > - Salah menghitung $P(A)$ dengan menjumlahkan hanya sebagian kategori.
> >
> > > [!CAUTION] Red Flags
> > > - "Jika diketahui terlibat kecelakaan" → Teorema Bayes, selalu hitung $P(A)$ lengkap dulu.

---

## **No. 26**

Future lifetime (dalam bulan) dari dua komponen sebuah mesin memiliki fungsi kepadatan peluang bersama:

$$f_{x,y}(x, y) = \begin{cases} \dfrac{6}{125{.}000}(50 - x - y), & \text{untuk } 0 < x < 50 - y < 50 \\ 0, & \text{selainnya} \end{cases}$$

Tentukan peluang kedua komponen masih dapat digunakan 20 bulan dari sekarang!

a. $\dfrac{6}{125{.}000} \int_{0}^{20} \int_{0}^{20} (50 - x - y) \, dy \, dx$  
b. $\dfrac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x} (50 - x - y) \, dy \, dx$  
c. $\dfrac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x-y} (50 - x - y) \, dy \, dx$  
d. $\dfrac{6}{125{.}000} \int_{20}^{50} \int_{20}^{50-x} (50 - x - y) \, dy \, dx$  
e. $\dfrac{6}{125{.}000} \int_{20}^{50} \int_{20}^{50-x-y} (50 - x - y) \, dy \, dx$

> [!summary]+ **Jawaban No. 26**
> **(b). $\dfrac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x} (50 - x - y) \, dy \, dx$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> > Support: $0 < x$, $0 < y$, $x + y < 50$ (segitiga).
> > Kondisi "kedua komponen masih hidup setelah 20 bulan" = $\{X > 20\} \cap \{Y > 20\}$.
> > $$P(X>20, Y>20) = \iint_{x>20, y>20, x+y<50} f(x,y)\,dy\,dx$$
>
> **Diketahui:**
> - Support: $x > 0$, $y > 0$, $x+y < 50$
> - Target: $P(X > 20, Y > 20)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Wilayah Integrasi**
> > Kondisi: $x > 20$, $y > 20$, $x+y < 50$.
> > Dari $x > 20$ dan $y > 20$: otomatis $x+y > 40$. Juga $x+y < 50$.
> > Untuk $y$: $20 < y < 50 - x$.
> > Agar $y > 20$ dan $50-x > 20$: $x < 30$.
> > Jadi batas $x$: $20 < x < 30$.
> > Batas $y$: $20 < y < 50-x$.
> >
> > **Langkah 2: Tulis Integral**
> > $$P(X>20, Y>20) = \frac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x} (50-x-y)\,dy\,dx$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x} (50-x-y)\,dy\,dx$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan batas atas $x$ = 50 tanpa mempertimbangkan bahwa $y \geq 20$ mensyaratkan $x < 30$ (agar batas $50-x > 20$).
> > > - Memilih opsi (a): batas $x$ dan $y$ dari 0 ke 20 menghasilkan komplemen dari yang diminta.
> >
> > > [!CAUTION] Red Flags
> > > - Wilayah $x > 20$, $y > 20$, $x+y < 50$: selalu gambar segitiga dan potong dengan kondisi, lalu tentukan batas integral dengan cermat.

---

## **No. 27**

Besaran klaim-klaim yang diajukan atas polis asuransi kendaraan bermotor mengikuti distribusi normal dengan mean $19{.}400$ dan deviasi standar $5{.}000$.

Berapakah peluang rata-rata dari 25 sampel yang diambil secara acak melebihi $20{.}000$? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}01$  
b. $0{,}15$  
c. $0{,}27$  
d. $0{,}33$  
e. $0{,}45$

> [!summary]+ **Jawaban No. 27**
> **(c). $0{,}27$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.2 Distribusi Sampel]] · [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> > $\bar{X} \sim N\!\left(\mu, \dfrac{\sigma^2}{n}\right)$
> > $$P(\bar{X} > c) = P\!\left(Z > \frac{c - \mu}{\sigma/\sqrt{n}}\right)$$
>
> **Diketahui:**
> - $\mu = 19{.}400$, $\sigma = 5{.}000$, $n = 25$
> - Target: $P(\bar{X} > 20{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standardisasi**
> > $$\sigma_{\bar{X}} = \frac{5{.}000}{\sqrt{25}} = \frac{5{.}000}{5} = 1{.}000$$
> > $$Z = \frac{20{.}000 - 19{.}400}{1{.}000} = \frac{600}{1{.}000} = 0{,}6$$
> >
> > **Langkah 2: Hitung Probabilitas**
> > $$P(\bar{X} > 20{.}000) = P(Z > 0{,}6) = 1 - \Phi(0{,}6) \approx 1 - 0{,}7257 = 0{,}2743 \approx 0{,}27$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}27$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\sigma = 5{.}000$ langsung alih-alih $\sigma/\sqrt{n} = 1{.}000$.
> > > - Menghitung $P(X > 20{.}000)$ untuk individu (bukan rata-rata sampel).
> >
> > > [!CAUTION] Red Flags
> > > - Kata "rata-rata dari $n$ sampel" → gunakan $\sigma_{\bar{X}} = \sigma/\sqrt{n}$, bukan $\sigma$.

---

## **No. 28**

Suatu perusahaan menentukan harga dari asuransi gempa bumi dengan menggunakan asumsi-asumsi sebagai berikut:

(i) Di setiap tahun kalender, terdapat hanya satu kali gempa bumi  
(ii) Di setiap tahun kalender, peluang terjadinya gempa bumi sebesar $0{,}05$  
(iii) Banyaknya gempa bumi yang terjadi di setiap tahun kalender saling bebas  

Dengan menggunakan asumsi di atas, tentukan peluang terjadi kurang dari 3 gempa bumi dalam 20 tahun. (Pilihlah jawaban yang paling mendekati!)

a. $0{,}06$  
b. $0{,}19$  
c. $0{,}38$  
d. $0{,}62$  
e. $0{,}92$

> [!summary]+ **Jawaban No. 28**
> **(e). $0{,}92$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> > $N \sim B(n=20, p=0{,}05)$
> > $$P(N < 3) = P(N=0) + P(N=1) + P(N=2)$$
> > $$P(N=k) = \binom{20}{k}(0{,}05)^k(0{,}95)^{20-k}$$
>
> **Diketahui:**
> - Setiap tahun: gempa terjadi dengan $p=0{,}05$ atau tidak
> - 20 tahun independen → $N \sim B(20, 0{,}05)$
> - Target: $P(N < 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: $P(N=0)$**
> > $$P(N=0) = (0{,}95)^{20} \approx 0{,}3585$$
> >
> > **Langkah 2: $P(N=1)$**
> > $$P(N=1) = 20 \times 0{,}05 \times (0{,}95)^{19} = 20 \times 0{,}05 \times 0{,}3774 = 0{,}3774$$
> >
> > **Langkah 3: $P(N=2)$**
> > $$P(N=2) = \binom{20}{2}(0{,}05)^2(0{,}95)^{18} = 190 \times 0{,}0025 \times 0{,}3972 = 0{,}1887$$
> >
> > **Langkah 4: Jumlahkan**
> > $$P(N<3) = 0{,}3585 + 0{,}3774 + 0{,}1887 = 0{,}9246 \approx 0{,}92$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}92$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kurang dari 3" = $\{0,1,2\}$, bukan $\{0,1,2,3\}$. Jangan masukkan $P(N=3)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Kurang dari $k$" selalu berarti ketat, yaitu $0, 1, \ldots, k-1$.
> > > - Asumsi tiap tahun independen + Bernoulli → jumlah dalam $n$ tahun adalah Binomial.

---

## **No. 29**

Distribusi kerugian yang disebabkan oleh kerusakan akibat kebakaran gudang diberikan sebagai berikut:

| Besar Kerugian | Peluang |
|:-:|:-:|
| $0$ | $0{,}900$ |
| $500$ | $0{,}060$ |
| $1{.}000$ | $0{,}030$ |
| $10{.}000$ | $0{,}008$ |
| $50{.}000$ | $0{,}001$ |
| $100{.}000$ | $0{,}001$ |

Jika kerugian lebih besar dari nol, tentukan nilai ekspektasi dari kerugian tersebut! (Pilihlah jawaban yang paling mendekati!)

a. $290$  
b. $322$  
c. $1{.}704$  
d. $2{.}900$  
e. $32{.}222$

> [!summary]+ **Jawaban No. 29**
> **(d). $2{.}900$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] · [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > $$E[X \mid X > 0] = \frac{E[X \cdot \mathbf{1}_{X>0}]}{P(X>0)} = \frac{\sum_{x>0} x \cdot P(X=x)}{P(X>0)}$$
>
> **Diketahui:**
> - Distribusi diskrit dengan $P(X=0)=0{,}900$, sisanya $P(X>0)=0{,}100$
> - Target: $E[X \mid X > 0]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\sum_{x>0} x \cdot P(X=x)$**
> > $$= 500(0{,}060)+1{.}000(0{,}030)+10{.}000(0{,}008)+50{.}000(0{,}001)+100{.}000(0{,}001)$$
> > $$= 30 + 30 + 80 + 50 + 100 = 290$$
> >
> > **Langkah 2: Hitung $E[X|X>0]$**
> > $$E[X|X>0] = \frac{290}{0{,}100} = 2{.}900$$
> >
> > **Hasil Akhir:** **(d)**. $2{.}900$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab 290 (ini adalah $E[X]$ tanpa kondisi, yaitu $E[X \cdot \mathbf{1}_{X>0}]$) — ini opsi (a).
> > > - Lupa membagi dengan $P(X>0) = 0{,}10$ untuk mendapat nilai ekspektasi bersyarat.
> >
> > > [!CAUTION] Red Flags
> > > - "Jika kerugian lebih besar dari nol" → ini probabilitas bersyarat; selalu bagi dengan $P(X>0)$.

---

## **No. 30**

Misal $X$, $Y$, dan $Z$ memiliki nilai rataan sebesar 1, 2 dan 3 secara berturut-turut serta varians sebesar 4, 5 dan 9. Kovarians dari $X$ dan $Y$ sebesar 2, kovarians dari $X$ dan $Z$ sebesar 3, serta kovarians dari $Y$ dan $Z$ sebesar 1.

Berapakah nilai rataan dan varians, secara berurut-urut, dari variabel acak $3X + 2Y - Z$?

a. $4$ dan $31$  
b. $4$ dan $65$  
c. $4$ dan $67$  
d. $14$ dan $13$  
e. $14$ dan $65$

> [!summary]+ **Jawaban No. 30**
> **(c). $4$ dan $67$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] · [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> > Untuk $W = aX + bY + cZ$:
> > $$E[W] = aE[X] + bE[Y] + cE[Z]$$
> > $$\text{Var}(W) = a^2\text{Var}(X) + b^2\text{Var}(Y) + c^2\text{Var}(Z) + 2ab\text{Cov}(X,Y) + 2ac\text{Cov}(X,Z) + 2bc\text{Cov}(Y,Z)$$
>
> **Diketahui:**
> - $E[X]=1$, $E[Y]=2$, $E[Z]=3$
> - $\text{Var}(X)=4$, $\text{Var}(Y)=5$, $\text{Var}(Z)=9$
> - $\text{Cov}(X,Y)=2$, $\text{Cov}(X,Z)=3$, $\text{Cov}(Y,Z)=1$
> - $W = 3X + 2Y - Z$ (koefisien: $a=3$, $b=2$, $c=-1$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[W]$**
> > $$E[W] = 3(1) + 2(2) + (-1)(3) = 3 + 4 - 3 = 4$$
> >
> > **Langkah 2: Hitung $\text{Var}(W)$**
> > $$\text{Var}(W) = 9\text{Var}(X) + 4\text{Var}(Y) + 1\text{Var}(Z) + 2(3)(2)\text{Cov}(X,Y) + 2(3)(-1)\text{Cov}(X,Z) + 2(2)(-1)\text{Cov}(Y,Z)$$
> > $$= 9(4) + 4(5) + 1(9) + 12(2) + (-6)(3) + (-4)(1)$$
> > $$= 36 + 20 + 9 + 24 - 18 - 4 = 67$$
> >
> > **Hasil Akhir:** **(c)**. $E[W]=4$ dan $\text{Var}(W)=67$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa tanda pada koefisien $c = -1$ saat menghitung suku kovarians: $2ac = 2(3)(-1) = -6$, bukan $+6$.
> > > - Menghitung $2bc\text{Cov}(Y,Z) = 2(2)(-1)(1) = -4$, bukan $+4$.
> > > - Lupa mengkuadratkan koefisien: menggunakan $a\text{Var}(X)$ alih-alih $a^2\text{Var}(X)$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu perhatikan tanda koefisien dalam rumus kovarians: $2ab\text{Cov}(X,Y)$ — jika $a$ atau $b$ negatif, suku ini bisa negatif.
> > > - Pilihan (b) dengan varians 65 adalah jebakan jika lupa satu suku kovarians.

---
