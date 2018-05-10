<template>

<div>
        <p class="text-center">Incluye aquí tu correo para recuperar la contraseña</p>
    <div class=" container bg-light text-center" >
      <div class=" dropdown-dividerrow ">
        <form class=" dropdown-dividercol-md-3 px-14 py-3" @submit="resetpassword">
          <div class="form-group text-center">
            <label for="exampleDropdownFormEmail1">Email</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@ejemplo.com" v-model="email">
          </div>
          
        
          <button type="submit" class="btn btn-primary">Enviar</button>
         

            
        </form>
        </div>
  </div>
</div>
  
</template>

<script>
import {auth} from '../firebaseConfig'

export default {
    name: 'resetpassword',
    data(){
        return{
            email: "",
            password:""
        }
    },
    methods:{
        resetpassword(){
          
         auth.sendPasswordResetEmail(this.email).then(function() {
                // Email sent.
        }).catch(function(error) {
                
        });
        }
    }
}
</script>

