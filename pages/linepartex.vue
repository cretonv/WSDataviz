<template>
  <div>
    <h1>Exemple de mon graph</h1>
    <div class="hello">
      Bonjour <span class="blue">toi</span>
    </div>
    <LineChart :labels="labels" :entity-and-datas="entityAndDatas" :key="componentKey"> </LineChart>
  </div>
</template>

<script>
  import LinePart from "../components/graph/LinePart";
  import * as d3 from 'd3';
  import * as d3fetch from 'd3-fetch';
  import LineChart from "../components/graph/LineChart";

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
      console.log('TRUC', data);
      console.log('TRUC', data2);
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
