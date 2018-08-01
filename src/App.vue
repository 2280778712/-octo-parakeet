<template>
  <div id="app" :style="{height:$store.state.height}">
    <router-view></router-view>
  </div>
</template>

<script>
import Firpage from '@/components/first_page/first_page'
export default {
  name: 'App',
  data () {
    return {
      obj: {
        // height:window.screen.availHeight + 'px'
      }
    }
  },
  methods:{

  },
  components: {
    // Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
