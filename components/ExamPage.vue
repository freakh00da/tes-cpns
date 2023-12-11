<template>
  <div class="relative">
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
    <div class="fixed top-0 left-0 right-0 z-10">
      <header class="flex justify-between border-b bg-white border-black">
        <div class="ml-4">
          <img
            src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png"
            alt="logo"
            class="w-auto h-16"
          />
        </div>
        <div class="border border-black h-10 w-fit py-2 px-4 my-4 mx-6">
          <h2 class="font-medium">{{ timeLeft }}</h2>
        </div>
      </header>
    </div>
    <div class="flex h-screen pt-10 flex-col md:flex-row">
      <div class="md:w-1/5 flex flex-col">
        <div
          class="md:border-r border-b pt-2 border-black mt-8 px-4 pb-2 h-fit w-full"
        >
          <h1 class="text-xl font-medium">{{ this.$route.params.id }}</h1>
        </div>
        <div
          class="w-full navigation overflow-auto flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-y-4 p-4"
        >
          <div
            @click="handleNavigate(index)"
            v-for="(question, index) in questions"
            :key="index"
            :class="{
              'bg-gray-600 text-white': currentQuestion === index,
              'bg-green-500 text-white':
                answers[index] !== 'x' && currentQuestion !== index,
            }"
            class="text-center border border-black cursor-pointer py-2 flex-shrink-0 w-10 h-10 mr-2"
          >
            {{ index + 1 }}
          </div>
        </div>
      </div>
      <div class="md:w-4/5">
        <div class="p-10" v-if="currentQuestion !== null">
          <h1 class="text-3xl font-semibold mb-6">
            Soal {{ currentQuestion + 1 }}
          </h1>
          <p class="mb-4 text-xl">
            {{ questions[currentQuestion].question }}
          </p>

          <div class="flex flex-col">
            <ul>
              <li
                v-for="(choice, choiceIndex) in questions[currentQuestion]
                  .choices"
                :key="choiceIndex"
                class="mb-3"
              >
                <button
                  @click="updateSelectedAnswer(choice.key)"
                  class="flex flex-row items-center"
                >
                  <div
                    :class="{
                      'bg-gray-600 text-white': selectedAnswer === choice.key,
                      'bg-white': selectedAnswer !== choice.key,
                    }"
                    class="text-center border border-black cursor-pointer pt-1 flex-shrink-0 w-9 h-9 mr-3"
                  >
                    {{ choice.key }}
                  </div>
                  <p class="text-start">{{ choice.text }}</p>
                </button>
              </li>
            </ul>
          </div>
          <div class="border-b my-4 border-black"></div>
          <div class="mt-4 flex flex-row">
            <button
              @click="prevQuestion"
              :disabled="currentQuestion === 0"
              :class="{
                'text-gray-400': currentQuestion === 0,
                'text-black hover:bg-gray-100': currentQuestion !== 0,
              }"
              class="flex flex-row items-center font-medium mr-4 px-2 py-1"
            >
              <span class="mr-2 border rounded-full p-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sebelumnya
            </button>
            <button
              @click="nextQuestion"
              :class="{
                hidden: currentQuestion === totalQuestions - 1,
              }"
              class="flex flex-row items-center font-medium px-2 py-1 hover:bg-gray-100"
            >
              Selanjutnya
              <span class="ml-2 border rounded-full p-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <button
              @click="callNextAndSubmit"
              v-if="currentQuestion === totalQuestions - 1"
              class="flex flex-row items-center font-bold px-2 py-1 hover:bg-gray-100"
            >
              Submit
              <span class="ml-2 rounded-full p-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </span>
            </button>
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
      timeLeft: '1j :40m :0d',
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
    startCountdown() {
      let timeInSeconds = localStorage.getItem('countdownStartTime')
        ? Math.floor(
            (localStorage.getItem('countdownStartTime') - Date.now()) / 1000
          )
        : 6000

      const countdown = setInterval(() => {
        const hours = Math.floor(timeInSeconds / 3600)
        const minutes = Math.floor((timeInSeconds % 3600) / 60)
        const seconds = timeInSeconds % 60

        this.timeLeft = `${hours}j :${minutes}m :${seconds}d`

        timeInSeconds--

        if (timeInSeconds < 0) {
          clearInterval(countdown)
          this.timeLeft = 'Waktu sudah habis!'
          this.$emit('times-up')
          localStorage.removeItem('countdownStartTime') // Hapus waktu yang tersimpan setelah selesai
        }
      }, 1000)

      // Simpan waktu mulai countdown ke localStorage saat countdown dimulai
      localStorage.setItem(
        'countdownStartTime',
        Date.now() + timeInSeconds * 1000
      )
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
    this.startCountdown()
    this.loadRecentPage()
  },
}
</script>

<style scoped>
.navigation::-webkit-scrollbar {
  width: 2px;
  height: 2px;
  background-color: darkgrey;
}

.navigation::-webkit-scrollbar-thumb {
  background-color: black;
}
</style>
