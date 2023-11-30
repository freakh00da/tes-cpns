<template>
  <div class="h-screen w-screen overflow-x-hidden lg:flex justify-end">
    <the-sidebar
      :active="currentContent"
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
    <div
      class="lg:flex lg:w-5/6 justify-center my-8"
      :class="{
        'animate-slideInFromBottom': showContent === true,
      }"
    >
      <component
        :tryouts="tryouts"
        @dashboard-mounted="updateTransition"
        @tryout-mounted="updateTransition"
        @profile-mounted="updateTransition"
        @rank-mounted="updateTransition"
        @score-mounted="updateTransition"
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
      showContent: false,
      tryouts: [],
    }
  },
  methods: {
    updateTransition() {
      this.showContent = true
      setTimeout(() => {
        this.showContent = false
      }, 600)
    },
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
    async getTryoutList() {
      let { data, error } = await this.$supabase.from('tryout-list').select('*')
      const formattedTryouts = data.map((item) => {
        return {
          title: item.title,
          date: item.date,
          type: item.type,
          url: item.url,
        }
      })
      this.tryouts = formattedTryouts
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
    await this.getTryoutList()
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

<style scoped>
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideInFromLeft {
  animation: slideInFromLeft 0.5s ease-in-out;
}

.animate-slideInFromBottom {
  animation: slideInFromBottom 0.5s ease-in-out;
}
</style>
