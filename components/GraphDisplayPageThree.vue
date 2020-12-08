<template>
  <div class="content">

    <div class="title">
      <h3 v-if="subTitle"> {{subTitle}}</h3>
      <h2> {{title}} </h2>
    </div>
    <GraphContainerPageThree class="graph"> </GraphContainerPageThree>
    <h2 class="page">{{page}}</h2>
  </div>
</template>

<script>
  import GraphContainerPageThree from "./GraphContainerPageThree";

  export default {
    name: "GraphDisplayPageThree",
    components: {
      GraphContainerPageThree
    },
    props: {
      title: String,
      subTitle: String,
      page: String
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 0.4fr repeat(6, 1fr) 0.6fr;
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
      grid-column: 5 / 8;
      grid-row: 2 / 4;
      display: flex;
      justify-content: end;
      transform: translateX(-3vw);
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
  }
</style>
