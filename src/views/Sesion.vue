<template>
  <div class="sesion">
    <Nav />
    <Bregister />
    <SesionForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SesionForm from "../components/SesionForm.vue";
import Nav from "../components/Nav.vue"
import Bregister from "../components/Bregister.vue"
export default {
  name: "Sesion",
  components: {
    Nav,
    SesionForm,
    Bregister,
  },
};
</script>