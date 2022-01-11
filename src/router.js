import { createRouter,createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Game from './pages/Game.vue';
import About from './pages/About.vue';
import Support from './pages/Support.vue';
import TemplateHome from './pages/layer/TemplateHome.vue'
import PostShow from './pages/layer/Post/PostShow.vue';
import Posts from './pages/layer/Post/Posts.vue';
import CommentList from './pages/layer/comment/CommentList.vue';

const routes = [
    {path:"/" , name:"home", component:TemplateHome, children:[
        {path:"" , name:"home", component:Home},
        { path:'/:id' , name:'PostId', component:PostShow },
        { path:'/Posts' , name:'Posts', component:Posts },
        { path:'/Comment' , name:'Comment', component:CommentList },
    ]},
    
    {path:"/Game" , name:"game", component:Game},
    {path:"/About" , name:"About", component:About},
    {path:"/Support" , name:"Support", component:Support}

];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;