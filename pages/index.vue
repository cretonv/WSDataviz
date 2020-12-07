<template>
  <div class="body">
      <GridBackground class="background" :columns="'0.4fr repeat(6, 1fr) 0.4fr'" :rows="'repeat(4, 1fr)'"> </GridBackground>
      <div class="content">
        <div class="nav">
          <div class="logo">
            <img class="earth" src="ressources/icon/earth.svg">
          </div>
          <button class="points" @click="test('first')"> </button>
          <button class="points" @click="test('second')"> </button>
          <button class="points" @click="test('third')"> </button>
        </div>

        <full-page ref="fullpage" :options="options" id="fullpage">
          <div class="section">
            <Title 
                  title="Catastrophes climatiques"
                  paragraph="Definition catastrophes climatiques"
                  page="01"
                  :image1src="'/ressources/img/image1.jpg'"
                  image2src="/ressources/img/image2.jpg"
            > </Title>
          </div>
          <div class="section">
            <Title 
                  title="Catastrophes climatiques"
                  paragraph="Definition catastrophes climatiques"
                  page="01"
                  :image1src="'/ressources/img/image1.jpg'"
                  image2src="/ressources/img/image2.jpg"
            > </Title>
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
  import Title from "../components/Title.vue";

  export default {
    component() {
      GridBackground
    },
    data() {
      return {
        options: {
          licenseKey: 'YOUR_KEY_HEERE',
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3']
        },
        page: "01",
        pageable: null
      }
    },
    mounted() {},
    methods: {
      test(test){
        console.log('test', test)
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

    .content {

      .nav{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 0.4fr repeat(6, 1fr) 0.4fr;
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
        background-color: #495464;
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

    .background {
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index: 0;
    }
  }
</style>
