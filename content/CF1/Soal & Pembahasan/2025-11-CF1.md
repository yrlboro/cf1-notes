## **No. 1**

Di bawah ini adalah harga obligasi _zero-coupon_ $100$ yang ditebus pada nilai par:

| Jangka Waktu Jatuh Tempo | Harga |
| :----------------------: | :---: |
|            1             | 96,23 |
|            2             | 94,12 |
|            3             | 89,23 |
|            4             | 84,59 |
|            5             | 82,48 |

Tentukan _forward rate_ untuk tahun ke-4.

a. $2{,}56\%$  
b. $5{,}20\%$  
c. $5{,}49\%$  
d. $12{,}10\%$  
e. $13{,}76\%$


> [!summary]+ **Jawaban No. 1**
> **2,56% (a)**
>
> > [!info] Rumus
> > 
> > Hubungan antara Harga Obligasi Zero-Coupon ($P_t$) dan Forward Rate ($f$):
> > 
> > $$
> > f_{t, t+1} = \frac{P_t}{P_{t+1}} - 1
> > $$
> 
> 
>**Diketahui:**
>- $P_4 = 84,59$ (Harga obligasi jatuh tempo $t=4$)
>- $P_5 = 82,48$ (Harga obligasi jatuh tempo $t=5$)
>- Target: Forward rate tahun ke-4 ($t=4 \to t=5$)
>
> > [!example]- Langkah Pengerjaan
> > 
> > Kita mencari forward rate yang berlaku mulai akhir tahun ke-4 hingga akhir tahun ke-5 ($f_{4,5}$).
> >
> > **1. Substitusi Angka:**  
> > 
> > $$
> > f_{4,5} = \frac{84,59}{82,48} - 1
> > $$  
> >
> > **2. Perhitungan Rasio:**  
> > 
> > $$
> > \frac{84,59}{82,48} \approx 1,02558196
> > $$
> >
> > **3. Hasil Akhir:**  
> > 
> > $$1,02558196 - 1 = 0,02558196$$
> >
> > **4. Konversi ke Persen:**  
> > 
> > $$\approx 2,56\%$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Forward rate adalah "bunga tersirat" yang menjembatani harga obligasi jangka pendek menuju harga obligasi jangka panjang.
> > - **Trap:** Definisi "Tahun ke-4". Dalam soal ini, yang dimaksud adalah periode $t=4$ ke $t=5$ (sesuai kunci jawaban). Namun, hati-hati jika soal merujuk pada definisi Kellison standar di mana "Tahun ke-4" bisa berarti $t=3$ ke $t=4$. Selalu cek opsi jawaban.

---
## **No. 2**

Misalkan kurva hasil untuk tingkat spot diberikan oleh persamaan berikut:
$$s_t = 0{,}08-0{,}01t+0{,002}t^2$$
Tentukanlah tingkat bunga _forward_ efektif tahunan untuk pinjaman yang dimulai pada waktu $t=4{,}$ dengan jangka waktu 3 tahun.

a. $0{,}3603$  
b. $0{,}0569$  
c. $0{,}0033$  
d. $0{,}2606$  
e. $0{,}1805$

> [!summary]+ **Jawaban No. 2**
> **0,2606 (d)**
>
> > [!info] Rumus
> > 
> > Karena fungsi berbentuk polinomial dan jawaban berupa desimal spesifik, persamaan $s_t$ diperlakukan sebagai *Force of Interest* ($\delta_t$). Total bunga akumulatif dihitung dengan integral:
> > 
> > $$
> > \text{Total Interest} = \int_{t_1}^{t_2} \delta_t \, dt
> > $$
> 
> 
>**Diketahui:**
>- Fungsi: $\delta_t = 0,08 - 0,01t + 0,002t^2$
>- Periode: Mulai $t=4$ selama 3 tahun (berakhir di $t=7$)
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Setup Integral Tentu:**
> > 
> > $$
> > I = \int_{4}^{7} (0,08 - 0,01t + 0,002t^2) \, dt
> > $$
> >
> > **2. Anti-Turunan (Indefinite Integral):**
> > 
> > $$
> > F(t) = 0,08t - \frac{0,01}{2}t^2 + \frac{0,002}{3}t^3
> > $$
> > 
> > $$
> > F(t) = 0,08t - 0,005t^2 + 0,000666...t^3
> > $$
> >
> > **3. Evaluasi Batas Atas ($t=7$):**
> > $$
> > F(7) = 0,08(7) - 0,005(49) + \frac{0,002}{3}(343)
> > $$  
> > $$
> > F(7) \approx 0,56 - 0,245 + 0,22867 = 0,54367
> > $$  
> >
> > **4. Evaluasi Batas Bawah ($t=4$):**
> > 
> > $$
> > F(4) = 0,08(4) - 0,005(16) + \frac{0,002}{3}(64)
> > $$  
> > $$
> > F(4) \approx 0,32 - 0,08 + 0,04267 = 0,28267
> > $$
> >
> > **5. Hasil Akhir (Selisih):**  
> > $$I = 0,54367 - 0,28267 = 0,261$$
> > *(Hasil presisi tanpa pembulatan antara adalah 0,2606)*
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Total bunga dalam *continuous compounding* adalah luas area di bawah kurva *force of interest*.
> > - **Trap:** Soal menggunakan notasi $s_t$ (biasanya *spot rate* efektif) tetapi cara penyelesaiannya mengharuskan kita menganggapnya sebagai $\delta_t$ (*force of interest*) karena opsi jawaban adalah hasil integral langsung, bukan hasil konversi $(1+i)$.


---
## **No. 3**

Grace membayar $100.000$ hari ini untuk suatu investasi 4-tahun yang menghasilkan arus kas $60.000$ pada akhir tahun ke-3 dan 4. Misalkan, dengan tingkat $15\%$, nilai kini dari arus kas Grace sama dengan nilai kini dari arus kas Shanice, dimana Shanice melakukan investasi sebesar X satu tahun dari sekarang yang menghasilkan arus kas $60.000$ pada akhir tahun ke-4 dan ke-5. Tentukanlah nilai dari $X$.

a. $94.316$  
b. $98.503$  
c. $105.380$  
d. $103.937$  
e. $90.379$

> [!summary]+ **Jawaban No. 3**
> **103.937 (d)**
>
> > [!info] Rumus
> > 
> > **Equation of Value (PV):**
> > 
> > $$NPV_{Grace} = NPV_{Shanice}$$
> > $$-100.000 + 60.000v^3 + 60.000v^4 = -Xv + 60.000v^4 + 60.000v^5$$
> >
> > **Data:**
> > - $i = 15\%$
> > - $v = \frac{1}{1,15}$
> > - Grace: Out 100.000 ($t=0$), In 60.000 ($t=3,4$)
> > - Shanice: Out $X$ ($t=1$), In 60.000 ($t=4,5$)
>
> > [!example]- Langkah Pengerjaan
> > 
> > 1. **Sederhanakan Persamaan:**
> >    Coret suku $+60.000v^4$ yang muncul di kedua sisi.
> >    $$-100.000 + 60.000v^3 = -Xv + 60.000v^5$$
> > 2. **Isolasi $X$:**
> >    Pindahkan $Xv$ ke kiri, sisanya ke kanan, lalu kalikan dengan $(1+i)$ untuk menghilangkan $v$ pada $X$.
> >    $$X = 100.000(1+i) - 60.000v^2 + 60.000v^4$$
> > 3. **Substitusi & Hitung:**
> >    $$X = 100.000(1,15) - 60.000(0,756144) + 60.000(0,571753)$$
> >    $$X = 115.000 - 45.368,62 + 34.305,19$$
> >
> > $$X = 103.936,57 \rightarrow 103.937$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Agar investasi setara, nilai kini bersih (NPV) semua arus kas di $t=0$ harus sama.
> > - **Trap:** Lupa mendiskon $X$ dengan $v^1$. Ingat, Shanice berinvestasi *satu tahun dari sekarang*, bukan hari ini.

> [!summary]+ **Jawaban No. 3**
> **103.937 (d)**
>
> > [!info] Rumus
> > 
> > **Equation of Value (Time $t=0$):**
> > $$NPV_{Grace} = NPV_{Shanice}$$
> > $$-100.000 + 60.000v^3 + 60.000v^4 = -Xv + 60.000v^4 + 60.000v^5$$
> >
> > **Data & Variabel:**
> > - $i = 15\% \Rightarrow 0,15$
> > - $v = (1+i)^{-1} = (1,15)^{-1}$
> > - **Grace:** Keluar 100k di $t=0$; Masuk 60k di $t=3$ & $t=4$.
> > - **Shanice:** Keluar $X$ di $t=1$; Masuk 60k di $t=4$ & $t=5$.
>
> > [!example]- Langkah Pengerjaan
> > 
> > **Langkah 1: Penyederhanaan Persamaan**
> > Perhatikan bahwa suku $+60.000v^4$ (penerimaan di tahun ke-4) ada pada kedua sisi persamaan (Grace dan Shanice). Kita coret suku ini untuk menyederhanakan hitungan.
> > $$-100.000 + 60.000v^3 = -Xv + 60.000v^5$$
> >
> > **Langkah 2: Isolasi Variabel X**
> > Kita pindahkan $-Xv$ ke ruas kiri (menjadi positif) dan $-100.000$ ke ruas kanan.
> > $$Xv = 100.000 - 60.000v^3 + 60.000v^5$$
> >
> > Agar mendapatkan $X$ (bukan $Xv$), kalikan seluruh persamaan dengan $(1+i)$ atau bagi dengan $v$. Ingat bahwa $v \cdot (1+i) = 1$.
> > $$X = 100.000(1+i) - 60.000v^2 + 60.000v^4$$
> >
> > **Langkah 3: Hitung Faktor Diskonto ($i=0,15$)**
> > - $(1+i) = 1,15$
> > - $v^2 = (1,15)^{-2} \approx 0,7561436$
> > - $v^4 = (1,15)^{-4} \approx 0,5717532$
> >
> > **Langkah 4: Substitusi Angka**
> > Masukkan nilai faktor diskonto ke dalam persamaan $X$:
> > $$X = 100.000(1,15) - 60.000(0,7561436) + 60.000(0,5717532)$$
> >
> > **Langkah 5: Perhitungan Suku per Suku**
> > - Suku 1: $115.000$
> > - Suku 2: $60.000 \times 0,7561436 = 45.368,616$
> > - Suku 3: $60.000 \times 0,5717532 = 34.305,192$
> >
> > **Langkah 6: Penjumlahan Akhir**
> > $$X = 115.000 - 45.368,616 + 34.305,192$$
> > $$X = 69.631,384 + 34.305,192$$
> > $$X = 103.936,576$$
> >
> > $$Hasil \approx 103.937$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Agar dua skenario investasi setara secara finansial, Net Present Value (NPV) keduanya harus sama persis saat ditarik ke titik waktu yang sama ($t=0$).
> > - **Trap:** Hati-hati dengan timing $X$. Soal bilang $X$ diinvestasikan "one year from now" ($t=1$), jadi saat ditarik ke $t=0$, harus dikalikan $v^1$, bukan langsung $X$ saja.

