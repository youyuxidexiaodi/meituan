<template>
  <div class="nav">
    <ul>
      <li class="topic">
        <span class="text">休闲娱乐</span>
        <span class="icon"></span>
      </li>
      <li class="city-all">
        <span class="text">全城</span>
        <span class="icon"></span>
      </li>
      <li class="sort">
        <span class="text">默认排序</span>
        <span class="icon"></span>
      </li>
      <li class="choose">
        <span class="text">筛选</span>
        <span class="icon"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .nav{
    border-bottom: 1px solid #c6c0b3;
    ul{
      display: flex;
      flex-wrap: nowrap;
      li{
        box-sizing: border-box;
        width: 25%;
        border-right: 1px solid #c6c0b3;
        line-height: 0.84rem;
        text-align: center;
        .icon{
          display: inline-block;
          border-top: .15rem solid #B7B7B7;
          border-left: .09rem solid transparent;
          border-right: .09rem solid transparent;
          border-bottom: 0;
          margin-left: 0.12rem;
        }
      }
      .choose{
        border-right: none;
      }
    }
  }
</style>