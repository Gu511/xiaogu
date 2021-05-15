/* 导入Movie，City，Search，CommingSoon，NowPlaying组件 */
import Movie from '@/views/Movie'
import City from '@/components/City'
import Search from '@/components/Search'
import CommingSoon from '@/components/CommingSoon'
import NowPlaying from '@/components/NowPlaying'
export default {
	path: '/movie',
	/* 一级路由 */
	component: Movie,
	/* 二级路由 */
	children: [{
			path: 'city',
			component: City
		},
		{
			path: 'search',
			component: Search
		},
		{
			path: 'commingSoon',
			component: CommingSoon
		},
		{
			path: 'nowPlaying',
			component: NowPlaying
		},
		{
			// 二级路由重定向
			path: '/movie',
			redirect: '/movie/nowPlaying'
		}
	]
}
