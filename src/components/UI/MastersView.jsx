import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import '../../styles/MastersView.css'; // Import the CSS file for styling
import products from './MastersList';

const Masters = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const modalRef = useRef(null);

  const openModal = (product, event) => {
    setSelectedProduct(product);

    // Calculate the center position of the screen
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const modalWidth = modalRef.current.offsetWidth;
    const modalHeight = modalRef.current.offsetHeight;
    const modalLeft = (windowWidth - modalWidth) / 2;
    const modalTop = (windowHeight - modalHeight) / 2;

    // Calculate the clicked position relative to the screen
    const clickedX = event.clientX;
    const clickedY = event.clientY;

    // Calculate the offset position for the zoom-in animation
    const offsetX = clickedX - modalLeft;
    const offsetY = clickedY - modalTop;

    setModalPosition({ top: offsetY, left: offsetX });
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container1">
      <h2 className="title">Masters</h2>
      <div className="product-view-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={(event) => openModal(product, event)}
          >
            <div className="image-overlay"></div>
            <img src={product.image} alt={product.name} />
            <button className="name">
              <h3>{product.name}</h3>
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedProduct !== null}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Product Modal"
        style={{
          content: {
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          },
        }}
        ref={modalRef}
      >
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {selectedProduct && (
          <div className="modal-content">
            <div className="modal-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-details">
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Masters;
