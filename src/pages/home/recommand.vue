<template>
  <div>
    <div class="header">
      <v-swiper></v-swiper>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
export default {
  components:{
    "v-swiper":swiper
  }
}
</script>

<style lang="stylus" scoped>
.header
  margin-top 20px
</style>
