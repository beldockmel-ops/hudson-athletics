"use client";
import { useState } from "react";

const SPORTS = [
  { name: "Rugby", icon: "🏉" },
  { name: "Soccer", icon: "⚽" },
  { name: "Lacrosse", icon: "🥍" },
  { name: "Football", icon: "🏈" },
];

// ── ADD NEW EVENTS HERE ──────────────────────────────────
// Each event needs: id, location, address, dates, dateLabel, sports
const EVENTS = [
  {
    id: "kuntz-may-2026",
    status: "active",
    location: "Kuntz Stadium",
    city: "Indianapolis, IN",
    address: "1502 W 16th St, Indianapolis, IN 46202",
    dates: "May 21–22, 2026",
    dateLabel: "Thursday & Friday",
    sports: ["Rugby", "Soccer", "Lacrosse", "Football"],
  },
  {
    id: "dfw-coming-soon",
    status: "coming_soon",
    location: "Dallas–Fort Worth",
    city: "DFW, TX",
    dates: "Summer 2026",
    dateLabel: "Dates TBA",
    sports: ["Soccer", "Football", "Lacrosse"],
  },
  {
    id: "chicago-coming-soon",
    status: "coming_soon",
    location: "Chicago Suburbs",
    city: "Chicago, IL",
    dates: "Summer 2026",
    dateLabel: "Dates TBA",
    sports: ["Soccer", "Football", "Lacrosse"],
  },
  {
    id: "atlanta-coming-soon",
    status: "coming_soon",
    location: "Atlanta",
    city: "Atlanta, GA",
    dates: "Fall 2026",
    dateLabel: "Dates TBA",
    sports: ["Soccer", "Football", "Lacrosse"],
  },
];

const BRAND = {
  bg: "#080808",
  card: "#111111",
  orange: "#F7941D",
  pink: "#E91E8C",
  purple: "#8B5CF6",
  blue: "#4DA8DA",
  white: "#FFFFFF",
  light: "#E8E8E8",
  muted: "#BBBBBB",
};

const inputStyle = {
  width: "100%",
  background: BRAND.card,
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  padding: "14px 16px",
  color: BRAND.white,
  fontFamily: "Source Sans 3, sans-serif",
  fontSize: 17,
  outline: "none",
  boxSizing: "border-box",
};

function Navbar({ onRegister }) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(8,8,8,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src="/logo.png" alt="Hudson Athletics" style={{ height: 48, objectFit: "contain" }} />
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a href="mailto:Connectwith@hudsonathletics.us" style={{ color: BRAND.light, fontFamily: "Oswald, sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", textDecoration: "none", cursor: "pointer" }}>Contact Us</a>
        <button onClick={onRegister} style={{ background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})`, color: "#fff", border: "none", padding: "10px 24px", borderRadius: 6, fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer" }}>Register Now</button>
      </div>
    </nav>
  );
}

function Hero({ onRegister }) {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 80px", background: "radial-gradient(ellipse at 50% 30%, rgba(139,92,246,0.15) 0%, rgba(8,8,8,1) 70%)" }}>
      <h1 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 7vw, 72px)", fontWeight: 700, color: BRAND.white, lineHeight: 1.1, marginBottom: 16, textTransform: "uppercase" }}>
        Prove Your Game.<br />
        <span style={{ background: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.pink}, ${BRAND.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Own Your Numbers.</span>
      </h1>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 20, color: BRAND.light, maxWidth: 600, marginBottom: 40 }}>
        Standardized athletic testing referenced to governing body standards.
      </p>
      <img src="/logo.png" alt="Hudson Athletics" style={{ width: 180, marginBottom: 32 }} />
      <div style={{ maxWidth: 700, marginBottom: 32 }}>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.light, lineHeight: 1.7, marginBottom: 16 }}>
          Professional and college sports have scouting infrastructure that serves the top tier. The elite 10% already have a path. Scouts come to them.
        </p>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.light, lineHeight: 1.7, marginBottom: 16 }}>
          Everyone else? Told to &ldquo;keep working&rdquo; with no clear way to demonstrate improvement, no standardized metrics, and no legitimate way to get in front of decision-makers.
        </p>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 20, fontWeight: 600, color: BRAND.orange, lineHeight: 1.7 }}>
          That&rsquo;s our market. That&rsquo;s why Hudson Athletics exists.
        </p>
      </div>
      <button onClick={onRegister} style={{ background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})`, color: "#fff", border: "none", padding: "16px 48px", borderRadius: 8, fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>Register — $49.99</button>
    </section>
  );
}



