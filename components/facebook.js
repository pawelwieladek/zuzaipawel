function attachScript() {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

export async function initialize() {
    return await new Promise((resolve) => {
        attachScript();
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '376082736786225',
                cookie: true,
                xfbml: true,
                status: true,
                version: 'v9.0'
            });
            resolve();
        }
    });
}

export async function login() {
    return new Promise((resolve, reject) => {
        FB.login(response => {
            const { authResponse } = response;
            if (!authResponse) {
                return reject();
            }
            return resolve(authResponse);
        });
    })
}

export async function getApiMe() {
    return new Promise((resolve, reject) => {
        FB.api('/me', (response) => {
            const { id, name, error } = response;
            if (error) {
                return reject(error);
            }
            return resolve({ id, name });
        });
    })
}

export async function getLoginStatus() {
    return new Promise((resolve) => {
        FB.getLoginStatus(response => {
            const { status } = response;
            return resolve(status);
        });
    })
}

export async function checkConnected() {
    try {
        const status = await getLoginStatus();
        if (status !== 'connected') {
            return await login();
        }
    } catch (error) {
        return null;
    }
}