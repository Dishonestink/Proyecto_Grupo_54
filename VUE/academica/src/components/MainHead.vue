<template>
    <div>
        <header id="divSuperior"> <!--Se especifica la sección de cabecera HEADER-->
            Portal Académico
        </header>
        <!--Fin del encabezado-->
    </div>
</template>

<style scoped>
/*Se dan las caracteristicas de la sección de cabecera HEADER*/
#divSuperior {
    width:100%;
    position:absolute;
    top:0px;
    text-align: left;
    left:0px;
    height:30px;
    border:1px solid white;
    margin-bottom:10px;
    padding:5px;
    background-color: black;
    color:white;
    align-self: center;
    padding-top:10px;
}

</style>


<script>
export default {
    name: "MainHead"
}
</script>