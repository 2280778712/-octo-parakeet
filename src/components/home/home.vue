<template>
	<div class="home" v-bind:style="obj">
		<app-nav></app-nav>
		<h1>Welcome To Homyit</h1>
	</div>
</template>

<script>
export default{
	name:'home',
	data(){
		return{
		obj:{
        		// height: document.documentElement.clientHeight - 5 + 'px'
        		// height:'100vh'
        		// height:document.body.clientHeight + 'px'
        height:window.screen.availHeight +'px'
        // height:document.body.offsetHeight + 'px'
        // height:document.body.scrollHeight + 'px'
        	}
		}
	}
}
</script>

<style scoped>
	.home{
  		background: url('~@/assets/img/secbg.jpg') center 100% no-repeat;
  		background-size: cover;
		width: 100%;
	}
	.home h1{
		text-align: center;
		margin-top: 50%;
	}
</style>