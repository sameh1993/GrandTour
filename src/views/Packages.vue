<template>
  <div class="packages">
    <!--- start packages -->
    <SubPackages :state="state" />
    <!--- end packages -->

    <!--- start Destination --->

    <desttination />

    <!--- end Destination --->
  </div>
</template>

<script>
import SubPackages from "../components/SubPackages.vue";
import Desttination from "../components/Destination.vue";

export default {
  props: ["state"],
  components: {
    SubPackages,
    Desttination
  }
};
</script>