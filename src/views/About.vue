<template>
  <div class="about">

    <!-- start About us -->
    <AboutUs /> 
    <!-- end about Us -->


    <!---  start choose -->
    <choose />
    <!-- end choose --->


    <!---- start customers --->
    <customers />
    <!--- end customers --->
    
  </div>
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import Choose from "../components/Choose.vue";
import Customers from "../components/customers.vue";

export default {
  name: 'about',
  components: {
    AboutUs,
    Choose,
    Customers
  }
};
</script>
