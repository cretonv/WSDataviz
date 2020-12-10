<template>
  <div class="lineChart">
    <canvas ref="myChart">
    </canvas>
  </div>
</template>

<script>
    import Chart from "chart.js";

    export default {
      name: "LineChartPageThree",
      props:['labels', 'entityAndDatas'],
      data() {
        return {

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
                label: 'Population',
                data: this.entityAndDatas,
                showLine: false,
                backgroundColor: [
                  'rgba(255,54,51,1)',
                  'rgba(255,54,51,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(255,54,51,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(255,54,51,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(255,54,51,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(255,54,51,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(255,54,51,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(196,196,196,1)',
                  'rgba(255,54,51,1)',
                  'rgba(255,54,51,1)',
                  'rgba(196,196,196,1)',
                  'rgba(255,54,51,1)',
                  'rgba(255,54,51,1)',
                  'rgba(255,54,51,1)',
                  'rgba(255,54,51,1)',
                ],
                borderColor: [
                  'rgba(208,232,242,0)',
                ],
                pointRadius: 5.5,
              },
            ]
          },
          options: {
            aspectRatio: 1.5,
            layout: {
              padding: {
                top: 25,
              }
            },
            scales: {
              yAxes: [{
                gridLines : {
                  display : false
                },
                ticks: {
                  beginAtZero: true,
                  fontFamily: 'Montserrat',
                  fontSize: 13,
                  stepSize: 20
                },
                scaleLabel: {
                  display: true,
                  labelString: "Millions d'habitants",
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
              display: false
            },
          }
        })
      }
    }

</script>

<style lang="scss" scoped>
  .lineChart {
    width: 75vh;
    height: 50vh;
  }
</style>
