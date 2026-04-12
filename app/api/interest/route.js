import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { parent, event } = await request.json();

    if (!parent?.firstName || !parent?.lastName || !parent?.email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }
    if (!event?.id) {
      return NextResponse.json({ error: "Please select an event." }, { status: 400 });
    }

    // Log interest signup — visible in Vercel Dashboard → Logs
    console.log("=== NEW INTEREST SIGNUP ===");
    console.log(`Event: ${event.location} (${event.city}) — ${event.dates}`);
    console.log(`Name: ${parent.firstName} ${parent.lastName}`);
    console.log(`Email: ${parent.email}`);
    console.log(`Phone: ${parent.phone || "Not provided"}`);
    console.log(`Event ID: ${event.id}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("===========================");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Interest signup error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
