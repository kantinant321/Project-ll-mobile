function m() {
    var db = firebase.firestore();
    db.collection("news")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var num = `${doc.data().No}`
                var card =
                    `<div class="card">
          <img class="card-img-top" src="${doc.data().URL}" width="375" height="200" alt="">
          <div class="card-doby">
          <h2 class="card-title"><B>${doc.data().Head}</B></h2>
             <h4 class="card-title">${doc.data().news}</h4>
             </div>
        </div>
        `
                $("#D" + num).append(card);

            })
        })
};

$(function() {
    var db = firebase.firestore();
    db.collection("poster").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            var num = `${doc.data().No}`
            var card = ` <img src="${doc.data().URL}" width="375" height="200" id="m1">
              `;
            $("#m" + num).append(card);
        });
    })
})

$(function() {
    var db = firebase.firestore();
    db.collection("valo").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            var num = `${doc.data().No}`
            var card = ` <img src="${doc.data().URL}" width="80" height="70" id="a1">
              `;
            $("#a" + num).append(card);
        });
    })
})


var db = firebase.firestore();
db.collection("news")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var c = `${doc.data().No}`
            var card =
                `<div class="card">
      <img class="card-img-top" src="${doc.data().URL}" alt="">
      <div class="card-doby">
      <p class="card-text">${doc.data().Head}</p>
         </div>
    </div>`
            $("#list2" + c).append(card);
        })
    });