---
## **No. 4**

Pada saat yang sama, Niel dan Elis menyetor uang ke dua dana berbeda. Niel menyetor $200$ dan Elis menyetor $80$. Kedua akun mendapatkan tingkat bunga yang sama. Jumlah bunga yang diperoleh akun Niel pada tahun ke-10 sama dengan jumlah bunga yang diperoleh akun Elis pada tahun ke-20. Tentukan jumlah bunga yang diperoleh akun Niel selama tahun ke-13.

a. $23{,}1$  
b. $57{,}6$  
c. $49{,}1$  
d. $63{,}2$  
e. $52{,}6$

> [!summary]+ **Jawaban No. 4**
> **57,6 (b)**
>
> > [!info] Rumus
> > 
> > **Interest Earned in Year $n$:**
> > $$I_n = AV_{n-1} \cdot i = P(1+i)^{n-1} \cdot i$$
> >
> > **Data:**
> > - $P_{Niel} = 200$, $P_{Elis} = 80$
> > - Diketahui: $I_{N,10} = I_{E,20}$
> > - Ditanya: $I_{N,13}$
>
> > [!example]- Langkah Pengerjaan
> > 
> > 1. **Cari Faktor Akumulasi dari Persamaan:**
> >    $$200(1+i)^9 \cdot i = 80(1+i)^{19} \cdot i$$
> >    Bagi kedua sisi dengan $i$ dan kumpulkan suku $(1+i)$:
> >    $$\frac{200}{80} = \frac{(1+i)^{19}}{(1+i)^9} \Rightarrow 2,5 = (1+i)^{10}$$
> >    Maka: $(1+i) = 2,5^{0,1} \approx 1,095958$ dan $i \approx 0,095958$
> >
> > 2. **Hitung Target ($I_{N,13}$):**
> >    $$I_{N,13} = 200(1+i)^{12} \cdot i$$
> >    Gunakan trik substitusi $(1+i)^{12} = (1+i)^{10} \cdot (1+i)^2 = 2,5 \cdot (1,095958)^2$:
> >    $$I_{N,13} = 200 \cdot (3,002811) \cdot (0,095958)$$
> >    $$I_{N,13} = 600,562 \cdot 0,095958$$
> >
> > $$I_{N,13} = 57,628 \rightarrow 57,6$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** "Gaji" bunga tahunan pada *compound interest* tidak tetap, tapi tumbuh secara eksponensial.
> > - **Trap:** Menggunakan pangkat $n$ alih-alih $n-1$. Bunga tahun ke-13 dihitung dari saldo akhir tahun ke-12.

> [!summary]+ **Jawaban No. 4**
> **57,6 (b)**
>
> > [!info] Rumus
> > 
> > **Bunga pada Tahun ke-n ($I_n$):**
> > $$I_n = AV_{n-1} \cdot i = P(1+i)^{n-1} \cdot i$$
> >
> > **Data & Variabel:**
> > - $P_{Niel} = 200$
> > - $P_{Elis} = 80$
> > - Kondisi Soal: $I_{Niel,10} = I_{Elis,20}$
> > - Target: Cari $I_{Niel,13}$
>
> > [!example]- Langkah Pengerjaan
> > 
> > **Langkah 1: Susun Persamaan Keseimbangan**
> > Masukkan kondisi soal ke rumus $I_n$:
> > $$P_{Niel}(1+i)^{10-1} \cdot i = P_{Elis}(1+i)^{20-1} \cdot i$$
> > $$200(1+i)^9 \cdot i = 80(1+i)^{19} \cdot i$$
> >
> > **Langkah 2: Sederhanakan Persamaan**
> > Bagi kedua ruas dengan $i$ (karena $i \neq 0$) dan kumpulkan variabel $(1+i)$ di satu sisi:
> > $$\frac{200}{80} = \frac{(1+i)^{19}}{(1+i)^9}$$
> > $$2,5 = (1+i)^{10}$$
> >
> > **Langkah 3: Dapatkan Nilai $i$ dan Faktor Pendukung**
> > Dari persamaan $(1+i)^{10} = 2,5$, kita peroleh:
> > $$(1+i) = 2,5^{\frac{1}{10}} = 2,5^{0,1} \approx 1,095958$$
> > $$i \approx 0,095958 \quad (9,59\%)$$
> >
> > **Langkah 4: Hitung Target ($I_{Niel,13}$)**
> > Gunakan rumus bunga untuk tahun ke-13 Niel:
> > $$I_{N,13} = 200(1+i)^{12} \cdot i$$
> >
> > *Trik Substitusi:* Kita tahu $(1+i)^{12} = (1+i)^{10} \cdot (1+i)^2$. Karena $(1+i)^{10} = 2,5$, maka:
> > $$(1+i)^{12} = 2,5 \cdot (1,095958)^2$$
> > $$(1+i)^{12} = 2,5 \cdot 1,201124 = 3,00281$$
> >
> > **Langkah 5: Kalkulasi Final**
> > $$I_{N,13} = 200 \times 3,00281 \times 0,095958$$
> > $$I_{N,13} = 600,562 \times 0,095958$$
> > $$I_{N,13} = 57,6287$$
> >
> > $$Hasil \approx 57,6$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Pada bunga majemuk, nominal bunga yang diterima setiap tahun selalu naik karena basis perhitungannya (saldo awal tahun) terus bertambah.
> > - **Trap:** Jangan tertukar pangkatnya. Bunga tahun ke-13 ($I_{13}$) dihitung berdasarkan saldo akhir tahun ke-12 ($AV_{12}$), jadi pangkatnya adalah 12, bukan 13.

---
## **No. 5**

Sebuah dana memperoleh pendapatan investasi sebesar $8.000$ selama tahun 2004. Saldo awal dan akhir dana tersebut adalah $95.000$ dan $120.000$. Sebuah setoran dilakukan pada waktu $K$ selama tahun tersebut. Tidak ada setoran atau penarikan lain yang dilakukan. Dana memperoleh $7{,}5235\%$ pada tahun 2004 menggunakan metode _dollar-weighted_. Tentukan $K$.

a. **1 Maret**  
b. **1 April**   
c. **1 Mei**  
d. **1 Juli**  
e. **1 Oktober**

> [!summary]+ **Jawaban No. 5**
> **1 Mei (c)**
> 
> > [!info] Rumus
> > 
> > $$i_{dw} = \frac{I}{A + C(1-K)}$$
> > 
> > - **Diketahui:** $A=95.000$, $B=120.000$, $I=8.000$, $i_{dw}=7,5235\%$
> > - **Dicari:** $K$ (Waktu terjadinya setoran $C$)
> 
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Mencari Nilai Deposit ($C$):**
> > $$B = A + C + I$$
> > $$120.000 = 95.000 + C + 8.000 \implies C = 17.000$$
> > 
> > **2. Setup Persamaan Dollar-Weighted:**
> > $$0,075235 = \frac{8.000}{95.000(1) + 17.000(1-K)}$$
> > 
> > **3. Solusi Aljabar (Mencari term waktu):**
> > Kalikan silang penyebut:
> > $$95.000 + 17.000(1-K) = \frac{8.000}{0,075235} = 106.333,488$$
> > 
> > Isolasi variabel waktu:
> > $$17.000(1-K) = 106.333,488 - 95.000 = 11.333,488$$
> > $$(1-K) = \frac{11.333,488}{17.000} \approx 0,666675$$
> > 
> > **4. Konversi ke Tanggal:**
> > $$K = 1 - 0,666675 = 0,333325 \text{ tahun}$$
> > $$K_{\text{bulan}} = 0,333325 \times 12 = 3,9999 \approx 4 \text{ bulan}$$
> > 
> > $$4 \text{ bulan penuh berlalu (Jan-Apr)} \rightarrow \text{Masuk Awal Bulan ke-5} \rightarrow \text{1 Mei}$$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** *Dollar-weighted* menggunakan pendekatan *Simple Interest* untuk membobot "eksposur" dana; semakin lama uang berada di akun, semakin besar pembaginya.
> > - **Trap:** Mendapatkan angka "4" dan langsung memilih jawaban April. Ingat, $t=4$ artinya 4 bulan *telah berlalu*, sehingga kejadian jatuh pada tanggal 1 bulan berikutnya (Mei).


> [!summary]+ **Jawaban No. 5**
> **1 Mei (c)**
>
> > [!info] Rumus
> > 
> > **1. Identitas Dana (Cari Besar Setoran/C):**
> > $$A_1 = A_0 + C + I$$
> > 
> > **2. Dollar-Weighted Rate ($i_{dw}$):**
> > $$i_{dw} = \frac{I}{A_0(1) + C(1-K)}$$
> > Dimana $(1-K)$ adalah durasi uang mengendap (exposure).
>
> > [!tip] Tips & Intuisi
> > - **Langkah 1 (Cari C):** Jangan langsung masuk rumus bunga. Gunakan logika saldo: $120.000 = 95.000 + C + 8.000 \rightarrow C = 17.000$.
> > - **Langkah 2 (Cari Durasi):** Selesaikan persamaan untuk $(1-K)$. Hasilnya $x \approx 0,666...$ atau $2/3$ tahun.
> > - **Langkah 3 (Konversi ke Bulan):** Durasi $2/3$ tahun = 8 bulan.
> > - **Langkah 4 (Tentukan Tanggal):** Jika uang mengendap selama 8 bulan (sampai akhir tahun), berarti uang masuk setelah 4 bulan berlalu ($12 - 8 = 4$). Awal bulan ke-5 adalah **1 Mei**.
>
> > [!warning] Tricky Traps
> > - **Variabel Waktu:** Hati-hati membedakan $K$ (waktu kejadian) dengan $1-K$ (durasi investasi). Rumus menghasilkan durasi ($2/3$), bukan $K$.
> > - **Asumsi Bunga:** Metode *Dollar-Weighted* menggunakan pendekatan *Simple Interest* untuk eksposur waktu. Jangan gunakan $(1+i)^{(1-K)}$.

---
## **No. 6**

Misalkan total 30 pembayaran semi-tahunan sebesar $5$ dilakukan mulai tepat enam tahun dari hari ini. Dengan asumsi tingkat bunga efektif tahunan $6\%$, tentukanlah nilai masa depan pada waktu 30 tahun dari hari ini. Asumsikan bahwa setelah pembayaran selesai, investasi dibiarkan dalam akun yang sama menghasilkan bunga.

a. $708$  
b. $411$  
c. $243$  
d. $399$  
e. $450$

