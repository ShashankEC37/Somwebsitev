import React from "react";
import "../../styles/footer.css"
const Footer = () =>{

    const quickLinks01=[
        {
            path: '#',
            display : 'Employee Enhancement Program'
        },
        {
            path: '#',
            display : 'Blue Collar Training'
        }, {
            path: '#',
            display : 'College Placements'
        }
    ]

    const quickLinks02=[
        {
            path: '#',
            display : '  +91 8105404653'
        },
        {
            path: '#',
            display : 'sheetal@schoolofmasters.co.in'
        }, {
            path: '#',
            display : 'College Placements'
        },
    ]
        const quickLinks03=[
            {
                path: '#',
                display : <i class="ri-linkedin-box-fill"></i>
            },
            {
                path: '#',
                display :<i class="ri-facebook-circle-fill"></i>
            }, {
                path: '#',
                display : <i class="ri-instagram-line"></i>
            }
    ]

    return <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>SOM</h2>
                    <p className="small__text description"></p>
                </div>
                <div className="footer__quick-links">
                    <div className="quick__links-title">Solution</div>
                    <ul className="quick__links">
                        {
                            quickLinks01.map((item,index)=>
                                <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>)
                        }
                    </ul>
                </div>

                <div className="footer__quick-links">
                    <div className="quick__links-title">Contact Us</div>
                    <ul className="quick__links">
                        {
                            quickLinks02.map((item,index)=>
                                <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>)
                        }
                    </ul>
                </div>

                <div className="footer__quick-links">
                    <div className="quick__links-title">Contact Us</div>
                    <ul className="quick__links">
                        {
                            quickLinks03.map((item,index)=>
                                <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}
export default Footer