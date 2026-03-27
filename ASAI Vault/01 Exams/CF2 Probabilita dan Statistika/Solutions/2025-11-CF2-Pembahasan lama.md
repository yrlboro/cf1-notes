## **No. 1**

Variabel acak Y memiliki fungsi kepekatan peluang sebagai berikut:

$$f(y) = \begin{cases} \dfrac{y}{6} - \dfrac{y^2}{36}, & \text{untuk } 0 < y < 6 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah $P[1 < Y < 3 \mid 2 < Y < 4]$! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}111$  
b. $0{,}241$  
c. $0{,}481$  
d. $0{,}500$  
e. $0{,}885$

> [!summary]+ **Jawaban No. 1**
> **(d). $0{,}500$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > Probabilitas bersyarat untuk variabel acak kontinu:  
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$  
> > Di sini $A = \{1 < Y < 3\}$, $B = \{2 < Y < 4\}$, sehingga $A \cap B = \{2 < Y < 3\}$.
>
> **Diketahui:**
> - $f(y) = \dfrac{y}{6} - \dfrac{y^2}{36}$ untuk $0 < y < 6$ (kontinu, support $(0,6)$)
> - Target: $P(1 < Y < 3 \mid 2 < Y < 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Irisan**
> >
> > $$\{1 < Y < 3\} \cap \{2 < Y < 4\} = \{2 < Y < 3\}$$
> >
> > **Langkah 2: Hitung $P(2 < Y < 3)$ — pembilang**  
> >
> > $$P(2 < Y < 3) = \int_2^3 \left(\frac{y}{6} - \frac{y^2}{36}\right) dy = \left[\frac{y^2}{12} - \frac{y^3}{108}\right]_2^3$$  
> > $$= \left(\frac{9}{12} - \frac{27}{108}\right) - \left(\frac{4}{12} - \frac{8}{108}\right) = \left(\frac{81}{108} - \frac{27}{108}\right) - \left(\frac{36}{108} - \frac{8}{108}\right)$$  
> > $$= \frac{54}{108} - \frac{28}{108} = \frac{26}{108}$$
> >
> > **Langkah 3: Hitung $P(2 < Y < 4)$ — penyebut**  
> >
> > $$P(2 < Y < 4) = \int_2^4 \left(\frac{y}{6} - \frac{y^2}{36}\right) dy = \left[\frac{y^2}{12} - \frac{y^3}{108}\right]_2^4$$  
> > $$= \left(\frac{16}{12} - \frac{64}{108}\right) - \left(\frac{4}{12} - \frac{8}{108}\right) = \left(\frac{144}{108} - \frac{64}{108}\right) - \left(\frac{36}{108} - \frac{8}{108}\right)$$  
> > $$= \frac{80}{108} - \frac{28}{108} = \frac{52}{108}$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P(1 < Y < 3 \mid 2 < Y < 4) = \frac{P(2 < Y < 3)}{P(2 < Y < 4)} = \frac{26/108}{52/108} = \frac{26}{52} = 0{,}500$$  
> >
> > **Hasil Akhir:** **(d)**. $0{,}500$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(1 < Y < 3)$ sebagai pembilang langsung tanpa mengambil irisannya dengan $B$. Pembilang yang benar adalah $P(A \cap B) = P(2 < Y < 3)$.
> > > - Lupa bahwa $P(A \mid B) \neq P(A) / P(B)$ ketika $A$ dan $B$ tidak saling bebas dan memiliki irisan parsial.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Notasi $P[A \mid B]$ dengan kurung siku identik dengan $P(A \mid B)$ — bukan notasi interval.
> > > - "Paling mendekati" mengisyaratkan perlu menghitung numerik sampai presisi cukup.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "diketahui bahwa..." → ini selalu probabilitas bersyarat, hitung irisan dulu.
> > > - Jika event $A$ dan $B$ overlap sebagian → identifikasi $A \cap B$ sebelum menulis integral manapun.

---

## **No. 2**

Suatu polis asuransi memberikan perlindungan terhadap risiko hujan badai dan pencurian untuk sebuah bangunan selama 10 tahun. Perusahaan asuransi hanya akan menanggung satu kejadian kerugian untuk masing-masing hujan badai dan pencurian dalam suatu tahun kalender tertentu.

Untuk setiap tahun kalender ke-$k$, misal $H_k$ merupakan kejadian yang menyatakan terjadinya kerugian akibat hujan badai dan $T_k$ merupakan kejadian yang menyatakan terjadinya kerugian akibat pencurian. Setiap kejadian kerugian $H_1, \ldots, H_{10}, T_1, \ldots, T_{10}$ diasumsikan saling bebas dan diketahui $P(H_k) = 0{,}2$, $P(T_k) = 0{,}1$, untuk setiap $k$.

Hitunglah peluang bahwa banyaknya kejadian hujan badai dan pencurian yang ditanggung oleh polis asuransi dalam sepuluh tahun kalender kurang dari dua! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}17$  
b. $0{,}23$  
c. $0{,}77$  
d. $0{,}80$  
e. $0{,}83$

> [!summary]+ **Jawaban No. 2**
> **(a). $0{,}17$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1–3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Distribusi Binomial: Jika $X \sim B(n, p)$ maka
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> > Total klaim $N = N_H + N_T$ di mana $N_H \sim B(10, 0{,}2)$ dan $N_T \sim B(10, 0{,}1)$ saling bebas.
>
> **Diketahui:**
> - $P(H_k) = 0{,}2$, $P(T_k) = 0{,}1$ untuk setiap $k = 1, \ldots, 10$
> - Semua kejadian saling bebas
> - Target: $P(N_H + N_T < 2) = P(N_H + N_T = 0) + P(N_H + N_T = 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Variabel**
> >
> > Misal $N_H$ = total klaim hujan badai selama 10 tahun, $N_H \sim B(10, 0{,}2)$.
> > Misal $N_T$ = total klaim pencurian selama 10 tahun, $N_T \sim B(10, 0{,}1)$.
> > $N_H$ dan $N_T$ saling bebas. Total klaim: $N = N_H + N_T$.
> >
> > **Langkah 2: Hitung $P(N = 0) = P(N_H = 0) \cdot P(N_T = 0)$**
> >
> > $$P(N_H = 0) = (0{,}8)^{10} = 0{,}10737$$
> > $$P(N_T = 0) = (0{,}9)^{10} = 0{,}34868$$
> > $$P(N = 0) = 0{,}10737 \times 0{,}34868 = 0{,}03744$$
> >
> > **Langkah 3: Hitung $P(N = 1)$**
> >
> > $N = 1$ terjadi jika: ($N_H = 1, N_T = 0$) atau ($N_H = 0, N_T = 1$).
> >
> > $$P(N_H = 1) = \binom{10}{1}(0{,}2)^1(0{,}8)^9 = 10 \times 0{,}2 \times 0{,}13422 = 0{,}26844$$
> > $$P(N_T = 1) = \binom{10}{1}(0{,}1)^1(0{,}9)^9 = 10 \times 0{,}1 \times 0{,}38742 = 0{,}38742$$
> >
> > $$P(N = 1) = P(N_H=1) \cdot P(N_T=0) + P(N_H=0) \cdot P(N_T=1)$$
> > $$= 0{,}26844 \times 0{,}34868 + 0{,}10737 \times 0{,}38742$$
> > $$= 0{,}09361 + 0{,}04160 = 0{,}13521$$
> >
> > **Langkah 4: Hitung $P(N < 2)$**
> >
> > $$P(N < 2) = P(N=0) + P(N=1) = 0{,}03744 + 0{,}13521 = 0{,}17265 \approx 0{,}17$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}17$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan probabilitas per tahun tanpa mempertimbangkan distribusi binomial untuk 10 tahun.
> > > - Mengasumsikan $N = N_H + N_T$ berdistribusi Binomial tunggal — tidak tepat karena $p$ berbeda.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kurang dari dua" berarti $N = 0$ atau $N = 1$, bukan $N \leq 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada dua proses independen dengan $p$ berbeda → tidak bisa digabung langsung menjadi satu distribusi Binomial; hitung masing-masing lalu konvolusi.

---

## **No. 3**

Misal X merupakan variabel acak kontinu dengan fungsi kepadatan peluang:

$$f(x) = \begin{cases} \dfrac{|x|}{10}, & \text{untuk } -2 \leq x \leq 4 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah varians dari X! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}25$  
b. $2{,}52$  
c. $3{,}32$  
d. $4{,}13$  
e. $4{,}93$  