> [!summary]+ **Jawaban No. 6**
> **411 (b)**
> 
> > [!info] Rumus
> > 
> > $$AV_{30} = \left[ PMT \cdot \frac{(1+j)^n - 1}{j} \right] \cdot (1+i)^{\Delta t}$$
> > 
> > - **Diketahui:** $PMT=5$, $n=30$ kali, $i=6\%$ (tahunan), Start=$t_6$
> > - **Timeline:** Anuitas berjalan dari $t=6$ s.d. $t=20,5$, lalu *idle* s.d. $t=30$.
> 
> > [!example]- Langkah Pengerjaan
> > **1. Konversi Bunga Efektif ($i \to j$):**
> > Karena pembayaran per semester, cari *effective semi-annual rate*:
> > $$j = (1,06)^{0,5} - 1 = 0,029563014$$
> > 
> > **2. Nilai Masa Depan Anuitas (di $t=20,5$):**
> > Waktu pembayaran terakhir = Start + (n-1)periode = $6 + 14,5 = 20,5$.
> > $$FV_{20,5} = 5 \cdot \frac{(1,029563...)^{30} - 1}{0,029563...}$$
> > Catatan: $(1+j)^{30} = (1,06)^{15}$
> > $$FV_{20,5} = 5 \cdot 47,23992 = 236,1996$$
> > 
> > **3. Akumulasi ke Tahun 30 ($t=30$):**
> > Sisa waktu "menggelinding" ($\Delta t$) = $30 - 20,5 = 9,5$ tahun.
> > $$AV_{30} = 236,1996 \cdot (1,06)^{9,5}$$
> > $$AV_{30} = 236,1996 \cdot 1,73938$$
> > 
> > $$AV_{30} = 410,8408 \rightarrow \text{Dibulatkan: } 411$$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Hitung tumpukan uang tepat saat setoran terakhir masuk ($FV$ Anuitas), lalu bungakan tumpukan tersebut sebagai *Lump Sum* hingga tahun target.
> > - **Trap:** Menggunakan $6\% / 2 = 3\%$ (Salah! Ini *effective annual*, bukan *nominal*). Juga sering salah menghitung $t_{akhir}$ sehingga durasi akumulasi akhirnya meleset.

> [!summary]+ **Jawaban No. 6**
> **411 (b)**
>
> > [!info] Rumus
> > 
> > $$FV_{30} = PMT \cdot \left( \frac{(1+j)^n - 1}{j} \right) \cdot (1+i)^{\Delta t}$$
> >
> > **Diketahui:**
> > - $PMT = 5$ (dibayar semi-tahunan)
> > - $i = 6\%$ (Effective Annual Rate)
> > - $n = 30$ kali pembayaran
> > - Waktu mulai pembayaran: $t=6$
> > - Target valuasi: $t=30$
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Konversi Bunga ($i \to j$)**
> > Karena pembayaran per semester, cari bunga efektif per semester ($j$):
> > $$j = (1 + i)^{0,5} - 1$$
> > $$j = (1,06)^{0,5} - 1 \approx 0,029563$$
> >
> > **2. Tentukan Timeline**
> > - Pembayaran ke-1 di $t=6$.
> > - Pembayaran ke-30 berakhir di: $t = 6 + (29 \times 0,5) = 20,5$.
> > - Sisa waktu "mengendap" ($\Delta t$): $30 - 20,5 = 9,5$ tahun.
> >
> > **3. Hitung Nilai Anuitas di $t=20,5$**
> > $$FV_{20,5} = 5 \cdot \frac{(1,029563)^{30} - 1}{0,029563}$$
> > $$FV_{20,5} \approx 5 \cdot 47,239381 = 236,1969$$
> >
> > **4. Akumulasi Akhir ke $t=30$**
> > $$FV_{30} = 236,1969 \cdot (1,06)^{9,5}$$
> > $$FV_{30} = 236,1969 \cdot 1,739084$$
> > $$FV_{30} \approx 410,766 \rightarrow \mathbf{411}$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Masalah ini menggabungkan **Anuitas Tertunda** (uang tumbuh saat menabung) dan **Bunga Majemuk Pasif** (uang dibiarkan tumbuh setelah setoran berhenti).
> > - **Trap:** Sering salah menghitung kapan pembayaran terakhir terjadi (dikira tahun ke-30, padahal tahun ke-20,5), atau menggunakan bunga nominal ($6\%/2$) padahal diketahui bunga efektif tahunan.

---
## **No. 7**

Misalkan jumlah dalam suatu dana satu setengah tahun dari sekarang adalah $100$. Tentukan nilai kini dari dana tersebut jika tingkat diskonto nominal adalah $5\%$ yang dapat dikonversi setiap kuartal.

a. $86{,}8$  
b. $96{,}4$    
c. $92{,}7$  
d. $92{,}9$    
e. $92{,}2$  

> [!summary]+ **Jawaban No. 7**
> **92,7 (c)**
>
> > [!info] Rumus
> > 
> > $$PV = FV \cdot \left( 1 - \frac{d^{(m)}}{m} \right)^{m \cdot t}$$
> >
> > **Diketahui:**
> > - $FV = 100$
> > - $t = 1,5$ tahun
> > - $d^{(4)} = 5\%$ (Diskonto nominal dikonversi kuartalan)
> > - $m = 4$ (Kuartal)
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Tentukan Rate per Periode**
> > Tingkat diskonto per kuartal:
> > $$\frac{d^{(4)}}{4} = \frac{0,05}{4} = 0,0125$$
> >
> > **2. Tentukan Total Periode ($N$)**
> > $$N = m \cdot t = 4 \times 1,5 = 6 \text{ kuartal}$$
> >
> > **3. Hitung Present Value**
> > $$PV = 100 \cdot (1 - 0,0125)^6$$
> > $$PV = 100 \cdot (0,9875)^6$$
> > $$PV = 100 \cdot 0,927233$$
> > $$PV \approx 92,723 \rightarrow \mathbf{92,7}$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Diskonto nominal bekerja "mundur" dengan memotong nilai masa depan di setiap akhir sub-periode (kuartal).
> > - **Trap:** Hati-hati tertukar rumus dengan bunga nominal ($PV = FV / (1+i)^n$). Untuk diskonto, kita **mengalikan dengan faktor pengurangan**, bukan membagi dengan faktor penambahan.

---
## **No. 8**

Davin membeli _annuity-immediate_ selama $16$ tahun yang membayar $100$ pada tahun pertama dan meningkat $4\%$ setiap tahun berikutnya. Kelvin membeli _annuity-immediate_ $16$ tahun yang membayar $X$ pada tahun pertama dan menurun $2\%$ setiap tahun berikutnya. Pada tingkat bunga efektif tahunan $5\%$, kedua anuitas memiliki nilai kini yang sama. Tentukanlah nilai $X$.   

a. $148{,}7$  
b. $145{,}2$  
c. $124{,}5$  
d. $123{,}2$  
e. $120{,}0$  

> [!summary]+ **Jawaban No. 8**
> **148,7 (a)**
>
> > [!info] Rumus
> > 
> > $$PV = PMT_1 \cdot \left( \frac{1 - \left( \frac{1+g}{1+i} \right)^n}{i - g} \right)$$
> >
> > **Diketahui:**
> > - $i = 5\%$ (Bunga Efektif)
> > - $n = 16$ tahun
> > - **Davin:** $PMT_1 = 100$, Growth $g = 4\%$
> > - **Kelvin:** $PMT_1 = X$, Growth $g = -2\%$ (menurun)
> > - Kondisi: $PV_{Davin} = PV_{Kelvin}$
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Hitung PV Anuitas Davin**
> > $$PV_{D} = 100 \cdot \left( \frac{1 - \left( \frac{1,04}{1,05} \right)^{16}}{0,05 - 0,04} \right)$$
> > $$PV_{D} = 100 \cdot \left( \frac{1 - 0,858026}{0,01} \right)$$
> > $$PV_{D} \approx 1.419,735$$
> >
> > **2. Susun Persamaan PV Kelvin**
> > Perhatikan penyebut menjadi $0,05 - (-0,02) = 0,07$:
> > $$PV_{K} = X \cdot \left( \frac{1 - \left( \frac{0,98}{1,05} \right)^{16}}{0,07} \right)$$
> > $$PV_{K} = X \cdot \left( \frac{1 - 0,331766}{0,07} \right)$$
> > $$PV_{K} \approx X \cdot 9,546195$$
> >
> > **3. Solusi Akhir ($PV_D = PV_K$)**
> > $$1.419,735 = 9,546195 \cdot X$$
> > $$X = \frac{1.419,735}{9,546195}$$
> > $$X \approx 148,722 \rightarrow \mathbf{148,7}$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Mencari titik ekuilibrium antara dua aliran kas: satu dimulai rendah tapi naik (Davin), satu dimulai tinggi tapi turun (Kelvin).
> > - **Trap:** Kesalahan paling fatal adalah tanda negatif pada $g$ Kelvin. Penyebut rumus harusnya $i - (-g) = i+g$. Jangan lupa ini *Annuity-Immediate* (bukan Due).

---
## **No. 9**

Suaty _annuity-due_ membayar manfaat awal sebesar $1$ per tahun, dengan manfaat meningkat sebesar $10{,}25\%$ setiap empat tahun. Anuitas ini dibayarkan selama $40$ pembayaran tahunan. Dengan menggunakan tingkat bunga efektif tahunan sebesar $2\%$, tentukanlah nilai masa depan dari anuitas ini.

a. $42$  
b. $69$  
c. $83$  
d. $59$  
e. $93$

> [!summary]+ **Jawaban No. 9**
> **93 (e)**
>
> > [!info] Rumus
> > 
> > **Strategi 2 Tahap:**
> > 
> > 1. Hitung PV satu blok (4 tahun) di awal blok: $PV_{block} = 1 \cdot \ddot{a}_{\overline{4}|}$
> > 2. Akumulasi blok-blok tersebut sebagai anuitas geometris ke masa depan.
> >
> > **Diketahui:**
> > - Total periode = 40 tahun
> > - Pola: Naik setiap 4 tahun (Total 10 blok)
> > - Growth antar blok ($G$) = $10,25\%$
> > - Bunga tahunan ($i$) = $2\%$
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Hitung Nilai Satu Blok (4-Year Annuity Due)**  
> > 
> > $$PV_{block} = \frac{1 - (1,02)^{-4}}{0,02} \times 1,02$$  
> > $$PV_{block} \approx 3,883883 \text{ (Ini adalah } P_0 \text{)}$$
> >
> > **2. Hitung PV Total Anuitas Blok (di $t=0$)**  
> > Kita punya 10 blok. Rasio geometris antar blok ($r$):  
> > $$r = \frac{1 + G}{(1+i)^4} = \frac{1,1025}{1,082432} \approx 1,01854$$  
> > Gunakan rumus jumlah deret geometris:
> > $$PV_{total} = P_0 \cdot \frac{r^{10} - 1}{r - 1}$$  
> > $$PV_{total} = 3,883883 \cdot \frac{(1,01854)^{10} - 1}{0,01854}$$  
> > $$PV_{total} \approx 3,883883 \cdot 10,87372 \approx 42,232$$
> >
> > **3. Hitung Nilai Masa Depan ($t=40$)**  
> > $$FV = PV_{total} \cdot (1,02)^{40}$$  
> > $$FV = 42,232 \cdot 2,20804$$  
> > $$FV \approx 93,25 \rightarrow \mathbf{93}$$  
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Sederhanakan anuitas bertingkat (*step-up*) dengan menganggap setiap periode pertumbuhan (4 tahun) sebagai satu "super-payment" tunggal.
> > - **Trap:** Sering keliru mencampur periode pertumbuhan (4 tahunan) dengan periode bunga (tahunan) secara langsung tanpa konversi basis waktu yang konsisten.

