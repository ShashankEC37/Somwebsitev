import React from "react";
import "../../styles/services.css"

const serviceData = [
    {
        icon:'ri-bookmark-3-fill',
        title:'Corporate Training',
        desc: 'Empower your workforce with comprehensive corporate training programs that prioritize and elevate English proficiency, unlocking new levels of communication and success.'
    },
    {
        icon:'ri-user-2-fill',
        title:'Recruitment ',
        desc: 'Bridging Gap between Talent and Organizations . Find the right candidate for your role, through  effective  screening process and skill assesments'
    },
]

const Services = () =>{
    return <section id="service">
        <div className="container">
            <div className="services__top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Take your team to the next level</h2>
                <h2 className="highlight">with our services</h2>
            </div>
            <div className="service__item-wrapper">
              {
                serviceData.map((item,index)=>(
                    <div className="services__item" key={index}>
                    <span className="service__icon"><i class={item.icon}></i></span>
                    <h3 className="service__title">{item.title}</h3>
                    <p className="description">{item.desc}</p>
                </div>
                ))
              }
            </div>
        </div>
    </section>
}
export default Services