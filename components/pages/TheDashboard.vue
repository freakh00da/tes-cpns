<template>
  <div class="w-full">
    <section class="bg-white">
      <div class="mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-4xl lg:mr-4 border-2 rounded-xl p-4 text-start">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Welcome to Jago CPNS
            </h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
              Jago CPNS adalah Website Layanan belajar dan tryout CPNS untuk
              persiapan tes CPNS. di Jago Cpns Juga tersedia informasi, materi,
              soal dan tryout Online CPNS Untuk mempersiapkan diri dalam
              menghadapi Seleksi CPNS. Soal soal dirancang oleh Tim Khusus Yang
              disesuaikan Dengan Kisi Kisi terbaru
            </p>
            <img
              src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png"
              alt=""
            />
          </div>
          <div class="border-2 rounded-xl mt-6 xl:mt-0 p-4 text-start">
            <h1 class="text-2xl font-semibold">Total User: {{ userCount }}</h1>
            <h1 class="text-2xl font-semibold">
              Tryout Tersedia: {{ tryoutCount }}
            </h1>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div
            class="mt-8 sm:mt-12 p-4 border-2 rounded-xl text-lg font-medium text-gray-500"
          >
            <h1 class="mb-2">
              Bantu kami mengembangkan website ini melalui QRIS dibawah ini
            </h1>
            <img
              class="h-40 w-40"
              src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/qris?t=2023-11-29T08%3A25%3A58.743Z"
              alt=""
            />
          </div>
          <div
            class="mt-8 lg:ml-4 sm:mt-12 p-4 border-2 rounded-xl text-lg font-medium text-gray-500"
          >
            <h1 class="mb-2">Contact Us</h1>
            <h2>
              Whatsapp :
              <a
                class="text-blue-500 underline"
                href="https://wa.me/6285174176676"
                >admin</a
              >
            </h2>
            <h2>
              Informasi & Aduan :
              <a class="text-blue-500 underline" href="https://t.me/jagocpn"
                >telegram channel</a
              >
            </h2>
          </div>

          <div
            class="mt-8 lg:ml-4 sm:mt-12 p-4 border-2 rounded-xl font-medium text-gray-500 text-center"
          >
            <h1 class="mb-2 text-lg">Total Saldo</h1>
            <h1 class="text-5xl">{{ convertedRupiah }}</h1>
            <button
              @click="handleTopup"
              class="p-2 bg-blue-500 rounded shadow mt-4 text-xs text-white hover:bg-blue-400"
            >
              Tambah Saldo
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- <TheDivider :title="'News'" />
    <the-news /> -->
  </div>
</template>
<script>
import TheDivider from '../TheDivider.vue'
export default {
  components: {
    TheDivider,
  },
  data() {
    return {
      userCount: 0,
      tryoutCount: 0,
    }
  },
  props: { balance: Number },
  computed: {
    convertedRupiah() {
      const angka = this.balance
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      })
      return formatter.format(angka)
    },
  },

  methods: {
    handleTopup() {
      this.$emit('showContent', 'TheTopup')
    },
    async countUsers() {
      let { count, error } = await this.$supabase
        .from('users')
        .select('name', { count: 'exact', head: true })

      if (error) {
        console.error('Error fetching counter:', error)
        return null
      }

      const totalUser = count
      this.userCount = totalUser + 543
    },
    async countTryout() {
      let { data, error } = await this.$supabase
        .from('tryout-list')
        .select('id')
      if (error) {
        console.error('Error fetching counter:', error)
        return null
      }
      const totalData = data.length
      this.tryoutCount = totalData
    },
  },
  async mounted() {
    this.$emit('dashboard-mounted')
    await this.countUsers()
    await this.countTryout()
  },
}
</script>
