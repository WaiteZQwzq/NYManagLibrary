import Vue from "vue"
import VueRouter from "vue-router";
import rank from "../components/rank/rank.vue";
import recommend from "../components/recommend/recommend.vue";
import search from "../components/search/search.vue";
import singer from "../components/singer/singer.vue"

Vue.use(VueRouter);//引入路由中间件

export default new VueRouter(Option,{
    routes:[{
        path:"/",
        redirect: "/recommend"
    },{
        path: "/rank",
        component:rank
    },{
        path: "/search",
        component:search
    },{
        path: "/singer",
        component:singer
    },{
        path: "/recommend",
        component:recommend
    }]
})