import { Nav } from "./(home)/_sections/nav"
import { Hero } from "./(home)/_sections/hero"
import { Ionatec } from "./(home)/_sections/ionatec"
import { Projects } from "./(home)/_sections/projects"
import { Skills } from "./(home)/_sections/skills"
import { Experience } from "./(home)/_sections/experience"
import { Education } from "./(home)/_sections/education"
import { About } from "./(home)/_sections/about"
import { References } from "./(home)/_sections/references"
import { Clients } from "./(home)/_sections/clients"
import { Contact } from "./(home)/_sections/contact"
import { Footer } from "./(home)/_sections/footer"
import { BackToTop } from "./(home)/_sections/back-to-top"
import { RevealObserver } from "./(home)/_sections/reveal-observer"

export default function Portfolio() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main
        id="main-content"
        className="min-h-screen bg-background text-foreground"
      >
        <Nav />
        <Hero />
        <Ionatec />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <About />
        <References />
        <Clients />
        <Contact />
        <Footer />
        <BackToTop />
      </main>

      <RevealObserver />
    </>
  )
}
