import { useEffect } from 'react';
import deburr from 'lodash.deburr';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

async function checkFirebaseInitialized() {
    if ((window.firebase.apps.length > 0)) {
        return Promise.resolve();
    }
    await window.firebase.initializeApp({
        apiKey: "AIzaSyDJT7y2oilDCau9P-eBj8JoqLgeLwvL-nc",
        authDomain: "zuza-i-pawel.firebaseapp.com",
        databaseURL: "https://zuza-i-pawel.firebaseio.com",
        projectId: "zuza-i-pawel",
        storageBucket: "zuza-i-pawel.appspot.com",
        messagingSenderId: "435795640258",
        appId: "1:435795640258:web:35c8b99a7f49a40272205b"
    });
}

async function writeUserData(userId, name, presence) {
    await checkFirebaseInitialized();

    const timestamp = Date.now();
    const id = deburr(name).replace(' ', '-').toLowerCase();
    await window.firebase.database().ref('users/' + id).set({
        name,
        id: userId,
        presence,
        timestamp
    });
}


async function getUserData(id) {
    checkFirebaseInitialized();

    return await window.firebase.database()
        .ref('users/' + id)
        .once('value')
        .then(snapshot => snapshot.val());
}

function attachFacebookScript() {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

async function checkFacebookInitialized() {
    if (window.FB) {
        return Promise.resolve();
    }
    return await new Promise((resolve) => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '376082736786225',
                cookie: true,
                xfbml: true,
                version: 'v9.0'
            });
            resolve();
        }
    });
}

async function loginWithFacebook() {
    await checkFacebookInitialized();
    return new Promise((resolve) => {
        FB.login(response => {
            if (response.authResponse) {
                resolve();
            }
        });
    })
}

async function getFacebookUserData() {
    await loginWithFacebook();
    // TODO: check if user has already connected
    return new Promise((resolve) => {
        FB.api('/me', function (reponse) {
            const { id, name } = reponse;
            resolve({id, name });
        });
    })
}

async function acceptInvitation() {
    const { id, name } = await getFacebookUserData();
    await writeUserData(id, name, true);
}

async function rejectInvitation() {
    const { id, name } = await getFacebookUserData();
    await writeUserData(id, name, false);
}

export default function Rsvp() {
    useEffect(() => {
        attachFacebookScript();
        checkFacebookInitialized();
    })

    return (
        <div>
            <h4>Czy będziesz na naszym ślubie?</h4>
            <Button variant="contained" color="primary" onClick={acceptInvitation}>
                Tak
            </Button>
            <Button variant="contained" color="secondary" onClick={rejectInvitation}>
                Nie
            </Button>
        </div>
    );
}