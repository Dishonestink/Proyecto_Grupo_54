<template>
<div class="container">
    <form class="form-group" method="POST" @submit.prevent="buscar">
        <h6 class="msg">Si olvidaste tu contraseña, puedes enviarnos tu correo y te daremos tu contraseña registrada.</h6>
      <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"><i class="bi bi-at"></i></span>
  <input v-model="user.email" required type="email" class="form-control" placeholder="correo electronico" aria-describedby="basic-addon1">
      </div>
      <button type="submit"   class="btn btn-darke btn-lg btn-block">Recuperar mi cuenta</button>
      <button type="button" class="cancel" @click="$router.go(-1)"
          ><i class="bi bi-arrow-left"></i>  Volver</button>
      <p class="copy">© Copyright Mision TIC 2022</p>
    </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            user:{}
        }
    },
    methods:{
        buscar(){
            axios.post('http://localhost:3000/search',this.user).then((res)=>{
                alert(res.data.password);
                this.$router.push({
                name: "Sesion"})
            })
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
.cancel{
    width: 60%;
    margin-top: 12px;
    color: #fff;
    background-color: black;
    border-radius: 5px;
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
.msg{
    margin-top: 47px;
    margin-bottom: 60px;
}
.copy{
    margin-top: 45px;
    font-size: 13px;
}
</style>
