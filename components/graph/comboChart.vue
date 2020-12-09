<template>
    <div>
        <div class="chart-container">
            <canvas id="tab">
            </canvas>
        </div>
    </div>
</template>

<script>
  import * as d3 from 'd3';
  import Chart from 'chart.js';

  export default {
    name: "ComboChart",
    data() {
        return {
            dataTempLocation: '/data/temp_over_year.csv',
            dataEventLocation: '/data/comboChartData.csv',
            title: 'CO2',
            typefirst: 'bar',
            datasfirst: [],
            label: [],
            typesecond: 'line',
            datassecond: [],
        }
    },
    computed: {
        ctx() {
            return document.getElementById('tab').getContext('2d')
        }
    },
    async mounted() {
        let datafirst = await d3.csv(this.dataTempLocation);
        let datasecond = await d3.csv(this.dataEventLocation);
        this.makeData(datafirst, datasecond)
        this.makeTab()
    },
    methods: {
      makeTab() {
        this.myChart = new Chart(this.ctx, {
          type: this.typefirst,
          data: {
            labels: this.label,
            datasets: [
              {
                label: 'Écart de température',
                data: this.datasfirst,
                backgroundColor: [
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(196,196,196,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(255,54,51,0.5)',
                  'rgba(196,196,196,0.5)',
                ],
                borderColor: [
                  'rgba(255,199,181,1)',
                ],
                yAxisID: 'left-y-axis'
              },
              {
                label: 'event',
                data: this.datassecond,
                backgroundColor: [
                  'rgba(208,232,242, 0)',
                ],
                borderColor: [
                  'rgba(255,199,181,1)',
                ],
                yAxisID: 'right-y-axis',
                type: this.typesecond
              }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                id: 'left-y-axis',
                type: 'linear',
                position: 'left'
              }, {
                id: 'right-y-axis',
                type: 'linear',
                position: 'right'
              }]
            }
          }
        })
      },
      makeData(datafirst, datasecond) {
        datafirst.forEach(element => {
          if(parseInt(element["Year"]) >= 1962 && parseInt(element["Year"]) <= 2018) {
            this.datasfirst.push(parseFloat(element["Temp"]))
          }
        })
        datasecond.forEach(element => {
          if(parseInt(element["Year"]) >= 1962 && parseInt(element["Year"]) <= 2018 && element['Entity'] == 'All natural disasters') {
            this.label.push(element["Year"])
            this.datassecond.push(parseInt(element["Number of disasters (EMDAT (2020))"]))
          }
        })
        console.log(datasecond, this.datassecond, this.label)
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
