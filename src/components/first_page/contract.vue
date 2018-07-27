<template>
	<div class="contract" v-bind:style="obj">
		<div class="left" @click="goback"><<<<</div>
	</div>
</template>

<script>
export default{
	name:"contract",
	data () {
		return {
			obj:{
        height:window.screen.availHeight + 'px'
			}
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
z-index: 11000;
width: 100%;
background: url('~@/assets/img/contractUs.jpg') left bottom no-repeat;
background-size: cover;
}
.left{
	height: 5rem;
}
</style>