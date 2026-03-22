```markdown
<%*
const exam = await tp.system.suggester(
  ["A10 - Mat Keuangan", "A20 - Prob & Stat", "A30 - Ekonomi", 
   "A40 - Akuntansi", "A50 - Met Statistika", "A60 - Mat Aktuaria", 
   "A70 - Pemodelan & Teori Risiko"],
  ["A10", "A20", "A30", "A40", "A50", "A60", "A70"]
);
const topic = await tp.system.prompt("Nama topik:");
const diff = await tp.system.suggester(
  ["1 ⭐", "2 ⭐⭐", "3 ⭐⭐⭐", "4 ⭐⭐⭐⭐", "5 ⭐⭐⭐⭐⭐"],
  [1, 2, 3, 4, 5]
);
await tp.file.rename(topic);
-%>
---
type: concept
exam: <% exam %>
topic: <% topic.toLowerCase().replace(/ /g, "-") %>
status: draft
difficulty: <% diff %>
confidence: 0
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - <% exam.toLowerCase() %>
---
# <% topic %>

## Definisi


## Intuisi


## Rumus Penting

| Formula | Keterangan |
|---------|------------|
|  |  |

## Koneksi
- **Fondasi:** 
- **Analogi:** 
- **Aplikasi:** 

## Contoh


## R Code
```r
```
```
```
