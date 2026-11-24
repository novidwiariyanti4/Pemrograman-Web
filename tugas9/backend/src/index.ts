import { Hono } from 'hono'

//Membuat instance aplikasi Hono untuk mendaftarkan route
const app = new Hono()

interface InventarisItem {
  id: string
  nama: string
  kategori: string
  jumlah: number
  kondisi: string
  lokasi: string
}

// Data awal inventaris lab di memori (komputer, proyektor, switch, router)
let inventarisLab: InventarisItem[] = [
  {
    id: 'INV-001',
    nama: 'Komputer Lab Jaringan 01',
    kategori: 'komputer',
    jumlah: 30,
    kondisi: 'baik',
    lokasi: 'Lab Komputer 1',
  },
  {
    id: 'INV-002',
    nama: 'Proyektor Epson EB-X500',
    kategori: 'proyektor',
    jumlah: 2,
    kondisi: 'baik',
    lokasi: 'Lab Komputer 1',
  },
  {
    id: 'INV-003',
    nama: 'Switch Cisco Catalyst 24-Port',
    kategori: 'switch',
    jumlah: 4,
    kondisi: 'baik',
    lokasi: 'Rack Jaringan A',
  },
  {
    id: 'INV-004',
    nama: 'Router MikroTik RB4011',
    kategori: 'router',
    jumlah: 3,
    kondisi: 'perlu cek',
    lokasi: 'Rack Jaringan A',
  },
]

app.get('/', (c) => {
  return c.text('API Inventaris Laboratorium - Hono.js Aktif!')
})

// 1. GET /api/inventaris -> Daftar semua barang (mendukung filter ?kategori=...)
app.get('/api/inventaris', (c) => {
  const kategoriFilter = c.req.query('kategori') // Ambil query string dari URL

  if (kategoriFilter) {
    const hasil = inventarisLab.filter(
      (item) => item.kategori.toLowerCase() === kategoriFilter.toLowerCase()
    )
    return c.json({ data: hasil, total: hasil.length }, 200)
  }

  return c.json({ data: inventarisLab, total: inventarisLab.length }, 200)
})

// 2. GET /api/inventaris/:id -> Detail satu barang berdasarkan path param :id
app.get('/api/inventaris/:id', (c) => {
  const id = c.req.param('id') // Ambil parameter dinamis ':id' dari URL[cite: 1]
  const barang = inventarisLab.find((item) => item.id === id)

  if (!barang) {
    return c.json({ error: `Barang dengan ID '${id}' tidak ditemukan` }, 404)
  }

  return c.json({ data: barang }, 200)
})

// 3. POST /api/inventaris -> Tambah barang baru ke koleksi inventaris[cite: 1]
app.post('/api/inventaris', async (c) => {
  try {
    const body = await c.req.json() // Parse payload JSON dari body request[cite: 1]

    if (!body.id || !body.nama || !body.kategori || body.jumlah === undefined) {
      return c.json(
        { error: 'Data tidak lengkap. Wajib mengisi: id, nama, kategori, jumlah' },
        400
      )
    }

    const sudahAda = inventarisLab.some((item) => item.id === body.id)
    if (sudahAda) {
      return c.json({ error: `Barang dengan ID '${body.id}' sudah terdaftar` }, 400)
    }

    const itemBaru: InventarisItem = {
      id: String(body.id),
      nama: String(body.nama),
      kategori: String(body.kategori),
      jumlah: Number(body.jumlah),
      kondisi: body.kondisi ? String(body.kondisi) : 'baik',
      lokasi: body.lokasi ? String(body.lokasi) : 'Laboratorium Teknik Informatika',
    }

    inventarisLab.push(itemBaru)

    return c.json(
      { pesan: 'Berhasil menambahkan barang inventaris baru', data: itemBaru },
      201 // Status 201 = Created untuk data baru[cite: 1]
    )
  } catch {
    return c.json({ error: 'Format JSON pada body request tidak valid' }, 400)
  }
})

export default app