function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Why Athletic Testing?",
      text: "Every sport has a set of physical benchmarks that matter \u2014 speed, agility, power, endurance. National governing bodies publish which tests are most relevant to each sport. These are the same metrics that college programs and scouts use to evaluate potential. The problem is, most youth athletes never get access to standardized testing. They train hard but have no verified data to show for it. That\u2019s what we change.",
    },
    {
      num: "2",
      title: "Pick Your Sport. Show Up. Get Tested.",
      text: "When you register, you choose a sport-specific testing path. On event day, your athlete rotates through a series of testing stations run by trained staff \u2014 each one measuring a specific physical attribute that matters for their sport. No prior experience needed. No special gear required. Just show up ready to compete against the numbers.",
    },
    {
      num: "3",
      title: "Walk Away With Proof.",
      text: "Same day, your athlete receives a verified Hudson Athletics Performance Report \u2014 real scores, from real tests, conducted in person. Plus a digital athlete profile they can share with any coach, club, or program. It\u2019s not a trophy. It\u2019s evidence.",
    },
  ];

  return (
    <section style={{ padding: "80px 24px", background: BRAND.card, borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 40, color: BRAND.white, textTransform: "uppercase", marginBottom: 48, textAlign: "center" }}>How It Works</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {steps.map(s => (
            <div key={s.num} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ minWidth: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Oswald, sans-serif", fontSize: 26, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                {s.num}
              </div>
              <div>
                <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 24, color: BRAND.white, textTransform: "uppercase", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 19, color: BRAND.light, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sports() {
  const activeSports = [
    { name: "Rugby", icon: "🏉" },
    { name: "Soccer", icon: "⚽" },
    { name: "Lacrosse", icon: "🥍" },
    { name: "Football", icon: "🏈" },
  ];
  const comingSoonSports = [
    { name: "Volleyball", icon: "🏐" },
    { name: "Basketball", icon: "🏀" },
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 40, color: BRAND.white, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Sports We Test</h2>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 20, color: BRAND.light, textAlign: "center", maxWidth: 700, margin: "0 auto 44px", lineHeight: 1.6 }}>
        Each sport has its own testing battery built from the metrics that national governing bodies recognize as most important. When you register, you&rsquo;ll select your athlete&rsquo;s sport path.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
        {activeSports.map(s => (
          <div key={s.name} style={{ background: BRAND.card, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 28, textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{s.icon}</div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, color: BRAND.white, textTransform: "uppercase", marginBottom: 0 }}>{s.name}</h3>
          </div>
        ))}
        {comingSoonSports.map(s => (
          <div key={s.name} style={{ background: BRAND.card, border: "1px dashed rgba(255,255,255,0.12)", borderRadius: 12, padding: 28, textAlign: "center", opacity: 0.6 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{s.icon}</div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, color: BRAND.white, textTransform: "uppercase", marginBottom: 6 }}>{s.name}</h3>
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 11, color: BRAND.orange, textTransform: "uppercase", letterSpacing: 1.5 }}>Coming Soon</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    { title: "Verified Performance Report", desc: "Sport-specific scores tested to governing body standards, printed and delivered same day." },
    { title: "Hudson Athletics Certification", desc: "A credentialed, verified result you can share with coaches, recruiters, and programs." },
    { title: "Shareable Athlete Profile", desc: "Digital profile with your results data, accessible via link — built for recruiting." },
  ];
  return (
    <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 40, color: BRAND.white, textTransform: "uppercase", marginBottom: 44, textAlign: "center" }}>What You Leave With</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
        {items.map((it, i) => (
          <div key={i} style={{ borderLeft: `3px solid ${BRAND.pink}`, paddingLeft: 20 }}>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, color: BRAND.white, marginBottom: 8 }}>{it.title}</h3>
            <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 17, color: BRAND.light, lineHeight: 1.6 }}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function Register() {
  const emptyAthlete = () => ({ firstName: "", lastName: "", age: "", sport: "" });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [parent, setParent] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [athletes, setAthletes] = useState([emptyAthlete()]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateParent = (k, v) => setParent(f => ({ ...f, [k]: v }));
  const updateAthlete = (idx, k, v) => setAthletes(a => a.map((at, i) => i === idx ? { ...at, [k]: v } : at));
  const addAthlete = () => setAthletes(a => [...a, emptyAthlete()]);
  const removeAthlete = (idx) => setAthletes(a => a.filter((_, i) => i !== idx));

  const FIRST_PRICE = 49.99;
  const ADDITIONAL_PRICE = 39.99;
  const total = athletes.length === 1 ? FIRST_PRICE : FIRST_PRICE + (athletes.length - 1) * ADDITIONAL_PRICE;

  const event = EVENTS.find(e => e.id === selectedEvent);
  const isComingSoon = event?.status === "coming_soon";
  const availableSports = event ? SPORTS.filter(s => event.sports.includes(s.name)) : [];

  const parentValid = parent.firstName && parent.lastName && parent.email;
  const athletesValid = athletes.every(a => a.firstName && a.lastName && a.age && a.sport);
  const valid = isComingSoon ? (parentValid) : (selectedEvent && parentValid && athletesValid);

  const handleSubmit = async () => {
    if (!valid) { setStatus("Please fill all required fields."); return; }
    setLoading(true);
    setStatus("");

    if (isComingSoon) {
      try {
        const res = await fetch("/api/interest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ parent, event: { id: event.id, location: event.location, city: event.city, dates: event.dates } }),
        });
        const data = await res.json();
        if (data.success) {
          setSubmitted(true);
        } else {
          setStatus(data.error || "Something went wrong. Please try again.");
        }
      } catch (e) {
        setStatus("Error submitting. Please try again.");
      }
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parent, athletes, event: { id: event.id, location: event.location, dates: event.dates } }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (e) {
      setStatus("Error connecting to payment. Please try again.");
    }
    setLoading(false);
  };

  const sectionLabel = { fontFamily: "Oswald, sans-serif", fontSize: 16, color: BRAND.pink, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12, marginTop: 28 };

  if (submitted) {
    return (
      <section id="register" style={{ padding: "80px 24px", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 40, color: BRAND.white, textTransform: "uppercase", marginBottom: 16 }}>You're On the List!</h2>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.light, marginBottom: 8 }}>
          We'll notify you as soon as dates are confirmed for <span style={{ color: BRAND.orange, fontWeight: 600 }}>{event?.location}</span>.
        </p>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 17, color: BRAND.muted }}>Keep an eye on your inbox — early registrants get first access.</p>
        <button onClick={() => { setSubmitted(false); setSelectedEvent(null); setParent({ firstName: "", lastName: "", email: "", phone: "" }); }}
          style={{ marginTop: 32, background: "none", border: `1px solid rgba(255,255,255,0.2)`, borderRadius: 8, padding: "12px 32px", color: BRAND.light, fontFamily: "Oswald, sans-serif", fontSize: 15, cursor: "pointer", textTransform: "uppercase", letterSpacing: 1 }}>
          Register for Another Event
        </button>
      </section>
    );
  }

  return (
    <section id="register" style={{ padding: "80px 24px", maxWidth: 600, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 40, color: BRAND.white, textTransform: "uppercase", marginBottom: 8, textAlign: "center" }}>Register</h2>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.muted, textAlign: "center", marginBottom: 32 }}>$49.99 per athlete &nbsp;·&nbsp; $10 off each additional athlete</p>

      {/* Step 1: Select Event */}
      <p style={sectionLabel}>Select an Event *</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }}>
        {EVENTS.map(ev => (
          <button key={ev.id} onClick={() => { setSelectedEvent(ev.id); setAthletes([emptyAthlete()]); setStatus(""); }}
            style={{ background: selectedEvent === ev.id ? `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})` : BRAND.card, color: BRAND.white, border: selectedEvent === ev.id ? "none" : "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "16px 20px", cursor: "pointer", transition: "all 0.2s", textAlign: "left", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                  {ev.location} — {ev.city}
                </div>
                <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 16, marginTop: 4, opacity: 0.85 }}>
                  {ev.dates} &nbsp;·&nbsp; {ev.dateLabel}
                </div>
              </div>
              {ev.status === "coming_soon" && (
                <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 12, color: selectedEvent === ev.id ? "#fff" : BRAND.orange, border: `1px solid ${selectedEvent === ev.id ? "rgba(255,255,255,0.4)" : BRAND.orange}`, borderRadius: 4, padding: "4px 8px", textTransform: "uppercase", letterSpacing: 1, whiteSpace: "nowrap" }}>Coming Soon</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {selectedEvent && isComingSoon && (
        <>
          {/* Interest form for coming soon events */}
          <div style={{ background: "rgba(247,148,29,0.06)", border: `1px solid rgba(247,148,29,0.2)`, borderRadius: 10, padding: 20, marginTop: 20, marginBottom: 8 }}>
            <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.light, lineHeight: 1.6, marginBottom: 0 }}>
              We're finalizing dates and venue for <span style={{ color: BRAND.orange, fontWeight: 600 }}>{event.location}</span>. Drop your info below and you'll be the first to know when registration opens — plus early access before we go public.
            </p>
          </div>

          <p style={sectionLabel}>Your Information</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <input placeholder="First Name *" value={parent.firstName} onChange={e => updateParent("firstName", e.target.value)} style={inputStyle} />
            <input placeholder="Last Name *" value={parent.lastName} onChange={e => updateParent("lastName", e.target.value)} style={inputStyle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            <input placeholder="Email *" type="email" value={parent.email} onChange={e => updateParent("email", e.target.value)} style={inputStyle} />
            <input placeholder="Phone" value={parent.phone} onChange={e => updateParent("phone", e.target.value)} style={inputStyle} />
          </div>

          <button onClick={handleSubmit} disabled={loading || !valid}
            style={{ width: "100%", background: valid ? `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})` : "#333", color: "#fff", border: "none", padding: "16px", borderRadius: 8, fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 1.5, textTransform: "uppercase", cursor: valid ? "pointer" : "not-allowed", opacity: loading ? 0.6 : 1 }}>
            {loading ? "Submitting..." : "Get First Access"}
          </button>
          {status && <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 16, color: BRAND.orange, marginTop: 16, textAlign: "center", lineHeight: 1.5 }}>{status}</p>}
        </>
      )}

      {selectedEvent && !isComingSoon && (
        <>
          {/* Step 2: Parent Info */}
          <p style={sectionLabel}>Parent / Guardian Information</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <input placeholder="Parent First Name *" value={parent.firstName} onChange={e => updateParent("firstName", e.target.value)} style={inputStyle} />
            <input placeholder="Parent Last Name *" value={parent.lastName} onChange={e => updateParent("lastName", e.target.value)} style={inputStyle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 4 }}>
            <input placeholder="Email *" type="email" value={parent.email} onChange={e => updateParent("email", e.target.value)} style={inputStyle} />
            <input placeholder="Phone" value={parent.phone} onChange={e => updateParent("phone", e.target.value)} style={inputStyle} />
          </div>

          {/* Step 3: Athletes */}
          {athletes.map((ath, idx) => (
            <div key={idx} style={{ background: BRAND.card, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20, marginTop: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <p style={{ ...sectionLabel, margin: 0 }}>
                  Athlete {idx + 1} {idx > 0 && <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: BRAND.orange, textTransform: "none", letterSpacing: 0 }}>($10 multi-athlete discount applied)</span>}
                </p>
                {athletes.length > 1 && (
                  <button onClick={() => removeAthlete(idx)} style={{ background: "none", border: "none", color: BRAND.muted, cursor: "pointer", fontFamily: "Source Sans 3, sans-serif", fontSize: 13 }}>✕ Remove</button>
                )}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <input placeholder="Athlete First Name *" value={ath.firstName} onChange={e => updateAthlete(idx, "firstName", e.target.value)} style={inputStyle} />
                <input placeholder="Athlete Last Name *" value={ath.lastName} onChange={e => updateAthlete(idx, "lastName", e.target.value)} style={inputStyle} />
              </div>
              <input placeholder="Athlete Age (12–21) *" type="number" min="12" max="21" value={ath.age} onChange={e => updateAthlete(idx, "age", e.target.value)} style={{ ...inputStyle, marginBottom: 14 }} />

              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 14, color: BRAND.light, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Sport Path *</p>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${availableSports.length > 2 ? 2 : availableSports.length}, 1fr)`, gap: 8 }}>
                {availableSports.map(s => (
                  <button key={s.name} onClick={() => updateAthlete(idx, "sport", s.name)}
                    style={{ background: ath.sport === s.name ? `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})` : "rgba(255,255,255,0.04)", color: BRAND.white, border: ath.sport === s.name ? "none" : "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 6px", fontFamily: "Oswald, sans-serif", fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {s.icon} {s.name}
                  </button>
                ))}
              </div>
              <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 15, color: BRAND.muted, textAlign: "right", marginTop: 10 }}>
                {idx === 0 ? `$${FIRST_PRICE}` : `$${ADDITIONAL_PRICE}`}
              </p>
            </div>
          ))}

          <button onClick={addAthlete} style={{ width: "100%", marginTop: 16, background: "none", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: 8, padding: "14px", color: BRAND.light, fontFamily: "Oswald, sans-serif", fontSize: 17, fontWeight: 600, cursor: "pointer", textTransform: "uppercase", letterSpacing: 1 }}>
            + Add Another Athlete ($39.99)
          </button>

          <div style={{ marginTop: 24, padding: "16px 20px", background: "rgba(247,148,29,0.08)", border: "1px solid rgba(247,148,29,0.25)", borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 18, color: BRAND.light, textTransform: "uppercase", letterSpacing: 1 }}>
              {athletes.length} athlete{athletes.length > 1 ? "s" : ""} — Total
            </span>
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 24, fontWeight: 700, color: BRAND.orange }}>
              ${total.toFixed(2)}
            </span>
          </div>

          <button onClick={handleSubmit} disabled={loading || !valid}
            style={{ width: "100%", marginTop: 16, background: valid ? `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})` : "#333", color: "#fff", border: "none", padding: "16px", borderRadius: 8, fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 1.5, textTransform: "uppercase", cursor: valid ? "pointer" : "not-allowed", opacity: loading ? 0.6 : 1 }}>
            {loading ? "Processing..." : `Register & Pay — $${total.toFixed(2)}`}
          </button>

          {status && <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 16, color: BRAND.orange, marginTop: 16, textAlign: "center", lineHeight: 1.5 }}>{status}</p>}
        </>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
      <img src="/logo.png" alt="Hudson Athletics" style={{ height: 60, marginBottom: 16 }} />
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 15, color: BRAND.muted }}>
        Hudson Athletics &nbsp;|&nbsp; Youth Combines · Coaching · Camps
      </p>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 15, marginTop: 8 }}>
        <a href="mailto:Connectwith@hudsonathletics.us" style={{ color: BRAND.orange, textDecoration: "none", fontWeight: 600 }}>Connectwith@hudsonathletics.us</a>
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 16 }}>
        <a href="https://www.instagram.com/hudsonathleticscombines" target="_blank" rel="noopener noreferrer" style={{ color: BRAND.light, textDecoration: "none", fontFamily: "Oswald, sans-serif", fontSize: 15, letterSpacing: 1, textTransform: "uppercase" }}>Instagram</a>
        <a href="https://www.linkedin.com/company/114274192/" target="_blank" rel="noopener noreferrer" style={{ color: BRAND.light, textDecoration: "none", fontFamily: "Oswald, sans-serif", fontSize: 15, letterSpacing: 1, textTransform: "uppercase" }}>LinkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=61572339454448" target="_blank" rel="noopener noreferrer" style={{ color: BRAND.light, textDecoration: "none", fontFamily: "Oswald, sans-serif", fontSize: 15, letterSpacing: 1, textTransform: "uppercase" }}>Facebook</a>
      </div>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>
        © 2026 Hudson Athletics LLC. All rights reserved.
      </p>
    </footer>
  );
}

export default function Home() {
  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body, html { background: #080808; -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(233,30,140,0.3); color: #fff; }
        input::placeholder { color: rgba(255,255,255,0.35); }
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
        @media (max-width: 600px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
      <Navbar onRegister={scrollToRegister} />
      <Hero onRegister={scrollToRegister} />
      <HowItWorks />
      <WhatYouGet />
      <Sports />
      <Register />
      <Footer />
    </>
  );
}
