import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FcGoogle, CoFacebook, BiGithub } from "oh-vue-icons/icons";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAtFEA6KL4HLJPwv05rFz58d1YkQiwXzwA",
    authDomain: "proyecto-final-respirar-web.firebaseapp.com",
    projectId: "proyecto-final-respirar-web",
    storageBucket: "proyecto-final-respirar-web.appspot.com",
    messagingSenderId: "1034296667295",
    appId: "1:1034296667295:web:9467c7ab72373c0acb46aa",
    measurementId: "G-LR5LMNMZJF"
}

addIcons(FcGoogle, CoFacebook, BiGithub);

initializeApp( firebaseConfig );

const app = createApp( App )
app.use( router )
app.use( createPinia )
app.component("v-icon", OhVueIcon);
app.mount('#app')
