<template>
  <div class="recommend">
    <scroll class="recommend-content" v-bind:data="disclist"><!-- -->
    <div><!--滚动插件里面需要第一个子元素,让内部的元素撑开高度-->
      <div class="slider-wrapper">
        <slider>
          <div v-for="item in sliderRecommends" v-bind:key="item.id">
            <a href>
              <img v-bind:src="item.cover" alt />
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="item in disclist" v-bind:key="item.id" class="item">
            <div class="icon">
              <img width="60" height="60" v-bind:src="item.cover">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.category"></h2>
              <p class="desc" v-html="item.title"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading-container" v-show="!disclist.length">
      <loading></loading>
    </div>
    </scroll>
  </div>
</template>

<script>
  import axios from "axios";
  import Slider from "../base/slider";
  import Scroll from "../base/scroll";
  import loading from "../base/loading";

  export default {
    data() {
      return {
        sliderRecommend: [],
        disclist:[]//存储推荐列表的
      };
    },
    beforeCreate() {
      axios.get("http://localhost:9527/api/getRecommendData").then(data => {
        this.sliderRecommends = data.data.shift().categoryList;
        //eslint-disable-next-line no-console
        console.log(this.sliderRecommends);
        data.data.forEach((item)=>{
          item.categoryList.forEach((item1)=>{
            item1.category = item.category;//存储 具体的歌单名词
            this.disclist.push(item1);
          })
        })
      });
    },
    components: {
      Slider,
      Scroll,
      loading
    }
  };
</script>

<style  scoped lang="stylus">
  @import '../../common/stylus/variable.style';

  .recommend 
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;

    .recommond-content 
      height: 100%;
      overflow: hidden;

      .slider-wrapper
       position: relative
        width:100%
         overflow: hidden
    .recommend-list
      .list-title 
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;

      .item 
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon 
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        

        .text 
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        .name 
          max-resolution: bottom 10px;
          color: $color-text;
        

        .desc 
          color: $color-text-d;
  .loading-container 
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
</style>