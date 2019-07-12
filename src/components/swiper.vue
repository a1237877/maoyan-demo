 <template>

  <div class="swiper-container">

    <div class="swiper-wrapper">

      <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562912534893&di=f1a7098eb254d1b8ccd1c8c60c442ae4&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130801%2F11604791_100539834000_2.jpg"/></div>

      <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562912534893&di=f1a7098eb254d1b8ccd1c8c60c442ae4&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130801%2F11604791_100539834000_2.jpg"/></div>

      <div class="swiper-slide"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562912534893&di=f1a7098eb254d1b8ccd1c8c60c442ae4&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130801%2F11604791_100539834000_2.jpg"/></div>

    </div>

    <!-- 如果需要分页器 -->

    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->

    <!--<div class="swiper-button-prev"></div>-->

    <!--<div class="swiper-button-next"></div>-->

    <!-- 如果需要滚动条 -->

    <!-- <div class="swiper-scrollbar"></div> -->

  </div>

</template>

<script>

  import 'swiper/dist/css/swiper.css'

  import Swiper from 'swiper';

  export default {

    name: "Slider",

    mounted(){

      new Swiper ('.swiper-container', {
        autoplay:true,
        loop: true,

        // 如果需要分页器

        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮

        nextButton: '.swiper-button-next',

        prevButton: '.swiper-button-prev',

        // 如果需要滚动条

        scrollbar: '.swiper-scrollbar',

      })

    }

    }

</script>

 

<style scoped>

  .swiper-container {

    width: 84%;

    margin-right: 30px;
    margin-left: 30px;
    padding: 0;
    border-radius: 10px

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