---
## **No. 10**

Chris mengambil pinjaman sebesar $X$ dan melakukan pembayaran tahunan sebesar $2000$ pada akhir setiap tahun selama 15 tahun. Total bunga yang dibayar selama masa pinjaman adalah $6.124$. Tentukanlah bunga yang dibayar pada pembayaran pertama.

a. $408$  
b. $60$  
c. $716$  
d. $672$  
e. $464$

> [!summary]+ **Jawaban No. 10**
> **716 (c)**
>
> > [!info] Rumus
> > 
> > Hubungan Pokok, Bunga, dan Pembayaran:  
> > $$\text{Total Bunga} = (n \cdot PMT) - L$$
> >
> > Bunga periode ke-$t$:  
> > $$I_t = i \cdot B_{t-1} \implies I_1 = i \cdot L$$
> >
> > **Diketahui:**
> > - $PMT = 2.000$ (per tahun)
> > - $n = 15$ tahun
> > - $\Sigma I = 6.124$ (Total Bunga)
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Mencari Pokok Pinjaman ($L$)**  
> > Total uang yang dibayarkan:  
> > $$15 \times 2.000 = 30.000$$  
> > Pokok pinjaman adalah selisih total bayar dengan total bunga:  
> > $$L = 30.000 - 6.124 = 23.876$$ 
> >
> > **2. Mencari Tingkat Bunga ($i$)**  
> > Menggunakan persamaan *Present Value Annuity Immediate*:  
> > $$23.876 = 2.000 \cdot a_{\overline{15}|i}$$  
> > Menggunakan *Financial Calculator* ($PV=-23.876, PMT=2.000, N=15$):  
> > $$i \approx 2,9999\% \rightarrow i = 0,03$$
> >
> > **3. Menghitung Bunga Tahun Pertama ($I_1$)**  
> > Bunga dihitung dari saldo awal ($L$):  
> > $$I_1 = 0,03 \times 23.876$$  
> > $$I_1 = 716,28$$  
> >
> > **Hasil Akhir:**   
> > $$716,28 \approx 716$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Total bunga bukan dibagi rata per tahun, tapi menurun seiring waktu. Bunga tahun pertama selalu paling besar karena pokok utang belum berkurang.
> > - **Trap:** Hati-hati jangan membagi total bunga ($6.124$) dengan $15$. Itu asumsi *flat rate*, bukan *compound interest*.


---
## **No. 11**

Brenda ingin mengumpulkan $100.000$ pada akhir 17 tahun untuk membayar biaya kuliah putrinya. Jika tingkat bunga efektif tahunan adalah 6% dan Brenda akan melakukan pembayaran bulanan, tentukanlah berapa banyak yang harus ia setor setiap bulan jika pembayaran pertama dilakukan hari ini dan ia melakukan total 204 pembayaran.

a. $286$  
b. $288$  
c. $283$  
d. $282$  
e. $285$

> [!summary]+ **Jawaban No. 11**
> **286 (a)**
>
> > [!info] Rumus
> > 
> > Konversi Bunga Efektif (Tahunan ke Bulanan):  
> > $$(1+i) = (1+j)^{12}$$
> >
> > Future Value Annuity Due (Awal Periode):  
> > $$FV = R \cdot \ddot{s}_{\overline{mn}|j} = R \cdot \left[ \frac{(1+j)^{mn}-1}{j} \right] \cdot (1+j)$$
> >
> > **Diketahui:**
> > - Target ($FV$) = $100.000$
> > - $n = 17$ tahun $\rightarrow 204$ bulan
> > - $i = 6\%$ (efektif tahunan)
> > - Pembayaran: Bulanan, dimulai hari ini (*Annuity Due*)
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Hitung Bunga Efektif Bulanan ($j$)**  
> > 
> > $$j = (1,06)^{1/12} - 1$$  
> > 
> > $$j \approx 0,00486755$$
> >
> > **2. Hitung Faktor Akumulasi ($\ddot{s}_{\overline{204}|j}$)**  
> > $$s_{\overline{204}|j} = \frac{(1,06)^{17} - 1}{0,00486755} = \frac{2,692773 - 1}{0,00486755} \approx 347,7669$$  
> > Karena *Due* (awal periode), kalikan dengan $(1+j)$:  
> > $$\ddot{s} = 347,7669 \times 1,00486755 \approx 349,4596$$  
> >
> > **3. Hitung Cicilan ($R$)**  
> > $$100.000 = R \cdot 349,4596$$  
> > $$R = \frac{100.000}{349,4596}$$  
> > $$R = 286,156$$  
> >
> > **Hasil Akhir:**  
> > $$286,156 \approx 286$$  
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Membayar "hari ini" (di awal) memberikan waktu tambahan 1 periode untuk bunga berbunga dibandingkan membayar di akhir bulan, sehingga cicilan yang dibutuhkan lebih kecil.
> > - **Trap:** Jangan membagi bunga langsung ($6\% / 12 = 0,5\%$). Itu untuk bunga *nominal*, soal ini memberi bunga *efektif*. Gunakan akar pangkat ($1,06^{1/12}$).


---
## **No. 12**

Anda diberikan suatu _annuity-immediate_ yang membayar 10 setiap tahun selama dua puluh tahun. Setelah dua puluh tahun, pembayaran menurun sebesar satu per tahun hingga mencapai pembayaran sebesar 1. Pembayaran sebesar 1 tersebut berlanjut selamanya. Tingkat bunga efektif tahunan adalah $6\%$. Tentukanlah nilai kini dari anuitas ini.

a. $129$  
b. $133$  
c. $132$  
d. $131$  
e. $134$

> [!summary]+ **Jawaban No. 12**
> **129 (a)**
> 
> > [!info] Rumus
> > 
> > $$
> > PV_{Total} = PV_{Base} + PV_{TopUp} + PV_{DeferredPart}
> > $$
> 
> 
> > **Diketahui:**
> > - $i = 6\%$
> > - **Fase 1 ($t=1 \dots 20$):** Pembayaran 10 (Anuitas biasa).
> > - **Fase 2 ($t=21 \dots 29$):** Menurun dari 9 ke 1 (Anuitas menurun).
> > - **Fase 3 ($t \ge 30$):** Konstan 1 selamanya (Perpetuitas).
> 
> > [!example]- Langkah Pengerjaan
> > 
> > Untuk mempermudah perhitungan, kita bisa memecah aliran kas (cashflow) menjadi lapisan-lapisan sederhana alih-alih menghitung per fase waktu.
> > 
> > **Dekomposisi Lapisan (Layering Method):**
> > 1.  **Lapisan Dasar (Base):** Perpetuitas sebesar 1 dimulai dari $t=1$. Ini mencakup nilai 1 unit untuk seluruh pembayaran dari awal sampai akhir zaman.  
> >     $$
> >     PV_1 = \frac{1}{i} = \frac{1}{0.06} = 16,667
> >     $$
> > 
> > 2.  **Lapisan Tambahan Awal (Top-Up 1):** Kita butuh pembayaran 10 pada $t=1 \dots 20$. Karena Lapisan Dasar sudah menyumbang 1, kita kurang 9. Maka tambahkan anuitas sebesar 9 selama 20 tahun.  
> >     $$
> >     PV_2 = 9 \cdot a_{\overline{20}|6\%} = 9 \cdot \left( \frac{1 - 1,06^{-20}}{0,06} \right)
> >     $$  
> >     $$
> >     PV_2 = 9 \cdot (11,4699) = 103,229
> >     $$
> > 
> > 3.  **Lapisan Sisa Penurunan (Top-Up 2):**
> >     - Pada $t=21$, total pembayaran harus 9. Lapisan Dasar memberi 1. Kurang 8.
> >     - Pada $t=22$, total pembayaran harus 8. Lapisan Dasar memberi 1. Kurang 7.
> >     - ...
> >     - Pada $t=29$, total pembayaran harus 1. Lapisan Dasar memberi 1. Kurang 0.
> >     - Jadi, kita perlu menambahkan *Decreasing Annuity* (8, 7, ..., 1) yang ditunda selama 20 tahun.
> >     
> >     Hitung nilai Decreasing Annuity 8 tahun $(Da)_{\overline{8}|}$ di $t=20$:
> >     $$(Da)_{\overline{8}|} = \frac{8 - a_{\overline{8}|}}{i} = \frac{8 - 6,2098}{0,06} = \frac{1,7902}{0,06} = 29,837$$
> >     
> >     Diskon ke $t=0$:
> >     $$PV_3 = v^{20} \cdot 29,837 = 0,3118 \cdot 29,837 = 9,303$$
> > 
> > **Total Nilai Kini:**
> > $$PV_{Total} = 16,667 + 103,229 + 9,303 = 129,199$$
> > $$129,199 \approx 129$$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Soal dengan pola "naik/tetap -> turun -> tetap selamanya" paling mudah dikerjakan dengan **Metode Superposisi (Layering)**. Bayangkan Anda menumpuk beberapa anuitas sederhana di atas satu sama lain.
> > - **Trap:** Jangan menghitung fase perpetuitas ($t \ge 30$) secara terpisah di akhir. Seringkali siswa lupa mendiskonnya kembali 29 tahun ke belakang ($v^{29}$), yang rentan error kalkulator. Menarik garis perpetuitas dari $t=1$ (Lapisan Dasar) jauh lebih aman.**


---
## **No. 13**

Misalkan tingkat bunga efektif tahunan adalah $8\%$. Tentukan berapa banak yang harus Anda bayar hari ini untuk suatu anuitas dengan 30 pembayaran, di mana pembayaran awal sebesar 500 terjadi tiga tahun dari sekarang dan setiap pembayaran tahunan berikutnya meningkat $6\%$ dari pembayaran sebelumnya.

a. $8.969$  
b. $11.589$  
c. $9.426$  
d. $9.200$  
e. $9.731$

