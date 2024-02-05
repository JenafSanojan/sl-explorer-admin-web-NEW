import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6YtPvBMNIF7-Wc76YoGPc4Skbe7r5ewU",
  authDomain: "sl-explorer.firebaseapp.com",
  projectId: "sl-explorer",
  storageBucket: "sl-explorer.appspot.com",
  messagingSenderId: "869319262185",
  appId: "1:869319262185:web:7f7b564a90093c0da41578"
};

const app = initializeApp(firebaseConfig); 
export const imageDb = getStorage(app);