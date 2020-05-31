<template>
  <div class="footer">
    <div class="reg-log">
      <div class="button">
        <div @click="toLogin" class="login">登录</div>
        <div @click="toRegister" class="register">注册</div>
      </div>
      <div class="position">
        <span class="city-text">城市：</span>
        <span class="city-name">{{12222222222222222}}</span>
      </div>
    </div>
    <div class="footer-nav">
      <ul class="nav-content">
        <li>
          <router-link class="home" to="/home">首页</router-link>
        </li>
        <li>
          <router-link class="profile" to="">订单</router-link>
        </li>
        <li>
          <router-link class="download" to="">客户端</router-link>
        </li>
        <li>
          <router-link class="pc" to="">电脑版</router-link>
        </li>
        <li class="help-li">
          <router-link class="hele" to="/help">帮助</router-link>
        </li>
      </ul>
    </div>
    <div class="rec-link">
      <span class="friend-link">友情链接：</span>
      <router-link class="per-style" to="">
        <span>猫眼电影</span>
      </router-link>
    </div>
    <div class="end">
      <div class="line"></div>
      <div class="text">
        <span>©2020 美团网 </span>
        <router-link class="end-link" to="">京ICP证070791号</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    toLogin(){
      this.$router.push('/login')
    },
    toRegister(){
      this.$router.push('/register')
    },
  }
}
</script>
<style lang="scss" scoped>
.footer{
  padding: 0.2rem;
  color: #06c1ae;
  .reg-log{
    display: flex;
    justify-content: space-between;
    padding: .3rem 0;
    padding-top: 0;
    .button{
      .login,.register{
        display: inline-block;
        height: 0.54rem;
        width: 1.1rem;
        border: 1px solid #06c1ae;
        border-radius: 0.1rem;
        font-size: 0.26rem;
        //color: #222222;
        line-height: 0.54rem;
        //background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
        text-align: center;
        //margin-left: 0.2rem;
      }
      .register{
        margin-left: 0.2rem;
      }
    }
    .position{
      
      .city-text{
        font-size: 0.26rem;
        padding-right: 0.1rem;
        color: #666;
        vertical-align: middle;
      }
      .city-name{
        display: inline-block;
        margin-left: 0.2rem;
        width: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border: .02rem solid #06c1ae;
        //padding: 0 .3rem;
        background: 0;
        color: #06c1ae;
        text-align: center;
        border-radius: .06rem;
        font-size: .28rem;
        line-height: .6rem;
        vertical-align: middle;
      }
    }
  }
  .footer-nav{
    margin-top: .3rem;
    .nav-content{
      display: flex;
      justify-content: space-around;
      li{
        box-sizing: border-box;
        border-right: 1px solid #000;
        text-align: center;
        flex-grow: 0.2;
        a{
          color: #06c1ae;
          font-size: 0.22rem;
        }
      }
      .help-li{
        border-right: none;
      }
    }
  }
  .rec-link{
    width: 80%;
    margin: 0.3rem auto;
    //height: 1.32rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .friend-link{
      vertical-align: middle;
    }
    .per-style{
      color: #646464;
      //font-size: 0.22rem;
      //padding: 0 0.08rem;
      vertical-align: middle;
    }
  }
  .end{
    position: relative;
    margin-bottom: 1rem;
    .line{
      position: absolute;
      top: 50%;
      width: 100%;
      height: 1px;
      border-top: 1px solid  #999;
      z-index: 0;
    }
    .text{
      position: relative;
      width: 3.5rem;
      padding: 0 0.3rem;
      margin: 0 auto;
      color: #999;
      font-size: 0.22rem;
      background-color: #F0F0F0;
      z-index: 5;
      .end-link{
        color: #999;
      }
    }
  }
}
</style>