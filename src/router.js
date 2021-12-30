import { createRouter,createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Game from './pages/Game.vue';
import About from './pages/About.vue';
import Support from './pages/Support.vue'

const routes = [
    {path:"/" , name:"home", component:Home},
    {path:"/Game" , name:"game", component:Game},
    {path:"/About" , name:"About", component:About},
    {path:"/Support" , name:"Support", component:Support}

];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;