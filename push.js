var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "<Public Key>",
    "privateKey": "<Private Key>",
};

webPush.setVapidDetails(
    'https://github.com/Rostadhi',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "<Endpoint URL>",
    "keys": {
        "p256dh": "<p256dh Key>",
        "auth": "<Auth Key>"
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options =  {
    gcmAPIKey: '<FCM Sender ID>',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);