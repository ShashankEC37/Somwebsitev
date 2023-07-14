import React from "react";
import "../../styles/newsletter.css"
const NewsLetter = () =>{
    return <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">
                    Subscribe to our Newsletter
                    </h6>
                    <h2>
                        To get <span className="highlight"> latest updates </span> from School Of Masters
                    </h2>
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