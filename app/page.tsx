import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarqueeSection from '@/components/Marquee'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <About />
        <MarqueeSection reverse />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
