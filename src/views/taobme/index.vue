<template>
	<div>
	    <head-top :head-title="headTitle" goBack="true"></head-top>
	</div>
</template>
<script type="text/javascript">
    import headTop from '../../components/header/head'
    import InfiniteLoading  from 'vue-infinite-loading' 
    import {getGoodslist} from '../../service/getData'
	export default{
		data(){
			return{
			}
		},
		components:{
			headTop,
            InfiniteLoading
		},
		methods:{
		},
		activated(){
		},
		watch:{
		}
	}
</script>
<style lang="scss" scoped>
    @import '../../assets/css/mixin';
    
</style>