<template>
  <div>
    <div v-if="loading">
      ... Loading ...
    </div>
    <div v-else-if="errored">
      <!-- </div> -->
      <!-- <div> -->
      <!-- <div v-if="1==2" > -->
      <!-- <div
        class="alert alert-danger"
        v-if="( typeof( res.value.data.error ) !== 'undefined' )"
      > -->
      <!-- Упс: {{ res.value.data.error }} -->
      Упс: {{ errored }}
    </div>
    <show-perevod-res v-else></show-perevod-res>
    <!-- </div> -->
    <br />
  </div>
</template>

<script setup>

import oxford from './use/oxford.js'
const {
  //
  word,
  loading,
  errored,
  res,
} = oxford()

const getTranslationRu = async (wordOrigin = '') => {
  console.log('wordOrigin', wordOrigin)

  errored.value = false

  //   word.value = wordOrigin
  res.value = {}
  loading.value = true

  try {
    let datar = {
      word: word.value,
      fromLang: 'en',
      toLang: 'ru',
    }

    let url = 'http://localhost/api/translate'

    const { pending, data: items } = useLazyFetch(url, {
      method: 'POST',
      body: datar,
    })

    //   console.log('------56------')
    //   console.log('getTranslationRu', items)

      if (items.info.http_code == 429) {
        errored.value = 'Usage limit exceeded.'
      }
      else if (typeof items.data.error !== 'undefined') {
        errored.value = items.data.error
      }

    loading.value = false

    // console.log('------72------')
    // console.log('items', items)

    res.value = items
  } catch (error) {
    console.log('------76------')
    console.log(error)
  }
}

// const getTranslation = async (wordOrigin = '') => {

//   try {
//     const response = await fetch(
//       `https://od-api.oxforddictionaries.com/api/v2/translations/es/en/` +
//         wordOrigin,
//       {
//         method: 'GET',
//         headers: {
//           app_id: '1e0f6373',
//           app_key: '6da9adfd84b6b43a9024d0d58856373e',
//         },
//       },
//     )
//     const data = await response.json()
//   } catch (error) {
//     console.error(error)
//   }
// }

const route = useRoute()

// слово для перевода изменилась
watchEffect(() => {
  getTranslationRu(route.query.word)
})

getTranslationRu(route.query.word)
</script>
