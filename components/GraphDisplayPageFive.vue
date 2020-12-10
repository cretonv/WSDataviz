<template>
  <div class="content">
    <div class="title">
      <h3 v-if="subTitle"> {{subTitle}}</h3>
      <h2> {{title}} </h2>
    </div>
    <div class="no-line-bg"></div>
    <div class="no-line-bg"></div>
    <div class="no-line-bg"></div>
    <div class="no-line-bg"></div>
    <div class="no-line-bg"></div>
    <div class="comment">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800" height="300" viewBox="840 724 800 300">
        <image id="_rechauffement_nbr_catastrophes" data-name="+ rechauffement + + nbr catastrophes" x="1090" y="719" width="524" height="310" xlink:href="data:img/png;base64,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"/>
        <image id="Calque_10" data-name="Calque 10" x="867" y="783" width="223" height="182" xlink:href="data:img/png;base64,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"/>
      </svg>
    </div>
    <div class="bg-pattern first"></div>
    <div class="bg-pattern second"></div>
    <ComboChart class="graph"> </ComboChart>
    <h2 class="page">{{page}}</h2>
    <div class="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id porttitor augue. Ut quis semper lacus. Ut accumsan vel arcu sed congue. Duis in lectus sed ipsum porta imperdiet.
    </div>
  </div>
</template>

<script>
  import ComboChart from "./graph/ComboChart";

  export default {
    name: "GraphDisplayPageFive",
    components: {
      ComboChart,
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
    overflow: hidden;

    .page {
      font-size: 144px;
      color: #E7EFFF;
      grid-row: 4;
      grid-column: 7;
      display: flex;
      flex-flow: row-reverse;
    }

    .graph {
      grid-column: 2 / 7;
      grid-row: 2 / 4;
      transform: translateX(14.2vw);
      z-index: 3;
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
        color: #FF3633;
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
    .comment {
      position: relative;
      grid-column: 5/7;
      grid-row: 4;

      svg {
        width: 16vw;
        height: auto;
        position: absolute;
        margin-left: 7vw;
        margin-top: 2vw;
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
    .page {
      position: absolute;
      bottom: -50px;
      right: -30px;
      font-size: 200px;
      line-height: 252px;
      color: rgba(255, 54, 51, 0.24);
    }
    .no-line-bg {
      grid-row: 2/4;
      background-color: #ffffff;

      &:nth-of-type(5) {
        grid-column: 3;
      }
      &:nth-of-type(2) {
        grid-column: 4;
      }
      &:nth-of-type(3) {
        grid-column: 5;
      }
      &:nth-of-type(4) {
        grid-column: 6;
      }
      &:nth-of-type(1) {
        grid-column: 6;
      }
    }
    .bg-pattern {
      background-image: url("/ressources/img/svg/motif.svg");
      background-size: cover;
      opacity: 0.07;

      &.first {
        grid-row: 1 / 4;
        grid-column: 1 / 3;
      }
      &.second {
        grid-row: 4;
        grid-column: 6/9;
      }
    }
    .photo {
      background-image: url("/ressources/img/image9.jpg");
      background-size: cover;
      background-position: center;
      transform-origin: top left;
      transform: scale(0.75) translateX(4.7vw) translateY(17.9vh);
      grid-column: 2;
      grid-row: 3/5;
      filter: grayscale(1);
      transition: all 0.5s;

      &:hover {
        filter: grayscale(0);
        transition: all 0.5s;
      }
    }
    .paragraph {
      grid-column: 2;
      grid-row: 4;
      font-family: 'Montserrat';
      font-style: normal;
      height: 100%;
      width: 100%;
      padding: 15px;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;

      color: #FF3633;

    }
  }
</style>
