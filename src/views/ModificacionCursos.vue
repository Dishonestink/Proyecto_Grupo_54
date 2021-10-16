<template>
  <div id="divPrincipal">
    <div v-if="acces === true">
    <div id="cabecera">
      <Nav />
    </div>
    <div id="divCentral" class="Division">
      <Menu />
      <section id="divCentralDer">
        <!--Se identifica una sección central con la etiqueta semántica de SECTION-->
        <header id="headerDer">
          <!--Se añade otra etiqueta semántica de HEADER-->
          <span><h1 id="HeaderSentence"><b>Modificación de Cursos</b></h1></span>
          <div class="busqueda">
            <!--Se restringe un sección para la barra de busqueda y el botón sumbit-->
            <h5>Buscador de docentes:</h5>
            <input
              class="Barra"
              type="search"
              name="Lupa"
              placeholder="¿A quién desea buscar?"
              v-model="buscador"
            />
            <button for="Lupa" class="lupa" type="submit"><img id="imgLupa" src="../assets/lupa.png"></button>
          </div>
        </header>
        <!--Fin de Header-->
        <div id="Métodos">
          <!--Sección para los botones que modifican la vista y la tabla-->
          <div id="Métodos_1" style="flex-grow: 1">
            <!--botones de vista-->
            <h4 id="EnunFiltro">Filtre por grado</h4>
            <select id="grado" v-model="grado">
              <option selected></option>
              <option>6°</option>
              <option>7°</option>
              <option>8°</option>
              <option>9°</option>
              <option>10°</option>
              <option>11°</option>
            </select>
            <select id="curso" v-model="curso">
              <option selected></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <!--<div id="Métodos_oculto">
                    Sección oculta
                </div>-->
          <div id="Métodos_2" style="flex-grow: 1">
            <!--botones de tabla-->
            <button v-on:click="añadir()">Añadir</button>
            <!--<button>Eliminar</button>-->
            <!--<button v-on:click="guardar()">Guardar</button>-->
          </div>
        </div>
        <div class="ContenedorTabla">
          <!--Seccion que contiene la tabla y la barra de desplazamiento-->
          <table>
            <!--Información de Tabla-->
            <tr>
              <th>Id</th>
              <th>Grado</th>
              <th>Asignatura</th>
              <th>Profesor a cargo</th>
              <th>Contenido de la asignatura</th>
              <th>Asistencia</th>
              <th>Eliminar</th>
              <th>Guardar</th>
            </tr>
            <tr v-for="(item, index) in it" :key="item.id" contenteditable="false">
              <td ><input v-model="it[index].id" ></td>
              <td ><input v-model="it[index].grado" ></td>
              <td ><input v-model="it[index].asignatura" ></td>
              <td ><input v-model="it[index].profesor" ></td>
              <td ><input v-model="it[index].contenido" ></td>
              <td ><input v-model="it[index].asistencia" ></td>
              <td id="celdaEliminar">
                <button id="btnEliminar" v-on:click="eliminar(item.id,item.asignatura,item.profesor,item.contenido,item.grado)">
                  <img id="btnEliminarTrash" src="../assets/trashCan.png">
                </button>
              </td>
              <td>
                <button id="btnEliminar" v-on:click="guardar(it[index].id,item.asignatura,item.profesor,item.contenido,item.grado)">
                  <img id="btnEliminarTrash" src="../assets/save.png">
                </button>
              </td>
            </tr>
            <!--Fin información de tabla-->
          </table>
        </div>
      </section>
      <!--Fin de la sección SECTION-->
    </div>
    <Footer />
    </div>
    <div  v-else-if="acces === false">
      <Redirecting/>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0px;
}

button,
select {
  cursor: pointer;
}

select {
  margin-right: 10px;
  border-radius: 4px;
}

#divPrincipal {
  background-color: white;
  display: flex; /*Se especifica que el entorno de la página será de tipo flexible*/
  align-content: flex-end; /*la alineación horizontal tenderá al final (izquierda)*/
  align-items: flex-start; /*la alineación vertical tenderá al inicio (parte superior)*/
  flex-direction: column; /*Se mantendrá un orden de llenado vertical*/
}
#divPrincipal > div {
  width: 100%;
}

/*Se dan las caracteristicas principales de la sección central, que contiene la sección NAV y FIGURE*/
#divCentral {
  position: static;
  left: 0;
  top: 30px;
  margin-top: 10px;
  height: auto;
  border: 1px solid black;
}

/*Se dan las caracteristicas en la sección anterior pero mediante método flexible*/
.Division {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}

