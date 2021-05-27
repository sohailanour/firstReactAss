import { Component } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import ContactMe from './ContactMe';
import Footer from './Footer';

class App extends Component{

  render() {
    return <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <ContactMe />
      <Footer />
    </>
  }
}

export default App;
