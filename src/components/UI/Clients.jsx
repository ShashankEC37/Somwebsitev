import React from "react";
import "../../styles/Clients.css";

const importAll = (r) => r.keys().map(r);
const imagesleft = importAll(
  require.context("../../images/Companies Logo/left", false, /\.(png|jpe?g|svg)$/)
);
const Clients = () => {
  const companies = imagesleft.map((image, index) => ({
    id: index + 1,
    image: image,
  }));

  return (
    <section className="partners_section">
      <div className="section_title">
        <h3 style={{ paddingTop: "30px" }}>Our Clients</h3>
      </div>
      <div className="logos_slider">
        <div className="overflow">
          <div className="logos_wrapper">
            {companies.map((company) => (
              <div className="logo_item" key={company.id}>
                <img src={company.image} alt={`Logo ${company.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
