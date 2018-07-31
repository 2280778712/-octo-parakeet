<template>
  <div class="dialog" v-if="isShow">
    <div class="dialog-cover back" v-if="isShow" @click="closeMyself" :style="{background:coverColor}"></div>
    <transition name="drop">
    <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',
    left:leftSite+'%',backgroundImage: 'url(' + backimg + ')',
    height:boxHeight+'rem'}" v-if="isShow">
        <div class="dialog_box">
          <slot name="box"></slot>
        </div>
        <div class="dialog_head">
            <slot name="header"></slot>
        </div>
        <div class="dialog_main" :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
            <slot name="main"></slot>
        </div>
        <div class="dialog_img">
            <slot name="proimg"></slot>
        </div>
        <div class="foot_close" @click="closeMyself" :style="{height:closeHeight+'rem',top:topDistance+'%'}">
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
	    closeMyself(){
	      this.$emit("on-close");
        }
		},
	props: {
        backimg:{
            type: String
        },
        coverColor:{
            type:String
        },
        boxHeight:{
            type: Number,
            required: true
        },
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
  		      default:20
        },
        closeHeight:{
          type: Number,
          default:4
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
    top:2.5rem;
    left: 3rem;
  }
  .dialog_box{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .dialog-cover{
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 300;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: auto;
 }
 .dialog_main{
  float: left;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 10rem;
  text-align: justify;
  text-indent: 2em;
 }
 .dialog_img{
   width:19rem;
   height: 10rem;
   margin-left: 0.6rem;
 }
 .dialog_box h2{
   margin-top: 1rem;
 }
 .foot_close{
 	width: 3.1rem;
 	height: 4.5rem;
  position: fixed;
  float: left;
  left:18.5rem;
  right: 0;
  z-index: 100;
  /* background-color: red; */
 }
</style>
