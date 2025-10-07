<template>
  <div class="project-page">
    <div class="page projects title">
      <h1>Projects</h1>
      <p>Itt mutathatod be a projektjeidet.</p>
    </div>

    <div class="card-container">
      <div
        class="card"
        v-for="(project, index) in projects"
        :key="index"
        @mousemove="handleMouseMove($event, index)"
        @mouseleave="resetTransform(index)"
        ref="cards"
      >
        <!-- 🔹 KÉP HOZZÁADVA -->
        <img v-if="project.image" :src="project.image" :alt="project.title" class="card-image" />

        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      projects: [
        { title: "Spiral Hub", description: "UX/UI projektek megosztása egymással.", image: "/images/SpiralMainPaig.png" },
        { title: "Csillagos Égbolt", description: "Rövid leírás a projektről.", image: "/images/space.png" },
        { title: "Login/Regist", description: "Rövid leírás a projektről.", image: "/images/LoginRegist.png" },
        { title: "Projekt 4", description: "Rövid leírás a projektről.", image: "/images/projekt4.jpg" },
      ],
    };
  },

  methods: {
    handleMouseMove(e, index) {
      const card = this.$refs.cards[index];
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    resetTransform(index) {
      const card = this.$refs.cards[index];
      card.style.transform = "rotate3d(0, 0, 0, 0deg)";
    },
  },
};
</script>

<style>
.project-page {
  background-color: #1f1f1f;
  color: #f1f1f1;
  padding: 80px 20px 20px 20px;
  font-family: "Exo 2", sans-serif;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}

.page.projects.title {
  padding: 80px 20px;
  background-color: #1f1f1f;
  color: #f1f1f1;
  font-family: "Exo 2", sans-serif;
  text-align: center;
}

.card-container {
  margin: 40px auto;
  display: grid;
  gap: 20px;
  justify-content: center;
  perspective: 1000px;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card {
  width: 300px;
  height: 300px;
  background-color: rgba(57, 52, 52, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  padding: 20px;
  transition: transform 0.1s ease-out;
  will-change: transform;
  transform-style: preserve-3d;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
