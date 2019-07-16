<template>
  <div>
     <div class="container">
        <div class="header">
            <div class="avatar">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336648072,555711710&fm=15&gp=0.jpg" alt="">
            </div>
            <div class="name">Tastel</div>
            <div class="icon-top">
                <i class="icon"></i>
            </div>
            <div class="detail">
                <span>个人主页</span>
                <van-icon name="arrow" class="icon"/>
            </div>
            <div class="tabbar">
               <i class="icon"></i>
                <span>轨迹</span> 
                <span>电影9</span>
                <span>剧集0</span>
                <span>综艺0</span>
                <span>书籍0</span>
                <span>收藏0</span>
            </div>
            <div class="orders">
                <span class="myOrder">我的订单</span>
                <div class="allOrder">
                    <span>全部订单</span>
                    <van-icon name="arrow" class="icon"/>
                </div>
                <div class="orderImg">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562656131325&di=b436cda1d25c211cfdbdf74fda62a925&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190527%2F772c04d412544f049ea3d9acfb8e2a1f.jpeg" alt="">
                </div>
                <div class="order-desc">
                    <div class="order-title">哥斯拉2：怪兽之王 2张</div>
                    <div>美高国际影城（金鼎店）</div>
                    <div>06月06日 15:55</div>
                    <div>FM96.5厅 7排06座 7排07座</div>
                </div>
            </div>
            
            <div class="setting">
                <div class="ad">
                    <span>设置</span>
                    <van-icon name="arrow" class="icon"/>
                </div>
                <div class="ad">
                    <span>猜题押电影，福利领不停</span>
                    <van-icon name="arrow" class="icon"/>
                </div>
                <div>sdsd1</div>
                <div>sdsd1</div>
                <div>sdsd1</div>
                <div>sdsd1</div>
                <div>sdsd1</div>

            </div>
        </div>

    </div>
    <v-tabBar></v-tabBar>

  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
    data(){
        return{
            serve: {
               title: [
                '折扣卡', '优惠券', '猫享卡', '银行活动', '周边商城', '美团公益', '精彩演出', '明星应援', '在线视频', '邀请有礼'
                ],
                itemImg: [
                    "",
                    "http://img3.imgtn.bdimg.com/it/u=1711869608,3699499415&fm=26&gp=0.jpg",
                    "http://img1.imgtn.bdimg.com/it/u=2106130538,3834146637&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=1675225930,3882737045&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=3768890033,68770272&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1711869608,3699499415&fm=26&gp=0.jpg",
                    "http://img1.imgtn.bdimg.com/it/u=2106130538,3834146637&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=1675225930,3882737045&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=1675225930,3882737045&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=1675225930,3882737045&fm=26&gp=0.jpg",
                    "http://img5.imgtn.bdimg.com/it/u=3768890033,68770272&fm=26&gp=0.jpg",
                ] 
            }
                
        }
    },
    components:{
        "v-tabBar":tabBar

    }
}
</script>

<style lang="stylus" scoped>
.header
    margin 0
    padding 0
    height 400px
    color #fff
    background linear-gradient(#e8323c 0%, #ED5454 45%, #ffffff 60%)
    .avatar
        position absolute
        left 18px
        top 30px
        float left
        img
            width 60px
            height 60px
            border-radius 50%
    .name
        position absolute
        top 45px
        left 90px
        font-size 24px
        font-weight 500
    .detail
        width 90px
        height 28px
        background-color #e76a6b
        float right
        position relative
        margin-top 40px
        border-radius 20px 0 0 20px
        
        span
            text-align center
            // vertical-align middle
            color #fff
        .icon
            vertical-align middle
    .tabbar
        position absolute
        // background-color blue
        top 120px
        display flex
        span 
            margin-left 18px
    .orders
        position absolute
        top 180px
        left 18px
        // margin-left 30px
        width 90%
        height 180px
        background #ffffff
        border-radius 5px
        box-shadow:0 0 15px rgba(237,84,84,0.4);
        z-index 99
        .myOrder
            position absolute
            left 20px
            top 20px
            font-size 18px
            font-weight 700
            color #000
        .allOrder
            width 90px
            height 28px
            // background-color #e76a6b
            color grey
            float right
            position relative
            margin-top 20px
            .icon
                vertical-align middle
                color grey
        .orderImg
            position absolute
            left 20px
            top 60px
            img
                width 72px
                height 100px
                border-radius 3px
        .order-desc
            // background-color grey
            position absolute
            left 100px
            top 60px
            .order-title 
                font-size 18px
                font-weight 700
                color #000
                position relative
                float left 
                margin-bottom 5px

            div
                display inline-block
                font-size 14px
                color #606060
                position relative
                float left
                line-height 25px
                
    .serve
        position absolute
        top 365px
        width 100%
        height 280px
        border-bottom: 10px solid #f5f5f5;
        // background gray
        display block
        .myServe
            position absolute
            left 20px
            top 20px
            font-size 18px
            font-weight 700
            color #000
        .allServe
            position relative 
            margin-top 55px
            width 90%
            height 220px
            // background yellow
            // margin-left 20px

            .oneServer
                position absolute
                left 10px
                top 5px
                // background blue
                z-index 999
                width 100%
                height 100%
                display inline-block            
                // .iconImg
                //     width 20%
                //     height 30%
                //     display inline-block
                //     margin 0 8px
                //     float left
                //     img
                //         width 90%
                //         height 80%
                //         display inline-block
                //         // flex-direction column
                //         // flex-wrap wrap
                //         border 1px solid grey
                //         justify-content center
                // .title
                //     position relative
                //     margin-top 10px
                //     font-size 12px
                //     color #000
                //     display inline
                .van-grid-item
                    height 60px
    .setting
        width 100%
        height 38px
        // background pink
        // display inline-block
        position absolute
        top 655px
        bottom 50px
        border-bottom 1px solid #f5f5f5
        .ad
            // margin-bottom 20px
            height  40px
            vertical-align middle
            span
                float left
                color #606060
                font-size 16px
                margin 7px
                
            .icon
                vertical-align middle
                color grey
                float right
                position absolute
                right 5px
                

</style>
