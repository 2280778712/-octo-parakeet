<template>
  <div id="firpage" :style="{height:$store.state.height}">
    <app-nav :colorp="fontcolor"></app-nav>
    <Popup :is-show="status.isShowPublish" :top-distance="status.topNum"
    :backimg="status.bgInfo" :boxHeight="status.boxHeight"
    :coverColor="status.coverColor"
    @on-close="closeDialog">
      <h2 slot="header">{{ info.title }}</h2>
      <p slot="main">{{ info.content }}</p>
    </Popup>
    <div class="box1" @click="openDialog(3)"></div>
    <div class="box2" @click="openDialog(1)"></div>
    <div class="box3" @click="openDialog(2)"></div>
    <router-link to="/contract"><div class="box4"></div></router-link>
  </div>
</template>

<script>
import Popup from '../common/zi.vue'
export default {
  name:'firpage',
  data(){
    return{
      fontcolor:"black",
      status:{
          isShowPublish:false,
          topNum:10,
          bgInfo:'../../../static/img/bigwindow.png',
          boxHeight:30,
          coverColor:'rgba('+ 255 + ',' + 255 + ',' + 255 + ',' + 0.5 + ')'
        },
        info:{
          title:'',
          content:''
        },
        homyitInfo:{
          title:"宏奕工作室简介",
          content:"曾几何时为了兼容IE低版本浏览器而头痛，以为到Mobile时代可以跟这些麻烦说拜拜。可没想到到了移动时代，为了处理各终端的适配而乱了手脚。对于混迹各社区的偶，时常发现大家拿手机淘宝的H5页面做讨论"
        },
        qianDuanInfo:{
            title:"工作室前端简介",
            content:"曾几何时为了兼容IE低版本浏览器而头痛，以为到Mobile时代可以跟这些麻烦说拜拜。可没想到到了移动时代，为了处理各终端的适配而乱了手脚。对于混迹各社区的偶，时常发现大家拿手机淘宝的H5页面做讨论"
        },
        houDuanInfo:{
            title:"工作室后端简介",
            content:"曾几何时为了兼容IE低版本浏览器而头痛，以为到Mobile时代可以跟这些麻烦说拜拜。可没想到到了移动时代，为了处理各终端的适配而乱了手脚。对于混迹各社区的偶，时常发现大家拿手机淘宝的H5页面做讨论"
        }
    }
  },
  methods:{
    closeDialog(){
      this.status.isShowPublish=false
    },
    openDialog(num){
      this.status.isShowPublish=true
      switch(num){
        case 1:
        this.info = this.homyitInfo;
        break;
        case 2:
        this.info = this.qianDuanInfo;
        break;
        case 3:
        this.info = this.houDuanInfo;
        break;
      }
    }
  },
  components: {
    Popup
  }
}
</script>

<style scoped>
#firpage{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: url('../../../static/img/secbg.jpg') center 100% no-repeat;
  background-size: cover;
}
.box1{
  width: 12rem;
  /*7:6*/
  height: 10.3rem;
  background: url('../../../static/img/island1.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  /*top: 7rem;*/
  top:18%;
  left: 46%;
  z-index: 10;
}
.box2{
  width: 6rem;
  height: 10rem;
  background: url('../../../static/img/island2.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  /*top: 13.5rem;*/
  top:32%;
  left: 30%;
  z-index: 12;
}
.box3{
  width: 17rem;
  height: 10rem;
  background: url('../../../static/img/island3.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  /*top: 19rem;*/
  top:45%;
  left: 23%;
}
.box4{
  /*2.6:1;*/
  width:16rem;
  height:7rem;
  background: url('../../../static/img/contract.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  display: inline-block;
  /*top:27.9rem;*/
  top:68%;
  left: 0;
  z-index: 5;
}
.alink{
  width: 5rem;
  height: 5rem;
}
</style>
