<template>
    <div class="acount">
        <Nav />
        <AcountForm />
    </div>
</template>
<script>

import AcountForm from "../components/AcountForm.vue";
import Nav from "../components/Nav.vue";
export default {
    name: "AcountMiss",
    components: {
        Nav,
        AcountForm,
  },
}
</script>