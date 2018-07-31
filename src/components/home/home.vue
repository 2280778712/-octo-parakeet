<template>
	<div class="home" :style="{height:$store.state.height}">
		<app-nav :colorp="fontcolor"></app-nav>
		<h1>Welcome To Homyit</h1>
	</div>
</template>

<script>
export default{
	name:'home',
	data(){
		return{
        fontcolor:'red'
		}
  },
  created(){
    setTimeout(() => {
      this.$router.push({path:'/firstpage'})
    }, 2200)
  }
}
</script>

<style scoped>
	.home{
  		background: url('../../../static/img/secbg.jpg') center 100% no-repeat;
  		background-size: cover;
		width: 100%;
	}
	.home h1{
		text-align: center;
		margin-top: 50%;
	}
</style>
