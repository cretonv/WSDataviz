<template>
  <div class="content">
    <audio id='mineSound' src='/ressources/sound/mine.mp3'/>
    <div class="hide-icon"> </div>
    <div class="first-part-title-container">
      <h2 class="first-part-title"> réchauf</h2>
    </div>
    <div class="second-part-title-container">
      <h2 class="second-part-title"> fement </h2>
    </div>
    <div class="third-part-title-container">
      <h2 class="third-part-title"> climatique </h2>
    </div>
    <div class="paragraph">
      {{ paragraph }}
    </div>
    <div class="img" :style="getFirstImagePosition" @mouseover='getSound' @mouseleave='stopSound'><img :src='imageSrc' alt=""></div>
    <h2 class="page">{{page}}</h2>
    <img src="/ressources/icon/silence.png" alt="" class="site-name">
    <div class="bg-pattern first"></div>
    <div class="bg-pattern second"></div>
  </div>
</template>

<script>
  export default {
    name: "SecondTitle",
    props: {
      title: String,
      paragraph: String,
      imageSrc: String,
      imageXPosition: String,
      imageYPosition: String,
      page: String
    },
    data() {
      return {
      }
    },
    computed: {
      getFirstImagePosition() {
        return {
          'grid-row': this.imageXPosition,
          'grid-column': this.imageYPosition,
        }
      },
    },
    methods: {
      getSound: () => {
        let audio = document.querySelector('#mineSound')
        audio.currentTime = 5;
        audio.play()
      },
      stopSound: () => {
        let audio = document.querySelector('#mineSound')
        audio.currentTime = 0;
        audio.pause()
      }
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

    .hide-icon {
      grid-row: 1;
      grid-column: 8;
      background-color: #ffffff;
    }

    .page {
      grid-row: 4;
      grid-column: 8;
      right: 0;
      bottom: -65px;
      font-size: 85px;
      line-height: 107px;
      color: #717983;
    }

    .img {
      img {
        width: 87%;
        height: 75%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: all 0.3s;
        transform: scale(1.16) translateX(3.3vw);
        transform-origin: top left;
      }

      &:hover {
        img {
          filter: none;
          transition: all 0.4s;
        }
      }
    }

    .title {
      margin-left: 41px;
      grid-column: 2 / 5;
      grid-row: 2 / 3;
      color: black;
      font-size: 65px;
      font-family: 'Montserrat';
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
      padding: 8px;
    }
    .first-part-title-container {
      position: relative;
      grid-row: 1/4;
      grid-column: 5;
      height: 100%;
      width: 100%;
      overflow: hidden;

      .first-part-title {
        position: absolute;
        right: -34.9vw;
        bottom: 0;
        transform-origin: bottom left;
        transform: rotate(0.75turn) translateX(-300%);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 8vw;
        color: #FF3633;
        transition: all 0.5s;
        transition-delay: 1s;
      }
    }
    .second-part-title-container {
      position: relative;
      grid-row: 1/4;
      grid-column: 6;
      height: 100%;
      width: 100%;
      overflow: hidden;

      .second-part-title {
        position: absolute;
        right: 15vw;
        top: 0;
        transform-origin: top right;
        transform: rotate(0.75turn) translateX(-300%);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 8vw;
        color: #FF3633;
        transition-delay: 1s;
      }
    }
    .third-part-title-container {
      position: relative;
      grid-row: 1/3;
      grid-column: 6;
      height: 100%;
      width: 100%;

      .third-part-title {
        position: absolute;
        bottom: 0;
        left: 90%;
        font-weight: 300;
        transform-origin: bottom left;
        transform: rotate(0.75turn) translateX(300%);
        font-size: 5vw;
        color: #293241;
        transition-delay: 1s;
      }
    }
    .site-name {
      position: absolute;
      top: 0;
      right: 0;
      width: auto;
      height: 75vh;
    }

    .bg-pattern {
      background-image: url("/ressources/img/svg/motif.svg");
      background-size: cover;
      opacity: 0.07;
      animation-name: anim_motif;
      animation-iteration-count: infinite;
      animation-duration: 10s;
      z-index: -1;

      @keyframes anim_motif {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.2);
        }

        100% {
          transform: scale(1);
        }
      }

      &.first {
        grid-row: 4;
        grid-column: 1/4;
      }
      &.second {
        grid-row: 4;
        grid-column: 7/9;
      }
    }
    .active {
      .fp-tableCell {
        .first-part-title {
          transform: rotate(0.75turn) translateX(-0.8vw);
          transition-delay: 1s;
          transition: all 2s;
        }
        .second-part-title {
          transform: rotate(0.75turn) translateX(1vw);
          transition-delay: 1.2s;
          transition: all 2s;
        }
        .third-part-title {
          transform: rotate(0.75turn) translateX(0);
          transition-delay: 1.2s;
          transition: all 2s;
        }
      }
    }

  }
</style>
