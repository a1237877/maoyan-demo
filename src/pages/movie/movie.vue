<template>
  <div>
    <div class="header">
      <div class="city">
        <v-city></v-city>
      </div>
      <div class="switch-hot">
        <router-link tag="div" to="/movie/intheater" active-class="active" class="hot-item">正在热映</router-link>
        <router-link tag="div" to="/movie/coming" active-class="active" class="hot-item">即将上映</router-link>
      </div>
      <div class="search">
        <img src="../../assets/sousuo.png" alt="">
      </div>
    </div>
    <router-view />

    
      <van-tabbar route active-color="#e8323c">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/movie/intheater" icon="search">电影</van-tabbar-item>
      <van-tabbar-item replace to="/cinema" icon="coupon-o">影院</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  
  </div>
</template>

<script>
import city from "@/components/city/city";
export default {
  name: "city",
  components: {
    "v-city": city
  }
};
</script>

<style lang="stylus" scoped>

.header
  position fixed
  width 100%
  background #fafafa
  display flex
  color #666666
  border-bottom 1px solid #d7d7d7
.movie
  flex 1
.switch-hot
  flex 1
  display flex 
  margin-left 35px
  margin-top 15px
  .hot-item
    text-align center
    flex 1
    &.active
      color #f03d37
      // text-decoration underline
      border-bottom 2px solid red
 
.search
  width 100px
img 
  position absolute
  right 13px
  width 20px
  height 20px
  top 15px
</style>
