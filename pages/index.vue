<template>
  <div class="body">
      <div :class="loading"></div>
      <GridBackground class="background" :columns="'0.4fr repeat(6, 1fr) 0.6fr'" :rows="'repeat(4, 1fr)'"> </GridBackground>
      <div class="content">
        <div class="nav">
          <div class="logo">
            <img class="earth" src="ressources/icon/red_round.svg">
          </div>
          <button class="points" @click="test('first')"> </button>
          <button class="points" @click="test('second')"> </button>
          <button class="points" @click="test('third')"> </button>
        </div>
        <full-page ref="fullpage" :options="options" id="fullpage">
          <div class="section">
            <RCfirst
               title="Catastrophes climatiques"
               paragraph="Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum"
               page="01"
               imageSrc="/ressources/img/image1.jpg"
               imageXPosition="1/4"
               imageYPosition="4/7"
            > </RCfirst>
          </div>
          <div class="section">
            <GraphDisplayPageOne
              title="Évolution dans le monde entre 1950 et 2000 "
              subTitle='Nombre d’évènements et de victimes par aléa en France en 2019 '
              page="01">
            </GraphDisplayPageOne>
          </div>
          <div class="section">
            <GraphDisplayPageTwo
              title="France - 2019 "
              subTitle='Nombre d’évènements et de victimes par aléa en France en 2019'
              page="01">
            </GraphDisplayPageTwo>
          </div>
          <div class="section">
            <GraphDisplayPageThree
              title="France - 1974-2018"
              subTitle='Population exposée à au moins une canicule dans l’été en France en millions d’habitants '
              page="01">
            </GraphDisplayPageThree>
          </div>
          <div class="section">
            <VariousStatsPageFour>

            </VariousStatsPageFour>
          </div>
          <div class="section">
            <SecondTitle
              title="Catastrophes climatiques"
              paragraph="Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum"
              page="02"
              imageSrc="/ressources/img/image11.jpg"
              imageXPosition="1/5"
              imageYPosition="2/5"
            >

            </SecondTitle>
          </div>
        </full-page>
      </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueFullPage from 'vue-fullpage'

  Vue.use(VueFullPage);

  import GridBackground from "../components/GridBackground.vue";
  import GraphDisplay from "../components/GraphDisplayPageOne.vue";
  import RCfirst from "../components/RCFirst.vue";
  import GraphDisplayPageOne from "../components/GraphDisplayPageOne";
  import GraphDisplayPageTwo from "../components/GraphDisplayPageTwo";
  import GraphDisplayPageThree from "../components/GraphDisplayPageThree";
  import VariousStatsPageFour from "../components/VariousStatsPageFour";

  export default {
    components: {
      GraphDisplay,
      RCfirst,
      GraphDisplayPageOne,
      GraphDisplayPageTwo,
      GraphDisplayPageThree,
      VariousStatsPageFour
    },
    component() {
      GridBackground,
      RCfirst,
      GraphDisplayPageOne,
      GraphDisplayPageTwo,
      GraphDisplayPageThree
    },
    data() {
      return {
        loading: 'loading',
        options: {
          licenseKey: 'my_key',
          menu: '#menu',
          anchors: ['1CCTitre', '1CCPage1', '1CCPage2', '1CCPage3', '1CCConclu']
        },
        page: "01"
      }
    },
    async mounted() {
      await this.waitforloading();
      document.addEventListener('DOMContentLoaded',() => {
          this.test('test the loading')
      });
    },
    methods: {
      test(test){
        console.log('test', test)
      },
      waitforloading() {
        setTimeout(() => {
          this.loading = 'loading stop'
          console.log('testloading')
        }, 3000)
      }
    },
  }

</script>

<style lang="scss">
  .body {
    position: fixed;
    margin-left: 0;
    width: 100%;
    height: 100vh;

    .loading {
      position: absolute;
      z-index: 10;
      width: 100%;
      height:100vh;
      top:0;
      left:0;
      background-color: white;
    }

    .stop {
      transition-duration: 0.7s;
      top: -100vh;
    }

    .content {

      .nav{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 0.4fr repeat(6, 1fr) 0.6fr;
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 1px;
        grid-row-gap: 1px;
      }

      #fullpage{
        width: 100vw;

        .fp-tableCell{
          vertical-align: unset;
        }
      }

      .logo {
        grid-column: 8 / 9;
        grid-row: 1 / 2;
        text-align: center;

        .earth {
          margin-top: 30px;
          width: 50px;
          height: 50px;
        }
      }

      .points {
        cursor: pointer;
        transform: translateY(-50%) translateX(-50%);
        width: 13px;
        height: 13px;
        font-size: 0;
        border-radius: 100%;
        background-color: #D3D3D3;
        border: 0;
        grid-column: 2;

        &:nth-of-type(1) {
          grid-row: 3;
        }

        &:nth-of-type(2) {
          grid-row: 4;
        }

        &:nth-of-type(3) {
          grid-row: 2;
        }
      }
    }

    #fullpage {
      z-index: 5;
    }

    .background {
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index: 0;
    }
  }
</style>
