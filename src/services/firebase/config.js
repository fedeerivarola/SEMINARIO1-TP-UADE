import firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyA1s4mWBEUL-P7lLccedYn5X1ymcnq927U",
    authDomain: "seminario-tp.firebaseapp.com",
    databaseURL: "https://seminario-tp.firebaseio.com",
    projectId: "seminario-tp",
    storageBucket: "seminario-tp.appspot.com",
    messagingSenderId: "865969260541",
    appId: "1:865969260541:web:72c9aabfb720cedc5afb94",
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const db = firebase.firestore()
export const dbPadres = db.collection("padres");
export const dbHijos = db.collection("hijos");
export const dbMov = db.collection("movimientos");
export const dbMorfi = db.collection("alimentos");
export const fieldValue = firebase.firestore.FieldValue
export const avatar = firebase.storage().ref().child("profile");