> [!summary]+ **Jawaban No. 3**
> **(c). $3{,}32$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1–2.2; Miller Bab 4.1–4.3 |
>
> > [!info]+ **Rumus**  
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
> > Dengan $|x|$ yang terbagi: $|x| = -x$ untuk $x < 0$ dan $|x| = x$ untuk $x \geq 0$.
>
> **Diketahui:**
> - $f(x) = \dfrac{|x|}{10}$ untuk $-2 \leq x \leq 4$ (kontinu, support $[-2, 4]$)
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi PDF valid**
> >
> > $$\int_{-2}^{0} \frac{-x}{10} dx + \int_{0}^{4} \frac{x}{10} dx = \frac{1}{10}\left[\frac{-x^2}{2}\right]_{-2}^{0} + \frac{1}{10}\left[\frac{x^2}{2}\right]_{0}^{4} = \frac{4}{20} + \frac{16}{20} = \frac{20}{20} = 1 \checkmark$$
> >
> > **Langkah 2: Hitung $E[X]$**
> >
> > $$E[X] = \int_{-2}^{0} x \cdot \frac{-x}{10} dx + \int_{0}^{4} x \cdot \frac{x}{10} dx$$
> > $$= \frac{-1}{10}\int_{-2}^{0} x^2 dx + \frac{1}{10}\int_{0}^{4} x^2 dx$$
> > $$= \frac{-1}{10} \cdot \frac{8}{3} + \frac{1}{10} \cdot \frac{64}{3} = \frac{-8}{30} + \frac{64}{30} = \frac{56}{30} = \frac{28}{15} \approx 1{,}8\overline{6}$$
> >
> > **Langkah 3: Hitung $E[X^2]$**
> >
> > $$E[X^2] = \int_{-2}^{0} x^2 \cdot \frac{-x}{10} dx + \int_{0}^{4} x^2 \cdot \frac{x}{10} dx$$
> > $$= \frac{-1}{10}\int_{-2}^{0} x^3 dx + \frac{1}{10}\int_{0}^{4} x^3 dx$$
> > $$= \frac{-1}{10}\left[\frac{x^4}{4}\right]_{-2}^{0} + \frac{1}{10}\left[\frac{x^4}{4}\right]_{0}^{4}$$
> > $$= \frac{-1}{10}\left(0 - \frac{16}{4}\right) + \frac{1}{10}\cdot\frac{256}{4}$$
> > $$= \frac{-1}{10}(-4) + \frac{1}{10}(64) = \frac{4}{10} + \frac{64}{10} = \frac{68}{10} = 6{,}8$$
> >
> > **Langkah 4: Hitung Varians**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = 6{,}8 - \left(\frac{28}{15}\right)^2 = 6{,}8 - \frac{784}{225}$$
> > $$= 6{,}8 - 3{,}4\overline{8} = 3{,}3\overline{1} \approx 3{,}32$$
> >
> > **Hasil Akhir:** **(c)**. $3{,}32$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa memisahkan integral di $x = 0$ untuk menangani nilai absolut $|x|$ — mengintegral $\dfrac{|x|}{10}$ langsung dari $-2$ hingga $4$ memberikan hasil salah.
> > > - Menghitung $E[|X|]$ alih-alih $E[X]$ — keduanya berbeda karena support mencakup nilai negatif.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira support simetris hanya karena ada $|x|$ — support $[-2, 4]$ tidak simetris di sekitar 0.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PDF mengandung $|x|$ → selalu pecah integral di titik $x = 0$.
> > > - Jika support tidak simetris → $E[X] \neq 0$ meskipun ada nilai negatif.

---

## **No. 4**

Masa hidup suatu bohlam lampu dalam bulan diketahui mengikuti distribusi seragam $[0, 40]$. Misal $a$ merupakan angka ril positif dengan nilai kurang dari 30. Peluang bahwa bohlam lampu rusak dalam 30 bulan, jika diketahui bahwa bohlam lampu berfungsi dengan baik setelah $a$ bulan sebesar $0{,}6$. Tentukan nilai $a$!

a. $6$  
b. $12$  
c. $15$  
d. $16$  
e. $18$

> [!summary]+ **Jawaban No. 4**
> **(c). $15$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > Untuk $X \sim U(0, 40)$:
> > $$P(X \leq x) = \frac{x}{40}, \quad 0 \leq x \leq 40$$
> > Probabilitas bersyarat:
> > $$P(X \leq 30 \mid X > a) = \frac{P(a < X \leq 30)}{P(X > a)}$$
>
> **Diketahui:**
> - $X \sim U(0, 40)$ (kontinu, support $[0, 40]$)
> - $P(\text{rusak dalam 30 bulan} \mid \text{masih hidup setelah } a) = 0{,}6$
> - Ini setara dengan $P(X \leq 30 \mid X > a) = 0{,}6$, dengan $0 < a < 30$
> - Target: nilai $a$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan persamaan probabilitas bersyarat**
> >
> > $$P(X \leq 30 \mid X > a) = \frac{P(a < X \leq 30)}{P(X > a)} = 0{,}6$$
> >
> > **Langkah 2: Hitung masing-masing probabilitas untuk $U(0,40)$**
> >
> > $$P(a < X \leq 30) = \frac{30 - a}{40}$$
> > $$P(X > a) = \frac{40 - a}{40}$$
> >
> > **Langkah 3: Bentuk persamaan dan selesaikan**
> >
> > $$\frac{(30-a)/40}{(40-a)/40} = 0{,}6$$
> > $$\frac{30 - a}{40 - a} = 0{,}6$$
> > $$30 - a = 0{,}6(40 - a)$$
> > $$30 - a = 24 - 0{,}6a$$
> > $$6 = 0{,}4a$$
> > $$a = 15$$
> >
> > **Hasil Akhir:** **(c)**. $a = 15$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X \leq 30 \mid X > a) = P(X \leq 30) / P(X > a)$ tanpa mengambil irisan — pembilang yang benar adalah $P(a < X \leq 30)$, bukan $P(X \leq 30)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Rusak dalam 30 bulan, diketahui masih hidup setelah $a$ bulan" → ini probabilitas bersyarat $P(X \leq 30 \mid X > a)$, bukan $P(X \leq 30 - a)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebutkan "diketahui masih hidup/berfungsi setelah $t$" → gunakan probabilitas bersyarat, bukan survival langsung.

---

## **No. 5**

Suatu perusahaan asuransi umum menjual produk asuransi kendaraan dan asuransi kebakaran. Banyaknya klaim tahunan atas asuransi kendaraan dan asuransi kebakaran mengikuti distribusi Poisson dengan rataan $\lambda_1$ dan $\lambda_2$, secara berurutan. Peluang tidak terdapatnya klaim pada asuransi kendaraan dalam satu tahun diketahui sebesar satu setengah kali peluang tidak terdapatnya klaim pada asuransi kebakaran dalam satu tahun. Misal $V_1$ dan $V_2$ merupakan varians dari banyaknya klaim tahunan untuk asuransi kendaraan dan asuransi kebakaran, secara berurutan. Hitunglah $V_1 - V_2$!

a. $0{,}693$  
b. $0{,}724$  
c. $0{,}766$  
d. $0{,}813$  
e. $0{,}832$

> [!summary]+ **Jawaban No. 5**
> **⚠️ DIANULIR oleh PAI**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | — |
> | **Prerequisite** | — |
> | **Connected Topics** | — |
> | **Referensi** | — |
>
> > [!warning]+ **Keterangan Soal Dianulir**
> > Soal No. 5 **dianulir oleh PAI** dalam kunci jawaban resmi. Analisis: Dari kondisi soal, $P(N_1 = 0) = \tfrac{3}{2} P(N_2 = 0)$ memberikan $e^{-\lambda_1} = \tfrac{3}{2} e^{-\lambda_2}$, sehingga $\lambda_1 - \lambda_2 = \ln(2/3) \approx -0{,}405$. Karena $V_i = \lambda_i$ untuk distribusi Poisson, maka $V_1 - V_2 = \lambda_1 - \lambda_2 \approx -0{,}405$. Nilai ini **negatif** dan tidak ada pada pilihan jawaban yang semuanya positif. Ketidakkonsistenan antara kondisi soal ("satu setengah kali") dan pilihan jawaban yang tersedia menjadi dasar pembatalan.
>
> **Status:** Semua peserta mendapat nilai penuh untuk soal ini.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk distribusi Poisson, $E[N] = \text{Var}(N) = \lambda$, sehingga $V_1 - V_2 = \lambda_1 - \lambda_2$.
> > > - Salah membaca "satu setengah kali" sebagai $P(N_1=0) = \tfrac{1}{2}P(N_2=0)$ alih-alih $\tfrac{3}{2}P(N_2=0)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika hasil perhitungan tidak ada pada pilihan jawaban → periksa kembali interpretasi frasa soal.
> > > - "Satu setengah kali" = $1{,}5$ kali, bukan $0{,}5$ kali.

---

## **No. 6**

Nilai akhir dari mata kuliah aljabar linear dimodelkan menggunakan distribusi normal. Modus dari nilai ujian sebesar $56{,}00$ dan persentil ke-40 dari nilai ujian sebesar $52{,}20$. Hitunglah persentil dari nilai akhir dari mata kuliah aljabar linear sebesar $65{,}50$! (Pilihlah jawaban yang paling mendekati!)

a. Persentil ke-71  
b. Persentil ke-74  
c. Persentil ke-78  
d. Persentil ke-81  
e. Persentil ke-85

> [!summary]+ **Jawaban No. 6**
> **(b). Persentil ke-74**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> > Untuk $X \sim N(\mu, \sigma^2)$:
> > - Modus = Mean = $\mu$ (distribusi normal simetris)
> > - Standardisasi: $Z = \dfrac{X - \mu}{\sigma} \sim N(0,1)$
> > - Jika $X_p$ adalah persentil ke-$p$, maka $P(X \leq X_p) = p/100$
>
> **Diketahui:**
> - $X \sim N(\mu, \sigma^2)$ (kontinu)
> - Modus $= \mu = 56{,}00$
> - Persentil ke-40: $P(X \leq 52{,}20) = 0{,}40$
> - Target: persentil dari nilai $65{,}50$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\mu$**
> >
> > Untuk distribusi normal, modus = mean, sehingga $\mu = 56{,}00$.
> >
> > **Langkah 2: Cari $\sigma$ menggunakan persentil ke-40**
> >
> > $$P(X \leq 52{,}20) = 0{,}40 \implies P\left(Z \leq \frac{52{,}20 - 56}{\sigma}\right) = 0{,}40$$
> > Dari tabel normal: $\Phi^{-1}(0{,}40) = -0{,}2533$
> >
> > $$\frac{52{,}20 - 56}{\sigma} = -0{,}2533 \implies \frac{-3{,}80}{\sigma} = -0{,}2533$$
> > $$\sigma = \frac{3{,}80}{0{,}2533} = 15{,}00$$
> >
> > **Langkah 3: Cari persentil dari nilai $65{,}50$**
> >
> > $$z = \frac{65{,}50 - 56}{15} = \frac{9{,}50}{15} = 0{,}6333$$
> > $$P(X \leq 65{,}50) = \Phi(0{,}6333) \approx 0{,}7367 \approx 0{,}74$$
> >
> > Jadi nilai $65{,}50$ berada pada **persentil ke-74**.
> >
> > **Hasil Akhir:** **(b)**. Persentil ke-74
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira modus distribusi normal berbeda dari mean — untuk distribusi normal, modus = median = mean = $\mu$.
> > > - Salah arah standardisasi: $z = (x - \mu)/\sigma$, bukan $(\mu - x)/\sigma$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Persentil ke-40 berarti $P(X \leq 52{,}20) = 0{,}40$ — ini memberikan $z < 0$ karena nilai di bawah mean.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $z^*$ dari tabel Φ bernilai positif tapi nilai yang diberikan di bawah mean → ada kesalahan tanda.

