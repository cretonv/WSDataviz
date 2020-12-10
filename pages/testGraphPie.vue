<template>
  <div>
    <PieChart
      :title="'CO2'"
      :label="this.label"
      :data="this.data"
      :detaildata="this.detaildata"
      :detaillabel="this.detaillabel"
    ></PieChart>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import PieChart from "../components/graph/PieChart";

  export default {
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
    computed: {
        ctx() {
            return document.getElementById('tab').getContext('2d')
        }
    },
    async mounted() {
        let data = await d3.csv(this.dataEventLocation);
        this.makeData(data)
    },
    methods: {
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
</style>
