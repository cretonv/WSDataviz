<template>
  <div class="content">
    <!--<div class="title"> EN SILENCE</div>-->
    <Lottie-animation
      class="title"
      path="animation/anim.json"
      :loop="true"
      :autoPlay="true"
      :speed="1"
      ref="lottie"
      @animControl="setAnimController"
    />
    <!--<div class="animation">
      <video autoplay loop>
        <source src="/ressources/video/logo.mp4"
                type="video/mp4">
      </video>
    </div>-->
    <div class="baseline">Les catastrophes climatiques les plus assourdissantes ne sont pas forcément les plus dévastatrices.</div>
  </div>
</template>

<script>
  import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"

    export default {
      name: "IntroPageThree",
      components: {
        LottieAnimation
      },
      data() {
        return {
          anim: null,
        }
      },
      methods: {
        setAnimController (anim) {
          this.anim = anim
          window.anim = anim
        }
      }

    }
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      transform: translateY(-3vh);
    }
    .baseline {
      position: absolute;
      right: 25vw;
      left: 25vw;
      bottom: 35vh;
      max-width: 50vw;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #C1C1C1;
    }
    .animation {
      max-width: 80vw;
      height: auto;
      margin: 10vw 35vh;

    }
  }
</style>
