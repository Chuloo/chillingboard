module.exports = {
    pusher:{
        appId: 'xxxxxx',
        key: 'xxxxxxxxxxxxxxxxxx',
        secret: 'xxxxxxxxxxxxxxxxxxxx',
        cluster: 'xxxx',
        encrypted: true
    }
}

//Create an account with pusher and a new app to obtain app credentials.
//Rememeber to change credential file name and path in server.js
//Also update pusher key in index.js with the key obtained from pusher on app creation