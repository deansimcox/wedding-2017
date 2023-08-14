import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Details from '@/components/Details';
import Rsvp from '@/components/Rsvp';
import Accommodation from '@/components/Accommodation';
import Directions from '@/components/Directions';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/accommodation',
      name: 'Accommodation',
      component: Accommodation,
    },
    {
      path: '/directions',
      name: 'Directions',
      component: Directions,
    },
    {
      path: '/rsvp',
      name: 'Rsvp',
      component: Rsvp,
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;