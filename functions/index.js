const functions = require("firebase-functions");

const express = require('express')
const cors = require('core')
const stripe = require('stripe')
('sk_test_51KMo6QDHzD21WqCnTm3g9gaSXvSCXgfq1LqxZB7RddXeABYlbfNsWb4LTHracefBpFAYowBa3Hfw72OoswUHpZtb00zQaaEmsH')

// To set up an API

// App config
const app = express()

// Middleware
app.use(cors({origin: true}))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('Payment Request received', total);

  const paymentIntent = await stripe.paymentIntents.create({
     amount: total, //subunits of the currency
     currency: 'usd',
  })

  //response
  response.status(201).send({
     clientSecret: paymentIntent.client_secret
  })

})

// Listen command
exports.api = functions.https.onRequest(app)