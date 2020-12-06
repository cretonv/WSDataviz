<template>
  <div class="body">
      <GridBackground class="background" :columns="'0.4fr repeat(6, 1fr) 0.4fr'" :rows="'repeat(4, 1fr)'"></GridBackground>
      <div class="content">
        <div class="buttons">
          <button @click="test('first')"></button>
          <button @click="test('second')"></button>
          <button @click="test('third')"></button>
        </div>
        <div class="title">
          <h1>Catastrophes climatiques</h1>
        </div>
        <div class="paragraph">
          <p>Definition catastrophes climatiques</p>
        </div>
        <img class="firstImage" src="data/ressources/img/part1/">
        <img class="secondImage" src="data/ressources/img/part1/">
      </div>
      <h1 class="page">{{page}}</h1>
  </div>
</template>

<script>
  import GridBackground from "../components/GridBackground.vue";

  export default {
    component() {
      GridBackground
    },
    data() {
      return {
        page: "01"
      }
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
    width:100%;
    height:100vh;
      
    .page{
      font-size: 300px;
      color: black;
      position: fixed;
      right:0;
      bottom:-50px;
    }

    .background {
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

      .firstImage {
        grid-column: 6 / 7;
        grid-row: 1 / 3;
      }

      .secondImage {
        grid-column: 5 / 6;
        grid-row: 3 / 5;
      }

      button {
        grid-column: 2 / 3;
        cursor: pointer;
        transform: translateY(-50%) transalteX(-50%);
        width:20px;
        height:20px;
        font-size:0px;
        border-radius: 100%;
        background-color: black;
        border: 0px;
      }

      .title {
        margin-left: 41px;
        grid-column: 2 / 5;
        grid-row: 2 / 3;
        color:black;
        font-size: 40px;
      }

      .paragraph {
        margin-left: 10px;
        margin-top: 30px;
        grid-column: 3 / 5;
        grid-row: 3 / 4;
        color:black;
        font-size: 10px;
      }
    }
  }
</style>
