<template>
  <div class="container my-10 w-fit mx-auto px-20 py-8 bg-gray-50 lg:shadow-xl">
    <h2 class="text-2xl font-bold mb-4">
      Perjanjian Pengguna (User Agreement) - Mengerjakan Latihan Tes
    </h2>

    <div class="text-base leading-7">
      <p>
        Mohon dibaca dengan seksama sebelum Anda memulai mengerjakan latihan tes
        ini.
      </p>
      <br />

      <!-- Isi dari perjanjian -->
      <ol>
        <li>
          <strong>1. Kewajiban Penggunaan Materi Latihan Tes</strong>
          <ol>
            <li>
              1.1 Dengan menggunakan materi latihan tes yang disediakan, Anda
              setuju untuk mematuhi semua peraturan dan ketentuan yang telah
              ditetapkan oleh penyedia tes.
            </li>
            <li>
              1.2 Materi latihan tes yang diberikan adalah untuk penggunaan
              pribadi dan tujuan pengujian. Tidak diperkenankan mereproduksi,
              mendistribusikan, atau mengunggah ulang materi ini ke platform
              lain tanpa izin tertulis dari penyedia tes.
            </li>
          </ol>
        </li>
        <li>
          <strong>2. Kebijakan Privasi</strong>
          <ol>
            <li>
              2.1 Anda setuju bahwa data yang dihasilkan dari latihan tes ini,
              seperti jawaban, informasi pengguna, dan hasil evaluasi, dapat
              direkam dan digunakan oleh penyedia tes untuk keperluan evaluasi,
              peningkatan, dan penelitian lebih lanjut.
            </li>
            <li>
              2.2 Informasi pribadi Anda akan dijaga kerahasiaannya sesuai
              dengan kebijakan privasi yang berlaku dan tidak akan disebarkan ke
              pihak ketiga tanpa izin Anda, kecuali yang diwajibkan oleh hukum
              atau peraturan yang berlaku.
            </li>
          </ol>
        </li>
        <li>
          <strong>3. Penggunaan Aplikasi atau Platform</strong>
          <ol>
            <li>
              .3.1 Dalam menggunakan aplikasi atau platform untuk mengerjakan
              latihan tes, Anda setuju untuk tidak menggunakan cara-cara yang
              melanggar hukum, menimbulkan gangguan, atau merusak aplikasi atau
              platform tersebut.
            </li>
            <li>
              3.2 Anda bertanggung jawab penuh atas penggunaan kredensial login
              Anda dan dilarang keras untuk berbagi kredensial tersebut kepada
              pihak lain atau menggunakan kredensial orang lain untuk mengakses
              aplikasi atau platform.
            </li>
          </ol>
        </li>
        <li>
          <strong>4. Penyimpangan atau Pelanggaran Terhadap Perjanjian</strong>
          <ol>
            <li>
              4.1 Jika ditemukan adanya penyimpangan atau pelanggaran terhadap
              perjanjian ini, penyedia tes berhak untuk mengambil tindakan yang
              dianggap perlu, termasuk pembatasan akses, penghapusan data, atau
              pemberhentian penggunaan layanan tanpa pemberitahuan sebelumnya.
            </li>
            <li>
              4.2 Anda memahami dan menyetujui bahwa pelanggaran terhadap
              perjanjian ini dapat mengakibatkan konsekuensi hukum sesuai dengan
              hukum yang berlaku.
            </li>
          </ol>
        </li>
      </ol>

      <br />
      <p>
        Dengan melanjutkan untuk menggunakan dan mengerjakan latihan tes ini,
        Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui semua
        syarat dan ketentuan dalam perjanjian pengguna ini.
      </p>

      <p>
        Harap dicatat bahwa perjanjian ini dapat direvisi atau diperbarui tanpa
        pemberitahuan sebelumnya. Untuk informasi lebih lanjut atau jika Anda
        memiliki pertanyaan, hubungi penyedia tes.
      </p>
    </div>
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
    handleAccept() {
      localStorage.removeItem('currentQuestion')
      localStorage.removeItem('answers')
    },
  },
}
</script>

<style scoped></style>
