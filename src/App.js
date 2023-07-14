import  React,{useState,useEffect} from "react"
import './App.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services"
import Team from "./components/UI/Team"
import Testmonials from "./components/UI/Testmonials"
import NewsLetter from './components/UI/NewsLetter';
import Footer from './components/UI/Footer';
import Gallery from "./components/UI/Gallery";
function App() {

  const [theme,setTheme] = useState('')

  const toggleTheme = () =>{
    theme ===''? setTheme('light-theme') : setTheme(' ')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])

  return <>
  <Header  theme ={theme} toggleTheme={toggleTheme}/>
  <Hero theme = {theme} />
  <Counter />
  <Services />
  <Team />
  <Testmonials />
  <Gallery />
  <NewsLetter />
  <Footer />
  </>

}

export default App;
