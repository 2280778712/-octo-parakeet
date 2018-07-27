<template>
  <div>
    <div class="header">
      <div class="title">主页</div>
    </div>
     <ul>
        <li><router-link to="firstpage">firpage</router-link></li>
        <li><router-link to="contract">contract</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
  ul{
    width: 20rem;
    height: 20rem;
  }
  ul li{
    width: 50%;
    height: 5rem;
    background-color: red;
    line-height: 5rem;
    border:1px solid #000;
    margin-top: 10rem;
    margin-left: 5rem;
  }
</style>