<template>
  <div class="content">
    <div class="title">
      <h2> {{title}} </h2>
    </div>
    <div class="paragraph">
      <p> {{ paragraph }}</p>
    </div>
    <div class="firstImage img" :style="getFirstImagePosition" ><img :src='firstImageSrc' alt=""></div>
    <div class="secondImage img" :style="getSecondImagePosition" ><img :src='secondImageSrc' alt=""></div>
    <h2 class="page">{{page}}</h2>
  </div>
</template>

<script>
    export default {
      name: "RCfirst",
      props: {
        title: String,
        paragraph: String,
        firstImageSrc: String,
        firstImageXPosition: String,
        firstImageYPosition: String,
        secondImageSrc: String,
        secondImageXPosition: String,
        secondImageYPosition: String,
        page: String
      },
      computed: {
        getFirstImagePosition() {
          return {
            'grid-row': this.firstImageXPosition,
            'grid-column': this.firstImageYPosition,
          };
        },
        getSecondImagePosition() {
          return {
            'grid-row': this.secondImageXPosition,
            'grid-column': this.secondImageYPosition,
          };
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
    grid-template-columns: 0.4fr repeat(6, 1fr) 0.4fr;
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
  }
</style>
