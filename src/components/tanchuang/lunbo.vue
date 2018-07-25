<template>
<div class="container">
		<!-- <div class="show">
			<img :src="temps[0].imgUrl1" alt="">
		</div> -->
	<div class="bio-slide" v-for="item in items">   
	    <img v-bind:src="item.image">
	</div>
</div>
</template>

<script>
	// import con1 from "@/assets/img/card1.png"
	// import con2 from "@/assets/img/card2.png"
	// import con3 from "@/assets/img/card1.png"
	export default{
		data () {
			return {
				msg:[
				// "@/assets/img/card1.png"
				// "url(" + require("./assets/img/card1.png") + ")",
				// "url(" + require("./assets/img/card2.png") + ")",
				// "url(" + require("./assets/img/card1.png") + ")"
				],
				temps:[
				{imgUrl1: require("@/assets/img/card1.png")},
				{imgUrl2: require("@/assets/img/card2.png")},
				{imgUrl3: require("@/assets/img/card1.png")}
				]
			}
		},
		computed:{
			style:function(){
				var arr=this.msg;
				console.log(arr);
				arr.map(function(value){
					// console.log(value)
					return {
						color:"white"
					}
				})
				
			}
		}
	}
</script>

<style scoped>
	.container{
		margin:0 auto;
		width: 70%;
		position: relative;
		top:6.5rem;
		height: 25rem;
		overflow: hidden;
	}
	.show{
		width: 100%;
		height: 100%;
	}
	.show img{
		width: 100%;
		display: block;
		float: left;

	}
</style>