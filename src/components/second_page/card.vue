 <template>
  <div class="cards">
    <div class="courseLogo">
        <div class="courseBefore" v-bind:style="{backgroundImage: 'url('+ imgFront + ')'}"
        v-on:click="clickImg" id="front">
        </div>
        <div class="courseAfter" v-bind:style="{backgroundImage: 'url('+ imgBack + ')'}"
        v-on:click="clickImg" id="back">
        </div>
    </div>
        <span v-on:click="clickLeft" class="left"><<<<</span>
        <span v-on:click="clickRight" class="right">>>>></span>
        <span v-on:click="clickSpan2016" class="class16">16级</span>
        <span v-on:click="clickSpan2017" class="class17">17级</span>
        <span v-on:click="clickSpanOthers" class="others">往届</span>
  </div>
</template>

<script>
export default {
    name: 'card',
    data () {
        return {
        times:0,//点击左右按钮次数，初始值为0
        
        frontStyle:'',
        afterStyle:'',

        frontColor:"black",
        targetFront:"/static/img/cardimg/16-1-0.png",//初始图片16级第一张正面
        targetBack :"/static/img/cardimg/16-1-1.png",
        picture:['/static/img/cardimg/16-1-0.png','/static/img/cardimg/16-1-1.png'],

        pictures:[['/static/img/cardimg/16-1-0.png','/static/img/cardimg/16-1-1.png'],
                  ['/static/img/cardimg/16-2-0.png','/static/img/cardimg/16-2-1.png'],
                  ['/static/img/cardimg/16-3-0.png','/static/img/cardimg/16-3-1.png']
             ],//初始切换卡片为16级三张
        allpictures:[
                     [['/static/img/cardimg/16-1-0.png','/static/img/cardimg/16-1-1.png'],
                      ['/static/img/cardimg/16-2-0.png','/static/img/cardimg/16-2-1.png'],
                      ['/static/img/cardimg/16-3-0.png','/static/img/cardimg/16-3-1.png']],
                     [['/static/img/cardimg/17-1-0.png','/static/img/cardimg/17-1-1.png'],
                      ['/static/img/cardimg/17-2-0.png','/static/img/cardimg/17-2-1.png'],
                      ['/static/img/cardimg/17-3-0.png','/static/img/cardimg/17-3-1.png']],
                     [['/static/img/cardimg/15-1-0.png','/static/img/cardimg/15-1-1.png'],
                      ['/static/img/cardimg/15-2-0.png','/static/img/cardimg/15-2-1.png'],
                      ['/static/img/cardimg/15-3-0.png','/static/img/cardimg/15-3-1.png']]],
        }
    },
    methods:{
        clickSpan2016(){
            this.times = 0;
            this.pictures = this.allpictures[0];
            this.picture  = this.pictures[0];
            this.targetFront  = this.picture[0];
            this.targetBack  =  this.picture[1];
        },
        clickSpan2017(){
            this.times = 0;
            this.pictures = this.allpictures[1];
            this.picture  = this.pictures[0];
            this.targetFront = this.picture[0];
            this.targetBack  =  this.picture[1];

        },
        clickSpanOthers(){
            this.times = 0;
            this.pictures = this.allpictures[2];
            this.picture  = this.pictures[0];
            this.targetFront  = this.picture[0];
            this.targetBack  =  this.picture[1];
        },
        
        clickLeft(){
            this.times = this.times - 1;
            var picturesNumber = Object.getOwnPropertyNames(this.pictures).length-2;
            if(this.times < 0){
                this.times = picturesNumber-1;
                this.picture = this.pictures[this.times];
                this.targetFront  = this.picture[0];//左边越界
                this.targetBack  =  this.picture[1];
            }else{
                this.picture = this.pictures[this.times];
                this.targetFront  = this.picture[0];//在中间
                this.targetBack  =  this.picture[1];
            }
        },

        clickRight(){
            this.times = this.times + 1;
            var picturesNumber = Object.getOwnPropertyNames(this.pictures).length-2;
            if(this.times > picturesNumber-1){
                this.times   = 0;
                this.picture = this.pictures[this.times];
                this.targetFront  = this.picture[0];//右边越界
                this.targetBack  =  this.picture[1];
            }else{
                this.picture = this.pictures[this.times];
                this.targetFront  = this.picture[0];//在中间
                this.targetBack  =  this.picture[1];
            }
        },

        clickImg(){
            if(this.targetFront == this.picture[0]){//当前图片为front
                this.targetFront = this.picture[1];
            }else{
                if (this.targetBack != this.picture[0]) {
                this.targetBack = this.picture[0];//当前图片为back
                }else{
                    this.targetBack = this.picture[1];
                }
            }
        }
    },
    computed:{
        activeColor(){
            return this.frontColor;
        },
        imgFront(){
            return this.targetFront;
        },
        imgBack(){
            return this.targetBack;
        }
    }

}
</script>

<style scoped>
span{border: 1px solid black;width: 20px;}
 
.courseLogo{
    /*1.59:1*/
    width: 15rem;
    height: 23.85rem;
    position: absolute;
    top: 22%;
    left: 2.65rem;
    box-sizing: border-box;
    /* perspective: 800px; */
}

.courseBefore{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 10%;
    background-repeat: no-repeat;
    background-position: center center;
    backface-visibility: hidden;
    transition: 1s;
    transform: rotateY(0deg);
    background-repeat: no-repeat;
    background-size: contain;
}
.courseAfter{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 10%;
    color: #fff;
    text-indent: 2em;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    transition: 1s;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}
.courseLogo:hover .courseBefore{
    transform: rotateY(180deg);
}
.courseLogo:hover .courseAfter{
    transform: rotateY(0deg);
}
.left{
    width: 3.5rem;
    height: 2rem;
    line-height: 2rem;
    background-color: yellow;
    position: absolute;
    top: 49%;
    left: 1rem;
}
.right{
    width: 3.5rem;
    height: 2rem;
    line-height: 2rem;
    background-color: yellow;
    position: absolute;
    top: 49%;
    right: 1rem;
}
.class16{
    position: absolute;
    width: 3.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: red;
    left:1rem;
    top:25%;
}
.class17{
    position: absolute;
    width: 3.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: red;
    left:1rem;
    top:30%;
}
.others{
    position: absolute;
    width: 3.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    background-color: red;
    left:1rem;
    top:35%;
}
</style>
