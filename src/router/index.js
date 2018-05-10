import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import ResetPassword from '../components/ResetPassword'
import NuevoArticulo from '../components/NuevoArticulo'
import ArticuloReciente from '../components/ArticuloReciente'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPassword
    },

    {
      path: '/nuevoarticulo',
      name: 'nuevoarticulo',
      component: NuevoArticulo
    },

    {
      path: '/articuloreciente',
      name: 'articuloreciente',
      component: ArticuloReciente
    }

  ]
})
