<template>
  <LineChart :labels="labels" :entity-and-datas="entityAndDatas" :key="componentKey"> </LineChart>
</template>

<script>
  import LineChart from "./graph/LineChart";
  import * as d3 from "d3";

  export default {
    name: "GraphContainer",
    components: {
      LineChart
    },
    methods: {
      async fetchData() {
        let dataToGet;
        await d3.csv(
          '/data/number-of-natural-disaster-events.csv'
        ).then(function (newData) {
          dataToGet = newData;
        })
        this.stats = dataToGet;
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
      },
      changePhotos() {
        this.$parent.changePhotos()
      }
    },
    watch: {
      labels: function () {
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

<style scoped>

</style>
