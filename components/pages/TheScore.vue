<template>
  <div class="w-full">
    <div class="w-full py-16">
      <div class="lg:flex flex-row w-full lg:ml-4 justify-start">
        <div class="grid grid-cols lg:grid-cols-4 gap-4 p-6">
          <div
            v-for="(item, index) in tryouts"
            :key="index"
            class="bg-gray-200 lg:w-4/6 p-4 shadow-md rounded-md"
          >
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center">
                <div class="h-6 w-6 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
                <span class="text-xl font-medium">{{ item.title }}</span>
              </div>
            </div>
            <div>
              <p>Date: {{ item.date }}</p>
              <p>Type: {{ item.type }}</p>
            </div>
            <div class="mt-4">
              <button
                @click="handleSelect(item.url)"
                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                lihat nilai
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheDivider from '../TheDivider.vue'
export default {
  data() {
    return {
      components: {
        TheDivider,
      },
    }
  },
  props: {
    tryouts: Array,
  },
  methods: {
    handleSelect(url) {
      const formatUrl = `score/${url}`
      this.$router.push(formatUrl)
    },
  },
  mounted() {
    this.$emit('score-mounted')
  },
}
</script>

<style scoped></style>
