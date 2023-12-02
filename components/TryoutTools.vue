<template>
  <header>
    <div class="w-screen-xl pt-4">
      <div class="flex w-screen flex-row justify-start">
        <div class="px-4">
          <img
            class="h-20 lg:h-24"
            src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png"
            alt=""
          />
        </div>
        <div class="text-center pl-9 pt-6">
          <h1 class="text-lg lg:text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ timeLeft }}
          </h1>
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
          this.$emit('times-up')
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
