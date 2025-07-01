export const metadata = {
  title: "Happy Birthday My Love",
  description: "A romantic birthday surprise website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
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
  )
}
