  // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    projectId: "projectID",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "1:442287311014:web:3ab5eff500023a2764cc67"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    
    export default app
