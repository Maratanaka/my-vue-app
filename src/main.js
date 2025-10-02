import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)  // <-- ez nagyon fontos
  .mount('#app')
