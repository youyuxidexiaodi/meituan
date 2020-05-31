<template>
  <div class="footer">
    <div class="reg-log">
      <div @click="toLogin" class="login">登录</div>
      <div @click="toRegister" class="register">注册</div>
      <div class="position">
        <span class="city-text">城市：</span>
        <router-link class="position-link" to="">
          <img src="../assets/home-icons/position.png" alt="">
          <span>{{1222}}</span>
        </router-link>
      </div>
    </div>
    <div class="footer-nav">
      <ul class="nav-content">
        <li>
          <router-link class="home" to="/home">首页</router-link>
        </li>
        <li>
          <router-link class="profile" to="/Mylogin">我的</router-link>
        </li>
        <li>
          <router-link class="download" to="">美团下载</router-link>
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
      <span class="per-style">友情链接：</span>
      <router-link class="per-style" to="">猫眼电影</router-link>
      <router-link class="per-style" to="">大众点评</router-link>
      <router-link class="per-style" to="">美团旅行</router-link>
      <router-link class="per-style" to="">榛果民宿</router-link>
      <router-link class="per-style" to="">大众点评下载</router-link>
      <router-link class="per-style" to="">美团收银官网</router-link>
      <router-link class="per-style" to="">美团点评餐饮学院</router-link>
      <router-link class="per-style" to="">快驴进货商家合作</router-link>
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
    }
  }
}
</script>
<style lang="scss" scoped>
  .footer{
    background-color: #fff;
    padding: 0.2rem;
    .reg-log{
      height: 0.84rem;
      margin: 0.3rem;
      .login,.register{
        float: left;
        height: 0.54rem;
        width: 1.1rem;
        border-radius: 0.1rem;
        font-size: 0.26rem;
        color: #222222;
        line-height: 0.54rem;
        background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
        text-align: center;
        margin-left: 0.2rem;
      }
      .position{
        float: right;
        margin-top: 0.16rem;
        .city-text{
          font-size: 0.26rem;
          color: #999;
          padding-right: 0.1rem;
        }
        .position-link{
          img{
            width: 0.24rem;
            height: 0.274rem;
          }
        }
      }
    }
    .footer-nav{
      .nav-content{
        //overflow: hidden;
        display: flex;
        justify-content: space-around;
        li{
          //float: left;
          box-sizing: border-box;
          //width: 20%;
          border-right: 1px solid #000;
          text-align: center;
          flex-grow: 0.2;
          a{
            color: #FE8C00;
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
      height: 1.32rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .per-style{
        color: #646464;
        font-size: 0.22rem;
        padding: 0 0.08rem;
      }
    }
    .end{
      position: relative;
      .line{
        position: absolute;
        top: 50%;
        width: 100%;
        height: 1px;
        border-top: 1px solid  #999;
        
      }
      .text{
        position: relative;
        width: 3.5rem;
        padding: 0 0.3rem;
        margin: 0 auto;
        color: #999;
        font-size: 0.22rem;
        background-color: #fff;
        z-index: 5;
        .end-link{
          color: #999;
        }
      }
    }
  }
</style>