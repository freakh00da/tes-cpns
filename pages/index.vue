<template>
  <div class="h-screen w-screen overflow-x-hidden lg:flex justify-end">
    <the-sidebar
      @showContent="updateContent"
      :username="username"
      :useremail="useremail"
      v-if="showSidebar"
      class="fixed z-20 left-0 hidden lg:block"
    />
    <the-header
      @profile-clicked="handleProfile"
      @toggle-sidebar="toggleSidebar"
      :title="titleContent"
      :username="username"
      :useremail="useremail"
      class="fixed top-0 left-0 right-0"
    />
    <div class="lg:flex lg:w-5/6 justify-center my-8">
      <component
        :username="username"
        :useremail="useremail"
        :is="currentContent"
      />
    </div>
    <bottom-nav @showContent="updateContent" class="block lg:hidden" />
  </div>
</template>

<script>
import TheDashboard from '~/components/pages/TheDashboard.vue'
import TheTryout from '~/components/pages/TheTryout.vue'
import TheRank from '~/components/pages/TheRank.vue'
import TheProfile from '~/components/pages/TheProfile.vue'
import TheScore from '~/components/pages/TheScore.vue'

export default {
  middleware: 'auth',
  components: {
    TheDashboard,
    TheTryout,
    TheRank,
    TheScore,
    TheProfile,
  },
  data() {
    return {
      username: '',
      useremail: '',
      showSidebar: true,
      currentContent: 'TheDashboard',
    }
  },
  methods: {
    async fetchUser() {
      const userId = localStorage.getItem('user_id')
      const { data, error } = await this.$supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching user:', error)
        return null
      }
      this.username = data.name
      this.useremail = data.email
    },
    handleProfile() {
      this.currentContent = 'TheProfile'
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    updateContent(content) {
      this.currentContent = content
    },
  },
  async mounted() {
    await this.fetchUser()
  },
  computed: {
    titleContent() {
      if (this.currentContent === 'TheDashboard') {
        return 'Dashboard'
      }
      if (this.currentContent === 'TheTryout') {
        return 'Tryout'
      }
      if (this.currentContent === 'TheRank') {
        return 'Rank'
      }
      if (this.currentContent === 'TheScore') {
        return 'Nilai'
      }
      if (this.currentContent === 'TheProfile') {
        return 'Profile'
      }
      return 'Dashboard'
    },
  },
}
</script>

<style scoped></style>
