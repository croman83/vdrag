import VueRouter    from 'vue-router'

//Define route components

// lazy load components
const Room = (resolve) => require(['./components/Room.vue'], resolve)
const Contacts = (resolve) => require(['./components/contacts.vue'], resolve)
const Gallery = (resolve) => require(['./components/Gallery.vue'], resolve)
const News = (resolve) => require(['./components/News.vue'], resolve)
const Catalog = (resolve) => require(['./components/Catalog.vue'], resolve)
const Product = (resolve) => require(['./components/Product.vue'], resolve)


export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [
        { path: '/', component: Room },
        { path: '/contacts', component: Contacts },
        { path: '/gallery', component: Gallery },
        { path: '/news', component: News },
        { path: '/catalog', component: Catalog },
        { path: '/product', component: Product },
      ]
});




