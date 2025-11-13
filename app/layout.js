import "./globals.css";

export const metadata = {
  title: "CostaRicaRuns",
  description:
    "Fast and reliable cross-border delivery service connecting the U.S. and Costa Rica.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
