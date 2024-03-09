// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Desarrollador Fullstack | Cristian Bautista Pérez",
  description: "Portafolio Web de un desarrollador web fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
