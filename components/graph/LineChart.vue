<template>
  <div>
    <div style="visibility: hidden"></div>
    <canvas ref="myChart" width="150" height="150">

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
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
            },
            {
              label: 'Toutes les catastrophes naturels',
              data: this.entityAndDatas['All natural disasters'],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Innondation',
              data: this.entityAndDatas['Flood'],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            },
            {
              label: 'Feu de forêt',
              data: this.entityAndDatas['Wildfire'],
              backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            },
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
canvas {
  /*width: 50% !important;
  height: 50% !important;*/
}
</style>
