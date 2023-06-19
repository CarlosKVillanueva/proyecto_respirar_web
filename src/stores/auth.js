import { defineStore } from 'pinia'
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import router from '@/router'


const useAuth = defineStore(
    'auth',
    {
        state: () => {
            return {
                token: '',
                user: null
            }
        },
        actions: {
            async loginUserWithMail( email, password ) {
                try {
                    const { user } = await signInWithEmailAndPassword( getAuth(), email.value, password.value )
                    this.user = { email: user.email, uid: user.uid }
                    await router.push( '/home' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async loginUserWithGoogle( email, password ) {
                try {
                    const userCredential = await signInWithPopup( getAuth(), new GoogleAuthProvider() )
                    this.token = GoogleAuthProvider.credentialFromResult( userCredential ).accessToken
                    await router.push( '/home' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async loginUserWithFacebook( email, password ) {
                try {
                    const userCredential = await signInWithPopup( getAuth(), new FacebookAuthProvider() )
                    this.token = FacebookAuthProvider.credentialFromResult( userCredential ).accessToken
                    await router.push( '/home' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async loginUserWithGithub( email, password ) {
                try {
                    const userCredential = await signInWithPopup( getAuth(), new GithubAuthProvider() )
                    this.token = GithubAuthProvider.credentialFromResult( userCredential ).accessToken
                    await router.push( '/home' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async registerUserWithMail( email, password ) {
                try {
                    const { user } = await createUserWithEmailAndPassword( getAuth(), email.value, password.value )
                    this.user = { user: user.email, uid: user.uid }
                    await router.push( '/' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async logoutUser() {
                try {
                    await signOut( getAuth() );
                    this.user = null
                    this.token = ''
                    await router.push( "/login" );
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
        },
        getters: {
            userLogged(state){
                return state.token !== '' || state.user !== null
            }

        }
    }
)

export default useAuth


