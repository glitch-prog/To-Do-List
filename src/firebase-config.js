import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdTxBuPLCotiO38J3MEZ8RtqCsuIbMtTM",
    authDomain: "todo-859d4.firebaseapp.com",
    projectId: "todo-859d4",
    storageBucket: "todo-859d4.appspot.com",
    messagingSenderId: "798234259358",
    appId: "1:798234259358:web:a5426dfd1bfb50f228708f"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);