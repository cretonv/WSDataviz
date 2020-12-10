<template>
  <div class="lineChart">
    <canvas ref="myChart">
    </canvas>
    <div class="text">
      <span class="explication">Entre les années 1962 et 2000 nous observons une tendance à la  hausse du nombre de sécheresse, feux de fôret ainsi que température extrêmes.</span>
      <div v-if="addDataCounter < 2" class="buttonChangeDatas" @click="displayOtherDatas">
        Voir les stats suivantes
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from 'chart.js';

  export default {
    name: "LineChart",
    props:['labels', 'entityAndDatas'],
    data() {
      return {
        myChart: null,
        addDataCounter: 0
      }
    },
    methods: {
      displayOtherDatas: function() {
        if(this.addDataCounter === 0) {
          document.querySelector('.explication').textContent = "Cette hausse est d’autant plus flagrante en ce qui concerne les inondations et la météo extrême."
          this.myChart.data.datasets.push(
            {
              label: 'Innondation',
              data: this.entityAndDatas['Flood'],
              backgroundColor: [
                'rgba(75, 192, 192, 0)',
              ],
              borderColor: [
                'rgba(255,54,51,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(255,54,51,1)',
              pointBorderWidth: 2
            },
            {
              label: 'Météo Extrême',
              data: this.entityAndDatas['Extreme weather'],
              backgroundColor: [
                'rgba(255, 159, 64, 0)'
              ],
              borderColor: [
                'rgba(208,3,0,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(208,3,0,1)',
              pointBorderWidth: 2
            },
          )
          this.myChart.update()
          this.addDataCounter ++;
        } else if(this.addDataCounter === 1) {
          document.querySelector('.explication').textContent = "Les inondations et les météo extrêmes sont les évènements ayant plus de poids dans l’ensemble des catastrophes climatiques."
          this.myChart.data.datasets.push(
            {
              label: 'Toutes les catastrophes naturels',
              data: this.entityAndDatas['All natural disasters'],
              backgroundColor: [
                'rgba(208,232,242, 0)',
              ],
              borderColor: [
                'rgba(255,54,51,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(255,54,51,1)',
              pointBorderWidth: 2
            }
          )
          this.myChart.update()
          this.addDataCounter ++
        }
        this.$parent.changePhotos()
      }
    },
    mounted() {
      let ctx = this.$refs.myChart.getContext('2d')
      console.log('LABELS PUTAIN', this.labels)
      console.log('LABELS PUTAIN', this.entityAndDatas)
      this.myChart = new Chart(ctx, {
        type: 'line',
        option: {
          responsive: true,
          maintainAspectRatio: false
        },
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Sécheresse & Feu de forêt & Température extrême',
              data: this.entityAndDatas['Minor'],
              backgroundColor: [
                'rgba(255, 99, 132, 0)',
              ],
              borderColor: [
                'rgba(77,77,77,1)',
              ],
              borderWidth: 3,
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              pointBorderColor: 'rgba(77,77,77,1)',
              pointBorderWidth: 2
            },
          ]
        },
        options: {
          aspectRatio: 2,
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
            position: 'bottom',
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
    width: 100vh;
    height: 50vh;
  }
  .text {
    max-width: 14vw;
    padding: 20px;
    font-size: 12px;
    line-height: 15px;
    color: #414141;

    .buttonChangeDatas {
      color: #ffffff;
      background-color: #FF3633;
      border-radius: 20px;
      width: fit-content;
      padding: 10px;
      margin-top: 25px;
      text-transform: capitalize;
      cursor: pointer;
      float: right;
      transition: all 0.5s;

      &:hover {
        background-color: rgb(226, 3, 0);
        transition: all 0.5s;
      }

    }
  }
</style>