---

## **No. 7**

Misal $X$ merupakan variabel acak yang merepresentasikan waktu yang diperlukan untuk memperbaiki ban mobil yang kempes total. Anda diberikan informasi berikut:

i. $X$ mengikuti distribusi seragam pada selang $[a, b]$
ii. Persentil ke-50 dari $X$ yaitu $16{,}36$
iii. Deviasi standar dari $X$ yaitu $7{,}63$

Hitunglah $\dfrac{b}{a}$! (Pilihlah jawaban yang paling mendekati!)

a. $1{,}83$  
b. $2{,}12$  
c. $4{,}58$  
d. $6{,}62$  
e. $9{,}41$

> [!summary]+ **Jawaban No. 7**
> **(e). $9{,}41$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > Untuk $X \sim U(a, b)$: 
> > $$\text{Median} = \frac{a+b}{2}, \qquad \text{SD}(X) = \frac{b-a}{\sqrt{12}}$$
>
> **Diketahui:**
> - $X \sim U(a, b)$ (kontinu, support $[a, b]$)
> - Persentil ke-50 (median) $= 16{,}36$
> - Deviasi standar $= 7{,}63$
> - Target: $b/a$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan kondisi median**
> >
> > $$\frac{a+b}{2} = 16{,}36 \implies a + b = 32{,}72 \quad \cdots (1)$$
> >
> > **Langkah 2: Gunakan kondisi deviasi standar**
> >
> > $$\frac{b-a}{\sqrt{12}} = 7{,}63 \implies b - a = 7{,}63\sqrt{12} = 7{,}63 \times 3{,}4641 = 26{,}43 \quad \cdots (2)$$
> >
> > **Langkah 3: Selesaikan sistem persamaan**
> >
> > Dari (1) + (2): $2b = 59{,}15 \implies b = 29{,}575$
> > Dari (1) − (2): $2a = 6{,}29 \implies a = 3{,}145$
> >
> > **Langkah 4: Hitung $b/a$**
> >
> > $$\frac{b}{a} = \frac{29{,}575}{3{,}145} = 9{,}403 \approx 9{,}41$$
> >
> > **Hasil Akhir:** **(e)**. $9{,}41$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rumus variansi $\sigma^2 = (b-a)^2/12$ lupa mengakarkan — soal memberikan SD bukan variansi.
> > > - Mengira persentil ke-50 = $a + 0{,}5(b-a)$ (benar) tapi lupa bahwa ini sama dengan $(a+b)/2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan SD dan median → langsung bentuk dua persamaan linear dan selesaikan.

---

## **No. 8**

Suatu pialang asuransi memasarkan 4 produk asuransi yang berbeda. Peluang produk-produk tersebut terjual sebagai berikut:

| Produk | Peluang |
|--------|---------|
| Asuransi kendaraan | 0,55 |
| Asuransi properti | 0,45 |
| Asuransi kesehatan | 0,50 |
| Asuransi jiwa | 0,60 |

Penjualan dari produk-produk asuransi di atas diketahui saling bebas. Hitunglah peluang pialang menjual lebih dari dua produk ke seorang klien! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}27$  
b. $0{,}35$  
c. $0{,}39$  
d. $0{,}57$  
e. $0{,}73$

> [!summary]+ **Jawaban No. 8**
> **(b). $0{,}35$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.5 Kejadian Independen]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 2–3; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> > Untuk kejadian independen, gunakan perkalian probabilitas. "Lebih dari dua produk" = tepat 3 atau tepat 4 produk terjual.
> > Misal $p_1=0{,}55$, $p_2=0{,}45$, $p_3=0{,}50$, $p_4=0{,}60$, $q_i = 1-p_i$.
> > $$P(\text{lebih dari 2}) = P(\text{tepat 3}) + P(\text{tepat 4})$$
>
> **Diketahui:**
> - $p_1 = 0{,}55$, $q_1 = 0{,}45$
> - $p_2 = 0{,}45$, $q_2 = 0{,}55$
> - $p_3 = 0{,}50$, $q_3 = 0{,}50$
> - $p_4 = 0{,}60$, $q_4 = 0{,}40$
> - Target: $P(N > 2)$ di mana $N$ = banyaknya produk terjual
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{tepat 4 terjual})$**
> >
> > $$P(\text{4}) = 0{,}55 \times 0{,}45 \times 0{,}50 \times 0{,}60 = 0{,}07425$$
> >
> > **Langkah 2: Hitung $P(\text{tepat 3 terjual})$**
> >
> > Ada $\binom{4}{1} = 4$ cara memilih produk yang **tidak** terjual:
> >
> > - Produk 1 tidak terjual: $0{,}45 \times 0{,}45 \times 0{,}50 \times 0{,}60 = 0{,}06075$
> > - Produk 2 tidak terjual: $0{,}55 \times 0{,}55 \times 0{,}50 \times 0{,}60 = 0{,}09075$
> > - Produk 3 tidak terjual: $0{,}55 \times 0{,}45 \times 0{,}50 \times 0{,}60 = 0{,}07425$
> > - Produk 4 tidak terjual: $0{,}55 \times 0{,}45 \times 0{,}50 \times 0{,}40 = 0{,}04950$
> >
> > $$P(\text{tepat 3}) = 0{,}06075 + 0{,}09075 + 0{,}07425 + 0{,}04950 = 0{,}27525$$
> >
> > **Langkah 3: Hitung $P(N > 2)$**
> >
> > $$P(N > 2) = P(\text{tepat 3}) + P(\text{tepat 4}) = 0{,}27525 + 0{,}07425 = 0{,}34950 \approx 0{,}35$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Binomial dengan $p$ rata-rata — tidak valid karena masing-masing $p_i$ berbeda.
> > > - Menghitung komplemen sebagai $1 - P(N \leq 2)$ lalu melakukan kesalahan di $P(N=2)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Lebih dari dua" = 3 atau 4, **bukan** 2, 3, atau 4.
> >
> > > [!CAUTION] Red Flags
> > > - Jika setiap item memiliki $p$ berbeda → enumerasi semua kombinasi, jangan pakai Binomial biasa.

---

## **No. 9**

Variabel acak besaran kerugian yang dialami oleh perusahaan asuransi, X, memiliki fungsi densitas sebagai berikut:

$$f(y) = \begin{cases} c(x-5), & \text{untuk } 5 \leq y \leq 8 \\ c(11-x), & \text{untuk } 8 \leq y \leq 11 \\ 0, & \text{selainnya} \end{cases}$$

Dimana $c$ merupakan suatu konstanta. Tentukan persentil ke-30 dari besaran kerugian yang dialami oleh perusahaan tersebut! (Pilihlah jawaban yang paling mendekati!)

a. $5{,}47$  
b. $6{,}14$  
c. $6{,}80$  
d. $7{,}06$  
e. $7{,}32$

> [!summary]+ **Jawaban No. 9**
> **(e). $7{,}32$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > - Syarat normalisasi: $\int_{-\infty}^{\infty} f(x)\,dx = 1$
> > - Persentil ke-$p$: nilai $x_p$ sedemikian sehingga $F(x_p) = p/100$
>
> **Diketahui:**
> - Distribusi segitiga dengan puncak di $x = 8$, support $[5, 11]$
> - Target: persentil ke-30, yaitu $x_{0.30}$ sedemikian $F(x_{0.30}) = 0{,}30$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari konstanta $c$**
> >
> > $$\int_5^8 c(x-5)\,dx + \int_8^{11} c(11-x)\,dx = 1$$
> > $$c\left[\frac{(x-5)^2}{2}\right]_5^8 + c\left[-\frac{(11-x)^2}{2}\right]_8^{11} = 1$$
> > $$c \cdot \frac{9}{2} + c \cdot \frac{9}{2} = 1 \implies 9c = 1 \implies c = \frac{1}{9}$$
> >
> > **Langkah 2: Tentukan apakah persentil ke-30 berada di $[5,8]$ atau $[8,11]$**
> >
> > Luas total bagian kiri ($[5,8]$): $\frac{1}{9} \cdot \frac{9}{2} = \frac{1}{2} = 0{,}50$
> >
> > Karena $0{,}30 < 0{,}50$, persentil ke-30 berada di interval $[5, 8]$.
> >
> > **Langkah 3: Selesaikan $F(x_{0.30}) = 0{,}30$ pada $[5, 8]$**
> >
> > $$F(x) = \int_5^x \frac{1}{9}(t-5)\,dt = \frac{1}{9} \cdot \frac{(x-5)^2}{2} = \frac{(x-5)^2}{18}$$
> >
> > $$\frac{(x-5)^2}{18} = 0{,}30 \implies (x-5)^2 = 5{,}4$$
> > $$(x-5) = \sqrt{5{,}4} = 2{,}3238$$
> > $$x = 5 + 2{,}3238 = 7{,}3238 \approx 7{,}32$$
> >
> > **Hasil Akhir:** **(e)**. $7{,}32$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa memeriksa apakah persentil yang dicari berada di bagian kiri atau kanan distribusi sebelum mengintegral — jika langsung integral dari 5 hingga 11, akan keliru.
> > > - Salah menghitung $c$: luas segitiga = $\frac{1}{2} \times \text{alas} \times \text{tinggi} = \frac{1}{2} \times 6 \times c \times 3 = 9c$ (perlu verifikasi dengan integral).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Perhatikan bahwa soal mendefinisikan $f(y)$ tetapi menggunakan $x$ di dalam ekspresi — variabel integrasi adalah nilai domain (yang pada dasarnya sama).
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi berbentuk segitiga → selalu cek luas masing-masing bagian sebelum menentukan di mana persentil berada.

---

## **No. 10**

Enam pasien secara saling bebas memiliki peluang yang sama untuk mengidap penyakit tertentu. Peluang bahwa tidak ada pasien yang mengidap penyakit sebesar 10 kali peluang tepat satu orang mengidap penyakit. Peluang bahwa tidak ada pasien yang mengidap penyakit sebesar $x$ kali peluang tepat tiga pasien mengidap penyakit. Tentukan nilai $x$!

a. $300$  
b. $1{.}000$  
c. $1{.}800$  
d. $6{.}000$  
e. $10{.}800$

