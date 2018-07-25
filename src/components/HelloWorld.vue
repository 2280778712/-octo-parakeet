<template>
  <div class="hello">
    <button @click="clickme">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      count:0
    }
  },
  methods:{
    clickme:function(){
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
