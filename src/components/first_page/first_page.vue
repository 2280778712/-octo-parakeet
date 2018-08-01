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

    <div class="box1" @click="openDialog(3)">
      <div class="jiantou1"></div>
      <div class="wenzi1">后端</div>
    </div>
    <div class="box2" @click="openDialog(1)">
      <div class="jiantou2"></div>
      <div class="wenzi2">工作室简介</div>
    </div>
    <div class="box3" @click="openDialog(2)">
      <div class="jiantou3"></div>
      <div class="wenzi3">前端</div>
    </div>

      <div class="yun1"></div>
      <div class="yun2"></div>
      <div class="yun3"></div>
      <div class="yun4"></div>

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
  overflow: hidden;
}

.box1{
  width: 10rem;
  /*7:6*/
  height: 8.6rem;
  background: url('../../../static/img/island1.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  top:14%;
  left: 53%;
  z-index: 10;
}
.jiantou1{
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 2.5rem;
  margin-left: -1.5rem;
  background: url('../../../static/img/arrow2.png') center center no-repeat;
  background-size: cover;
  animation: Move 0.5s ease-in-out infinite alternate;
  }
.wenzi1{
  width: 5rem;
  height: 2rem;
  margin-top: -1.5rem;
  margin-left: -5.5rem;
  font-size: 1.2rem;
}
.box2{
  width: 5.7rem;
  height: 9rem;
  background: url('../../../static/img/island2.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  top:27%;
  left: 35%;
  z-index: 12;
}
.jiantou2{
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 3.5rem;
  margin-left: 6rem;
  background: url('../../../static/img/arrow.png') center center no-repeat;
  background-size: cover;
  animation: Move 0.5s ease-in-out infinite alternate;
  }
.wenzi2{
  width: 7rem;
  height: 5rem;
  margin-top: -1.7rem;
  margin-left: 7.5rem;
  font-size: 1.2rem;
}
.box3{
  width: 13rem;
  height: 8rem;
  background: url('../../../static/img/island3.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  top:42%;
  left:33%;
}
.jiantou3{
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 4rem;
  margin-left: -1rem;
  background: url('../../../static/img/arrow2.png') center center no-repeat;
  background-size: cover;
  animation: Move 0.5s ease-in-out infinite alternate;
  }
.wenzi3{
  width: 7rem;
  height: 5rem;
  margin-top: -1.5rem;
  margin-left: -6rem;
  font-size: 1.2rem;
}
.box4{
  /*2.6:1;*/
  width:14rem;
  height:5rem;
  background: url('../../../static/img/contract.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  display: inline-block;
  top:65%;
  left: 0;
  z-index: 5;
  -moz-animation: myMove 0.7s ease infinite alternate;
  -webkit-animation: myMove 0.7s ease infinite alternate;
  -o-animation: myMove 0.7s ease infinite alternate;
  animation: myMove 0.7s ease infinite alternate;
}
.yun1{
  width:6rem;
  height:6rem;
  background: url('../../../static/img/yun1.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  display: inline-block;
  top:22rem;
  right:1rem;
  z-index: 20;
  background-repeat: no-repeat;
  -webkit-animation: myMove1 1.3ss ease-in-out infinite alternate;
  animation: myMove1 1.3s ease-in-out infinite alternate;
}
.yun2{
  width:5rem;
  height:5rem;
  background: url('../../../static/img/yun2.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  display: inline-block;
  top:12rem;
  left:0rem;
  z-index: 20;
  background-repeat: no-repeat;
  -moz-animation: myMove1 1.2s ease-in-out infinite alternate;
  -webkit-animation: myMove1 1.2ss ease-in-out infinite alternate;
  -o-animation: myMove1 1.2s ease-in-out infinite alternate;
  animation: myMove1 1.2s ease-in-out infinite alternate;
}
.yun3{
  width:6rem;
  height:6rem;
  background: url('../../../static/img/yun3.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  display: inline-block;
  top: 4.5rem;
  left:1.5rem;
  z-index: 20;
  background-repeat: no-repeat;
  -moz-animation: myMove1 1.1s ease-in-out infinite alternate;
  -webkit-animation: myMove1 1.1ss ease-in-out infinite alternate;
  -o-animation: myMove1 1.1s ease-in-out infinite alternate;
  animation: myMove1 1.1s ease-in-out infinite alternate;
}

.yun4{
  width:4rem;
  height:4rem;
  background: url('../../../static/img/yun4.png') center center no-repeat;
  background-size: 100%;
  position: absolute;
  position: absolute;
  top:3.5rem;
  left: 75%;
  z-index: 20;
  background-repeat: no-repeat;
  -moz-animation: myMove1 1.0s ease-in-out infinite alternate;
  -webkit-animation: myMove1 1.0ss ease-in-out infinite alternate;
  -o-animation: myMove1 1.0s ease-in-out infinite alternate;
  animation: myMove1 1.0s ease-in-out infinite alternate;

}
@keyframes Move {
        from {transform:translate(0,0)}
        to {transform:translate(5px,0)}
      }
@keyframes myMove{
        from{transform:translate(0,0)}
        to{transform:translate(0,10px)}
    }
@keyframes myMove1{
        from{transform:translate(0,0)}
        to{transform:translate(0,12px)}
    }

  @keyframes myMove0{
        from{transform:translate(0,0)}
        to{transform:translate(0,12px)}
    }

.alink{
  width: 5rem;
  height: 5rem;
}
</style>
