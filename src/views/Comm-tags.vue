<template>
  <div class="comm-tags">
    <div class="tags">
      <div class="per">味道赞 {{13}}</div>
      <div class="per">味道赞 {{13}}</div>
      <div class="per">味道赞 {{13}}</div>
      <div class="per">味道赞 {{13}}</div>
      <div class="per">味道赞 {{13}}</div>
      <div class="per">味道赞 {{13}}</div>
    </div>
    <CommList/>
    <CommList/>
    <div class="change-page">
      <span :class="['up',{'light':false}]">上一页</span>
      <span class="number">{{1}}</span>
      <span :class="['next',{'light':true}]">下一页</span>
    </div>
  </div>
</template>
<script>
import CommList from '@/components/Comm-list.vue'
export default {
  components:{
    CommList,
  }
}
</script>
<style lang="scss" scoped>
.comm-tags{
  .tags{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .38rem 0.2rem .3rem;
    //padding-bottom: .3rem;
    border-bottom: 1px solid #ddd8ce;
    .per{
      //box-sizing: border-box;
      line-height: 1;
      border: 2px solid #FDB338;
      color: #FDB338;
      border-radius: 0.06rem;
      padding: .15rem .11rem;
      margin-bottom: .1rem;
    }
  }
  .change-page{
    padding: 0.16rem .2rem;
    border-bottom: .02rem solid #ddd8ce;
    .up,.next{
      display: inline-block;
      height: .6rem;
      line-height: .6rem;
      background: #dcdcdc;
      padding: 0 .32rem;
      font-size: .28rem;
      color: #999;
      border-radius: .06rem;
    }
    .number{
       padding: 0 .28rem;
    }
    .light{
      color: #FE8C00;
      border: .02rem solid #FE8C00;
      background: rgba(255,150,0,.04);
    }
  }
}
</style>
