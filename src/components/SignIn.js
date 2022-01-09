import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import GoogleButton from 'react-google-button'
import 'bootstrap/dist/css/bootstrap.css'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithRedirect(provider)
    }
    return (


        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            
            
            <GoogleButton
             label='Google ile giriş yap'
            onClick={signInWithGoogle}/>
    
        </div>
    )
}

export default SignIn

