<template>
  <div class="content">

    <div class="title">
      <h2>Constat  MONDE</h2>
    </div>
    <div class="no-line-bg"></div>
    <div class="no-line-bg-bis"></div>
    <div class="section-title">
     <div class="section-title-content"> Catastrophes climatiques </div>
    </div>
    <LineChart class="graph" :labels="labels" :entity-and-datas="entityAndDatas" :key="componentKey"> </LineChart>
    <h2 class="page">01</h2>
  </div>
</template>

<script>
  import LineChart from "./graph/LineChart";
  import * as d3 from "d3";

    export default {
      name: "GraphDisplay",
      components: {LineChart},
      methods: {
        async fetchData() {
          let dataToGet;
          await d3.csv(
            '/data/number-of-natural-disaster-events.csv'
          ).then(function (newData) {
            dataToGet = newData;
          })
          this.stats = dataToGet;
          console.log('STATS', this.stats)
          //console.log('STAT', this.stats[25].Number_of_disasters)
        },
        async getLabelsAndEntity() {
          let labelsReturnArray = [];
          let entityAndDatas = {};
          let pushElement = true;
          console.log(this.stats)
          await d3.csv(
            '/data/number-of-natural-disaster-events.csv'
          ).then(function (data) {
            data.forEach((element) => {
              //console.log('rentre dans le foreach')
              if(labelsReturnArray === []) {
                labelsReturnArray.push(element.Year)
              }
              for(let i = 0; i < labelsReturnArray.length; i++){
                if(labelsReturnArray[i] === element.Year) {
                  pushElement = false;
                }
              }
              if(pushElement) {
                labelsReturnArray.push(element.Year)
              }
            })
            return data
          }).then(function (data) {
            data.forEach((element) => {
              pushElement = true
              if(entityAndDatas === []) {
                entityAndDatas[element.Entity] = []
                entityAndDatas[element.Entity].push({['x']: element.Year ,['y']: element.Number_of_disasters})
              }
              for(let key in entityAndDatas){
                if(key === element.Entity) {
                  pushElement = false;
                  entityAndDatas[element.Entity].push({['x']: element.Year ,['y']: element.Number_of_disasters})
                }
              }
              if(pushElement) {
                entityAndDatas[element.Entity] = []
                entityAndDatas[element.Entity].push({['x']: element.Year ,['y']: element.Number_of_disasters})
              }
            })
          })
          //console.log('YEARS', labelsReturnArray)
          //console.log('ENTITY&DATAS', entityAndDatas)
          this.labels = labelsReturnArray
          this.entityAndDatas = entityAndDatas
          //console.log('ARRAY', this.labels)
          console.log('ARRAY', this.entityAndDatas)
        },
        forceRerender() {
          this.componentKey += 1;
        }
      },
      watch: {
        labels: function () {
          console.log('CAHNGE')
          this.forceRerender()
        },
        entityAndDatas: function () {
          this.forceRerender();
        }
      },
      data() {
        return {
          labels: [],
          entityAndDatas: {},
          componentKey: 0
        }
      },
      mounted() {
        this.getLabelsAndEntity()
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

    .page {
      font-size: 144px;
      color: #E7EFFF;
      grid-row: 4;
      grid-column: 7;
      display: flex;
      flex-flow: row-reverse;
    }

    .graph {
      grid-column: 3 / 6;
      grid-row: 2 / 4;
    }

    .title {
      margin-left: 65px;
      grid-column: 2 / 5;
      grid-row: 1;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: end;
      flex-flow: column-reverse;

      h2 {
        color: black;
        font-size: 36px;
        font-family: 'Montserrat';
        font-weight: 800;
      }
    }
    .section-title {
      position: relative;
      grid-row: 1/3;
      grid-column: 2;
      .section-title-content {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(0.75turn) translateX(-60%) translateY(2.5vw);
        transform-origin: bottom left;
        width: 50vh;
      }
    }
    .no-line-bg {
      grid-row: 2/4;
      grid-column: 4/8;
      background-color: #ffffff;
    }
    .no-line-bg-bis {
      grid-row: 2/4;
      grid-column: 3;
      background-color: #ffffff;
    }
  }
</style>
