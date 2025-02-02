import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "@/app/components/Home/Navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body className="">
        <Cursor/>
        <Navbar/>
        {/* <Icons/> */}
        
                {children}

                <Footer/>
      </body>
    </html>
  );
}
