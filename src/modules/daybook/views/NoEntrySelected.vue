<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">Nothing selected</h1>

    </div>
    <FabDayBook></FabDayBook>
</template>

<script>
import {defineAsyncComponent} from 'vue'
    export default {
        components:{
            FabDayBook:defineAsyncComponent(()=> import("../components/FabDayBook.vue"))
        }
        
    }
</script>

<style lang="scss" scoped>

div{
    height: 100%;
}

</style>