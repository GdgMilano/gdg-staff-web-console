import firebase from 'firebase'

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function logout() {
  firebase.auth().signOut().then(function () {
    console.log('logged out')
  }).catch(function (error) {
    console.log('error while loggin out', error)
  });
}