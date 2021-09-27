let app = new Vue({
    el:'#divCentralDer',
    data() {
        return {
            items1 : [
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                {nombre:'William Díaz',identificacion:'123127',situacion:'Empleado',asignatura:'Español',grado:'10°,11°',horario:'<a href="https://plantillasdememes.com/img/plantillas/nada-no-hay-no-existe01587466097.jpg">Horario</a>'},
                ],
            items2 : [
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
                {salon:'110',estado:'Ocupado',responsable:'Grado 6°-1',horario:'Lunes - Viernes 6:00 - 11:59 am',},
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

