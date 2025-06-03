'use client'

import Hero from './components/hero'
import Features from './components/features'
import Benefits from './components/benefits'
import Testimonials from './components/testimonials'
import CallToAction from './components/cta'
import Footer from './components/footer'
import Navigation from './components/navigation'
import About from './components/about'
import Videopage from './components/videopage'
import Benchmarks from './components/benchmarks'

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Navigation />
      <Hero />
      <About />
      <Videopage />
      <Features />
      <Benefits />
      <Testimonials />
      <Benchmarks />
      <CallToAction />
      <Footer />
    </div>
  );
}