> [!summary]+ **Jawaban No. 10**
> **(e). $10{.}800$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**  
> > Distribusi Binomial $X \sim B(n, p)$:
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> > Dengan $n = 6$ dan $p$ = peluang seorang pasien mengidap penyakit.
>
> **Diketahui:**
> - $n = 6$ pasien, $p$ sama untuk semua (saling bebas)
> - $P(X=0) = 10 \cdot P(X=1)$
> - Target: $x$ sedemikian $P(X=0) = x \cdot P(X=3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung masing-masing probabilitas**
> >
> > Misal $q = 1-p$.
> > $$P(X=0) = q^6$$
> > $$P(X=1) = 6pq^5$$
> > $$P(X=3) = \binom{6}{3}p^3q^3 = 20p^3q^3$$
> >
> > **Langkah 2: Gunakan kondisi $P(X=0) = 10 \cdot P(X=1)$ untuk cari $p$**
> >
> > $$q^6 = 10 \cdot 6pq^5 = 60pq^5$$
> > $$q = 60p \implies 1-p = 60p \implies 1 = 61p \implies p = \frac{1}{61}$$
> > $$q = \frac{60}{61}$$
> >
> > **Langkah 3: Hitung rasio $x = P(X=0)/P(X=3)$**
> >
> > $$x = \frac{P(X=0)}{P(X=3)} = \frac{q^6}{20p^3q^3} = \frac{q^3}{20p^3}$$
> > $$= \frac{1}{20} \left(\frac{q}{p}\right)^3 = \frac{1}{20} \times 60^3 = \frac{216{,}000}{20} = 10{,}800$$
> >
> > **Hasil Akhir:** **(e)**. $10{.}800$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $\binom{6}{3} = 20$ ada dalam $P(X=3)$ — jika tidak disertakan, rasio akan salah.
> > > - Mencari nilai $p$ numerik dan memasukkannya kembali — lebih efisien menggunakan rasio $q/p = 60$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal meminta rasio probabilitas Binomial → cari dulu $q/p$ dari kondisi pertama, lalu gunakan langsung di kondisi kedua.

---


## **No. 11**

Di sepanjang jalan tol, mobil-mobil dipilih secara acak untuk pemeriksaan ban. Misal X merepresentasikan banyaknya ban depan yang sudah tidak layak pakai dan Y merepresentasikan banyaknya ban belakang yang sudah tidak layak pakai pada mobil-mobil yang dipilih secara acak. Fungsi peluang bersama dari X dan Y diberikan sebagai berikut:

$$p(x, y) = \begin{cases} \dfrac{(6-x)(3-y)}{58(1+|x+y|)}, & \text{untuk } x = 0,1,2 \text{ dan } y = 0,1,2 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah varians dari banyaknya ban mobil yang sudah tidak layak pakai dari mobil-mobil yang terpilih dengan satu ban belakang tidak layak pakai!

a. $7/16$  
b. $49/100$  
c. $2/3$  
d. $7/10$  
e. $1$

> [!summary]+ **Jawaban No. 11**
> **⚠️ DIANULIR oleh PAI**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | — |
> | **Prerequisite** | — |
> | **Connected Topics** | — |
> | **Referensi** | — |
>
> > [!warning]+ **Keterangan Soal Dianulir**
> > Soal No. 11 **dianulir oleh PAI** dalam kunci jawaban resmi. Analisis masalah: Pertanyaan meminta varians dari "banyaknya ban yang tidak layak pakai" dengan kondisi $Y=1$ (satu ban belakang tidak layak). Namun soal tidak mendefinisikan secara jelas apakah yang dimaksud adalah varians dari $X \mid Y=1$ atau varians dari total $(X+Y) \mid Y=1$. Ketidakjelasan frasa "banyaknya ban mobil yang sudah tidak layak pakai dari mobil-mobil yang terpilih dengan satu ban belakang tidak layak pakai" menghasilkan interpretasi ganda yang tidak menghasilkan jawaban tunggal konsisten dengan pilihan yang tersedia.
>
> 
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk distribusi bersyarat diskrit: $p_{X|Y}(x|y) = p(x,y) / p_Y(y)$ — marginal $p_Y(y)$ harus dihitung terlebih dahulu dengan menjumlahkan atas semua nilai $x$.
> > > - Varians bersyarat: $\text{Var}(X|Y=y) = E[X^2|Y=y] - (E[X|Y=y])^2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mengandung frasa ambigu tentang "variabel yang dimaksud" dalam konteks distribusi bersyarat → identifikasi variabel target secara eksplisit sebelum menghitung.

---

## **No. 12**

Dalam suatu tahun kalender, profit yang dihasilkan PT Cuan Terus dari penjualan waran diketahui mengikuti distribusi normal dengan rataan 20 dan varians 16. Hitunglah interval, terpusat pada rataannya, yang memuat 25% peluang atas satu tahun profit! (Pilihlah jawaban yang paling mendekati!)

a. $(12{,}2;\ 27{,}8)$  
b. $(14{,}9;\ 25{,}1)$  
c. $(16{,}0;\ 24{,}0)$  
d. $(17{,}3;\ 22{,}7)$  
e. $(18{,}7;\ 21{,}3)$  

> [!summary]+ **Jawaban No. 12**
> **(e). $(18{,}7;\ 21{,}3)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> > Untuk $X \sim N(\mu, \sigma^2)$, interval terpusat di $\mu$ dengan peluang $p$:
> > $$P(\mu - z^* \sigma \leq X \leq \mu + z^* \sigma) = p$$
> > di mana $z^* = \Phi^{-1}\!\left(\dfrac{1+p}{2}\right)$.
>
> **Diketahui:**
> - $X \sim N(20, 16)$, sehingga $\mu = 20$, $\sigma = 4$
> - Interval terpusat di $\mu$ dengan peluang $25\% = 0{,}25$
> - Target: batas bawah dan atas interval
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $z^*$ untuk peluang 25%**
> >
> > Masing-masing ekor: $(1-0{,}25)/2 = 0{,}375$.
> > $P(X \leq \mu + z^*\sigma) = 0{,}625$.
> > Dari tabel normal: $z^* = \Phi^{-1}(0{,}625) \approx 0{,}3186$.
> >
> > **Langkah 2: Hitung batas interval**
> >
> > $$\text{Batas bawah} = 20 - 0{,}3186 \times 4 = 18{,}73 \approx 18{,}7$$
> > $$\text{Batas atas} = 20 + 0{,}3186 \times 4 = 21{,}27 \approx 21{,}3$$
> >
> > **Hasil Akhir:** **(e)**. $(18{,}7;\ 21{,}3)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari $z^*$ dari $\Phi(z^*) = 0{,}25$ — yang benar adalah $\Phi(z^*) = 0{,}625$.
> > > - Menggunakan $\sigma^2 = 16$ sebagai $\sigma$ — ingat $\sigma = \sqrt{16} = 4$.
> >
> > > [!CAUTION] Red Flags
> > > - "Interval terpusat pada rataan" → $z^* = \Phi^{-1}((1+p)/2)$, bagi peluang secara simetris.

---

## **No. 13**

Proporsi tanaman kapas di suatu lahan pertanian yang terdampak hama kumbang kapas dimodelkan menggunakan variabel acak kontinu dengan fungsi kepadatan peluang:

$$f(x) = \begin{cases} 20x^3(1-x), & \text{untuk } 0 \leq x \leq 1 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah deviasi standar dari proporsi tanaman kapas di lahan tersebut yang terdampak hama kumbang kapas! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}032$  
b. $0{,}178$  
c. $0{,}476$  
d. $0{,}690$  
e. $0{,}959$

> [!summary]+ **Jawaban No. 13**
> **(b). $0{,}178$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > Distribusi Beta dengan $\alpha=4$, $\beta=2$:
> > $$E[X] = \frac{\alpha}{\alpha+\beta} = \frac{4}{6}, \qquad \text{Var}(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)} = \frac{8}{252} = \frac{2}{63}$$
>
> **Diketahui:**
> - $f(x) = 20x^3(1-x)$ pada $[0,1]$; ini distribusi Beta($4, 2$)
> - Target: $\text{SD}(X) = \sqrt{\text{Var}(X)}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi distribusi Beta**
> >
> > $f(x) = 20x^3(1-x)^1$ → $\alpha - 1 = 3$, $\beta-1=1$, sehingga $\alpha=4$, $\beta=2$.
> > Verifikasi: $\Gamma(6)/(\Gamma(4)\Gamma(2)) = 120/(6\times1) = 20$ ✓
> >
> > **Langkah 2: Hitung variansi**
> >
> > $$\text{Var}(X) = \frac{4 \times 2}{36 \times 7} = \frac{8}{252} = \frac{2}{63}$$
> >
> > **Langkah 3: Hitung deviasi standar**
> >
> > $$\text{SD}(X) = \sqrt{2/63} = 0{,}17819 \approx 0{,}178$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}178$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengakarkan variansi. Eksponen dalam PDF Beta adalah $\alpha-1$ dan $\beta-1$, bukan $\alpha$ dan $\beta$.
> >
> > > [!CAUTION] Red Flags
> > > - PDF berbentuk $cx^a(1-x)^b$ dengan support $[0,1]$ → distribusi Beta dengan $\alpha = a+1$, $\beta = b+1$.

---

## **No. 14**

Klaim dari produk asuransi perkapalan diketahui mengikuti distribusi eksponensial dengan rataan $\dfrac{400}{\ln 2}$ (dalam juta). Untuk setiap klaim, besaran yang dibayarkan sebesar besarnya kerugian, hingga maksimum 1000 (dalam juta). Hitunglah nilai ekspektasi dari pembayaran klaim! (Pilihlah jawaban yang paling mendekati!)

a. $298$  
b. $367$  
c. $400$  
d. $475$  
e. $577$

