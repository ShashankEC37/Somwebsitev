import React from 'react';
import hp from '../../images/HPGAS.jpeg'
import hospital from '../../images/hospital.jpg'
import ECOSales from '../../images/ECOSales.jpeg'
import interviewCollege from "../../images/interviewCollege.jpg"
import training from "../../images/training.jpg"
import bluecollar from "../../images/bluecollar.jpg"
import one from "../../images/121.jpg"
import speed from "../../images/speed reading.jpg"
import "../../styles/gallery.css"
const Gallery = () => {
  return (
    <section className="gallery">
      <h3 className="gallery-heading">GALLERY</h3>
      <div className="box">
  <span style={{ '--i': 1 }}>
    <img src={hp} alt="" style={{ width: 'auto', height: '150px' }} />
  </span>
  <span style={{ '--i': 2 }}>
    <img src={hospital} alt="" style={{ width: 'auto', height: '150px' }} />
  </span>
  <span style={{ '--i': 3 }}>
    <img src={ECOSales} alt="" style={{ width: 'auto', height: '150px' }} />
  </span>
  <span style={{ '--i': 4 }}>
    <img src={interviewCollege} alt="" style={{ width: 'auto', height: '150px' }} />
  </span>
  <span style={{ '--i': 5 }}>
    <img src={training} alt="" style={{ width: 'auto', height: '150px' }} />
  </span>
  <span style={{ '--i': 6 }}>
    <img src={bluecollar} alt=" " style={{ width: 'auto', height: '150px' }} />
  </span>
  <span style={{ '--i': 7 }}>
    <img src={one} alt="" style={{ width: 'auto', height: '150px' }} />
  </span>
  <span style={{ '--i': 8 }}>
    <img src={speed} alt="" style={{ width: 'auto', height: '150px' }} />
  </span>
</div>

      <h3 className="gallery-heading">GALLERY</h3>
    </section>
  );
};

export default Gallery;
