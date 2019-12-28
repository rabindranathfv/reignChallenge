const express = require('express');
const userCtrl = require('../../controllers/user.ctrl');
const { checkToken, checkAdMinRole } = require('../middleware/auth');

const app = express();

/* middlewares

1.-checkToken
2.-checkAdMinRole

*/

app.get('/users', userCtrl.getUsers);

app.get('/users/:id', userCtrl.getUserById);

app.post('/users', userCtrl.postCreateUser);

app.put('/users/password', userCtrl.updateUserPassword);

app.put('/users/:id', userCtrl.updateUser);

/* hard delete */
app.delete('/users/:id', userCtrl.hardDeleteUser);

/* soft delete */
app.delete('/users/2/:id', userCtrl.softDeleteUser);

module.exports = app;