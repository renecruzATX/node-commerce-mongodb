const getDb = require ('../util/database');
const ObjectId = require('mongodb').ObjectID;

class User {
    constructor(username, email) {
        this.name = username;
        this.email = email;
    }

    save() {
        const db = getDb();
        return db.collection('users').insertOne(this);
    }

    static findById(userId) {
        const db = getDb();
        return db.collection('users').findOne({_id: ObjectId(userId)});
    }

}

module.exports = User;