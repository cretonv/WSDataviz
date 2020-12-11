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
    <div class="comment">
     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="300" viewBox="890 724 700 300">

      <defs>
        <style>
          .cls-1, .cls-2 {
            font-size: 75px;
          }

          .cls-1 {
            font-family: Quintus_TRIAL;
          }

          .cls-2 {
            font-weight: 700;
          }

          .cls-3 {
            font-family: "Myriad Pro";
          }
        </style>
      </defs>
      <image id="Calque_10" data-name="Calque 10" x="930" y="867" width="191" height="156" xlink:href="data:img/png;base64,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"/>
      <text id="et_les_victimes_" data-name="et les victimes ? " class="cls-1" transform="translate(1120.903 783.258) rotate(10.371)"><tspan class="cls-2">et les victimes </tspan><tspan class="cls-3">? </tspan></text>
    </svg>
    </div>
    <div class="photo"></div>
    <div class="bg-pattern first"></div>
    <BarChart class="graph"> </BarChart>
    <h2 class="page">{{page}}</h2>
    <div class="paragraph">
      La canicule bien que moins fréquente en comparaison à d’autres évènements, comptabilise à elle seule 1442 morts sur l’été 2019.
    </div>
  </div>
</template>

<script>
    import BarChart from "./graph/BarChart";

    export default {
      name: "GraphDisplayPageTwo",
      components: {
        BarChart,
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
      grid-column: 3 / 7;
      grid-row: 2 / 5;
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
      grid-row: 2/5;
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
    }
    .bg-pattern {
      background-image: url("/ressources/img/svg/motif.svg");
      background-size: cover;
      opacity: 0.07;

      &.first {
        grid-row: 1 / 4;
        grid-column: 1 / 3;
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
      grid-column: 7;
      grid-row: 3;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #9D9D9D;
      height: 100%;
      width: 100%;
      padding: 15px;
    }
    .comment {
      grid-column: 7 / 9;
      grid-row: 2;
      width: 100%;
      height: 100%;
      position: relative;
      svg {
        width: 14vw;
        height: auto;
        position: absolute;
        transform: translateX(-10%) translateY(-20%);
        top: 0;
        left: 0;
      }
    }
  }
</style>
