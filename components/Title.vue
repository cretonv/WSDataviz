<template>
  <div class="title">
    <h1>Catastrophes climatiques</h1>
  </div>
  <div class="paragraph">
    <p>Definition catastrophes climatiques</p>
  </div>
  <div class="firstImage img"><img src="/ressources/img/image1.jpg" alt=""></div>
  <div class="secondImage img"><img src="/ressources/img/image2.jpg" alt=""></div>
  <h1 class="page">{{page}}</h1>
</template>

<script>
    export default {
        name: "title"
    }
</script>

<style lang="scss" scoped>

  .page{
    font-size: 300px;
    color: black;
    position: fixed;
    right:0;
    bottom:-50px;
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
    color:black;
    font-size: 40px;
  }

  .paragraph {
    margin-left: 10px;
    margin-top: 30px;
    grid-column: 3 / 5;
    grid-row: 3 / 4;
    color:black;
    font-size: 10px;
  }
</style>
