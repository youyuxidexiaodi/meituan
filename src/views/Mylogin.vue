<template>
  <div class="mylogin">
    <div class="header">
      <img src="../assets/login-icons/meituan.png" alt="">
    </div>
    <div class="login-box">
      <form action="">
        <div class="input-box-number">
          <router-link to="">
            <span class="area">中国 +86</span>
            <span class="icon"></span>
          </router-link>
          <input type="tel" placeholder="请输入手机号" maxlength="13">
        </div>
        <div v-if="flag" class="input-box-ensure">
          <input type="text" maxlength="6" placeholder="请输入手机验证码">
          <span class="get-number">获取验证码</span>
        </div>
        <div v-else class="use-password">
          <input :type="passwordType" placeholder="请输入密码" maxlength="16">
          <span @click="changeEyes" class="eyes">
            <img :src="require('../assets/login-icons/'+eyesStyle+'.png')" alt="">
          </span>
          <router-link class="forget-pass" to="">忘记密码</router-link>
        </div>
        <div class="login-button">登录</div>
      </form>
    </div>
    <div class="tip">{{tipText}}</div>
    <div class="login-way">
      <span @click="changeLoginWay">{{loginWay}}</span>
    </div>
    <div class="bottom-tip">
      <p>
        <span class="text">登录即代表您已经同意</span>
        <router-link to="/deal" class="deal">《美团点评用户服务协议》</router-link>
        <router-link to="/privacy" class="privacy">《隐私政策》</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      loginWay:'账号密码登录',
      flag:true,
      tipText:'未注册的手机号验证后自动创建美团账户',
      passwordType:'password',
      eyesStyle:'eyes-down',
      eyesFlag:true
    }
  },
  methods:{
    changeLoginWay(){
      this.flag = !this.flag
      if(this.flag){
        this.loginWay = '账号密码登录'
        this.tipText = '未注册的手机号验证后自动创建美团账户'
      }else{
        this.loginWay = '手机验证码登录'
        this.tipText = ''
      }
    },
    changeEyes(){
       this.eyesFlag = !this.eyesFlag
      if(this.eyesFlag){
        this.eyesStyle = 'eyes-down'
        this.passwordType = 'password'
      }else{
        this.eyesStyle = 'eyes-up'
        this.passwordType = 'text'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .mylogin{
    .header{
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      text-align: center;
      img{
        width: 1.55rem;
        height: 1.55rem;
      }
    }
    .login-box{
      padding: 0.3rem 0.65rem 0 0.65rem;
      .input-box-number{
        height: 0.7rem;
        line-height: 0.7rem;
        border-bottom: 1px solid #e5e5e5;
        a{
          color: #646464;
          font-size: 0.28rem;
          .icon{
            width: .3em;
            min-width: .3em;
            height: .3em;
            display: inline-block;
            border-right: 1px solid #646464;
            border-top: 1px solid #646464;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            margin-left: .2em;
            margin-right: .6em;
          }
        }
        input{
          padding: 0;
          font-family: PingFang-SC-Regular;
          letter-spacing: 0.002rem;
          height: 0.7rem;
          border: none;
          outline: none;
          caret-color: #fe8c00;
          // &::-webkit-input-placheholder{
          //   font-size: 0.24rem;
          // }
          &:focus{
            font-size: 0.3rem;
          }
        }
        
      }
      .input-box-ensure{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.8rem;
        line-height: 0.7rem;
        border-bottom: 1px solid #e5e5e5;
        margin-top: 0.5rem;
        input{
          height: 0.7rem;
          font-size:  0.28rem;
          border: none;
          outline: none;
          caret-color: #fe8c00;
          // &:focus{
          //   font-size: 0.4rem;
          // }
        }
        .get-number{
          display: inline-block;
          border-left: 1px solid rgba(0,0,0,0.1);
          line-height: normal;
          padding-left: 0.2rem;
          font-size: 0.2rem;
          margin-left: 0.1rem;
        }
      }
      .use-password{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.8rem;
        line-height: 0.7rem;
        border-bottom: 1px solid #e5e5e5;
        margin-top: 0.5rem;
        input{
          height: 0.7rem;
          font-size:  0.28rem;
          border: none;
          outline: none;
          width: 60%;
          caret-color: #fe8c00;
        }
        .eyes{
          padding: 0 0.2rem;
          img{
            width: 0.35rem;
          }
        }
        .forget-pass{
          //display: inline-block;
          border-left: 1px solid #e5e5e5;
          padding-left: 0.2rem;
          font-size: 0.24rem;
          height: 0.3rem;
          line-height: 0.3rem;
        }
      }
      .login-button{
        text-align: center;
        line-height: 0.86rem;
        margin: .28rem 0;
        font-size: 0.28rem;
        border-radius: 0.2rem;
        color: #333;
        background-image: linear-gradient(-133deg, #FFBD00 0%, #FFD000 100%);;
        opacity: 0.5;
      }
    }
    .tip{
      height: 0.4rem;
      margin-top: 0.2rem;
      text-align: center;
      font-size: 0.24rem;
      opacity: 0.5;
    }
    .login-way{
      text-align: center;
      margin-top: 0.2rem;
    }
    .bottom-tip{
      position: absolute;
      width: 100%;
      bottom: .8rem;
      font-size: 0.22rem;
      text-align: center;
      color: #999;
      .deal{
        color: #FE8C00;
      }
      .privacy{
        color: #FE8C00;
      }
    }
  }
</style>