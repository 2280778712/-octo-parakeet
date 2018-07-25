<template>
  <div class="dialog">
    <div class="dialog-cover back" v-if="isShow" @click="closeMyself"></div>
    <transition name="drop">
    <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}" v-if="isShow">
        <div class="dialog_head">
            <slot name="header">提示信息</slot>
        </div>
          <div class="dialog_main" :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
            <slot name="main">弹窗内容</slot>
          </div>
          <div class="foot_close" @click="closeMyself">
              <div class="close_img back">关闭弹窗</div>
          </div>
        </div>
    </transition>
  </div>
</template> 

<script>
export default{
	methods: {
	    closeMyself() {
	      this.$emit("on-close");
		    }
		},
	props: {
	    isShow:{ 
		      type: Boolean,
		      default: false,
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
    width: 100%;
    height: 200px;
  }
  .dialog_head{
  	background-color: yellow;
  }
  .dialog-cover {
    /*background: rgba(0,0,0, 0.8);*/
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
    background-color: white;
 }
 .foot_close{
 	width: 50%;
 	height: 20px;
 	background-color: red;
 }
</style>