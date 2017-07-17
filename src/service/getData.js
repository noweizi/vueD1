import fetch from '../config/fetch'
import * as home from './tempdata/home'
import * as city from './tempdata/city'
import * as msite from './tempdata/msite'
import * as search from './tempdata/search'
import * as food from './tempdata/food'
import * as shop from './tempdata/shop'
import * as login from './tempdata/login'
import * as confirm from './tempdata/confirm'
import * as order from './tempdata/order'
import * as service from './tempdata/service'
import * as addDetail from './tempdata/addDetail'
import * as addresspart from './tempdata/address'
import * as vip from './tempdata/vip'
import * as hongbao from './tempdata/hongbao'
import * as taobGoodslist from './tempdata/taobGoodslist'
import * as taobGoodsdetail from './tempdata/taobGoodsdetail'

/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

//编译环境使用真实数据
if (process.env.NODE_ENV != 'development') {

	/**
	 * 获取首页默认地址
	 */

	var cityGuess = () => fetch('GET', '/v1/cities', {
		type: 'guess'
	});


	/**
	 * 获取首页热门城市
	 */

	var hotcity = () => fetch('GET', '/v1/cities', {
		type: 'hot'
	});


	/**
	 * 获取首页所有城市
	 */

	var groupcity = () => fetch('GET', '/v1/cities', {
		type: 'group'
	});


	/**
	 * 获取当前所在城市
	 */

	var currentcity = number => fetch('GET', '/v1/cities/' + number, {});

	/**
	 * 获取搜索地址
	 */

	var searchplace = (cityid, value) => fetch('GET', '/v1/pois', {
		type: 'search',
		city_id: cityid,
		keyword: value
	});


	/**
	 * 获取msite页面地址信息
	 */

	var msiteAdress = geohash => fetch('GET', '/v2/pois/' + geohash, {});


	/**
	 * 获取msite页面食品分类列表
	 */

	var msiteFoodTypes = geohash => fetch('GET', '/v2/index_entry', {
		geohash,
		group_type: '1',
		'flags[]': 'F'
	});

	/**
	 * 获取food页面的 category 种类列表
	 */

	var foodCategory = (latitude, longitude) => fetch('GET', '/shopping/v2/restaurant/category', {
		latitude,
		longitude
	});


	/**
	 * 获取food页面的配送方式
	 */

	var foodDelivery = (latitude, longitude) => fetch('GET', '/shopping/v1/restaurants/delivery_modes', {
		latitude,
		longitude,
		kw: ''
	});


	/**
	 * 获取food页面的商家属性活动列表
	 */

	var foodActivity = (latitude, longitude) => fetch('GET', '/shopping/v1/restaurants/activity_attributes', {
		latitude,
		longitude,
		kw: ''
	});

	/**
	 * 获取msite商铺列表
	 */

	var shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
		let supportStr = '';
		support_ids.forEach(item => {
			if (item.status) {
				supportStr += '&support_ids[]=' + item.id;
			}
		});
		let data = {
			latitude,
			longitude,
			offset,
			limit: '20',
			'extras[]': 'activities',
			keyword: '',
			restaurant_category_id,
			'restaurant_category_ids[]': restaurant_category_ids,
			order_by,
			'delivery_mode[]': delivery_mode + supportStr
		};
		return fetch('GET', '/shopping/restaurants', data);
	};

    /**
	 * 获取用户信息
	 */

	var getUser = () => fetch('GET', '/v1/user', {});

	/**
	*个人中心里编辑地址
	*/

	var getAddressList = (user_id) => fetch('GET', '/v1/users/'+user_id+'/addresses')
}else{
	var cityGuess = () => setpromise(home.guesscity);
	var hotcity = () => setpromise(home.hotcity);
	var groupcity = () => setpromise(home.groupcity);
	var currentcity = number => setpromise(city.currentcity);
	var searchplace = (cityid, value) => setpromise(city.searchdata);
	var msiteAdress = geohash => setpromise(msite.msiteAdress);
	var msiteFoodTypes = geohash => setpromise(msite.foodTypes);
	var foodCategory = (latitude, longitude) => setpromise(food.category);
	var foodDelivery = (latitude, longitude) => setpromise(food.delivery);
	var foodActivity = (latitude, longitude) => setpromise(food.activity);
	var shopList = (latitude, longitude, offset) => setpromise(msite.shopList);
	var getUser = () => setpromise(login.userInfo);
	var getAddressList = (user_id) => setpromise(addresspart.address);
	var getGoodslist = (user_id) => setpromise(taobGoodslist.goodsList);
	var getNewpost = (user_id) => setpromise(taobGoodslist.newpost);
	var getGoodsdetail = (user_id) => setpromise(taobGoodsdetail.goodsDetail);
}
export {cityGuess, hotcity, groupcity, currentcity, searchplace, msiteAdress, msiteFoodTypes, foodCategory, foodDelivery, 
	foodActivity,shopList,getUser,getAddressLists,getGoodslist,getNewpost,getGoodsdetail}
