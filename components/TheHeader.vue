<template>
  <header class="bg-gray-50 h-fit fixed top-0 left-0 right-0">
    <div class="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center sm:justify-between sm:gap-4">
        <div class="block lg:hidden mr-4">
          <nuxt-link to="/"
            ><div class="w-20 h-auto">
              <img
                src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png"
                alt=""
              />
            </div>
          </nuxt-link>
        </div>
        <div>
          <h1 class="text-xl lg:text-2xl font-bold">{{ title }}</h1>
        </div>

        <div
          class="flex flex-1 items-center justify-between gap-8 sm:justify-end"
        >
          <div class="flex gap-4"></div>
          <div class="relative ml-4" @click="toggleDropdown">
            <button
              type="button"
              class="group flex shrink-0 items-center rounded-lg transition"
            >
              <span class="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-10 w-10 rounded-full object-cover"
              />

              <p class="ms-2 hidden text-left text-xs sm:block">
                <strong class="block font-medium">{{ username }}</strong>

                <span class="text-gray-500">{{ useremail }}</span>
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              v-if="isDropdownOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <button
                  type="button"
                  @click="handleProfile"
                  class="w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profil
                </button>
                <button
                  type="button"
                  @click="handleLogout"
                  class="w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: String,
    username: String,
    useremail: String,
  },
  data() {
    return { isDropdownOpen: false }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    handleLogout() {
      localStorage.clear()
      this.$router.push('/auth/signin')
    },
    handleProfile() {
      this.$emit('profile-clicked')
    },
  },
}
</script>