/*Caracteristicas de la sección de Section*/
#divCentralDer {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: white;
  color: black;
  width: 80%;
  height: 572px;
  border: 0.5px solid black;
  margin-bottom: 3px;
}
/*Caracteristicas del HEADER derecho*/
#headerDer {
  display: flex;
  flex-wrap: nowrap;
  text-align: left;
  justify-content: center;
  padding: 10px;
  padding-right: 0px;
  margin-right: 10%;
  margin-left: 10%;
  margin-top:20px;
  margin-bottom: 30px;
}

#HeaderSentence {
  /*Especifica la distancia entre el header y la sección de botones*/
  margin-bottom: 40px;
}

.Barra {
  margin-left: 10px;
  height: 22px;
  width: 177px;
}

.busqueda {
  /*Indica que la sección de busqueda es flexible y debe mantenerse en una linea*/
  display: flex;
  align-items: start;
  justify-content: end;
  flex-wrap: nowrap;
  margin: 0px;
  margin-left: auto;
}

.lupa {
  /*Se gira la posicion del simbolo de lupa*/
  cursor: pointer;
  min-width: 22px;
  height: 22px;
  padding: 0px;
}

#imgLupa {
  max-width: 80%;
  max-height: 80%;
  margin-top: 10%;
}

#Métodos {
  /*La sección de botones serán flexible, mantenerse alineados verticalmente y 
    centrados horizontalmente*/
  display: flex;
  flex-wrap: nowrap;
  margin-left: 10%;
  margin-right: 10%;
  /*align-items:stretch;
    justify-content:baseline;*/
  width: 80%;
  margin-bottom: 50px;
}

#Métodos_1 {
  /*Se alinean al costado izquierdo (inicio)*/
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: auto;
  margin-right: 0%;
  align-items: center;
  justify-content: flex-start;
}

#EnunFiltro {
  margin-right: 50px;
}

/*#Métodos_oculto {
    width: auto;
    height:auto;
    display:hidden;
}*/

#Métodos_2 {
  /*Se alinean al costado derecho (fin)*/
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: auto;
  margin-left: 0px;
  align-items: center;
  justify-content: flex-end;
}

.ContenedorTabla {
  /*Se añade la barra de desplazamiento y se especifica dicha region sumada a la tabla*/
  overflow-y: auto;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  max-height: 300px;
  border: 2px solid black;
}

table {
  /*Se acota el área de la tabla dinámica al tamaño de la pantalla*/
  display: inline-table;
  width: 100%;
  max-height: 318px;
  /*margin-left: 10%;
    margin-right: 10%;*/
}



#btnEliminar {
  margin-left: 30%;
  min-width:30%;
}

#btnEliminarTrash {
  margin:0%;
  height: 20px;
  min-width: 12px;
}

tr,
th,
td {
  border: 1px solid black;
}


</style>

<script>
/* eslint-disable prettier/prettier */
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import Nav from "../components/Nav.vue";
import Api from "@/logic/Api.js";
import Redirecting from '../components/Redirecting.vue';
import axios from 'axios';

export default {
    name: "ModificacionCursos",
    components:{
      Redirecting,
        Menu,
        Footer,
        Nav
    },
    data() {
        return {
            it : [],
            buscador: '', //Estos valores se usará de filtro
            grado:'',
            curso:'',
            acces:''
        }
    },
    created(){
        axios.post('http://localhost:3000/log').then((res)=>{
          this.acces = res.data.log;
                if(this.acces === false){
                  setTimeout(() => {
                    this.$router.push({
                    name: "Sesion"})
                  }, 1500);
                    console.log(this.acces);
                }
                
            });
            
    },
    mounted() {
      Api.obtenerTodo().then(res => this.it = res.data);
      console.log("montado")
      console.log(this.it)
    },
    methods: {
        eliminar(id,asignatura,profesor,contenido,grado) {
            console.log(id);
            if (confirm("¿Está seguro de eliminar?")){
              let dicci = {"id":id,"asignatura":asignatura,"profesor":profesor,"contenido":contenido,"grado":grado};
              console.log(dicci);
              Api.eliminar(dicci);
        }},
        añadir() {
            this.it.push({
                nombre:'',
                identificacion:'',
                situacion:'',
                grado:'',
            })
        },
        guardar(id,asignatura,profesor,contenido,grado) {
            console.log("guardado");
            console.log(id);
            let dicci = {"id":id,"asignatura":asignatura,"profesor":profesor,"contenido":contenido,"grado":grado};
            console.log(dicci);
            Api.actualizar(dicci);
        },
    }
}
</script>