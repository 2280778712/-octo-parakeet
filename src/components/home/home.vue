<template>
  <div id="app" v-bind:style="obj">
    <app-nav :colorp="'fontcolor'"></app-nav>
  </div>
</template>

<script>
import Nav  from '@/components/navs'
export default {
  name: 'App',
  data () {
    return {
      obj:{
        height: document.documentElement.clientHeight + 'px'
        },
      fontcolor:"white"
    }
  },
  methods:{

  },
  components: {
  	"app-nav" : Nav
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: url('~@/assets/img/secbg.jpg') center 70% no-repeat;
}
</style>
