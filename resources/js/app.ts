import '../css/app.css';

import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import { initializeTheme } from './composables/useAppearance';
import NavLayout from './layouts/NavLayout.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Profile from './pages/Profile.vue';
import Projects from './pages/Projects.vue';
import root from './pages/root.vue';
// import {ref} from 'vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `Portfolio ${title}`,
    // title: (title) => (title ? `${title} - ${appName}` : appName),
    // resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    resolve: async (name) => {
    const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue');
    const page = (await pages[`./pages/${name}.vue`]());
    page.default.layout = page.default.layout || NavLayout;
    return page;
    
},
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);

    },
    // progress: {
    //     color: "#4B5563",
    //     includeCSS: true,
    //     showSpinner: true,
        
    // },
});

// This will set light / dark mode on page load...
initializeTheme();
