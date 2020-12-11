<template>
  <div>
    <h1>Exemple de mon graph</h1>
    <LineChart :labels="labels" :entity-and-datas="entityAndDatas" :key="componentKey"> </LineChart>
  </div>
</template>

<script>
  import LinePart from "../components/graph/LinePart";
  import * as d3 from 'd3';
  import * as d3fetch from 'd3-fetch';
  import LineChart from "../components/graph/LineChart";
  import EconomicLineChart from "../components/graph/EconomicLineChart";

  export default {
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
      },
      async getLabelsAndEntity() {
        let labelsReturnArray = [];
        let entityAndDatas = {};
        let pushElement = true;
        await d3.csv(
          '/data/number-of-natural-disaster-events.csv'
        ).then(function (data) {
          data.forEach((element) => {
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
        this.labels = labelsReturnArray
        this.entityAndDatas = entityAndDatas
      },
      forceRerender() {
        this.componentKey += 1;
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
        nameArray: [
          {
            "name": "John",
            "age": 30,
            "city": "New York"
          },
          {
            "name": "Jane",
            "age": 20,
            "city": "San Francisco"
          }
        ],
        labels: [],
        entityAndDatas: {},
        componentKey: 0
      }
    },
    mounted() {
      this.getLabelsAndEntity()
      let data = d3.json('data/tweets.json');
      let data2 = d3fetch.csv('/data/number-of-natural-disaster-events.csv');
    }
  }

</script>

<style lang="scss">
  .hello {
    color: red;

    span {
      color: blue;
    }
  }
</style>
