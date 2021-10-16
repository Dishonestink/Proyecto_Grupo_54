<template>
    <div class="container">
        <h1>¡Bienvenido usuario nuevo  <i class="bi bi-emoji-laughing"></i>!</h1>
        <h6>antes de poder disfrutar de nuestros servicios deberas registrarte primero</h6>
        <form class="form-group" method="POST" @submit.prevent="registrar">
            <div class="input-group  mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-lines-fill"></i></span>
                <input v-model="user.name" required type="text" class="form-control so" placeholder="nombres"  aria-describedby="basic-addon1">
            </div>
            <div class="input-group  mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-lines-fill"></i></span>
                <input v-model="user.subname" type="text" class="form-control so" placeholder="apellidos" required  aria-describedby="basic-addon1">
            </div>
            <div class="input-group  mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-telephone"></i></span>
                <input  v-model="user.phone" type="tel" placeholder="987 6543210" required  class="form-control so"  aria-describedby="basic-addon1">
            </div>
            <div class="input-group  mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-at"></i></span>
                <input v-model="user.email" id="email" type="email" class="form-control so" required placeholder="correo electronico"  aria-describedby="basic-addon1">
            </div>
            <div class="input-group  mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                <input v-model="confirmPassword" type="password" id="val" class=" form-control so" required placeholder="confirmar contraseña"  aria-describedby="basic-addon1">
            </div>
            <div class="input-group  mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
                <input v-model="user.password" type="password" id="van" class=" form-control so" required placeholder="contraseña"  aria-describedby="basic-addon1">
            </div>
            <button type="submit"   class="btn btn-darke btn-lg btn-block">Crear cuenta</button>
            <p class="miss"><router-link to="/" class="miss">> Ya tengo una cuenta &#60;</router-link></p>
            <p>{{error}}</p>
            <p class="copy">© Copyright Mision TIC 2022</p>
        </form>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    data(){
        return{
            error:'',
            confirmPassword:'',
            user:{},
            
        }
    },
    methods:{
        redirecting(){
            this.$router.push({
            name: "Sesion"})
        },
        registrar(){
            if(this.user.password != this.confirmPassword){
                document.getElementById('val').style.border = '3px solid red';
                document.getElementById('van').style.border = '3px solid red';
                this.error = 'Las contraseñas no coinciden';
            }else{
                this.error = '';
                document.getElementById('val').style.border = '1px solid gray';
                document.getElementById('van').style.border = '1px solid gray';
                axios.post('http://localhost:3000/register',this.user).then((res)=>{
                if(res.data.correo === true){
                        document.getElementById('email').style.border = '3px solid red';
                        this.error = '¡Este correo ya esta registrado!'
                    }else{
                        document.getElementById('email').style.border = '1px solid gray';
                        if(res.data.correo === false){
                        setTimeout(() => {
                            this.user = {};
                            this.confirmPassword = '';
                            this.redirecting();
                        }, 1000);
                    }
                    }
                    
                });
            }
        }
    }
}
</script>
<style scoped>



@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Lora&display=swap');
.val:focus{
    box-shadow: red;
}
.container{
    font-family: 'Fjalla One', sans-serif;
    font-family: 'Lora', serif;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.64);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.64);
    width: 770px;
    height: 620px;
    margin-top:6%;
    min-width: 750px;
    position:-ms-page;
    background-color: #fff;
    padding-top: 40px;
}
.miss{
    color: #000;
    margin-top: 4px;
}
.form-group{
    margin-top: 40px;

}
.input-group{
    width: 350px;
    margin-top: 15px;
    float: left;
    margin-left: 16px;
} 
.btn-darke{
    background-color: #000;
    width: 90%;
    color: #fff;
    margin-top: 20px;
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
.copy{
    margin-top: 95px;
    font-size: 13px;
}

</style>
