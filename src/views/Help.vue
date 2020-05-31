<template>
  <div class="help-page">
    <Headbar><span>帮助</span></Headbar>
    <div class="howpay">
      <div class="title">手机上如何支付?</div>
      <div class="detail">
        <p>您可以通过支付宝的方式完成购买，确保交易安全。</p>
        <p>后续将开通财富通、网上银行的方式以方便购买。</p>
        <router-link to="">更多支付帮助»</router-link>
      </div>
    </div>
    <div class="refund">
      <div class="title">关于退款</div>
      <div class="detail">
        <ol>
          <li>2014年3月15日0点0分起，所有在线售卖的团购单均享受“随时退”和”过期退“服务（物流单、电影选座和酒店在线订除外）；已停售的团购单享受其原有的售后服务，若原来不支持退款则依然不支持。</li>
          <li>退至美团余额：审核通过后，会在1个工作日内（少量商品需要3个工作日）把款项退回到您的美团账户；余额可在下次团购时直接冲抵现金，也可随时提现，暂不收取手续费。</li>
          <li>原路退回：审核通过后，会在3-10个工作日内（少量商品需额外增加3个工作日）把款项退回到您的原支付方，通过网银或支付宝等第三方支付平台进行支付的费用将直接退到原账户，充值卡或返利金额将退回到美团余额。</li>
        </ol>
        <router-link to="">更多消费者保障服务»</router-link>
        <p>
          <span>如对产品功能有建议或意见，欢迎</span>
          <a href="">反馈给我们</a>
          <span>(当前版本2.3.18-SNAPSHOT)</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Headbar from '@/components/Headbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Headbar,
    Footer
  },
}
</script>
<style lang="scss" scoped>
  .help-page{
    .howpay,.refund{
      overflow: hidden;
      background-color: #F0EFED;
      .title{
        margin: .6rem .2rem .2rem;
        font-size: .34rem;
        font-weight: 400;
      }
      .detail{
        padding: .28rem .2rem;
        background-color: #fff;
        p{
          margin: .2rem 0;
        }
        a{
          color:  #FE8C00;
        }
      }
    }
    .refund{
      border-bottom: 1px solid #666;
      .detail{
        li{
          margin: 0.2rem 0;
        }
      }
    }
  }
</style>