let app = new Vue({
    el:'#divCentralDer',
    data() {
        return {
            items : [
                {id="1",nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {id="2",nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {id="3",nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {id="4",nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {id="5",nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {id="6",nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {id="7",nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {id="8",nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
                {id="9",nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {id="10",nombre: 'Carmen Valenzuela Bernal ',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'},
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
