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
            {
              label: 'Température extrême',
              data: this.entityAndDatas['Extreme temperature'],
              backgroundColor: [
                'rgba(255, 159, 64, 0)'
              ],
              borderColor: [
                'rgba(90,132,255, 1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(90,132,255, 1)',
              pointBorderWidth: 2
            },
            {
              label: 'Météo Extrême',
              data: this.entityAndDatas['Extreme weather'],
              backgroundColor: [
                'rgba(255, 159, 64, 0)'
              ],
              borderColor: [
                'rgb(13,130,255,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(13,130,255,1)',
              pointBorderWidth: 2
            },
          ]
        },
        options: {
          aspectRatio: 2.5,
          layout: {
            padding: {
              top: 25,
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 100,
                fontFamily: 'Montserrat',
                fontSize: 13

              },
              scaleLabel: {
                display: true,
                labelString: 'Nombre de catastrophes',
                fontFamily: 'Montserrat'
              }
            }],
            xAxes : [ {
              gridLines : {
                display : false
              },
              ticks: {
                fontFamily: 'Montserrat',
                stepSize: 50
              },
              scaleLabel: {
                display: true,
                labelString: 'Années',
                fontFamily: 'Montserrat'
              },
              scales : {
                max: 10
              }
            } ]
          },
          legend: {
            position: 'left',
            labels: {
              usePointStyle: true,
              padding: 18
            },
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
  width: 125vh;
  height: 50vh;
}
</style>
