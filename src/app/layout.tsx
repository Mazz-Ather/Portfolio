import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body className="">
        {/* <Navbar/> */}
        {/* <Icons/> */}
        
                {children}

                <Footer/>
      </body>
    </html>
  );
}
