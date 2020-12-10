<template>
  <div class="pieChartContainer">
    <PieChart
      ref="pie"
      :title="'CO2'"
      :label="this.label"
      :data="this.data"
      :detaildata="this.detaildata"
      :detaillabel="this.detaillabel"
    > </PieChart>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import PieChart from "../components/graph/PieChart";

  export default {
    name: 'PieChartContainer',
    components: {
      PieChart
    },
    data() {
      return {
        dataEventLocation: '/data/co2.csv',
        data: [],
        label: [],
        detaildata: [],
        detaillabel: [],
        myChart: null
      }
    },
    async mounted() {
      let data = await d3.csv(this.dataEventLocation);
      this.makeData(data)
    },
    methods: {
      reloadPie() {
        console.log('reloadPie')
        this.$refs.pie.reload()
      },
      makeData(datas) {
        datas.forEach(element => {
          if (element.Type == 'Global'){
            this.data.push(parseInt(element.Data))
            this.label.push(element.Label)
            this.detaildata[element.Label] = []
            this.detaillabel[element.Label] = []
          }
        })
        this.label.forEach(element => {
          datas.forEach(data => {
            if (data.Type == element && data.Type != 'Global' && data.Data != ''){
              console.log(parseInt(data.Data))
              this.detaildata[element].push(parseInt(data.Data))
              this.detaillabel[element].push(data.Label)
            }
          })
        })
      }
    }
  }

</script>

<style lang="scss">
  .pieChartContainer {
    display: flex;
    align-items: center;
  }
</style>
