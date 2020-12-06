var firebaseConfig = {
  apiKey: "AIzaSyDtr30xjX72IC9uVt9ezey8O8TTxGIhkm8",
  authDomain: "mobilettt-54a51.firebaseapp.com",
  projectId: "mobilettt-54a51",
  storageBucket: "mobilettt-54a51.appspot.com",
  messagingSenderId: "729697129571",
  appId: "1:729697129571:web:bdeaf50fe2dde0b6259456",
  measurementId: "G-YMB18RMDWN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();