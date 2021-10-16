/* eslint-disable */
<template>
<div class="container">
    <img src="../assets/user_perfile.png" class="rounded-circle perfile" alt="...">
    <form class="form-group" method="POST" @submit.prevent="iniciar">
      <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"><i class="bi bi-at"></i></span>
  <input v-model="user.email" required type="email" class="form-control" placeholder="correo electronico" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
  <input v-model="user.password" required type="password" class="form-control" placeholder="contraseña"  aria-describedby="basic-addon1">
      </div>
      <button type="submit"   class="btn btn-darke btn-lg btn-block">Iniciar sesion</button>
      <p class="miss"><router-link to="/acount-miss" class=" miss">¿olvidaste tu contraseña?</router-link></p>
      <p>{{mensaje}} </p>
      <p id="copy">© Copyright Mision TIC 2022</p>
    </form>
    </div>
</template>
<script>

import axios from 'axios';
export default {
    data(){
        return{
            user:{},
            mensaje: '',
        }
    },
    methods:{
        iniciar(){
            if(this.user.email.length > 0 && this.user.password.length > 0){
            axios.post('http://localhost:3000/login',this.user).then(res => {
                this.mensaje = res.data.msg;
                document.getElementById('copy').style.marginTop = '45px';
                if(res.data.msge === 'logueado'){
                    setTimeout(() => {
                            this.$router.push({
                            name: "VistaInicialDirector"})
                        }, 1000);
                }
            });
            }
        }
    }
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Lora&display=swap');
.container{
    font-family: 'Fjalla One', sans-serif;
    font-family: 'Lora', serif;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.64);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.64);
    width: 25%;
    height: 420px;
    margin-top:8%;
    min-width: 400px;
    position:-ms-page;
    background-color: #fff;
}
.btn-darke{
    background-color: #000;
    width: 100%;
    color: #fff;
}
.btn-darke:hover{
    box-shadow: none;
    background-color: #000;
    color: #fff;
}
.btn-darke:focus{
    box-shadow: none;
    background-color: #000;
    color: #fff;
}
.form-group{
    padding: 20px;
}
.controler{
    margin-bottom: 20px;
}
.form-control:focus{
    outline: 0ch;
    box-shadow: none;
}
.form-control:hover{
    outline: 0ch;
    box-shadow: none;
}
.miss{
    color:black;
    margin-top: 5px;
}
.perfile{
    margin-top: -75px;
    margin-bottom: 40px;
    
    max-height: 28%;
    min-width: 30%;
    min-height: 29%;
}
#copy{
    margin-top: 70px;
    font-size: 13px;
}
</style>
