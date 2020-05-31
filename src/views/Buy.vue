<template>
  <div class="buy-page" @click="goback">
    <div class="headbar">
      <div class="back"></div>
      <div class="title">提交订单</div>
    </div>
    <div class="name">松枝记冰淇淋系列鸡蛋仔5选1</div>
    <div class="count">
      <div class="price style">
        <span class="text">单价：</span>
        <span class="number">{{13.9}}元</span>
      </div>
      <div class="amount style">
        <span class="text">数量：</span>
        <span class="change">
          <span class="minus">-</span>
          <input class="num" type="text" value="1">
          <span class="add">+</span>
        </span>
      </div>
      <div class="price-all style">
        <span class="text">总价:</span>
        <span class="number">{{13.9}}元</span>
      </div>
    </div>
    <div class="sub-button">
      <div class="button">提交订单</div>
    </div>
    <div class="tips">
      <span class="text">请登录后进行购买，去</span>
      <router-link class="link" to="/login"> 登录</router-link>
    </div>
    <DetFooter />
  </div>
</template>
<script>
import DetFooter from "@/components/Det-footer.vue"
export default {
  components:{
    DetFooter,
  },
  methods:{
    goback(){
      this.$router.back()
    },
  }
}
</script>
<style lang="scss" scoped>
.buy-page{
  background-color: #f0f0f0;
  min-height: 100vh;
  .headbar{
    position: relative;
    height: 1rem;
    background-color: #06c1ae;
    border-bottom: 1px solid #21897d;
    line-height: 1rem;
    //background-image: none;
    .back{
      position: absolute;
      width: 1rem;
      height: 1rem;
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
    .title{
      text-align: center;
      color: #fff;
      font-size: .36rem;
    }
  }
  .name{
    padding: 0.6rem 0.2rem 0.2rem;
    font-size: 0.34rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid #ddd8ce;
  }
  .count{
    background-color: #fff;
    font-size: .3rem;
    .style{
      display: flex;
      justify-content: space-between;
      height: 0.9rem;
      padding: 0 .2rem;
      border-bottom: 1px solid #ddd8ce;
      line-height: 0.9rem;
    }
    .change{
      .minus,.add{
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.5rem;
        background-color: #dcdcdc;
        text-align: center;
        border-radius: 0.06rem;
        vertical-align: middle;
        color: #999;
      }
      .num{
        box-sizing: border-box;
        vertical-align: middle;
        width: 1.2rem;
        height: .6rem;
        margin: 0 .1rem;
        outline: none;
        border-radius: .06rem;
        border: 0.02rem solid #ddd8ce;
        text-align: center;
        font-size: .3rem;
      }
    }
    .price-all{
      .number{
        color: #ff9712;
        font-weight: bold;
      }
    }
  }
  .sub-button{
    margin: .28rem .2rem;
    .button{
      height: .94rem;
      line-height: .94rem;
      font-size: .4rem;
      color: #999;
      border-radius: .06rem;
      text-align: center;
      background-color: #dcdcdc;
    }
  }
  .tips{
    padding: 0 .2rem;
    margin-bottom: 1.6rem;
    .link{
      color: #06c1ae;
    }
  }
}  
</style>