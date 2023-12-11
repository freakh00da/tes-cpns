<template>
  <div>
    <div>
      <succeed-alert
        class="fixed bottom-3 left-3 right-3 z-20"
        @close-clicked="handleClose"
        :title="'Jawaban berhasil di-submit'"
        :description="'anda akan dialihkan ke dashboard'"
        v-if="showSucceed"
      />

      <div class="">
        <exam-page
          @times-up="handleTimes"
          :timesup="timesup"
          @confirm-clicked="handleAlert"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'tryout',
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
