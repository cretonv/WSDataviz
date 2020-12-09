<template>
  <div class="content">
    <div class="nav">
      <img @click="close()" src="/ressources/img/svg/close.svg">
    </div>
  </div>
</template>

<script>
    export default {
      name: "Credit",
      data() {
        return {
        }
      },
      computed: {
      },
      methods: {
        close() {
          this.$emit('close')
        }
      }
    }
</script>

<style lang="scss" scoped>
    .content {
        background-color: red;

        .nav{

          img{
            position: absolute;
            width: 50px;
            height: 50px;
            right: 50px;
            top: 50px;
          }
        }
    }
</style>
