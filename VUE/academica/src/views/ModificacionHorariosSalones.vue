<template>
    <div id="divPrincipal">
        <MainHead/>
        <div id="divCentral" class="Division">
            <Menu/>
            <section id="divCentralDer"> <!--Se identifica una sección central con la etiqueta semántica de SECTION-->
                <header id="headerDer"> <!--Se añade otra etiqueta semántica de HEADER-->
                    <h1 id="HeaderSentence"><b>Modificación de horarios y salones de clase</b></h1>
                    <h3>Busqueda de profesores</h3>
                    <div class="busqueda"> <!--Se restringe un sección para la barra de busqueda y el botón sumbit-->
                        <input type="search" name="Lupa" placeholder="¿A quién desea buscar?">
                        <input for="Lupa" class="lupa"  type="submit" value="&#8981;">
                    </div>
                    
                </header>
                <!--Fin de Header-->


                <div id="Métodos"> <!--Sección para los botones que modifican la vista y la tabla-->
                    <div id="Métodos_1" style="flex-grow: 1;"><!--botones de vista-->
                        <button v-on:click="fhorarios()">Horarios</button>
                        <button v-on:click="fsalones()">Salones</button>
                        
                    </div>
                    <!--<div id="Métodos_oculto">
                        Sección oculta
                    </div>-->
                    <div id=Métodos_2 style="flex-grow: 1;"> <!--botones de tabla-->
                        <button v-on:click="añadir1()" v-show="horarios" >Añadir</button>
                        <button v-on:click="añadir2()" v-show="salones" >Añadir</button>
                        <!--<button>Eliminar</button>
                        <button>Modificar</button>-->
                        <button>Guardar</button>
                    </div>
                </div>
                <div class="ContenedorTabla"> <!--Seccion que contiene la tabla y la barra de desplazamiento-->
                    <table v-show="true"> <!--Información de Tabla-->
                        <tr>
                            <th>Nombre</th>
                            <th>Identificaión</th>
                            <th>Situación de empleado</th>
                            <th>Asignatura</th>
                            <th>Grados a cargo</th>
                            <th>Horario</th>
                            <th>Eliminar</th>
                        </tr>
                        <tr v-for="(item,index) in items1" :key="item.id" contenteditable="true">
                            <td v-text="item.nombre"></td>
                            <td v-text="item.identificacion"></td>
                            <td v-text="item.situacion"></td>
                            <td v-text="item.asignatura"></td>
                            <td v-text="item.grado"></td>
                            <td v-text="item.horario"></td>
                            <td class="celdaEliminacion"><input type="button" class="btnEliminar" value="&#128465;" v-on:click="eliminar1(index)"></td>
                        </tr>
                        <!--Fin información de tabla-->
                    </table>
                    <table v-show="salones">
                        <!--Informacion de la tabla-->
                        <tr>
                            <th>Salón</th>
                            <th>Estado</th>
                            <th>Responsable</th>
                            <th>Horario</th>
                            <th>Eliminar</th>
                        </tr>
                        <tr v-for="(item,index) in items2" :key="item.id" contenteditable="true">
                            <td v-text="item.salon"></td>
                            <td v-text="item.estado"></td>
                            <td v-text="item.responsable"></td>
                            <td v-text="item.horario"></td>
                            <td class="celdaEliminacion"><input type="button" class="btnEliminar" value="&#128465;" v-on:click="eliminar2(index)"></td>
                        </tr>
                        <!--Fin información de tabla-->
                    </table>    
                    
                </div>
            </section>
            <!--Fin de la sección SECTION-->
        </div>    
        <Footer/>
    </div>
</template>

<style scoped>
* {
    margin:0px;
}

button {
    cursor:pointer;
}

#divPrincipal {
    background-color: white;
    display: flex;/*Se especifica que el entorno de la página será de tipo flexible*/
    align-content: flex-end;/*la alineación horizontal tenderá al final (izquierda)*/
    align-items: flex-start;/*la alineación vertical tenderá al inicio (parte superior)*/
    flex-direction: column;/*Se mantendrá un orden de llenado vertical*/
}
#divPrincipal > div {
    width:100%;
}

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


