<template>
  <Header @navigate="navigate" />
  <router-view /> <!-- itt jelenik meg az aktuális oldal -->
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { Header },
  methods: {
    navigate(route) {
      this.$router.push({ path: `/${route}` }) // Router navigáció
    }
  }
}
</script>


<style>
  body, html {
  margin: 0;
  padding: 0;
  background-color: #201f1f; /* sötétszürke */
  color: #f1f1f1;           /* világos szöveg */
  font-family: Arial, sans-serif;
}

.page {
  padding: 80px 20px; /* header miatt */
}

</style>