<template>
  <div>
    <h1>BarChart</h1>
    <BarChart> </BarChart>
  </div>
</template>

<script>
  import BarChart from "../components/graph/BarChart";

  export default {
    component() {
      BarChart
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
