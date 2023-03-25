<template>
       <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control"
            placeholder="Buscar entradas">

        </div>

        <div class="entry-scrollarea">
            <h2 v-for="item in 100" :key="item">
                <EntryDaybook></EntryDaybook>
            </h2>

        </div>

       </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
    export default {
      
        components:{
            EntryDaybook:defineAsyncComponent(()=> import('./EntryDaybook.vue'))
        }
        
    }
</script>
<style  lang="scss" scoped>


.entry-list-container{

    border-right: 1px solid;
    height: calc(100vh - 56px);
}
.entry-scrollarea{
    height: calc(100vh - 120px);
    overflow:scroll ;
}
</style>
