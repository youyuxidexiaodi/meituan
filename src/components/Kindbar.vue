<template>
 <div class="kindbar">
    <div @click="goBack" class="return">
      <img src="../assets/login-icons/back.png" alt="">
    </div>
    <div class="name">
      <slot></slot>
    </div>
    <div class="search-mine">
      <img src="../assets/home-icons/profile.png" alt="">  
      <img src="../assets/home-icons/search2.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
   methods:{
    goBack(){
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
  .kindbar{
    height: 1.01rem;
    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
    .return{
      position: absolute;
      top: 0;
      left: 0;
      height: 1rem;
      width: .45rem;
      line-height: 1rem;
      padding: 0 .3rem;
       img{
        width: 0.2rem;
        height: 0.36rem;
        margin-top: 0.32rem;
      }
    }
    .name{
      height: 1.01rem;
      text-align: center;
      line-height: 1.01rem;
      font-size: 0.32rem;
    }
    .search-mine{
      position: absolute;
      top: 0;
      right: 0;
      height: 1rem;
      width: 1.5rem; 
      padding-right: 0.3rem;
      img{
        width: 0.48rem;
        height: 0.48rem;
        //margin-top: 0.28rem;
        padding: 0.25rem 0.12rem;
      }
    }
  }
</style>