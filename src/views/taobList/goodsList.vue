<template>
	<div>
	    <head-top :head-title="headTitle" goBack="true"></head-top>
	    <!-- tab筛选 -->
		<div class="mod-filterlist">
			<div class="tab hd">
				<span @click="openSel(1)">综合排序</span>
				<span @click="openSel(2)">销量优先</span>
				<span @click="openSel(3)">筛选</span>
				<span class="iconlist" @click="openSel(4)"><i class="icon iconfont" v-bind:class="showIcon"></i></span>
			</div>
			<div class="bd zongh" v-if="showSel == 1">
				<ul class="list" @click="sortList($event)">
					<li class="item" data="0" :class="{selected: sortByType == 0}">综合排序
					    <i v-if="sortByType == 0" class="icon iconfont icon-check"></i>
					</li>
					<li class="item" data="1":class="{selected: sortByType == 1}">价格从高到低
					    <i v-if="sortByType == 1" class="icon iconfont icon-check"></i>
					</li>
					<li class="item" data="2":class="{selected: sortByType == 2}">价格从低到高
					    <i v-if="sortByType == 2" class="icon iconfont icon-check"></i>
					</li>
					<li class="item" data="3":class="{selected: sortByType == 3}">信用排序
					    <i v-if="sortByType == 3" class="icon iconfont icon-check"></i>
					</li>
				</ul>
			</div>
			<div class="bd shaix" v-if="showSel == 3">
				<div class="list notitle">
					<div class="item">仅看促销商品
                       <label class="sim-check">
                            <input type="checkbox" value="1" class="chk" >
                            <span class="radio"></span>
                        </label>   
					</div>
					<div class="item">仅看有货商品
                       <label class="sim-check">
                            <input type="checkbox" value="1" class="chk" >
                            <span class="radio"></span>
                        </label>   
					</div>
				</div>
				<div class="list">
					<div class="item title">标签 <i  class="icon iconfont" v-bind:class="{'icon-unfold':isFold,'icon-fold':!isFold}" @click="showFold"></i></div>
					<div v-if="!isFold">
						<div class="item">新品上架
	                       <label class="sim-check">
	                            <input type="checkbox" value="1" class="chk" >
	                            <span class="radio"></span>
	                        </label>   
						</div>
						<div class="item">热卖推荐
	                       <label class="sim-check">
	                            <input type="checkbox" value="1" class="chk" >
	                            <span class="radio"></span>
	                        </label>   
						</div>
						<div class="item">清仓优惠
	                       <label class="sim-check">
	                            <input type="checkbox" value="1" class="chk" >
	                            <span class="radio"></span>
	                        </label>   
						</div>
					</div>
				</div>
				<div class="mod-toolbar">
					<a class="btn">重置</a>
					<a class="btn blue">完成</a>
				</div>
			</div>
		</div>
		<!-- 产品列表 -->
		<div class="prolist">
			<ul class="list" v-bind:class="showList">
				<router-link tag="li" class="list-item" to="taobGoodsDetail" v-for="item in productList">
					<div class="item-tit"><img class="pic" src="../../assets/img/06.jpg" alt="" width="100%" /></div>
					<div class="item-con" v-bind:class="{'aline':showIcon=='icon-apps'}">
						<p class="title" v-if="showIcon!='icon-card'">{{item.product_name}}</p>
						<p class="price">￥{{item.price}}</p>
						<p  v-if="showIcon=='icon-card'">{{item.paynum}}人付款</p>
						<p class="other" v-if="showIcon!='icon-card'">
							<span>运费{{item.freight}}</span><span class="mid">{{item.paynum}}人付款</span><span>{{item.city}}</span>
						</p>
					</div>
				</router-link>
			</ul>
		</div>
		<div class="mask" v-if="showSel==1 || showSel == 3" @click="onHide"></div>
		<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <span class="nodata" slot="no-more">没有更多了~</span>
            <span slot="no-results"></span>
        </infinite-loading>
	</div>
