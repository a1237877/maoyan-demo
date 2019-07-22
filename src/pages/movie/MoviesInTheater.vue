<template>
  <div class="header2">
    <div class="page_hd">
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
    </div>
    <div class="content">
    <scroll :data="movieList" class="wrap_content">
      <div>
        <div class="movie" v-for="movie of movieList" :key="movie.id">
          <div class="avatar">
            <img v-lazy="movie.img" />
          </div>
          <div class="wrap scale-1px">
            <div class="desc">
                <div class="title">
                  <span>{{ movie.nm }}</span>
                  <span class="iconfont icon-shijue3dimax" v-if="movie.version">
              </span>
                </div>
                <div class="score">
                  <span class="suffix">观众评</span>
                  <span class="grade">{{ movie.sc }}</span>
                </div>
                <p class="actor">主演: {{ movie.star }}</p>
                <p class="show-info">{{ movie.showInfo }}</p>
            </div>
            <div class="btn">
              <a href="javascript" class="go">购票</a>
            </div>
          </div>   
        </div>
      </div>
    </scroll>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Scroll from '@/components/Scroll'
export default {
  data() {
    return {
      movieList:[]
    }
  },
  components:{
    "scroll":Scroll
  },
  
  mounted() {
    var that = this
     axios.get('https://www.easy-mock.com/mock/5ca466ee13e4cf68f04a4308/wzxhh').then((result)=> {
            console.log(result.data.data);
            this.movieList = result.data.data.movieList
        })
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins.styl'
.header2
  margin-top 70px
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

.content
    position: fixed
    width: 100%
    top: 130px
    bottom: 56px
    .wrap_content
      overflow: hidden
      height: 100%
      .date
        padding: 12px 15px 0;
        margin: 0;
        font-size: 14px;
        color: #333;
      .movie
        display: flex
        padding-left: 15px;
        padding-right: 15px;
        background-color: #fff;
        .avatar
          flex: 0 0 64px;
          height: 90px;
          margin-top: 12px;
          img
            width: 64px;
            height: 90px;
        .wrap
          flex: 1;
          margin-left: 12px
          position: relative;
          .desc
            width: 200px
            padding-top: 10px;
            padding-bottom: 6px;
            .title
              height: 24px;
              margin-bottom: 7px;
              line-height: 24px;
              overflow: hidden;
              .icon-shijue3dimax
                font-size:40px
                vertical-align: middle
                color: #3c9fe6;
            .score
              font-size: 13px;
              color: #666;
              .grade
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
            .actor
              font-size: 13px;
              color: #666;
              margin-top: 6px;
              line-height: 15px;
              no-wrap()
            .show-info
              margin-top: 6px;
              line-height: 15px;
              font-size: 13px;
              color: #666;
          .btn
            font-size: 12px;
            position: absolute;
            right: 10px;
            top: 0;
            bottom: 0;
            height: 27px;
            margin: auto;
            .go
              display:inline-block;
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color: #f03d37;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
              text-decoration: none;
            .ys
              display:inline-block;
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color: #3c9fe6;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
              text-decoration: none;  
</style>
