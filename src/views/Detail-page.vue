<template>
  <div class="detail-page">
    <Det-bar></Det-bar>
    <div class="download-app">
      <img src="@/assets/otherpage/download-app.png" alt="">
    </div>
    <div class="shop-pic">
      <img src="@/assets/otherpage/shop.jpg" alt="">
      <div class="intraduce">
        <p class="title">{{222222}}</p>
        <p class="text">{{1200000}}</p>
      </div>
    </div>
    <div class="sale">
      <div class="price">
        <span class="price-box">
          <span class="number">{{15.5}}</span>
          <span class="unit">元</span>
          <span class="normal-pri">门市价:{{17}}元</span>
        </span>
        <span @click="order" class="buy">立即抢购</span>
      </div>
      <div class="tips">
        <div class="per">
          <span class="icon">
          </span>
          <span class="text">支持随时退款</span>
        </div>
        <div class="per">
          <span class="icon"></span>
          <span class="text">支持过期自动退</span>
        </div>
        <div class="per">
          <span class="icon"></span>
          <span class="text">已售{{9527}}</span>
        </div>
      </div>
    </div>
    <div class="rank-box">
      <div class="rank" @click="toComment">
        <div class="star">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-half.png" alt="">
          <span class="grade">{{4.6}}</span>
        </div>
        <div class="eval-amount">{{166}}人评价</div>
      </div>
      <div class="tags">
        <div class="per">性价比高{{15}}</div>
        <div class="per">性价比高{{15}}</div>
        <div class="per">性价比高{{15}}</div>
        <div class="per">性价比高{{15}}</div>
        <div class="per">性价比高{{15}}</div>
        <div class="per">性价比高{{15}}</div>
      </div>
    </div>
    <div class="message">
      <div class="title">商家信息</div>
      <div class="address-box">
        <div class="address">
          <div class="name">松枝记</div>
          <div class="position">吉安县文山路庐陵商业大世界海澜之家左侧</div>
          <div class="icon-area">
            <span class="icon"></span>
            <span class="text">离我最近</span>
          </div>
        </div>
        <div class="phone">
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <div class="combo">
      <div class="title">套餐</div>
      <div class="category">
        <div class="topic">冰淇淋系列鸡蛋仔 5 选 1</div>
        <div class="list">
          <div class="per-item">
            <span class="item-name style">草莓</span>
            <span class="amount style">1 份</span>
            <span class="price style">16元</span>
          </div>
          <div class="per-item">
            <span class="item-name style">草莓</span>
            <span class="amount style">1 份</span>
            <span class="price style">16元</span>
          </div>
          <div class="per-item">
            <span class="item-name style">草莓</span>
            <span class="amount style">1 份</span>
            <span class="price style">16元</span>
          </div>
          <div class="per-item">
            <span class="item-name style">草莓</span>
            <span class="amount style">1 份</span>
            <span class="price style">16元</span>
          </div>
          <div class="per-item">
            <span class="item-name style">草莓</span>
            <span class="amount style">1 份</span>
            <span class="price style">16元</span>
          </div>
        </div>
      </div>
      <div class="tips">
        <div class="topic">备注</div>
        <div class="msg">
          <ul>
            <li>不可和美团代金券、店内优惠活动同享</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="more-content">
      <router-link class="link" to="">
        <span class="text">查看图文详情</span>
        <span class="icon"></span>
      </router-link>
    </div>
    <div class="information">
      <div class="title">购买须知</div>
      <div class="content">
        <div class="item">
          <div class="topic">有效期</div>
          <p class="text">2017.8.15 至 2020.8.31 23:59（周末、法定节假日通用）</p>
        </div>
        <div class="item">
          <div class="topic">使用时间</div>
          <p class="text">11:00-14:00,17:00-次日01:30</p>
        </div>
        <div class="item">
          <div class="topic">使用规则</div>
          <ul class="text">
            <li>无需预约，消费高峰期可能需要等位</li>
            <li>发票问题请询问商家</li>
            <li>套餐包含1份餐巾纸，如需增加，需到店另付3元/份</li>
            <li>发票问题请询问商家</li>
            <li>团购用户不可同时享受商家其他优惠</li>
            <li>酒水饮料等问题，请致电商家咨询，以商家反馈为准</li>
            <li>如部分菜品因时令或其他不可抗因素导致无法提供，商家会用等价菜品替换，具体事宜请与商家协商</li>
            <li>不可使用包间</li>
            <li>每桌最多使用1张美团券</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="comment">
      <div class="head">
        <div class="topic">评价</div>
        <div class="grade">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <img src="@/assets/detailpage/star-full.png" alt="">
          <span class="count">{{4.8}}</span>
        </div>
      </div>
      <CommList/>
      <div @click="toComment" class="more-comment">
        <router-link class="link" to="">
          <span class="text">查看全部{{176}}条评价</span>
          <span class="icon"></span>
        </router-link>
      </div>
    </div>
    <div class="rec-shop">
      <div class="head">[{{123}}]相关推荐</div>
      <div class="content">
        <div class="per-shop">
          <router-link class="link" to="/detailPage">
            <div class="icon"></div>
            <div class="text">
              <div class="shop-name">[天虹周边]特色四人套餐，提供免费WiFi</div>
              <div class="price-count">
                <span class="price">
                  <span class="privilege"><span class="big">{{150}}</span>元</span>
                  <span class="normal">门市价:{{230}}元</span>
                </span>
                <span class="amount">已售{{125}}</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="per-shop">
          <router-link class="link" to="">
            <div class="icon"></div>
            <div class="text">
              <div class="shop-name">[天虹周边]特色四人套餐，提供免费WiFi</div>
              <div class="price-count">
                <span class="price">
                  <span class="privilege"><span class="big">{{150}}</span>元</span>
                  <span class="normal">门市价:{{230}}元</span>
                </span>
                <span class="amount">已售{{125}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="advertisement">
      <div class="head">
        <span>看了本团购的用户还看了</span>
        <span>广告</span>
      </div>
      <div class="content">
        <div class="per-shop">
          <router-link class="shop-link" to='/detailPage'>
            <div class="icon">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="data">
              <p class="name">海底捞</p>
              <p class="introduce">买一送一</p>
              <div class="price">
                <span class="privilege"><span>¥{{150}}</span></span>
                <span class="amount">已售{{250}}</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="per-shop">
          <router-link class="shop-link" to='/detailPage'>
            <div class="icon">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="data">
              <p class="name">海底捞</p>
              <p class="introduce">买一送一</p>
              <div class="price">
                <span class="privilege"><span>¥{{150}}</span></span>
                <span class="amount">已售{{250}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="position">
      <span>当前位置：</span>
      <span>吉安团购 ></span>
      <span>渝味晓宇火锅</span>
    </div>
    <Det-footer></Det-footer>
  </div>
</template>
<script>
import DetBar from '@/components/Det-bar.vue'
import DetFooter from '@/components/Det-footer.vue'
import CommList from '@/components/Comm-list.vue'
export default {
  components:{
    DetBar,
    CommList,
    DetFooter
  },
  methods:{
    order(){
      this.$router.push('/order')
    },
    toComment(){
      this.$router.push('/comment')
    },
  }
}
</script>
<style lang="scss" scoped>
.detail-page{
  background-color: #f0f0f0;
  .download-app{
    height: 2.1rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .shop-pic{
    position: relative;
    height: 3.9rem;
    img{
      width: 100%;
      height: 100%;
    }
    .intraduce{
      position: absolute;
      left: 0.3rem;
      right: 0.3rem;
      bottom: 0.24rem;
      z-index: 1;
      text-shadow: 1px 1px 1px #000;
      color: #fff;
      .title{
        margin-bottom: 0.14rem;
        font-size: 0.38rem;
        line-height: 1.1;
      }
      .text{
        font-size: .28rem;
      }
    }
  }
  .sale{
    background-color: #fff; 
    .price{
      display: flex;
      padding: 0.28rem 0.2rem;
      justify-content: space-between;
      border-bottom: 1px solid #ddd8ce;
      .price-box{
        .number{
          font-size: 0.66rem;
          font-weight: bolder;
          color: #06c1ae;
        }
        .unit{
          color: #06c1ae;
        }
        .normal-pri{
          padding-left: 0.1rem;
          color: #999;
        }
      }
      .buy{
        border-radius: 0.06rem;
        height: .8rem;
        width: 2.6rem;
        background-color: #f90;
        line-height: .8rem;
        color: #fff;
        text-align: center;
        font-size: .4rem;
      }
    }
    .tips{
      display: flex;
      padding: 0.28rem 0.2rem;
      border-bottom: 1px solid #ddd8ce;
      flex-wrap: wrap;
      justify-content: space-between;
      .per{
        width: 50%;
        color: #6bbd00;
        line-height: 0.6rem;
        .icon{
          display: inline-block;
          width: 0.28rem;
          height: 0.28rem;
          background-image: url("../assets/detailpage/all.png");
          background-position: -0.34rem -1.26rem;
          background-size: 1.62rem 1.56rem;
          transform: scale(1.42, 1.42);
          margin-right: 0.16rem;
          margin-left: 0.1rem;
          vertical-align: middle;
        }
        .text{
          vertical-align: middle;
        }
      }
      .per:nth-child(2){
        .icon{
          background-position: -0.66rem -1.26rem;
        }
      }
      .per:nth-child(3){
        color: #999;
        .icon{
          background-position: -0.98rem -1.26rem;
        }
      }
    }
  }
  .rank-box{
    margin-top: 0.2rem;
    border-top: 1px solid #ddd8ce;
    border-bottom: 1px solid #ddd8ce;
    .rank{
      display: flex;
      border-bottom: 1px solid #ddd8ce;
      justify-content: space-between;
      background-color: #fff;
      padding: 0.28rem 0.2rem;
      .star{
        img{
          width: .32rem;
          height: .32rem;
          margin-right: 0.04rem;
          vertical-align: middle;
        }
        .grade{
          color: #fa952f;
          margin-left: .1rem;
          font-size: .28rem;
          vertical-align: middle;
        }
      }
      .eval-amount{
        position: relative;
        color: #999;
        padding-right: .3rem;
        &::after{
          position: absolute;
          right: 0.05rem;
          top: 50%;
          display: block;
          content: '';
          width: 0.6em;
          height: 0.6em;
          border-left: 0.04rem solid #999;
          border-bottom: 0.04rem solid #999;
          transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg);
        }
      }
    }
    .tags{
      display: flex;
      flex-wrap: wrap;
      padding: .28rem .2rem;
      background-color: #fff;
      .per{
        border: .02rem solid #FDB338;
        color: #FDB338;
        height: .62rem;
        padding: 0 .11rem;
        border-radius: 0.06rem;
        line-height: 0.62rem;
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
      }
    }
  }
  .message{
    margin-top: 0.2rem;
    background-color: #fff;
    border-top: 1px solid #ddd8ce;
    border-top: 1px solid #ddd8ce;
    .title{
      border-bottom: 1px solid #ddd8ce;
      font-size: 0.34rem;
      line-height: 1.5;
      padding: 0.22rem 0.2rem 0.14rem 0.2rem;
      color: #333;
    }
    .address-box{
      padding: .28rem .2rem;
      display: flex;
      justify-content: space-between;
      .address{
        width: 70%;
        padding-right: 0.3rem;
        line-height: 1.5;
        .name{
          font-size: 0.32rem;
          color: #000;
          font-weight: bold;
          
        }
        .position{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .phone{
        position: relative;
        width: 30%;
        border-left: 1px solid #ddd8ce;
        height: 1.2rem;
        .icon{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 0.38rem;
          height: 0.38rem;
          background-image: url('../assets/detailpage/all.png');
          background-repeat: no-repeat;
          background-size: 1.62rem 1.56rem;
          vertical-align: middle;
          background-position: -0.88rem -0.44rem;
        }
      }
    }
  }
  .combo{
    margin-top: 0.2rem;
    border-top: 1px solid #ddd8ce;
    //border-bottom: 1px solid #ddd8ce;
    background-color: #fff;
    .title{
      font-size: .34rem;
      border-bottom: 1px solid #ddd8ce;
      padding: 0.22rem 0.2rem 0.14rem 0.2rem;
      color: #333;
    }
    .category{
      .topic{
        background-color: #f8f9fa;
        padding: 0.1rem;
        font-size: 0.3rem;
        color: #000;
        text-align: center;
      }
      .list{
        border-top: 1px solid #ddd8ce;
        border-bottom: 1px solid #ddd8ce;
        padding-left: 0.2rem;
        .per-item{
          display: flex;
          justify-content: center;
          font-size: 0.3rem;
          text-align: center;
          border-bottom: 1px solid #ccc;
          .item-name{
            width: 45%;
            padding: 0.22rem 0.2rem 0.22rem 0;
          }
          .amount{
            width: 35%;
            padding: 0.22rem 0.2rem;
            border-left: 1px solid #ccc;
          }
          .price{
            width: 20%;
            padding: 0.22rem 0.2rem;
            border-left: 1px solid #ccc;
          }
        }
        .per-item:last-child{
          border-bottom: none;
        }
      }
    }
    .tips{
      .topic{
        background-color: #f8f9fa;
        padding: 0.1rem;
        font-size: 0.3rem;
        color: #000;
        text-align: center;
      }
      .msg{
        padding: 0.28rem 0.2rem;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        ul{
          list-style-type: disc;
          padding-left: 0.4rem;
          font-size: 0.3rem;
          font-weight: 400;
        }
      }
    }
  }
  .more-content{
    border-bottom: 1px solid #ddd8ce;
    height: .8rem;
    padding: 0 .2rem;
    background-color: #fff;
    .link{
      display: flex;
      color: #06c1ae;
      justify-content: space-between;
      line-height: .8rem;
      font-size: .3rem;
      .icon{
        width: 0.6em;
        height: 0.6em;
        border-left: 0.04rem solid #06c1ae;
        border-bottom: 0.04rem solid #06c1ae;
        transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg);
        margin-top: .38rem;
        margin-right: 0.2rem;
      }
    }
  }
  .information{
    margin-top: .2rem;
    border-top: 1px solid #ddd8ce;
    background-color: #fff;
    color: #333;
    .title{
      padding: .28rem .2rem;
      font-size: .34rem;
      border-bottom: 1px solid #ddd8ce;
    }
    .content{
      padding: .28rem .2rem;
      .item{
        margin-bottom: .26rem;
        .topic{
          color: #ff9900;
        }
        .text{
          padding-top: 0.2rem;
          padding-left: 0.16rem;
          font-size: 0.3rem;
          line-height: 1.5;
          li{
            margin-left: .4rem;
            list-style-type: disc;
          }
        }
      }
    }
  }
  .comment{
    margin-top: .2rem;
    border-top: 1px solid #ddd8ce;
    background-color: #fff;
    color: #333;
    .head{
      padding: 0.22rem 0.2rem 0.14rem 0.2rem;
      display: flex;
      justify-content: space-between;
      font-size: .34rem;
      border-bottom: .02rem solid #ddd8ce;
      .grade{
        img{
          width: .34rem;
          margin-right: 0.04rem;
          vertical-align: middle;
        }
        .count{
          color: #fa952f;
          padding-left: 0.2rem;
          vertical-align: middle;
        }
      }
    }
    .comm-list{
      padding-left: .2rem;
      border-bottom: 1px solid #ddd8ce;
      .per-user{
        border-top: 1px solid #ddd8ce;
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
    .more-comment{
      border-bottom: 1px solid #ddd8ce;
      height: .8rem;
      padding: 0 .2rem;
      background-color: #fff;
      .link{
        display: flex;
        color: #06c1ae;
        justify-content: space-between;
        line-height: .8rem;
        font-size: .3rem;
        .icon{
          width: 0.6em;
          height: 0.6em;
          border-left: 0.04rem solid #06c1ae;
          border-bottom: 0.04rem solid #06c1ae;
          transform: translateY(-50%) scaleY(0.7) rotateZ(-135deg);
          margin-top: .38rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
  .rec-shop{
    margin-top: .2rem;
    border-top: 1px solid #ddd8ce;
    background-color: #fff;
    .head{
      padding: 0.28rem 0.2rem;
      font-size: .34rem;
      color: #333;
      border-bottom: 1px solid #ddd8ce;
    }
    .content{
      padding-left: .2rem;
      .per-shop{
        border-bottom: 1px solid #ddd8ce;
        .link{
          position: relative;
          display: block;
          //width: 100%;
          height: 100%;
          padding: 0.28rem 0.2rem 0.28rem 0.2rem;
          color: #666;
          .icon{
            position: absolute;
            background-image: url('../assets/detailpage/all.png');
            background-position: -1.32rem -0.68rem;
            background-size: 1.62rem 1.56rem;
            width: 0.3rem;
            height: 0.3rem;
          }
          .text{
            padding-left: 0.45rem;
            .shop-name{
              line-height: 1.41;
              font-size: .3rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .price-count{
              display: flex;
              padding-right: .2rem;
              justify-content: space-between;
              .price{
                .privilege{
                   color: #06c1ae;
                  .big{
                    font-size: 0.38rem;
                  }
                }
                .normal{
                  font-size: .24rem;
                  margin-left: .2rem;
                }
              }
            }
          }
        }
      }
    }
  }
  .advertisement{
    margin-top: .2rem;
    border-top: 1px solid #ddd8ce;
    background-color: #fff;
    padding-left: .2rem;
    .head{
      display: flex;
      padding: 0.28rem 0.2rem 0.2rem 0;
      font-size: .34rem;
      color: #999;
      justify-content: space-between;
      border-bottom: 1px solid #ddd8ce;
    }
    .content{
      border-bottom: 1px solid #DDD8CE;
      .per-shop{
        border-bottom: 1px solid #DDD8CE;
        .shop-link{
          display: flex;
          padding: 0.21rem 0.4rem 0.21rem 0;
          .icon{
            width: 1.8rem;
            height: 1.64rem;
            img{
              width: 1.8rem;
              height: 1.64rem;
            }
          }
          .data{
            margin-left: 0.2rem;
            width: 4.8rem;
            height: 1.64rem;
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
                font-size: 0.36rem;
                color: #06c1ae;
                span{
                  font-size: .36rem;
                }
              }
              .amount{
                float: right;
                //padding-right: 0.2rem;
                font-size: 0.24rem;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
  .position{
    padding: 0.3rem 0.2rem;
    color: #06c1ae;
    font-size: 0.24rem;
  }
}  
</style>
