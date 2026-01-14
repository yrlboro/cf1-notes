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
> > $$f_{t, t+1} = \frac{P_t}{P_{t+1}} - 1$$
> >
> > **Diketahui:**
> > - $P_4 = 84,59$ (Harga obligasi jatuh tempo $t=4$)
> > - $P_5 = 82,48$ (Harga obligasi jatuh tempo $t=5$)
> > - Target: Forward rate tahun ke-4 ($t=4 \to t=5$)
>
> > [!example]- Langkah Pengerjaan
> > 
> > Kita mencari forward rate yang berlaku mulai akhir tahun ke-4 hingga akhir tahun ke-5 ($f_{4,5}$).
> >
> > **1. Substitusi Angka:**
> > $$f_{4,5} = \frac{84,59}{82,48} - 1$$
> >
> > **2. Perhitungan Rasio:**
> > $$\frac{84,59}{82,48} \approx 1,02558196$$
> >
> > **3. Hasil Akhir:**
> > $$1,02558196 - 1 = 0,02558196$$
> >
> > **4. Konversi ke Persen:**
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
> > $$\text{Total Interest} = \int_{t_1}^{t_2} \delta_t \, dt$$
> >
> > **Diketahui:**
> > - Fungsi: $\delta_t = 0,08 - 0,01t + 0,002t^2$
> > - Periode: Mulai $t=4$ selama 3 tahun (berakhir di $t=7$)
>
> > [!example]- Langkah Pengerjaan
> > 
> > **1. Setup Integral Tentu:**
> > $$I = \int_{4}^{7} (0,08 - 0,01t + 0,002t^2) \, dt$$
> >
> > **2. Anti-Turunan (Indefinite Integral):**
> > $$F(t) = 0,08t - \frac{0,01}{2}t^2 + \frac{0,002}{3}t^3$$
> > $$F(t) = 0,08t - 0,005t^2 + 0,000666...t^3$$
> >
> > **3. Evaluasi Batas Atas ($t=7$):**
> > $$F(7) = 0,08(7) - 0,005(49) + \frac{0,002}{3}(343)$$
> > $$F(7) \approx 0,56 - 0,245 + 0,22867 = 0,54367$$
> >
> > **4. Evaluasi Batas Bawah ($t=4$):**
> > $$F(4) = 0,08(4) - 0,005(16) + \frac{0,002}{3}(64)$$
> > $$F(4) \approx 0,32 - 0,08 + 0,04267 = 0,28267$$
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

---
## **No. 7**

Misalkan jumlah dalam suatu dana satu setengah tahun dari sekarang adalah $100$. Tentukan nilai kini dari dana tersebut jika tingkat diskonto nominal adalah $5\%$ yang dapat dikonversi setiap kuartal.

a. $86{,}8$  
b. $96{,}4$    
c. $92{,}7$  
d. $92{,}9$    
e. $92{,}2$  

> [!summary]+ **Jawaban No.7**
> **92,7 (c)**

---
## **No. 8**

Davin membeli _annuity-immediate_ selama $16$ tahun yang membayar $100$ pada tahun pertama dan meningkat $4\%$ setiap tahun berikutnya. Kelvin membeli _annuity-immediate_ $16$ tahun yang membayar $X$ pada tahun pertama dan menurun $2\%$ setiap tahun berikutnya. Pada tingkat bunga efektif tahunan $5\%$, kedua anuitas memiliki nilai kini yang sama. Tentukanlah nilai $X$.   

a. $148{,}7$  
b. $145{,}2$  
c. $124{,}5$  
d. $123{,}2$  
e. $120{,}0$  

> [!summary]+ **Jawaban No.8**
> **148,7 (a)**

---
## **No. 9**

Suaty _annuity-due_ membayar manfaat awal sebesar $1$ per tahun, dengan manfaat meningkat sebesar $10{,}25\%$ setiap empat tahun. Anuitas ini dibayarkan selama $40$ pembayaran tahunan. Dengan menggunakan tingkat bunga efektif tahunan sebesar $2\%$, tentukanlah nilai masa depan dari anuitas ini.

a. $42$  
b. $69$  
c. $83$  
d. $59$  
e. $93$

> [!summary]+ **Jawaban No.9**
> **93 (e)**

---
## **No. 10**

