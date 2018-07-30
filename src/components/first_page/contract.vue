<template>
	<div class="contract" :style="{height:$store.state.height}">
		<div class="left" @click="goback"><<<<</div>
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
.contract{
z-index: 100;
width: 100%;
background: url('~@/assets/img/contractUs.jpg') left bottom no-repeat;
background-size: cover;
}
.left{
	height: 2rem;
	width: 5rem;
	background-color: red;
}
</style>