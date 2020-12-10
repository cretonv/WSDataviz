<template>
  <div class="content">
    <div class="title-part-1"> sources <span>&</span> </div>
    <div class="title-part-2">
      crédits
      <div class="title-baseline">travail étudiant</div>
    </div>
    <div class="cci-icon">
      <img src="/ressources/icon/cci.svg" alt="">
    </div>
    <div class="campus-icon">
      <img src="/ressources/icon/campus.png" alt="">
    </div>
    <div class="gobelins-icon">
      <img src="/ressources/icon/gobelins.svg" alt="">
    </div>
    <div class="datas-src">
      <span> Données : </span> <br>
      <a href="https://vincent-creton.fr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea sequi unde velit?</a><br>
      Aspernatur atque blanditiis corporis culpa doloremque dolores doloribus fugiat id in <br>
      iusto minima nemo nobis vero. Omnis <br>
    </div>
    <div class="photos-src">
      <span> Photos : </span> <br>
      <a href="https://vincent-creton.fr">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a><br>

    </div>
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
      props: {
        animateCredit: Boolean
      },
      computed: {
      },
      methods: {
        close() {
          this.$emit('close')
        }
      },
      watch: {
        animateCredit: () => {
          console.log('BILLYYYYY')
          document.querySelector('.title-part-1').classList.add('animated')
          document.querySelector('.title-part-2').classList.add('animated')
        }
      }
    }
</script>

<style lang="scss" scoped>
    .content {
      background-color: rgba(79,87,109,0.96);
      position: relative;
      overflow: hidden;

      .title-part-1 {
        position: absolute;
        left: 26vh;
        bottom: -4vh;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 20vh;
        line-height: 176px;
        color: #FFFFFF;
        transform: rotate(-90deg) translateX(-100%);
        transform-origin: bottom left;
        width: 104vh;
        transition: all 1.5s;
        transition-delay: 1.5s;

        span {
          color: #FF3633;
        }
      }
      .title-part-2 {
        position: absolute;
        left: 45vh;
        top: 0;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 20vh;
        line-height: 176px;
        color: #FFFFFF;
        transform: rotate(-90deg) translateX(-150%);
        transform-origin: bottom left;
        transition: all 1.5s;
        width: 104vh;
        transition-delay: 1.5s;

        .title-baseline {
          position: absolute;
          right: -1.5vh;
          bottom: -3vh;
          transform-origin: bottom left;
          width: 104vh;
          font-family: Montserrat;
          font-style: normal;
          font-weight: normal;
          font-size: 4vh;
          line-height: 29px;
          text-transform: uppercase;
          color: #C5C5C5;
        }
      }

      .cci-icon,
      .campus-icon,
      .gobelins-icon {
        height: 5vh;
        width: 14.5vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        img {
          width: 100%;
          height: auto;

        }
      }

      .cci-icon {
        bottom: 15px;
        right: calc(30px + 18vh);
      }
      .campus-icon {
        border-radius: 35px;
        overflow: hidden;
        background-color: #FFFFFF;
        right: calc(45px + 32.5vh);
        bottom: 22px;
        height: 3.3vh;

        img {
          transform: scale(0.85);
        }
      }
      .gobelins-icon {
        height: 5vh;
        width: 18vh;
        bottom: 6.8vh;
        right: 14px;
      }


      .nav{
        cursor: pointer;

        img{
          position: absolute;
          color: white;
          width: 22px;
          height: 22px;
          right: 25px;
          top: 25px;
          transition: all 0.5s;

          &:hover {
            transform: scale(1.1);
            transition: all 0.3s;
          }
        }
      }

      &.Credit.isOpen {
        .title-part-1 {
          transform: rotate(-90deg) translateX(0%);
          transition: all 1.5s;
          transition-delay: 0.2s;
        }
        .title-part-2 {
          transform: rotate(-90deg)translateX(-51%);
          transition: all 1.5s;
          transition-delay: 0.8s;
        }
        .datas-src {
          transform: translateX(0);
          transition: all 1s;
          transition-delay: 1.5s;
        }
        .photos-src {
          transform: translateX(0);
          transition: all 1s;
          transition-delay: 1.7s;
        }
      }

      .datas-src {
        font-family: Montserrat;
        font-style: normal;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        width: 50vw;
        position: absolute;
        left: 40vw;
        top: 15vh;
        transform: translateX(80vw);
        transition: all 1s;

        span {
          font-weight: 700;
        }
        a {
          text-decoration: none;
          color: #FFFFFF;
          transition: all 0.4s;

          &:hover {
            color: #ff5453;
            transition: all 0.4s;
          }
        }
      }
      .photos-src {
        font-family: Montserrat;
        font-style: normal;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        width: 50vw;
        position: absolute;
        left: 40vw;
        bottom: 30vh;
        transform: translateX(80vw);
        transition: all 1s;

        span {
          font-weight: 700;
        }
        a {
          text-decoration: none;
          color: #FFFFFF;
          transition: all 0.4s;

          &:hover {
            color: #ff5453;
            transition: all 0.4s;
          }
        }
      }

    }
</style>
