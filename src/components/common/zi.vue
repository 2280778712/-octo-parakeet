<template>
  <div class="dialog">
    <div class="dialog-cover back" v-if="isShow" @click="closeMyself"></div>
    <transition name="drop">
    <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}" v-if="isShow">
        <div class="dialog_head">
            <slot name="header"></slot>
        </div>
          <div class="dialog_main" :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
            <slot name="main"></slot>
          </div>
          <div class="foot_close" @click="closeMyself">
              <div class="close_img back"></div>
          </div>
        </div>
    </transition>
  </div>
</template> 

<script>
export default{
  data(){
    return{
      
    }
  },
	methods: {
	    closeMyself() {
	      this.$emit("on-close");
		    }
		},
	props: {
  	    isShow:{ 
  		      type: Boolean,
  		      required: true
  	    },
  	    widNum:{ 
  		      type: Number,
  		      default:86.5
  	    },
  	    leftSite:{
  		      type: Number,
  		      default:6.5
  	    },
  	    topDistance: {
  		      type: Number,
  		      default:35
  	    },
  	    pdt:{
  		      type: Number,
  		      default:22
  	    },
  	    pdb:{
  		      type: Number,
  		      default:47
  	    }
  		}
	}
</script>

<style scoped>
  .dialog {
    position: relative;
    color: black;
    font-size: 1rem;
  }
  .dialog_head{
    position: absolute;
    top:2rem;
    left: 4rem;
  }
  .dialog-cover{
    background: rgba(255,255,255, 0.5);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content{
    position: fixed;
    top: 35%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 300;
    background:url('~@/assets/img/bigwindow.png') center center no-repeat;
    background-size: cover;
 }
 .dialog_main{
  position: absolute;
  top: 3.7rem;
  padding: 0.8rem;
  text-align: justify;
  text-indent: 2em;
 }
 .foot_close{
 	width: 3.1rem;
 	height: 4.5rem;
  position: absolute;
  float: left;
  top:0rem;
  left:17.2rem;
 }
</style>