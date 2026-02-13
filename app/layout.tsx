import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Título optimizado para búsqueda local
  title: {
    default: "Trivet | Centro Médico Veterinario en Puerto Montt",
    template: "%s | Trivet Veterinaria",
  },
  description: "En Trivet brindamos atención veterinaria integral en Puerto Montt. Especialistas en consultas médicas, cirugías, vacunas y bienestar para tus mascotas.",
  keywords: [
    "veterinaria puerto montt",
    "trivet puerto montt",
    "centro medico veterinario",
    "clinica veterinaria puerto montt",
    "urgencias veterinarias puerto montt",
    "vacunas mascotas puerto montt",
    "cirugia veterinaria puerto montt"
  ],
  authors: [{ name: "Trivet" }],

  // Configuración para compartir en Redes Sociales (Instagram/WhatsApp)
  openGraph: {
    title: "Trivet Centro Médico Veterinario",
    description: "Atención profesional y dedicada para tus mascotas en Puerto Montt.",
    url: "https://trivetpm.vercel.app",
    siteName: "Trivet",
    images: [
      {
        url: "/og-trivet.png", // Imagen recomendada de 1200x630px en tu carpeta public
        width: 1200,
        height: 630,
        alt: "Trivet Veterinaria Puerto Montt",
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}