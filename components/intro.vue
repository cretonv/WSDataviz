<template>
  <div class="content">
      <div class="map">
      </div>
  </div>
</template>

<script>
    export default {
      name: "Intro",
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
      }
  }
</style>
