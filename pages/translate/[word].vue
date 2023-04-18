<template>
    <div>
        <Head>
            <title>word</title>
        </Head>
        <h2>now word: {{ route.params.word }}</h2>
        <!-- <the-perevod/> -->
    </div>
</template>

<script setup>

const route = useRoute()

let ww = route.params.word
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.word)

</script>