<template>
  <div class="content">

    <div class="title">
      <h3 v-if="subTitle"> {{subTitle}}</h3>
      <h2> {{title}} </h2>
    </div>
    <GraphContainerPageThree class="graph"> </GraphContainerPageThree>
    <h2 class="page">{{page}}</h2>
    <div class="bg-pattern first"></div>
    <div class="bg-pattern second"></div>
    <div class="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id porttitor augue. Ut quis semper lacus. Ut accumsan vel arcu sed congue. Duis in lectus sed ipsum porta imperdiet.
    </div>
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
      position: absolute;
      bottom: -50px;
      right: -30px;
      font-size: 200px;
      line-height: 252px;
      color: rgba(255, 54, 51, 0.24);
    }

    .graph {
      grid-column: 5 / 8;
      grid-row: 2 / 4;
      display: flex;
      justify-content: end;
      transform: translateX(-3vw);
    }

    .title {
      grid-column: 3 / 6;
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
      h3 {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 18px;
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
    .bg-pattern {
      background-image: url("/ressources/img/svg/motif.svg");
      background-size: cover;
      opacity: 0.07;

      &.first {
        grid-row: 2/5;
        grid-column: 3/5;
      }
      &.second {
        grid-row: 1;
        grid-column: 6/8;
      }
    }
    .paragraph {
      grid-column: 3;
      grid-row: 4;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      height: 100%;
      width: 100%;
      padding: 20px;
      background-color: #FF3633;
      transform-origin: bottom right;
      transform: scale(1.25);
    }
  }
</style>
