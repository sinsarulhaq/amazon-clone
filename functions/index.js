const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51Kb16zSDyKCzzPwZCuY8Z7weg7aKXyfC5Kttqp8xhzNrQwxkhzIyoSawFGe7iwdE9gFkuVuXet2YYxlXV0hXeCUB00fAsG575g");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("Hello From Cloud")
);

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
    });

    // OK - created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
//sk_test_51KaKiDSF2uDYIQCzSNawcQfdgHPgWDMEnvznDb4qskScQ12Lvgql21tUQWIlVw42OfNs1sarsvgdwP8VAI2zcGkT00PvFbE88H