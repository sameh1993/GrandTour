<template>
  <div class="serivces">
    
    <!--- start serivces -->
    <SubSerivces />
    <!--- end serivces -->

    <!--- start Trip -->
    <Trip />  
    <!--- end Trip -->

    <!--- start tourism places -->

      <TourismPlaces :packages="packages" />
    <!--- end tourism places -->


  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import SubSerivces from "../components/SubSerivces.vue";
import Trip from "../components/Trip.vue";
import TourismPlaces from "../components/TourismPlaces";

export default {
  props:["state"],
  components: {
    SubSerivces,
    Trip,
    TourismPlaces
  }
};
</script>
