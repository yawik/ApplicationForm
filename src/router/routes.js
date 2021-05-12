
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('pages/Home.vue'),
  },
  {
    path: '/:lang',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'success',
        name: 'submitSuccessful',
        component: () => import('pages/SubmitSuccessful.vue')
      },
      {
        // must be after /success - otherwise :jobid will match "success"
        path: ':jobid?',
        name: 'applicationForm',
        component: () => import('pages/PageApply.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
