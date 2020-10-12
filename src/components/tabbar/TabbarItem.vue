<template>
  <div class="item-bar" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon1"></slot>
    </div>
    <div v-else>
      <slot name="item-icon" ></slot>
    </div>
    <div :style="istextStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
      }
    },
    methods:{
      itemClick(){
        return this.$router.replace(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      istextStyle(){
        return this.isActive ? {color:this.activeColor} : ''
      }
    }
  }
</script>

<style scoped>
  .item-bar {
    flex: 1;
    text-align: center;
    width: 49px;
    height: 49px;
    font-size: 14px;

  }

  .item-bar img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 2px;

  }
  .active{
    color: red;
  }
</style>
