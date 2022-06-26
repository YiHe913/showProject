import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/login', component: '@/pages/login' },
    { path: '/list', component: '@/pages/showPage' },
    { path: '/test', component: '@/pages/test' },
  ],
  fastRefresh: {},
});
