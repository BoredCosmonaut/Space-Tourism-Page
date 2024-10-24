import { createRouter, createWebHistory } from 'vue-router'
import homeView from '@/views/homeView.vue'
import destinationView from '@/views/destinationView.vue'
import crewView from '@/views/crewView.vue'
import techView from '@/views/techView.vue'
const routes = [
  {
    path:"/home",
    name:"Home",
    component: homeView
  },
  {
    path:"/destination",
    name:"Destination",
    component:destinationView
  },
  {
    path:"/crew",
    name:"Crew",
    component:crewView
  },
  {
    path:"/technology",
    name:"Tech",
    component:techView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
