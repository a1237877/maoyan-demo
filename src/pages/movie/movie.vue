<template>
  <div>
    <div class="header">
      <div class="city">
        <v-cityMovie></v-cityMovie>
      </div>
      <div class="switch-hot">
        <router-link tag="div" to="/movie/intheater" active-class="active" class="hot-item">正在热映</router-link>
        <router-link tag="div" to="/movie/coming" active-class="active" class="hot-item">即将上映</router-link>
      </div>
      <div class="search">
        <img src="../../assets/sousuo1.png" alt="">
      </div>
    </div>
    <!-- <div class="page_hd">
      <div class="left">
        <img src="../../images/dianying.png" alt="">
        <div>
          <span class="office">实时票房</span>
        </div>
      </div>
      <div class="right">
          <div class="title">今日大盘</div>
          <div class="piaofang"><span class="acount">11560.7万</span></div>
          <div class="arrow"><span>></span></div>
      </div>
    </div> -->
    <router-view></router-view>
    <v-tabBar></v-tabBar>
  </div>
</template>

<script>

import city from "@/components/city/city";
import tabBar from '@/components/tabBar';
import cityMovie from '@/components/city/cityMovie';
export default {
  name: "city",
  components: {
    "v-city": city,
    "v-tabBar":tabBar,
    "v-cityMovie":cityMovie
  },
  mounted() {
     
  },
};
</script>

<style lang="stylus" scoped>

.header
  position fixed
  top 0
  width 100%
  background #dd403b
  display flex
  color #ffffff
  border-bottom 1px solid #d7d7d7
.movie
  flex 1
.switch-hot
  color #f1b3b1
  flex 1
  display flex 
  margin-left 35px
  margin-top 15px
  .hot-item
    text-align center
    flex 1
    margin-bottom 3px
    &.active
      color #ffffff
      // text-decoration underline
      border-bottom 2px solid #ffffff
 
.search
  width 100px
  img 
    position absolute
    right 13px
    width 20px
    height 20px
    top 17px
.page_hd
  display flex
  height 50px
  width 80%
  margin 20px auto
  background-color #f9f9f9
  border-radius 5px
  .left
    margin-left 10px
    display flex
    align-items center
    justify-content: center
    text-align center
    color #333333
    font-size 14px
    font-weight bold
    img
      vertical-align middle
      width 20px
      height 20px
    div
      margin-left 5px
  .right
    font-size 14px
    display flex
    align-items center
    justify-content: center
    text-align center
    margin-left 67px
    .title
      font-weight bold
    .piaofang
      margin-left 2px
      color #f03d37
    .arrow
      margin-left 2px
      color #b8b8b8
</style>
