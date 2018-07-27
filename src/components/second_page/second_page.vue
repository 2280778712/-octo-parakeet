<template>
	<div id="secpage" v-bind:style="obj">
    <app-nav :colorp="'fontcolor'"></app-nav>
    <!-- <router-view></router-view> -->
	<Show></Show>
	</div>
</template>

<script>
import Show from './showcard.vue'
export default{
name:'secpage',
	data(){
		return{
		obj:{
        	 height:window.screen.availHeight + 'px'
        	}
		}
	},
	components:{
		Show
	}
}
</script>

<style>
	#secpage{
		width:100%;
  		background: url('~@/assets/img/secpage/thibg.jpg') center 100% no-repeat;
  		background-size: cover;
  	}
</style>