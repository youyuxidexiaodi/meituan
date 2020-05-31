<template>
  <div class="comm-list">
    <div class="per-user">
      <div class="user-msg">
        <div class="icon">
          <img src="@/assets/detailpage/avatar.png" alt="">
        </div>
        <div class="id-time">
          <div class="user-id">匿名用户</div>
          <div class="grade-time">
            <img src="@/assets/detailpage/star-full.png" alt="" class="grade">
            <img src="@/assets/detailpage/star-full.png" alt="" class="grade">
            <img src="@/assets/detailpage/star-full.png" alt="" class="grade">
            <img src="@/assets/detailpage/star-full.png" alt="" class="grade">
            <img src="@/assets/detailpage/star-full.png" alt="" class="grade">
            <span class="time">2020-5-12</span>
          </div>
        </div>
      </div>
      <div class="comm-text">三个人 份量足  有机会的话 还会过来</div>
      <div class="comm-pic">
        <img src="@/assets/detailpage/comment.jpg" alt="">
      </div>
      <div class="shop-name">渝味晓宇火锅（沿江路店）</div>
      <div class="reply">
        <div class="reply-head">商家回复</div>
        <div class="content">感谢亲的支持！</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.comm-list{
  padding-left: .2rem;
  border-bottom: 1px solid #ddd8ce;
  .per-user{
    //border-top: 1px solid #ddd8ce;
    padding: 0.28rem 0.2rem 0.28rem 0;
    .user-msg{
      display: flex;
      .icon{
        width: .74rem;
        height: .74rem;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .id-time{
        margin-left: 0.08rem;
        font-size: .24rem;
        
        .user-id{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #666;

        }
        .grade-time{
          padding-top: 0.1rem;
          .grade{
            width: .28rem;
            margin-right: 0.04rem;
          }
          .time{
            padding-left: 0.2rem;
            font-size: .24rem;
            color: #999;
          }
        }
      }
    }
    .comm-text{
      font-size: 0.3rem;
      margin-top: 0.3rem;
    }
    .comm-pic{
      margin-top: 0.3rem;
      img{
        width: 1.1rem;
        margin-right: .1rem;
        margin-bottom: .1rem;
      }
    }
    .shop-name{
      padding: 0.2rem 0;
    }
    .reply{
      position: relative;
      background-color: #f7f7f6;
      padding: 0.2rem;
      &::before{
        content: '';
        display: block;
        position: absolute;
        width: 0.2rem;
        height: 0.2rem;
        top: -0.1rem;
        left: 0.5rem;
        background-color: #f7f7f6;
        transform: rotateZ(45deg);
      }
      .reply-head{
        border-bottom: 1px solid #e0ddd7;
        font-size: 0.24rem;
        padding-bottom: 0.2rem;
        color: #666;
      }
      .content{
        margin-top: 0.2rem;
        font-size: 0.3rem;
        color: #ed852c;
      }
    }
  }
}
</style>

