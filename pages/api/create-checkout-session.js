const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const session = await stripe.checkout.sessions.create({
  successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: window.location.origin,
  payment_method_types: ["card"],
  line_items: [{ price: "price_1Ios3wG3MtoJKZ2HuNHjxZRD", quantity: 1 }],
  mode: "payment",
});
res.json({ id: session.id });
