let app = new Vue({
    el:'#divCentralDer',
    data() {
        return {
            items : [
                {nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {nombre: 'Carmen Valenzuela Bernal ',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
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
