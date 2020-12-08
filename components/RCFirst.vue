<template>
  <div class="content">
    <div class="first-part-title-container">
      <h2 class="first-part-title"> catas</h2>
    </div>
    <h2 class="second-part-title"> trophes </h2>
    <div class="paragraph">
      <p> {{ paragraph }}</p>
    </div>
    <div class="img" :style="getFirstImagePosition" ><img :src='imageSrc' alt=""></div>
    <h2 class="page">{{page}}</h2>
  </div>
</template>

<script>
    export default {
      name: "RCfirst",
      props: {
        title: String,
        paragraph: String,
        imageSrc: String,
        imageXPosition: String,
        imageYPosition: String,
        page: String
      },
      computed: {
        getFirstImagePosition() {
          return {
            'grid-row': this.imageXPosition,
            'grid-column': this.imageYPosition,
          }
        },
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
      font-size: 300px;
      color: black;
      position: absolute;
      right: 0;
      bottom: -65px;
    }

    .img {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: all 0.3s;
        transform: scale(1.16);
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
      margin-left: 10px;
      margin-top: 30px;
      grid-column: 3 / 5;
      grid-row: 3 / 4;
      color: black;
      font-size: 18px;
      font-family: 'Montserrat';
    }
    .first-part-title-container {
      position: relative;
      grid-row: 1/4;
      grid-column: 2;
      height: 100%;
      width: 100%;
      overflow: hidden;

      .first-part-title {
        position: absolute;
        left: 95%;
        bottom: 0;
        transform-origin: bottom left;
        transform: rotate(0.75turn) translateX(-0.8vw);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 8vw;
        color: #FF3633;
      }
    }
    .second-part-title {
      position: absolute;
      right: 83.5vw;
      top: 0;
      transform-origin: top right;
      transform: rotate(0.75turn) translateX(1.5vw);
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 8vw;
      color: #FF3633;
    }
  }
</style>
