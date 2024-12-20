import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import Cookie from "@/components/cookie/Cookie";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Jamal Gastro",
    template: "%s | Jamal Gastro"
  },
  description: `Jamal Gastro to hurtownia 
gastronomiczna oferująca szeroką gamę produktów spożywczych, 
mrożonek, mięsa, przypraw, tłuszczów, sosów, opakowań, 
sprzętu gastronomicznego oraz dodatków kulinarnych. Obsługujemy 
restauracje, firmy cateringowe oraz obiekty gastronomiczne, 
zapewniając najwyższą jakość obsługi, terminowe dostawy i wsparcie 
na każdym etapie współpracy. Poznaj naszą ofertę i skontaktuj się z nami, 
aby dowiedzieć się więcej o dostępnych produktach i możliwościach współpracy.`
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Cookie/>
        <Footer />
      </body>
    </html>
  );
}
