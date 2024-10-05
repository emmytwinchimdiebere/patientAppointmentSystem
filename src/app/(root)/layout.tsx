import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const  roboto =  Roboto({subsets:["latin"],  weight:"400", variable:"--roboto"});


export const metadata: Metadata = {
  title: "  hospital assistance  application",
  description: "this is hospital assistance app to  help manage appointments ",
  icons:{
    icon: "../../../public/assets/icons/logo-icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable}  bg-dark-400`} >{children}</body>
    </html>
  );
}
