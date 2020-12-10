<template>
  <LineChartPageThree :labels="labels" :entity-and-datas="entityAndDatas" :key="componentKey"> </LineChartPageThree>
</template>

<script>
    import LineChartPageThree from "./graph/LineChartPageThree";
    import * as d3 from "d3";

    export default {
      name: "GraphContainerPageThree",
      components: {
        LineChartPageThree
      },
      methods: {
        async fetchData() {
          let dataToGet;
          await d3.csv(
            '/data/Population_expose_aux_canicules.csv'
          ).then(function (newData) {
            dataToGet = newData;
          })
          this.stats = dataToGet;
        },
        async getLabelsAndEntity() {
          let labelsReturnArray = [];
          let entityAndDatas = [];
          let pushElement = true;
          console.log(this.stats)
          await d3.csv(
            '/data/Population_expose_aux_canicules.csv'
          ).then(function (data) {
            data.forEach((element) => {
              if(labelsReturnArray === []) {
                labelsReturnArray.push(element.Annee)
              }
              for(let i = 0; i < labelsReturnArray.length; i++){
                if(labelsReturnArray[i] === element.Annee) {
                  pushElement = false;
                }
              }
              if(pushElement) {
                labelsReturnArray.push(element.Annee)
              }
            })
            return data
          }).then(function (data) {
            data.forEach((element) => {
              entityAndDatas.push(element.Population)
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
        //this.fetchData();
        this.getLabelsAndEntity()
      }
    }
</script>

<style scoped>

</style>
