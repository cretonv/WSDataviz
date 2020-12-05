<template>
    <div>
        <p class="tabTitle" @click="test()">Nombre d’évènements et de victimes par aléa en France en 2019</p>
        <p @click="change('event')">Évènements</p>
        <p @click="change('death')">Victimes</p>
        <div class="chart-container" style="height:50vh; width:60%">
            <canvas id="tab">
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
            console.log(this.data, this.label)
            this.myChart.data.labels = this.label
            this.myChart.data.datasets.forEach((dataset) => {
                dataset.data = this.data;
            });
            this.myChart.update();
        },
        sorting() {
            const temp = []
            for (var i = 0; i < this.data.length; i++) {
                temp.push(this.data[i])
            }
            var sortedLabel = []
            this.data.sort(function(a, b){return b-a})
            console.log(temp, this.data)
            for (var i = 0; i < this.data.length; i++) {
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

<style scoped>

</style>
