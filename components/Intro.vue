<template>
  <div class="content">
    <div class="map">
      <div class="button hidden" @click="openCard(0)"></div>
      <div class="button hidden" @click="openCard(1)"></div>
      <div class="button hidden" @click="openCard(2)"></div>
      <div class="button" @click="openCard(3)"></div>
      <div class="cards">
        <IntroCard
          :class="{card: true, isOpen: cardOpen[0]}"
          :title="'Californie'"
          :styleImg="'width: 300px;'"
          :posImg="'top'"
          :img="'/ressources/img/californie.jpg'"
          :type="'Feu de fôret'"
          :date="'09/19'"
          :datas="[ {data: '22,5', type: 'million €'}, {data: '485 600', type: 'hectares brûlés'}]"> </IntroCard>
        <IntroCard
          :class="'card ' + cardOpen[1]"
          :styleImg="'width: 200px;'"
          :title="'France'"
          :posImg="'bottom'"
          :img="'/ressources/img/france.jpg'"
          :type="'Canicule'"
          :date="'07/19'"
          :datas="[ {data: '1442', type: 'morts'} ]"> </IntroCard>
        <IntroCard
          :class="'card ' + cardOpen[2]"
          :title="'Inde'"
          :styleImg="'width: 300px;'"
          :posImg="'bottom'"
          :img="'/ressources/img/inde.jpg'"
          :type="'Inondation'"
          :date="'08/19'"
          :datas="[ {data: '1900', type: 'morts'} ]"> </IntroCard>
        <IntroCard
          :class="'card ' + cardOpen[3]"
          :title="'Japon'"
          :styleImg="'width: 300px;'"
          :posImg="'top'"
          :img="'/ressources/img/japon.jpg'"
          :type="'Typhon'"
          :date="'10/19'"
          :datas="[ {data: '20,7', type: 'milliards €'} ]"> </IntroCard>
      </div>
    </div>
  </div>
</template>

<script>
  import IntroCard from "./IntroCard";

  export default {
    name: "Intro",
    data() {
      return {
        cardOpen: [false, false, false, false],
      }
    },
    components: {
      IntroCard
    },
    computed: {},
    methods: {
      openCard(card) {
        let i = card
        document.querySelector('.card:nth-of-type(' + i + ')').classList.add('isOpen')
        if (i === 3) {
          document.querySelector('.button:nth-of-type(' + (i - 2) + ')').classList.remove('hidden')
        } else if (i === 1) {
          document.querySelector('.button:nth-of-type(' + (i + 1) + ')').classList.remove('hidden')
        } else {
          document.querySelector('.button:nth-of-type(' + (i - 1) + ')').classList.remove('hidden')
        }
        document.querySelector('.button:nth-of-type(' + (i) + ')').classList.add('no-animation')
      },
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
      background-image: url("/ressources/img/svg/map_grise6.svg");
      background-size: contain;
      background-repeat: no-repeat;
      width: 80%;
      height: 65vw;

      .cards {
        position: absolute;
        width: 80%;
        height: 65vw;
        opacity: 1;

        .card {
          position: absolute;
          transition-duration: 0.5s;
          opacity: 0;

          &.isOpen {
            opacity: 100%;
          }

          &:nth-of-type(1) {
            top: 6%;
            left: 4%;
          }

          &:nth-of-type(2) {
            top: 25%;
            left: 48%;
          }

          &:nth-of-type(3) {
            top: 33%;
            left: 78%;
          }

          &:nth-of-type(4) {
            top: 7%;
            left: 97%;
          }
        }
      }

      .button {
        position: absolute;
        z-index: 7;
        cursor: pointer;
        border-radius: 50%;
        background-color: red;
        width: 10px;
        height: 10px;
        transform: translateX(-50%) translateY(-50%);
        border: none;
        position: absolute;
        animation-name: anim_button;
        animation-iteration-count: infinite;
        animation-duration: 5s;

        &.no-animation {
          animation: none;
        }

        @keyframes anim_button {
          0% {
            box-shadow: 0px 0px 0px 0px rgba(255, 0, 0, 0.3);
          }

          50% {
            box-shadow: 0px 0px 0px 30px rgba(255, 0, 0, 0.3);
          }

          100% {
            box-shadow: 0px 0px 0px 0px rgba(255, 0, 0, 0.3);
          }
        }

        &.hidden {
          visibility: hidden;
        }

        &:nth-of-type(1) {
          top: 30%;
          left: 17%;
        }

        &:nth-of-type(2) {
          top: 29%;
          left: 49%;
        }

        &:nth-of-type(3) {
          top: 39%;
          left: 71%;
        }

        &:nth-of-type(4) {
          top: 31%;
          left: 86%;
        }
      }
    }
  }
</style>
