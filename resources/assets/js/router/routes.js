const Welcome = () => import('~/pages/welcome');

const Login = () => import('~/pages/auth/login');
const Register = () => import('~/pages/auth/register');
const PasswordReset = () => import('~/pages/auth/password/reset');
const PasswordRequest = () => import('~/pages/auth/password/email');


const Lists = () => import('~/pages/lists/index');
const List = () => import('~/pages/lists/list');


const Settings = () => import('~/pages/settings/index');
const SettingsProfile = () => import('~/pages/settings/profile');
const SettingsPassword = () => import('~/pages/settings/password');

export default [
  { path: '/', name: 'welcome', component: Welcome },

  ...middleware('guest', [
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/password/reset', name: 'password.request', component: PasswordRequest },
    { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset }
  ]),

  ...middleware('auth', [
    { path: '/settings', component: Settings, children: [
      { path: '', redirect: { name: 'settings.profile' }},
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword }
    ] },
    { path: '/lists', name: 'lists', component: Lists, children: [
      { path: ':id', name: 'lists.show', props: true, component: List},
      // { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      // { path: 'password', name: 'settings.password', component: SettingsPassword }
    ] }

    // ...middleware('admin', [
    //   { path: '/admin', name: 'admin', component: require('~/pages/admin') }
    // ])
    // { path: '/example', name: 'example', component: require('~/pages/example'), middleware: ['admin'] },
  ]),

  { path: '*', name: 'page.not_found', component: require('~/pages/errors/404.vue') }
]

/**
 * @param  {String|Function} middleware
 * @param  {Array} routes
 * @return {Array}
 */
function middleware (middleware, routes) {
  routes.forEach(route =>
    (route.middleware || (route.middleware = [])).unshift(middleware)
  )
  return routes
}
