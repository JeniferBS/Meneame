<template>
   <div class=" container bg-light text-center" >
      <div class=" dropdown-dividerrow ">
        <form class=" dropdown-dividercol-md-3 px-14 py-3" @submit="login">
          <div class="form-group text-center">
            <label for="exampleDropdownFormEmail1">Email</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@ejemplo.com" v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">contraseña</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="contraseña" v-model="password">
          </div>
        
          <button type="submit" class="btn btn-primary">Entrar</button>

            <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck">
            <label class="form-check-label" for="dropdownCheck">
              Recordar datos
            </label>
          </div>
        </form>
        <div class="dropdown-divider "></div>
        <router-link :to="{name: 'resetpassword'}">
        <a class="dropdown-item" href="#">Olvidaste tu contraseña?</a>
        </router-link>
        </div>  
  </div>
</template>

<script>

import {auth} from '../firebaseConfig'

export default {
    name: 'login',
    data(){
          return{
              email: "",
              password:""
          }
      },
      methods:{
          login(){
              auth.signInWithEmailAndPassword(this.email,this.password)
              .then((user)=>{
                  this.$router.replace("nuevoarticulo")
              })
              .catch((error)=>{
                  console.log(error)
              })
          }
      }

}
</script>
