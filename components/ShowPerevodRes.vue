<template>
  <div>
    <h3>Как оксфорд переводит {{ da.value.data.id }}</h3>
    <br />

    <!-- <pre> -->
    <!-- {{ da.value.data.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text }} -->
    <!-- {{ da.value.data.id }} -->
    <!-- </pre> -->

    <table class="table table-striped" v-if="1==2">
      <thead>
        <tr>
          <td>Что</td>
          <td>Значение</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Перевод</td>
          <td>
            <div style="max-height: 100px; overflow: auto;">
              {{
                da.value.data.results[0].lexicalEntries[0].entries[0].senses[0]
                  .translations[0].text
              }}
            </div>
          </td>
        </tr>

        <tr
          v-for="v in da.value.data.results[0].lexicalEntries[0].entries[0]
            .senses[0].examples"
          :key="v"
        >
          <td>Пример использования</td>
          <td>
            {{ v.text }}
            <br />
            {{ v.translations[0].text }}
          </td>
        </tr>

        <!-- произношение оригинала -->

        <tr
          v-for="v in da.value.data.results[0].lexicalEntries[0].entries[0]
            .pronunciations"
          :key="v"
        >
          <td>Как звучит оригинал</td>
          <td>
            {{ v.dialects[0] }}
            <br />
            <a :href="v.audioFile" target="_blank">{{ v.audioFile }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import oxford from './use/oxford.js'
const {
  word,
  // loading,
  // errored,
  res: da,
} = oxford()
</script>
