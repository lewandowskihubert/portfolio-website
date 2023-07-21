
import './App.css'
import AboutMe from './components/aboutme/aboutme'
import ContactMe from './components/contact-me/contact-me'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'

function App() {


  return (
    <main>
      <Navbar />
      <header> <Header /> </header>
      <section id='projects'> <Projects /> </section>
      <section id='aboutme'><AboutMe /> </section>
      <section id='contactme'><ContactMe /></section>
    </main>
    
   
    
     
  )
}

export default App
