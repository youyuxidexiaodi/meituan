<template>
  <div class="topic">
    <div class="title">
      <router-link class="link" to="">
        <p class="name">
          <span class="text">朝歌K歌沐足</span>
          <span class="icon">团</span>
        </p>
        <div class="rank-address">
          <div class="rank">
            <img src="@/assets/otherpage/star-full.png" alt="">
            <img src="@/assets/otherpage/star-full.png" alt="">
            <img src="@/assets/otherpage/star-full.png" alt="">
            <img src="@/assets/otherpage/star-full.png" alt="">
            <img src="@/assets/otherpage/star-half.png" alt="">
            <span class="rank-number">4.5</span>
          </div>
          <div class="address">
            <span class="distance">{{1.2}}km</span>
            <span class="location">广场附近</span>
          </div>
        </div>
      </router-link>
    </div>
    <Shop />
    <div class="more-shop">
      <router-link class="shop-link" to="">
        <span>查看其它{{3}}条团购</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import Shop from '@/components/Shop.vue'
export default {
  components:{
    Shop,
  }
}
</script>
<style lang="scss" scoped>
.topic{
  background-color: #F0EFED;
  padding-bottom: 0.2rem;
  .title{
    border-bottom: 1px solid #c6c0b3;
    background-color: #fff;
    padding-right: .2rem;
    .link{
      display: block;
      padding: 0.2rem;
      .name{
        .text{
          font-size: .3rem;
          overflow-x: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icon{
          display: inline-block;
          background-color: #ff4d0f;
          color: #fff;
          font-size: .24rem;
          padding: .05rem;
          border-radius: .06rem;
          vertical-align: text-bottom;
          margin-left: 0.1rem;
        }
      }
      .rank-address{
        display: flex;
        justify-content: space-between;
        padding: 0.15rem 0 0 0;
        .rank{
          img{
            width: .262rem;
            height: .262rem;
            padding-right: .053rem;
            vertical-align: middle;
          }
          .rank-number{
            vertical-align: middle;
            margin-left: 0.2rem;
            color: #ff4d0f;
            font-weight: 400;
          }
        }
        .address{
          font-size: .24rem;
          color: #666;
          .location{
            padding-left: 0.1rem;
          }
        }
      }
    }
  }
  .more-shop{
    height: 0.8rem;
    border-bottom: 1px solid #DDD8CE;
    background-color: #fff;
    .shop-link{
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: center;
      span{
        position: relative;
        line-height: 0.8rem;
        padding-right: 0.45rem;
        color: #FE8C00;
        font-size: 0.3rem;
      }
      span::after{
        position: absolute;
        right: 0.05rem;
        top: 50%;
        display: block;
        content: '';
        width: .6em;
        height: .6em;
        border-left: .04rem solid #FE8C00;
        border-bottom: .04rem solid #FE8C00;
        transform: translateY(-80%) scaleX(0.8) rotateZ(-45deg);
      }
    }
  } 
}
 
</style>