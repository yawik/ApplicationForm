
const routes = [
  {
    path: '/:lang',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'applicationForm',
        component: () => import('pages/PageApply.vue')
      },
      {
        path: 'success',
        name: 'submitSuccessful',
        component: () => import('pages/SubmitSuccessful.vue')
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
