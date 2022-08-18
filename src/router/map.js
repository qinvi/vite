// 只绑定 router.name
const routeNames = {
    home: 'Home',
    about: 'About',
    template: 'Template',
    telDetail: 'TelDetail',
}

// 只绑定 router.path
const routerPath = {
    home: '/',
    about: '/about',
    template: '/template',
    telDetail: '/template/:telId',
}

export { routeNames, routerPath }