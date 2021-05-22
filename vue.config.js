module.exports = {
	devServer: {
		proxy: {
			//   /ajax 为你请求的方式，理论上是后端暴露给你的，这里猫眼使用  /ajax 的方式
			'/ajax': {
				// target 为 url 中 /ajax 前面的请求网址的部分
				target: 'https://m.maoyan.com/',
				// 实现反向代理
				changeOrigin: true
			},
		}
	}
}
