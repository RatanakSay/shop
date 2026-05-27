
const express = require("express");      // 🔴 LINE 1
const cors = require("cors");            // 🔴 LINE 2
const { sendOrderToTelegram } = require("./tbot"); // 🔴 LINE 3

const app = express();                   // 🔴 LINE 4

app.use(cors());                         // 🔴 LINE 5
app.use(express.json());                 // 🔴 LINE 6


// 🧪 TEST ROUTE (put here after middleware)
app.get("/test", async (req, res) => {

    try {
        await sendOrderToTelegram({
            username: "TEST USER",
            edition: "Java",
            email: "test@mail.com",
            code: "NONE",
            telegram: "@test",
            rank: "VIP",
            price: "$5"
        });

        res.send("Telegram test sent!");

    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});


// 🧾 MAIN ORDER ROUTE
app.post("/send-order", async (req, res) => {

    console.log("ORDER RECEIVED:", req.body);

    try {

        await sendOrderToTelegram(req.body);

        res.send("Order sent to Telegram!");

    } catch (err) {

        console.log(err);

        res.status(500).send("Failed");
    }
});


// 🌍 IMPORTANT: PORT (PUT AT VERY BOTTOM)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
