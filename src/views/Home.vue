<template>
  <div class="home-page">
    <div class="hero">
      <h1>Martin Tokes</h1>
      <p>Developer / Designer / Student</p>

      <img src="@/assets/IMG_3947.jpg" alt="Profilkép" class="profile-pic" />
        <h2>Skills</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Eum quas magnam, dolore officia adipisci
              autem, animi fugit iure ducimus fuga blanditiis!
               Explicabo assumenda atque maxime commodi dolorum
                vitae laborum enim!</p>
      <div class="buttons">
        <button @click="$router.push('/projects')">Projects</button>
        <button @click="$router.push('/contact')">Contact</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center; /* vízszintesen középre */
  align-items: center;     /* függőlegesen középre */
  min-height: calc(100vh - 60px); /* a header magasságát levonjuk */
  background-color: #1f1f1f; /* sötétszürke háttér */
  color: #f1f1f1;
  padding: 20px;
}

.hero {
  max-width: 450px;   /* ne legyen túl széles */
  width: 100%;
  text-align: left;   /* alapból minden szöveg balra */
  margin: 0 auto;   
  padding: 0 16px;
  box-sizing: border-box;  /* a teljes hero középre kerül */
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.hero .buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #444;
  color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.hero .buttons button:hover {
  background-color: #666;
}

.profile-pic {
  width: 100px;       /* tetszőleges méret */
  height: 100px;
  border-radius: 50%; /* kör alak */
  object-fit: cover;  /* arányosan kitölti a keretet */
  display: block;
  margin: 20px auto;     /* térköz a szöveg és gombok között */
  border: 3px solid #f1f1f1; /* opcionális keret */
}

@media (min-width: 768px) {
  .hero {
    padding: 0; /* nagyobb kijelzőn ne legyen plusz padding */
  }
}

</style>
