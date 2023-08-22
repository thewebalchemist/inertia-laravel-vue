const { createApp, h } = require('vue');
const { createInertiaApp, Link, Head } = require('@inertiajs/inertia-vue3');
const { InertiaProgress } = require('@inertiajs/progress')
const Layout = require('./Shared/Layout.vue').default;



createInertiaApp({
resolve: async name =>
{
    let page =  (await import(`./Pages/${name}`)).default;

    if (page.layout === undefined){
        page.layout = Layout;
    }

    return page;
    },

setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
    .use(plugin)
    .component('Link', Link)
    .component('Head', Head)
    .mount(el);
},

title: title => 'My App - ' + title,
});


InertiaProgress.init(
    {
        showSpinner: true,
    }
)
