<template>
<div class="thipage" :style="{height:$store.state.height}">
    <div class="bg" :style="show" ref="move"></div>
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
    <div class="photoWall" :style="photoWall" @click="openDialog(0)"></div>
    <div class="proWall" :style="[proboard]" @click="openDialog(1)"></div>
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
            photoWall:'',
            proboard:{
                transform:'translateX(' + window.screen.availWidth + 'px)'
            },
            status:{
                isShowPublish:false,
                topNum:25,
                bgInfo:'',
                boxHeight:17,
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
            // console.log(ev.targetTouches);
            // console.log(ev.changedTouches);
            if(ev.targetTouches.length == 1){
                //touches类数组，即手指的个数为一时
                this.startX = ev.targetTouches[0].clientX;      //记录下初始位置
                // console.log(this.startX);
            }
        },
        touchMove(ev){
            ev = ev || event;
            ev.preventDefault();
            // console.log(ev.targetTouches);
            // console.log(ev.changedTouches);
            let btnWidth = this.$refs.remove.offsetWidth;  //$refs 减少获取dom节点的消耗
            let btnmove = this.$refs.move.offsetWidth;
            if(ev.targetTouches.length == 1){
                this.moveX = ev.targetTouches[0].clientX;
            // console.log(this.moveX);
            //实时的滑动的距离-起始位置=实时移动的位置
                this.disX = this.moveX - this.startX;
                // console.log(this.disX);
                if(this.disX<0 || this.disX == 0) {
                    this.show = 'transform:translateX('+this.disX+'px)';
                    if(this.disX <= -btnWidth) {
                    this.show = 'transform:translateX('+(btnWidth-btnmove)+'px)';
                    this.photoWall = 'transform:translateX('+(btnWidth-btnmove)+'px)';
                    this.proboard.transform = 'translateX('+ 0 +'px)';
                    }
                }else if(this.disX>0){
                    this.show = 'transform:translateX(0px)';
                    this.photoWall = 'transform:translateX(0px)';
                    this.proboard.transform = 'translateX('+ (btnWidth) +'px)';
                }
            }
        },
        touchEnd(ev){
            ev = ev || event;
            ev.preventDefault();
                    let btnWidth = this.$refs.remove.offsetWidth;  //$refs 减少获取dom节点的消耗
                    let btnmove = this.$refs.move.offsetWidth;
                if(ev.changedTouches.length == 1) {
                    let endX = ev.changedTouches[0].clientX;
                    this.disX = endX-this.startX;
                    // console.log(this.disX);
                    if(this.disX < -(btnmove/6)) {
                    this.show = "transform:translateX("+(btnWidth-btnmove)+ "px)";
                    this.photoWall = "transform:translateX("+(btnWidth-btnmove)+ "px)";
                    this.proboard.transform = 'translateX('+ 0 +'px)';
                        }else {
                    this.show = 'transform:translateX(0px)';
                    this.photoWall = 'transform:translateX(0px)';
                    this.proboard.transform = 'translateX('+ btnWidth +'px)';
                    }
              }
        }
    },
    components:{
        Popup,
        sliderShow
    }
//   ,created: function () {
// 	    this.$http.get('api/slidesList')
// 	    then((res) => {
// 	      this.slides = res.data
// 	    },(err) => {
// 	      console.log(err)
// 	    })
//   }
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
        background: url('~@/assets/img/thipage/thibg.jpg') left 70% no-repeat;
  		  background-size: cover;
        transition-duration: 1.5s;
    }
    .touchbox{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }
    .show{
        width: 30px;
        height: 30px;
        background-color: brown;
    }
    .photoWall{
        width: 10rem;
        height: 10.8rem;
        background: url('~@/assets/img/thipage/picturewall.png') top left no-repeat;
        background-size: cover;
        position: absolute;
        top: 30%;
        left:10%;
        transition-duration: 1.5s;
    }
    .proWall{
        width: 12rem;
        height: 7rem;
        background:  url('~@/assets/img/thipage/board.png') center center no-repeat;
        background-size: cover;
        position: absolute;
        top: 22%;
        left: 10%;
        transition-duration: 1.6s;
        box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);
    }
</style>

