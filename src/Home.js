import { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "../node_modules/font-awesome/css/font-awesome.min.css"

class Home extends Component{
    render() {
        return <>
            <header className="home w-100 d-flex flex-column justify-content-center " >
                <div className="text-white text-center">
                    <img src="images/avataaars.svg"></img>
                    <h1 >Start React</h1>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <hr></hr>
                        <i className="fas fa-star star"></i>
                        <hr></hr>
                    </div>
                    
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
                {/* <img  src="images/cabin.png" className=""></img> */}
            </header>
        </>
    }
}

export default Home;

// d-flex justify-content-center align-content-center
// <i className="fas fa-star"></i>