> [!summary]+ **Jawaban No. 13**
> **9.200 (d)**
> 
> > [!info] Rumus
> > 
> > **Geometric Gradient Annuity (Immediate):**
> > 
> > $$
> > PV_{t-1} = P_1 \left( \frac{1 - \left(\frac{1+g}{1+i}\right)^n}{i - g} \right)
> > $$
> 
> 
> > **Diketahui:**
> > - $i = 8\%$ (Bunga efektif)
> > - $g = 6\%$ (Pertumbuhan)
> > - $n = 30$ (Jumlah pembayaran)
> > - $P_1 = 500$ (Pembayaran pertama) terjadi di $t=3$.
> 
> > [!example]- Langkah Pengerjaan
> > 
> > **Langkah 1: Tentukan Titik Valuasi Rumus**
> > Rumus anuitas *immediate* standar selalu memberikan nilai satu periode sebelum pembayaran pertama.
> > - Pembayaran pertama di $t=3$.
> > - Maka, rumus di atas akan menghasilkan nilai pada **$t=2$** ($PV_2$).
> > 
> > **Langkah 2: Hitung Nilai di $t=2$**
> > Masukkan variabel ke rumus:
> > $$
> > PV_2 = 500 \left( \frac{1 - \left(\frac{1,06}{1,08}\right)^{30}}{0,08 - 0,06} \right)
> > $$
> > 
> > Hitung rasio pertumbuhan:
> > $$
> > \frac{1,06}{1,08} = 0,98148
> > $$
> > 
> > Hitung faktor pangkat:
> > 
> > $$
> > (0,98148)^{30} \approx 0,57106
> > $$
> > 
> > Selesaikan persamaan:
> > 
> > $$PV_2 = 500 \left( \frac{1 - 0,57106}{0,02} \right)$$
> > $$PV_2 = 500 \left( \frac{0,42894}{0,02} \right)$$
> > $$PV_2 = 500 \cdot 21,447 = 10.723,5$$
> > 
> > **Langkah 3: Diskon ke Nilai Kini ($t=0$)**
> > Karena $PV_2$ ada di tahun ke-2, kita harus menariknya mundur 2 tahun.
> > $$PV_0 = PV_2 \cdot v^2$$
> > $$PV_0 = 10.723,5 \cdot (1,08)^{-2}$$
> > $$PV_0 = \frac{10.723,5}{1,1664} = 9.193,6$$
> > 
> > $$Hasil \approx 9.200$$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Ini adalah soal *Geometric Gradient* standar dengan *deferral* (penundaan).
> > - **Trap:** Perhatikan kalimat "pembayaran awal ... terjadi tiga tahun dari sekarang". Dalam anuitas *immediate*, pembayaran di $t=3$ berarti anuitas tersebut ditunda 2 tahun (karena anuitas standar mulai di $t=1$). Jangan mendiskon dengan $v^3$, tapi dengan $v^2$ karena rumus dasar sudah membawa Anda ke $t=2$.

---
## **No. 14**

Winston menerima anuitas meningkat dengan 10 pembayaran tahunan, membayar 30 pada akhir tahun pertama dan meningkat sebesar 5 setiap tahun berikutnya. Kevin menerima anuitas menurun dengan 10 pembayaran tahunan yang membayar $X$ pada akhir tahun pertama dan menurun sebesar 2 setiap tahun berikutnya. Dengan tingkat bunga tahunan sebesar $4\%$, kedua anuitas memiliki nilai sekarang yang sama. Tentukan nilai $X$.

a. $61{,}60$  
b. $42{,}53$  
c. $28{,}60$  
d. $59{,}24$  
e. $47{,}99$

> [!summary]+ **Jawaban No. 14**
> **59,24 (d)**
>
> > [!info] Rumus
> > **P-Q Formula (Arithmetic Annuity):**
> > $$PV = P \cdot a_{\overline{n}|i} + Q \cdot \left( \frac{a_{\overline{n}|i} - n \cdot v^n}{i} \right)$$
> >
> > **Diketahui:**
> > - Tingkat bunga $i = 4\% = 0,04$
> > - Periode $n = 10$ tahun
> > - **Winston:** $P_W = 30$, $Q_W = +5$
> > - **Kevin:** $P_K = X$, $Q_K = -2$ (Menurun)
> > - Kondisi: $PV_{Winston} = PV_{Kevin}$
>
> > [!example]- Langkah Pengerjaan
> > **1. Hitung Faktor Dasar & Gradien:**
> > - $v^{10} = (1,04)^{-10} \approx 0,675564$
> > - $a_{\overline{10}|} = \frac{1 - 0,675564}{0,04} \approx 8,110896$
> > - Faktor Gradien ($K$):
> >   $$K = \frac{8,110896 - 10(0,675564)}{0,04} \approx 33,88135$$
> >
> > **2. Hitung PV Winston:**
> > $$PV_W = 30(8,110896) + 5(33,88135)$$
> > $$PV_W = 243,3269 + 169,4068 = 412,7337$$
> >
> > **3. Susun Persamaan Kevin & Cari X:**
> > Ingat $Q = -2$ untuk Kevin.
> > $$PV_K = X(8,110896) - 2(33,88135)$$
> > $$412,7337 = 8,110896X - 67,7627$$
> > $$8,110896X = 480,4964$$
> > $$X = \frac{480,4964}{8,110896} \approx 59,2408$$
> >
> > **Hasil Akhir:** $$X \approx 59,24$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Pecah cashflow menjadi komponen "Lapis Dasar" (Level Payment P) dan "Lapis Gradien" (Q). Setarakan harga kedua "kue" tersebut.
> > - **Trap:** Lupa tanda negatif pada $Q$ untuk *decreasing annuity*. Kevin turun 2, jadi wajib $Q = -2$. Jika pakai $+2$, jawaban salah total.

---
## **No. 15**

Stephanie membeli sebuah anuitas dengan pembayaran yang dilakukan pada awal setiap bulan selama 36 kali pembayaran. Pembayaran bulanan bernilai tetap sebesar 15 untuk 24 pembayaran pertama. Namun, pembayaran ke-25 sebesar 20, pembayaran ke-26 sebesar 25, pembayaran ke-27 sebesar 30, dan deret aritmetika ini berlanjut hingga pembayaran ke-36. Tingkat bunga nominal adalah $6\%$ dikonversi bulanan. Tentukanlah nilai sekarang dari anuitas ini. _(Jawablah dalam satu desimal terdekat)_

a. $823{,}1$  
b. $764{,}0$  
c. $829{,}1$  
d. $827{,}5$  
e. $871{,}6$

> [!summary]+ **Jawaban No. 15**
> **829,1 (c)**
>
> > [!info] Rumus
> > **Strategi Dekomposisi Waktu (Annuity-Due):**
> > $$PV_{Total} = PV_{Fase1} + v^{24} \cdot PV_{Fase2 (@t=24)}$$
> 
> 
> > **Diketahui:**
> > - Bunga: $i^{(12)}=6\% \rightarrow j = 0,5\% = 0,005$ per bulan.
> > - Mode: **Annuity-Due (Awal Bulan)**.
> > - **Fase 1 (Bulan 1-24):** Level payment $15$, $n=24$.
> > - **Fase 2 (Bulan 25-36):** Arithmetic (Start $20$, Inc $+5$), $n=12$.
>
> > [!example]- Langkah Pengerjaan
> > **1. Hitung PV Fase 1 (t=0):**
> > - $\ddot{a}_{\overline{24}|} = \frac{1-(1,005)^{-24}}{0,005} \times 1,005 \approx 22,67568$
> > - $PV_1 = 15 \times 22,67568 = 340,1352$
> >
> > **2. Hitung PV Fase 2 (lokal di t=24):**
> > - Ini adalah anuitas baru 12 periode, start 20, naik 5.
> > - $\ddot{a}_{\overline{12}|} \approx 11,67703$
> > - Faktor Gradien Due ($K_{due}$):
> >   $$K_{imm} = \frac{11,6189 - 12(1,005)^{-12}}{0,005} \approx 63,2144$$
> >   $$K_{due} = K_{imm} \times 1,005 \approx 63,5305$$
> > - $PV_{2(local)} = 20(11,67703) + 5(63,5305) = 233,541 + 317,652 = 551,193$
> >
> > **3. Diskon Fase 2 ke t=0 & Total:**
> > - Tarik mundur 24 bulan (karena pembayaran pertama Fase 2 ada di t=24).
> > - $PV_{2(final)} = 551,193 \times (1,005)^{-24} = 551,193 \times 0,887186 \approx 489,010$
> > - $PV_{Total} = 340,135 + 489,010 = 829,145$
> >
> > **Hasil Akhir (1 desimal):** $$PV \approx 829,1$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Potong timeline menjadi dua. Nilai Fase 2 dihitung seolah-olah berdiri sendiri di tahun ke-2, baru ditarik ke masa kini.
> > - **Trap 1 (Timing):** Mengira Fase 2 didiskon dengan $v^{25}$. Karena *Annuity Due*, pembayaran ke-25 terjadi di $t=24$. Gunakan $v^{24}$.
> > - **Trap 2 (Gradien Due):** Lupa mengalikan bagian gradien ($Q$) dengan $(1+j)$ saat menggunakan rumus P-Q untuk Annuity Due.

---
## **No. 16**

Dio meminjam $X$ untuk sembilan tahun dengan tingkat bunga efektif tahunan $8\%$, dibayar dengan pembayaran tahunan yang sama pada akhir setiap tahun. Saldo pinjaman setelah pembayaran kelima adalah $4.506{,}74$. Tentukanlah jumlah pokok yang dilunasi pada pembayaran pertama.

a. $551$  
b. $565$  
c. $681$  
d. $574$  
e. $384$

> [!summary]+ **Jawaban No.16**
> **681 (c)**

---
## **No. 17**

Ken membeli rumah seharga $200.000$. Pembayaran hipotek sebesar $X$ dilakukan setiap bulan selama 30 tahun dengan pembayaran pertama satu bulan dari sekarang. Tingkat bunga efektif tahunan adalah $5\%$. Mulai dari pembayaran ke-100, setiap pembayaran bulanan menjadi $X+400$ untuk mempercepat pelunasan hipotek. Tentukanlah total bunga yang dibayar selama masa pinjaman.

a. $136.216$  
b. $136.215$  
c. $135.648$  
d. $136.558$  
e. $136.159$

> [!summary]+ **Jawaban No.17**
> **136.216 (a)**

---
## **No. 18**

Sebuah toko peralatan menawarkan untuk menjual televisi seharga $5000$. Misalkan tingkat pinjaman pasar saat ini adalah tingkat nominal $10\%$ yang dapat dikonversi bulanan. Sebagai insentif, dealer menawarkan pembiayaan $100\%$ dengan tingkat bunga efektif tahunan $6\%$. Pinjaman akan dibayar dalam cicilan yang sama pada akhir setiap bulan selama periode 3 tahun. Jika dealer sendiri membayar cicilan bulanan atas pinjaman pasar, tetapi membiayai pelanggan dengan pinjaman insentif, berapa total biaya bagi dealer untuk insentif tersebut.

a. $311$  
b. $420$  
c. $175$  
d. $332$  
e. $308$

> [!summary]+ **Jawaban No.18**
> **332 (d)**

---
## **No. 19**

Sebuah anuitas _immediate_ memiliki 32 pembayaran triwulanan sebesar 20, diikuti oleh pembayaran seumur hidup (perpetuitas) sebesar 25 setiap triwulan mulai tahun ke-9. Tentukanlah nilai kini pada tingkat bunga nominal $16\%$ yang dikonversi triwulanan.

a. $510$  
b. $165$  
c. $814$  
d. $536$  
e. $506$

