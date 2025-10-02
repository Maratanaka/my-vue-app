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
  background-color: #1f1f1f;
  color: #f1f1f1;
  padding: 80px 20px 20px 20px; /* 80px top a header miatt */
}
.hero {
  max-width: 450px;
  width: 100%;
  text-align: left;
  margin: 0 auto;
}


.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero h2 {
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;  
}

.hero h2::after {
  content: "";
  display: block;
  width: 50px;           /* aláhúzás hossza */
  height: 3px;           /* vonal vastagsága */
  background-color: #0ab8b8; /* kékes szín, illik a gombhoz */
  margin-top: 5px;       /* távolság a szöveg alatt */
  border-radius: 2px;    /* lekerekített végek */
}

.hero p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.hero .buttons {
  display: flex;
  justify-content: center; /* gombok középre */
  margin-top: 20px;
}

.hero .buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #0ab8b8;
  color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.hero .buttons button:hover {
  background-color: #0d6c7a;
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
    padding: 0 50px; /* nagyobb kijelzőn ne legyen plusz padding */
  }
}

</style>
