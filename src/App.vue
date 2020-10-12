<template>
  <div id="app">
      <Tabbar>
        <TabbarItem path="/home" activeColor="blue">
          <img slot="item-icon" src="./assets/img/tabbar/shouye.png" alt="">
          <img slot="item-icon1" src="./assets/img/tabbar/shouye1.png" alt="">
          <div slot="item-text">首页</div>
        </TabbarItem>
      <TabbarItem path="catgory" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/fenlei.png" alt="">
        <img slot="item-icon1" src="./assets/img/tabbar/fenlei1.png" alt="">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="cart" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/gouwuche.png" alt="">
        <img slot="item-icon1" src="./assets/img/tabbar/gouwuche1.png" alt="">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/wode.png" alt="">
        <img slot="item-icon1" src="./assets/img/tabbar/wode1.png" alt="">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tabbar from "./components/tabbar/Tabbar";
  import TabbarItem from "./components/tabbar/TabbarItem"
  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
@import "/assets/css/base.css";
</style>
