<template>
  <div class="home">
    <Navbar />
    <Rec-download />
    <Category />
    <div class="divide"></div>
    <div class="guess-like">
      <div class="inside">
        <div class="title">猜你喜欢</div>
        <Shop />
        <Shop />
      </div>
      <div class="more-shop">
        <router-link class="shop-link" to="">
          <p>查看全部团购</p>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import RecDownload from '@/components/Rec-download.vue'
import Category from '@/components/Category.vue'
import Shop from '@/components/Shop.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    RecDownload,
    Category,
    Shop,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.home{
  .divide{
    height: 0.2rem;
    background-color: #F0EFED;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .guess-like{
    .inside{
      //padding-left: 0.2rem;
      border-bottom: 1px solid #DDD8CE;
      .title{
        font-size: .34rem;
        padding-top: 0.25rem;
        padding-bottom: .2rem;
        padding-left: 0.2rem;
        color: #333;
        border-bottom: 1px solid #DDD8CE;
      }
    }
    .more-shop{
      height: 0.8rem;
      border-bottom: 2px solid #DDD8CE;
      .shop-link{
        display: inline-block;
        width: 100%;
        height: 100%;
        p{
          position: relative;
          line-height: 0.8rem;
          text-indent: 2em;
          color: #FE8C00;
          font-size: 0.3rem;
        }
        p::after{
          content: '>';
          display: inline;
          font-size: 0.4rem;
          position: absolute;
          top: 0;
          right: 0.2rem;
        }
      }
    }
  }
}
  
  
</style>
