const loki = require('lokijs');
const db = new loki('db.json');
let userDAL = db.addCollection("users");
class UserService {


    insert(user) {
        const result = userDAL.insert(user);
        db.saveDatabase();
        return result;
    }

    update(id, user) {
        const query = userDAL.get(id);
        query.name = user.name;
        query.age = user.age;
        query.decription = user.decription;
        userDAL.update(query);
        db.saveDatabase();
        return query;
    }

    delete(id) {
        const query = userDAL.get(id);
        userDAL.remove(query);
        db.saveDatabase();
    }

    getById(id) {
        return userDAL.get(id);
    }

    getAll() {
        return userDAL.find();
    }
}

module.exports = UserService;