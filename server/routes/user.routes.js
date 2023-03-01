const UserControllers = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get('/api/getusers', UserControllers.getUsers);
    app.get('/api/getuser/:id', UserControllers.getOneUser);
    app.post('/api/createuser', UserControllers.createUser);
    app.delete('/api/deleteuser/:id', UserControllers.deleteUser);
}
