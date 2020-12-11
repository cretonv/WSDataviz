<template>
  <div class="graph-container">
    <h2>{{title}}</h2>
    <svg :height="height" :width="width"></svg>
  </div>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    name: "LinePart",
    data() {
      return {
        title: "Constat",
        stats: [],
        height: 600,
        width: 600
      }
    },
    mounted() {
      this.fetchData()
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
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
