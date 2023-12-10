<template>
  <section class="bg-white">
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
              Jago CPNS adalah Website Layanan belajar dan tryout CPNS untuk
              persiapan tes CPNS. di Jago Cpns Juga tersedia informasi, materi,
              soal dan tryout Online CPNS Untuk mempersiapkan diri dalam
              menghadapi Seleksi CPNS. Soal soal dirancang oleh Tim Khusus Yang
              disesuaikan Dengan Kisi Kisi terbaru
            </p>
          </div>

          <div class="hidden lg:block mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Sign Up</h1>

            <p class="mt-4 text-gray-500">
              Daftar menjadi peserta tryout CPNS di Jago CPNS
            </p>
          </div>

          <form
            @submit.prevent="registerUser"
            action="#"
            class="mt-8 grid grid-cols-6 gap-6"
          >
            <div class="col-span-6 sm:col-span-3">
              <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="FirstName"
                name="first_name"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
                placeholder="eg. Asep"
                v-model="firstName"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="LastName"
                class="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
                placeholder="eg. Bensin"
                v-model="lastName"
              />
            </div>

            <div class="col-span-6">
              <label
                for="Email"
                class="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
                placeholder="eg. asepbensin@example.com"
                v-model="email"
              />
            </div>
            <div class="col-span-6">
              <label for="City" class="block text-sm font-medium text-gray-700">
                Kota
              </label>
              <input
                type="text"
                list="cities"
                id="city"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
                placeholder="Kota Anda"
                v-model="cityInput"
              />
              <datalist name="cities" id="cities">
                <option
                  v-for="city in cities"
                  :key="city"
                  :value="city.regency"
                >
                  {{ city.regency }}
                </option>
              </datalist>
            </div>
            <div class="col-span-6">
              <label
                for="Phone"
                class="block text-sm font-medium text-gray-700"
              >
                No HP
              </label>

              <input
                type="tel"
                id="Phone"
                name="phone"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
                placeholder="08xxx"
                v-model="phone"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
                placeholder="Password"
                v-model="password"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>

              <input
                @change="passwordValidator"
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm border"
                placeholder="Confirm Password"
                v-model="passwordConfirmation"
              />
            </div>

            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                type="submit"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <nuxt-link to="/auth/signin/" class="text-gray-700 underline"
                  >Log in</nuxt-link
                >.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
    <succeed-alert
      v-if="showAlert"
      class="fixed top-3 left-3 lg:left-3/4 right-3"
      :title="'Berhasil'"
      :description="'Anda akan diarahkan ke login'"
    />
    <error-alert
      v-if="showError"
      :title="'Gagal Registrasi'"
      :description="'Error'"
    />
    <error-alert
      v-if="!isMatch"
      :title="'Password Salah'"
      :description="'Password yang anda masukan tidak sama'"
    />
  </section>
</template>
<script>
export default {
  data() {
    return {
      cityInput: '',
      phone: '',
      showError: false,
      showAlert: false,
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
      isMatch: true,
    }
  },
  methods: {
    async registerUser() {
      const password = this.passwordValidator(
        this.password,
        this.passwordConfirmation
      )
      try {
        const { data, error } = await this.$supabase.auth.signUp({
          email: this.email,
          password: password,
        })

        if (error) {
          this.showError = true
          console.error('Error signing up:', error.message)
          return
        }

        const { error: insertError } = await this.$supabase
          .from('users')
          .insert([
            {
              name: this.firstName + ' ' + this.lastName,
              email: this.email,
              id: data.user.id,
              city: this.cityInput,
              phone: this.phone,
            },
          ])

        if (insertError) {
          this.showError = true
          console.error('Error inserting user:', insertError.message)
          return
        }
        this.showAlert = true
        setTimeout(() => {
          this.$router.push('/auth/signin')
        }, 3000)
      } catch (error) {
        console.error('Error registering user:', error.message)
      }
    },
    passwordValidator(password, passwordConfirmation) {
      if (password !== passwordConfirmation) {
        this.isMatch = false
        return null
      }
      return password
    },
  },
}
</script>
