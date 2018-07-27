<template>
	<div class="navs">
	<div class="logo"></div>
	<div class="nav">
		<router-link to="/firstpage">
			<div class="test box1">
				<h2 :style="{color:colorp}">地图</h2>
			</div>
		</router-link>
		<router-link to="/secondpage">
			<div class="test box2">
				<h2>成员</h2>
			</div>
		</router-link>
		<router-link to="/firstpage">
			<div class="test spe"></div>
		</router-link>
		<router-link to="/firstpage">
			<div class="test box3">
				<h2>生活</h2>
			</div>
		</router-link>
		<router-link to="/firstpage">
			<div class="test box4">
				<h2>项目</h2>
			</div>
		</router-link>
	</div>
</div>
</template>

<script>
export default{
  name: 'navs',
  props:["colorp"],
  data(){
    return{
    	
    }
  },
}
</script>

<style scoped>
.logo{
width: 70%;
height: 8rem;
position: absolute;
left:15%;
top: 0rem;
background:url('~@/assets/img/logo.png') center center no-repeat;
background-size: 100%;
}
.nav{
width: 100%;
height: 7rem;
font-size: 16px;
bottom: 0;
position: absolute;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
justify-content:space-around;
z-index: 120;
}
.test{
margin-top: 1.7rem;
width: 3.5rem;
height: 3.5rem;
background-color: brown;
float: left;
border-radius: 10px;
box-shadow: -0.4em 0.3em 0.6rem black;
}
.spe{
width: 4.2rem;
height: 4.2rem;
margin-top: 1.3rem;
background:url('~@/assets/img/mainbox.png') center center no-repeat;
background-size:cover;
}
.box1{
	background:url('~@/assets/img/box1.png') center center no-repeat;
	background-size:cover;
}
.box2{
	background:url('~@/assets/img/box2.png') center center no-repeat;
	background-size:cover;
}
.box3{
	background:url('~@/assets/img/box3.png') center center no-repeat;
	background-size:cover;
}
.box4{
	background:url('~@/assets/img/box4.png') center center no-repeat;
	background-size:cover;
}
.test h2{
	margin-top: 3.5rem;
	font-size: 1.3rem;
}
/*>1.7*/
/*<1.9*/
</style>