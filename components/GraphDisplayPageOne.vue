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
    <div class="comment">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" viewBox="890 674 700 400">
        <image id="_frequent_puissant" data-name="+ frequent     + puissant" x="908" y="785" width="615" height="266" xlink:href="data:img/png;base64,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"/>
      </svg>
    </div>
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
    .comment {
      grid-column: 2 / 4;
      grid-row: 4;
      width: 100%;
      height: 100%;
      position: relative;

      svg {
        position: absolute;
        left: 25%;
        right: 25%;
        bottom: 0;
        top: 20%;
        width: 50%;
        height: auto;
        transform: rotate(-0.04turn);
      }
    }
  }
</style>
