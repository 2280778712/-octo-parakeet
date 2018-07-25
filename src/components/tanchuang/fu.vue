<template>
 <div class="fuzi">
    <Zi :is-show="status.isShowPublish" :top-distance="status.topNum" @on-close="closeDialog">
    <div slot="header">弹窗头部</div>
    <div class="dialog_publish_main" slot="main">
    <p>弹窗主体部分</p>
    </div>
    </Zi>
    <button @click="openDialog" v-if="status.isShowPublish==false">点击出现弹窗</button>
 </div>
</template>

 <script>
import Zi from './zi.vue'
export default {
  data(){
    return{
        status:{
          isShowPublish:false,
          topNum:20
        }
    }
  },
  methods:{
    closeDialog(){
    this.status.isShowPublish=false;
    },
    openDialog(){
    this.status.isShowPublish=true;
    }
  },
  components:{
    Zi
  }
}
</script>


<!-- slot的用法：父元素想要在子元素里面添加dom节点，父元素可以直接在标签里面加<zi>html节点</zi>，然后在子元素里面加上<slot></slot> -->

<style scoped>
  button{
    height: 1.5rem;
    border-radius: 8px;
    position: absolute;
    top: 20rem;
  }
  .fuzi{
    width: 100%;
    height:400px;
  }
</style>