import Vue from 'vue';
import App from './app';
import router from "./routers";

const root = document.createElement("div");
document.body.appendChild(root);


new Vue({
    el:"#app",
    router,
    components: { App },
    template: '<App/>'
})

// new Vue({
//     router,
//     render:h=>h(App),
// }).$mount(root)