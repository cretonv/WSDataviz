<template>
  <div class="content">
      <div class="map">
        <div class="button" @click="openCard(0)"></div>
        <div class="button" @click="openCard(1)"></div>
        <div class="button" @click="openCard(2)"></div>
        <div class="button" @click="openCard(3)"></div>
        {{cardOpen}}
        <div class="cards">
          <IntroCard 
            :class="{card: true, isOpen: cardOpen[0]}"
            :title="'Californie'"
            :styleImg="'width: 300px;'"
            :posImg="'top'"
            :img="'/ressources/img/californie.jpg'"
            :type="'Feu de fôret'"
            :date="'09/19'"
            :datas="[ {data: '22,5', type: 'million €'}, {data: '485 600', type: 'hectares brûlés'}]"></IntroCard>
          <IntroCard 
            :class="'card ' + cardOpen[1]"
            :styleImg="'width: 200px;'"
            :title="'France'"
            :posImg="'bottom'"
            :img="'/ressources/img/france.jpg'"
            :type="'Canicule'"
            :date="'07/19'"
            :datas="[ {data: '1442', type: 'morts'} ]"></IntroCard>
          <IntroCard 
            :class="'card ' + cardOpen[2]"
            :title="'Inde'"
            :styleImg="'width: 300px;'"
            :posImg="'bottom'"
            :img="'/ressources/img/inde.jpg'"
            :type="'Inondation'"
            :date="'08/19'"
            :datas="[ {data: '1900', type: 'morts'} ]"></IntroCard>
          <IntroCard 
            :class="'card ' + cardOpen[3]"
            :title="'Japon'"
            :styleImg="'width: 300px;'"
            :posImg="'top'"
            :img="'/ressources/img/japon.jpg'"
            :type="'Typhon'"
            :date="'10/19'"
            :datas="[ {data: '20,7', type: 'milliards €'} ]"></IntroCard>
        </div>
      </div>
  </div>
</template>

<script>
  import IntroCard from "../components/Object/IntroCard.vue";
    export default {
      name: "Intro",
      computed: {
      },
      data() {
        return {
          cardOpen: [false, false, false, false],
        }
      },
      methods: {
        openCard(card) {
          console.log(card)
          if (this.cardOpen[card] == false ) {
            console.log('change to true')
            this.cardOpen[card] = true
          } else if (this.cardOpen[card] == true ) {
            console.log('change to false')
            this.cardOpen[card] = false
          }
          console.log(this.cardOpen)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 100vh;

      .map {
        position: relative;
        top: 5%;
        left: 10%;
        width: 80%;
        height: 65vw;
        opacity: 0.8;
        background-image: url("/ressources/img/svg/map_grise6.svg");
        background-size: contain;
        background-repeat: no-repeat;

        .cards {
          position: absolute;
          width: 80%;
          height: 65vw;
          
          .card {
            position: absolute;
            transition-duration: 0.5s;
            opacity: 0;

            &.isOpen{
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

          @keyframes anim_button {
            0% {
              box-shadow: 0px 0px 0px 0px rgba(255,0,0,0.3);
            }

            50% {
              box-shadow: 0px 0px 0px 30px rgba(255,0,0,0.3);
            }

            100% {
              box-shadow: 0px 0px 0px 0px rgba(255,0,0,0.3);
            }
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
