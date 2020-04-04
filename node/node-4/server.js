const express = require("express");
const graphql = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema");

const DB_URI = "mongodb://localhost:27017/test";
const PORT = 3000;
const GRAPHQL_ENDPOINT = "/graphql";

mongoose
    .connect(DB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log(`Connected to db on ${DB_URI}`))
    .catch(console.error);

const app = express();

app.post(
    GRAPHQL_ENDPOINT,
    graphql({
        schema: schema,
        graphiql: true
    })
);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}${GRAPHQL_ENDPOINT}`);
});
