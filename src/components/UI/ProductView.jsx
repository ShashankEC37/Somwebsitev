import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/ProductView.css'; // Import the CSS file for styling
import products from './MastersList';

const ProductView = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container1">
      <h2 className="title">Masters</h2>
      <div className="product-view-container">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
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

export default ProductView;
