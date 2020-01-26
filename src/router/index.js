import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AddBusiness from '@/components/AddBusiness'
import ViewBusiness from '@/components/ViewBusiness'
import EditBusiness from '@/components/EditBusiness'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/AddBusiness',
      name: 'add-business',
      component: AddBusiness
    },
    {
      path: '/ViewBusiness',
      name: 'view-business',
      component: ViewBusiness
    },
    {
      path: '/EditBusiness',
      name: 'edit-business',
      component: EditBusiness
    }
  ]
})
