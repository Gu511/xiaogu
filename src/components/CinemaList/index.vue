<template>
	<div class="cinema_body">
		<ul>
			<li v-for="data in cinemaList" :key="data.cinemaId">
				<div>
					<span>{{ data.name }}</span>
					<span class="q">
						<span class="price">￥{{ data.lowPrice / 100 }}元起</span>
					</span>
				</div>
				<div class="address">
					<span>{{ data.address }}</span>
					<span>{{ data.Distance.toFixed(2) }}km</span>
				</div>
				<div class="city">
					<div>{{ data.cityName }}</div>
					<div>{{ data.districtName }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CinemaList',
	data() {
		return {
			cinemaList: []
		};
	},
	mounted() {
		this.axios({
			url: `https://m.maizuo.com/gateway?cityId=130900&ticketFlag=1&k=6487538`,
			headers: {
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
				'X-Host': 'mall.film-ticket.cinema.list'
			}
		}).then(res => {
			console.log(res.data);
			this.cinemaList = res.data.data.cinemas;
		});
	}
};
</script>

<style scoped>
#content .cinema_body {
	flex: 1;
	overflow: auto;
}
.cinema_body ul {
	padding: 20px;
}
.cinema_body li {
	border-bottom: 1px solid #e6e6e6;
	margin-bottom: 20px;
}
.cinema_body div {
	margin-bottom: 10px;
}
.cinema_body .q {
	font-size: 11px;
	color: #f03d37;
}
.cinema_body .price {
	font-size: 18px;
	float: right;
}
.cinema_body .address {
	font-size: 13px;
	color: #666;
}

.cinema_body .address span:nth-of-type(1) {
	width: 80%;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow:ellipsis;
}

.cinema_body .address span:nth-of-type(2) {
	float: right;
}
.cinema_body .city {
	display: flex;
}
.cinema_body .city div {
	padding: 0 3px;
	height: 15px;
	line-height: 15px;
	border-radius: 2px;
	color: #f90;
	border: 1px solid #f90;
	font-size: 13px;
	margin-right: 5px;
}
.cinema_body .city div.or {
	color: #f90;
	border: 1px solid #f90;
}
.cinema_body .city div.bl {
	color: #589daf;
	border: 1px solid #589daf;
}
</style>
