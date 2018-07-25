import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/home/home.vue"


Vue.use(VueRouter)

const routes = [
	{
    	path:'/home',
    	name:'home',
    	component:Home,
        children: [
        {
                    /*
                        当 '/home' 时匹配成功，表示不匹配下一级路由时的默认显示
                    */
                    path:'',
                    component: Home
        }]
    },
    {
        path: '/',
        redirect: '/home'
    }
]


var router =  new VueRouter({
    mode:'history',         //历史
    base: '/app',           //基路径
    routes:[
         {path:'/home',
         component: Home,
         props: true,
         }
    ]
});
export default router;
