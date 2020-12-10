<template>
  <div class="content">
    <div class="first-part-title-container">
      <h2 class="first-part-title"> Conclu </h2>
    </div>
    <h2 class="second-part-title"> sion </h2>
    <div class="photo"></div>
    <div class="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur corporis cumque, deserunt dolorem doloribus eum excepturi exercitationem expedita illum molestiae nemo non numquam officiis porro quo recusandae sapiente vitae.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aspernatur consequuntur id iste iure quis voluptatem? Ab, dignissimos ea laboriosam modi, molestias nesciunt obcaecati officiis quibusdam repellendus tempore ullam.
    </div>
    <div class="bg-pattern first"></div>
  </div>
</template>

<script>
    export default {
        name: "Conclusion"
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

    .first-part-title-container {
      position: relative;
      grid-row: 1/4;
      grid-column: 2;
      height: 100%;
      width: 100%;
      overflow: hidden;

      .first-part-title {
        position: absolute;
        left: 113.9%;
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
      right: 82.3vw;
      top: 0;
      transform-origin: top right;
      transform: rotate(0.75turn) translateX(1.5vw);
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 8vw;
      color: #FF3633;
    }
    .photo {
      background-position: center;
      background-size: cover;
      grid-row: 1/4;
      grid-column: 4/8;
      transform-origin: top right;
      transform: translateX(1vw) scale(0.90);
      background-image: url("/ressources/img/image11.jpg");
      filter: grayscale(1);
      transition: all 0.5s;

      &:hover {
        filter: grayscale(0);
        transition: all 0.5s;
      }
    }
    .paragraph {
      grid-row: 4;
      grid-column: 4/6;
      font-family: 'Montserrat';
      font-size: 14px;
      line-height: 16px;
      color: #9D9D9D;
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
        grid-row: 3/5;
        grid-column: 6/9;
      }
    }
  }
</style>
