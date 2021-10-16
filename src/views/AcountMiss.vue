<template>
    <div class="acount">
        <div v-if="acces===false">
        <Nav />
        <AcountForm />
        </div>
    </div>
</template>
<script>

import AcountForm from "../components/AcountForm.vue";
import Nav from "../components/Nav.vue";
import axios from 'axios';
export default {
    name: "AcountMiss",
    components: {
        Nav,
        AcountForm,
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
}
</script>