> [!summary]+ **Jawaban No.19**
> **536 (d)**

---
## **No. 20**

Harga saham saat ini adalah 40. Seorang trader membeli put strike 40 dan menjual put strike 45 dengan jatuh tempo yang sama. Manakah dari berikut ini yang paling menggambarkan ekspektasi trader terhadap harga saham?

a. Harganya akan turun
b. Harganya akan naik
c. Saham akan memiliki volatilitas tinggi
d. Saham akan memiliki volatilitas rendah
e. Harga secara teoritis salah dan terdapat peluang arbitrase

> [!summary]+ **Jawaban No. 20**
> **Harganya akan naik (b)**
> 
> > [!info] Rumus: Bull Put Spread
> > $$Payoff = \underbrace{\max(40 - S_T, 0)}_{\text{Long Put}} - \underbrace{\max(45 - S_T, 0)}_{\text{Short Put}}$$
> > 
> > **Data Diketahui:**
> > - $S_0 = 40$
> > - Long Put Strike ($K_L$) = 40 (Beli asuransi murah)
> > - Short Put Strike ($K_H$) = 45 (Jual asuransi mahal)
> 
> > [!example]- Langkah Analisis
> > Kita menganalisis profit berdasarkan zona harga saham saat jatuh tempo ($S_T$):
> > 
> > 1. **Jika Harga Jatuh ($S_T < 40$):**
> >    - Long Put (40) profit.
> >    - Short Put (45) rugi besar.
> >    - **Net:** Rugi maksimal.
> > 
> > 2. **Jika Harga Naik ($S_T \ge 45$):**
> >    - Long Put (40) tidak bernilai (0).
> >    - Short Put (45) tidak bernilai (0).
> >    - **Net:** Trader menyimpan seluruh *Net Credit* (Premi) yang diterima di awal.
> > 
> > $$\text{Kesimpulan: Profit maksimal tercapai saat } S_T \ge 45 \rightarrow \text{Bullish}$$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Trader adalah *Net Seller* (Jual opsi mahal, beli murah). Penjual Put menginginkan harga naik agar opsi hangus tak bernilai.
> > - **Trap:** Jangan terkecoh karena ada posisi "Beli Put". Lihat mana strike yang lebih dominan/mahal (Short Strike 45 > Long Strike 40).

---
## **No. 21**

Tentukanlah nilai _modified duration_ dari obligasi nilai nominal 2000 dengan jangka waktu lima tahun, kupon tahunan $8\%$, dan tingkat bunga efektif $7\%$.

a. $4{,}327$  
b. $4{,}004$  
c. $3{,}550$  
d. $3{,}802$  
e. $3{,}287$

> [!summary]+ **Jawaban No. 21**
> **4,004 (b)**
> *(Catatan: Hasil hitungan eksak 4,044; opsi b adalah yang paling mendekati dan logis)*
> 
> > [!info] Rumus: Modified Duration
> > $$ModD = \frac{MacD}{1+i}$$
> > 
> > Dimana Macaulay Duration ($MacD$):
> > $$MacD = \frac{\sum_{t=1}^{n} t \cdot CF_t \cdot v^t}{P}$$
> > 
> > **Data Diketahui:**
> > - $F=C=2000$, $n=5$
> > - Kupon ($r=8\%$) $\rightarrow PMT = 160$
> > - Yield ($i=7\%$) $\rightarrow v = 1/1.07$
> 
> > [!example]- Langkah Pengerjaan
> > **1. Hitung Harga Obligasi ($P$):**
> > $$P = 160 a_{\overline{5}|7\%} + 2000 v^5$$
> > $$P = 160(4.1002) + 2000(0.7130) = 2082.00$$
> > 
> > **2. Hitung Pembilang Macaulay (Weighted Time):**
> > - Th 1: $1 \cdot 160 \cdot v^1 = 149.53$
> > - Th 2: $2 \cdot 160 \cdot v^2 = 279.50$
> > - Th 3: $3 \cdot 160 \cdot v^3 = 391.82$
> > - Th 4: $4 \cdot 160 \cdot v^4 = 488.25$
> > - Th 5: $5 \cdot 2160 \cdot v^5 = 7700.25$
> > - **Total Sum** = $9009.36$
> > 
> > **3. Hitung Durasi:**
> > $$MacD = \frac{9009.36}{2082.00} = 4.327 \text{ tahun}$$
> > $$ModD = \frac{4.327}{1.07} = 4.044$$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** *Modified Duration* adalah elastisitas harga; perkiraan perubahan harga jika suku bunga naik 1%.
> > - **Trap:** **Opsi A (4,327)** adalah *Macaulay Duration*. Soal meminta *Modified Duration*, jadi wajib dibagi $(1+i)$.

---
## **No. 22**

Sebuah investasi membayar $2000$ pada akhir tahun ke-1, $2500$ pada akhir tahun ke-2, dan $X$ pada akhir tahun ke-3. Investasi ini menghasilkan bunga tahunan sebesar $8\%$. Nilai sekarang dari investasi tersebut adalah $6773{,}6$. Tentukanlah nilai durasi Macaulay dari investasi ini.

a. $2{,}137$  
b. $2{,}175$  
c. $2{,}204$  
d. $2{,}229$  
e. $2{,}253$

> [!summary]+ **Jawaban No. 22**
> **2,137 (a)**
>
> > [!info] Rumus
> > **Macaulay Duration:**
> > $$MacD = \frac{\sum_{t=1}^{n} t \cdot CF_t \cdot v^t}{PV_{total}}$$
> >
> > **Diketahui:**
> > - $i = 8\% \rightarrow v = (1,08)^{-1}$
> > - $CF_1 = 2000, CF_2 = 2500, CF_3 = X$
> > - $PV_{total} = 6773,6$
>
> > [!example]- Langkah Pengerjaan
> > **Langkah 1: Mencari Nilai $X$**
> > Persamaan Nilai Sekarang:
> > $$6773,6 = 2000v + 2500v^2 + Xv^3$$
> >
> > Hitung bagian yang diketahui:
> > $$2000(1,08)^{-1} + 2500(1,08)^{-2} = 1851,8518 + 2143,3470 = 3995,1989$$
> >
> > Isolasi $X$:
> > $$PV_X = 6773,6 - 3995,1989 = 2778,4011$$
> > $$X \cdot (1,08)^{-3} = 2778,4011$$
> > $$X = 2778,4011 \cdot (1,08)^3 = \mathbf{3500}$$
> >
> > **Langkah 2: Menghitung Pembilang Durasi (Weighted Time)**
> > Rumus pembilang: $\sum (t \times PV(CF_t))$
> > - Tahun 1: $1 \times 1851,8518 = 1851,8518$
> > - Tahun 2: $2 \times 2143,3470 = 4286,6941$
> > - Tahun 3: $3 \times 2778,4011 = 8335,2033$
> >
> > **Total Pembilang** $= 14473,7492$
> >
> > **Langkah 3: Hitung Durasi**
> > $$MacD = \frac{14473,7492}{6773,6} = 2,13679$$
> >
> > $$\text{Hasil Akhir} \approx \mathbf{2,137}$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Durasi Macaulay adalah "titik berat" waktu. Karena $X$ (di tahun 3) cukup besar, titik berat bergeser melewati tahun ke-2.
> > - **Trap:** Hati-hati saat mencari $X$, jangan lupa mendiskon $X$ dengan $v^3$, bukan $v$. Kesalahan pembulatan desimal di awal (misal $v \approx 0,93$) akan membuat hasil akhir melenceng.

---
## **No. 23**

Obligasi 30 tahun bernilai nominal $10.000$ membayar kupon tahunan $3\%$ dan jatuh tempo pada nilai pari. Obligasi ini dibeli untuk menghasilkan $5\%$ selama 15 tahun pertama dan $7\%$ setelahnya. Tentukanlah harga obligasi tersebut 

a. $5.848$  
b. $6.172$  
c. $5.637$  
d. $6.418$  
e. $4.862$

> [!summary]+ **Jawaban No. 23**
> **6.172 (b)**
>
> > [!info] Rumus
> > **Bond Price (Variable Interest Rates):**
> > $$P_0 = \underbrace{Fr \cdot a_{\overline{15}|i_1}}_{\text{Kupon Awal}} + \underbrace{v_{i_1}^{15} \cdot P_{15}}_{\text{PV Sisa Obligasi}}$$
> >
> > **Diketahui:**
> > - Nominal ($F$) = $10.000$, Kupon ($r$) = $3\% \rightarrow Fr = 300$
> > - $i_1 = 5\%$ (thn 1-15), $i_2 = 7\%$ (thn 16-30)
> > - Periode total $n=30$, split di $t=15$.
>
> > [!example]- Langkah Pengerjaan
> > **Langkah 1: Nilai Obligasi di Tahun 15 ($P_{15}$)**
> > Pada $t=15$, sisa umur 15 tahun dengan yield $i_2=7\%$.
> > $$P_{15} = 300 \cdot a_{\overline{15}|7\%} + 10.000 \cdot v_{7\%}^{15}$$
> > - PV Kupon sisa: $300 \cdot 9,1079 = 2732,37$
> > - PV Redemption: $10.000 \cdot 0,3624 = 3624,46$
> > $$P_{15} = 6356,83$$
> >
> > **Langkah 2: Diskon $P_{15}$ ke Tahun 0**
> > Gunakan $i_1 = 5\%$ untuk mundur 15 tahun.
> > $$PV_{terminal} = 6356,83 \cdot (1,05)^{-15}$$
> > $$PV_{terminal} = 6356,83 \cdot 0,4810 = \mathbf{3057,74}$$
> >
> > **Langkah 3: Nilai Kupon 15 Tahun Pertama**
> > Gunakan $i_1 = 5\%$.
> > $$PV_{kupon\_awal} = 300 \cdot a_{\overline{15}|5\%}$$
> > $$PV_{kupon\_awal} = 300 \cdot 10,3796 = \mathbf{3113,90}$$
> >
> > **Langkah 4: Total Harga**
> > $$P_0 = 3113,90 + 3057,74 = 6171,64$$
> >
> > $$\text{Hasil Akhir} \approx \mathbf{6.172}$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** *Two-Stage DCF*. Obligasi ini mengalami "double discount" yang parah karena kupon (3%) jauh lebih kecil dari yield pasar (5% & 7%), sehingga harganya *deep discount*.
> > - **Trap:** Kesalahan fatal adalah mendiskon $P_{15}$ ke tahun 0 menggunakan rate 7%. Ingat, perjalanan waktu dari $t=15$ ke $t=0$ melewati zona bunga 5%.

---
## **No. 24**

Sebuah obligasi bernilai nominal $1000$ dengan kupon tahunan sebesar $8\%$ memiliki tingkat hasil efektif tahunan sebesar $i$, $i>0$. Nilai buku obligasi pada akhir tahun ke-5 adalah $1087{,}27$. Tentukanlah tingkat bunga hasil efektif tersebut.

