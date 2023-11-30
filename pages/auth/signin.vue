<template>
  <section class="bg-white">
    <error-alert
      v-if="errorAlert"
      :title="'Login Gagal!'"
      :description="'Email/Password yang anda masukan salah'"
    />
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Night"
          src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/banner.jpeg"
          class="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <h2
            class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            Welcome to Jago CPNS
          </h2>

          <p class="mt-4 leading-relaxed text-white/90">
            Jago CPNS adalah panduan lengkap untuk sukses dalam tes CPNS. Dengan
            materi terkini dan latihan intensif, kami siap mempersiapkan Anda
            secara optimal. Temukan strategi terbaik, latihan soal, dan panduan
            ahli yang membantu Anda mencapai hasil terbaik. Mulailah persiapan
            Anda menuju karier sebagai pegawai negeri sipil dengan Jago CPNS.
          </p>
        </div>
      </section>

      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <a
              class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              href="/"
            >
              <span class="sr-only">Home</span>
              <img
                src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png"
                alt=""
              />
            </a>

            <h1
              class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Welcome to Jago CPNS
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
              Jago CPNS adalah panduan lengkap untuk sukses dalam tes CPNS.
              Dengan materi terkini dan latihan intensif, kami siap
              mempersiapkan Anda secara optimal. Temukan strategi terbaik,
              latihan soal, dan panduan ahli yang membantu Anda mencapai hasil
              terbaik. Mulailah persiapan Anda menuju karier sebagai pegawai
              negeri sipil dengan Jago CPNS.
            </p>
          </div>
          <div class="hidden lg:block mx-auto max-w-lg text-center">
            <h1 class="font-bold sm:text-3xl">Sign in</h1>
          </div>

          <form
            @submit.prevent="login"
            class="mx-auto mb-0 mt-8 max-w-md space-y-4 p-4 rounded-xl"
          >
            <div>
              <label for="email" class="sr-only">Email</label>

              <div class="relative border-2 rounded-xl">
                <input
                  type="email"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  v-model="email"
                />

                <span
                  class="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" class="sr-only">Password</label>

              <div class="relative border-2 rounded-xl">
                <input
                  type="password"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  v-model="password"
                />

                <span
                  class="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                No account?
                <nuxt-link to="/auth/signup" class="underline" href=""
                  >Sign up</nuxt-link
                >
              </p>

              <button
                type="submit"
                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      errorAlert: false,
      email: '',
      password: '',
    }
  },
  middleware: 'unauth',
  methods: {
    async login() {
      try {
        const { data, error } = await this.$supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        })

        if (error) {
          this.errorAlert = true
          console.error('Error signing in:', error.message)
        } else {
          localStorage.setItem('user', data.session.user.aud)
          localStorage.setItem('user_id', data.user.id)
          this.$router.push('/')
        }
      } catch (error) {
        console.error('Error signing in:', error.message)
      }
    },
  },
}
</script>
