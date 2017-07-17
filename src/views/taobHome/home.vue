<template>
	<div>
		<head-top signin-up='home'>
            <span slot='logo' class="head_logo"  @click="reload">淘</span>
            <div slot='search' class="head_search"  @click.stop="search()">
            	<span>寻找宝贝店铺</span>
            </div>
        </head-top>
        <swiper :options="swiperOption"  ref="mySwiper" >  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in swiperSlides" :key="item">
                <router-link to="taobList">
                    <img src="../../assets/img/01.jpg" alt="" width="100%">
                </router-link>    
            </swiper-slide>  
           
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
        <div class="nav-box">
        	<div class="nav-list">
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>天猫</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>聚划算</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>天猫国际</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>外卖</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>天猫超市</p>
	        	</div>
	        </div>
	        <div class="nav-list">
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>充值中心</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>飞猪旅行</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>领金币</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>拍卖</p>
	        	</div>
	        	<div class="item">
	        		<img class="nav-icon" src="../../assets/img/01.jpg" alt="" width="100%">
	        		<p>分类</p>
	        	</div>
	        </div>
        </div>
        <div class="headline" id="scrollBox">
            <div id="con1">
                <div>
                    <p v-for="item in newpost">
                         <span>淘宝头条</span>
                         <span class="scroll">
                           <em class="tag">最新</em><a class="text">{{item.title}}</a>
                         </span>   
                    </p>
                </div>
            </div>
        	<div id="con2">
             <div>
                <p v-for="item in newpost">
                     <span>淘宝头条</span>
                     <span class="scroll">
                       <em class="tag">最新</em><a class="text">{{item.title}}</a>
                     </span>   
                </p>
             </div>   
            </div>
        </div>
        <div class="list-r2c3 mt10">
            <div class="item"><img src="../../assets/img/01.jpg" alt=""></div>
            <div class="item">
                 <img class="img" src="../../assets/img/05.jpg" alt="">
                 <div class="items">
                     <div class="inner"><img src="../../assets/img/04.jpg" alt=""></div>
                     <div class="inner"><img src="../../assets/img/02.jpg" alt=""></div>
                 </div>
            </div>
        </div>
        <div class="mt10">
            <div class="list-r1c4">
                <div class="item"><img src="../../assets/img/05.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/02.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/03.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/01.jpg" alt=""></div>
            </div>
            <div class="list-r1c4">
                <div class="item"><img src="../../assets/img/01.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/03.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/04.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/02.jpg" alt=""></div>
            </div>
        </div>
        <div class="mt10">
            <div class="list-r1c2">
                <div class="item"><img src="../../assets/img/05.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/02.jpg" alt=""></div>
            </div>
            <div class="list-r1c4">
                <div class="item"><img src="../../assets/img/01.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/03.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/04.jpg" alt=""></div>
                <div class="item"><img src="../../assets/img/02.jpg" alt=""></div>
            </div>
        </div>
        <div class="mt10">
            <div class="list-r1c2 product" v-for="item in goodsList">
                <div class="item" >
                   <!-- 图片懒加载 -->
                   <!-- <img v-lazy="'../../assets/img/05.jpg'" alt="加载中..."> -->
                   <img src="../../assets/img/05.jpg" alt="">
                   <p class="text">[为你推荐]{{item.product_name}}</p>
                   <p class="price">{{item.price}}</p>
                </div>
            </div>
        </div>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <span class="nodata" slot="no-more">没有更多了~</span>
            <span slot="no-results"></span>
        </infinite-loading>
	</div>
</template>
<script type="text/javascript">
	import headTop from '../../components/header/head'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
    import InfiniteLoading  from 'vue-infinite-loading' 
    import {getGoodslist,getNewpost} from '../../service/getData'
	export default{
		data(){
			return{
				swiperOption: {  
	                pagination: '.swiper-pagination',  
	                slidesPerView: 'auto',  
	                centeredSlides: true,  
	                paginationClickable: true,  
	                spaceBetween: 30,  
	                onSlideChangeEnd: swiper => {  
	                    //这个位置放swiper的回调方法  
	                    this.page = swiper.realIndex+1;  
	                    this.index = swiper.realIndex;  
	                }
                },
                swiperSlides:[1,2,3,4,5],
                pageSize: 10,
                goodsList:[],
                newpost:[],
                iscroll: false,
                mytimer:''
			}
		},
		components:{
			headTop,
			swiper, 
			swiperSlide,
            InfiniteLoading
		},
		 //定义这个sweiper对象  
        computed: {  
        	swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
		methods:{
			search(){

			},
			reload(){

			},
            onInfinite(){
              getGoodslist().then(res => {
                let list = res;
                this.goodsList = this.goodsList.concat(list);
                if (list.length < this.pageSize) {
                  this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                } else {
                  this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                }
              })
            },
            scrollUp(){
                let area =document.getElementById('scrollBox');
                let con1 = document.getElementById('con1');
                if(area.scrollTop >= con1.offsetHeight){
                    area.scrollTop = 0;
                }else{
                    area.scrollTop ++
                }
            }
		},
		mounted(){
			// console.log(this.swiperSlides)
			 //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            // this.swiper.slideTo(0, 0, false);  
		},
        activated(){
            getNewpost().then(res => {
                this.newpost = res;
            })          
            var time = 50;
            this.mytimer=setInterval(this.scrollUp,time);
        },
        beforeRouteLeave(to, from, next){
            clearInterval(this.mytimer);
            next(vm => {})
        }
	}
</script>
<style lang="scss" scoped>
	@import '../../assets/css/mixin';
    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
    .head_search{
    	left: 1.5rem;
        @include ct;
        width: 90%;
        background-color: #215C92;
        border-radius: 4px;
        text-align: center;
        span{
        	@include sc(0.7rem, #fff);
        }
    }
    .swiper-container{
    	padding-top: 2.35rem;
    }
    .nav-box{
    	padding: .5rem .5rem 0;
    	background:#fff;
    }
    .nav-list{
    	@include flex;
    	padding-bottom:.5rem;
    	text-align: center;
    	.item{
    		@include flexbox;
    	}
    	.nav-icon{
    		width: 2rem;
            height: 2rem;
            border-radius:50%;
    	}
    }
    .headline{
    	padding: .5rem;
        height: .8rem;
    	background:#fff;
    	border-top:1px solid #eee;
        overflow: hidden;
        p{
            padding-bottom:.2rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    	.scroll{
    		padding-left: 1rem;
    	}
    	.tag{
    		display: inline-block;
    		height: 1rem;
    		margin-right: .4rem;
    		line-height: 1rem;
    		color: #f00;
    		border:1px solid #f00;
    		border-radius:4px;
    	}
    }
    #scrollBox #con1,#con2{width: 100%;float:left;}
    
    .list-r1c2,.list-r2c3,.list-r1c4{
        @include flex;
        overflow: hidden;
        img{ height:5rem;}
        .item{
            @include flexbox;
            img{ width: 100%;}
        }
    }
    .list-r2c3{
        .item{
            &:first-child{
                @include flexbox(inherit);
                width: 6rem;
                img{ height:10rem;}
            }
        }
        .items{
            @include flex;
            .inner{ @include flexbox;}
        }
    }
    .list-r1c4{
        .item{
            &:first-child{
                @include flexbox(2);
            }
        }
    }
    .product{
        float: left;
        width: 50%;
        p{ margin:.2rem .5rem;}
        .text{
            max-height: 38px;
            overflow: hidden;
        }
        .price{ color:#f00;}
        .item{
            margin-right:2px;
            margin-bottom:2px;
            overflow: hidden;
            background:#fff;
        }
    }
</style>