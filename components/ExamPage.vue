<template>
  <div>
    <the-alert
      @accept-clicked="handleConfirm"
      @reject-clicked="handleCancel"
      :title="'Perhatian!'"
      :description="'Apakah anda yakin akan men-submit jawaban?'"
      v-if="showModal"
      :class="{
        'ease-out duration-300': showModal,
        'ease-in duration-200': showModal === false,
      }"
    />
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-3/4 p-4 md:border-r-2 border-black">
        <div v-if="currentQuestion !== null" class="mb-6 w-">
          <h2 class="font-bold text-lg mb-2">Soal {{ currentQuestion + 1 }}</h2>
          <!-- <div>
            <img src="https://placehold.co/600x400" alt="" />
          </div> -->
          <p class="text-2xl">
            {{ questions[currentQuestion].question }}
          </p>
          <br />

          <ul>
            <li
              v-for="(choice, choiceIndex) in questions[currentQuestion]
                .choices"
              :key="choiceIndex"
            >
              <button
                :class="{
                  'bg-green-500 text-white': selectedAnswer === choice.key,
                  'bg-slate-200': selectedAnswer !== choice.key,
                }"
                class="text-start flex items-center px-2 py-1 rounded text-xl my-2"
                @click="updateSelectedAnswer(choice.key)"
              >
                {{ choice.key }}.
                {{ choice.text }}
              </button>
            </li>
          </ul>

          <div class="mt-6 flex justify-start">
            <button
              @click="prevQuestion"
              :disabled="currentQuestion === 0"
              class="px-4 py-2 text-white rounded mr-2"
              :class="{
                'bg-gray-200': currentQuestion === 0,
                'bg-blue-500': currentQuestion !== 0,
              }"
            >
              Prev
            </button>
            <button
              @click="nextQuestion"
              class="px-4 py-2 bg-blue-500 text-white rounded"
              :class="{
                hidden: currentQuestion === totalQuestions - 1,
              }"
            >
              Next
            </button>
            <button
              @click="callNextAndSubmit"
              class="px-4 py-2 bg-green-500 text-white rounded"
              v-if="currentQuestion === totalQuestions - 1"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/4 p-4 border ml-2">
        <h3 class="hidden md:block font-bold text-lg mb-4">Navigasi Soal</h3>
        <div
          class="flex overflow-auto h-1/2 flex-row md:grid md:grid-cols-2 lg:grid-cols-5 overflow-x-hidden px-2 pb-12 gap-3"
        >
          <div
            v-for="(question, index) in questions"
            :key="index"
            class="text-center border rounded cursor-pointer py-2 flex-shrink-0 w-14 h-10"
            @click="handleNavigate(index)"
            :class="{
              'bg-blue-500 text-white': currentQuestion === index,
              'bg-green-500 text-white':
                answers[index] !== 'x' && currentQuestion !== index,
            }"
          >
            {{ index + 1 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [Object],
      currentQuestion: 0,
      selectedAnswer: 'x',
      answers: [],
      showModal: false,
    }
  },
  props: {
    timesup: Boolean,
  },
  watch: {
    timesup(newVal) {
      if (newVal) {
        this.handleConfirm()
      }
    },
  },
  methods: {
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
        }))

        this.questions = formattedQuestions
      } catch (err) {
        console.error('Error fetching questions:', err.message)
        throw err
      }
    },
    async postAnswers() {
      try {
        const idToUpdate = localStorage.getItem('user_id')
        const tryoutTitle = this.$route.params.id

        const tryoutData = {}
        tryoutData[tryoutTitle] = this.answers

        const { data, error } = await this.$supabase
          .from('users')
          .update(tryoutData)
          .eq('id', idToUpdate)

        if (error) {
          throw error
        }
      } catch (err) {
        console.error('Error fetching questions:', err.message)
        throw err
      }
    },

    nextQuestion() {
      this.updateAnswers(this.selectedAnswer)
      this.selectedAnswer = this.answers[this.currentQuestion + 1]
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
        localStorage.setItem('currentQuestion', this.currentQuestion.toString())
      }
    },
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.selectedAnswer = this.answers[this.currentQuestion - 1]
        this.currentQuestion--
      }
    },
    updateAnswers(answer) {
      this.answers[this.currentQuestion] = answer
      localStorage.setItem('answers', JSON.stringify(this.answers))
    },

    updateSelectedAnswer(answer) {
      this.selectedAnswer = answer
    },
    handleNavigate(index) {
      this.currentQuestion = index
      this.selectedAnswer = this.answers[index]
    },
    submitQuestions() {
      this.showModal = true
    },
    callNextAndSubmit() {
      this.nextQuestion()
      this.submitQuestions()
    },
    fillAnswer() {
      const savedAnswers = localStorage.getItem('answers')
      if (savedAnswers) {
        this.answers = JSON.parse(localStorage.getItem('answers'))
      } else {
        for (let i = 0; i < this.questions.length; i++) {
          this.answers.push('x')
        }
      }
    },
    loadRecentPage() {
      const currentPage = parseInt(localStorage.getItem('currentQuestion'))
      if (currentPage) {
        this.currentQuestion = currentPage
      }
    },
    async handleConfirm() {
      await this.postAnswers()
      this.showModal = false
      this.$emit('confirm-clicked')
      localStorage.removeItem('currentQuestion')
      localStorage.removeItem('answers')
      setTimeout(() => {
        this.$router.push('/')
      }, 3000)
    },
    handleCancel() {
      this.showModal = false
    },
  },
  computed: {
    totalQuestions() {
      return this.questions.length
    },
  },
  async mounted() {
    await this.fetchQuestions()
    this.fillAnswer()
    this.loadRecentPage()
  },
}
</script>

<style></style>