> [!summary]+ **Jawaban No. 14**
> **(d). $475$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > Limited Expected Value (LEV) untuk $X \sim \text{Exp}$ dengan rate $\lambda = 1/\theta$:
> > $$E[\min(X, u)] = \frac{1}{\lambda}(1 - e^{-\lambda u}) = \theta(1 - e^{-u/\theta})$$
>
> **Diketahui:**
> - $\theta = 400/\ln 2$, rate $\lambda = \ln 2 / 400$
> - Pembayaran: $Y = \min(X, 1000)$
> - Target: $E[Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan rumus LEV**
> >
> > $$\lambda u = \frac{\ln 2}{400} \times 1000 = 2{,}5\ln 2$$
> > $$e^{-\lambda u} = e^{-2{,}5\ln 2} = 2^{-2{,}5} = \frac{1}{4\sqrt{2}} \approx 0{,}17678$$
> >
> > **Langkah 2: Hitung LEV**
> >
> > $$E[\min(X,1000)] = \frac{400}{\ln 2}(1 - 0{,}17678) = \frac{400 \times 0{,}82322}{0{,}69315} \approx 475$$
> >
> > **Hasil Akhir:** **(d)**. $475$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[X] = \theta$ tanpa mempertimbangkan batas maksimum — ini mengabaikan efek truncation.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada batas maksimum pembayaran → gunakan LEV $E[\min(X,u)]$, bukan $E[X]$.

---

## **No. 15**

Setiap orang dalam suatu populasi besar yang saling bebas satu sama lain memiliki peluang sebesar $0{,}0625$ untuk mengidap suatu penyakit. Dilakukan pengujian klinis terhadap orang-orang di populasi ini, hingga seseorang teridentifikasi mengidap penyakit tersebut. Tentukan modus dari banyaknya orang yang terkena pengujian klinis!

a. $1$  
b. $6$  
c. $11$  
d. $15$  
e. $16$

> [!summary]+ **Jawaban No. 15**
> **(a). $1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Distribusi Geometrik $X \sim \text{Geom}(p)$: $P(X=k) = (1-p)^{k-1}p$ untuk $k = 1,2,\ldots$
> > Modus distribusi Geometrik selalu $= 1$ karena PMF menurun monoton.
>
> **Diketahui:**
> - $p = 0{,}0625$, $X \sim \text{Geom}(0{,}0625)$
> - Target: modus $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: PMF geometrik**
> >
> > $P(X=k) = (0{,}9375)^{k-1}(0{,}0625)$ — fungsi **menurun monoton** dalam $k$.
> >
> > **Langkah 2: Tentukan modus**
> >
> > PMF bernilai maksimum di $k=1$: $P(X=1) = 0{,}0625 > P(X=2) > \ldots$
> > Modus $= 1$.
> >
> > **Hasil Akhir:** **(a)**. $1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira modus = mean = $1/p = 16$. Mean dan modus berbeda untuk distribusi Geometrik.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi Geometrik: modus selalu 1, mean = $1/p$, median $\approx \lceil -1/\log_2(1-p) \rceil$.

---

## **No. 16**

Di Negara Wakanda, 5% dari seluruh bank yang terdaftar diprediksi akan mengalami kebangkrutan dalam 5 tahun ke depan. Lembaga Penjamin Simpanan (LPS) di negara tersebut menjamin 80% bank yang terdaftar. Hanya terdapat 3% bank yang terdaftar di LPS diprediksi akan mengalami kebangkrutan dalam 5 tahun ke depan. Hitunglah peluang bahwa bank yang mengalami kebangkrutan di negara tersebut dalam 5 tahun kedepan dijamin oleh LPS!

a. $0{,}02$  
b. $0{,}04$  
c. $0{,}06$  
d. $0{,}48$  
e. $0{,}60$

> [!summary]+ **Jawaban No. 16**
> **(d). $0{,}48$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > Teorema Bayes: $P(L \mid B) = \dfrac{P(B \mid L) \cdot P(L)}{P(B)}$
>
> **Diketahui:**
> - $P(B) = 0{,}05$, $P(L) = 0{,}80$, $P(B \mid L) = 0{,}03$
> - Target: $P(L \mid B)$
>
> > [!example]- Langkah Pengerjaan
> >
> > $$P(B \cap L) = 0{,}03 \times 0{,}80 = 0{,}024$$
> > $$P(L \mid B) = \frac{0{,}024}{0{,}05} = 0{,}48$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}48$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menerapkan Bayes dengan menukar pembilang dan penyebut.
> >
> > > [!CAUTION] Red Flags
> > > - "Peluang kondisi A diketahui B" setelah diberi "peluang B diketahui A" → Teorema Bayes.

---

## **No. 17**

Banyaknya klaim bulanan pada suatu produk asuransi memiliki distribusi sebagai berikut:

| Banyaknya Klaim | Peluang |
|-----------------|---------|
| 0 | $s$ |
| 1 | $t$ |
| 2 | $0{,}75s$ |
| 3 atau lebih | $0$ |

Diambil sampel acak sebanyak 5 polis dan data klaim di suatu bulan telah tersedia. Banyaknya klaim dari kelima polis tersebut saling bebas. Misal Y merupakan banyaknya polis dari sampel yang diambil memiliki kurang dari 2 klaim bulanan.

Misal $c = P(Y = 5)$. Tentukan mana dari jawaban berikut ini yang merepresentasikan $t$!

a. $\dfrac{4-4c^{0{,}2}}{3}$  
b. $\dfrac{3-7c^{0{,}2}}{3}$  
c. $\dfrac{4c^{0{,}2}-4}{3}$  
d. $\dfrac{5c^{0{,}2}-4}{3}$  
e. $\dfrac{7c^{0{,}2}-4}{3}$

> [!summary]+ **Jawaban No. 17**
> **(e). $\dfrac{7c^{0{,}2}-4}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Normalisasi PMF: $s + t + 0{,}75s = 1$. Distribusi Binomial: $Y \sim B(5, s+t)$, $c = P(Y=5) = (s+t)^5$.
>
> **Diketahui:**
> - $1{,}75s + t = 1$ (normalisasi)
> - $c = (s+t)^5 \implies s+t = c^{0{,}2}$
> - Target: $t$ dalam $c$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1:** $s + t = c^{0{,}2}$, dan $t = 1 - 1{,}75s$ dari normalisasi.
> >
> > **Langkah 2:** $s + (1-1{,}75s) = c^{0{,}2} \implies 1 - 0{,}75s = c^{0{,}2} \implies s = \dfrac{4(1-c^{0{,}2})}{3}$
> >
> > **Langkah 3:**
> > $$t = 1 - 1{,}75s = 1 - \frac{7}{4} \cdot \frac{4(1-c^{0{,}2})}{3} = 1 - \frac{7(1-c^{0{,}2})}{3} = \frac{7c^{0{,}2}-4}{3}$$
> >
> > **Hasil Akhir:** **(e)**. $t = \dfrac{7c^{0{,}2}-4}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kurang dari 2 klaim" = klaim 0 atau 1 (bukan 0, 1, atau 2).
> >
> > > [!CAUTION] Red Flags
> > > - PMF dengan simbol tak diketahui → mulai dari normalisasi, bentuk sistem persamaan.

---

## **No. 18**

Misal X merupakan random variabel dengan rataan 0 dan varians $a > 0$. Hitunglah $P(X^2 < a)$! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}34$  
b. $0{,}42$  
c. $0{,}68$  
d. $0{,}84$  
e. $0{,}90$

> [!summary]+ **Jawaban No. 18**
> **(c). $0{,}68$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> > Untuk $X \sim N(0, a)$: $P(X^2 < a) = P(-\sqrt{a} < X < \sqrt{a}) = P(-1 < Z < 1) \approx 0{,}6827$.
>
> **Diketahui:**
> - $E[X]=0$, $\text{Var}(X)=a$; soal mengisyaratkan asumsi $X \sim N(0,a)$ (nilai tepat pada opsi).
> - Target: $P(X^2 < a)$
>
> > [!example]- Langkah Pengerjaan
> >
> > $$P(X^2 < a) = P(-\sqrt{a} < X < \sqrt{a}) = P(-1 < Z < 1) = 2\Phi(1)-1 = 0{,}6827 \approx 0{,}68$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}68$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - $P(X^2 < a) \neq P(X < \sqrt{a})$; harus ambil kedua sisi: $|X| < \sqrt{a}$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika opsi berupa nilai tepat dan hanya diketahui mean/variansi → asumsikan distribusi Normal.

---

## **No. 19**

$(X_1, X_2, X_3)$ merupakan vektor acak dengan distribusi multivariat dengan nilai harapan $(0,0,0)$ dan matriks varians kovarians sebagai berikut:

$$\boldsymbol{\Sigma} = \begin{bmatrix} 4{,}0 & 1{,}5 & 1{,}0 \\ 1{,}5 & 1{,}0 & 0{,}5 \\ 1{,}0 & 0{,}5 & 1{,}0 \end{bmatrix}$$

Jika random variabel $W$ didefinisikan menggunakan formula $X_1 = aX_2 + bX_3 + W$ dan $W$ tidak berkorelasi dengan variabel $X_2$ dan $X_3$, maka koefisien $a$ bernilai:

a. $1$  
b. $\dfrac{4}{3}$  
c. $\dfrac{5}{3}$  
d. $2$  
e. $\dfrac{7}{3}$

