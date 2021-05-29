const admin = require("firebase-admin");
const credentials = require("./auth.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: "",
});

const db = admin.firestore();

class Firestore {
  constructor() {
    this.db = db.collection("Person");
  }

  addPerson(name, age) {
    person = { name: name, age: age };
    return this.db.add(person);
  }
}

module.exports = Firestore;
