<template>
  <header class="bg-gray-50 h-fit fixed top-0 left-0 right-0 z-10">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-9 h-9"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clip-rule="evenodd"
                />
              </svg>

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
