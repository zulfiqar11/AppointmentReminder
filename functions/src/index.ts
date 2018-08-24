import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase Zulfiqar!");

  // Import Admin SDK
  var admin = require("firebase-admin");
  admin.initializeApp(functions.config().firebase);

  // Get a database reference to our posts
  var db = admin.database();
  var ref = db.ref("users/reminders/BEGXFKfOBlagPRdYZ106kRz4MkD3/-LDs_otK4Az2_Ee0KXym/contmobile");

  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    console.log("im here 123");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});
