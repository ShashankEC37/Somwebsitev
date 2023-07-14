import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup"; // Import the CountUp component
import "../../styles/counter.css";

const counterData = [
  {
    number: '1',
    extra: 'K+',
    text: 'Clients'
  },
  {
    number: '10',
    extra: 'K+',
    text: 'Trainees'
  },
  {
    number: '50',
    extra: '+',
    text: 'Masters'
  }
];

const Counter = () => {
  const [visible, setVisible] = useState(false);
  const countersRef = useRef([]);

  const options = {
    threshold: 0.5 // Adjust this value based on when you want the counter to start (e.g., 0.5 means when 50% of the counter element is visible)
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    countersRef.current.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const formatNumber = (number) => {
    // Function to format numbers with commas (e.g., 1000 -> 1,000)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <div
              className="counter__item"
              key={index}
              ref={(el) => (countersRef.current[index] = el)}
            >
              <div className="counter__item-box">
                <h3 className="counter__number">
                  {visible && (
                    <CountUp
                      start={0}
                      end={parseInt(item.number)}
                      duration={3}
                      formattingFn={formatNumber}
                    /> 
                  )}{item.extra}
                </h3>
                <h4 className="counter__title">{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
