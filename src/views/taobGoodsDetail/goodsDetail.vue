<template>
	<div>
	    <head-top :head-title="headTitle" goBack="true"></head-top>
	    <div class="prostandard">
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
	        <div class="info">
	        	<p class="ellipsis-mult">{{productDetail.product_name}}</p>
	        	<p class="price">￥{{productDetail.price}}</p>
	        	<p class="market">价格<em class="del">￥{{productDetail.marketprice}}</em></p>
	        	<p class="other">
					<span>运费{{productDetail.freight}}</span><span class="mid">月销量 {{productDetail.paynum}}件</span><span>{{productDetail.city}}</span>
				</p>
	        </div>
	        <div class="list mt10 coupon" @click="showPopup(1)">
	        	<p>全天猫实物商品通用</p><i class="icon round grey">领取</i>
	        </div>
	         <div class="list"  @click="showPopup(2)">
	        	<p v-for="item in productDetail.promotion" class="ellipsis"><i class="round">{{item.name}}</i>{{item.info}}</p>
	        	<i class="icon iconfont icon-right"></i>
	        </div>
	        <div class="list mt10"  @click="showPopup(3)">请选择 颜色分类 尺码<i class="icon iconfont icon-right"></i></div>
	    </div> 
	    <div class="tabbox">
	    	<div class="tab mt10">
		    	<span @click="showAnnex(1)"><em v-bind:class="{'on':1==isAnnex}">商品介绍</em></span>
		    	<span @click="showAnnex(2)"><em v-bind:class="{'on':2==isAnnex}">商品附件</em></span>
		    </div> 
		    <div class="inner jies" v-if="1==isAnnex">
		    	 <img src="../../assets/img/07.jpg" alt="" width="100%">
		    	 <img src="../../assets/img/05.jpg" alt="" width="100%">
		    </div>
		    <div class="inner fuj" v-if="1!=isAnnex">
		    	 <img src="../../assets/img/08.jpg" alt="" width="100%">
		    	 <img src="../../assets/img/06.jpg" alt="" width="100%">
		    </div>
	    </div>
	    <div class="mod-toolbar">
	        <a class="btn" @click="collect"><i class="icon iconfont"  v-bind:class="{'icon-favor':1==1,'icon-favorfill':1!=1}"></i></a>
	        <a class="btn blue" @click="showPopup(3)">加入购物车</a>
	    </div>
	    <!-- 弹窗 -->
	    <div class="popup" v-if="!isMask">
	        <div class="inner">
	            <!-- 产品规格 -->
	            <div class="format">
	            	<div class="mod-form-item info">
			    	    <div class="item-unit">
			    	    	<div class="item-tit"><img class="img-out" src="../../assets/img/08.jpg" alt=""></div>
			    	    	<div class="item-con">
			    	    		<p>￥25</p>
			    	    		<p>库存 11963件</p>
			    	    		<p>请选择：尺码 颜色分类</p>
			    	    	</div>
			    	    </div>
			    	</div>
			    	<div class="con">
			    		<p class="tit">颜色分类</p>
			    		<div class="box">
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    			<span class="ui-btn">蔷薇红小版</span>
			    		</div>
			    		<div class=""></div>
			    	</div>
			    	<div class="mod-toolbar"><a class="btn blue" @click="onHide">完成</a></div>
	            </div>
	        	<!-- 优惠券 -->
		        <div class="list coupon" v-for="item in productDetail.coupon" v-if="flag == 2">
		        	<p>￥<em>{{item.price}}</em></p>
		        	<p>满{{item.minprice}}使用</p>
		        	<p>有效期{{item.limitdate}}</p>
		        	<span class="icon round">立即领取</span>
		        </div>
		        <!-- 促销 -->
		    	<div class="mod-form-item space promotion" v-if="flag == 2">
		    	    <div class="item-unit" v-for="item in productDetail.promotion">
		    	    	<div class="item-tit"><i class="round">{{item.name}}</i></div>
		    	    	<div class="item-con">
		    	    		<p>{{item.info}}</p>
		    	    		<p class="date">{{item.limitdate}}</p>
		    	    		<ul class="gifts">
		    	    			<li  v-for="items in item.gifts"><img src="../../assets/img/08.jpg" alt=""><p class="ellipsis-mult">{{items.name}}</p></li>
		    	    		</ul>
		    	    	</div>
		    	    </div>
		    	</div>
	        </div>
	    	
	    </div>
	    <div class="mask" v-if="isMask" @click="onHide"></div>
	</div>
