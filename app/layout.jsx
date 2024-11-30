import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import ImageBackground from "@/components/ImageBackground"
import '@/app/Global.css'
export const metadata = {
  title: 'TRADIVESTA',
  description: 'TRADIVESTA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <ImageBackground/>
        <Footer/>
      </body>
    </html>
  )
}
