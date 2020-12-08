<template>
    <div style="display:flex;">
        <form class="button">
            <div>
                <input @click="change('event')" type="radio" id="dataType1" name="dataType" value="event" checked>
                <label @click="change('event')" for="dataType1">Évènements</label>
            </div>
            <div>
                <input @click="change('death')" type="radio" id="dataType2" name="dataType" value="death">
                <label @click="change('death')" for="dataType2">Victimes</label>
            </div>
        </form>
        <div class="chart-container">
            <canvas style="height: 50vh;" id="tab">
            </canvas>
        </div>
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
                data = await d3.csv(this.dataEventLocation);
                this.makeData(data, type)
                this.myChart.data.datasets.forEach((dataset) => {
                    dataset.label = "nombre d'évènements"
                })
            } else if (type == 'death') {
                data = await d3.csv(this.dataDeathLocation);
                this.makeData(data, type)
                this.myChart.data.datasets.forEach((dataset) => {
                    dataset.label = "nombre de morts par évènements"
                })
            } 
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
                        backgroundColor: '#D0E8F2',
                        borderColor: 'rgba(255, 99, 132, 0)',
                        borderWidth: 1
                    }]
                },
                options: {
                    aspectRatio: 2,
                    legend: {
                        display: true
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>

.button {
    width: 20%;
    right:0;
}

.chart-container {
    height: 50vh;
}

</style>
