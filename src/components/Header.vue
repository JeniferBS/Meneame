<template>
<div>
  <nav class="navbar navbar-expand-md bg-primary">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse navbar-dark bg-primary" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Menéame</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#"><span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#"></a>
      </li>
    </ul>
    <router-link :to="{name: 'register'}">
    <button type="button" class="btn btn-dark">Registrarse</button>
    </router-link>
    <h1>|</h1>
    <router-link :to="{name: 'login'}">
    <button type="button" class="btn btn-dark">Login</button>
    </router-link>

  </div>
 
</nav>
<!-- FIN header Menéame -->


<!-- navbar nuevo artículo, portada y artículos -->
 <div>
    <nav class="nav bg-secondary">
      <router-link :to="{name: 'nuevoarticulo'}">
      <button type="button" class="btn btn-dark">Nuevo artículo</button>
      </router-link>
      <router-link :to="{name: 'home'}">
      <a class="nav-link bg-light" href="#">Portada</a>
      </router-link>
      <a class="nav-link bg-light " href="#">Artículos</a>
      <router-link :to="{name: 'articuloreciente'}">
      <a class="nav-link bg-light " href="#">Artículos recientes</a>
      </router-link>
    </nav>
  </div>

</div>
  
</template>


<script>
export default {
  
}
</script>

