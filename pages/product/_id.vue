<template>
  <div>
    <the-alert
      v-if="singleAlert"
      @accept-clicked="onBuy"
      @reject-clicked="showModal"
      :title="'Konfirmasi pembelian!'"
      :description="`Anda akan membeli paket tryout ini dengan harga : ${price}`"
    />
    <error-alert
      v-if="errorAlert"
      :title="'Error'"
      :description="'Saldo tidak cukup,silahkan topup terlebih dahulu!'"
    />
    <header class="flex justify-between border-b border-black h-20">
      <h1 class="text-2xl m-2 md:m-6 font-medium">
        saldo:{{ convertedBalance }}
      </h1>
      <button
        @click="$router.push('/')"
        class="w-8 h-8 m-6 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-full h-full"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </header>
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/catalogue/CPNS-2023.png"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {{ title }}
            </h1>

            <p class="leading-relaxed mt-4">
              {{ description }}
            </p>
            <div
              class="flex flex-col mt-6 items-start pb-5 border-b-2 border-gray-200 mb-5"
            >
              <div class="flex items-center">
                <span class="mr-3">Beli untuk</span>
                <div class="relative">
                  <select
                    v-model="selectedOption"
                    @change="updateTotalItem"
                    class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                  >
                    <option value="1">1 User</option>
                    <option value="5">5 User</option>
                  </select>
                  <span
                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div v-if="selectedOption === '5'" class="mt-2 max-w-sm">
                <p>Masukan email user</p>
                <div class="flex">
                  <div class="relative">
                    <input
                      :disabled="selectedValues.length === 5"
                      v-model="searchQuery"
                      @input="handleInput"
                      @keydown.down="onArrowDown"
                      @keydown.up="onArrowUp"
                      @keydown.enter.prevent="onEnter"
                      @blur="onBlur"
                      class="w-full border rounded-r-none border-gray-300 rounded px-4 py-2"
                      type="text"
                      placeholder="Masukan min 4 Huruf..."
                    />
                    <ul
                      v-if="showSuggestions"
                      class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded border border-gray-300"
                    >
                      <li
                        v-for="(suggestion, index) in filteredSuggestions"
                        :key="index"
                        @click="selectSuggestion(suggestion)"
                        @mouseover="highlightIndex = index"
                        @mouseleave="highlightIndex = -1"
                        :class="{ 'bg-blue-200': highlightIndex === index }"
                        class="px-4 py-2 cursor-pointer"
                      >
                        {{ suggestion }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  v-if="selectedValues.length > 0"
                  class="mt-4 pb-4 flex overflow-x-auto navigation px-4"
                >
                  <span
                    v-for="(value, index) in selectedValues"
                    :key="index"
                    class="flex w-fit bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2"
                  >
                    {{ value }}
                    <button
                      @click="removeTag(index)"
                      class="ml-2 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">{{
                convertedRupiah
              }}</span>
              <button
                @click="showModal"
                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <succeed-alert
      class="fixed bottom-3 left-3 right-3 z-20"
      v-if="suceed"
      :title="'Sukses'"
      :description="'berhasil membeli tryout,silahkan cek page tryout'"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorAlert: false,
      suceed: false,
      singleAlert: false,
      email: localStorage.getItem('email'),
      title: '',
      description: '',
      price: 0,
      selectedOption: '1',
      totalItem: 1,
      searchQuery: '',
      suggestions: [],
      showSuggestions: false,
      highlightIndex: -1,
      selectedValues: [],
      userBackpack: [],
      backpacks: [],
      balance: 0,
    }
  },
  computed: {
    filteredSuggestions() {
      return this.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    convertedRupiah() {
      const angka = this.price
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      })
      return formatter.format(angka)
    },
    convertedBalance() {
      const angka = this.balance
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      })
      return formatter.format(angka)
    },
  },
  methods: {
    showSucceed() {
      this.suceed = true
      setTimeout(() => {
        this.$router.push('/')
      }, 3000)
    },
    showModal() {
      this.singleAlert = !this.singleAlert
    },
    getDiscount() {
      if (this.selectedOption === '5') {
        this.price = 50000
      } else if (this.selectedOption === '1') {
        this.price = 20000
      }
    },
    updateTotalItem() {
      this.totalItem = parseInt(this.selectedOption)
      this.getDiscount()
    },
    async getBalance() {
      try {
        let { data, error } = await this.$supabase
          .from('user_balance')
          .select('balance')
          .eq('email', this.email)
        this.balance = data[0].balance
      } catch (error) {
        console.error('Error fetching user balance:', error)
      }
    },

    async fetchUser() {
      let { data, error } = await this.$supabase
        .from('users')
        .select('email')
        .ilike('name', `%${this.searchQuery}%`)
      const suggestions = data.map((item) => item.email)
      this.suggestions = suggestions
    },
    async onBuy() {
      if (this.balance - this.price > -1) {
        const email = localStorage.getItem('email')
        const newValue = this.$route.params.id

        // Mendapatkan data user balance
        const { data: userBalance, errorBalance } = await this.$supabase
          .from('user_balance')
          .select('balance')
          .eq('email', email)

        if (errorBalance) {
          console.error('Error fetching user balance:', errorBalance)
          return
        }

        const currentBalance = userBalance[0]?.balance || 0

        if (currentBalance - this.price < 0) {
          console.error('Insufficient balance')
          return
        }

        // Mengurangi saldo user
        const updatedBalance = currentBalance - this.price

        const { errorUpdateBalance } = await this.$supabase
          .from('user_balance')
          .update({ balance: updatedBalance })
          .eq('email', email)

        if (errorUpdateBalance) {
          console.error('Error updating user balance:', errorUpdateBalance)
          return
        }

        // Menambahkan item ke backpack user(s)

        if (this.selectedOption === '5') {
          const emails = this.selectedValues

          for (const email of emails) {
            const { data: userData, error } = await this.$supabase
              .from('users')
              .select('backpack')
              .eq('email', email)

            if (error) {
              console.error(`Error fetching backpack data for ${email}:`, error)
              continue
            }

            const backpack = userData[0]?.backpack || []
            backpack.push(newValue)

            const { errorUpdateData } = await this.$supabase
              .from('users')
              .update({ backpack })
              .eq('email', email)

            if (errorUpdateData) {
              console.error(
                `Error updating backpack for ${email}:`,
                errorUpdateData
              )
              continue
            }
          }
        } else {
          // Logic untuk pembelian tunggal
          const { data: userData, errorUserData } = await this.$supabase
            .from('users')
            .select('backpack')
            .eq('email', email)

          if (errorUserData) {
            console.error('Error fetching backpack data:', errorUserData)
            return
          }

          const backpack = userData[0]?.backpack || []
          backpack.push(newValue)

          const { errorUpdateData } = await this.$supabase
            .from('users')
            .update({ backpack })
            .eq('email', email)

          if (errorUpdateData) {
            console.error('Error updating user backpack:', errorUpdateData)
            return
          }
        }

        // Refresh saldo
        await this.getBalance()
        this.singleAlert = false
        this.showSucceed()

        console.log('Purchase successful')
      } else {
        this.errorAlert = true
        setTimeout(() => {
          this.errorAlert = false
        }, 3000)
        this.singleAlert = false
        console.error('Insufficient balance')
      }
    },

    async handleInput() {
      if (this.searchQuery.length >= 4) {
        this.showSuggestions = true
        this.highlightIndex = -1
        await this.fetchUser()
      }
    },
    async handleClick() {
      await this.fetchUser()
      this.showSuggestions = true
      this.highlightIndex = -1
    },
    async getData() {
      try {
        let { data, error } = await this.$supabase
          .from('premium-list')
          .select('*')
          .eq('url', this.$route.params.id)

        if (error) {
          throw new Error(error.message)
        }
        this.title = data[0].title
        this.description = data[0].description
        this.price = data[0].price
      } catch (err) {
        console.error('Error:', err.message)
      }
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion
      this.showSuggestions = false
      this.selectedValues.push(suggestion)
      this.searchQuery = ''
    },
    removeTag(index) {
      this.selectedValues.splice(index, 1)
    },
    onBlur() {
      setTimeout(() => {
        this.showSuggestions = false
      }, 200)
    },
    onArrowDown() {
      if (this.highlightIndex < this.filteredSuggestions.length - 1) {
        this.highlightIndex++
      }
    },
    onArrowUp() {
      if (this.highlightIndex > 0) {
        this.highlightIndex--
      }
    },
    onEnter() {
      if (this.highlightIndex !== -1) {
        this.selectSuggestion(this.filteredSuggestions[this.highlightIndex])
      } else if (this.filteredSuggestions.length === 1) {
        this.selectSuggestion(this.filteredSuggestions[0])
      }
    },
  },
  async mounted() {
    await this.getBalance()
    await this.getData()
  },
}
</script>
<style scoped>
.navigation::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: darkgrey;
}

.navigation::-webkit-scrollbar-thumb {
  background-color: black;
}
</style>
