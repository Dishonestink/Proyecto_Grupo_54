<template>
    <div>
        <nav id="divCentralIzq"> <!--Se especifica la sección de la barra de navegación NAV-->
            <ul class="ul_p"> <!--Lista principal-->

                <!--Primer elemento de lista-->
                <li class="il_p">
                    <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Perfil administrativo<i class="icono izquierda fa fa-star"></i></a>
                    <ul class="ul_s"> 
                        <!--Primer subelemento del primer elemento de lista-->
                        <li class="il_s">
                            <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Información personal</a>
                        </li>

                    </ul>
                </li>


                <!--Segundo elemento de lista-->
                <li class="il_p">
                    <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Gestión Académica</a>
                    <ul class="ul_s">
                        <!--Primer subelemento del segundo elemento de la lista-->
                        <li class="il_s">
                            <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Modificación de horarios y salones de clase</a>
                        </li>
                        <!--Segundo subelemento del segundo elemento de la lista-->
                        <li class="il_s">
                            <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Modificación de cursos</a>
                        </li>
                        <!--Tercer subelemento del segundo elemento de la lista-->
                        <li class="il_s">
                            <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Modificación de estudiantes</a>
                        </li>
                    </ul>
                </li>


                <!--Tercer elemento de lista-->
                <li class="il_p">
                    <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Cerrar Sesión</a>
                </li>
            </ul>
        </nav>
        <!--Fin de elemento de navegación-->
    </div>
</template>


<style scoped>
/*Se dan las caracteristicas en la sección anterior pero mediante método flexible*/
.Division {
    display:flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
}


/*Caracterisitcas de la sección NAV (barra de navegación)*/
#divCentralIzq {
    border-top:5px solid white;
    border-right:1px solid white;
    background-color:white;
    height:100%;
    max-width:20%;
    min-width:20%;
    margin: 0%;
    flex-grow: 1;
    padding-left:0px;
    
}


/*Se delimita los elementos de la barra de navegación al borde izquierdo de la pantalla*/
.ul_p {
    padding:0px;
}

/*Se modifica los links de los elementos principales para que no aparezcan subrayados al ser hipervinculos*/
#divCentralIzq ul, li a {
    display:block;
    text-decoration: none;
}


/*Esto permite establecer los elementos de la lista como espacios de bloques enteros*/
ul > li {
    display:block;
    border:1px solid black;
}


/*Se modifica los links de los elementos para que no aparezcan subrayados al ser hipervinculos sin ser abiertos*/
#divCentralIzq li a:active {
    text-decoration:none;
    color:black;
}

/*Se modifica los links de los elementos para que no aparezcan subrayados al ser hipervinculos que fueron abiertos*/
#divCentralIzq li a:visited {
    text-decoration:none;
    color:black;
}
 

/*Se modifica el fondo del elemento de lista y su color de texto para brindar una idea sobre cual opción se está ubicando*/
#divCentralIzq li a:hover {
    background-color:#62aac7;
    color:black;
}


/*Se indica las caracteristicas básicas de la sublista para manejarlas con un diseño similar, 
además acá se ocultan las sublistas para un estilo más dinámico*/
#divCentralIzq li ul {
    width:inherit;
    background-color:white;
    display: none;
    position:static;
}

/*Estos códigos mustran las sublistas cuando se ubica el cursor sobre las opciones de la lista*/
#divCentralIzq li:hover > ul {
    background-color:white;
    color:black;
    display:block;
    position: relative;
    left: 0px;
}
</style>


<script>
    export default{
        name: "Menu",
        
    }
    let app = new Vue({
    el:'#divCentralDer',
    data() {
        return {
            items : [
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                {grado:'6°-1',asignatura:'Matemáticas',profesor:'Sandra Gutierrez',contenido:'Matemáticas_6.pdf',asistencia:'Asistencia_Mat_grado_6_1'},
                ],
            buscador: '', //Estos valores se usará de filtro
            grado:'',
            curso:'',
        }
    },
    methods: {
        eliminar(row) {
            if (confirm("¿Está seguro de eliminar?")){
                this.items.splice(row,1);}
        },
        añadir() {
            this.items.push({
                nombre:'',
                identificacion:'',
                situacion:'',
                grado:'',
            })
        },
        guardar() {
            this.items = this.items;
        },
    }
})
</script>