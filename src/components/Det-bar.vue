<template>
  <div class="detail-bar">
    <div class="back" @click="goback">
      <img src="" alt="">
    </div>
    <div class="name">团购详情</div>
    <div class="collect-nav">
      <div @click="collect" class="collect">
        <i v-if="flag" class="iconfont icon-shoucang"></i>
        <i v-else class="iconfont icon-shoucang1"></i>
        <p class="text">{{collectText}}</p>
      </div>
      <div class="nav">
        <i class="iconfont icon-daohang"></i>
        <p class="text">导航</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      collectText: '收藏',
      flag: true
    }
  },
  methods:{
    goback(){
      this.$router.back()
    },
    collect(){
      this.flag = !this.flag
      if(this.flag){
        this.collectText = '收藏'
      }else{
        this.collectText = '取消收藏'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-bar{
  display: flex;
  height: 1rem;
  background-color: #06c1ae;
  border-bottom: 1px solid #21897d;
  .back{
    width: 10%;
    &::before{
      content: '';
      display: block;
      position: absolute;
      left: 0.3rem;
      top: 0.25rem;
      width: 0.4rem;
      height: 0.4rem;
      border-bottom: 0.04rem solid #fff;
      border-left: 0.04rem solid #fff;
      transform: scaleY(0.8) rotateZ(45deg);
    }
  }
  .name{
    width: 65%;
    line-height: 1rem;
    text-align: center;
    font-size: .36rem;
    font-weight: 400;
    color: #fff;
  }
  .collect-nav{
    width: 25%;
    height: 100%;
    display: flex;
    //justify-content: space-around;
    color: #fff;
    text-align: center;
    font-size: .2rem;
    .collect{
      width: 50%;
      line-height: .25rem;
      padding-top: 0.15rem;
      .iconfont{
        font-size: .5rem;
      }
      .icon-shoucang1{
        color: #fff;
        font-size: 0.4rem;
      }
      .text{
        margin-top: .06rem;
      }
    }
    .nav{
      width: 50%;
      padding-top: 0.13rem;
      .iconfont{
        font-size: 0.32rem;
      }
      .text{
        margin-top: .03rem;
      }
    }
  }
}
</style>