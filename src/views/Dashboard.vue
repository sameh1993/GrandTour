<template>
    <div class="dash">
        
        <!--- start book component -->
        <bookComponent />
        <!--- end book component -->

        <!-- start sub packages app --->
        <sub-packageapp />
        <!-- end Sub Packages app --->
        

    </div>
</template>

<script>
import bookComponent from "../components/Book.vue";
import SubPackageapp from "../components/SubPackages.vue";

export default {
    components:{
        bookComponent,
        SubPackageapp
    }
}
</script>