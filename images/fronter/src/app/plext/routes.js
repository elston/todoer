// ..
export const prepRoutes = (url,routes) => routes.map(({path,component}) => ({
    path:'/'+url+path,
    component:component
}))