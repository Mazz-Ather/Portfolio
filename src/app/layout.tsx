import "./globals.css";
import Footer from "./components/Footer";
import Navbar1 from "@/app/components/Navbar1";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body className="">
        <Navbar1/>
        {/* <Icons/> */}
        
                {children}

                <Footer/>
      </body>
    </html>
  );
}
