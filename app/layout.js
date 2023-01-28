// import { Inter } from '@next/font/google'
import "../styles/global.css" //Global css dosyasının bütün sayfaları kapsaması için tüm elementleri kapsayan layout.jsx sayfasına koymayı tercih ettik
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "./styles.module.css"
// const interFont = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
