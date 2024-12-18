import localFont from "next/font/local";
import "./globals.css";
import {AuthContextProvider} from "@/app/_utils/auth-context";
import Sky from "@/app/res/Sky.jpg";
import Image from "next/image";

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
  title: "Weather Storm",
  description: "Weather app based on your current location",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <AuthContextProvider>
              <Image className='object-cover -z-10' src={Sky} alt="" fill={true}/>
              {children}
          </AuthContextProvider>
      </body>
    </html>
  );
}
