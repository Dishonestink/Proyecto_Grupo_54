<template>
  <div id="divPrincipal">
    <div id="cabecera">
      <MainHead />
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
            <h5>Buscador de cursos</h5>
            <input
              class="Barra"
              type="search"
              name="Lupa"
              placeholder="¿A quién desea buscar?"
              v-model="buscador"
            />
            <input for="Lupa" class="lupa" type="submit" value="&#8981;" />
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
            <button v-on:click="guardar()">Guardar</button>
          </div>
        </div>
        <div class="ContenedorTabla">
          <!--Seccion que contiene la tabla y la barra de desplazamiento-->
          <table>
            <!--Información de Tabla-->
            <tr>
              <th>Id</th>
              <th>Asignatura</th>
              <th>Profesor a cargo</th>
              <th>Contenido de la asignatura</th>
              <th>Eliminar</th>
            </tr>
            <tr
              v-for="(item, index) in it"
              :key="item.id"
              contenteditable="true"
            >
              <td >{{item.id}}</td>
              <td >{{item.asignatura}}</td>
              <td >{{item.profesor}}</td>
              <td >{{item.contenido}}</td>
              <td id="celdaEliminar">
                <input
                  type="button"
                  id="btnEliminar"
                  value="&#128465;"
                  v-on:click="eliminar(index)"
                />
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
  padding: 10px;
  margin: 20px;
  margin-bottom: 30px;
}

#HeaderSentence {
  /*Especifica la distancia entre el header y la sección de botones*/
  margin-bottom: 40px;
}

.Barra {
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
  margin-left: 200px;
}

.lupa {
  /*Se gira la posicion del simbolo de lupa*/
  transform: rotate(-90deg);
  cursor: pointer;
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
  margin-left: 40%;
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
import MainHead from "@/components/MainHead.vue";
import Api from "@/logic/Api.js";


export default {
    name: "ModificacionCursos",
    components:{
        Menu,
        Footer,
        MainHead,
    },
    data() {
        return {
            items : Object,
            it : [],
            buscador: '', //Estos valores se usará de filtro
            grado:'',
            curso:'',
        }
    },
    mounted() {
      Api.obtenerTodo().then(res => this.it = res.data);
      console.log(this.it)
    },
    methods: {
        async eliminar(row) {
            if (confirm("¿Está seguro de eliminar?")){
                await Api.eliminar(row);
        }},
        añadir() {
            this.items.push({
                nombre:'',
                identificacion:'',
                situacion:'',
                grado:'',
            })
        },
        async guardar() {
          
        },
    }
}
</script>