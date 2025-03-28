import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/members', name: 'members', component: Members },
    { path: '/videos', component: Videos, name: 'vi' },

    /* 동적 라우트 */
    {
      path: '/members/:id',
      name: 'members/id',
      component: MemberInfo,
      beforeEnter: (to, from) => {
        // members/:id 경로는 /members에서만 접근 가능
        if (from.name !== 'members' && from.name !== 'members/id') {
          return false;
        }
      },
    },

    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
