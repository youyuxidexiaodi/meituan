<template>
  <div class="login">
    <Headbar><span>美团网</span></Headbar>
    <div class="main">
      <div class="login-way">
        <div @click="loginMei" class="mei-id style">美团账号登录</div>
        <div @click="loginPhone" class="phone-id style">手机验证登录</div>
      </div>
      <div class="linebox">
        <div :class="{'line':true,'linebgcolor':flag}"></div>
        <div :class="{'line':true,'linebgcolor':!flag}"></div>
      </div>
      <div v-if="flag" class="form-mei">
        <form action="">
          <div class="wrap">
            <div class="login-id-box">
              <input type="text" placeholder='账户名/手机号/Email'>
            </div>
            <div class="password-box">
              <input type="text" placeholder="请输入您的密码">
            </div>
          </div>
          <div class="login-button">登录</div>
        </form>
        <div class="link">
          <router-link class="to-register style" to="/register">立即注册</router-link>
          <router-link class="get-password style" to="">找回密码</router-link>
        </div>
      </div>
      <div v-else class="form-phone">
        <form action="">
          <div class="wrap">
            <div class="login-id-box">
              <input type="text" class="phone-number" placeholder='请输入手机号'>
              <span class="post-word">获取验证码</span>
            </div>
            <div class="password-box">
              <input type="text" placeholder="请输入短信验证码" disabled>
            </div>
          </div>
          <div class="login-button">登录</div>
        </form>
        <div class="link">
          <router-link class="to-register style" to="/register">立即注册</router-link>
          <router-link class="get-password style" to="">找回密码</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Headbar from '@/components/Headbar.vue'
export default {
  name:'Login',
  data(){
    return {
      flag: true,
    }
  },
  components:{
    Headbar
  },
  methods: {
    loginMei(){
      this.flag = true
    },
    loginPhone(){
      this.flag = false
    }
  },
}
</script>
<style lang="scss" scoped>
.login{
  background-color: #F0EFED;
  min-height: 12.8rem;
  .main{
    .login-way{
      display: flex;
      height: 0.8rem;
      width: 100%;
      flex-wrap: nowrap;
      justify-content: space-around;
      background-color: #fff;
      .style{
        //width: 1.5rem;
        line-height: 0.8rem;
        font-size: 0.25rem;
        padding: 0 0.5rem;
      }
    }
    .linebox{
      display: flex;
      height: 0.08rem;
      width: 100%;
      flex-wrap: nowrap;
      justify-content: space-around;
      .line{
        width: 2.5rem;
        height: 0.08rem;
        //line-height: 0.8rem;
        //font-size: 0.25rem;
        padding: 0 0.5rem;
        //background-color: #FFC300;
      }
      .linebgcolor{
        background: #FFC300 ;
      }
    }
    .form-mei{ 
      overflow: hidden;
      .wrap{
        border-bottom: 1px solid #DDD8CE;
        padding-left: 0.2rem;
        background-color: #fff;
      }
      .login-id-box,.password-box{
        padding: 0.12rem 0.2rem 0.12rem 0;
        border-bottom: 1px solid #DDD8CE;
        input{
          width: 100%;
          text-indent: .1rem;
          //line-height: 1;
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
      
      .password-box{
        border-bottom: none;
      }
      .login-button{
        text-align: center;
        line-height: 0.86rem;
        margin: .28rem .2rem;
        font-size: 0.36rem;
        border-radius: 0.2rem;
        background: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
      }
      .link{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        .style{
          color: #FE8C00;
          padding: 0 0.2rem;
        }
      }
    }
    .form-phone{ 
      overflow: hidden;
      .wrap{
        border-bottom: 1px solid #DDD8CE;
        padding-left: 0.2rem;
        background-color: #fff;
      }
      .login-id-box,.password-box{
        padding: 0.12rem 0.2rem 0.12rem 0;
        border-bottom: 1px solid #DDD8CE;
        input{
          width: 100%;
          text-indent: .1rem;
          //line-height: 1;
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
      .login-id-box{
        display: flex;
        justify-content: space-between;
        .phone-number{
          width: 62%;
        }
        .post-word{
          display: inline-block;
          padding: 0 0.32rem;
          //margin-left: 0.5rem;
          background: #dcdcdc;
          line-height: 0.6rem;
          border-radius: 0.06rem;
        }
      }
      .password-box{
        border-bottom: none;
      }
      .login-button{
        text-align: center;
        line-height: 0.86rem;
        margin: .28rem .2rem;
        font-size: 0.36rem;
        border-radius: 0.2rem;
        color: #999;
        background-color: #dcdcdc;
        //background: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
      }
      .link{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        .style{
          color: #FE8C00;
          padding: 0 0.2rem;
        }
      }
    }
  }
}
  
</style>