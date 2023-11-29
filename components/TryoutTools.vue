<template>
  <header>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="text-center sm:text-left">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ timeLeft }}
          </h1>

          <p class="mt-1.5 text-lg text-gray-500">Selamat Mengerjakan!</p>
        </div>

        <div
          class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center"
        ></div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      timeLeft: '2 jam 0 menit 0 detik',
    }
  },
  methods: {
    startCountdown() {
      let timeInSeconds = localStorage.getItem('countdownStartTime')
        ? Math.floor(
            (localStorage.getItem('countdownStartTime') - Date.now()) / 1000
          )
        : 2 * 60 * 60

      const countdown = setInterval(() => {
        const hours = Math.floor(timeInSeconds / 3600)
        const minutes = Math.floor((timeInSeconds % 3600) / 60)
        const seconds = timeInSeconds % 60

        this.timeLeft = `${hours} jam ${minutes} menit ${seconds} detik`

        timeInSeconds--

        if (timeInSeconds < 0) {
          clearInterval(countdown)
          this.timeLeft = 'Waktu sudah habis!'
          localStorage.removeItem('countdownStartTime') // Hapus waktu yang tersimpan setelah selesai
        }
      }, 1000)

      // Simpan waktu mulai countdown ke localStorage saat countdown dimulai
      localStorage.setItem(
        'countdownStartTime',
        Date.now() + timeInSeconds * 1000
      )
    },
  },
  mounted() {
    this.startCountdown()
  },
}
</script>
