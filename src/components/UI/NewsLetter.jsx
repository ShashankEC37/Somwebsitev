import React from "react";
import "../../styles/newsletter.css"
const NewsLetter = () =>{
    return <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h3 >
                    Subscribe to our Newsletter 
                    </h3>
                    <h3>
                        To get  latest updates  from   </h3>
                        <h1 style={{color:"#4400ff" , fontSize:"35px"}}>SCHOOL OF MASTERS</h1>
                </div>
                <div className="newsletter__form">
                    <input type="email" placeholder="Email" />
                    <button className="secondary__btn subscribe__btn">Subscribe Now</button>
                </div>
            </div>
        </div>
    </section>
}
export default NewsLetter