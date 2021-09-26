let buscador = new Vue({
    el:"#buscador",
    data() {
        return {
            buscador: '', //Estos valores se usará de filtro
            grado:'',
            curso:'',
        }
    },
})



let app = new Vue({
    el:'#app',
    data() {
        return {
            items : [
                {nombre: 'Oscar Campos Ardila', identificacion:'234234', situacion:'Matriculado', grado:'6°-1'},
                {nombre: 'Carmen Valenzuela Bernal',identificacion:'234235',situacion:'Matriculado',grado:'6°-1'}
                ],
        }
    },
    /*methods: {
        adicionar() {

        }
    }*/
})
