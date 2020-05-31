<template>
  <div class="register" @click="clear">
    <Headbar ref="list"><span>注册账号</span></Headbar>
    <div class="schedule">
      <span class="input-ph">输入手机号</span>
      <span class="divide">></span>
      <span class="input-ens">输入验证码</span>
      <span class="divide">></span>
      <span class="set-pass">设置密码</span>
    </div>
    <div class="main-input-ph">
      <form action="">
        <div class="input-box">
          <input type="text" placeholder="请输入您的手机号">
        </div>
        <div class="term-box">
          <label for="agree">
            <input id="agree" type="checkbox" v-model="agree">
            <span class="text">我已阅读并同意</span>
            <span class="deal">
              <router-link to="">《美团网用户协议》</router-link>
            </span>
          </label>
        </div>
        <div class="submit">获取验证码</div>
      </form>
    </div>
  </div>
</template>
<script>
import Headbar from '@/components/Headbar.vue'
export default {
  data(){
    return {
      agree:false,
      // reFlag: false,
    }
  },
  methods:{
    clear(){
      this.$refs.list.show()
      // this.reFlag = true
    }
  },
  components:{
    Headbar
  },
}
</script>
<style lang="scss" scoped>
  .register{
    background-color: #F0EFED;
    height: 100%;
    .schedule{
      padding: 0.28rem 0.2rem;
      text-align: center;
      background-color: #fff;
      border-bottom: 1px solid #DDD8CE;
      margin-bottom: 0.2rem;
      span{
        padding: 0 0.1rem;
      }
    }
    .main-input-ph{
      .input-box{
        padding: 0.12rem 0.2rem;
        border-top: 1px solid #DDD8CE;
        border-bottom: 1px solid #DDD8CE;
        background: #fff;
        input{
          width: 100%;
          text-indent: .1rem;
          height: 0.6rem;
          font-size: .3rem;
          padding: 0;
          border-radius: .06rem;
          border: none;
          &:focus{
            outline: none;
            background-color: #F0EFED;
          }
        }
      }
      .term-box{
        padding: 0.1rem 0.2rem;
        #agree{
          position: relative;
          top: 0.16rem;
          width: .45rem;
          height: .45rem;
          border: .02rem solid #DDD8CE;
          border-radius: .06rem;
          outline: none;
          -webkit-appearance: none;
          &:checked{
            background-color: rgb(252, 234, 68);
          }
          &::before{
            content: "✓";
            position: absolute;
            top: -0.08rem;
            left: 0.06rem;
            font-size: .4rem;
            font-family: base_icon;
          }
        }
        .deal{
          a{
            color: #FE8C00;
          }
        }
      }
      .submit{
        text-align: center;
        line-height: 0.86rem;
        margin: .28rem .2rem;
        font-size: 0.36rem;
        border-radius: 0.2rem;
        color: #999;
        background-color: #dcdcdc;
      }
    }
  }
</style>