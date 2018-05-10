<template>
 <div class="container">
            <h4>Añade aquí un nuevo artículo</h4>
            <form role="form" id="Formulario" action="../php/contacto2.php" method="POST">
                <div class="form-group">
                    <label class="control-label" for="Nombre">URL del artículo</label>
                    <input type="text" class="form-control" id="Nombre" name="Nombre" placeholder="Introduzca enlace del artículo" required autofocus />
                </div>            
                <div class="form-group">
                    <label class="control-label" for="Motivo">Título del artículo</label>
                    <input type="text" class="form-control" id="título" placeholder="Introduzca título del artículo" required autofocus />
                </div>
                
                <div class="form-group">
                    <label class="control-label" >Descripción del artículo</label>
                    <textarea rows="5" cols="30" class="form-control" id="descripción" placeholder="..." required ></textarea>
                </div>
                <div class="form-group">                
                    <input type="submit" class="btn btn-primary" value="Enviar">
                    <input type="reset" class="btn btn-default" value="Limpiar">                
                </div>
                <div id="respuesta" style="display: none;"></div>
            </form>
        </div>
</template>

<script>
export default {
    name: 'nuevoarticulo'
}
</script>

