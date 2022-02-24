import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nuevo from '../views/Nuevo.vue'
import Conversion2 from '../views/Conversion2.vue'
import PrimeraConversion from '../views/PrimeraConversion.vue'
import TerceraConversion from  '../views/TerceraConversion.vue'
import Conversion4 from '../views/Conversion4.vue'
import Conversion5 from '../views/Conversion5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/nuevo',
    name: 'Nuevo',
    component: Nuevo
  },
  {
    name: 'conversion1',
    path: '/conversion1',
    component: PrimeraConversion
  },
  {
    ////
        path: '/conversion2',
        name: 'Conversion2',
        component: Conversion2
    ////
  },
  {
    name:'TerceraConversion',
    path: '/conversion3',
    component: TerceraConversion
  },
  {
    name:'Conversion4',
    path: '/conversion4',
    component: Conversion4
  },
  {
    name:'Conversion5',
    path: '/conversion5',
    component: Conversion5
  }
 
]

const router = new VueRouter({
  routes
})

export default router