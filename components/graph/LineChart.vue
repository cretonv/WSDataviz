<template>
  <div class="lineChart">
    <canvas ref="myChart">
    </canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';

  export default {
    name: "LineChart",
    props:['labels', 'entityAndDatas'],
    data() {
      return {

      }
    },
    watch: {
      labels: function () {
        console.log('ICIIIII')
      }
    },
    mounted() {
      let ctx = this.$refs.myChart.getContext('2d')
      console.log('MARRE', this.labels)
      new Chart(ctx, {
        type: 'line',
        option: {
          responsive: true,
          maintainAspectRatio: false
        },
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Sécheresse',
              data: this.entityAndDatas.Drought,
              backgroundColor: [
                'rgba(255, 99, 132, 0)',
              ],
              borderColor: [
                'rgba(17,84,255,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(17,84,255,1)',
              pointBorderWidth: 2
            },
            {
              label: 'Toutes les catastrophes naturels',
              data: this.entityAndDatas['All natural disasters'],
              backgroundColor: [
                'rgba(208,232,242, 0)',
              ],
              borderColor: [
                'rgba(208,232,242,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(2,40,53,1)',
              pointBorderWidth: 2
            },
            {
              label: 'Innondation',
              data: this.entityAndDatas['Flood'],
              backgroundColor: [
                'rgba(75, 192, 192, 0)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(75, 192, 192, 1)',
              pointBorderWidth: 2
            },
            {
              label: 'Feu de forêt',
              data: this.entityAndDatas['Wildfire'],
              backgroundColor: [
                'rgba(255, 159, 64, 0)'
              ],
              borderColor: [
                'rgba(17,212,255,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(17,212,255,1)',
              pointBorderWidth: 2
            },
          ]
        },
        options: {
          aspectRatio: 2,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes : [ {
              gridLines : {
                display : false
              }
            } ]
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                tooltipItem.label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].x
                tooltipItem.xLabel = tooltipItem.label
                return tooltipItem.xLabel + ": " + tooltipItem.yLabel;
              },
              title: function(tooltipItem, data) {
                return data.datasets[tooltipItem[0].datasetIndex].label
              }
            }
          }
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
.lineChart {
  width: 100vw;
  height: 50vw;
}
</style>
