"use client";
import { useState } from "react";

const SPORTS = [
  { name: "Rugby", icon: "🏉" },
  { name: "Soccer", icon: "⚽" },
  { name: "Lacrosse", icon: "🥍" },
  { name: "Football", icon: "🏈" },
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
  fontSize: 16,
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
      <img src="/logo.png" alt="Hudson Athletics" style={{ width: 220, marginBottom: 32 }} />
      <h1 style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(36px, 7vw, 72px)", fontWeight: 700, color: BRAND.white, lineHeight: 1.1, marginBottom: 16, textTransform: "uppercase" }}>
        Prove Your Game.<br />
        <span style={{ background: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.pink}, ${BRAND.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Own Your Numbers.</span>
      </h1>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 20, color: BRAND.light, maxWidth: 600, marginBottom: 8 }}>
        Standardized athletic testing referenced to governing body standards.
      </p>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.muted, marginBottom: 32 }}>
        May 21–22, 2026 &nbsp;|&nbsp; Kuntz Stadium, Indianapolis
      </p>
      <button onClick={onRegister} style={{ background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})`, color: "#fff", border: "none", padding: "16px 48px", borderRadius: 8, fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer" }}>Register — $49.99</button>
    </section>
  );
}

function About() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 800, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 36, color: BRAND.white, textTransform: "uppercase", marginBottom: 24, textAlign: "center" }}>The Gap We Fill</h2>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.light, lineHeight: 1.7, marginBottom: 16 }}>
        Professional and college sports have scouting infrastructure that serves the top tier. The elite 10% already have a path. Scouts come to them.
      </p>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 18, color: BRAND.light, lineHeight: 1.7, marginBottom: 16 }}>
        Everyone else? Told to &ldquo;keep working&rdquo; with no clear way to demonstrate improvement, no standardized metrics, and no legitimate way to get in front of decision-makers.
      </p>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 20, fontWeight: 600, color: BRAND.orange, lineHeight: 1.7 }}>
        That&rsquo;s our market. That&rsquo;s why Hudson Athletics exists.
      </p>
    </section>
  );
}

function Sports({ onRegister }) {
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 36, color: BRAND.white, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Choose Your Path</h2>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 16, color: BRAND.muted, textAlign: "center", marginBottom: 40 }}>Select your sport-specific testing battery at registration.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
        {SPORTS.map(s => (
          <div key={s.name} style={{ background: BRAND.card, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 28, textAlign: "center", transition: "border-color 0.2s", cursor: "default" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = BRAND.pink}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>{s.icon}</div>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 22, color: BRAND.white, textTransform: "uppercase", marginBottom: 0 }}>{s.name}</h3>
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
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 36, color: BRAND.white, textTransform: "uppercase", marginBottom: 40, textAlign: "center" }}>What You Leave With</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {items.map((it, i) => (
          <div key={i} style={{ borderLeft: `3px solid ${BRAND.pink}`, paddingLeft: 20 }}>
            <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: 18, color: BRAND.white, marginBottom: 6 }}>{it.title}</h3>
            <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: BRAND.light, lineHeight: 1.5 }}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventDetails() {
  return (
    <section style={{ padding: "60px 24px", background: BRAND.card, borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 36, color: BRAND.white, textTransform: "uppercase", marginBottom: 32 }}>Event Details</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
          {[
            { label: "Dates", value: "May 21–22, 2026" },
            { label: "Days", value: "Thursday & Friday" },
            { label: "Location", value: "Kuntz Stadium" },
            { label: "Address", value: "1502 W 16th St, Indianapolis, IN 46202" },
            { label: "Ages", value: "12–21" },
            { label: "Price", value: "$49.99" },
          ].map((d, i) => (
            <div key={i}>
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 13, color: BRAND.pink, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>{d.label}</div>
              <div style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 17, color: BRAND.white, fontWeight: 600 }}>{d.value}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 15, color: BRAND.orange, marginTop: 24, fontWeight: 600 }}>Limited to 100 athletes — register early to secure your spot.</p>
      </div>
    </section>
  );
}

function Register() {
  const emptyAthlete = () => ({ firstName: "", lastName: "", age: "", sport: "" });
  const [parent, setParent] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [athletes, setAthletes] = useState([emptyAthlete()]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const updateParent = (k, v) => setParent(f => ({ ...f, [k]: v }));
  const updateAthlete = (idx, k, v) => setAthletes(a => a.map((at, i) => i === idx ? { ...at, [k]: v } : at));
  const addAthlete = () => setAthletes(a => [...a, emptyAthlete()]);
  const removeAthlete = (idx) => setAthletes(a => a.filter((_, i) => i !== idx));

  const FIRST_PRICE = 49.99;
  const ADDITIONAL_PRICE = 39.99;
  const total = athletes.length === 1 ? FIRST_PRICE : FIRST_PRICE + (athletes.length - 1) * ADDITIONAL_PRICE;

  const parentValid = parent.firstName && parent.lastName && parent.email;
  const athletesValid = athletes.every(a => a.firstName && a.lastName && a.age && a.sport);
  const valid = parentValid && athletesValid;

  const handleSubmit = async () => {
    if (!valid) { setStatus("Please fill all required fields for parent and all athletes."); return; }
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parent, athletes }),
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

  const sectionLabel = { fontFamily: "Oswald, sans-serif", fontSize: 14, color: BRAND.pink, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12, marginTop: 28 };

  return (
    <section id="register" style={{ padding: "80px 24px", maxWidth: 600, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "Oswald, sans-serif", fontSize: 36, color: BRAND.white, textTransform: "uppercase", marginBottom: 8, textAlign: "center" }}>Register</h2>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 15, color: BRAND.muted, textAlign: "center", marginBottom: 32 }}>$49.99 per athlete &nbsp;·&nbsp; $10 off each additional athlete</p>

      <p style={sectionLabel}>Parent / Guardian Information</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <input placeholder="Parent First Name *" value={parent.firstName} onChange={e => updateParent("firstName", e.target.value)} style={inputStyle} />
        <input placeholder="Parent Last Name *" value={parent.lastName} onChange={e => updateParent("lastName", e.target.value)} style={inputStyle} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 4 }}>
        <input placeholder="Email *" type="email" value={parent.email} onChange={e => updateParent("email", e.target.value)} style={inputStyle} />
        <input placeholder="Phone" value={parent.phone} onChange={e => updateParent("phone", e.target.value)} style={inputStyle} />
      </div>

      {athletes.map((ath, idx) => (
        <div key={idx} style={{ background: BRAND.card, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20, marginTop: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <p style={{ ...sectionLabel, margin: 0 }}>
              Athlete {idx + 1} {idx > 0 && <span style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 12, color: BRAND.orange, textTransform: "none", letterSpacing: 0 }}>($10 multi-athlete discount applied)</span>}
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

          <p style={{ fontFamily: "Oswald, sans-serif", fontSize: 12, color: BRAND.light, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Sport Path *</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {SPORTS.map(s => (
              <button key={s.name} onClick={() => updateAthlete(idx, "sport", s.name)}
                style={{ background: ath.sport === s.name ? `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.pink})` : "rgba(255,255,255,0.04)", color: BRAND.white, border: ath.sport === s.name ? "none" : "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 6px", fontFamily: "Oswald, sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", textTransform: "uppercase", letterSpacing: 0.5 }}>
                {s.icon} {s.name}
              </button>
            ))}
          </div>
          <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 13, color: BRAND.muted, textAlign: "right", marginTop: 10 }}>
            {idx === 0 ? `$${FIRST_PRICE}` : `$${ADDITIONAL_PRICE}`}
          </p>
        </div>
      ))}

      <button onClick={addAthlete} style={{ width: "100%", marginTop: 16, background: "none", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: 8, padding: "14px", color: BRAND.light, fontFamily: "Oswald, sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", textTransform: "uppercase", letterSpacing: 1 }}>
        + Add Another Athlete ($39.99)
      </button>

      <div style={{ marginTop: 24, padding: "16px 20px", background: "rgba(247,148,29,0.08)", border: "1px solid rgba(247,148,29,0.25)", borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Oswald, sans-serif", fontSize: 16, color: BRAND.light, textTransform: "uppercase", letterSpacing: 1 }}>
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

      {status && <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: BRAND.orange, marginTop: 16, textAlign: "center", lineHeight: 1.5 }}>{status}</p>}
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
      <img src="/logo.png" alt="Hudson Athletics" style={{ height: 60, marginBottom: 16 }} />
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, color: BRAND.muted }}>
        Hudson Athletics &nbsp;|&nbsp; Youth Combines · Coaching · Camps
      </p>
      <p style={{ fontFamily: "Source Sans 3, sans-serif", fontSize: 14, marginTop: 8 }}>
        <a href="mailto:Connectwith@hudsonathletics.us" style={{ color: BRAND.orange, textDecoration: "none", fontWeight: 600 }}>Connectwith@hudsonathletics.us</a>
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 16 }}>
        <a href="https://www.instagram.com/hudsonathleticscombines" target="_blank" rel="noopener noreferrer" style={{ color: BRAND.light, textDecoration: "none", fontFamily: "Oswald, sans-serif", fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>Instagram</a>
        <a href="https://www.linkedin.com/company/114274192/" target="_blank" rel="noopener noreferrer" style={{ color: BRAND.light, textDecoration: "none", fontFamily: "Oswald, sans-serif", fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>LinkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=61572339454448" target="_blank" rel="noopener noreferrer" style={{ color: BRAND.light, textDecoration: "none", fontFamily: "Oswald, sans-serif", fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>Facebook</a>
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
      <About />
      <Sports onRegister={scrollToRegister} />
      <WhatYouGet />
      <EventDetails />
      <Register />
      <Footer />
    </>
  );
}
