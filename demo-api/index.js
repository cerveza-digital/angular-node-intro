const express = require('express');
const bodyParser = require('body-parser');
const { UserService } = require('./services');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());

app.get('/ping', (req, res, next) => {
    res.send('pong');
    next();
})


app.get('/users', (req, res, next) => {

    const userService = new UserService();
    const data = userService.getAll();
    res.json(data);
    next();
})

app.get('/users/:id', (req, res, next) => {
    const userService = new UserService();
    const data = userService.getById(req.params.id);
    res.json(data);
    next();
})

app.post('/users', (req, res, next) => {
    const userService = new UserService();
    const data = userService.insert(req.body);
    res.json(data);
    next();
})

app.put('/users/:id', (req, res, next) => {
    const userService = new UserService();
    userService.update(req.params.id, req.body);
    res.send();
    next();
})

app.delete('/users/:id', (req, res, next) => {
    const userService = new UserService();
    userService.delete(req.params.id);
    res.send();
    next();
})

app.listen(port, () => console.log(`Mi primer servidor esta corriendo en el puerto ${port}!`));