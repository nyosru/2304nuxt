<template>
    <div>
        <Head>
            <title>NEWS</title>
        </Head>
        <h2>777 news</h2>
        <NewsItem />

        items: {{ items }}
    </div>
</template>

<script setup>

const url = 'https://yandex.ru'
const { data: items } = await useAsyncData('videos', () => $fetch(url) )

</script>