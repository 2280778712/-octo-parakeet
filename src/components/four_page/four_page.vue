<template>
    <div class="fourpage" :style="{height:$store.state.height}">
      <Popup :is-show="status.isShowPublish"
      :backimg="status.bgInfo"
      :top-distance="status.topNum"
      :boxHeight="status.boxHeight"
      :coverColor="status.coverColor"
      :closeHeight="status.closeHeight"
      @on-close="closeDialog">
      <div v-for="(value) in info" :key="value.id" slot="box" class="probox">
        <h2 slot="header">{{ value.title }}</h2>
        <p slot="main">{{ value.content }}</p>
        <div class="proimg" :style="{backgroundImage:'url(' + value.proimg + ')'}" slot="proimg">
        </div>
      </div>
      </Popup>
            <div class="computer" @click="openDialog()">
              <img :src="src">
            </div>
            <div class="bookrack">
              <img :src="bookrack">
            </div>
            <app-nav :colorp="fontcolor"></app-nav>
    </div>
</template>

<script>
import Popup from '../common/zi.vue'
export default {
    name:'forpage',
    data(){
      return {
        fontcolor:'white',
        src: '../../../static/img/fourpage/desk.png',
        bookrack:'../../../static/img/fourpage/shelfter.png',
        status:{
                isShowPublish:false,
                topNum:14,
                bgInfo:'../../../static/img/fourpage/dialog.png',
                boxHeight:30,
                coverColor:'rgba('+ 255 + ',' + 255 + ',' + 255 + ',' + 0.5 + ')',
                closeHeight:3.1
          },
          info:[
            {
            title:'2016年全国创新创业大赛',
            content:'宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖',
            proimg:'../../../static/img/carousel/deliver3.jpg',
          },{
            title:'2016年全国创新创业大赛',
            content:'宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖宏奕工作室在boss的辛勤代领下以及全工作室成员的艰苦努力下，最终荣获全国一等奖',
            proimg:'../../../static/img/carousel/deliver3.jpg',
          }
          ]
      }
    },
    methods:{
      closeDialog(){
            this.status.isShowPublish=false
        },
        openDialog(){
            this.status.isShowPublish=true
        }
    },
    components:{
      Popup
    }
}
</script>

<style scoped>
.fourpage{
width: 100%;
background: url('../../../static/img/fourpage/background2.jpg') center center no-repeat;
background-size: cover;
overflow: hidden;
}
.computer{
width: 100%;
height: auto;
animation: bounceInUp 1.5s 1;
bottom: -5%;
position: absolute;
z-index: 1;
}
.bookrack{
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0;
  animation: bounceInRight 1.5s 1;
  z-index: 0;
}
.bookrack img{
  position: relative;
  top: 2%;
}
.proimg{
  width:19rem;
  height: 10rem;
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.probox{
  overflow: auto;
}
.probox h2{
  margin-top: 3rem;
}
.probox p{
  text-align: left;
  text-indent: 2em;
  padding-left: 1rem;
  padding-right: 0.7rem;
  padding-top:1rem;
}
.probox .proimg{
  margin-top: 1rem;
  margin-left: 0.8rem;
}
@keyframes bounceInUp {
0%, 100%, 60%, 75%, 90% {
-webkit-transition-timing-function:cubic-bezier(0.215, .61, .355, 1);
transition-timing-function:cubic-bezier(0.215, .61, .355, 1)
}
0% {
opacity:0;
-webkit-transform:translate3d(0, 3000px, 0);
-ms-transform:translate3d(0, 3000px, 0);
transform:translate3d(0, 3000px, 0)
}
60% {
opacity:1;
-webkit-transform:translate3d(0, -20px, 0);
-ms-transform:translate3d(0, -20px, 0);
transform:translate3d(0, -20px, 0)
}
75% {
-webkit-transform:translate3d(0, 10px, 0);
-ms-transform:translate3d(0, 10px, 0);
transform:translate3d(0, 10px, 0)
}
90% {
-webkit-transform:translate3d(0, -5px, 0);
-ms-transform:translate3d(0, -5px, 0);
transform:translate3d(0, -5px, 0)
}
100% {
-webkit-transform:translate3d(0, 0, 0);
-ms-transform:translate3d(0, 0, 0);
transform:translate3d(0, 0, 0)
}
}
@keyframes bounceInRight {
0%, 100%, 60%, 75%, 90% {
-webkit-transition-timing-function:cubic-bezier(0.215, .61, .355, 1);
transition-timing-function:cubic-bezier(0.215, .61, .355, 1)
}
0% {
opacity:0;
-webkit-transform:translate3d(3000px, 0, 0);
-ms-transform:translate3d(3000px, 0, 0);
transform:translate3d(3000px, 0, 0)
}
60% {
opacity:1;
-webkit-transform:translate3d(-25px, 0, 0);
-ms-transform:translate3d(-25px, 0, 0);
transform:translate3d(-25px, 0, 0)
}
75% {
-webkit-transform:translate3d(10px, 0, 0);
-ms-transform:translate3d(10px, 0, 0);
transform:translate3d(10px, 0, 0)
}
90% {
-webkit-transform:translate3d(-5px, 0, 0);
-ms-transform:translate3d(-5px, 0, 0);
transform:translate3d(-5px, 0, 0)
}
100% {
-webkit-transform:none;
-ms-transform:none;
transform:none
}
}
</style>
