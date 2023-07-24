import React from "react";
import "../../styles/team.css"
import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";
import sheetal from "../../images/10.png"
import Clients from "./Clients";

const teamMembers=[
    {
        imgUrl: sheetal,
        name: 'Sheetal Surana',
        position: 'Founder & CEO'
    },
    {
        imgUrl: team02,
        name: 'Param Preeth',
        position: 'Founder & CTO'
    },{
        imgUrl: team03,
        name: ' Rahul ',
        position: 'Mentor Strategic Advisor '
    },
    {
        imgUrl: team04,
        name: ' Shashank S Rao',
        position: 'Master Trainer'
    },
    {
        imgUrl: team04,
        name: 'Deena C Rath',
        position: 'Master Trainer and Co-Facilitator'
    },
]
const Team = () =>{
    return <section className="our__team">
        <div className="container">
        <Clients />
            <div className="team__content">
        
                <h2 ><span style={{color:"white"}}>Meet Our core Team</span>
                </h2>
            </div>
            <div className="team__wrapper">
              {
                teamMembers.map((item,index)=>(
                    <div className="team__item" key={index}>
                    <div className="team__img">
                        <img src={item.imgUrl} alt=""/>
                    </div>
                    <div className="team__details">
                        <h4>{item.name}</h4>
                        <p className="description" style={{fontSize:"small"}}>{item.position}</p>
                        <div className="team__member-social">
                            <span><i class="ri-linkedin-box-fill"></i></span>
                            <span><i class="ri-mail-line"></i></span>
                        </div>
                    </div>
                </div>
                ))
              }
            </div>
        </div>
    </section>
}
export default Team
