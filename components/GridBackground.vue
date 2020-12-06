<template>
  <div>
    <div class="grid" :style="'grid-template-rows:'+rows+';grid-template-columns: '+columns+';'">
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "GridBackground",
    props: {
        rows: { 
            type: String,
            default: 'repeat(4, 1fr)',
            required: false
        },
        columns: { 
            type: String,
            default: '0.4fr repeat(6, 1fr) 0.4fr',
            required: false
        },
    },
    mounted() {
        console.log('imported')
    }
}

</script>

<style lang="scss">
  .grid {
    width: 100%;
    height: 100vh;
    display: grid;
    background-color: #495464;
    grid-column-gap: 1px;
    grid-row-gap: 1px; 
  }

  .grid-element {
    background-color: white;
    transition-duration: 0.7s;
  }
</style>
