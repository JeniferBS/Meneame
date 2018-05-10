<template>
  <div>
    <p>Regístrate como nuevo usuario en nuestra web aquí</p>
   <div class=" container bg-light text-center" >
      <div class=" dropdown-dividerrow ">
        <form class=" dropdown-dividercol-md-3 px-14 py-3">
          <div class="form-group text-center">
            <label for="exampleDropdownFormEmail1">Email</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@ejemplo.com">
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">contraseña</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="contraseña">
          </div>
        
          <button type="submit" class="btn btn-primary">Confirmar</button>

            <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck">
            <label class="form-check-label" for="dropdownCheck">
              Recordar datos
            </label>
          </div>
        </form>
        <div class="dropdown-divider "></div>
         <router-link :to="{name: 'login'}">
        <a class="dropdown-item" href="#">Estas registrado?</a>
        </router-link>
        </div>  
  </div>
  </div>
</template>


<script>
export default {
    name: 'register'
}
</script>