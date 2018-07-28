<template>
	<div id="secpage" v-bind:style="obj">
    <app-nav :colorp="fontcolor"></app-nav>
    <!-- <router-view></router-view> -->
	<Card></Card>
	</div>
</template>

<script>
import Card from './card.vue'
export default{
name:'secpage',
	data(){
		return{
		obj:{
        	 height:window.screen.availHeight + 'px'
			},
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
  		background: url('~@/assets/img/secpage/secbg.jpg') center 100% no-repeat;
  		background-size: cover;
  	}
</style>