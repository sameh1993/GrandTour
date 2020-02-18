<template>
  <div class="home">
     <!-- start about us -->
     <AboutUs />
     <!-- end aboutUS --->

     
     <!-- start book -->
      <Book />
     <!-- start book -->

   


     <!--- start Packages -->
     <SubPackages />
     <!--- end packages --->

       <!-- start Choose section --->
    <Choose />
     <!-- end choose section --->


     <!-- start Destination -->
      <destination />
     <!--- end Destiantion -->
     
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules";

</style>

<script>
// @ is an alias to /src
import AboutUs from "../components/AboutUs.vue";
import Book from "../components/Book.vue";
import SubPackages from "../components/SubPackages.vue";
import Destination from "../components/Destination.vue";
import Choose from "../components/Choose.vue";


export default {
  name: "home",
  props: ["state"],
  components: {
    AboutUs,
    SubPackages,
    Book,
    Destination,
    Choose
  }
};
</script>
