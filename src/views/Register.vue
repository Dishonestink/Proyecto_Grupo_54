<template>
  <div  class="sesion">
    <Nav/>

    <RegisterForm />
    

  </div>
</template>

<script>

import RegisterForm from "../components/RegisterForm.vue";
import Nav from "../components/Nav.vue";


export default {
  name: "Register",
  components: {
    Nav,
    RegisterForm,
  },
};
</script>
