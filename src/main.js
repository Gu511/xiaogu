import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios库
import axios from 'axios'
// 给Vue添加一个axios方法
Vue.prototype.axios = axios;
Vue.config.productionTip = false
/* 一个全局的过滤器，把图片地址中的w.h替换成别的 */
Vue.filter('setWH', (url, arg) => {
	return url.replace(/w.h/, arg);
})

Vue.filter('actorFilter', function(data) {
	/* map()演示:
	var lis = [1,2,3];
	var lis01 = lis.map(item=>`gu${item}`);
	console.log(lis01); */
	var newList = data.map(item => item.name);
	return newList.join(' ');
});
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
