/*eslint eol-last: ["error", "always"]*/
<template>
	<div class="container" v-bind:style="obj" ref="abc">
		<div class="test">{{ getinfo }}</div>
		<div class="test">{{ fullWidth }}</div>
		<div class="test">{{ fullHeight }}</div>
		<div class="test" v-bind:style="styleobj">sda</div>
		<div class="test"></div>
	</div>
</template>

<script>
export default{
  name: 'container',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth,
      realheight: '',
      styleobj: {
        color: 'white',
        backgroundColor: 'blue'
      },
      obj: {
        top: document.documentElement.clientHeight - 80 + 'px'
      }
    }
  },
  mounted () {
    this.realheight = this.$refs.abc.getBoundingClientRect().height
  },
  computed: {
    getinfo: function () {
      return this.realheight
    }
  }
}
</script>

<style scoped>
.container{
width: 100%;
height: 80px;
background-color: red;
font-size: 16px;
position: absolute;
display: flex;
flex-wrap: nowrap;
}
.test{
margin-left: 2rem;
margin-top: 15px;
width: 40px;
height: 40px;
background-color: white;
border:1px solid #000;
float: left;
}
</style>