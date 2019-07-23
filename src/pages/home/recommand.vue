<template>
  <div>
    <div class="header">
      <v-swiper></v-swiper>
    </div>
    <div class="header_bt">
      <div class="title">
        <div class="intheater"><span class="intheater_now" :class="isIntheater ? 'active' : ''" @click="changeStyle">正在上映</span></div>
        <div class="divide">|</div>
        <div class="coming"><span class="isComing" :class="isComing ? 'active' :''" @click="changeStyle">即将上映</span></div>
      </div>
      <div class="all">
        <router-link to="/movie/intheater" class="all_item">全部47部</router-link>
        <div class="arrow">></div>
      </div>
    </div>
    <div class="swiper" v-if="isIntheater">
      <div class="page_intheater">
        <ul class="movie-intheater">
          <li v-for="(item,index) in movieList" :key="index">
            <router-link to="/">
              <div class="movie-container">
                <div class="movie-image">
                  <img :src="item.img" alt="">
                </div>
                <span class="movie-title">{{item.nm}}</span>
                <div class="movie-buy">购票</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="swiper_coming" v-else>
      <div class="page_coming">
        <ul class="movie_coming">
          <li v-for="(item,index) in coming" :key="index">
            <router-link to="/">
              <div class="movie-content">
                
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swiper from '@/components/swiper'
export default {
  data() {
    return {
      isIntheater:true,
      isComing:false,
      movieList:[],
      coming:[]
    }
  },
  components:{
    "v-swiper":swiper
  },
  methods: {
    changeStyle(){
      this.isIntheater = !this.isIntheater;
      this.isComing = !this.isComing
    }
  },
   mounted() {
    var that = this
     axios.get('https://www.easy-mock.com/mock/5ca466ee13e4cf68f04a4308/wzxhh').then((result)=> {
            // console.log(result.data.data);
            this.movieList = result.data.data.movieList
        })
    axios.get('https://www.easy-mock.com/mock/5ca466f013e4cf68f04a430a/maoyan-movie-recently').then((res)=>{
      this.coming = res.data.data.coming
    })
  },
}
</script>

<style lang="stylus" scoped>
.header
  margin-top 15px
.header_bt
  display flex
  margin-top 10px
  .title
    display flex
    .divide
      color #d8d8d8
      margin-left 13px
    .intheater,.coming
      margin-left 15px
      .intheater_now,.isComing
        color #747474
        font-size 16px
      .active
        color #333333
        font-size 16px
        font-weight bold
  .all
    display flex
    margin-left 110px
    .all_item
      color #747474
    .arrow
      margin-left 2px
.swiper
  margin-top 10px
  width 100%
  .page_intheater
    // width 100%
    // overflow-x scroll
    // white-space nowrap
    // box-sizing border-box
    // .image
    //   display inline-block
    .movie-intheater
      width 100%
      padding  5px 10px 
      overflow-x scroll
      white-space nowrap
      box-sizing border-box
      li
        display inline-block
        padding 5px
        .movie-image
          
          width 110px
          img 
            width 110px
            height 160px
            border-radius 5px
        .movie-title
          display block
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          color #333333
          font-weight bold
        .movie-buy
          color #ffffff
          text-align center
          background-color #ff4e48
          margin-top 10px
          height 25px
          width 50px
          border-radius 12px
          padding-top 5px
          font-size 14px
.movie-container
  width 110px
      
</style>