> [!summary]+ **Jawaban No. 19**
> **(b). $\dfrac{4}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | [ADVANCED] |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]], [[3.6 Matriks Variansi-Kovariansi]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-McKean-Craig Bab 4.4 |
>
> > [!info]+ **Rumus**  
> > Kondisi ortogonalitas: $\text{Cov}(W, X_j) = 0$ untuk $j=2,3$, dengan $W = X_1 - aX_2 - bX_3$:
> > $$\sigma_{1j} - a\sigma_{2j} - b\sigma_{3j} = 0$$
>
> **Diketahui:**
> - $\sigma_{12}=1{,}5$, $\sigma_{13}=1{,}0$, $\sigma_{22}=1{,}0$, $\sigma_{23}=0{,}5$, $\sigma_{33}=1{,}0$
> - Target: $a$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Dari $\text{Cov}(W,X_2)=0$:** $1{,}5 - a(1{,}0) - b(0{,}5) = 0 \implies a + 0{,}5b = 1{,}5 \quad\cdots(1)$
> >
> > **Dari $\text{Cov}(W,X_3)=0$:** $1{,}0 - a(0{,}5) - b(1{,}0) = 0 \implies 0{,}5a + b = 1{,}0 \quad\cdots(2)$
> >
> > **Dari (2):** $b = 1 - 0{,}5a$. Substitusi ke (1):
> > $$a + 0{,}5(1-0{,}5a) = 1{,}5 \implies 0{,}75a = 1 \implies a = \frac{4}{3}$$
> >
> > **Hasil Akhir:** **(b)**. $a = \dfrac{4}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - "Tidak berkorelasi" → $\text{Cov}(W,X_j)=0$, bukan $\text{Var}(W) = 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Proyeksi ortogonal → bentuk sistem $\text{Cov}(W,X_j)=0$ untuk setiap $j$, selesaikan secara simultan.

---

## **No. 20**

Anda diberikan X dan Y yang keduanya mengikuti distribusi seragam $[0,1]$ dan saling bebas. Diberikan $U = X + Y$ dan $V = \dfrac{X}{X+Y}$. Tentukan fungsi peluang bersama dari $(U, V)$ yang dievaluasi pada $\left(\dfrac{1}{2}, \dfrac{1}{2}\right)$!

a. $0$  
b. $\dfrac{1}{4}$  
c. $\dfrac{1}{3}$  
d. $\dfrac{1}{2}$  
e. $1$

> [!summary]+ **Jawaban No. 20**
> **(d). $\dfrac{1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.6; Hogg-Tanis-Zimm Bab 5.6 |
>
> > [!info]+ **Rumus**  
> > Teknik Jacobian: $f_{U,V}(u,v) = f_{X,Y}(x(u,v),y(u,v)) \cdot |J|$ dengan $J = \det(\partial(x,y)/\partial(u,v))$.
>
> **Diketahui:**
> - $f_{X,Y}(x,y)=1$ untuk $0\leq x,y\leq 1$
> - $U=X+Y$, $V=X/(X+Y)$ → invers: $X=UV$, $Y=U(1-V)$
> - Target: $f_{U,V}(1/2, 1/2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Jacobian:**
> > $$J = \det\begin{pmatrix} v & u \\ 1-v & -u \end{pmatrix} = -uv - u(1-v) = -u, \quad |J|=u$$
> >
> > **PDF bersama:** $f_{U,V}(u,v) = 1 \cdot u = u$ (pada support yang valid).
> >
> > **Evaluasi:** $f_{U,V}(1/2, 1/2) = 1/2$. Cek support: $x = (1/2)(1/2)=1/4\in[0,1]$ ✓
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengalikan dengan $|J|$ — faktor Jacobian tidak boleh diabaikan.
> >
> > > [!CAUTION] Red Flags
> > > - Transformasi bivariat → (1) invers, (2) Jacobian, (3) support baru, (4) tulis PDF.

---
## **No. 21**

Suatu perusahaan menentukan harga dari asuransi gempa bumi dengan menggunakan asumsi-asumsi sebagai berikut:

i. Di setiap tahun kalender, terdapat hanya satu kali gempa bumi
ii. Di setiap tahun kalender, peluang terjadinya gempa bumi sebesar $0{,}05$
iii. Banyaknya gempa bumi yang terjadi di setiap tahun kalender saling bebas

Dengan menggunakan asumsi di atas, tentukan peluang terjadi kurang dari 3 gempa bumi dalam 20 tahun. (Pilihlah jawaban yang paling mendekati!)

a. $0{,}06$  
b. $0{,}19$  
c. $0{,}38$  
d. $0{,}62$  
e. $0{,}92$

> [!summary]+ **Jawaban No. 21**
> **(e). $0{,}92$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**  
> > Distribusi Binomial $X \sim B(n, p)$:
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> > Dengan $n = 20$, $p = 0{,}05$.
>
> **Diketahui:**
> - $n = 20$ tahun, $p = 0{,}05$ per tahun
> - $X \sim B(20, 0{,}05)$ = banyaknya gempa bumi dalam 20 tahun
> - Target: $P(X < 3) = P(X=0) + P(X=1) + P(X=2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X=0)$**
> >
> > $$P(X=0) = (0{,}95)^{20} = 0{,}35849$$
> >
> > **Langkah 2: Hitung $P(X=1)$**
> >
> > $$P(X=1) = \binom{20}{1}(0{,}05)(0{,}95)^{19} = 20 \times 0{,}05 \times 0{,}37736 = 0{,}37736$$
> >
> > **Langkah 3: Hitung $P(X=2)$**
> >
> > $$P(X=2) = \binom{20}{2}(0{,}05)^2(0{,}95)^{18} = 190 \times 0{,}0025 \times 0{,}39722 = 0{,}18868$$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$P(X < 3) = 0{,}35849 + 0{,}37736 + 0{,}18868 = 0{,}92453 \approx 0{,}92$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}92$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kurang dari 3" = 0, 1, atau 2, bukan 0, 1, 2, atau 3.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk $n$ besar dengan $p$ kecil, bisa digunakan aproksimasi Poisson dengan $\lambda = np = 1$. Cek: $P(X<3) \approx e^{-1}(1 + 1 + 1/2) = e^{-1} \times 2{,}5 = 0{,}920$ — konsisten.

---

## **No. 22**

Anda merupakan seorang aktuaris yang bertanggung jawab dalam melakukan negosiasi terhadap kontrak reasuransi di perusahaan tempat anda bekerja. Anda menentukan bahwa besar kerugian (dalam juta) yang ingin direasuransikan mengikuti distribusi seragam pada interval $[1000, 2000]$. Anda memiliki dua pilihan skema kontrak reasuransi untuk risiko ini:

(i) Kontrak pertama membayarkan klaim reasuransi sebesar $90\%$ dari besar kerugian, sedangkan
(ii) Kontrak kedua membayarkan klaim reasuransi hingga limit maksimum, dimana nilai limit ditentukan sedemikian sehingga nilai harapan dari klaim reasuransi dari kedua kontrak bernilai sama.

Hitunglah rasio dari varians klaim reasuransi atas kontrak kedua terhadap varians klaim reasuransi atas kontrak pertama! (Pilihlah jawaban yang paling mendekati!)

a. $1{,}5$  
b. $2{,}0$  
c. $0{,}9$  
d. $0{,}6$  
e. $0{,}3$

> [!summary]+ **Jawaban No. 22**
> **(e). $0{,}3$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > Untuk $X \sim U(1000, 2000)$: mean $= 1500$, variansi $= (2000-1000)^2/12 = 1000^2/12$.
> >
> > Kontrak 1: $Y_1 = 0{,}9X$ → $E[Y_1] = 0{,}9 \times 1500 = 1350$, $\text{Var}(Y_1) = 0{,}81 \times \dfrac{10^6}{12}$.
> >
> > Kontrak 2: $Y_2 = \min(X, L)$ dengan $E[Y_2] = E[Y_1] = 1350$.
>
> **Diketahui:**
> - $X \sim U(1000, 2000)$
> - $Y_1 = 0{,}9X$, $Y_2 = \min(X, L)$, $E[Y_1] = E[Y_2]$
> - Target: $\text{Var}(Y_2)/\text{Var}(Y_1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y_1]$ dan $\text{Var}(Y_1)$**
> >
> > $$E[Y_1] = 0{,}9 \times 1500 = 1350$$
> > $$\text{Var}(Y_1) = (0{,}9)^2 \times \frac{(1000)^2}{12} = 0{,}81 \times \frac{10^6}{12} = \frac{810000}{12} = 67500$$
> >
> > **Langkah 2: Cari limit $L$ menggunakan $E[Y_2] = 1350$**
> >
> > Untuk $Y_2 = \min(X, L)$ dengan $X \sim U(1000, 2000)$, kita perlu $L \in [1000, 2000]$.
> >
> > $$E[\min(X, L)] = \int_{1000}^{L} x \cdot \frac{1}{1000} dx + \int_L^{2000} L \cdot \frac{1}{1000} dx$$
> > $$= \frac{1}{1000}\left[\frac{x^2}{2}\right]_{1000}^L + \frac{L(2000-L)}{1000}$$
> > $$= \frac{L^2 - 10^6}{2000} + \frac{L(2000-L)}{1000}$$
> > $$= \frac{L^2 - 10^6}{2000} + \frac{2000L - L^2}{1000}$$
> > $$= \frac{L^2 - 10^6 + 4000L - 2L^2}{2000} = \frac{-L^2 + 4000L - 10^6}{2000}$$
> >
> > Set sama dengan 1350:
> > $$\frac{-L^2 + 4000L - 10^6}{2000} = 1350$$
> > $$-L^2 + 4000L - 10^6 = 2{,}7 \times 10^6$$
> > $$-L^2 + 4000L - 3{,}7 \times 10^6 = 0$$
> > $$L^2 - 4000L + 3{,}7 \times 10^6 = 0$$
> > $$L = \frac{4000 \pm \sqrt{16 \times 10^6 - 14{,}8 \times 10^6}}{2} = \frac{4000 \pm \sqrt{1{,}2 \times 10^6}}{2}$$
> > $$= \frac{4000 \pm 1095{,}45}{2}$$
> > $L = 2547{,}7$ (di luar support, ditolak) atau $L = 1452{,}3$
> >
> > Sehingga $L = 1452{,}3$.
> >
> > **Langkah 3: Hitung $\text{Var}(Y_2)$**
> >
> > $$E[Y_2^2] = \int_{1000}^{L} x^2 \cdot \frac{1}{1000} dx + L^2 \cdot P(X > L)$$
> > $$= \frac{1}{1000}\cdot\frac{L^3 - 10^9}{3} + L^2 \cdot \frac{2000-L}{1000}$$
> >
> > Dengan $L = 1452{,}3$:
> > $$\frac{L^3 - 10^9}{3000} = \frac{(1452{,}3)^3 - 10^9}{3000} = \frac{3{,}0646 \times 10^9 - 10^9}{3000} = \frac{2{,}0646 \times 10^9}{3000} = 688{,}200$$
> >
> > $$L^2 \cdot \frac{2000-L}{1000} = \frac{(1452{,}3)^2 \times 547{,}7}{1000} = \frac{2{,}109 \times 10^6 \times 547{,}7}{1000} = 1{,}1553 \times 10^6$$
> >
> > $$E[Y_2^2] = 688200 + 1155300 = 1{,}8435 \times 10^6$$
> > $$\text{Var}(Y_2) = E[Y_2^2] - (E[Y_2])^2 = 1843500 - 1350^2 = 1843500 - 1822500 = 21000$$
> >
> > **Langkah 4: Hitung rasio**
> >
> > $$\frac{\text{Var}(Y_2)}{\text{Var}(Y_1)} = \frac{21000}{67500} = 0{,}311 \approx 0{,}3$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}3$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $\text{Var}(aX) = a^2 \text{Var}(X)$ untuk kontrak pertama.
> > > - Kontrak kedua menggunakan limited payment, bukan pembayaran proporsional.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua kontrak memiliki ekspektasi sama tetapi mekanisme berbeda → yang satu proporsional akan memiliki variansi lebih tinggi karena mengikuti distribusi aslinya; yang satu truncated akan lebih kecil variansinya.

---

## **No. 23**

Peluang keterlambatan keberangkatan pesawat terbang dari suatu penerbangan diketahui sebesar $\dfrac{1}{6}$, dengan setiap satu keberangkatan pesawat terbang diperlakukan sebagai suatu percobaan Bernoulli. Hitunglah peluang setidaknya 40 dari 180 keberangkatan pesawat terbang akan mengalami keterlambatan, menggunakan aproksimasi normal dengan koreksi kontinuitas! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}0345$  
b. $0{,}0287$  
c. $0{,}0197$  
d. $0{,}0110$  
e. $0{,}0096$

