<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDayBook">Daybook</button>
   
  </div>
</template>

<script>
export default {
  methods:{
    goToDayBook(){
      this.$router.push({name:'no-entry'})
    }
  }
}

</script>
