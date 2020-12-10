<template>
  <div class="content">
    <div class="map">
    </div>
    <div class="paragraph">
      Les catastrophes climatiques n’épargnent pas la france.
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
      width: fit-content;
      text-align: center;
      margin: 48vh auto;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      opacity: 0;
      transition-delay: 1s;
      transition: 1s all;
    }
    .active {
      .fp-tableCell {
        .paragraph {
          opacity: 1;
          transition: 2s all;
          transition-delay: 0.5s;
        }
      }
    }
  }
</style>
