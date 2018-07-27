import Vue from 'vue'
import VueRouter from 'vue-router'
import PageTransition from '@/components/transform'
import Firstpage from "@/components/first_page/first_page"
import Contract from "@/components/first_page/contract"
import Home from "@/components/home/home"

VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'PageTransition',
        component: PageTransition,
        children: [{
                path:'',
                component:Home
            },{
                path:'/firstpage',
                component:Firstpage
            },{
                path:'/contract',
                component:Contract
            }]
    },,{
            path:'/contract',
            component:Contract
    }
]


var router =  new VueRouter({
    mode:'history',         //历史
    base: '/app',             //基路径
    routes
    // routes:[
    //      {path:'/home',
    //      component: Home,
    //      props: true
    //      },
    //      {path:'/contract',
    //      component: Contract,
    //      props: true
    //      }
    // ]
});

export default router
