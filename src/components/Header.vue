<template>
  <header class="site-header">
    <div class="container header-inner">
        <router-link to="/" class="brand">
        <img src="@/assets/buddha-india-landmark-svgrepo-com.png" alt="Logo" class="logo"/>
        Martin Tokes
      </router-link>

      <div class="hamburger" :class="{ open: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav :class="{ open: isMenuOpen }">
  <a href="#" @click.prevent="nav('')">Home</a>
  <a href="#" @click.prevent="nav('about')">About</a>
  <a href="#" @click.prevent="nav('projects')">Projects</a>
  <a href="#" @click.prevent="nav('contact')">Contact</a>
</nav>

    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return { isMenuOpen: false }
  },
  methods: {
    nav(route) {
      this.$router.push({ path: `/${route}` })
      this.isMenuOpen = false
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style>
html { scroll-behavior: smooth; }

.site-header {
  background: #1f1f1f;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
   font-family: "Exo 2", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
   background-color: rgba(31, 31, 31, 0.7); /* áttetsző fekete */
  backdrop-filter: blur(10px); /* opcionális: enyhe elmosás a tartalom mögött */
  z-index: 1000;
  box-shadow: 0 1px 0 rgba(0,0,0,0.04);
}

.header-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }

.header-inner nav a { margin-left: 18px; color: #ffffff; text-decoration: none; line-height: 1; }

.brand { font-weight: 700; line-height: 1; display: flex; align-items: center; color: #ffffff; text-decoration: none; font-size: 1.2rem; }

.brand .logo { height: 30px; width: 30px; margin-right: 10px; object-fit: contain; }

.hamburger { display: none; flex-direction: column; justify-content: space-between; width: 25px; height: 18px; cursor: pointer; transition: all 0.3s ease; }
.hamburger span { display: block; height: 3px; background: #949494; border-radius: 2px; transition: all 0.3s ease; }
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

@media (max-width: 767px) {
  .header-inner nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    background: #949494;
    
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  .header-inner nav.open { max-height: 500px; }
  .header-inner nav a { margin: 10px 20px; line-height: 1.5; }
  .hamburger { display: flex; }
}
</style>
