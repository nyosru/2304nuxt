<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">
          <img src="/logoipsum-265.svg" alt="" />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Переключатель навигации"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="m in menu" :key="m.href">
              <NuxtLink
                :to="m.href"
                class="nav-link"
                active-class="active"
                aria-current="page"
              >
                {{ m.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const menu = [
//   {
//     href: '/',
//     name: 'Стартовая',
//   },
  {
    href: '/ru',
    name: 'Русский',
  },
  {
    href: '/es',
    name: 'Испанский',
  },
//   {
//     href: '/news',
//     name: 'Новостя',
//   },
//   {
//     href: '/about',
//     name: 'About',
//   },
//   {
//     href: '/contact',
//     name: 'Контакты',
//   },
]
</script>

<style scoped>
a {
  margin-right: 10px;
}
.router-link-active {
  text-decoration: underline;
  color: black;
}
img {
  margin: 20px 50px;
}
</style>
