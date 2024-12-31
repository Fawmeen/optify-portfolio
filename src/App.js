import './App.css';
import Header from './component/header';
import Hero from './component/hero';
import About from './component/about';
import Project from './component/project';
import Resume from './component/resume';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Project/>
        <Resume/>
        <Contact/>
        <Footer/>
         </div>
  );
}

export default App;
