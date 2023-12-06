<template>
  <div>
    <error-alert
      v-if="showAlert"
      class="transform transition duration-500"
      :class="{
        'opacity-0 -translate-y-full': !showAlert,
      }"
      :title="'PERHATIAN!'"
      :description="'Jika nama anda tidak muncul di dalam list,silahkan lihat nilai anda dahulu pada page nilai agar nilai di-generate oleh sistem'"
    />
    <header class="bg-gray-200">
      <div class="flex justify-between max-w-screen-xl py-8 sm:px-6">
        <a class="px-3 text-blue-500 font-semibold underline" href="/"
          >go back</a
        >
        <h1 class="lg:text-xl font-semibold">{{ title }}</h1>
        <div class="relative">
          <label class="sr-only" for="search"> Search </label>

          <input
            class="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Cari nama anda"
            v-model="searchQuery"
          />

          <button
            @click="fetchUser"
            type="button"
            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span class="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div class="overflow-x-auto mt-4 mx-8">
      <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="text-left">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Rank
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Nama
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Kota
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Nilai
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(user, index) in users" :key="index">
            <td class="whitespace-nowrap px-4 py-2">{{ index + 1 }}</td>
            <td class="whitespace-nowrap px-4 py-2">{{ user.name }}</td>
            <td class="whitespace-nowrap px-4 py-2">{{ user.city }}</td>
            <td class="whitespace-nowrap px-4 py-2">
              {{ getUserScore(user) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: this.$route.params.id,
      showAlert: true,
      userAnswers: [],
      answers: [],
      users: [],
      filteredUsers: [],
      usersDisplay: [],
      searchQuery: '',
    }
  },
  methods: {
    async fetchUser() {
      const { data, error } = await this.$supabase
        .from('users')
        .select('*')
        .ilike('name', `%${this.searchQuery}%`)

      if (error) {
        console.error('Error fetching user:', error)
        return null
      }
      const id = `${this.$route.params.id}_score`
      const filteredData = data.filter((item) => item[id] !== null)
      this.users = filteredData
      const tryout = this.$route.params.id
      const userAnswers = data.map((item) => item[tryout])
      this.userAnswers = userAnswers
    },
    getUserScore(user) {
      const id = this.$route.params.id
      return user[`${id}_score`] || '0'
    },
    sortUsersByScore() {
      const id = this.$route.params.id
      this.users.sort((a, b) => {
        const scoreA = a[`${id}_score`] || 0
        const scoreB = b[`${id}_score`] || 0

        return scoreB - scoreA
      })
    },
    hideAlert() {
      setTimeout(() => {
        this.showAlert = false
      }, 10000)
    },
  },
  async mounted() {
    this.hideAlert()
    await this.fetchUser()
    this.sortUsersByScore()
  },
}
</script>
<style>
.transform.opacity-100 {
  opacity: 1;
}
.transform.translate-y-0 {
  transform: translateY(0);
}
</style>
