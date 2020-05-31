<template>
  <div class="navbar">
    <div class="address">
      <router-link class="addr-change" to="">
        <span class="text">吉安</span>
        <span class="icon">
          <img src="../assets/home-icons/address.png" alt="">
        </span>
      </router-link>
    </div>
    <div @click="toSearch" class="search">
      <router-link class="search-link" to="">
        <img src="../assets/home-icons/search.png" alt="">
        <span class="text">请输入商家名、品类或者商圈...</span>
      </router-link>
    </div>
    <div @click="toProfile" class="profile">
      <router-link class="profile-link" to="">
        <img src="../assets/home-icons/profile.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods:{
    toProfile(){
      this.$router.push('/mylogin')
    },
    toSearch(){
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped lang="scss">
.navbar{
  display: flex;
  justify-content: space-between;
  height: 1.01rem;
  background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
  .address{
    //float: left;
    //height: 100%;
    width: 20%;
    text-align: center;
    .addr-change{
      line-height: 1.01rem;
      .icon{
        img{
          width: 0.16rem;
          height: 0.09rem;
          margin-left: 0.1rem;
          vertical-align: middle;
        }
      }
    }
  }
  .search{
    //float: left;
    //height: 100%;
    width: 65%;
    line-height: 0.64rem;
    .search-link{
      display: block;
      margin-top: .2rem;
      opacity: 0.9;
      background: #FFFFFF;
      border-radius: 0.18rem;
      //width: 4.75rem;
      height: 0.64rem;
      color: #999999;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      img{
        width: 0.28rem;
        height: 0.28rem;
        padding: 0.15rem 0.13rem 0.16rem 0.27rem;
        vertical-align: middle;
      }
    }
  }
  .profile{
    //float: left;
    height: 100%;
    width: 15%;
    line-height: 1.01rem;
    .profile-link{
      display: inline-block;
      height: 100%;
      width: 0.94rem;
      text-align: center;
      img{
        position: relative;
        top: 0.14rem;
        width: 0.48rem;
        height: 0.48rem;
      }
    }
  }
}
</style>
