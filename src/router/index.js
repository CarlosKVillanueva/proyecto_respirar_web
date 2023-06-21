import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import useAuth from '@/stores/authStore'
import MapView from '@/views/MapView.vue'
import EstacionView from '@/views/EstacionView.vue'

const router = createRouter( {
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/map',
            name: 'map',
            component: MapView,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/station/:id',
            name: 'station',
            component: EstacionView,
            meta: {
                requireAuth: true

            }
        }
    ]
} )

router.beforeEach( ( to, from, next ) => {
    const userStore = useAuth()


    if ( to.meta.requireAuth && !userStore.userLogged ) {
        next( 'login' )
    } else {
        next()
    }

} )

export default router
