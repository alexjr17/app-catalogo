import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store).use(router)
    .mount('#app')
