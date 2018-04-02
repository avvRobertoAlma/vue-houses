import Vue from 'vue'
import Router from 'vue-router'
import HousesList from '@/components/HousesList'
import HouseForm from '@/components/HouseForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/houses',
      name: 'HousesList',
      component: HousesList
    },
    {
      path: '/houses/new',
      name: 'NewHouse',
      component: HouseForm
    }
  ]
})
