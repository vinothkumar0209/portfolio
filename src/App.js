import './App.css';
import About from './component/about';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/header';
import Profile from './component/profile';
import Projects from './component/projects';
import Resume from './component/Resume';

function App() {
  return (
    <div className="App">
        <Header/>
        <Profile/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
