<template>
  <div>
    <div class="grid" :style="'grid-template-rows:'+rows+';grid-template-columns: '+columns+';'">
      <div class="grid-element nav-numbers number"><span class="number-content"> 1 </span> <span class="menu-content"> CARTE <br> INTERACTIVE </span></div>
      <div class="grid-element nav-letters letter letter"> <span> A </span> </div>
      <div class="grid-element nav-letters letter letter"> <span> B </span> </div>
      <div class="grid-element nav-letters letter letter"> <span> C </span> </div>
      <div class="grid-element nav-letters letter letter"> <span> D </span> </div>
      <div class="grid-element nav-letters letter letter"> <span> E </span> </div>
      <div class="grid-element nav-letters letter letter"> <span> F </span> </div>
      <div class="grid-element nav-letters letter letter"> <span> G </span> </div>
      <div class="grid-element nav-numbers number"><span class="number-content"> 2 </span> <span class="menu-content"> CATASTROPHE <br> CLIMATIQUE </span></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element"></div>
      <div class="grid-element nav-numbers number"><span class="number-content"> 3 </span> <span class="menu-content"> RECHAUFFEMENT <br> CLIMATIQUE </span></div>
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
            default: '0.4fr repeat(6, 1fr) 0.6fr',
            required: false
        },
    }
}

</script>

<style lang="scss">
  .grid {
    width: 100%;
    height: 100vh;
    display: grid;
    background-color: #C8C8C8;
    grid-column-gap: 1px;
    grid-row-gap: 1px;

    .grid-element {
      background-color: white;
      transition-duration: 0.7s;
    }
  }
  .nav-letters {
    position: relative;
    background: white;

    span {
      position: absolute;
      top: 5px;
      left: 13px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: #C8C8C8;
    }
  }
  .nav-numbers {
    position: relative;
    background: white;
    cursor: pointer;
    z-index: 5;

    .number-content {
      position: absolute;
      bottom: 5px;
      left: 13px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: #C8C8C8;
      transform: rotate(-0.25turn);
    }
    .menu-content {
      position: absolute;
      bottom: 7px;
      left: 88%;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      color: #14213D;
      transform-origin: bottom left;
      transform: rotate(-0.25turn);
      cursor: pointer;
    }
  }
</style>
