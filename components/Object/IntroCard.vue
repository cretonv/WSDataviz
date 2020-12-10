<template>
    <div class="card">
        <img v-if="posImg == 'top'" class="img" :src="img" :style="styleImg">
        <p class="title">{{title}}</p>
        <p class="type">{{type}}</p>
        <p class="type">{{date}}</p>
        <div class="datas" v-for="(data, index) in datas" v-bind:key="index">
            <p class="data">{{data.data}}</p>
            <p class="type">{{data.type}}</p>
        </div>
        <img v-if="posImg == 'bottom'" class="img" :src="img" :style="styleImg">
    </div>
</template>

<script>

export default {
    name: "IntroCard",
    props: {
        title: String,
        posImg: String,
        styleImg: String,
        img: String,
        type: String,
        date: String,
        datas: Array
    }
}
</script>

<style lang="scss" scoped>
    .card {

        .title {
            font-size:24px;
            font-weight: bold;
            color: #5F5F5F
        }

        .type {
            font-size: 13px;
            font-weight: bold;
            color: black;
            text-transform: uppercase;
        }

        .date {
            font-size: 13px;
            font-weight: Medium;
            color: black;
        }

        .datas {
            margin-top: 20px;

            .data {
                font-size: 18px;
                font-weight: bold;
                color: #FF3633;
            }

            .type {
                font-size: 13px;
                font-weight: Medium;
                color: black;
            }
        }

    }
</style>
