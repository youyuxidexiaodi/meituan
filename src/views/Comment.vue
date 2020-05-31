<template>
  <div class="comment-page">
    <div class="headbar">
      <div @click="goBack" class="return">
        <img src="../assets/login-icons/back.png" alt="">
      </div>
      <div class="name">
        <span @click="allComment" :class="{'comm-all':true, 'light':flag}">评价 {{196}}</span>
        <span @click="picComment" :class="{'comm-pic':true, 'light':!flag}">晒图 {{35}}</span>
      </div>
      <div class="menue-list" @click="toHome">
        <img src="../assets/home-icons/home.png" alt="">  
      </div>
    </div>
    <!-- <router-view></router-view> -->
    <div class="grade">
      <div class="star-num">
        <span class="text">总体评价:</span>
        <img src="@/assets/otherpage/star-full.png" alt="">
        <img src="@/assets/otherpage/star-full.png" alt="">
        <img src="@/assets/otherpage/star-full.png" alt="">
        <img src="@/assets/otherpage/star-full.png" alt="">
        <img src="@/assets/otherpage/star-half.png" alt="">
        <span class="number">{{4.6}}</span>
      </div> 
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
//import Kindbar from '@/components/Kindbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  data(){
    return {
      flag:true,
    }
  },
  components:{
    Footer,
  },
  methods:{
    toHome(){
      this.$router.push('/home')
    },
    goBack(){
      this.$router.back()
    },
    allComment(){
      this.flag = true
      this.$router.push('/comment/comm-tags')
    },
    picComment(){
      this.flag = !this.flag
      this.$router.push('/comment/comm-pic')
    },
  }
}
</script>
<style lang="scss" scoped>
.comment-page{
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
      display: flex;
      height: 1.01rem;
      justify-content: center;
      align-items: center;
      .comm-all,.comm-pic{
        padding: 0.08rem 0.1rem;
        border-radius: 0.06rem;
        border: 0.02rem solid #fff;
        vertical-align: middle;
        color: #222;
        font-weight: lighter;
        font-size: 0.26rem;
      }
      .light{
        background-color: #fff;
      }
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
  .grade{
    padding: .38rem 0.2rem 0;
    .star-num{
      padding: 0 0 .3rem;
      .text{
        padding-right: .1rem;
        vertical-align: middle;
      }
      img{
        width: .262rem;
        height: .262rem;
        margin-right: .053rem;
        vertical-align: middle;
      }
      .number{
        color: #f90;
        padding-left: .2rem;
        vertical-align: middle;
      }
    }
  }
}
</style>