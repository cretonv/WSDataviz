<template>
  <div class="content">
    <div class="first-part-title-container">
      <h2 class="first-part-title"> Conclu </h2>
    </div>
    <div class="second-part-title-container">
      <h2 class="second-part-title"> sion </h2>
    </div>
    <div class="photo"></div>
    <div class="paragraph">
      Les catastrophes climatiques sont présentes en France malgré leur aspect diffus. Leur nombre s'accélère au même rythme que l’écart des températures.
      <br> <br>
      Bien que impuissants face aux cycles du climat, il est de notre ressort de limiter le réchauffement climatique et cela passe par de petites actions quotidiennes.
      <br>Limitons notre impact.

      Pour en savoir plus sur des actions écoresponsables, on vous invite à consulter ce site : <a href="https://cacommenceparmoi.org/agir/" target="_blank">https://cacommenceparmoi.org/agir/</a>

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
        transform: rotate(0.75turn) translateX(-300%);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 8vw;
        color: #FF3633;
        transition: all 2s;
      }
    }
    .second-part-title-container {
      position: relative;
      grid-row: 1/4;
      grid-column: 2 / 4;
      height: 100%;
      width: 100%;
      overflow: hidden;

      .second-part-title {
        position: absolute;
        right: 16.5vw;
        top: 0;
        transform-origin: top right;
        transform: rotate(0.75turn) translateX(-300%);
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 8vw;
        color: #FF3633;
        transition: all 2s;
      }
    }
    .photo {
      background-position: center;
      background-size: cover;
      grid-row: 1/4;
      grid-column: 4/8;
      transform-origin: top right;
      transform: translateX(1vw) scale(0.90);
      background-image: url("/ressources/img/image13.jpg");
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
      padding: 10px;

      a {
        color: #ff6869;
        text-decoration: none;

        &:hover {
          color: #FF3633;
        }
      }
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

    .active {
      .fp-tableCell {
        .first-part-title {
          transform: rotate(0.75turn) translateX(-0.8vw);
          transition-delay: 1s;
          transition: all 2s;
        }
        .second-part-title {
          transform: rotate(0.75turn) translateX(1.5vw);
          transition-delay: 1s;
          transition: all 2s;
        }
      }
    }
  }
</style>
