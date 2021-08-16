import Head from 'next/head';
import About from '../components/About';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunnyside agency landing page</title>
      </Head>

      <Hero />
      <About />
      <Services />
      <Clients />
      <Projects />
      <Footer />

    </div>
  )
}
