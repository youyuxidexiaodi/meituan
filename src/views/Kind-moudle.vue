<template>
  <div class="kind-moudle">
    <Kindbar><span>分类</span></Kindbar>
    <RecDownload />
    <Nav></Nav>
    <Topic></Topic>
    <Topic></Topic>
    <Footer />
  </div>
</template>
<script>
import Kindbar from '@/components/Kindbar.vue'
import RecDownload from '@/components/Rec-download.vue'
import Nav from '@/components/Nav.vue'
import Topic from '@/components/Topic.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Kindbar,
    RecDownload,
    Nav,
    Topic,
    Footer
  }
}
</script>
<style lang="scss">
  
</style>