<template>
  <div class="lineChart">
    <canvas ref="myChart">
    </canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';

  export default {
    name: "Combo",
    props: {
        title: String,
        typefirst:String,
        datasfirst: Array,
        labelsfirst: Array,
        typesecond: String,
        datassecond: Array,
        labelssecond: Array,
    },
    data() {
      return {
      }
    },
    mounted() {
      let ctx = this.$refs.myChart.getContext('2d')
      new Chart(ctx, {
        type: this.typefirst,
        data: {
          labels: this.title,
          datasets: [
            {
              label: this.labelsfirst,
              data: this.datasfirst,
              backgroundColor: [
                'rgba(208,232,242, 0)',
              ],
              borderColor: [
                'rgba(255,199,181,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(2,40,53,1)',
              pointBorderWidth: 2
            },
            {
              label: this.labelssecond,
              data: this.datassecond,
              backgroundColor: [
                'rgba(208,232,242, 0)',
              ],
              borderColor: [
                'rgba(255,199,181,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(2,40,53,1)',
              pointBorderWidth: 2,
              type: this.typesecond
            }
          ]
        },
        options: {
          aspectRatio: 2.5,
          tooltips: {
              mode: 'nearest'
          },
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
          }
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
