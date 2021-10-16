<template>
  <div  class="sesion">
    <div v-if="acces===false">
    <Nav/>

    <RegisterForm />
    </div>

  </div>
</template>

<script>

import RegisterForm from "../components/RegisterForm.vue";
import Nav from "../components/Nav.vue";
import axios from 'axios'

export default {
  name: "Register",
  components: {
    Nav,
    RegisterForm,
  },
  data(){
    return{
      acces:''
    }
  },
  created(){
        axios.post('http://localhost:3000/log').then((res)=>{
          this.acces = res.data.log;
                if(this.acces === true){
                  setTimeout(() => {
                    this.$router.push({
                    name: "VistaInicialDirector"})
                  }, 1);
                    console.log(this.acces);
                }
                
            });
            
    },
};
</script>