/*Se dan las caracteristicas principales de la sección central, que contiene la sección NAV y FIGURE*/
#divCentral {
    position:relative;
    left:0;
    top:0px;
    margin-top: 10px;
    height:auto;
    border:1px solid black;
}

/*Se dan las caracteristicas en la sección anterior pero mediante método flexible*/
.Division {
    display:flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
}

/*Caracteristicas de la sección de Section*/
#divCentralDer {
    display: flex;
    flex-direction:column;
    flex-wrap: nowrap;
    background-color: white;
    color: black;
    width: 80%;
    height: 572px;
    border:0.5px solid black;
    margin-bottom: 3px;
}
/*Caracteristicas del HEADER derecho*/
#headerDer {
    text-align: left;
    padding:10px;
    margin:20px;
    margin-bottom:30px;
}

#HeaderSentence { /*Especifica la distancia entre el header y la sección de botones*/
    margin-bottom: 40px;
}

.busqueda {/*Indica que la sección de busqueda es flexible y debe mantenerse en una linea*/
    display:flex;
    flex-wrap: nowrap;
    margin:0px;
}

.lupa { /*Se gira la posicion del simbolo de lupa*/
    transform:rotate(-90deg);
    cursor:pointer;
}

#Métodos { /*La sección de botones serán flexible, mantenerse alineados verticalmente y 
    centrados horizontalmente*/
    display:flex;
    flex-wrap: nowrap;
    margin-left:10%;
    margin-right: 10%;
    margin-bottom: 20px;
    /*align-items:stretch;
    justify-content:baseline;*/
    width: 80%;
}

#Métodos_1 { /*Se alinean al costado izquierdo (inicio)*/
    flex-wrap: nowrap;
    width: auto;
    height:auto;
    margin-right: 0%;
    align-items:center;
    justify-content:flex-start;
}

/*#Métodos_oculto {
    width: auto;
    height:auto;
    display:hidden;
}*/

#Métodos_2 {/*Se alinean al costado derecho (fin)*/
    display:flex;
    flex-wrap: nowrap;
    width: auto ;
    height:auto;
    margin-left: 0px;
    align-items: center;
    justify-content: flex-end;
}

.ContenedorTabla {/*Se añade la barra de desplazamiento y se especifica dicha region sumada a la tabla*/
    overflow-y: auto;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    max-height: 300px;
    border:2px solid black;
}

table { /*Se acota el área de la tabla dinámica al tamaño de la pantalla*/
    width: 100%;
    max-height:318px; 
    /*margin-left: 10%;
    margin-right: 10%;*/
}

tr,th,td {
    border:1px solid black;
}

.btnEliminar {
    margin-left:40%;
}
</style>

<script>
import MainHead from "@/components/MainHead.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";


export default {
    name: "ModificacionHorariosSalones",
    components: {
        MainHead,
        Menu,
        Footer,
    },
    data() {
        return {
            items1 : [
                {id:"1",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"2",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"3",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"4",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"5",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"6",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"7",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"8",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"9",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id:"10",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
            ],
            items2 : [
                {id:"1",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"2",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"3",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"4",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"5",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"6",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"7",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"8",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"9",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id:"10",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
            ],
            buscador: '', //Estos valores se usará de filtro
            salones: false,
            horarios: true,
        }
    },
    methods: {
        eliminar1(row) {
            if (confirm("¿Está seguro de eliminar?")){
                this.items1.splice(row,1);
            }
        },
        eliminar2(row) {
            if(confirm("¿Está seguro de eliminar?")){
                this.items2.splice(row,1);
            }
        },
        añadir1() {
            this.items1.push({
                nombre:'',
                identificacion:'',
                situacion:'',
                asignatura:'',
                grado:'',
                horario:'',
            })
        },
        añadir2() {
            this.items2.push({
                salon:'',
                estado:'',
                responsable:'',
                horario:'',
            })
        },
        fhorarios(){
            this.horarios = true;
            this.salones = false;
        },
        fsalones() {
            this.horarios = false;
            this.salones = true;
        },
    }
}
</script>