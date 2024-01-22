import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import logo from "../app/Asset/rlogo.webp";
import { NavLink } from "react-bootstrap";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raju's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <div className="navbar">
          <div className="logo">
          <Image className='logoImage' src={logo} alt='Web Logo'/>
          </div>
          <div className="navContent">
          <Link href="#">Home</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Skills</Link>
          <Link href="#">About Me</Link>
          <Link href="#">Contact</Link>
          </div>
        </div>
        {children}
        </body>
    </html>
  );
}