> [!summary]+ **Jawaban No. 23**
> **(b). $0{,}0287$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Walpole Bab 8.5 |
>
> > [!info]+ **Rumus**  
> > Aproksimasi Normal dengan koreksi kontinuitas (Kasus 6):
> > $$P(X \geq k) \approx P\!\left(Z \geq \frac{k - 0{,}5 - \mu}{\sigma}\right)$$
> > di mana $\mu = np$ dan $\sigma = \sqrt{np(1-p)}$.
>
> **Diketahui:**
> - $n = 180$, $p = 1/6$
> - $\mu = np = 30$, $\sigma^2 = np(1-p) = 180 \times \tfrac{1}{6} \times \tfrac{5}{6} = 25$, $\sigma = 5$
> - Target: $P(X \geq 40)$ dengan koreksi kontinuitas
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan koreksi kontinuitas**
> >
> > "Setidaknya 40" = $P(X \geq 40)$. Dengan koreksi kontinuitas:
> > $$P(X \geq 40) \approx P\!\left(Z \geq \frac{40 - 0{,}5 - 30}{5}\right) = P\!\left(Z \geq \frac{9{,}5}{5}\right) = P(Z \geq 1{,}90)$$
> >
> > **Langkah 2: Baca dari tabel normal standar**
> >
> > $$P(Z \geq 1{,}90) = 1 - \Phi(1{,}90) = 1 - 0{,}9713 = 0{,}0287$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}0287$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menerapkan koreksi kontinuitas: menggunakan $z = (40-30)/5 = 2{,}00$ → $P(Z \geq 2) = 0{,}0228$ (pilihan lain yang mungkin dipilih).
> > > - Koreksi kontinuitas untuk $P(X \geq k)$: gunakan $k - 0{,}5$, bukan $k + 0{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - "Setidaknya $k$" = $P(X \geq k)$ → koreksi kontinuitas: pakai $k - 0{,}5$ di pembilang.
> > > - "Lebih dari $k$" = $P(X > k) = P(X \geq k+1)$ → pakai $k + 0{,}5$.

---

## **No. 24**

Anda diberikan informasi sebagai berikut:

i. $P(A \cup B) = 0{,}7$
ii. $P(A \cup B^c) = 0{,}9$

Tentukan $P(A)$!

a. $0{,}2$  
b. $0{,}3$  
c. $0{,}4$  
d. $0{,}6$  
e. $0{,}8$

> [!summary]+ **Jawaban No. 24**
> **(d). $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.2; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
> > $$P(A \cup B^c) = P(A) + P(B^c) - P(A \cap B^c)$$
> > Perhatikan: $P(B) + P(B^c) = 1$ dan $P(A) = P(A \cap B) + P(A \cap B^c)$.
>
> **Diketahui:**
> - $P(A \cup B) = 0{,}7$
> - $P(A \cup B^c) = 0{,}9$
> - Target: $P(A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan identitas $P(A \cup B) + P(A \cup B^c)$**
> >
> > Perhatikan bahwa $(A \cup B) \cup (A \cup B^c) = A \cup B \cup B^c = \Omega$, sehingga $P(\Omega)=1$.
> > Juga, $(A \cup B) \cap (A \cup B^c) = A \cup (B \cap B^c) = A$.
> >
> > Dari hukum probabilitas:
> > $$P(A \cup B) + P(A \cup B^c) = P((A\cup B)\cup(A\cup B^c)) + P((A\cup B)\cap(A\cup B^c))$$
> > $$0{,}7 + 0{,}9 = 1 + P(A)$$
> > $$P(A) = 1{,}6 - 1 = 0{,}6$$
> >
> > **Hasil Akhir:** **(d)**. $P(A) = 0{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba membentuk persamaan dengan lebih banyak variabel ($P(B)$, $P(A \cap B)$) tanpa menyadari identitas yang lebih elegan.
> >
> > > [!CAUTION] Red Flags
> > > - Ingat identitas: $P(E) + P(F) = P(E \cup F) + P(E \cap F)$. Jika $E \cup F = \Omega$, maka $P(E) + P(F) = 1 + P(E \cap F)$.

---

## **No. 25**

Tiga kartu diambil dari satu set kartu remi standar. Berapakah peluang ketiga kartu tersebut bergambar hati, jika diketahui setidaknya dua dari tiga kartu tersebut bergambar hati? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}0859$  
b. $0{,}0781$  
c. $0{,}0713$  
d. $0{,}0625$  
e. $0{,}0576$

> [!summary]+ **Jawaban No. 25**
> **(a). $0{,}0859$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3–1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> > Kartu remi standar: 52 kartu, 13 kartu hati. Pengambilan tanpa pengembalian.
>
> **Diketahui:**
> - Deck standar: 52 kartu, 13 hati, 39 bukan hati
> - Diambil 3 kartu tanpa pengembalian
> - $A$ = ketiga kartu hati, $B$ = setidaknya 2 dari 3 kartu hati
> - Target: $P(A \mid B) = P(\text{3 hati} \mid \text{setidaknya 2 hati})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A) = P(\text{3 hati})$**
> >
> > $$P(\text{3 hati}) = \frac{\binom{13}{3}}{\binom{52}{3}} = \frac{286}{22100}$$
> >
> > **Langkah 2: Hitung $P(\text{tepat 2 hati})$**
> >
> > $$P(\text{2 hati}) = \frac{\binom{13}{2}\binom{39}{1}}{\binom{52}{3}} = \frac{78 \times 39}{22100} = \frac{3042}{22100}$$
> >
> > **Langkah 3: Hitung $P(B) = P(\text{setidaknya 2 hati})$**
> >
> > $$P(B) = \frac{3042 + 286}{22100} = \frac{3328}{22100}$$
> >
> > **Langkah 4: Hitung $P(A \mid B)$**
> >
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{286/22100}{3328/22100} = \frac{286}{3328} = 0{,}08594 \approx 0{,}0859$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}0859$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $\binom{13}{2}$ atau $\binom{52}{3}$ — verifikasi: $\binom{52}{3} = 52 \times 51 \times 50/6 = 22100$.
> > > - "Setidaknya 2 hati" = tepat 2 ATAU tepat 3 hati; tidak hanya tepat 2.
> >
> > > [!CAUTION] Red Flags
> > > - Pengambilan kartu → tanpa pengembalian → gunakan kombinasi $\binom{n}{k}$, bukan permutasi.

---

## **No. 26**

Hitunglah fungsi pembangkit peluang $P_N(t)$ dari variabel acak Poisson N dengan rataan 2 pada $t = \dfrac{1}{2}$! (Pilihlah jawaban yang paling mendekati!)

a. $27{,}0434$  
b. $7{,}3891$  
c. $2{,}7183$  
d. $1{,}6487$  
e. $0{,}3679$

> [!summary]+ **Jawaban No. 26**
> **(e). $0{,}3679$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]], [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Fungsi Pembangkit Peluang (PGF) untuk $N \sim \text{Poisson}(\lambda)$:
> > $$G_N(t) = E[t^N] = e^{\lambda(t-1)}$$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda = 2)$ (diskrit, support $\{0, 1, 2, \ldots\}$)
> - Target: $G_N(1/2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan rumus PGF Poisson**
> >
> > $$G_N(t) = e^{\lambda(t-1)} = e^{2(t-1)}$$
> >
> > **Langkah 2: Substitusi $t = 1/2$**
> >
> > $$G_N\!\left(\tfrac{1}{2}\right) = e^{2(1/2 - 1)} = e^{2(-1/2)} = e^{-1} = \frac{1}{e} \approx 0{,}3679$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}3679$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan MGF $M_N(t) = e^{\lambda(e^t - 1)}$ alih-alih PGF $G_N(t) = e^{\lambda(t-1)}$ — dua fungsi yang berbeda.
> > > - Mengira PGF dievaluasi di $t=1/2$ sama dengan $e^{\lambda \cdot t} = e^1$, lupa faktor $t-1$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal menyebut PGF (bukan MGF) → gunakan $G_N(t) = E[t^N]$, bukan $M_N(t) = E[e^{tN}]$.

---

## **No. 27**

Misal $X$ memiliki sebaran binomial dengan parameter $n$ dan $p$, dan distribusi bersyarat dari $Y$ jika diketahui $X = x$ mengikuti sebaran Poisson dengan rataan $x$.

Tentukan varians dari $Y$!

a. $x$  
b. $np$  
c. $np(1-p)$  
d. $np^2$  
e. $np(2-p)$

