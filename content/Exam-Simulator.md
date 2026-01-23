---
title: "CF1 Practice Quiz"
date: 2026-01-23
tags:
  - exam-simulator
  - cf1
  - quiz
---

# CF1 Interactive Practice Quiz

Welcome to the CF1 practice quiz! This interactive simulator allows you to:
- ✅ Test your knowledge with real exam-style questions
- 💡 Get hints when you need them
- 📚 See detailed explanations for each answer

## Instructions
1. Read each question carefully
2. Click on "Show Hint" if you need a clue
3. Select your answer by clicking on one of the options
4. Instant feedback will show whether you're correct
5. Review the explanation to understand the concept

---

<div id="cf1-quiz-widget"></div>

<script type="application/json" data-quiz-id="cf1-quiz-widget">
{
  "questions": [
    {
      "question": "Melalui suatu perjanjian bisnis, Pak Richard memberikan modal sebesar $X$ sekarang. Pak Derry akan memberikan bagi hasil selama 5 tahun ke depan. Manakah pola pembayaran berikut yang memberikan IRR (Internal Rate of Return) terbesar bagi Pak Richard?",
      "answerOptions": [
        {
          "text": "0, 100, 100, 100, dan 0 pada setiap akhir tahun",
          "rationale": "Pola ini tidak optimal karena ada dua tahun tanpa pembayaran (tahun 1 dan 5), yang menurunkan IRR karena modal terikat lebih lama tanpa imbal hasil.",
          "isCorrect": false
        },
        {
          "text": "60, 60, 60, 60, dan 60 pada setiap akhir tahun",
          "rationale": "Pola pembayaran yang konstan dan merata ini memberikan aliran kas yang stabil, namun tidak memaksimalkan IRR karena tidak mengutamakan pembayaran di awal periode.",
          "isCorrect": false
        },
        {
          "text": "50, 60, 80, 60, dan 50 pada setiap akhir tahun",
          "rationale": "Pola ini memiliki pembayaran terbesar di tahun ke-3 (80), yang terlalu lambat untuk memaksimalkan IRR.",
          "isCorrect": false
        },
        {
          "text": "75, 75, 75, 75, dan 0 pada setiap akhir tahun",
          "rationale": "Meskipun tidak ada pembayaran di tahun terakhir, pola ini memberikan pembayaran yang lebih besar (75) di 4 tahun pertama dibandingkan opsi lain, yang tidak cukup untuk mengalahkan pola dengan konsentrasi pembayaran di awal.",
          "isCorrect": false
        },
        {
          "text": "20, 100, 100, 40, dan 40 pada setiap akhir tahun",
          "rationale": "✅ <strong>Jawaban Benar!</strong><br><br>Pola ini memberikan IRR terbesar karena mengkonsentrasikan pembayaran besar (100) di tahun ke-2 dan ke-3, yaitu periode awal-tengah. Dalam perhitungan NPV dan IRR, pembayaran yang diterima lebih awal memiliki <em>present value</em> yang lebih tinggi. Meskipun pembayaran tahun ke-1 hanya 20, kompensasi dari pembayaran 100+100 di tahun 2-3 memberikan return yang lebih tinggi dibandingkan pola lain yang lebih merata atau terlambat.",
          "isCorrect": true
        }
      ],
      "hint": "IRR (Internal Rate of Return) lebih tinggi ketika pembayaran besar diterima lebih awal. Bandingkan <em>timing</em> dari pembayaran terbesar di setiap opsi."
    },
    {
      "question": "Diketahui <em>force of interest</em> pada waktu $t$ (dalam tahun) adalah: $\\delta_t = \\dfrac{t^3}{100}$. Jika nilai akumulasi setelah 3 tahun adalah 1, tentukan nilai investasi mula-mula.",
      "answerOptions": [
        {
          "text": "0,76",
          "rationale": "Nilai ini terlalu rendah. Periksa kembali integral dari force of interest.",
          "isCorrect": false
        },
        {
          "text": "0,78",
          "rationale": "Hampir benar, namun masih ada kesalahan dalam perhitungan integral atau eksponensial.",
          "isCorrect": false
        },
        {
          "text": "0,80",
          "rationale": "✅ <strong>Jawaban Benar!</strong><br><br>Menggunakan rumus: $A(t) = A(0) \\cdot e^{\\int_0^t \\delta_s \\, ds}$<br><br>Hitung integral: $\\int_0^3 \\frac{s^3}{100} ds = \\frac{1}{100} \\cdot \\frac{s^4}{4}\\Big|_0^3 = \\frac{81}{400} = 0.2025$<br><br>Karena $A(3) = 1$:<br>$1 = A(0) \\cdot e^{0.2025}$<br>$A(0) = e^{-0.2025} \\approx 0.8166 \\approx 0.80$",
          "isCorrect": true
        },
        {
          "text": "0,82",
          "rationale": "Nilai ini terlalu tinggi. Kemungkinan ada kesalahan dalam menghitung batas integral atau evaluasi eksponensial.",
          "isCorrect": false
        },
        {
          "text": "0,84",
          "rationale": "Nilai ini terlalu tinggi, mungkin terjadi kesalahan dalam langkah menghitung $e^{-0.2025}$.",
          "isCorrect": false
        }
      ],
      "hint": "Gunakan rumus akumulasi dengan force of interest: $A(t) = A(0) \\cdot e^{\\int_0^t \\delta_s ds}$. Hitung integral terlebih dahulu, lalu selesaikan untuk $A(0)$."
    },
    {
      "question": "PT Asset Terencana membuat perjanjian investasi dengan Pak Yonas:<br>• Pak Yonas menyetor $2X$ di akhir tahun ke-3<br>• Pak Yonas menyetor $X$ di akhir tahun ke-6<br>• Perusahaan membayar 2.000 di akhir tahun ke-4<br>• Perusahaan membayar 3.000 di akhir tahun ke-8<br>• Tingkat bunga efektif 8%<br><br>Tentukan nilai $X$.",
      "answerOptions": [
        {
          "text": "$X &lt; 1.250$",
          "rationale": "Nilai ini terlalu rendah. Periksa kembali present value dari semua cash flow.",
          "isCorrect": false
        },
        {
          "text": "$1.250 \\le X &lt; 1.300$",
          "rationale": "Masih di bawah nilai yang benar. Pastikan semua faktor diskonto dihitung dengan benar.",
          "isCorrect": false
        },
        {
          "text": "$1.300 \\le X &lt; 1.350$",
          "rationale": "Mendekati, namun belum tepat berdasarkan perhitungan akurat.",
          "isCorrect": false
        },
        {
          "text": "$1.350 \\le X &lt; 1.400$",
          "rationale": "✅ <strong>Jawaban Benar!</strong><br><br>Set up persamaan NPV = 0:<br>$2X \\cdot v^3 + X \\cdot v^6 = 2000 \\cdot v^4 + 3000 \\cdot v^8$<br><br>$v = (1.08)^{-1}$:<br>$2X(0.7938) + X(0.6302) = 2000(0.7350) + 3000(0.5403)$<br>$2.2178X = 3091$<br>$X \\approx 1393.5$",
          "isCorrect": true
        },
        {
          "text": "$X \\ge 1.400$",
          "rationale": "Nilai ini terlalu tinggi. Kemungkinan ada kesalahan dalam menghitung present value factor.",
          "isCorrect": false
        }
      ],
      "hint": "Set up persamaan NPV = 0 dengan menyamakan present value dari semua arus kas masuk dan keluar. Gunakan $v = (1.08)^{-1}$ untuk diskonto."
    }
  ]
}
</script>

<style>
/* Import quiz widget styles - these will be loaded from the compiled CSS */
@import url('/styles/quiz-widget.css');
</style>

<script src="/scripts/quiz-widget.js"></script>

---

## 📌 Additional Resources

- [[📚 Cheat Sheet - CF1|CF1 Cheat Sheet]]
- [[📝 Soal & Pembahasan Ujian|Past Exam Solutions]]
- [[📈Belajar CF1 dari Nol|Study from Scratch]]
