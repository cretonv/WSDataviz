<template>
  <div class="content">

    <div class="title">
      <h2>Constat  MONDE</h2>
    </div>
    <div class="no-line-bg"></div>
    <div class="no-line-bg-bis"></div>
    <div class="section-title">
     <div class="section-title-content"> Catastrophes climatiques </div>
    </div>
    <barChart class="graph"> </barChart>
    <h2 class="page">01</h2>
  </div>
</template>

<script>
  import BarChart from "./graph/BarChart";
  import * as d3 from "d3";

    export default {
      name: "RCthird",
      components: {BarChart},
      data() {
        return {
          componentKey: 0
        }
      },
    }
</script>

<style lang="scss" scoped>
  .content {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 0.4fr repeat(6, 1fr) 0.4fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1px;
    grid-row-gap: 1px;

    .page {
      font-size: 144px;
      color: #E7EFFF;
      grid-row: 4;
      grid-column: 7;
      display: flex;
      flex-flow: row-reverse;
    }

    .graph {
      grid-column: 3 / 8;
      grid-row: 2 / 4;
    }

    .title {
      margin-left: 65px;
      grid-column: 2 / 5;
      grid-row: 1;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: end;
      flex-flow: column-reverse;

      h2 {
        color: black;
        font-size: 36px;
        font-family: 'Montserrat';
        font-weight: 800;
      }
    }
    
    .section-title {
      position: relative;
      grid-row: 1/3;
      grid-column: 2;
      .section-title-content {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(0.75turn) translateX(-60%) translateY(2.5vw);
        transform-origin: bottom left;
        width: 50vh;
      }
    }
    .no-line-bg {
      grid-row: 2/4;
      grid-column: 4/8;
      background-color: #ffffff;
    }
    .no-line-bg-bis {
      grid-row: 2/4;
      grid-column: 3;
      background-color: #ffffff;
    }
  }
</style>
