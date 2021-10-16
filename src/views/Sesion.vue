<template>
  <div class="sesion">
    <div v-if="acces ===false">
    <Nav />
    <Bregister />
    <SesionForm />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SesionForm from "../components/SesionForm.vue";
import Nav from "../components/Nav.vue"
import Bregister from "../components/Bregister.vue"
import axios from 'axios';
export default {
  name: "Sesion",
  components: {
    Nav,
    SesionForm,
    Bregister,
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