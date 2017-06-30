// const Hello = r => require.ensure([], () => r(require('@/views/home/home')), 'home')
// const login = r => require.ensure([], () => r(require('@/views/user/user-login')), 'login')
// const pageOne = r => require.ensure([], () => r(require('@/views/pageOne/pageOne')), 'pageOne')
// const pageTwo = r => require.ensure([], () => r(require('@/views/pageTwo/pageTwo')), 'pageTwo')

export default [
  {
    path: '/',
    meta: {
      title: 'Home'
    },
    component: (resolve) => require(['@/views/home/home'], resolve)
  }, {
    path: '/login',
    meta: {
      title: 'login'
    },
    component: (resolve) => require(['@/views/user/user-login'], resolve)
  }, {
    path: '/pageOne',
    meta: {
      title: 'pageOne'
    },
    component: (resolve) => require(['@/views/pageOne/pageOne'], resolve)
  }, {
    path: '/pageTwo',
    meta: {
      title: 'pageTwo'
    },
    component: (resolve) => require(['@/views/pageTwo/pageTwo'], resolve)
  }
]
