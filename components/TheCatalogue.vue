<template>
  <a href="#" class="block overflow-hidden border">
    <img
      src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/catalogue/CPNS-2023.png"
      alt=""
      class="hidden lg:block lg:h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    />

    <div class="border border-gray-100 bg-white p-6">
      <span
        class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
      >
        New
      </span>

      <h3 class="mt-4 text-lg font-medium text-gray-900">{{ title }}</h3>

      <p class="mt-1.5 text-sm text-gray-700">Rp {{ price }}</p>

      <form class="mt-4">
        <button
          class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
        >
          Beli
        </button>
      </form>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    title: String,
    price: Number,
  },
}
</script>
