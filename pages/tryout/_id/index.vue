<template>
  <div>
    <empty-page v-if="isTryout" :title="'Anda sudah mengerjakan tryout ini!'" />
    <before-tryout v-if="!isTryout" />
  </div>
</template>

<script>
export default {
  middleware: 'tryout',
  data() {
    return {
      isTryout: false,
    }
  },
  methods: {
    async checkTryout() {
      const tryout = this.$route.params.id
      const id = localStorage.getItem('user_id')

      let { data, error } = await this.$supabase
        .from('users')
        .select(tryout)
        .eq('id', id)
        .single()
      if (data[tryout]) {
        this.isTryout = true
      }
    },
  },
  async mounted() {
    await this.checkTryout()
  },
}
</script>
