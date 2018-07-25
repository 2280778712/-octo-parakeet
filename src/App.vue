<template>
  <div id="app" v-bind:style="obj">
    <app-nav></app-nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      obj: {
        height: document.documentElement.clientHeight + 'px'
      }
    }
  },
  methods:{

  },
  components: {
  }
}
</script>

<style>
body {
    color: #333;
    -webkit-text-size-adjust: none;
}
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
}
@media only screen and (min-width: 320PX) and (max-width:360PX) {
    html {
        font-size:13.65px
    }
}

@media only screen and (min-width: 360PX) and (max-width:375PX) {
    html {
        font-size:15.36px
    }
}

@media only screen and (min-width: 375PX) and (max-width:390PX) {
    html {
        font-size:16px
    }
}

@media only screen and (min-width: 390PX) and (max-width:414PX) {
    html {
        font-size:16.64px
    }
}

@media only screen and (min-width: 414PX) and (max-width:640PX) {
    html {
        font-size:17.664px
    }
}

@media screen and (min-width: 640PX) {
    html {
        font-size:27.31px
    }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('~@/assets/img/secbg.jpg') center 80% no-repeat;
}
</style>
