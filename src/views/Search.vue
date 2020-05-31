<template>
  <div class="search-page">
    <div class="headbar">
      <div @click="goBack" class="return">
        <img src="../assets/login-icons/back.png" alt="">
      </div>
      <div class="name">
        <span>搜索</span>
      </div>
      <div class="menue-list" @click="toHome">
        <img src="../assets/home-icons/home.png" alt="">  
      </div>
    </div>
    <Rec-download/>
    <div class="search-box">
      <form action="">
        <div class="search-input">
          <span class="icon">
            <img src="../assets/home-icons/search.png" alt="">
          </span>
          <input class="input" type="text" placeholder="输入商家名、品类或商圈">
        </div> 
        <span class="button-box">
          <span class="button">搜索</span>
        </span>
      </form>
    </div>
    <div class="hot-list">
      <ul class="list-box">
        <li>
          <span class="text">周边热游</span>
        </li>
        <li>
          <span class="text">亚马逊环球美食百汇</span>
        </li>
        <li>
          <span class="text">古茗</span>
        </li>
        <li>
          <span class="text">肯德基</span>
        </li>
        <li>
          <span class="text">IU酒店</span>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>
<script>
import RecDownload from '@/components/Rec-download.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    RecDownload,
    Footer
  },
  methods:{
    goBack(){
      this.$router.back()
    },
    toHome(){
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss">
.search-page{
  background-color: #f0efed;
  min-height: 12.8rem;
  overflow: hidden;
  .headbar{
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
    .menue-list{
      position: absolute;
      top: 0;
      right: 0;
      height: 1rem;
      width: .45rem;
      //line-height: 1rem;
      padding: 0 .3rem;
      img{
        width: 0.48rem;
        height: 0.48rem;
        margin-top: 0.28rem;
      }
    }
  }
  .search-box{
    position: relative;
    height: .8rem;
    line-height: .8rem;
    padding: .2rem;
    form{
      display: flex;
      justify-content: space-between;
      .search-input{
        width: 80%;
        .icon{
          position: absolute;
          top: 0.3rem;
          left: 0.4rem;
          img{
            width: 0.4rem;
          }
        }
        .input{
          height: .8rem;
          width: 100%;
          box-sizing: border-box;
          border-radius: .06rem;
          border: 1px solid #dcdcdc;
          outline: none;
          text-indent: 2.5em;
          &:focus{
            border-color: #ffc300;
          }
        }
      }
      .button-box{
        display: inline-block;
        width: 20%;
        height: 0.8rem;
        text-align: center;
        box-sizing: border-box;
        padding-left: 0.1rem;
        .button{
          display: inline-block;
          width: 100%;
          //padding: 0 .32rem;
          background-color: #dcdcdc;
          border-radius: .06rem;
          color: #999;
        }
      }
    }
  }
  .hot-list{
    background-color: #fff;
    height: 3.6rem;
    border-bottom: 1px solid #DDD8CE;
    padding-top: 0.2rem;
    margin-bottom: .2rem;
    .list-box{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 25%;
        box-sizing: border-box;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
        text-align: center;
        padding-top: .3rem;
        padding-bottom: 0.04rem;
        border-bottom: 1px solid #ddd8ce;
        .text{
          display: inline-block;
          width: 100%;
          border-right: 1px solid #ddd8ce;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          //padding-right: 0.2rem;
        }
      }
      li:nth-child(1){
        color: #fdb338;
      }
    }
  }
}
</style>