> [!summary]+ **Jawaban No. 27**
> **(e). $np(2-p)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]], [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Distribusi Bersyarat]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.1–2.6; Hogg-Tanis-Zimm Bab 4.4 |
>
> > [!info]+ **Rumus**  
> > Hukum Variansi Total (Eve's Law):
> > $$\text{Var}(Y) = E[\text{Var}(Y \mid X)] + \text{Var}(E[Y \mid X])$$
> > Untuk $Y \mid X = x \sim \text{Poisson}(x)$: $E[Y \mid X] = X$ dan $\text{Var}(Y \mid X) = X$.
> > Untuk $X \sim B(n,p)$: $E[X] = np$ dan $\text{Var}(X) = np(1-p)$.
>
> **Diketahui:**
> - $X \sim B(n, p)$ (diskrit)
> - $Y \mid X = x \sim \text{Poisson}(x)$ (diskrit, support $\{0,1,2,\ldots\}$)
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi momen bersyarat**
> >
> > Karena $Y \mid X = x \sim \text{Poisson}(x)$:
> > $$E[Y \mid X] = X \quad \text{dan} \quad \text{Var}(Y \mid X) = X$$
> >
> > **Langkah 2: Terapkan Hukum Ekspektasi Total**
> >
> > $$E[Y] = E[E[Y \mid X]] = E[X] = np$$
> >
> > **Langkah 3: Terapkan Hukum Variansi Total**
> >
> > $$\text{Var}(Y) = E[\text{Var}(Y \mid X)] + \text{Var}(E[Y \mid X])$$
> > $$= E[X] + \text{Var}(X)$$
> > $$= np + np(1-p)$$
> > $$= np[1 + (1-p)]$$
> > $$= np(2-p)$$
> >
> > **Hasil Akhir:** **(e)**. $\text{Var}(Y) = np(2-p)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $\text{Var}(Y) = np$ (hanya menggunakan $E[\text{Var}(Y|X)]$ tanpa suku kedua).
> > > - Menjawab $\text{Var}(Y) = np(1-p)$ (hanya mengambil $\text{Var}(X)$ tanpa suku pertama).
> >
> > > [!CAUTION] Red Flags
> > > - Soal campuran (compound distribution) → SELALU gunakan kedua hukum: Total Expectation dan Total Variance.

---

## **No. 28**

Misal (X,Y) memiliki fungsi peluang bersama:

$$f_{X,Y}(x, y) = \begin{cases} 6(1-x-y), & \text{untuk } 0 \leq x \leq 1,\ 0 \leq y \leq 1,\ 0 \leq x+y \leq 1 \\ 0, & \text{selainnya} \end{cases}$$

Tentukan $P\!\left(0 \leq X \leq \dfrac{1}{2}\right)$!

a. $\dfrac{1}{12}$  
b. $\dfrac{1}{8}$  
c. $\dfrac{7}{12}$  
d. $\dfrac{1}{4}$  
e. $\dfrac{7}{8}$

> [!summary]+ **Jawaban No. 28**
> **(e). $\dfrac{7}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]], [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.1; Hogg-Tanis-Zimm Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > Marginal PDF:
> > $$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dy$$
> > Untuk support segitiga $\{x+y \leq 1, x \geq 0, y \geq 0\}$: batas integral $y$ dari $0$ hingga $1-x$.
>
> **Diketahui:**
> - $f_{X,Y}(x,y) = 6(1-x-y)$ pada segitiga $0 \leq x$, $0 \leq y$, $x+y \leq 1$
> - Target: $P(0 \leq X \leq 1/2) = \int_0^{1/2} f_X(x)\,dx$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung marginal $f_X(x)$**
> >
> > Untuk $0 \leq x \leq 1$, batas $y$: dari $0$ hingga $1-x$.
> > $$f_X(x) = \int_0^{1-x} 6(1-x-y)\,dy$$
> > Misal $u = 1-x$:
> > $$= 6\left[uy - \frac{y^2}{2}\right]_0^u = 6\left(u^2 - \frac{u^2}{2}\right) = 6 \cdot \frac{u^2}{2} = 3(1-x)^2$$
> >
> > **Langkah 2: Hitung $P(0 \leq X \leq 1/2)$**
> >
> > $$P\!\left(0 \leq X \leq \tfrac{1}{2}\right) = \int_0^{1/2} 3(1-x)^2\,dx$$
> > $$= 3\left[-\frac{(1-x)^3}{3}\right]_0^{1/2} = \left[-(1-x)^3\right]_0^{1/2}$$
> > $$= -(1-\tfrac{1}{2})^3 - (-(1-0)^3) = -\frac{1}{8} + 1 = \frac{7}{8}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{7}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan batas atas integral dalam $y$: untuk titik $(x, y)$ di segitiga, batas $y$ adalah $1-x$ (bukan 1).
> > > - Mengira $P(0 \leq X \leq 1/2)$ langsung dari integrasi ganda tanpa memarginalkan — bisa dilakukan langsung dengan integral ganda juga, tapi lebih mudah via marginal.
> >
> > > [!CAUTION] Red Flags
> > > - Support berbentuk segitiga → selalu gambar region terlebih dahulu untuk menentukan batas integral yang benar.

---

## **No. 29**

Keluarga Suprapto memiliki 5 anak. Diasumsikan peluang lahir setiap anak Perempuan sebesar $0{,}5$ dan kelahiran dari setiap anak saling bebas, berapakah peluang keluarga Suprapto memiliki setidaknya 1 anak perempuan jika diketahui mereka memiliki setidaknya 1 anak laki-laki?

a. $\dfrac{31}{32}$  
b. $\dfrac{30}{31}$  
c. $\dfrac{15}{16}$  
d. $\dfrac{5}{31}$  
e. $\dfrac{5}{32}$

> [!summary]+ **Jawaban No. 29**
> **(b). $\dfrac{30}{31}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> > Misal $F$ = kejadian "setidaknya 1 perempuan", $M$ = "setidaknya 1 laki-laki".
>
> **Diketahui:**
> - $n = 5$ anak, $p = 0{,}5$, saling bebas
> - $A = F$ = setidaknya 1 perempuan, $B = M$ = setidaknya 1 laki-laki
> - Target: $P(F \mid M)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(M^c)$ dan $P(F^c)$**
> >
> > $$P(M^c) = P(\text{0 laki-laki}) = P(\text{5 perempuan}) = (1/2)^5 = 1/32$$
> > $$P(F^c) = P(\text{0 perempuan}) = P(\text{5 laki-laki}) = (1/2)^5 = 1/32$$
> >
> > **Langkah 2: Hitung $P(M)$ dan $P(F \cap M)$**
> >
> > $$P(M) = 1 - P(M^c) = 1 - 1/32 = 31/32$$
> > $$P(F \cap M) = 1 - P(F^c) - P(M^c) + P(F^c \cap M^c)$$
> > Karena $F^c \cap M^c = \emptyset$ (tidak mungkin 5 anak semuanya perempuan DAN semuanya laki-laki):
> > $$P(F \cap M) = 1 - 1/32 - 1/32 = 30/32$$
> >
> > **Langkah 3: Terapkan rumus bersyarat**
> >
> > $$P(F \mid M) = \frac{P(F \cap M)}{P(M)} = \frac{30/32}{31/32} = \frac{30}{31}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{30}{31}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(F \mid M) = P(F) / P(M) = (31/32)/(31/32) = 1$ — salah karena pembilang harus $P(F \cap M)$, bukan $P(F)$.
> >
> > > [!CAUTION] Red Flags
> > > - $P(F^c \cap M^c) = 0$ karena tidak mungkin semua anak perempuan sekaligus semua laki-laki.

---

## **No. 30**

Banyaknya lonjakan daya yang terjadi pada suatu jaringan listrik diketahui mengikuti distribusi Poisson dengan rataan 1 lonjakan daya setiap 12 jam. Berapakah peluang bahwa tidak akan terjadi lonjakan daya lebih dari satu kali dalam 24 jam?

a. $2e^{-2}$  
b. $3e^{-2}$  
c. $e^{-1/2}$  
d. $\dfrac{3}{2}e^{-1/2}$  
e. $e^{-1}$

> [!summary]+ **Jawaban No. 30**
> **(b). $3e^{-2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Distribusi Poisson bersifat aditif terhadap waktu: jika $N_{12h} \sim \text{Poisson}(1)$, maka $N_{24h} \sim \text{Poisson}(2)$.
> > $$P(N = k) = \frac{e^{-\lambda}\lambda^k}{k!}$$
>
> **Diketahui:**
> - Rata-rata 1 lonjakan per 12 jam → $\lambda_{12} = 1$
> - Dalam 24 jam: $\lambda_{24} = 2$
> - $N_{24} \sim \text{Poisson}(2)$
> - Target: $P(N_{24} \leq 1)$, "tidak lebih dari satu kali" = $P(N \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Skalakan parameter Poisson ke 24 jam**
> >
> > $$\lambda_{24} = 1 \times \frac{24}{12} = 2$$
> > Sehingga $N_{24} \sim \text{Poisson}(2)$.
> >
> > **Langkah 2: Hitung $P(N_{24} \leq 1)$**
> >
> > $$P(N=0) = \frac{e^{-2} \cdot 2^0}{0!} = e^{-2}$$
> > $$P(N=1) = \frac{e^{-2} \cdot 2^1}{1!} = 2e^{-2}$$
> >
> > $$P(N_{24} \leq 1) = e^{-2} + 2e^{-2} = 3e^{-2}$$
> >
> > **Hasil Akhir:** **(b)**. $3e^{-2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tetap menggunakan $\lambda = 1$ untuk 24 jam — padahal Poisson bersifat aditif, sehingga $\lambda$ harus diskala proporsional dengan waktu.
> > > - "Tidak lebih dari satu kali" = $P(N \leq 1) = P(N=0) + P(N=1)$, bukan $P(N < 1) = P(N=0)$ saja.
> >
> > > [!CAUTION] Red Flags
> > > - "Tidak lebih dari $k$" = $P(N \leq k)$; "kurang dari $k$" = $P(N < k)$ = $P(N \leq k-1)$. Ini sering tertukar.
> > > - Jika rentang waktu berubah → skala $\lambda$ secara linear sebelum menghitung.

---

*Dokumen ini merupakan pembahasan lengkap Ujian CF2 (Probabilitas dan Statistika) Sesi November 2025. Kunci jawaban resmi diterbitkan oleh Persatuan Aktuaris Indonesia (PAI). Soal No. 5 dan No. 11 dianulir oleh PAI; semua peserta mendapat nilai penuh untuk kedua soal tersebut.*
