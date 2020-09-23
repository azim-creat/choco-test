import Vue from 'vue';
import VueRouter from 'vue-router';
import HellowWord from "@/components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/HellowWord', component: HellowWord, name: 'HellowWord' },
];

export const router = new VueRouter({
  routes,
  scrollBehavior(to) {
    if (to.path == '/HellowWord') {
      return { x: 0, y: 0 };
    }
  },
});

