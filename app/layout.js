export const metadata = {
  title: "Hudson Athletics | Inaugural Combine — May 21–22, 2026",
  description: "Standardized athletic testing referenced to governing body standards. Register for the inaugural Hudson Athletics combine at Kuntz Stadium, Indianapolis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet" />
        <script src="https://js.stripe.com/v3/" async></script>
      </head>
      <body style={{ margin: 0, padding: 0, background: "#080808" }}>
        {children}
      </body>
    </html>
  );
}
