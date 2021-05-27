import { Component } from "react";

class About extends Component{
    render() {
        return <>
            <section id="about" className="text-center">
                <div className="container text-white">
                    <h2 >About</h2>
                     <div className="d-flex justify-content-center align-items-center my-4">
                        <hr></hr>
                        <i className="fas fa-star star"></i>
                        <hr></hr>
                    </div>
                    
                    <div className="row text-left w-75 m-auto">
                        <div className="col-lg-6 px-4">
                            <div className="item">
                                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source
                                files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>                            
                        </div>
                        <div className="col-lg-6 px-4">
                            <div className="item">
                                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email
                                address to the contact form to make it fully functional!
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}

export default About;