<template>
  <div class="content">

    <div class="title">
      <h3 v-if="subTitle"> {{subTitle}}</h3>
      <h2> {{title}} </h2>
    </div>
    <div class="no-line-bg"></div>
    <div class="photo first"></div>
    <div class="photo second hidden"></div>
    <div class="photo third hidden"></div>
    <GraphContainer class="graph"> </GraphContainer>
    <h2 class="page">{{page}}</h2>
    <div class="bg-pattern first"></div>
    <div class="bg-pattern second"></div>
  </div>
</template>

<script>
    import GraphContainer from "./GraphContainer";

    export default {
      name: "GraphDisplayPageOne",
      components: {
        GraphContainer
      },
      props: {
        title: String,
        subTitle: String,
        page: String,
      },
      data() {
        return {
          photoSrc: '/ressources/image6.jpg',
          photoCounter: 0
        }
      },
      methods: {
        changePhotos() {
          if(this.photoCounter === 0) {
            document.querySelector(".photo.second").classList.remove('hidden')
            this.photoCounter ++
          } else if (this.photoCounter === 1) {
            document.querySelector(".photo.third").classList.remove('hidden')
            this.photoCounter ++
          }
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
    grid-template-columns: 0.4fr repeat(6, 1fr) 0.6fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    overflow: hidden;

    .page {
      position: absolute;
      bottom: -50px;
      right: -30px;
      font-size: 200px;
      line-height: 252px;
      color: rgba(255, 54, 51, 0.24);
    }

    .graph {
      grid-column: 4 / 6;
      grid-row: 2 / 5;
    }

    .photo {
      background-size: cover;
      background-position: center;
      width: 8.15vw;
      height: 36vh;
      transition: all 0.5s;
      opacity: 1;
      filter: grayscale(1);

      &.first {
        background-image: url("/ressources/img/image6.jpg");
        grid-column: 2;
        grid-row: 1 /3;
        margin-left: 6.15vw;
      }
      &.second {
        background-image: url("/ressources/img/image8.jpg");
        grid-column: 3;
        grid-row: 2 /4;
        margin-left: 1vw;
        height: 32vh;
      }
      &.third {
        background-image: url("/ressources/img/image7.jpg");
        grid-column: 2;
        grid-row: 2 / 4;
        margin-left: 6.15vw;
        margin-top: 14vh;
        height: 34vh;
      }

      &.hidden {
        opacity: 0;
        transition: all 0.5s;
      }
      &:hover {
        filter: grayscale(0);
        transition: all 0.5s;
      }
    }

    .title {
      margin-left: 5px;
      grid-column: 4 / 7;
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
    .bg-pattern {
      background-image: url("/ressources/img/svg/motif.svg");
      background-size: cover;
      opacity: 0.07;

      &.first {
        grid-row: 4;
        grid-column: 1/4;
      }
      &.second {
        grid-row: 1;
        grid-column: 6/8;
      }
    }
  }
</style>