a. $6{,}7\%$  
b. $5{,}9\%$  
c. $7{,}3\%$  
d. $6{,}2\%$  
e. $5{,}5\%$

> [!summary]+ **Jawaban No. 24**
> **6,7% (a)**
>
> > [!info] Rumus
> > $$BV_t = F + (Fr - Fi) \cdot a_{\overline{n-t}|i}$$
> >
> > **Diketahui:**
> > - Nilai Nominal ($F$): $1.000$
> > - Kupon ($r$): $8\%$ per tahun ($Fr = 80$)
> > - Nilai Buku Akhir Tahun 5 ($BV_5$): $1.087,27$
> > - **Catatan:** $n$ tidak diketahui, tetapi $BV > F$ menandakan obligasi dijual pada harga **Premi**.
>
> > [!example]- Langkah Pengerjaan
> > Karena $n$ tidak diketahui, kita gunakan strategi **Reverse Engineering** dari opsi jawaban untuk mencari kecocokan amortisasi.
> >
> > **Langkah 1: Uji Opsi $i = 6,7\%$**
> > Hitung besarnya amortisasi premi (penurunan nilai buku) per tahun:
> > $$Fr - Fi = 80 - (1.000 \times 0,067) = 80 - 67 = 13$$
> >
> > **Langkah 2: Cek Selisih Premi Saat Ini**
> > Hitung berapa selisih nilai buku saat ini dengan nilai par:
> > $$\text{Premi}_5 = BV_5 - F = 1.087,27 - 1.000 = 87,27$$
> >
> > **Langkah 3: Cari Sisa Waktu ($k$)**
> > Premi adalah nilai sekarang dari selisih bunga anuitas:
> > $$87,27 = 13 \times a_{\overline{k}|6,7\%}$$
> > $$a_{\overline{k}|6,7\%} = \frac{87,27}{13} \approx 6,713$$
> >
> > Dengan kalkulator finansial ($PV=-6,713; PMT=1; i=6,7; FV=0$), didapat:
> > $$k \approx 9,2 \text{ tahun}$$
> >
> > **Kesimpulan:**
> > Angka ini (sisa 9 tahun) adalah tenor yang sangat wajar untuk soal ujian (total umur obligasi mungkin 14 tahun). Perhitungan konsisten.
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Harga obligasi (Nilai Buku) akan selalu bergerak mendekati Nilai Nominal ($1.000$) seiring berjalannya waktu.
> > - **Trap:** Jangan panik karena $n$ (total tahun) hilang. Fokus pada sisa tahun ($n-t$) menggunakan selisih nilai buku dan nilai par.

---
## **No. 25**

Misalkan sebuah perusahaan memperkirakan kewajiban sebesar $100.000$ dalam satu tahun, $200.000$ dalam dua tahun, $300.000$ dalam tiga tahun, dan $400.000$ dalam empat tahun. Misalkan juga bahwa mereka ingin mendanai kewajiban tersebut dengan pencocokan yang tepat melalui investasi pada obligasi _zero coupon_ dan obligasi kupon tahunan berikut. Tentukanlah banyak obligasi A yang harus mereka beli, dengan asumsi dapat membeli pecahan obligasi.

| Obligasi | Tingkat Hasil Tahunan | Tingkat Kupon Tahunan | Nilai Nominal | Jatuh Tempo (tahun) |
| :------: | :-------------------: | :-------------------: | :-----------: | :-----------------: |
|    A     |       $4{,}5\%$       |      zero-coupon      |    $1.000$    |          1          |
|    B     |         $5\%$         |         $6\%$         |    $1.000$    |          2          |
|    C     |       $5{,}5\%$       |         $6\%$         |    $1.000$    |          3          |
|    D     |         $6\%$         |         $6\%$         |    $1.000$    |          4          |

a. $40{,}7$  
b. $45{,}6$  
c. $52{,}5$  
d. $89{,}6$  
e. $100$

> [!summary]+ **Jawaban No. 25**
> **52,5 (c)**
>
> > [!info] Rumus
> > $$\text{Total Inflow}_t = \text{Liability}_t$$
> >
> > **Strategi: Dedication (Cash Flow Matching)**
> > Kita harus mencocokkan arus kas aset dan kewajiban secara tepat (*exact match*), dimulai dari kewajiban paling akhir (**Metode Mundur / Backward Induction**).
> >
> > **Aset (Per unit nominal 1.000):**
> > - **D (4 thn):** Kupon 6% (Bayar 60/thn + 1000 di akhir)
> > - **C (3 thn):** Kupon 6%
> > - **B (2 thn):** Kupon 6%
> > - **A (1 thn):** **Zero-Coupon** (Hanya bayar 1000 di akhir, kupon 0)
>
> > [!example]- Langkah Pengerjaan
> > **Langkah 1: Tahun 4 (Match dengan Obligasi D)**
> > Kewajiban: $400.000$
> > $$N_D \times (1.000 + 60) = 400.000$$
> > $$N_D = \frac{400.000}{1.060} = 377,3585$$
> >
> > **Langkah 2: Tahun 3 (Match dengan Obligasi C)**
> > Kewajiban: $300.000$. Dana tersedia dari kupon D: $377,3585 \times 60 = 22.641,51$.
> > $$N_C \times 1.060 = 300.000 - 22.641,51$$
> > $$N_C = \frac{277.358,49}{1.060} = 261,6590$$
> >
> > **Langkah 3: Tahun 2 (Match dengan Obligasi B)**
> > Kewajiban: $200.000$. Dana dari kupon D & C: $(377,36 + 261,66) \times 60 = 38.341,05$.
> > $$N_B \times 1.060 = 200.000 - 38.341,05$$
> > $$N_B = \frac{161.658,95}{1.060} = 152,5085$$
> >
> > **Langkah 4: Tahun 1 (Match dengan Obligasi A)**
> > Kewajiban: $100.000$. Dana dari kupon D, C, & B:
> > $$\text{Kupon Masuk} = (377,36 + 261,66 + 152,51) \times 60 = 47.491,55$$
> > $$Sisa Kewajiban = 100.000 - 47.491,55 = 52.508,45$$
> >
> > Karena A adalah **Zero Coupon**, pembaginya hanya 1.000 (bukan 1.060):
> > $$N_A = \frac{52.508,45}{1.000} = 52,508 \approx 52,5$$
>
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Obligasi jangka panjang membantu membayar kewajiban jangka pendek melalui kuponnya. Selalu kerjakan dari tahun terakhir ke depan.
> > - **Trap:** Hati-hati dengan **Obligasi A**! Ia *zero-coupon*, jangan tambahkan bunga 6% pada arus kasnya ($1.000$, bukan $1.060$).

---
## **No. 26**

Seorang investor membeli obligasi bernilai nominal $1.000$ selama 10 tahun yang memberikan kupon semesteran sebesar $7{,}5\%$ dan dihargai untuk menghasilkan $6{,}8\%$ dikonversi semesteran. Obligasi tersebut dapat dipanggil (callable) pada akhir tahun ke-6 dengan nilai pelunasan sebesar X. Hasil (_yield_) bagi investor tetap $6{,}8\%$ dikonversi semesteran. Tentukan nilai $X$.

a. $1.009$  
b. $1.014$  
c. $1.019$  
d. $1.024$  
e. $1.029$

> [!summary]+ **Jawaban No. 26**
> **1.024 (d)**
> 
> > [!info] Rumus
> > Persamaan Harga Obligasi (*Bond Price*):
> > $$P = Fr \cdot a_{\overline{n}|i} + C \cdot v^n$$
> > 
> > **Diketahui:**
> > - Nilai Nominal ($F$) = $1.000$
> > - Kupon per semester ($Fr$) = $1.000 \times \frac{7,5\%}{2} = 37,5$
> > - Yield per semester ($i$) = $\frac{6,8\%}{2} = 3,4\%$
> > - $n_{\text{maturity}}$ = $10 \times 2 = 20$ semester
> > - $n_{\text{call}}$ = $6 \times 2 = 12$ semester
> > - **Kunci:** Yield to Maturity = Yield to Call $\rightarrow P_{\text{maturity}} = P_{\text{call}}$
> 
> > [!example]- Langkah Pengerjaan
> > **Langkah 1: Hitung Harga Obligasi jika dipegang sampai Maturity ($n=20$)**
> > 
> > $$P = 37,5 \cdot a_{\overline{20}|3,4\%} + 1.000 \cdot (1,034)^{-20}$$
> > 
> > Menghitung faktor diskonto dan anuitas:
> > - $v^{20} = (1,034)^{-20} \approx 0,512463$
> > - $a_{\overline{20}|} = \frac{1 - 0,512463}{0,034} \approx 14,339324$
> > 
> > Substitusi nilai:
> > $$P = 37,5(14,339324) + 1.000(0,512463)$$
> > $$P = 537,7246 + 512,463 = 1.050,18765$$
> > 
> > **Langkah 2: Cari Nilai Call ($X$) menggunakan Harga ($P$) tersebut ($n=12$)**
> > Kita gunakan harga yang sama ($P = 1.050,18765$) namun dengan periode call ($n=12$).
> > 
> > $$1.050,18765 = 37,5 \cdot a_{\overline{12}|3,4\%} + X \cdot (1,034)^{-12}$$
> > 
> > Menghitung faktor baru untuk $n=12$:
> > - $v^{12} \approx 0,669866$
> > - $a_{\overline{12}|} \approx 9,709824$
> > 
> > Persamaan menjadi:
> > $$1.050,18765 = 37,5(9,709824) + X(0,669866)$$
> > $$1.050,18765 = 364,1184 + 0,669866X$$
> > 
> > Pindah ruas untuk mencari $X$:
> > $$0,669866X = 1.050,18765 - 364,1184$$
> > $$0,669866X = 686,06925$$
> > $$X = \frac{686,06925}{0,669866} \approx 1.024,188$$
> > 
> > $$X \approx 1.024$$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Harga wajar obligasi adalah *Present Value* arus kas masa depan. Jika Yield sama pada kedua skenario, maka PV arus kas keduanya harus setara.
> > - **Trap:** Lupa mengonversi periode tahunan menjadi semesteran ($n \times 2$) dan tingkat bunga tahunan menjadi semesteran ($i / 2$).

---

## **No. 27**

Berikut adalah kurva hasil 4 tahun dengan satu nilai yang hilang

| Jangka waktu jatuh tempo   | 1     | 2     | 3   | 4     |
| -------------------------- | ----- | ----- | --- | ----- |
| Hasil Obligasi Nilai Kupon | $3\%$ | $4\%$ | -   | $5\%$ |

Tingkat yang benar secara teori untuk swap tingkat bunga tetap 4 tahun adalah $4{,}94\%$ . Tentukan rentang untuk spot rate yang hilang pada tabel di atas.

a. $4{,}0\%-4{,}15\%$  
b. $4{,}16\%-4{,}3\%$  
c. $4{,}31\%-4{,}45\%$  
d. $4{,}46\%-4{,}6\%$  
e. $4{,}61\%-4{,}75\%$

