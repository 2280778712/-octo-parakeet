<template>
  <div class="hello" :style="obj">
      <div class="show">

      </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data(){
    return {
        obj:{
        	 height:window.screen.availHeight + 'px'
        	}
		  }
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    background-color: black;
  }
</style>
