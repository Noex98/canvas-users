import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyCEx1woibK7ZJfnP7dqWYg7OxUuPeSZ2_c",
    authDomain: "canvas-users.firebaseapp.com",
    projectId: "canvas-users",
    storageBucket: "canvas-users.appspot.com",
    messagingSenderId: "955226736450",
    appId: "1:955226736450:web:ac764c37af163f5cffeadb"
}

export const app = initializeApp(config)
export const firestore = getFirestore(app)