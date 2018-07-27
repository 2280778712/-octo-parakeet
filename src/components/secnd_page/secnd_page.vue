<template>
	<div id="secpage" v-bind:style="obj">
    <app-nav :colorp="'fontcolor'"></app-nav>
    
	</div>
</template>

<script>
export default{
name:'secpage',
	data(){
		return{
		obj:{
        	 height:window.screen.availHeight +'px'
        	}
		}
	}
}
</script>

<style>
	#secpage{
		width:100%;
  		background: url('~@/assets/img/secbg.jpg') center 100% no-repeat;
  		background-size: cover;
  	}
</style>