$(function () {
  var db = firebase.firestore();
  db.collection("pic").get().then((querySnapshot) => {
         
      querySnapshot.forEach((doc) => {
              var num = `${doc.data().listN}`
              var card = ` <img src="${doc.data().URL}" width="375" height="195" id="m1">
              `;
              $("#m" + num).append(card);
          });
      })
})