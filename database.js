/* */
const mongoose = require('mongoose');

/* Seta variavel de ambiente com string do banco de dados */
const AppConstants = require('./app/constants/app');

/* Caso possua URL configurada */
if (AppConstants.DB_HOST) {
    mongoose
        .connect(AppConstants.DB_HOST, {useNewUrlParser: true})
        .then(() => {
            console.log('[GOOD] - Connection established');
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        });
} else {
    throw Error("[BAD] - Application couldn't find DB_HOST env configuration.")
}