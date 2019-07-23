 <template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
       <div class="swiper-slide">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563794391176&di=dc4cf0dd6183fa35f9a6cbfd4f27e1a0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190628%2Fc85198ee26694472b43127c6ae0d132f.jpeg"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563794024844&di=4f6c819ac2f87219247c00e637e54b7f&imgtype=0&src=http%3A%2F%2F04imgmini.eastday.com%2Fmobile%2F20190722%2F20190722104512_db6509cf0755d222e5b0ef85f7171b67_1.jpeg"
        />
      </div>

      <div class="swiper-slide">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563794117138&di=e0bbc0be4634cad1908257d62a31c61a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F40%2Fw560h280%2F20190704%2Fb4f7-hzfekep9267483.jpg"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3752950876,649179507&fm=26&gp=0.jpg"
        />
      </div>

      <div class="swiper-slide">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563794182262&di=211227cdc5164e2739a0d8a78b461938&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190715%2F16fa5a3cec1d4d668a12cac3074b4be0.jpeg"
        />
      </div>
    </div>

    <!-- 如果需要分页器 -->

    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->

    <!-- <div class="swiper-button-prev"></div>

    <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->

    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import Swiper from "swiper";

export default {
  name: "Slider",

  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,

      // 如果需要分页器

      pagination: ".swiper-pagination",

      // 如果需要前进后退按钮

      nextButton: ".swiper-button-next",

      prevButton: ".swiper-button-prev",

      // 如果需要滚动条

      scrollbar: ".swiper-scrollbar"
    });
  }
};
</script>

 

<style scoped>
.swiper-container {
  width: 90%;
  margin-right: 20px;
  margin-left: 20px;
  padding: 0;
  border-radius: 10px;
}

.swiper-wrapper {
  height: 100px;
}

.swiper-slide img {
  max-width: 100%;
}

.swiper-slide {
  text-align: center;

  background: #fff;

  /* Center slide text vertically */

  display: -webkit-box;

  display: -ms-flexbox;

  display: -webkit-flex;

  display: flex;

  -webkit-box-pack: center;

  -ms-flex-pack: center;

  -webkit-justify-content: center;

  justify-content: center;

  -webkit-box-align: center;

  -ms-flex-align: center;

  -webkit-align-items: center;

  align-items: center;
}
</style>