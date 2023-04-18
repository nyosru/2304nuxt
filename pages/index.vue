<template>
  <div>
    <Head>
      <title>index</title>
    </Head>
    <div class="container">
      <div class="row mb-5 mt-3">
        <div
          class="col-12 text-center"
          style="background-color: #ffeeee; border-radius: 20px;"
        >
          <h2>index page</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <the-perevod />
        </div>
        <div class="col-6">
          7555
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
router.push({ path: '/ru' })
</script>
