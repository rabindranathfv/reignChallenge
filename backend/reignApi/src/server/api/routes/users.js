const express = require('express');
const userCtrl = require('../../controllers/user.ctrl');
const { checkToken, checkAdMinRole } = require('../middleware/auth');

const app = express();

/* middlewares

1.-checkToken
2.-checkAdMinRole

*/

app.get('/v1/users', userCtrl.getUsers);

app.get('/v1/users/:id', userCtrl.getUserById);

app.post('/v1/users', userCtrl.postCreateUser);

app.put('/v1/users/password', userCtrl.updateUserPassword);

app.put('/v1/users/:id', userCtrl.updateUser);

/* hard delete */
app.delete('/v1/users/:id', userCtrl.hardDeleteUser);

/* soft delete */
app.delete('/v1/users/2/:id', userCtrl.softDeleteUser);

module.exports = app;