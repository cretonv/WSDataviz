<template>
  <div class="content">
      <div class="map">
          <img src="data/ressources/svg/world.svg">
      </div>
  </div>
</template>

<script>
    export default {
      name: "Intro",
      data() {
        return {
        }
      },
      computed: {
      },
      methods: {
      }
    }
</script>

<style lang="scss" scoped>
  .content {

      .map {
          img {
              width: 50vw;
              height: 30vh;
          }
      }
  }
</style>
