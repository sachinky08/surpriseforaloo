export const metadata = {
  title: "Aloo's Birthday Surprise",
  description: "A love-filled surprise crafted just for you ❤️",
  openGraph: {
    title: "Aloo's Birthday Surprise",
    description: "A love-filled surprise crafted just for you ❤️",
    url: "https://surpriseforaloo.vercel.app",
    siteName: "Aloo's Birthday Surprise",
    images: [
      {
        url: "/aloo/Aloo5.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of the birthday surprise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aloo's Birthday Surprise",
    description: "A love-filled surprise crafted just for you ❤️",
    images: ["/aloo/Aloo5.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aloo/Aloo5.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Optional fallback for Open Graph if needed for older crawlers */}
        <meta property="og:image" content="/aloo/Aloo5.jpg" />
        <meta property="og:title" content="Aloo's Birthday Surprise" />
        <meta
          property="og:description"
          content="A love-filled surprise crafted just for you ❤️"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/aloo/Aloo5.jpg" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: '"Playfair Display", serif',
          overflowX: "hidden",
          background: "#000",
        }}
      >
        {children}
      </body>
    </html>
  );
}
