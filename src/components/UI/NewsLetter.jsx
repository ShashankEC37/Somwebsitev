import React from "react";
import "../../styles/newsletter.css"
const NewsLetter = () =>{
    const headerStyle = {
        color: "blue",
        fontSize: "35px",
        fontWeight: "bold",
      };
    return <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h3 >
                      To Get latest updates  from   
                    </h3>
                  
                    <h1 style={headerStyle}>SCHOOL OF MASTERS</h1>
                </div>
                <div className="newsletter__form">
                    <input type="email" placeholder="Email" />
                   
                    <button className="primary__btn">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
}
export default NewsLetter