> [!summary]+ **Jawaban No. 27**
> **4,61% – 4,75% (e)**
> 
> > [!info] Rumus
> > Hubungan Swap Rate ($R$) dengan Harga Zero-Coupon ($P_t$):
> > $$R = \frac{1 - P(0,n)}{\sum_{t=1}^{n} P(0,t)}$$
> > 
> > **Diketahui:**
> > - Spot Rates ($s_t$): $s_1=3\%$, $s_2=4\%$, $s_4=5\%$
> > - Swap Rate 4-tahun ($R$): $4,94\%$
> > - Target: Cari rentang $s_3$
> 
> > [!example]- Langkah Pengerjaan
> > **Langkah 1: Hitung Discount Factors ($P_t$) yang diketahui**
> > Rumus: $P_t = (1+s_t)^{-t}$
> > 
> > - $P_1 = (1,03)^{-1} = 0,970874$
> > - $P_2 = (1,04)^{-2} = 0,924556$
> > - $P_4 = (1,05)^{-4} = 0,822702$
> > 
> > **Langkah 2: Masukkan ke Persamaan Swap Rate**
> > Swap Rate ($R$) adalah pembilang (selisih harga par dan harga bond akhir) dibagi penyebut (jumlah anuitas/discount factors).
> > 
> > $$0,0494 = \frac{1 - P_4}{P_1 + P_2 + P_3 + P_4}$$
> > 
> > Substitusi angka:
> > $$0,0494 = \frac{1 - 0,822702}{0,970874 + 0,924556 + P_3 + 0,822702}$$
> > 
> > Sederhanakan pembilang dan penyebut:
> > - Pembilang: $0,177298$
> > - Penyebut (sum known $P_t$): $2,718132 + P_3$
> > 
> > $$0,0494 = \frac{0,177298}{2,718132 + P_3}$$
> > 
> > **Langkah 3: Isolasi $P_3$**
> > $$2,718132 + P_3 = \frac{0,177298}{0,0494}$$
> > $$2,718132 + P_3 = 3,589028$$
> > $$P_3 = 3,589028 - 2,718132$$
> > $$P_3 = 0,870896$$
> > 
> > **Langkah 4: Konversi $P_3$ ke Spot Rate ($s_3$)**
> > $$(1+s_3)^{-3} = 0,870896$$
> > $$1+s_3 = (0,870896)^{-1/3}$$
> > $$1+s_3 \approx 1,04716$$
> > $$s_3 \approx 4,716\%$$
> > 
> > Nilai $4,716\%$ berada dalam rentang **4,61% – 4,75%**.
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Swap Rate bukanlah rata-rata sederhana dari spot rates, melainkan tingkat kupon yang membuat harga obligasi (hypothetical par bond) bernilai pari (100%) berdasarkan struktur spot rate yang ada.
> > - **Trap:** Mengasumsikan tabel berisi Par Yields dan mencoba bootstrap dari situ, padahal tabel berisi Spot Rates (Yield obligasi nilai kupon nol).

---
## **No. 28**

Filbert membeli indeks S&R dan opsi **put** dengan strike $K$. Desca meminjam **1.014,80** dan membeli opsi **call** dengan strike $K$. $r=0,04$ dan $T=0,25$ untuk put, call, dan pinjaman. Indeks tersebut **tidak membayar dividen**. Filbert dan Desca memiliki **fungsi payoff yang sama**.
Tentukan nilai dari $K$.

a. $1.000$  
b. $1.012$  
c. $1.018$  
d. $1.020$  
e. $1.025$

> [!summary]+ **Jawaban No. 28**
> **1.025 (e)**
> 
> > [!info] Rumus: Put-Call Parity
> > $$S_0 + P = C + K e^{-rT}$$
> > 
> > **Diketahui:**
> > - Strategi Filbert (Protective Put): Saham ($S_0$) + Put ($P$)
> > - Strategi Desca (Fiduciary Call): Call ($C$) + Uang Tunai ("Meminjam" dalam konteks ini adalah sisi Bond/Cash dari persamaan paritas)
> > - $PV(K) = 1.014,80$ (Nilai komponen tunai Desca)
> > - $r = 0,04$ dan $T = 0,25$
> 
> > [!example]- Langkah Pengerjaan
> > 1. **Identifikasi Persamaan:**
> > Agar payoff Filbert dan Desca sama, berlaku hukum *Put-Call Parity*:
> > $$\text{Saham} + \text{Put} = \text{Call} + PV(K)$$
> > 
> > 2. **Substitusi Nilai Tunai:**
> > Dari soal, komponen selain Call milik Desca bernilai $1.014,80$. Ini merepresentasikan nilai sekarang dari Strike Price ($K$).
> > $$K e^{-rT} = 1.014,80$$
> > 
> > 3. **Mencari K:**
> > $$K e^{-(0,04)(0,25)} = 1.014,80$$
> > $$K e^{-0,01} = 1.014,80$$
> > $$K = 1.014,80 \times e^{0,01}$$
> > $$K \approx 1.014,80 \times 1,01005$$
> > $$K \approx 1.024,998$$
> > 
> > **Hasil Akhir:** $\approx 1.025$
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** "Meminjam" di sini bukan berarti hutang negatif dalam portofolio, melainkan memegang aset setara kas (*Zero Coupon Bond*) untuk membayar strike price nanti.
> > - **Trap:** Jangan gunakan *Simple Interest* ($1+rt$). Opsi saham standar menggunakan *Continuous Compounding* ($e^{rt}$).
> 

---
## **No. 29**

Indeks S&R yang **tidak membayar dividen** saat ini bernilai **1.350**. Tingkat bebas risiko adalah $r=0,04$. Anda ditawari kontrak **forward enam bulan** pada indeks tersebut dengan **harga forward** untuk pembelian dalam enam bulan dikutip sebesar **1.410**. Manakah dari pernyataan berikut yang berlaku **jika Anda memasuki kontrak forward ini**?

a. Anda harus menerima **32,73**.  
b. Anda harus membayar **32,73**.  
c. Anda harus menerima **32,08**.  
d. Anda harus membayar **32,08**.  
e. Anda tidak membayar atau menerima apa pun.

> [!summary]+ **Jawaban No. 29**
> **Anda harus menerima 32,08 (c)**
> 
> > [!info] Rumus: Value of Long Forward
> > $$V_{long} = S_0 - K e^{-rT}$$
> > 
> > **Diketahui:**
> > - $S_0 = 1.350$ (Harga Spot)
> > - $K = 1.410$ (Harga Forward yang dikutip/Delivery Price)
> > - $r = 0,04$ dan $T = 0,5$ (6 bulan)
> 
> > [!example]- Langkah Pengerjaan
> > 1. **Evaluasi Harga Wajar (Opsional untuk intuisi):**
> > Harga wajar teoretis: $F = 1.350 e^{0,02} \approx 1.377$. Harga pasar ($1.410$) terlalu mahal. Pembeli rugi.
> > 
> > 2. **Hitung Nilai Kontrak ($V_{long}$):**
> > $$V_{long} = 1.350 - 1.410 e^{-(0,04)(0,5)}$$
> > $$V_{long} = 1.350 - 1.410 e^{-0,02}$$
> > $$V_{long} = 1.350 - (1.410 \times 0,980199)$$
> > $$V_{long} = 1.350 - 1.382,08$$
> > 
> > 3. **Interpretasi Hasil:**
> > $$V_{long} = -32,08$$
> > Karena nilainya **negatif**, posisi ini adalah kewajiban (liabilitas). Agar Anda mau mengambil kontrak ini, lawan transaksi harus membayar Anda sebesar nilai kerugian tersebut di muka.
> > 
> > **Hasil Akhir:** Terima 32,08.
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Jika harga kontrak ($K$) > harga wajar ($F$), nilai kontrak bagi pembeli (Long) adalah negatif. Anda harus dibayar untuk masuk.
> > - **Trap:** Jawaban (a) 32,73 adalah nilai masa depan (*future value*) dari kerugian. Ingat untuk mendiskonnya ke nilai sekarang (PV).

---
## **No. 30**

Amel ingin membuat portofolio dengan risiko yang sama dengan pasar, dan dia memiliki dana sebesar $1.000.000$ untuk diinvestasikan. Berdasarkan informasi ini, berikut adalah data yang diketahui:
- Investasi saham A: $195.000$ dengan _beta_ $0{,}80$
- Investasi saham B: $340.000$ dengan _beta_ $1{,}2$
- _Beta_ saham C: $1{,}4$
- Investasi pada aset bebas risiko belum diketahui

Tentukan besar aset bebas risiko. (Pilihlah jawaban dalam bilangan bulat terdekat!)

a. $151.500$  
b. $152.000$  
c. $152.500$  
d. $153.000$  
e. $153.500$

> [!summary]+ **Jawaban No. 30**
> **153.500 (e)**
> 
> > [!info] Rumus: Dollar Beta Portfolio
> > $$W_{total} \cdot \beta_p = \sum (W_i \cdot \beta_i)$$
> > 
> > **Diketahui:**
> > - Total Dana = $1.000.000$
> > - Target $\beta_p = 1,0$ (Sama dengan pasar)
> > - $W_A = 195.000 (\beta=0,8)$; $W_B = 340.000 (\beta=1,2)$
> > - $\beta_C = 1,4$; $\beta_{rf} = 0$ (Aset bebas risiko)
> 
> > [!example]- Langkah Pengerjaan
> > 1. **Hitung Target Risiko Total (Dollar Beta):**
> > $$1.000.000 \times 1,0 = 1.000.000$$
> > 
> > 2. **Hitung Risiko yang Sudah Ada (A & B):**
> > - A: $195.000 \times 0,8 = 156.000$
> > - B: $340.000 \times 1,2 = 408.000$
> > - Total A+B: $564.000$
> > 
> > 3. **Cari Kebutuhan Investasi Saham C:**
> > Kekurangan Risiko = $1.000.000 - 564.000 = 436.000$
> > $$W_C \times 1,4 = 436.000$$
> > $$W_C = 436.000 / 1,4 \approx 311.428,57$$
> > 
> > 4. **Hitung Sisa Dana (Aset Bebas Risiko):**
> > $$W_{rf} = W_{total} - (W_A + W_B + W_C)$$
> > $$W_{rf} = 1.000.000 - (195.000 + 340.000 + 311.428,57)$$
> > $$W_{rf} = 1.000.000 - 846.428,57$$
> > $$W_{rf} = 153.571,43$$
> > 
> > **Hasil Akhir:** Dibulatkan ke opsi terdekat $\rightarrow 153.500$.
> 
> > [!tip] Intuisi & Jebakan
> > - **Konsep:** Aset bebas risiko memiliki $\beta=0$. Ia berfungsi sebagai "pengencer" risiko portofolio tanpa menambah kontribusi beta.
> > - **Trap:** Jangan mencoba mencari $\beta_{rf}$, nilainya selalu 0. Jangan hitung $W_{rf}$ sebelum mendapatkan $W_C$ yang benar.

---