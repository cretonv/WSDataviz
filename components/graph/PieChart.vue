<template>
    <div>
        <div class="chart-container">
            <canvas id="pie-tab">
            </canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: "PieChart",
    props: {
        title: String,
        data: Array,
        label: Array,
        detaildata: Array,
        detaillabel: Array,
    },
    data() {
        return {
            dataLocation: 'data/natural-disasters-by-type.csv',
        }
    },
    computed: {
        ctx() {
            return document.getElementById('pie-tab').getContext('2d')
        }
    },
    async mounted() {
        this.makeTab()
    },
    methods: {
        getDetail(event, array){
            if (array[0] && this.myChart.options.circumference == Math.PI * 2 && this.detaildata[this.label[array[0]._index]].length >= 1) {
                console.log('get', this.detaillabel[this.label[array[0]._index]])
                this.myChart.options.circumference = Math.PI;
                this.myChart.data.datasets[0].data = this.detaildata[this.label[array[0]._index]]
                this.myChart.data.labels = this.detaillabel[this.label[array[0]._index]]
                this.myChart.update();
            } else {
                console.log('return')
                this.myChart.options.circumference = Math.PI * 2;
                this.myChart.data.datasets[0].data = this.data
                this.myChart.data.labels = this.label
                this.myChart.update();
            }
        },
        makeTab() {
            this.myChart = new Chart(this.ctx, {
                type: 'doughnut',
                data: {
                    labels: this.label,
                    datasets: [{
                        label: this.title,
                        data: this.data,
                        backgroundColor: [
                            '#CC1E1B',
                            '#FF3431',
                            '#FF7B79',
                            '#FF9796'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
                    onClick: (e, a) => this.getDetail(e, a),
                    circumference: Math.PI * 2,
                    rotation: 0,
                    scales: {
                    xAxes: [{
                        gridLines: {
                        drawOnChartArea: false
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

.chart-container {

    #tab {
        height: 100%;
    }
}

</style>
