import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'


function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#f76459', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ color: 'white', padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Çıkış Yap</Button>
        </div>
    )
}

export default SignOut
