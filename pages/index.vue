<template>
  <div class="body">
      <GridBackground class="background" :columns="'0.4fr repeat(6, 1fr) 0.4fr'" :rows="'repeat(4, 1fr)'"></GridBackground>
      <div class="content">
        <button @click="test('first')"></button>
        <button @click="test('second')"></button>
        <button @click="test('third')"></button>
      </div>
  </div>
</template>

<script>
  import GridBackground from "../components/GridBackground.vue";

  export default {
    component() {
      GridBackground
    },
    methods: {
      test(test){
        console.log('test', test)
      }
    },
  }

</script>

<style lang="scss">
  .body{
    position: relative;

    .background{
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index:0;
    }

    .content {
      position: absolute;
      z-index:1;
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-columns: 0.4fr repeat(6, 1fr) 0.4fr;
      grid-template-rows: repeat(4, 1fr); 
      grid-column-gap: 1px;
      grid-row-gap: 1px;

      button {
        grid-column: 2 / 3;
        width:20px;
        height:20px;
        font-size:0px;
        border-radius: 100%;
        background-color: black;
        border: 0px;
      }
    }
  }
</style>
