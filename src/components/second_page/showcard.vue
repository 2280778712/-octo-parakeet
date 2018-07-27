<template>
  <div class="showcard">
    <card></card>
  </div>
</template> 

<script>
import Card from './card.vue' 
export default {
    name: 'showcard',
    components:{
       "card" : Card
    },
    data () {
        return {
        times:0,//点击左右按钮次数，初始值为0

        target:"/static/img/16-1-0.png",//初始图片16级第一张正面

        picture:['/static/img/16-1-0.png','/static/img/16-1-1.png'],

        pictures:[['/static/img/16-1-0.png','/static/img/16-1-1.png'],
                  ['/static/img/16-2-0.png','/static/img/16-2-1.png'],
                  ['/static/img/16-3-0.png','/static/img/16-3-1.png']
             ],//初始切换卡片为16级三张

        allpictures:[
                     [['/static/img/16-1-0.png','/static/img/16-1-1.png'],
                      ['/static/img/16-2-0.png','/static/img/16-2-1.png'],
                      ['/static/img/16-1-0.png','/static/img/16-1-1.png']],
                     [['/static/img/17-1-0.png','/static/img/17-1-1.png'],
                      ['/static/img/17-2-0.png','/static/img/17-2-1.png'],
                      ['/static/img/17-3-0.png','/static/img/17-3-1.png']],
                     [['/static/img/15-1-0.png','/static/img/15-1-1.png'],
                      ['/static/img/15-2-0.png','/static/img/15-2-1.png'],
                      ['/static/img/15-3-0.png','/static/img/15-3-1.png']]],
        }
    },

    methods:{
        clickSpan2016(){
            this.times = 0;
            this.pictures = this.allpictures[0];
            this.picture  = this.pictures[0];
            this.target   = this.picture[0];
        },
        clickSpan2017(){
            this.times = 0;
            this.pictures = this.allpictures[2];
            this.picture  = this.pictures[0];
            this.target   = this.picture[0];
        },
        clickSpanOthers(){
            this.times = 0;
            this.pictures = this.allpictures[1];
            this.picture  = this.pictures[0];
            this.target   = this.picture[0];
        },
        
        clickLeft(){ 
            this.times = this.times - 1;
            var picturesNumber = Object.getOwnPropertyNames(this.pictures).length-2;
            if(this.times < 0){
                this.times = picturesNumber-1;
                this.picture = this.pictures[this.times];
                this.target   = this.picture[0];//左边越界
            }else{
                this.picture = this.pictures[this.times];
                this.target   = this.picture[0];//在中间
            }
        },

        clickRight(){
            // console.log(this.times);
            this.times = this.times + 1;
            var picturesNumber = Object.getOwnPropertyNames(this.pictures).length-2;
            // console.log("picturesNumber:",picturesNumber);
            // console.log("this.times:",this.times);
            if(this.times > picturesNumber-1){
                this.times   = 0;
                // console.log(this.times);
                this.picture = this.pictures[this.times];
                this.target  = this.picture[0];//右边越界
            }else{
                this.picture = this.pictures[this.times];
                // console.log(this.picture);
                this.target  = this.picture[0];//在中间
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
        },

    },
    computed:{
        img(){
            return this.target;
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .showcard{
        width: 80%;
        height: 40rem;
    }
</style>
