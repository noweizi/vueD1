<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <c-footer hide-Tabs="hideTabs"></c-footer>
    <div class="return" v-bind:style="{display:active}" @click="jumpTop"><i class="icon iconfont icon-top"></i></div>
  </div>
</template>
<script type="text/javascript">
  import CFooter from './components/c-footer'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        active: false
      }
    },
    components:{
      CFooter
    },
    computed:{
      ...mapState({
         route: state => state.route,
         path: state => state.route.path,
         hideTabs: state => state.hideTabs
      })
    },
    methods: {
      onScroll(el){
        let scrollH = document.body.scrollTop;
        //返回到顶部 是否显示
        if (scrollH > 300) {
          this.active = 'block';
        } else {
          this.active = 'none';
        }
      },
      jumpTop(){
        window.scrollTo(0,0); 
      },
    },
    mounted () {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll)
      })
    }
  }
</script>
<style lang="scss">
  @import './assets/css/common';
  @import './assets/font/iconfont.css';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
  .iconfont{ display: inline-block;}
</style>
