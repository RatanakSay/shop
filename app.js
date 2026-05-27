const { Client } = require("pg");

const client = new Client({
    host: "148.113.217.63",
    port: 3306,
    user: "u62746_vV6cInXx6q",
    password: "sy.5vks338ex.lG1TxI^f91=",
    database: "s62746_website",
    ssl: false
});

client.connect()
    .then(() => {
        console.log("Connected to PostgreSQL!");
    })
    .catch((err) => {
        console.error("Connection error:", err);
    });