<template>
	<div class="contract" :style="{height:$store.state.height}">
		<div class="left" @click="goback">
		<!-- <icon type="over" :width=300 :height=300 class="svg1"></icon> -->
    </div>
		<div class="pic">
			<div class="pic1"></div>
			<div class="pic2"></div>
			<div class="pic3"></div>
		</div>
	</div>
</template>

<script>
export default{
	name:"contract",
	data () {
		return {

		}
	},
	methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>

<style scoped>
.pic{
	/* margin-top: 20%;
	margin-left: 20%; */
	width: 80%;
	height: 50%;
	position: absolute;
	top:25%;
	left: 20%;
}
.pic1{
	width: 80%;
	height: 15%;
	background-image: url('../../../static/img/log1.png');
	background-repeat: no-repeat;
	background-size: 100% 40%;
	padding: 17%;
}
.pic2{
	width: 80%;
	height: 15%;
	background-image: url('../../../static/img/log2.png');
	background-repeat: no-repeat;
	background-size: 100% 40%;
	padding: 17%;
}
.pic3{
	width: 80%;
	height: 15%;
	background-image: url('../../../static/img/log3.png');
	background-repeat: no-repeat;
	background-size: 100% 40%;
	padding: 17%;
}
.contract{
z-index: 100;
width: 100%;
background: url('../../../static/img/con1.gif') no-repeat;
background-position-x: 75%;
background-position-y: bottom;
background-size: cover;
}

.left{
	height: 3rem;
	width: 3rem;
	position: absolute;
	left: 1rem;
	top:1rem;
	background: url('../../../static/img/arrow.png') center center no-repeat;
	background-size: cover;
	animation: Move 0.5s ease-in-out infinite alternate;
}
@keyframes Move {
        from {transform:translate(0,0)}
        to {transform:translate(10px,0)}
      }
</style>
