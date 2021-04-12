const mongoose = require("mongoose");

const AppConstants = require("./app/constants/App");

if (AppConstants.DB_HOST) {
    mongoose
        .connect(AppConstants.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('[GOOD] - Connection established');
        })
        .catch((err) => {
            console.log(JSON.stringify(err));
        });
} else {
    throw Error("[BAD] - Application couldn't find DB_HOST env configuration.")
}