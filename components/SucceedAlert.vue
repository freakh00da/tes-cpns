<template>
  <div
    role="alert"
    class="rounded-xl border border-gray-100 bg-green-500 shadow-md p-4"
  >
    <div class="flex items-start gap-4">
      <span class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>

      <div class="flex-1">
        <strong class="block font-medium text-white"> {{ title }} </strong>

        <p class="mt-1 text-sm text-gray-100">
          {{ description }}
        </p>
      </div>

      <button @click="handleClose" class="text-white transition">
        <span class="sr-only">Dismiss popup</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
  },
  methods: {
    handleClose() {
      this.$emit('close-clicked')
    },
  },
}
</script>
