import { Component } from "react";

class ContactMe extends Component{
    render() {
        return <>
                <section id="Contactme" className="container">
                    <div className="text-center">
                        <h2>Contact me</h2>
                         <div className="d-flex justify-content-center align-items-center my-4">
                            <hr></hr>
                            <i className="fas fa-star star"></i>
                            <hr></hr>
                        </div>
                    
                    </div>
                    
                    <div className="w-75 m-auto px-4">
                        <form>
                            <input type="text" placeholder="Name" className="w-100"></input>
                            <input type="text" placeholder="Email Address" className="w-100"></input>
                            <input type="text" placeholder="Phone Number" className="w-100"></input>
                            <input type="text" placeholder="Message" className="w-100"></input>
                            <input class="btn text-white" type="submit" value="Send"></input>
                        </form>
                    </div>
                </section>
        </>
    }
}
export default ContactMe;