</template>
<script type="text/javascript">
    import headTop from '../../components/header/head'
    import {getGoodsdetail} from '../../service/getData'
    import {swiper, swiperSlide } from 'vue-awesome-swiper'  
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
				productDetail:{},
				headTitle:'产品详情',
				isMask: false,
				flag:0, //1:优惠券 2.促销
				isAnnex:1 //是否显示商品附件
			}
		},
		components:{
			headTop,
			swiper, 
			swiperSlide
		},
		//定义这个sweiper对象  
        computed: {  
        	swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
		methods:{
			//打开1.优惠券 2.促销 3.产品规格弹窗
			showPopup(_index){
				this.flag = _index;
				this.isMask = true;
				document.body.className = 'no-scroll';
			},
			//关闭遮罩层
			onHide(){
				this.isMask = false;
				document.body.className = '';
			},
			//商品介绍切换
			showAnnex(_index){
				this.isAnnex = _index;
			},
			//收藏
			collect(){

			}
		},
		activated(){
			getGoodsdetail().then(res => {
                this.productDetail = res;
            }) 
		}
	}
</script>
<style lang="scss" scoped>
    @import '../../assets/css/mixin';
	.tab{
		.on{
			display: inline-block;
			height: 100%;
			border-bottom: 1px solid #3190e8;
			box-sizing: border-box;
		}
	}
	.round{
		margin-right: 2px;
		padding:0 1px;
		border:1px solid #f00;
		border-radius:2px;
		color: #f00;
		font-size: .65rem;
		&.grey{ 
			padding:0 4px;
			color:#999;
			font-size: .75rem;
			border-color:#ddd;
		}
	}
	.ellipsis-mult{
		max-height: 2.5rem;
		@include  ellipsis-mult;
	}
	//产品规格
	.prostandard{
		margin-top: 2rem;
		.info{
			padding: .5rem;
			background: #fff;
			.price{ 
				padding:.2rem 0;
				color:#f00;
			}
			.market{
				color: #999;
				em{ text-decoration:line-through}
			}
			.other{
				@include flex;
				span{ 
					display:inline-block;
					color: #999;
				}
				.mid{
					@include flexbox;
					text-align: center;
				}
			}
		}
	}
	.list{
		position: relative;
		padding:.5rem 3rem .6rem .5rem;
		background:#fff;
		.icon{
			position:absolute;
			top: 50%;
			right: .5rem;
			margin-top: -.6rem;
		}
		p{ 
			padding-top:.3rem;
			font-size: .65rem;
		}
		&.coupon{
			border-bottom:1px solid #eee;
			p{ padding-top:0;}
		}
	}
	//弹窗
	.popup{
		position:fixed;
		left: 0;
		right: 0;
		top: 35%;
		bottom:0;
		width: 100%;
		background:#fff;
		z-index: 102;
		/* -webkit-transform: translate3d(100%,0,0);
	    transform: translate3d(100%,0,0);
	    -webkit-transition: -webkit-transform .2s cubic-bezier(0,0,.25,1);
	    transition: transform .2s cubic-bezier(0,0,.25,1); */
	    .inner{
	    	height: 100%;
	    	overflow-y: scroll;
	    	overflow-x: hidden;
	    }
	    .mod-form-item{
	    	border:none;
	    	&.promotion{
	    		.item-unit{ padding:.5rem 0;}
		    	.item-tit{ width:2rem;line-height: 1.5;}
		    	.date{
		    		font-size: .65rem;
		    		color: #999;
		    	}
	    	}
	    	.item-con{ 
	    		line-height: 1.5;
	    		min-height: auto;
	    	}
	    	.item-unit{ overflow:initial;}
	    	.item-tit{ position:relative;}
	    }
	    .img-out{
    		width: 5rem;
    		height: 5rem;
    		position:absolute;
    		top: -25%;
    		border:1px solid #ddd;
    		border-radius:4px;
    		z-index: 9999;
    	}
    	.format{
    		padding-bottom:48px;
    		.mod-form-item{
    			position:absolute;
    			width: 100%;
    			height: 5rem;
    			border-bottom:1px solid #ddd;
    			.item-con{
    				padding-top: .2rem;
    			}
    		}
    		.con{
    			padding:5rem 1rem 0;
    			.tit{
    				padding:.5rem 0;
    			}
    			.ui-btn{
    				margin:0 .5rem .5rem 0;
    			}
    		}
    	}
	    .gifts{
	    	padding-top:1rem;
	    	img{
	    		width: 4rem;
	    		height: 4rem;
	    	}
	    	li{
	    		display: inline-block;
	    		width: 4rem;
	    		margin-right: .5rem;
	    	}
	    }
	    .coupon{
	    	padding-right:4rem;
	    	p{ 
	    		color:#f00;
	    		em{ font-size:1.2rem;}
	    	}
	    }
	}
</style>