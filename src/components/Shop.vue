<template>
  <div class="shop-box">
    <div class="per-shop">
      <router-link class="shop-link" to='/detailPage'>
        <div class="icon">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="data">
          <p class="name">海底捞</p>
          <p class="introduce">买一送一</p>
          <div class="price">
            <span class="privilege"><span>{{150}}</span>元</span>
            <span class="much">门市价:{{200}}元</span>
            <span class="amount">已售{{250}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shop-box{
  padding-left: 0.2rem;
  background-color: #fff;
  .per-shop{
    //height: 2.04rem;
    border-bottom: 1px solid #DDD8CE;
    padding-right: 0.2rem;
    .shop-link{
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0.2rem 0;
      .icon{
        width: 30%;
        // height: 1.64rem;
        img{
          width: 1.8rem;
          height: 1.64rem;
        }
      }
      .data{
        //margin-left: 0.2rem;
        padding: 0 .2rem;
        width: 70%;
        .name{
          font-size: .3rem;
          font-weight: 400;
          line-height: .5rem;
          color: #333;
        }
        .introduce{
          font-size: .24rem;
          color: #666;
          overflow-x: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price{
          margin-top: 0.4rem;
          .privilege{
            color: #F60;
            font-size: 0.24rem;
            span{
              font-size: .36rem;
            }
          }
          .much{
            font-size: 0.24rem;
            color: #666;
            margin-left: 0.1rem;
          }
          .amount{
            float: right;
            font-size: 0.24rem;
            color: #333;
          }
        }
      }
    }
  }
} 
</style>