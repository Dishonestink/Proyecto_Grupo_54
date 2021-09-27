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