<template>
	<div class="movie_body">
		<ul>
			<li v-for="data in comingList" :key="data.filmId">
				<div class="pic_show"><img :src="data.poster" /></div>
				<div class="info_list">
					<h2>
						{{data.name}}
						<span>{{data.item.name}}</span>
					</h2>
					<p>主演: {{data.actors | actorFilter}}</p>
					<p>{{showTime(data.premiereAt * 1000)}} &nbsp;上映</p>
				</div>
				<div class="btn_pre">预购</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CommingSoon',
	data() {
		return{
			comingList: [],
		}
	},
	mounted() {
		this.axios({
			url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2125898',
			headers: {
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16198541364526891235016705","bc":"310100"}',
				'X-Host': 'mall.film-ticket.film.list'
			}
		}).then(res => {
			var msg = res.data.msg;
			console.log(res.data);
			if (msg == 'ok') {
				this.comingList = res.data.data.films;
			}
		});
	},
	methods:{
		numOfChinese(num) {
			var arr = ['日', '一', '二', '三', '四', '五', '六'];
			return arr[num];
		},
		doubleNum(n) {
			if (n < 10) {
				return '0' + n;
			} else {
				return n;
			}
		},
		showTime(time) {
			var d = new Date(time);
			var year = d.getFullYear();
			var month = d.getMonth() + 1; //0~11
			var date = d.getDate();
		
			var week = d.getDay(); // 0是周日
			week = this.$options.methods.numOfChinese(week);
			var str = year + '年' + month + '月' + date + '日 星期' + week;
			return str;
		}
	}
};
</script>

<style scoped>
#content .movie_body {
	flex: 1;
	overflow: auto;
}
.movie_body ul {
	margin: 0 12px;
	overflow: hidden;
}
.movie_body ul li {
	margin-top: 12px;
	display: flex;
	align-items: center;
	border-bottom: 1px #e6e6e6 solid;
	padding-bottom: 10px;
}
.movie_body .pic_show {
	width: 64px;
	height: 90px;
}
.movie_body .pic_show img {
	width: 100%;
}
.movie_body .info_list {
	margin-left: 10px;
	flex: 1;
	position: relative;
}
.movie_body .info_list h2 {
	font-size: 17px;
	line-height: 24px;
	width: 150px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.movie_body .info_list h2 span {
	font-size: 9px;
	color: #fff;
	background-color: #d2d6dc;
	height: 14px;
	line-height: 14px;
	padding: 0 2px;
	border-radius: 2px;
}

.movie_body .info_list p {
	font-size: 13px;
	color: #666;
	line-height: 22px;
	width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.movie_body .info_list .grade {
	font-weight: 700;
	color: #faaf00;
	font-size: 15px;
}
.movie_body .info_list img {
	width: 50px;
	position: absolute;
	right: 10px;
	top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
	width: 47px;
	height: 27px;
	line-height: 28px;
	text-align: center;
	background-color: #f03d37;
	color: #fff;
	border-radius: 4px;
	font-size: 12px;
	cursor: pointer;
}
.movie_body .btn_pre {
	background-color: #3c9fe6;
}
</style>
