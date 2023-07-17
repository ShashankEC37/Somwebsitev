import React from "react";
import SOM from "../../assets/SOM.png"
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
    return <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                <div className="logo">
                        <img src={SOM} style={{width:"100px", height: "100px"}} alt=""/>
                    </div>
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
    <li className="quick__link-item"><i className="ri-linkedin-box-fill" style={{ fontSize: '24px' }}></i></li>
    <li className="quick__link-item"> <i className="ri-facebook-circle-fill" style={{ fontSize: '24px' }}></i></li>
    <li className="quick__link-item"> <i className="ri-instagram-line" style={{ fontSize: '24px' }}></i></li>
  </ul>
</div>
            </div>
        </div>
    </footer>
}
export default Footer