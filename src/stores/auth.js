import { defineStore } from 'pinia'
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider, GithubAuthProvider
} from 'firebase/auth'
import router from '@/router'


const useAuth = defineStore(
    'auth',
    {
        state: () => {
            return {
                token: '',
                user: undefined
            }
        },
        actions: {
            async loginUserWithMail( email, password ) {
                try {
                    const { user } = await signInWithEmailAndPassword( getAuth(), email.value, password.value )
                    this.user = { email: user.email, uid: user.uid }
                    await router.push( '/map' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async loginUserWithGoogle( email, password ) {
                try {
                    const userCredential = await signInWithPopup( getAuth(), new GoogleAuthProvider() )
                    this.token = GoogleAuthProvider.credentialFromResult( userCredential ).accessToken
                    await router.push( '/map' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async loginUserWithFacebook( email, password ) {
                try {
                    const userCredential = await signInWithPopup( getAuth(), new FacebookAuthProvider() )
                    this.token = FacebookAuthProvider.credentialFromResult( userCredential ).accessToken
                    await router.push( '/map' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                }
            },
            async loginUserWithGithub( email, password ) {
                try {
                    const userCredential = await signInWithPopup( getAuth(), new GithubAuthProvider() )
                    this.token = GithubAuthProvider.credentialFromResult( userCredential ).accessToken
                    await router.push( '/map' )
                } catch ( e ) {
                    console.log( `Inicio de Sesion Fallido: ${ e }` )
                } finally {
                    console.log( this.token )
                }
            }
        }
    }
)

export default useAuth


