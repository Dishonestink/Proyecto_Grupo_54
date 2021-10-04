<template>
<div id="divPrincipal">
    <div id="MainHead">
        <MainHead id="Header"/>
    </div>
    <div id="divCentral" class="Division">
        <Menu id="MenuIzq"/>
        <figure id="divCentralDer">
            <img id="Imagen_Inic_Direc" src="../assets/library.jpg">
        </figure>
    </div>
    <Footer/>
</div>
</template>

<style scoped>
body {
    margin:0px;
    width: 100%;
    height: auto;
}

#MainHead {
    margin:0px;  
}

#Header {
    height: auto;
    width:100%;
    margin: 0px;
}

#divPrincipal {
    background-color: white;
    display: flex;/*Se especifica que el entorno de la página será de tipo flexible*/
    align-content: flex-end;/*la alineación horizontal tenderá al final (izquierda)*/
    align-items: flex-start;/*la alineación vertical tenderá al inicio (parte superior)*/
    flex-direction: column;/*Se mantendrá un orden de llenado vertical*/
    margin:0%;
    margin-top:18px;
    width:100%;
    height: 800px;
    float:left;
}

#divPrincipal > div {
    width:100%;
}

/*Se dan las caracteristicas principales de la sección central, que contiene la sección NAV y FIGURE*/
#divCentral {
    position:static;
    left:0px;
    top:30px;
    margin-top: 2%;
    margin-left: 0px;
    height:auto;
    width:100%;
    border:1px solid black;
}

/*Se dan las caracteristicas en la sección anterior pero mediante método flexible*/
.Division {
    display:flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
}

#MenuIzq {
    left: 0px;
    top:0px;
    max-width:20%;
    min-width:20%;
    height:auto;
}

#divCentralDer {
    max-width:80%;
    min-width:80%;
    margin:0px;
}


/*Caracteristicas de la sección de FIGURE*/
#Imagen_Inic_Direc {
    border-top:5px solid white;
    height:auto;
    width:100%;
    z-index: -1;
    box-sizing: border-box;
}

</style>

<script>
import Menu from "@/components/Menu.vue";
import MainHead from "@/components/MainHead.vue";   
import Footer from "@/components/Footer.vue";    


export default {
    name: "VistaInicialDirector",
    components: {
        Menu,
        MainHead,
        Footer,
    },
};
</script>