<template>
  <div>
    <div class="max-h-screen">
      <tryout-tools @times-up="handleTimes" />
      <succeed-alert
        class="fixed bottom-3 left-3 right-3"
        @close-clicked="handleClose"
        :title="'Jawaban berhasil di-submit'"
        :description="'anda akan dialihkan ke dashboard'"
        v-if="showSucceed"
      />

      <div class="h-fit rounded-lg shadow p-4 lg:p-14">
        <exam-page :timesup="timesup" @confirm-clicked="handleAlert" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { showSucceed: false, timesup: false }
  },
  mounted() {
    window.addEventListener('beforeunload', this.confirmRefresh)
  },
  methods: {
    handleTimes() {
      this.timesup = true
    },
    handleAlert() {
      this.showSucceed = true
    },
    handleClose() {
      this.showSucceed = false
    },
    confirmRefresh(event) {
      event.preventDefault()
      event.returnValue = ''
    },
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.confirmRefresh)
  },
}
</script>

<style></style>
