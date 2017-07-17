<template>
  <div class="ui-mt48" v-show="!hideTabs">
    <div class="mod-toolbar" >
       <router-link to="taobHome">
         <span class="icon iconfont icon-home"></span>
         <p class="tit">首页</p>
       </router-link>
       <router-link to="taobList">
         <span class="icon iconfont icon-apps"></span>
         <p class="tit">列表</p>
       </router-link>
       <router-link to="home">
         <span class="icon iconfont icon-cart"></span>
         <p class="tit">购物车</p>
       </router-link>
       <router-link to="taobMe">
         <span class="icon iconfont icon-my"></span>
         <p class="tit">我的</p>
       </router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    props:['hideTabs']
  }
</script>