<template>
  <div class="category">
    <div class="cat-self food">
      <router-link class="link" to="/kindMoudle">
        <div class="icon">
          <i class="iconfont icon-meishi"></i>
        </div>
        <div class="text">美食</div>
      </router-link>
    </div>
    <div class="cat-self movie">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-maoyandianying1"></i>
        </div>
        <div class="text">猫眼电影</div>
      </router-link>
    </div>
    <div class="cat-self hotel">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-jiudian"></i>
        </div>
        <div class="text">酒店</div>
      </router-link>
    </div>
    <div class="cat-self amusement">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-xiuxianyule"></i>
        </div>
        <div class="text">休闲娱乐</div>
      </router-link>
    </div>
    <div class="cat-self take-out">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-waimai"></i>
        </div>
        <div class="text">外卖</div>
      </router-link>
    </div>
    <div class="cat-self ktv">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-ktv"></i>
        </div>
        <div class="text">KTV</div>
      </router-link>
    </div>
    <div class="cat-self travel">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-zhoubianyou"></i>
        </div>
        <div class="text">周边游</div>
      </router-link>
    </div>
    <div class="cat-self beauty">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-liren"></i>
        </div>
        <div class="text">丽人</div>
      </router-link>
    </div>
    <div class="cat-self snack">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-xiaochikuaican"></i>
        </div>
        <div class="text">小吃快餐</div>
      </router-link>
    </div>
    <div class="cat-self more">
      <router-link class="link" to="">
        <div class="icon">
          <i class="iconfont icon-quanbufenlei"></i>
        </div>
        <div class="text">全部分类</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data(){
    return {
      kind:[
        {id:'food',color:'fd9d21'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .category{
    width: 100%;
    height: 3.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cat-self{
      width: 20%;
      height: 1.62rem;
      .link{
        display: inline-block;
        width: 100%;
        height: 1.62rem;
        .icon{
          width: .8rem;
          height: .8rem;
          border-radius: 50%;
          margin: 0.25rem auto 0;
          color: #fff;
          text-align: center;
          line-height: .8rem;
          .iconfont{
            font-size: 0.5rem;
          }
        }
        .text{
          text-align: center;
          font-size: 0.24rem;
          margin-top: 0.1rem;
        }
      }
    }
    .food{
      .link{
        .icon{
          background-color: #fd9d21;
        }
      }
    }
    .movie{
      .link{
        .icon{
          background-color: #fff;
          .iconfont{
            color: #ff6767;
            font-size: 0.8rem;
          }
        }
      }
    }
    .hotel{
      .link{
        .icon{
          background-color: #8a90fa;
        }
      }
    }
    .amusement{
      .link{
        .icon{
          background-color: #fed030;
        }
      }
    }
    .take-out{
      .link{
        .icon{
          background-color: #fd9d21;
        }
      }
    }
    .ktv{
      .link{
        .icon{
          background-color: #fed030;
        }
      }
    }
    .travel{
      .link{
        .icon{
          background-color: #4dc6ee;
        }
      }
    }
    .beauty{
      .link{
        .icon{
          background-color: #ff80c2;
        }
      }
    }
    .snack{
      .link{
        .icon{
          background-color: #fd9d21;
        }
      }
    }
    .more{
      .link{
        .icon{
          background-color: #00d3be;
        }
      }
    }
  }
</style>