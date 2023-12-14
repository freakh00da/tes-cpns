<template>
  <div class="w-full">
    <the-alert
      @accept-clicked="handleAccept"
      @reject-clicked="cancelModal"
      v-if="showModal"
      :title="'Konfirmasi Pembayaran!'"
      :description="'Permintaan pembayaran tidak dapat dibatalakan setelah anda klik Accept,pastikan anda telah membayar tagihan sebelum klik Accept'"
    />
    <div
      v-if="showComponent === 'PayHere'"
      class="w-full flex lg:flex-row flex-col"
    >
      <div class="flex flex-col border border-black mt-20 mx-4 p-4 h-fit">
        <h1 class="text-xl text-center font-semibold">QRIS</h1>
        <img
          src="https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/qris"
          alt="QRIS"
        />
      </div>
      <div class="border border-black mt-6 lg:mt-20 p-4 mx-4">
        <h1 class="text-xl font-semibold">Cara Pembayaran</h1>
        <ul>
          <li class="text-lg">
            Tersedia berbagai opsi pembayaran untuk kenyamanan Anda, termasuk
            Bank BCA, BRI, BNI, Gopay, Shopeepay, dan lainnya
          </li>
          <li>
            1. Buka aplikasi mobile-banking, OVO, Gojek, Dana, Link Aja Atau
            Lainnya
          </li>
          <li>
            2. Pilih opsi bayar lalu unggah screenshoot/scan QR Code melalui
            menu di kanan atas
          </li>
          <li>
            3. Input jumlah nominal sesuai dengan nominal dibawah ini,pastikan
            nominal yang dibayar sama dengan nominal dibawah
          </li>
          <li>4. Lalu klik Bayar.</li>
        </ul>
        <div class="border border-black mt-2 p-2">
          <h1 class="text-xl font-semibold mt-2 mx-2">Konfirmasi Pembayaran</h1>
          <div class="border p-2 m-2 text-xl">
            <h1>Nama : {{ confirmName }}</h1>
            <h1>
              Total Pembayaran :
              <strong class="font-semibold">Rp {{ confirmAmount }}</strong>
            </h1>
          </div>

          <div class="m-2 font-medium">
            <button
              @click="openModal"
              :disabled="isPaid"
              class="bg-blue-500 rounded text-white p-1"
              :class="{ 'bg-blue-200': isPaid }"
            >
              Saya sudah bayar
            </button>
            <button
              :disabled="isPaid"
              @click="handleCancel"
              class="bg-red-500 rounded text-white p-1"
              :class="{ 'bg-red-200': isPaid }"
            >
              Cancel pembayaran
            </button>
          </div>
        </div>
      </div>
      <div
        class="border border-black mt-6 lg:mt-20 mb-10 p-4 mx-4 lg:mb-0 text-center lg:max-w-xs"
      >
        <h1 class="text-xl font-semibold">Status Pembayaran</h1>
        <h1
          class="text-2xl border p-2 font-semibold mt-2 text-white"
          :class="{
            'bg-red-500': status === 'Menunggu Pembayaran',
            'bg-blue-500': status === 'Sedang Ditinjau',
          }"
        >
          {{ status }}
        </h1>
        <p class="text-start mt-2">
          Jika anda sudah membayar dan status pembayaran masih "sedang ditinjau"
          selama 6 jam silahkan hubungi Admin kami di
          <a href="https://t.me/mrxxis" class="text-blue-500 underline"
            >Telegram</a
          >
          atau
          <a href="https://wa.me/6289637150274" class="text-blue-500 underline"
            >Whatsapp</a
          >
        </p>
      </div>
    </div>
    <div
      v-if="showComponent === 'TheTopup'"
      class="w-full flex lg:flex-row flex-col"
    >
      <div class="flex flex-col border border-black mt-20 mx-4 p-4 h-fit">
        <form @submit.prevent="sendRequest">
          <div class="flex items-center">
            <label
              for="amount"
              class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="number"
                id="amount"
                v-model="amount"
                class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Jumlah Topup"
              />

              <span
                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Jumlah Topup x Rp 10.000
              </span>
            </label>
            <span class="ml-1 text-xs lg:text-lg">Rp {{ amount * 10000 }}</span>
          </div>
          <div class="flex items-center mt-6">
            <label
              for="name"
              class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="name"
                v-model="name"
                class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Name"
              />

              <span
                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
              >
                Atas Nama
              </span>
            </label>
            <span class="ml-2 text-xs lg:text-lg"></span>
          </div>
          <button
            :disabled="!name || !amount"
            type="submit"
            class="p-2 text-white rounded shadow-sm mt-4"
            :class="{
              'hover:bg-blue-400 bg-blue-500': name && amount,
              'bg-blue-200': !name || !amount,
            }"
          >
            Kirim Permintaan
          </button>
        </form>
      </div>
      <div class="h-fit border border-black mt-6 lg:mt-20 mx-4 p-4">
        <h1 class="text-lg font-medium my-2">Detail Order</h1>
        <p>Nama: {{ name }}</p>
        <p>
          Total Topup: <strong>Rp {{ amount * 10000 }}</strong>
        </p>
      </div>
      <div class="h-fit border border-black mt-6 lg:mt-20 mx-4 p-4 mb-10">
        <h1 class="text-lg font-medium">Informasi Topup</h1>
        <p>
          -TopUp hanya dilakukan melalui QRIS dengan nama
          <strong> "MitraBL*537394"</strong>
        </p>
        <p>-Saldo akan masuk ke akun maksimal 1x6 jam</p>
        <p>
          -Jika Saldo Anda tidak masuk Silahkan Hubungi Admin
          <a href="https://t.me/mrxxis" class="text-blue-500 underline"
            >Telegram</a
          >
          atau
          <a href="https://wa.me/6289637150274" class="text-blue-500 underline"
            >Whatsapp</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      amount: 1,
      name: '',
      showComponent: 'TheTopup',
      status: 'Menunggu Pembayaran',
      isPaid: false,
      confirmAmount: Number,
      confirmName: String,
    }
  },
  props: {
    useremail: String,
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    cancelModal() {
      this.showModal = false
    },
    async getUserInfo() {
      try {
        let { data, error } = await this.$supabase
          .from('transaction-request')
          .select('*')
          .eq('email', this.useremail)

        if (error) {
          throw error
        }
        if (data.length === 0) {
          this.showComponent = 'TheTopup'
        } else {
          this.showComponent = 'PayHere'
          this.confirmAmount = data[0].amount
          this.confirmName = data[0].name
          this.isPaid = data[0].user_status
          if (this.isPaid) {
            this.status = 'Sedang Ditinjau'
          } else {
            this.status = 'Menunggu Pembayaran'
          }
        }
      } catch (error) {
        console.error(
          'Terjadi kesalahan dalam mendapatkan info pengguna:',
          error.message
        )
      }
    },

    async handleCancel() {
      try {
        const { error } = await this.$supabase
          .from('transaction-request')
          .delete()
          .eq('email', this.useremail)

        if (error) {
          throw error
        }
        this.showComponent = 'TheTopup'
        console.log('Penghapusan berhasil')
      } catch (error) {
        console.error('Terjadi kesalahan dalam penghapusan:', error.message)
      }
    },
    async handleAccept() {
      try {
        const { data, error } = await this.$supabase
          .from('transaction-request')
          .update({ user_status: true })
          .eq('email', this.useremail)
          .select()

        if (error) {
          throw new Error('Gagal melakukan update.')
        } else {
          this.isPaid = true
          this.status = 'Sedang Ditinjau'
          this.showModal = false
        }
      } catch (err) {
        // Tangani kesalahan
        console.error('Terjadi kesalahan:', err)
        // Anda dapat menambahkan log atau tindakan lainnya di sini
      }
    },

    generateRandomNumber() {
      return Math.floor(Math.random() * (999 - 3 + 1)) + 3
    },
    async sendRequest() {
      try {
        const random = this.generateRandomNumber()
        const { data, error } = await this.$supabase
          .from('transaction-request')
          .insert([
            {
              amount: this.amount * 10000 + random,
              name: this.name,
              email: this.useremail,
            },
          ])
          .select()
        if (error) {
          throw new Error('Terjadi kesalahan saat mengirim permintaan')
        } else {
          this.showComponent = 'PayHere'
          await this.getUserInfo()
        }
      } catch (err) {
        console.error('Terjadi kesalahan:', err.message)
      }
    },
  },
  async mounted() {
    this.getUserInfo()
  },
}
</script>
