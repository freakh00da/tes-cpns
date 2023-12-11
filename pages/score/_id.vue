<template>
  <div>
    <empty-page
      v-if="!userAnswers"
      :title="'Anda belum mengerjakan tryout ini!'"
    />
    <div v-if="userAnswers" class="relative">
      <div class="fixed top-0 left-0 right-0 bg-white z-10">
        <header class="flex justify-between border-b border-black h-20">
          <h1 class="text-2xl m-2 md:m-6 font-medium">
            {{ this.$route.params.id }}
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
      </div>
      <div class="flex flex-col md:flex-row md:h-screen">
        <div class="flex flex-col md:w-1/5 border-r border-black">
          <div class="border-b border-black mt-20">
            <div class="hidden md:block ml-4">
              <img
                src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png"
                alt=""
                class="w-auto h-20"
              />
            </div>
            <div class="flex justify-between mx-6 my-4">
              <div class="text-center p-3 w-fit">
                <h1 class="text-lg">Jumlah Soal</h1>
                <h1 class="text-3xl font-medium">{{ questions.length }}</h1>
              </div>
              <div class="text-center p-3 w-fit">
                <h1 class="text-lg">Jawaban Benar</h1>
                <h1 class="text-3xl font-medium">{{ calculateScore }}</h1>
              </div>
            </div>
          </div>
          <div class="border-b border-black">
            <div class="mx-auto my-6 text-center">
              <h1 class="text-xl mb-1">Nilai</h1>
              <h1 class="text-5xl font-medium">{{ calculateScore * 5 }}</h1>
            </div>
          </div>

          <!-- Navigate -->
          <div
            class="w-screen md:w-full navigation overflow-auto flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-y-4 p-4"
          >
            <div
              v-for="(question, index) in questions"
              @click="handleNavigate(index)"
              :key="index"
              :class="{ 'text-white bg-gray-500': currentQuestion === index }"
              class="text-center border border-black cursor-pointer py-2 flex-shrink-0 w-10 h-10 mr-2"
            >
              {{ index + 1 }}
            </div>
          </div>
        </div>

        <div class="md:w-4/5 md:mt-20">
          <!-- soal -->
          <div class="md:hidden block">
            <img
              src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png"
              alt=""
              class="w-auto h-20"
            />
          </div>
          <div class="p-5 md:p-10">
            <h1 class="text-3xl font-semibold mb-2 md:mb-6">
              Soal {{ currentQuestion + 1 }}
            </h1>
            <p class="mb-4 text-xl">
              {{ questions[currentQuestion].question }}
            </p>

            <div class="flex flex-col">
              <ul>
                <!-- choice -->
                <li
                  v-for="(choice, index) in questions[currentQuestion].choices"
                  :key="index"
                  class="mb-3"
                >
                  <button disabled class="flex flex-row items-center">
                    <div
                      class="text-center border border-black pt-1 flex-shrink-0 w-9 h-9 mr-3"
                      :class="{
                        'bg-gray-500':
                          choice.key === userAnswers[currentQuestion],
                      }"
                    >
                      {{ choice.key }}
                    </div>
                    <p class="text-start">{{ choice.text }}</p>
                    <span
                      v-if="choice.key === questions[currentQuestion].answer"
                      class="ml-2 text-green-500"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-8 h-8"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
              <div
                v-if="
                  userAnswers[currentQuestion] ===
                  questions[currentQuestion].answer
                "
                class="flex w-fit p-2 bg-gray-200 text-green-600"
              >
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <h1>Jawaban Benar</h1>
              </div>
              <div v-else class="flex w-fit p-2 bg-gray-200 text-red-600">
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <h1>Jawaban Salah</h1>
              </div>
              <h1 class="font-semibold my-2">Pembahasan:</h1>
              <p>{{ questions[currentQuestion].explain }}</p>
            </div>
            <div class="border-b my-4 border-black"></div>
            <div class="justify-center md:justify-start mt-4 flex flex-row">
              <button
                @click="handlePrev"
                :disabled="currentQuestion === 0"
                :class="{ 'text-gray-300': currentQuestion === 0 }"
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
                @click="handleNext"
                :disabled="currentQuestion === questions.length - 1"
                :class="{
                  'text-gray-300': currentQuestion === questions.length - 1,
                }"
                class="flex flex-row items-center font-medium px-2 py-1"
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
            </div>
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
      showAlert: true,
      currentQuestion: 0,
      questions: [
        {
          question: '',
          choices: [
            { text: '', key: '' },
            { text: '', key: '' },
            { text: '', key: '' },
          ],
          answer: '',
          explain: '',
        },
      ],
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
          explain: item.explain || '-',
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
    handleNavigate(index) {
      this.currentQuestion = index
    },
    handleNext() {
      if (this.currentQuestion !== this.questions.length - 1) {
        this.currentQuestion++
      }
    },
    handlePrev() {
      if (this.currentQuestion !== 0) {
        this.currentQuestion--
      }
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
