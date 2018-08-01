<template>
<div class="thipage" :style="{height:$store.state.height}">
    <div class="bg" :style="show" ref="move">
      <div class="bgbottom"></div>
    </div>
    <div class="touchbox"
    @touchstart='touchStart'
    @touchmove='touchMove'
    @touchend='touchEnd'
    ref = "remove">
    </div>
    <Popup :is-show="status.isShowPublish" :top-distance="status.topNum"
     :boxHeight="status.boxHeight" :coverColor="status.coverColor" @on-close="closeDialog">

      <slider-show :slides="slides" :inv="invTime" slot="box"></slider-show>

    </Popup>
    <Popup :is-show="status1.isShowPublish" :top-distance="status1.topNum"
     :boxHeight="status1.boxHeight" :coverColor="status1.coverColor" @on-close="closeDialog">

    <slider-show :slides="slides" :inv="invTime" slot="box"></slider-show>

    </Popup>
    <div class="photoWall" :style="photoWall" @click="openDialog(0)">
      <h3 class="svgh1">工作室照片</h3>
    </div>
    <div class="proWall" :style="[proboard]" @click="openDialog(1)">
      <h3 class="svgh4">成员生活照</h3>
    </div>
    <app-nav :colorp="fontcolor"></app-nav>
    </div>
</template>
<script>
import Popup from '../common/zi.vue'
import sliderShow from '../common/slideShow'
export default {
    name:'thipage',
    data(){
		return{
            fontcolor:"white",
            isShow:false,
            startX:0,
            moveX:0,
            endX:0,
            disX:0,
            show:'',
            xian1:true,
            xian2:false,
            photoWall:'',
            proboard:{
                transform:'translateX(' + window.screen.availWidth + 'px)'
            },
            status:{
                isShowPublish:false,
                topNum:25,
                bgInfo:'',
                boxHeight:15,
                coverColor:'rgba('+ 0 + ',' + 0 + ',' + 0 + ',' + 0.5 + ')'
            },
            status1:{
                isShowPublish:false,
                topNum:25,
                bgInfo:'',
                boxHeight:17,
                coverColor:'rgba('+ 0 + ',' + 0 + ',' + 0 + ',' + 0.5 + ')'
            },
        invTime:2000,
        slides:[
        {
          src: '../../../static/img/carousel/deliver1.jpg',
          title: '测试测试测试1'
        },
        {
          src: '../../../static/img/carousel/deliver6.jpg',
          title: '测试测试测试2'
        },
        {
          src: '../../../static/img/carousel/deliver3.jpg',
          title: '测试测试测试3'
        },
        {
          src: '../../../static/img/carousel/deliver4.jpg',
          title: '测试测试测试4'
        }]
    }
    },
    methods:{
        closeDialog(){
            this.status.isShowPublish=false
            this.status1.isShowPublish=false
        },
        openDialog(num){
            if(num == 0){
                this.status.isShowPublish=true
            }else{
                this.status1.isShowPublish=true
            }
        },
        touchStart(ev){
            ev = ev || event;
            ev.preventDefault();
            if(ev.targetTouches.length == 1){
                this.startX = ev.targetTouches[0].clientX;
            }
        },
        touchMove(ev){
            ev = ev || event;
            ev.preventDefault();
            let btnWidth = this.$refs.remove.offsetWidth;
            let btnmove = this.$refs.move.offsetWidth;
            if(ev.targetTouches.length == 1){
                this.moveX = ev.targetTouches[0].clientX;
                this.disX = this.moveX - this.startX;
                if(this.disX<0 || this.disX == 0) {
                    this.show = 'transform:translateX('+this.disX+'px)';
                    setTimeout(() => {
                        this.xian1=false;
                      }, 100)
                    this.xian2 = true;
                    if(this.disX <= -(btnmove/6)) {
                    this.show = 'transform:translateX('+(btnWidth-btnmove)+'px)';
                    this.photoWall = 'transform:translateX('+(btnWidth-btnmove)+'px)';
                    this.proboard.transform = 'translateX('+ 0 +'px)';
                    }else{}
                }else if(this.disX>(btnWidth/3)){
                    this.show = 'transform:translateX(0px)';
                    this.photoWall = 'transform:translateX(0px)';
                    this.proboard.transform = 'translateX('+ (btnWidth) +'px)';
                }
            }
        },touchEnd(ev){
            ev = ev || event;
            ev.preventDefault();
                    let btnWidth = this.$refs.remove.offsetWidth;   //小的
                    let btnmove = this.$refs.move.offsetWidth;    //大的
                if(ev.changedTouches.length == 1) {
                    let endX = ev.changedTouches[0].clientX;
                    this.disX = endX-this.startX;
                    if(this.disX <= -(btnmove/6)) {
                    this.show = "transform:translateX("+(btnWidth-btnmove)+ "px)";
                    this.photoWall = "transform:translateX("+(btnWidth-btnmove)+ "px)";
                    this.proboard.transform = 'translateX('+ 0 +'px)';
                        }else if(this.disX >= (btnmove/6)){
                    this.show = 'transform:translateX(0px)';
                    this.photoWall = 'transform:translateX(0px)';
                    this.proboard.transform = 'translateX('+ btnWidth +'px)';
                    setTimeout(() => {
                        this.xian1=true;
                        this.xian2=false;
                      }, 900)
                    }else if(this.disX <= 0){
                        this.show = 'transform:translateX(0px)';
                    this.photoWall = 'transform:translateX(0px)';
                    this.proboard.transform = 'translateX('+ btnWidth +'px)';
                    }else{
                      this.show = "transform:translateX("+(btnWidth-btnmove)+ "px)";
                    this.photoWall = "transform:translateX("+(btnWidth-btnmove)+ "px)";
                    this.proboard.transform = 'translateX('+ 0 +'px)';
                    }
              }
        }
    },
    components:{
        Popup,
        sliderShow
    }
}
</script>

