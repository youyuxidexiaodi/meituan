<template>
  <div class="rec-download">
    <div class="translate">
      <div class="icon">
        <img src="../assets/home-icons/logo.png" alt="">
      </div>
      <div class="text">
        <p class="light">省钱利器 购物超划算</p>
        <p class="dark">吃喝玩乐尽在美团</p>
      </div>
    </div>
    <router-link class="downl-app" to="">去APP</router-link>
  </div>
</template>
<script>
export default {
  name: 'RecDownload',
}
</script>
<style lang="scss" scope>
  .rec-download{
    height: 1.04rem;
    background-color: #000;
    .translate{
      float: left;
      padding: 0.16rem 0 0 0.3rem;
      .icon{
        float: left;
        img{
          width: 0.72rem;
          height: 0.72rem;
        }
      }
      .text{
        float: left;
        padding-left: 0.2rem;
        .light{
          color: #fff;
        }
        .dark{
          font-size: 0.22rem;
          font-weight: 300;
          color: #fff;
        }
      }
    }
    .downl-app{
      float: right;
      margin-top: 0.22rem;
      margin-right: 0.29rem;
      width: 1.1rem;
      height: 0.6rem;
      background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
      border-radius: 0.14rem;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.28em;
    }
  }
</style>