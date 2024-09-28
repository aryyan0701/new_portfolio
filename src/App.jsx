import React from 'react'
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Blogs from './components/Blogs';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="blogs"><Blogs /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App;