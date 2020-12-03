import deburr from 'lodash.deburr';

export async function initialize() {
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

export async function setUserData(id, payload) {
    const timestamp = Date.now();
    await window.firebase.database().ref('users/' + id).set({
        ...payload,
        timestamp
    });
}


export async function getUserData(id) {
    return await window.firebase.database()
        .ref('users/' + id)
        .once('value')
        .then(snapshot => snapshot.val());
}