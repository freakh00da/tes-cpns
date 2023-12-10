<template>
  <div>
    <error-alert
      v-if="showAlert && userAnswers"
      class="transform transition duration-500"
      :class="{
        'opacity-0 -translate-y-full': !showAlert,
      }"
      :title="'PERHATIAN!'"
      :description="'Jawaban anda pilih adalah pilihan ganda yang memiliki background abu-abu'"
    />
    <empty-page
      v-if="!userAnswers"
      :title="'Anda belum mengerjakan tryout ini!'"
    />
    <div
      v-if="userAnswers"
      class="container my-10 w-full lg:w-3/4 mx-auto px-4 lg:px-20 py-8 bg-gray-50 lg:shadow-xl"
    >
      <div class="my-4">
        <nuxt-link to="/" class="font-semibold text-blue-500 hover:underline"
          >kembali ke home</nuxt-link
        >
      </div>
      <div
        class="flex flex-col lg:flex-row items-center justify-between border-b pb-2"
      >
        <div class="text-center py-3 border rounded h-24 w-24 p-2 mx-4">
          <h1 class="text-3xl lg:text-5xl font-semibold">
            {{ calculateScore * 5 }}
          </h1>
          <p
            class="font-semibold"
            :class="{
              'text-green-500': calculateScore >= 75,
              'text-red-500': calculateScore < 75,
            }"
          >
            {{ calculateScore >= 75 ? 'LULUS' : 'GAGAL' }}
          </p>
        </div>
        <div class="mt-4">
          <div class="flex justify-between font-semibold">
            <div>
              <p>Judul: {{ $route.params.id }}</p>
              <p>KKM: 75</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div v-for="(question, index) in questions" :key="index" class="my-8">
          <h3 class="font-semibold">Soal {{ index + 1 }}</h3>
          <p class="text-xl">
            {{ index + 1 }}. {{ questions[index].question }}
          </p>
          <br />

          <ul v-if="userAnswers">
            <li
              class="text-lg p-1"
              :class="{
                'bg-gray-500 rounded text-white':
                  userAnswers[index] === choice.key,
                'bg-white': userAnswers[index] !== choice.key,
              }"
              v-for="(choice, optionIndex) in question.choices"
              :key="optionIndex"
            >
              {{ choice.key }}. {{ choice.text }}
            </li>
          </ul>
          <p class="mt-2 font-semibold">Jawaban: {{ question.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: true,
      questions: [],
      userAnswers: [],
    }
  },
  methods: {
    async postScore() {
      try {
        const idToUpdate = localStorage.getItem('user_id')
        const tryoutTitle = `${this.$route.params.id}_score`

        const score = {}
        score[tryoutTitle] = this.calculateScore

        const { data, error } = await this.$supabase
          .from('users')
          .update(score)
          .eq('id', idToUpdate)

        if (error) {
          throw error
        }
      } catch (err) {
        console.error('Error fetching questions:', err.message)
        throw err
      }
    },
    async fetchQuestions() {
      try {
        const { data, error } = await this.$supabase
          .from(`${this.$route.params.id}`)
          .select('*')

        if (error) {
          throw error
        }
        const formattedQuestions = data.map((item) => ({
          question: item.question,
          choices: [
            { text: item.a, key: 'a' },
            { text: item.b, key: 'b' },
            { text: item.c, key: 'c' },
            { text: item.d, key: 'd' },
            { text: item.e, key: 'e' },
          ],
          answer: item.answer,
        }))
        this.questions = formattedQuestions
      } catch (err) {
        console.error('Error fetching questions:', err.message)
        throw err
      }
    },
    async getUserAnswers() {
      const id = localStorage.getItem('user_id')
      const params = this.$route.params.id
      let { data, error } = await this.$supabase
        .from('users')
        .select(params)
        .eq('id', id)
        .single()
      this.userAnswers = data[params]
    },
    hideAlert() {
      setTimeout(() => {
        this.showAlert = false
      }, 10000)
    },
  },
  async mounted() {
    this.hideAlert()
    await this.fetchQuestions()
    await this.getUserAnswers()
    await this.postScore()
  },
  computed: {
    calculateScore() {
      const answers = this.questions.map((question) => question.answer)
      const userAnswers = this.userAnswers

      // Penanganan jika userAnswers bernilai null
      if (!userAnswers) {
        return 0 // Atau nilai default lainnya
      }

      let nilai = 0

      for (let i = 0; i < answers.length; i++) {
        if (answers[i] === userAnswers[i]) {
          nilai++
        }
      }
      return nilai
    },
  },
}
</script>

<style scoped></style>
