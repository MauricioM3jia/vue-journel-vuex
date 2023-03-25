<template>
    <div class="entry-container mb-3 pointer p-2" 
    @click="$router.push({name:'entry',id:2})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">24</span>
            <span class="mx-1 fs-5">marzo</span>
            <span class="mx-2 fw-ligth"> 2023</span>
            
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptates consequuntur omnis hic soluta ut error assumenda rem. Possimus eos nam tenetur nisi provident temporibus quasi odit ex alias.   

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color:lighten($color: #2c3e50, $amount: 45);
        
    }

    .entry-description{
        font-size: 12px;
    }
    
}
</style>