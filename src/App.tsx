import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero/Hero'
import Work from './components/sections/Work/Work'
import Philosophy from './components/sections/Philosophy/Philosophy'
import Stack from './components/sections/Stack/Stack'
import Timeline from './components/sections/Timeline/Timeline'
import Assistant from './components/sections/Assistant/Assistant'
import Contact from './components/sections/Contact/Contact'

const SECTIONS = ['hero', 'work', 'philosophy', 'stack', 'timeline', 'contact'] as const

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar sections={SECTIONS} />
      <main>
        <Hero />
        <Work />
        <Philosophy />
        <Stack />
        <Timeline />
        <Contact />
      </main>
      <footer className="py-8 text-center">
        <p className="text-sm text-silver">
          Designed and engineered by Ansh Srivastav
        </p>
      </footer>
      <Assistant />
    </div>
  )
}
