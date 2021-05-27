import { Component } from 'react';

class Navbar extends Component{
    render() {
        return <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container font-weight-bold">
              <a className="navbar-brand " > START REACT </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link"  href="#portfolio" >PORTFOLIO</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " >ABOUT</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " >CONTACT</a>
                  </li>
                  </ul>
                </div>
            </div>
                
            </nav>                
        </>
    }
}

// 




export default Navbar;