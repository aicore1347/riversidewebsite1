import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="bg-riverside-black text-riverside-white min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
