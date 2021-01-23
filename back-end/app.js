const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const app = express();

mongoose.connect('mongodb+srv://admin:h79cnA8T@cluster0.tcp6n.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-PINGOTHER, X-Requested-With, Content, Accept, Content-Type, Authorization');
    next();
});

app.use('/api', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