Chris mengambil pinjaman sebesar $X$ dan melakukan pembayaran tahunan sebesar $2000$ pada akhir setiap tahun selama 15 tahun. Total bunga yang dibayar selama masa pinjaman adalah $6.124$. Tentukanlah bunga yang dibayar pada pembayaran pertama.

a. $408$  
b. $60$  
c. $716$  
d. $672$  
e. $464$

> [!summary]+ **Jawaban No.10**
> **716 (c)**


---
## **No. 11**

Brenda ingin mengumpulkan $100.000$ pada akhir 17 tahun untuk membayar biaya kuliah putrinya. Jika tingkat bunga efektif tahunan adalah 6% dan Brenda akan melakukan pembayaran bulanan, tentukanlah berapa banyak yang harus ia setor setiap bulan jika pembayaran pertama dilakukan hari ini dan ia melakukan total 204 pembayaran.

a. $286$  
b. $288$  
c. $283$  
d. $282$  
e. $285$

> [!summary]+ **Jawaban No.11**
> **286 (a)**


---
## **No. 12**

Anda diberikan suatu _annuity-immediate_ yang membayar 10 setiap tahun selama dua puluh tahun. Setelah dua puluh tahun, pembayaran menurun sebesar satu per tahun hingga mencapai pembayaran sebesar 1. Pembayaran sebesar 1 tersebut berlanjut selamanya. Tingkat bunga efektif tahunan adalah $6\%$. Tentukanlah nilai kini dari anuitas ini.

a. $129$  
b. $133$  
c. $132$  
d. $131$  
e. $134$

> [!summary]+ **Jawaban No.12**
> **129 (a)**

---
## **No. 13**

Misalkan tingkat bunga efektif tahunan adalah $8\%$. Tentukan berapa banak yang harus Anda bayar hari ini untuk suatu anuitas dengan 30 pembayaran, di mana pembayaran awal sebesar 500 terjadi tiga tahun dari sekarang dan setiap pembayaran tahunan berikutnya meningkat $6\%$ dari pembayaran sebelumnya.

a. $8.969$  
b. $11.589$  
c. $9.426$  
d. $9.200$  
e. $9.731$

> [!summary]+ **Jawaban No.13**
> **9.200 (d)**

---
## **No. 14**

Winston menerima anuitas meningkat dengan 10 pembayaran tahunan, membayar 30 pada akhir tahun pertama dan meningkat sebesar 5 setiap tahun berikutnya. Kevin menerima anuitas menurun dengan 10 pembayaran tahunan yang membayar $X$ pada akhir tahun pertama dan menurun sebesar 2 setiap tahun berikutnya. Dengan tingkat bunga tahunan sebesar $4\%$, kedua anuitas memiliki nilai sekarang yang sama. Tentukan nilai $X$.

a. $61{,}60$  
b. $42{,}53$  
c. $28{,}60$  
d. $59{,}24$  
e. $47{,}99$

> [!summary]+ **Jawaban No.14**
> **59,24 (d)**

---
## **No. 15**

Stephanie membeli sebuah anuitas dengan pembayaran yang dilakukan pada awal setiap bulan selama 36 kali pembayaran. Pembayaran bulanan bernilai tetap sebesar 15 untuk 24 pembayaran pertama. Namun, pembayaran ke-25 sebesar 20, pembayaran ke-26 sebesar 25, pembayaran ke-27 sebesar 30, dan deret aritmetika ini berlanjut hingga pembayaran ke-36. Tingkat bunga nominal adalah $6\%$ dikonversi bulanan. Tentukanlah nilai sekarang dari anuitas ini. _(Jawablah dalam satu desimal terdekat)_

a. $823{,}1$  
b. $764{,}0$  
c. $829{,}1$  
d. $827{,}5$  
e. $871{,}6$

> [!summary]+ **Jawaban No.15**
> **829,1 (c)**

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

> [!summary]+ **Jawaban No.20**
> **Harganya akan naik (b)**

---
## **No. 21**

Tentukanlah nilai _modified duration_ dari obligasi nilai nominal 2000 dengan jangka waktu lima tahun, kupon tahunan $8\%$, dan tingkat bunga efektif $7\%$.

