const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
var db = admin.firestore();

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello world!");
});

exports.getScreams = functions.https.onRequest((req, res) => {
  db.collection('screams').get()
    .then(data => {
      let screams = [];
      data.forEach(doc => {
        screams.push(doc.data());
      });
      return res.json(screams);
    })
    .catch(err => console.error(err));
});