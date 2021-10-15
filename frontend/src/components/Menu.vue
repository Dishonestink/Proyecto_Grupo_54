<template>
    <div id="menu">
        <nav id="divCentralIzq"> <!--Se especifica la sección de la barra de navegación NAV-->
            <ul class="ul_p"> <!--Lista principal-->


                <!--Primer elemento de lista-->
                <li class="il_p">
                    <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Gestión Académica</a>
                    <ul class="ul_s">
                        <!--Primer subelemento del segundo elemento de la lista-->
                        <li class="il_s">
                            <router-link to="/cursos">Modificación de cursos</router-link>
                        </li>
                        <!--Segundo subelemento del segundo elemento de la lista-->
                        <li class="il_s">
                            <router-link to="/Estudiantes">Modificación de estudiantes</router-link>
                        </li>
                    </ul>
                </li>


                <!--Segundo elemento de lista-->
                <li class="il_p">
                    <a href="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg">Cerrar Sesión</a>
                </li>
            </ul>
        </nav>
        <!--Fin de elemento de navegación-->
    </div>
</template>


<style scoped>
#menu {
    max-width: 20%;
    min-width:20%;  
}

nav {
    width:100%;
    margin-top: 0px;
}


/*Caracterisitcas de la sección NAV (barra de navegación)*/
#divCentralIzq {
    border-top:5px solid white;
    border-right:1px solid white;
    background-color:white;
    max-height:100%;
    margin: 0%;
    margin-top:0px;
    flex-grow: 1;
    padding-left:0px;
    
}
ul {
    color:black;
    margin-top:0px;
    border-bottom: 1px solid black;
}

li:hover {
    border-bottom: 1px solid black;
}
/*Se delimita los elementos de la barra de navegación al borde izquierdo de la pantalla*/
.ul_p {
    padding:0px;
}

/*Se modifica los links de los elementos principales para que no aparezcan subrayados al ser hipervinculos*/
#divCentralIzq ul, li a {
    display:block;
    text-decoration: none;
    color:black;
}


/*Esto permite establecer los elementos de la lista como espacios de bloques enteros*/
ul > li {
    display:block;
    border:1px solid black;
    
}


/*Se modifica los links de los elementos para que no aparezcan subrayados al ser hipervinculos sin ser abiertos*/
#divCentralIzq li router-link:active {
    text-decoration:none;
    color:black;
}

/*Se modifica los links de los elementos para que no aparezcan subrayados al ser hipervinculos que fueron abiertos*/
#divCentralIzq li router-link:visited {
    text-decoration:none;
    color:black;
}
 

/*Se modifica el fondo del elemento de lista y su color de texto para brindar una idea sobre cual opción se está ubicando*/
#divCentralIzq li router-link:hover {
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
    color:black;
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
</script>