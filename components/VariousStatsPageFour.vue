<template>
  <div class="content">
    <div class="paragraph first">
      Vagues de chaleur ces 30 dernières années que durant les 42 années précédentes  en France
    </div>
    <div class="stats first">
      <span>x3</span>
    </div>
    <div class="paragraph second">
      Le nombre d’espèces animales et végétales étant menacées d’extinction au cours des prochaines décennies
    </div>
    <div class="stats second">
      <span>1 million</span>
    </div>
    <div class="paragraph third">
      Le niveau de la mer a augmenté à l'échelle mondiale au cours du XXe siècle
    </div>
    <div class="stats third">
      <span>+15 <br> cm</span>
    </div>
    <div class="img first"></div>
    <div class="img second"></div>
    <div class="img third"></div>
    <div class="bg-pattern first"></div>
    <div class="bg-pattern second"></div>
  </div>
</template>

<script>
    export default {
        name: "VariousStatsPageFour"
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

    .paragraph {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #9D9D9D;
      height: 100%;
      width: 100%;
      padding: 7px;

      &.first{
        grid-column: 3;
        grid-row: 2;
      }
      &.second{
        grid-column: 6;
        grid-row: 2;
      }
      &.third{
        grid-column: 5;
        grid-row: 4;
      }
    }

    .stats {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      color: #FF3633;

      &.first {
        grid-row: 2;
        grid-column: 2;
        position: relative;
        height: 100%;
        width: 100%;

        span {
          position: absolute;
          top: -7px;
          right: 14px;
        }
      }
      &.second {
        grid-row: 1;
        grid-column: 6 / 9;
        position: relative;
        height: 100%;
        width: 100%;

        span {
          position: absolute;
          bottom: 7px;
          left: 14px;
        }
      }
      &.third {
        grid-row: 4;
        grid-column: 4;
        position: relative;
        height: 100%;
        width: 100%;

        span {
          position: absolute;
          top: -7px;
          right: 14px;
        }
      }
    }

    .img {
      background-size: cover;
      background-position: center;
      filter: grayscale(1);
      transition: all 0.4s;
      z-index: 2;

      &:hover {
        filter: none;
        transition: all 0.4s;
      }
      &.first {
        grid-row: 3;
        grid-column: 3;
        background-image: url("/ressources/img/image4.jpg");
      }
      &.second {
        grid-row: 1/3;
        grid-column: 4/6;
        background-image: url("/ressources/img/image5.jpg");
        margin-left: 25%;
        width: 75%;
      }
      &.third {
        grid-row: 3 / 5;
        grid-column: 6/9;
        background-image: url("/ressources/img/image3.jpg");
        height: 37.5vh;
        width: 85%;
        margin-top: 8vh;
        margin-bottom: 5vh;
        margin-left: 15%;

      }

    }

    .bg-pattern {
      background-image: url("/ressources/img/svg/motif.svg");
      background-size: cover;
      opacity: 0.07;

      &.first {
        grid-row: 2/4;
        grid-column: 4;
      }
      &.second {
        grid-row: 1/4;
        grid-column: 7;
      }
    }

  }
</style>
