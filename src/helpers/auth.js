
import { ref, firebaseAuth } from '../services/firebase'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`padres/${user.email}`)
    .set({
      mail: user.email,
      uid: user.uid,
      nombre: user.displayName
    })
    .then(() => user)
}
