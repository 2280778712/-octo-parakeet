<template>
	<div id="secpage" :style="{height:$store.state.height}">
    <app-nav :colorp="fontcolor"></app-nav>
    <!-- <router-view></router-view> -->
	<div class="zuoyou">
		
	</div>
	
	<Card></Card>
	</div>
</template>

<script>
import Card from './card.vue'
export default{
name:'secpage',
	data(){
		return{
			fontcolor:"white"
		}
	},
	components:{
		Card
	}
}
</script>

<style>
	#secpage{
		width:100%;
  		background: url('../../../static/img/secpage/secbg.jpg') center 100% no-repeat;
  		background-size: cover;
  	}
</style>
