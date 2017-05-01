import VueRouter    from 'vue-router'

//Define route components

// lazy load components
const Room = (resolve) => require(['./components/Room.vue'], resolve)
const Contacts = (resolve) => require(['./components/contacts.vue'], resolve)
const Gallery = (resolve) => require(['./components/Gallery.vue'], resolve)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [
        { path: '/', component: Room },
        { path: '/contacts', component: Contacts },
        { path: '/gallery', component: Gallery },
      ]
});
