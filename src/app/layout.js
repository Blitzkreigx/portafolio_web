import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Desarrollador Fullstack | Blitzkreig",
  description: "Desarrollador Fullstack con conocimientos en React, NextJS, Tailwindcss, NodeJS, Express, PostgreSQL, Typescript, Metodología MVC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
