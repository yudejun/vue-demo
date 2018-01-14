<template>
  <div class="page" id="app">
    <div class="page__bd" style="height: 100%;">
      <div class="weui-tab">
        <!-- main content -->
        <router-view class="weui-tab__panel"></router-view>
        <!-- tabbar -->
        <div class="weui-tabbar">
            <a href="javascript:;" class="weui-tabbar__item" v-for="tab,index of tabLists">
                <span style="display: inline-block;position: relative;">
                    <img class="weui-tabbar__icon" :src="tab.img" alt="tab.text">
                    <!-- <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span> -->
                </span>
                <p class="weui-tabbar__label">{{tab.text}}</p>
            </a>
            <!-- <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                <img src="" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">已点</p>
            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                <span style="display: inline-block;position: relative;">
                    <img src="" alt="" class="weui-tabbar__icon">
                    <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                </span>
                <p class="weui-tabbar__label">发现</p>
            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                <img src="" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">我</p>
            </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeImg from './assets/images/icon_tabbar.png'
export default {
  name: 'app',
  data () {
    return {
      tabLists: [
        {
          text:'菜单',
          img: homeImg
        },
        {
          text:'已点',
          img: homeImg
        },
        {
          text:'菜单',
          img: homeImg
        },
        {
          text:'我',
          img: homeImg
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'assets/styles/app';
</style>
