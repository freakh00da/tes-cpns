<template>
  <span class="flex items-center my-6">
    <span class="h-px flex-1 bg-black"></span>
    <span class="shrink-0 px-6">{{ title }}</span>
    <span class="h-px flex-1 bg-black"></span>
  </span>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>
