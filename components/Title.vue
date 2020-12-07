<template>
  <div class="content">
    <div class="title">
      <h1> {{title}} </h1>
    </div>
    <div class="paragraph">
      <p> {{ paragraph }}</p>
    </div>
    <div class="firstImage img"><img src="/ressources/img/image1.jpg" alt=""></div>
    <div class="secondImage img"><img src="/ressources/img/image2.jpg" alt=""></div>
    <h1 class="page">{{page}}</h1>
  </div>
</template>

<script>
    export default {
      name: "title",
      props: {
        title: String,
        paragraph: String,
        image1Src: String,
        image2Src: String,
        page: String
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
    grid-template-columns: 0.4fr repeat(6, 1fr) 0.4fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1px;
    grid-row-gap: 1px;

    .page {
      font-size: 300px;
      color: black;
      position: fixed;
      right: 0;
      bottom: -50px;
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

    .firstImage {
      grid-column: 6 / 7;
      grid-row: 1 / 3;
    }

    .secondImage {
      grid-column: 5 / 6;
      grid-row: 3 / 5;
    }

    .title {
      margin-left: 41px;
      grid-column: 2 / 5;
      grid-row: 2 / 3;
      color: black;
      font-size: 40px;
    }

    .paragraph {
      margin-left: 10px;
      margin-top: 30px;
      grid-column: 3 / 5;
      grid-row: 3 / 4;
      color: black;
      font-size: 10px;
    }
  }
</style>
