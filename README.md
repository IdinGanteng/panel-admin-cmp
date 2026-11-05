# Konter HP — Inventory & POS (Vite + React)

## Jalankan
```bash
npm install
npm run dev
```

Lalu buka URL Vite yang tampil, biasanya `http://localhost:5173`.

## Fitur frontend
- Dashboard inventory
- Inventory CRUD: tambah, edit, hapus
- Pencarian dan filter kategori
- Kasir/POS dengan keranjang
- Checkout mengurangi stok
- Laporan nilai persediaan
- Responsive desktop/mobile
- Data demo 41 HP + beberapa kategori aksesoris
- LocalStorage sebagai penyimpanan frontend sementara

## Catatan
Frontend ini belum memakai backend/API. Untuk production, CRUD sebaiknya dihubungkan ke PHP/MySQL atau API lain. Struktur data dibuat kompatibel dengan skema JSON inventory/POS sebelumnya.
