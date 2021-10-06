let app = new Vue({
    el:'#divCentralDer',
    data() {
        return {
            items1 : [
                {id="1",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="2",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="3",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="4",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="5",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="6",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="7",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="8",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="9",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {id="10",nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                ],
            items2 : [
                {id="1",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="2",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="3",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="4",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="5",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="6",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="7",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="8",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="9",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {id="10",salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
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
        guardar() {
            this.items = this.items;
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
})