<style scoped>
.thipage{
    width: 100%;
    overflow: hidden;
}
.bg{
  width: 200%;
  height: 100%;
  background: url('../../../static/img/thipage/background2.jpg') left 70% no-repeat;
  background-size: cover;
  transition-duration: 1.5s;
}
.bg .bgbottom{
  position: absolute;
  bottom: -1rem;
  left: 0;
  background: url('../../../static/img/thipage/ground.png') left bottom no-repeat;
  background-repeat: no-repeat;
  height: 50%;
  width: 100%;
  animation: bounceInUp 1.5s 1;
}
.touchbox{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 50;
}
.show{
    width: 30px;
    height: 30px;
    background-color: brown;
}
.photoWall{
    width: 10rem;
    height: 10.8rem;
    background: url('../../../static/img/thipage/picturewall.png') top left no-repeat;
    background-size: cover;
    position: absolute;
    top: 27%;
    left:10%;
    transition-duration: 1.5s;
    z-index: 90;
}
.proWall{
    width: 12rem;
    height: 7rem;
    background: url('../../../static/img/thipage/board.png') center center no-repeat;
    background-size: cover;
    position: absolute;
    top: 22%;
    left: 10%;
    transition-duration: 1.6s;
    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);
    z-index: 90;
}
@keyframes myMove {
    0% {padding-left:30px;}
    100% {padding-left:50px;}
}

.svg1{
  position: absolute;
  left:5rem;
  top: 22%;
  filter: drop-shadow(5px 5px 2px rgba(0,0,0,0.8));
  animation: myMove 0.7s linear infinite alternate;
}
.svgh1{
  width: 5rem;
  height: 2rem;
  line-height: 2rem;
  position: absolute;
  left: 8rem;
  top: -3%;
  font-size: 1rem;
  filter: drop-shadow(5px 5px 1px rgba(0,0,0,0.3));
}
.svg2{
  position: absolute;
  top: 33%;
  left: 6rem;
  transform: rotateY(180deg);
  z-index: 1;
  animation: myMove 0.7s linear infinite alternate;
  filter: drop-shadow(5px 5px 2px rgba(0,0,0,0.8));
}
.svg4{
  position: absolute;
  top: 7rem;
  transform: rotateY(0deg);
  left: 37rem;
  animation: myMove 0.7s linear infinite alternate;
}
.svgh4{
  width: 5rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  margin-top: 8rem;
  margin-left: 3rem;
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
</style>
