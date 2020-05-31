<template>
  <div class="privacy">
    <div class="title">
      <p>美团点评隐私政策</p>
      <span class="download">下载</span>
    </div>
    <div class="edition">协议版本:【5.0】;发布/生效日期:【2019年08月15日】</div>
    <div class="welcome">欢迎您注册美团点评账号并使用美团点评的服务！</div>
    <div class="content">美团点评（以下或称“我们”）非常注重保护用户...<span>省略10000字</span></div>
  </div>
</template>
<style lang="scss" scoped>
.privacy{
  padding: .3rem .3rem .6rem;
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem 0 .48rem;
    margin-bottom: .48rem;
    p{
      font-size: .42rem;
      font-weight: bold;
      color: #222;
    }
    .download{
      background-color: #ffc300;
      color: #fff;
      padding: .1rem .2rem;
      font-size: .24rem;
    }
  }
  .edition{
    font-size: .24rem;
  }
  .welcome{
    font-size: .32rem;
    line-height: .44rem;
    padding: 0.16rem 0;
  }
  .content{
    margin-top: .6rem;
    font-size: .32rem;
    span{
      color: #f0f;
      font-size: .44rem;
      font-weight: bold;
    }
  }
}
</style>