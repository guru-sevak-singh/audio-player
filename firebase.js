const firebaseConfig = {
    apiKey: "AIzaSyDsYOlvBpb47Yy0PF6HnSy6aO-NHBIm04s",
    authDomain: "scan2food-3c349.firebaseapp.com",
    projectId: "scan2food-3c349",
    storageBucket: "scan2food-3c349.firebasestorage.app",
    messagingSenderId: "328225685036",
    appId: "1:328225685036:web:d3780db6a327b5ca315b89",
    measurementId: "G-DJ3L7HSNM3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Request Permission for Notifications
function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
            getFCMToken();
        } else {
            console.log("Permission denied.");
        }
    });
}

// Get Firebase Cloud Messaging Token
function getFCMToken() {
    messaging.getToken({ vapidKey: "YOUR_PUBLIC_VAPID_KEY" })
    .then(token => {
        console.log("FCM Token:", token);
        document.getElementById("token").textContent = "FCM Token: " + token;
    })
    .catch(err => {
        console.error("Error getting FCM token:", err);
    });
}

// Handle Incoming Messages
messaging.onMessage(payload => {
    console.log("Message received:", payload);
    alert(payload.notification.title + "\n" + payload.notification.body);
});
