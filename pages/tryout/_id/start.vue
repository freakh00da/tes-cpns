<template>
  <div>
    <tryout-tools />
    <succeed-alert
      class="fixed bottom-3 left-3 right-3"
      @close-clicked="handleClose"
      :title="'Jawaban berhasil di-submit'"
      :description="'anda akan dialihkan ke dashboard'"
      v-if="showSucceed"
    />
    <div class="container mx-auto p-4">
      <div class="bg-slate-50 rounded-lg shadow p-6">
        <exam-page @confirm-clicked="handleAlert" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { showSucceed: false }
  },
  mounted() {
    window.addEventListener('beforeunload', this.confirmRefresh)
  },
  methods: {
    async fetchQuestion() {
      let { data: questions, error } = await supabase
        .from('questions')
        .select('*')
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
