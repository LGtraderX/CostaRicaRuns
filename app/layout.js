import "./globals.css";

export const metadata = {
  title: "CostaRicaRuns – Envíos personales USA a Costa Rica",
  description:
    "CostaRicaRuns trae tus compras desde USA a Costa Rica. Dos viajes al mes, servicio familiar, cotizaciones por WhatsApp y Messenger."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
