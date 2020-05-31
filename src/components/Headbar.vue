<template>
 <div class="headbar">
    <div @click="goBack" class="return">
      <img src="../assets/login-icons/back.png" alt="">
    </div>
    <div class="name">
      <slot></slot>
    </div>
    <div class="menue-list">
      <img @click="navshow" src="../assets/login-icons/list.png" alt="" > 
      <div :class="['nav-list',{'show':flag}]">
        <ul>
          <li class="style">
            <router-link class="link" to="/home">
              <img src="../assets/home-icons/home.png" alt="">
              <span class="text">首页</span>
            </router-link>
            
          </li>
          <li class="style"> 
            <router-link class="link" to="/mylogin">
              <img src="../assets/home-icons/profile.png" alt="">
              <span class="text">我的</span>
            </router-link>
          </li>
          <li class="style">
            <router-link class="link" to="/search">
              <img src="../assets/home-icons/search2.png" alt="">
              <span class="text">搜索</span>
            </router-link>
          </li>
        </ul>
      </div>  
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      clearlistm: '',
      flag: true
    }
  },
  // props: ['clearlist'],
  // updated(){
  //   if(this.flag==false){
  //     this.flag = this.clearlist
  //   }
    
  // },
  methods:{
    goBack(){
      this.$router.back()
    },
    show(){
      if(!this.flag){
        this.flag = !this.flag
      }  
      //this.flag = !this.flag
    },
    navshow(e){
      this.flag = !this.flag
      // console.log(this.flag)
      // console.log(this.clearlist)
      e.stopPropagation();
      
    }
  }
}
</script>
<style lang="scss" scoped>
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
      .nav-list{
        position: absolute;
        height: 2.5rem;
        width: 2rem;
        top:  1rem;
        right: 0.04rem;
        background-color: #fff;
        border-radius: .1rem;
        box-shadow: 0 0.12rem 0.6rem 0 rgba(196,196,196,0.60);
        z-index: 10;
        &::before{
          content: "";
          background-image: url('../assets/login-icons/arrow.png');
          background-size: contain;
          display: block;
          width: 0.38rem;
          height: 0.12rem;
          position: absolute;
          top: -0.12rem;
          right: 0.2rem;
          box-shadow: 0 0 0 0 rgba(196,196,196,0.60);
          border-radius: 0.05rem;
        }
        .style{
          height: 0.83;
          line-height: 0.83rem;
          text-align: center;
          .link{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          img{
          margin-top: 0;
          vertical-align: middle;
          }
          .text{
            vertical-align: middle;
            padding-left: 0.2rem;
            color: #222;
          }
        }
        
      }
      .show{
        display: none;
      }
    }
  }
</style>