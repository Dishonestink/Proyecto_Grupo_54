<template>
    <footer><!--Se crea la sección de pie de página dedicado a la información legal-->

            <div id="footer_1" style="flex-grow:8;"> <!--El flex-grow indica el crecimiento de un elemento con respecto a los otros elementos-->
                <span >"Nombre de la institución"</span>
            </div>

            <div id="footer_2" style="flex-grow:1;">
                <span >Portal de servicios académicos</span>
                <span >Todos los derechos reservados &#169;</span>
            </div>

        </footer>
        <!--Fin de la sección de pie de página-->
</template>


<style scoped>
/*Caracteristicas de la sección de FOOTER al inferior de la pantalla*/
footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: black;
    color:white;
    margin-bottom: 0px;
    height: 30px;
    text-align: center;
    width: 100%;
    margin-top: 0px;
    padding-top:10px;
}

/*Alinea el elemento de Footer 1 al costado izquierdo de la pantalla*/
#footer_1 {
    margin-right: 400px;
    text-align: left;
    justify-content: start;
}

/*Alinea los elementos en footer 2 al costado derecho de la sección*/
#footer_2 {
    margin-left:10px;
    align-items: flex-end;
    justify-content: end;
}
</style>


<script>
export default {
    name: 'Footer',
}
</script>