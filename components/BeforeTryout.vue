<template>
  <div
    class="container my-10 w-fit mx-auto px-4 lg:px-20 py-8 bg-gray-50 lg:shadow-xl"
  >
    <h2 class="text-2xl font-bold my-4">Petunjuk Menjalankan Latihan Tes</h2>
    <h2 class="text-2xl text-red-500 font-bold my-4">
      Soal hanya bisa dikerjakan satu kali setelah klik setuju & mulai
    </h2>
    <div class="border border-black p-4 rounded max-w-fit">
      <h2 class="text-xl">Jumlah Soal : 100 soal</h2>
      <h2 class="text-xl">Waktu : 1 Jam 40 Menit</h2>
    </div>
    <ol>
      <li class="py-2">
        <strong>1. Bagian Soal</strong>
        <ol>
          <li class="p-2 border rounded">
            <img
              src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/soal"
              alt="contoh-soal"
            />
          </li>
          <li class="my-2">
            Klik/pilih jawaban yang menurut anda benar seperti dalam contoh
            (pilihan a),lalu klik tombol Next untuk menyimpan jawaban yang anda
            pilih.
          </li>
        </ol>
      </li>
      <li class="py-2">
        <strong>2. Bagian Navigasi</strong>
        <ol>
          <li class="p-2 border rounded">
            <img
              src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/nav-soal.png"
              alt="navigasi soal"
            />
          </li>
          <li>
            Gunakan navigasi soal untuk berpindah soal ke nomer soal yang anda
            inginkan. Warna biru merepresentasikan nomer soal yang sedang
            tampil,warna hijau merepresentasikan nomer soal yang sudah
            di-isi,jika soal belum di-jawab maka tidak ada warna/transparan.
          </li>
        </ol>
      </li>
      <li class="py-2">
        <strong>3. Tombol Next,Prev,dan Submit</strong>
        <ol>
          <li class="p-2 border rounded">
            <img
              src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/button-submit"
              alt="button"
            />
          </li>
          <li>
            Jika anda telah mencapai halaman terakhir soal,maka tombol next akan
            berubah menjadi Submit,gunakan tombol sumbit tersebut untuk
            men-submit jawaban jika anda sudah yakin dengan jawaban anda.
          </li>
        </ol>
      </li>
    </ol>
    <div>
      <nuxt-link :to="url"
        ><button
          @click="handleAccept"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Setuju & Mulai
        </button></nuxt-link
      >

      <nuxt-link to="/"
        ><button
          @click="handleCancel"
          class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cancel
        </button></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agreements: '',
      url: `/tryout/${this.$route.params.id}/start`,
    }
  },
  methods: {
    handleCancel() {
      localStorage.removeItem('token')
    },
    handleAccept() {
      localStorage.removeItem('currentQuestion')
      localStorage.removeItem('answers')
    },
  },
}
</script>

<style scoped></style>
