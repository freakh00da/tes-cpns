<template>
  <div class="w-full">
    <section class="bg-white">
      <div class="mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="max-w-3xl text-start">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome to Jago CPNS
          </h2>

          <p class="mt-4 text-gray-500 sm:text-xl">
            Jago CPNS adalah panduan lengkap untuk sukses dalam tes CPNS. Dengan
            materi terkini dan latihan intensif, kami siap mempersiapkan Anda
            secara optimal. Temukan strategi terbaik, latihan soal, dan panduan
            ahli yang membantu Anda mencapai hasil terbaik. Mulailah persiapan
            Anda menuju karier sebagai pegawai negeri sipil dengan Jago CPNS.
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Saldo
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                Rp 200.000
              </dd>
            </div>

            <div
              class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Tryout Terdaftar
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                2
              </dd>
            </div>

            <div
              class="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Total User
              </dt>

              <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                86.000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <TheDivider :title="'News'" />
    <the-news />
  </div>
</template>
<script>
import TheDivider from '../TheDivider.vue'
export default {
  components: {
    TheDivider,
  },
}
</script>
