import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/themeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import Nav from '@/components/navbar/Navbar'


import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechBloggy',
  description: 'A blog about tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  //             template='<div class="bar" role="bar"><div class="peg"></div></div> 
  // <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  //             zIndex={1600}
            />
            <div className="container">
              <div className="wrapper">
                <Nav />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