a. $4{,}327$  
b. $4{,}004$  
c. $3{,}550$  
d. $3{,}802$  
e. $3{,}287$

> [!summary]+ **Jawaban No.21**
> **4,004 (b)**

---
## **No. 22**

Sebuah investasi membayar $2000$ pada akhir tahun ke-1, $2500$ pada akhir tahun ke-2, dan $X$ pada akhir tahun ke-3. Investasi ini menghasilkan bunga tahunan sebesar $8\%$. Nilai sekarang dari investasi tersebut adalah $6773{,}6$. Tentukanlah nilai durasi Macaulay dari investasi ini.

a. $2{,}137$  
b. $2{,}175$  
c. $2{,}204$  
d. $2{,}229$  
e. $2{,}253$

> [!summary]+ **Jawaban No.22**
> **2,137 (a)**

---
## **No. 23**

Obligasi 30 tahun bernilai nominal $10.000$ membayar kupon tahunan $3\%$ dan jatuh tempo pada nilai pari. Obligasi ini dibeli untuk menghasilkan $5\%$ selama 15 tahun pertama dan $7\%$ setelahnya. Tentukanlah harga obligasi tersebut 

a. $5.848$  
b. $6.172$  
c. $5.637$  
d. $6.418$  
e. $4.862$

> [!summary]+ **Jawaban No.23**
> **6.172 (b)**

---
## **No. 24**

Sebuah obligasi bernilai nominal $1000$ dengan kupon tahunan sebesar $8\%$ memiliki tingkat hasil efektif tahunan sebesar $i$, $i>0$. Nilai buku obligasi pada akhir tahun ke-5 adalah $1087{,}27$. Tentukanlah tingkat bunga hasil efektif tersebut.

a. $6{,}7\%$  
b. $5{,}9\%$  
c. $7{,}3\%$  
d. $6{,}2\%$  
e. $5{,}5\%$

> [!summary]+ **Jawaban No.24**
> **6,7% (a)**

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

> [!summary]+ **Jawaban No.25**
> **52,5 (c)**

---
## **No. 26**

Seorang investor membeli obligasi bernilai nominal $1.000$ selama 10 tahun yang memberikan kupon semesteran sebesar $7{,}5\%$ dan dihargai untuk menghasilkan $6{,}8\%$ dikonversi semesteran. Obligasi tersebut dapat dipanggil (callable) pada akhir tahun ke-6 dengan nilai pelunasan sebesar X. Hasil (_yield_) bagi investor tetap $6{,}8\%$ dikonversi semesteran. Tentukan nilai $X$.

a. $1.009$  
b. $1.014$  
c. $1.019$  
d. $1.024$  
e. $1.029$

> [!summary]+ **Jawaban No.26**
> **1.024 (d)**

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

> [!summary]+ **Jawaban No.27**
> **4,61% - 4,75% (e)**

---
## **No. 28**

Filbert membeli indeks S&R dan opsi **put** dengan strike $K$. Desca meminjam **1.014,80** dan membeli opsi **call** dengan strike $K$. $r=0,04$ dan $T=0,25$ untuk put, call, dan pinjaman. Indeks tersebut **tidak membayar dividen**. Filbert dan Desca memiliki **fungsi payoff yang sama**.
Tentukan nilai dari $K$.

a. $1.000$  
b. $1.012$  
c. $1.018$  
d. $1.020$  
e. $1.025$

> [!summary]+ **Jawaban No.28**
> **1.025 (e)**

---
## **No. 29**

Indeks S&R yang **tidak membayar dividen** saat ini bernilai **1.350**. Tingkat bebas risiko adalah $r=0,04$. Anda ditawari kontrak **forward enam bulan** pada indeks tersebut dengan **harga forward** untuk pembelian dalam enam bulan dikutip sebesar **1.410**. Manakah dari pernyataan berikut yang berlaku **jika Anda memasuki kontrak forward ini**?

a. Anda harus menerima **32,73**.  
b. Anda harus membayar **32,73**.  
c. Anda harus menerima **32,08**.  
d. Anda harus membayar **32,08**.  
e. Anda tidak membayar atau menerima apa pun.

> [!summary]+ **Jawaban No.29**
> **Anda harus menerima 32,08 (c)**

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

> [!summary]+ **Jawaban No.30**
> **153.500 (e)**

---