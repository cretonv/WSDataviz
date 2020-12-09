<template>
    <div style="display:flex;">
        <div class="chart-container">
            <canvas id="tab">
            </canvas>
        </div>
        <form class="button">
          <h3 class="button-title">Unité</h3>
          <div>
            <!--<input @click="change('event')" type="radio" id="dataType1" name="dataType" value="event" checked>-->
            <label class="event active" @click="change('event')" >Nombre d'évènements</label>
          </div>
          <div>
            <!--<input @click="change('death')" type="radio" id="dataType2" name="dataType" value="death">-->
            <label class="victims" @click="change('death')">Nombre de victimes</label>
          </div>
        </form>
    </div>
</template>

<script>
import * as d3 from 'd3';
import Chart from 'chart.js';

export default {
    name: "BarChart",
    data() {
        return {
            dataEventLocation: 'data/natural-disasters-by-type.csv',
            dataDeathLocation: 'data/deaths-from-natural-disasters-by-type.csv',
            data: [],
            label: [],
            labelName: "nombre d'évènements",
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
        this.makeData(data, 'event')
        this.makeTab()
    },
    methods: {
        makeData(data, type) {
            this.data = []
            this.label = []
            data.forEach(element => {
                if (element.Year == 2019 && element.Entity != 'All natural disasters'){
                    if(type == 'event'){
                        this.data.push(parseInt(element["Number of disasters (EMDAT (2020))"]))
                    } else if(type == 'death'){
                        this.data.push(parseInt(element["Total deaths (EMDAT (2020))"]))
                    }
                    this.label.push(element.Entity)
                }
            })
            this.sorting()
        },
        async change(type){
            let data
            if (type == 'event') {
                document.querySelector('.event').classList.add('active')
                document.querySelector('.victims').classList.remove('active')

                data = await d3.csv(this.dataEventLocation);
                this.makeData(data, type)
                this.myChart.data.datasets.forEach((dataset) => {
                    console.log('LE LABEL', this.labelName)
                    dataset.label = "nombre d'évènements"
                    this.labelName = "nombre d'évènements"
                })
            } else if (type == 'death') {
                document.querySelector('.event').classList.remove('active')
                document.querySelector('.victims').classList.add('active')

                data = await d3.csv(this.dataDeathLocation);
                this.makeData(data, type)
                this.myChart.data.datasets.forEach((dataset) => {
                    dataset.label = "nombre de morts par évènements"
                    this.labelName = "nombre de morts par évènements"
                })
            }
            this.myChart.options.scales.xAxes[0].scaleLabel.labelString = this.labelName
            this.myChart.data.labels = this.label
            this.myChart.data.datasets.forEach((dataset) => {
                dataset.data = this.data;
            });
            this.myChart.update();
        },
        sorting() {
            const temp = []
            for (let i = 0; i < this.data.length; i++) {
                temp.push(this.data[i])
            }
            let sortedLabel = []
            this.data.sort(function(a, b){return b-a})
            for (let i = 0; i < this.data.length; i++) {
                sortedLabel.push(this.label[temp.indexOf(this.data[i])])
            }
            this.label = sortedLabel
        },
        makeTab() {
            this.myChart = new Chart(this.ctx, {
                type: 'horizontalBar',
                data: {
                    labels: this.label,
                    datasets: [{
                        label: "nombre d'évènements",
                        data: this.data,
                        backgroundColor: '#ff5c4b',
                        borderColor: 'rgba(255, 99, 132, 0)',
                        borderWidth: 1
                    }]
                },
                options: {
                    aspectRatio: 1.33,
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                          gridLines : {
                            display : false
                          },
                          ticks: {
                              beginAtZero: true
                          }
                        }],
                      xAxes: [{
                        gridLines : {
                          display : false
                        },
                        scaleLabel: {
                          display: true,
                          labelString: this.labelName,
                          fontFamily: 'Montserrat'
                        },
                      }],
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>

.button {
    right:0;
    padding-top: 30px;

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #818181;
    }

    label {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #456268;
      cursor: pointer;

      &.active {
        color: #ff5c4b;
      }
    }

}

.chart-container {
  height: 75vh;
  width: 100vh;
}

</style>
