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
        		// height: document.documentElement.clientHeight - 5 + 'px'
			// height:'100vh'
			 // height:document.body.clientHeight + 'px'
        height:window.screen.availHeight +'px'
        // height:document.body.offsetHeight + 'px'
        // height:document.body.scrollHeight + 'px'
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