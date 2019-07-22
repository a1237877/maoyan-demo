<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="avatar">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336648072,555711710&fm=15&gp=0.jpg"
            alt
          />
        </div>
        <div class="name">Tastel</div>
        <div class="icon-top">
          <i class="icon"></i>
        </div>
        <div class="detail">
          <span>个人主页</span>
          <van-icon name="arrow" class="icon" />
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
            <van-icon name="arrow" class="icon" />
          </div>
          <div class="orderImg">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562656131325&di=b436cda1d25c211cfdbdf74fda62a925&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190527%2F772c04d412544f049ea3d9acfb8e2a1f.jpeg"
              alt
            />
          </div>
          <div class="order-desc">
            <div class="order-title">哥斯拉2：怪兽之王 2张</div>
            <div>美高国际影城（金鼎店）</div>
            <div>06月06日 15:55</div>
            <div>FM96.5厅 7排06座 7排07座</div>
          </div>
        </div>
        <div class="content">
          <h3 class="server">我的服务</h3>
          <div class="navBar">
            <div class="nav-list" v-for="(item,index) of lists" :key="index">
              <div class="nav-item">
                <img :src="item.img" alt class="item-img" />
                <span class="title">{{item.title}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="setting">
            <div class="ad">
              <span>设置</span>
              <van-icon name="arrow" class="icon" />
            </div>
            <div class="ad">
              <span>猜题押电影，福利领不停</span>
              <van-icon name="arrow" class="icon" />
            </div>
            <div class="foot"></div>
          </div>
        </div>
      </div>
    </div>
    <v-tabBar></v-tabBar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
export default {
  data() {
    return {
      lists: [
        { title: "折扣卡", img: "../../../static/zhekou.png" },
        { title: "优惠券", img: "../../../static/youhui.png" },
        { title: "猫享卡", img: "../../../static/qiapian.png" },
        { title: "银行活动", img: "../../../static/yinhang.png" },
        { title: "周边商城", img: "../../../static/shangcheng.png" },
        { title: "美团公益", img: "../../../static/gongyi.png" },
        { title: "最IN榜单", img: "../../../static/yanchu.png" },
        { title: "明星应援", img: "../../../static/aixin.png" },
        { title: "在线视频", img: "../../../static/shiping.png" },
        { title: "邀请返现", img: "../../../static/jinbi.png" },
        { title: "猫眼认证", img: "../../../static/renzheng.png" }
      ]
    };
  },
  components: {
    "v-tabBar": tabBar
  }
};
</script>

<style lang="stylus" scoped>
.header {
  margin: 0;
  padding: 0;
  height: 380px;
  color: #fff;
  background: linear-gradient(#e8323c 0%, #ED5454 45%, #ffffff 60%);

  .avatar {
    position: absolute;
    left: 18px;
    top: 30px;
    float: left;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .name {
    position: absolute;
    top: 45px;
    left: 90px;
    font-size: 24px;
    font-weight: 500;
  }

  .detail {
    width: 95px;
    height: 28px;
    background-color: #e76a6b;
    float: right;
    position: relative;
    margin-top: 40px;
    border-radius: 20px 0 0 20px;
    vertical-align: middle;

    span {
      vertical-align: middle;
      color: #fff;
      font-size: 16px;
      position: absolute;
      right: 18px;
      top: 2px;
    }

    .icon {
      position: absolute;
      right: 2px;
      top: 4px;
      float: right;
    }
  }

  .tabbar {
    position: absolute;
    // background-color blue
    top: 120px;
    display: flex;

    span {
      margin-left: 18px;
    }
  }

  .orders {
    position: absolute;
    top: 180px;
    left: 18px;
    // margin-left 30px
    width: 90%;
    height: 180px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(237, 84, 84, 0.4);
    z-index: 99;

    .myOrder {
      position: absolute;
      left: 20px;
      top: 20px;
      font-size: 18px;
      font-weight: 700;
      color: #000;
    }

    .allOrder {
      width: 90px;
      height: 28px;
      // background-color #e76a6b
      color: grey;
      float: right;
      position: relative;
      margin-top: 20px;

      .icon {
        vertical-align: middle;
        color: grey;
      }
    }

    .orderImg {
      position: absolute;
      left: 20px;
      top: 60px;

      img {
        width: 72px;
        height: 100px;
        border-radius: 3px;
      }
    }

    .order-desc {
      // background-color grey
      position: absolute;
      left: 100px;
      top: 60px;

      .order-title {
        font-size: 18px;
        font-weight: 700;
        color: #000;
        position: relative;
        float: left;
        margin-bottom: 5px;
      }

      div {
        display: inline-block;
        font-size: 14px;
        color: #606060;
        position: relative;
        float: left;
        line-height: 25px;
      }
    }
  }
}
.foot
    height 56px
.server
    color #333333
    margin 0 0 0 10px
.content {
  position: absolute;
  top: 400px;
  
  .navBar {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background: #fff;

    .nav-list {
      display: flex;
      width: 73px;
      height: 68px;

      .nav-item {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: 10px 7px;
        text-align center
      }

      .nav-item .item-img {
        // display inline-block
        width: 30px;
        height: 30px;
        margin 0 auto
      }

      .nav-item .title {
        margin-top 5px
        color: #333333;
        font-size: 14px;
      }
    }
  }
}

.footer {
  border-top 5px solid #f5f5f5  
  width: 100%;
  height: 50px;
  position: absolute;
  top: 640px;

  .setting {
    width: 100%;
    height: 38px;
    border-bottom: 1px solid #f5f5f5;

    .ad {
      height: 40px;
      vertical-align: middle;

      span {
        float: left;
        color: #606060;
        font-size: 16px;
        margin: 7px;
      }

      .icon {
        vertical-align: middle;
        color: grey;
        float: right;
        position: absolute;
        right: 5px;
        margin-top 7px
      }
    }
  }
}
</style>
