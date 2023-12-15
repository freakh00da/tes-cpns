<template>
  <div>
    <header class="flex justify-between border-b border-black h-20">
      <div class="relative m-4">
        <label class="sr-only" for="search">Search</label>
        <input
          class="h-10 w-full mr-1 border border-black bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
          id="search"
          type="search"
          placeholder="Cari nama anda"
          v-model="searchQuery"
          @change="handleSearch"
        />

        <button
          @click="handleSearch"
          type="button"
          class="absolute inset-y-0 right-0 rounded-full h-fit p-3 text-gray-600 transition hover:text-gray-700"
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
    <div class="mt-6 px-6 min-w-full max-w">
      <table class="min-w-full text-start">
        <thead>
          <tr>
            <th class="px-4 py-2 w-10">No</th>
            <th class="px-4 py-2">Nama</th>
            <th class="px-4 py-2">Kota</th>
            <th class="px-4 py-2 w-20">Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in rankingData" :key="index">
            <td class="border px-4 py-2">{{ rank[index] }}</td>
            <td class="border px-4 py-2">{{ item.name }}</td>
            <td class="border px-4 py-2">{{ item.city }}</td>
            <td class="border px-4 py-2">{{ item.score * 5 }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center items-center mt-4">
        <div>
          <button
            :disabled="currentPage === 1"
            @click="prevPage"
            class="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 disabled:opacity-50"
          >
            Prev
          </button>
        </div>
        <div class="mx-4">
          <input
            @change="byInput"
            type="number"
            min="1"
            :max="1000"
            v-model.number="currentPageInput"
            class="px-4 py-2 text-center w-20 border border-gray-300 rounded-lg"
          />
          <span> / {{ userCount }}</span>
        </div>
        <div>
          <button
            :disabled="currentPage === userCount"
            @click="nextPage"
            class="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankingData: [
        {
          name: 'John Doe',
          city: 'New York',
          score: '85',
        },
      ],
      currentPage: 1,
      currentPageInput: 1,
      userCount: 0,
      searchQuery: '',
      rank: [],
    }
  },
  methods: {
    async fetchScore() {
      try {
        let { data, error } = await this.$supabase
          .from('users')
          .select(`name, city, ${this.$route.params.id}_score`)
          .order(`${this.$route.params.id}_score`, {
            ascending: false,
          })
          .range(0, 14)
          .not(`${this.$route.params.id}_score`, 'is', null)
          .not(`${this.$route.params.id}_score`, 'eq', 0)

        this.rankingData = data.map((item) => ({
          name: item.name,
          city: item.city,
          score: item[`${this.$route.params.id}_score`],
        }))
        this.generateRanking()

        if (error) {
          throw error
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data:', error.message)
        // Lakukan penanganan kesalahan, seperti memberi tahu pengguna atau langkah pemulihan lainnya
      }
    },

    generateRanking() {
      const itemsPerPage = 15 // Jumlah item per halaman
      const startIndex = (this.currentPage - 1) * itemsPerPage + 1

      this.rank = Array.from(
        { length: itemsPerPage },
        (_, index) => startIndex + index
      )
    },

    async nextPage() {
      if (true) {
        try {
          const nextPageNumber = this.currentPage + 1
          const rangeStart = (nextPageNumber - 1) * 15 // Mulai dari 0 pada page 1, 15 pada page 2, dst.
          const rangeEnd = nextPageNumber * 15 - 1 // Akhirnya pada page 1 adalah 14, page 2 adalah 29, dst.

          let { data, error } = await this.$supabase
            .from('users')
            .select(`name, city, ${this.$route.params.id}_score`)
            .order(`${this.$route.params.id}_score`, {
              ascending: false,
            })
            .range(rangeStart, rangeEnd)
            .not(`${this.$route.params.id}_score`, 'is', null)
            .not(`${this.$route.params.id}_score`, 'eq', 0)

          if (error) {
            throw error
          }

          this.rankingData = data.map((item) => ({
            name: item.name,
            city: item.city,
            score: item[`${this.$route.params.id}_score`],
          }))

          // Update currentPage untuk pagination
          this.currentPage = nextPageNumber
          this.currentPageInput = nextPageNumber
          this.generateRanking()
        } catch (error) {
          console.error('Terjadi kesalahan saat mengambil data:', error.message)
          // Lakukan penanganan kesalahan
        }
      }
    },
    async prevPage() {
      if (true) {
        try {
          const prevPageNumber = this.currentPage - 1
          const rangeStart = (prevPageNumber - 1) * 15
          const rangeEnd = prevPageNumber * 15 - 1

          let { data, error } = await this.$supabase
            .from('users')
            .select(`name, city,${this.$route.params.id}_score `)
            .order(`${this.$route.params.id}_score`, {
              ascending: false,
            })
            .range(rangeStart, rangeEnd)
            .not(`${this.$route.params.id}_score`, 'is', null)
            .not(`${this.$route.params.id}_score`, 'eq', 0)

          if (error) {
            throw error
          }

          this.rankingData = data.map((item) => ({
            name: item.name,
            city: item.city,
            score: item[`${this.$route.params.id}_score`],
          }))

          // Update currentPage untuk pagination
          this.currentPage = prevPageNumber
          this.currentPageInput = prevPageNumber
          this.generateRanking()
        } catch (error) {
          console.error('Terjadi kesalahan saat mengambil data:', error.message)
          // Lakukan penanganan kesalahan
        }
      }
    },
    async byInput() {
      const requestedPage = this.currentPageInput
      if (true) {
        try {
          const rangeStart = (requestedPage - 1) * 15
          const rangeEnd = requestedPage * 15 - 1

          let { data, error } = await this.$supabase
            .from('users')
            .select(`name, city,${this.$route.params.id}_score `)
            .order(`${this.$route.params.id}_score`, {
              ascending: false,
            })
            .range(rangeStart, rangeEnd)
            .not(`${this.$route.params.id}_score`, 'is', null)
            .not(`${this.$route.params.id}_score`, 'eq', 0)

          if (error) {
            throw error
          }

          this.rankingData = data.map((item) => ({
            name: item.name,
            city: item.city,
            score: item[`${this.$route.params.id}_score`],
          }))

          // Update currentPage untuk pagination
          this.currentPage = requestedPage
          this.currentPageInput = requestedPage
          this.generateRanking()
        } catch (error) {
          console.error('Terjadi kesalahan saat mengambil data:', error.message)
          // Lakukan penanganan kesalahan
        }
      }
    },
    async handleSearch() {
      const { data, error } = await this.$supabase
        .from('users')
        .select(`name, city, ${this.$route.params.id}_score`)
        .ilike('name', `%${this.searchQuery}%`)
        .order(`${this.$route.params.id}_score`, {
          ascending: false,
        })
        .range(0, 15)
        .not(`${this.$route.params.id}_score`, 'is', null)
        .not(`${this.$route.params.id}_score`, 'eq', 0)

      if (error) {
        console.error('Error fetching user:', error)
        return null
      }
      const id = `${this.$route.params.id}_score`
      this.rankingData = data.map((item) => ({
        name: item.name,
        city: item.city,
        score: item[id],
      }))
      this.generateRanking()
    },

    async getTotalPage() {
      let { count, error } = await this.$supabase
        .from('users')
        .select('name', { count: 'exact', head: true })
        .not(`${this.$route.params.id}_score`, 'is', null)
        .not(`${this.$route.params.id}_score`, 'eq', 0)

      if (error) {
        console.error('Error fetching counter:', error)
        return null
      }

      const totalUser = Math.ceil(count / 15)
      this.userCount = totalUser
    },
  },

  async mounted() {
    this.fetchScore()
    this.getTotalPage()
  },
}
</script>

<style>
/* Styling tambahan */
</style>
