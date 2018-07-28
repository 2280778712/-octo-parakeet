<template>
<div class="thipage" v-bind:style="obj" >
    <div class="bg" :style="show" ref="move"></div>
    <div class="touchbox"
    @touchstart='touchStart'
    @touchmove='touchMove'
    @touchend='touchEnd'
    ref = "remove">
    </div>
    <router-link to="/firstpage" class="alink">sdadasda</router-link>
    <app-nav :colorp="fontcolor"></app-nav>
    </div>
</template>
<script>
export default {
    name:'thipage',
    data(){
		return{
		obj:{
        	height:window.screen.availHeight + 'px'
        },
        fontcolor:"white",
        isShow:false,
        startX:0,
        moveX:0,
        endX:0,
        disX:0,
        show:''
		}
    },
    methods:{
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
                    }
                }else if(this.disX>0){  
                    this.show = 'transform:translateX(0px)';
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
                    if(this.disX < -(btnmove/3)) {
                            this.show = "transform:translateX("+(btnWidth-btnmove)+ "px)";
                        }else {
                            this.show = 'transform:translateX(0px)';
                        }
                }
        }
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
    .alink{
        z-index: 666;
        display: block;
        width: 10rem;
        height: 10rem;
        position: absolute;
        top:0;
    }
</style>

