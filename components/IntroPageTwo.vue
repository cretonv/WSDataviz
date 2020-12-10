<template>
  <div class="content">
    <div class="map">
    </div>
    <div class="paragraph first">
      Ce n’est pas « juste » une vague de chaleur.
    </div>
    <div class="paragraph second">
      Ce n’est pas « juste » une inondation.
    </div>
    <div class="paragraph third">
      En réalité...
    </div>
    <div class="paragraph four">
      Les catastrophes climatiques n’épargnent pas la France.
    </div>
  </div>
</template>

<script>
  export default {
    name: "IntroPageTwo",
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 100vh;

    .map {
      position: absolute;
      top: 5%;
      left: 10%;
      width: calc(100% * 7 / 8);
      height: 90vh;
      background-image: url("/ressources/img/svg/map_grise6.svg");
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0.15;
    }

    .paragraph {
      position: absolute;
      width: 50vw;
      text-align: center;
      margin: 48vh 25vw;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      opacity: 0;
    }
    .active {
      .fp-tableCell {
        .paragraph {
          &.first {
            animation-name: anim_one;
            animation-duration: 2s;
            animation-play-state: running;
          }
          &.second {
            animation-name: anim_one;
            animation-duration: 2s;
            animation-delay: 3s;
            animation-play-state: running;
          }
          &.third {
            animation-name: anim_one;
            animation-duration: 1s;
            animation-delay: 6s;
            animation-play-state: running;
          }
          &.four {
            animation-name: anim_one;
            animation-duration: 13s;
            animation-delay: 7.5s;
            animation-play-state: running;
          }
          @keyframes anim_one {
            0% {
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          @keyframes anim_last {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 0.1;
            }
            20% {
              opacity: 0.2;
            }
            30% {
              opacity: 0.25;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
