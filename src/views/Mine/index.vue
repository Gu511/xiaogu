<!-- 输入s选择Vue Base即可生成框架 -->
<template>
	<div id="main">
		<Header title="我的喵喵"></Header>
		<div id="content">
			<Login></Login>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
/* 引入TabBar底部导航组件和Header头部组件 */
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
/* 引入Login组件 */
import Login from '@/components/Login'
export default {
	name: 'Mine',
	components: {
		Header,
		TabBar,
		Login
	}
};
</script>

<style scoped></style>
