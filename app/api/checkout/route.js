import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const FIRST_PRICE_CENTS = 4999;
const ADDITIONAL_PRICE_CENTS = 3999;

export async function POST(request) {
  try {
    const { parent, athletes } = await request.json();

    if (!parent?.firstName || !parent?.lastName || !parent?.email) {
      return NextResponse.json({ error: "Parent information is required." }, { status: 400 });
    }
    if (!athletes?.length) {
      return NextResponse.json({ error: "At least one athlete is required." }, { status: 400 });
    }

    const lineItems = athletes.map((athlete, idx) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `${athlete.sport} Combine — ${athlete.firstName} ${athlete.lastName} (Age ${athlete.age})`,
          description: idx === 0
            ? "Hudson Athletics Inaugural Combine · May 21–22, 2026 · Kuntz Stadium"
            : "Hudson Athletics Inaugural Combine · Multi-athlete discount applied",
        },
        unit_amount: idx === 0 ? FIRST_PRICE_CENTS : ADDITIONAL_PRICE_CENTS,
      },
      quantity: 1,
    }));

    const origin = request.headers.get("origin") || "https://hudsonathletics.us";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: parent.email,
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}?success=true`,
      cancel_url: `${origin}?canceled=true`,
      metadata: {
        parent_name: `${parent.firstName} ${parent.lastName}`,
        parent_phone: parent.phone || "",
        athlete_count: String(athletes.length),
        athletes_summary: athletes.map(a => `${a.firstName} ${a.lastName} | ${a.sport} | Age ${a.age}`).join(" || "),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
