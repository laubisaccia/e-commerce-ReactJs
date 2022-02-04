import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyAILp78h8qWF8TMmAUfhZ6GXcjanz8z98s",
    authDomain: "ecommercemdt-db939.firebaseapp.com",
    projectId: "ecommercemdt-db939",
    storageBucket: "ecommercemdt-db939.appspot.com",
    messagingSenderId: "1025415344297",
    appId: "1:1025415344297:web:b357246078597de25579b8",
    measurementId: "G-9TQ2TCPG81"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}