</template>
<script type="text/javascript">
    import headTop from '../../components/header/head'
    import InfiniteLoading  from 'vue-infinite-loading' 
    import {getGoodslist} from '../../service/getData'
	export default{
		data(){
			return{
				showSel:0, // 1:综合排序 2：销量优先 3.筛选 4.列表显示
				showIcon:'icon-list',
				showList:'card',
				pageSize:10,
				productList:[],
				sortByType:null,
				isFold: false,
				headTitle:'产品列表'
			}
		},
		components:{
			headTop,
            InfiniteLoading
		},
		methods:{
			//tab选项框 
			openSel(_index){
				this.showSel = _index;
				document.body.className = '';
				switch (_index)
	            {
	                case 1:
	                  document.body.className = 'no-scroll';
	                  break;
	                case 2:
	                  break;
	                case 3:
	                  document.body.className = 'no-scroll';
	                  break;
	                case 4:
	                  if (this.showIcon == 'icon-list') {
	                  	this.showIcon ='icon-card';
	                  	this.showList ='col-2';
	                  }else if(this.showIcon == 'icon-card'){
	                  	this.showIcon ='icon-pc';
	                  	this.showList =' ';
	                  }else if(this.showIcon == 'icon-pc'){
	                  	this.showIcon ='icon-apps';
	                  	this.showList ='card';
	                  }else{
	                  	this.showIcon ='icon-list';
	                  	this.showList ='card';
	                  }
	                  break;
	            }
			},
			onInfinite(){
              getGoodslist().then(res => {
                let list = res;
                this.productList = this.productList.concat(list);
                if (list.length < this.pageSize) {
                  this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                } else {
                  this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                }
              })
            },
            //重新获取数据，作用于排序和筛选
            listenChange(){

            },
            //点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染
			sortList(event){
				this.sortByType = event.target.getAttribute('data');
				this.onHide();
			},
			//关闭遮罩层
			onHide(){
				this.showSel = '';
				document.body.className = '';
			},
			//筛选弹窗 是否折叠选项
			showFold(){
				this.isFold = !this.isFold;
			}
		},
		activated(){
		},
		watch:{
			//监听父级传来的排序方式
			sortByType: function (value){
				this.listenChange();
			},
		}
	}
</script>
<style lang="scss" scoped>
    @import '../../assets/css/mixin';
    .mod-filterlist{
    	position: relative;
    	margin-top: 2rem;
    	background: #fff;
    	z-index: 101;
    	.list{
    		.item{ 
    			position:relative;
    			padding-left: 1rem;
     			height: 2rem;
            	line-height: 2rem;
    			border-bottom: 1px  solid #eee;
    			overflow: hidden;
    			&.selected{ 
    				color:#f50;
    				.iconfont{ color:#f50;}
    			}
    		}
    		.iconfont,.sim-check{
    			position:absolute;
    			right: .5rem;
    		}
    		.sim-check{
    			top: 50%;
    			margin-top: -11px;
    		}
    		&.notitle{
    			.item{ border-bottom:none;}
    		}
    		.title{
    			color: #999;
    		}
    	}
    	.bd{
    		position: absolute;
    		width: 100%;
		    left: 0;
		    max-height: 200px;
		    overflow-y: auto;
		    z-index: 9;
		    background:#fff;
		    .mod-toolbar{
		    	position: static;
                margin-top: 1rem;
		    }
    	}
    }
	.tab{
		span{
			border-right: 1px  solid #eee;
			&:last-child{ border-right:none;}
		}
		.iconlist{
			width: 3rem;
			@include flexbox(inherit);
			.iconfont{ font-size: 1.2rem;}
		}
	}
	.prolist{
		background:#fff;
		.list{
			.list-item{
				padding:.5rem;
				border-bottom:1px solid #ddd;
			}
			.pic{
				width: 100%;
				height: 7rem;
			}
			.item-tit{
				width: 100%;
			}
			.item-con{
				.title{
					margin-top:.5rem;
					max-height: 2.5rem;
					@include  ellipsis-mult;
				}
				.price{ 
					padding:.2rem 0;
					color:#f00;
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
				//标题 只有一行 超过省略号
				&.aline{
					overflow: hidden;
					.title{
						display: block;
						overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					}
				}
			}
			//一行两列 平均
			&.col-2{
				overflow: hidden;
				.list-item{
					float: left;
					width: 50%;
					padding:.5rem;
					border-right:1px  solid #ddd;
					box-sizing:border-box;
					&:nth-child(2n){ border-right:0 none;}
				}
			}
			//一行两列 左小右大
			&.card{
				.list-item{
					@include flex;
					border-bottom:1px solid #ddd;
				}
				.pic,.item-tit{
					width: 5rem;
					height: 5rem;
				}
				.item-con{
					padding-left:.5rem;
					.title{ margin-top: 0;}
				}
			}
		}
	}
</style>