import { Component } from "react";

class Portfolio extends Component{
    render() {
        return <>
            <section id="portfolio" className="text-center">
                <div className="container">
                    <h2 className="m-0">Portfolio</h2>                   
                        <div className="d-flex justify-content-center align-items-center my-4">
                            <hr></hr>
                            <i className="fas fa-star star"></i>
                            <hr></hr>
                        </div>
                    
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <img src="images/cabin.png" className="w-100"></img>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <img src="images/cake.png" className=" w-100"></img>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <img src="images/circus.png" className=" w-100"></img>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <img src="images/game.png" className=" w-100"></img>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <img src="images/safe.png" className=" w-100"></img>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <img src="images/submarine.png" className=" w-100"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Portfolio;