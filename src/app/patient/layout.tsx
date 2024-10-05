import { Inter, Roboto } from "next/font/google";
import "../(root)/globals.css"

const inter = Inter({ subsets: ["latin"] });
const  roboto =  Roboto({subsets:["latin"],  weight:"400", variable:"--roboto"});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} ${roboto.variable}  bg-dark-400`} >{children}</body>
  </html>
  )
}
