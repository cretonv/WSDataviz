<template>
  <div>
    <h1>Exemple de mon graph</h1>
    <div class="hello">
      Bonjour <span class="blue">toi</span>
    </div>
    <LinePart> </LinePart>
  </div>
</template>

<script>
  import LinePart from "../components/graph/LinePart";
  import * as d3 from 'd3';
  import * as d3fetch from 'd3-fetch';

  export default {
    component() {
      LinePart
    },
    data() {
      return {
        nameArray: [
          {
            "name": "John",
            "age": 30,
            "city": "New York"
          },
          {
            "name": "Jane",
            "age": 20,
            "city": "San Francisco"
          }
        ]
      }
    },
    css() {
      // fichier SCSS dans le projet
      '@/assets/scss/style.scss'
    },
    mounted() {
      let data = d3.json('data/tweets.json');
      let data2 = d3fetch.json('data/tweets.json');
      console.log('TRUC', data);
      console.log('TRUC', data2);
    }
  }

</script>

<style lang="scss">
  .hello {
    color: red;

    span {
      color: blue;
    }
  }
</style>
