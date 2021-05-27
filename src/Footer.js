import { Component } from "react";

class Footer extends Component{
    render() {
        return <div>
            <section id="footer" className=" text-white text-center mb-0 pb-0">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="item">
                                <h3 className="mb-4 text-uppercase">Location</h3>
                                <p>2215 John Daniel Drive <br></br>Clark, MO 65243 </p>

                            </div>                            
                        </div>
                         <div className="col-lg-4 mb-5">
                            <div className="item ">
                                <h3 className="mb-4 text-uppercase">Around The Web</h3>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-dribbble"></i>

                            </div>                            
                        </div>
                         <div className="col-lg-4 mb-4">
                            <div className="item">
                                <h3 className="mb-4 text-uppercase">About Freelancer</h3>
                                <p>Freelance is a free to use, MIT <br></br>licensed Bootstrap theme created by . </p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="copR">
                    <small>Copyright © Your Website 2021</small>
                </div>
            </section>
        </div>
    }
}

export default Footer;