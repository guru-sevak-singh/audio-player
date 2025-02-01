import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js";

// Firebase Config (Same as firebase.js)
firebase.initializeApp({
    apiKey: "AIzaSyDsYOlvBpb47Yy0PF6HnSy6aO-NHBIm04s",
    authDomain: "scan2food-3c349.firebaseapp.com",
    projectId: "scan2food-3c349",
    storageBucket: "scan2food-3c349.firebasestorage.app",
    messagingSenderId: "328225685036",
    appId: "1:328225685036:web:d3780db6a327b5ca315b89",
    measurementId: "G-DJ3L7HSNM3"
});

// Initialize Messaging
const messaging = firebase.messaging();

// Handle Background Push Notifications
messaging.onBackgroundMessage(payload => {
    console.log("Received background message:", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "https://guru-sevak-singh.github.io/scan2food-static/static/assets/images/brand/Scan2FoodFabIcon.png"
    });
});
