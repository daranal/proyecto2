import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ctx } from '../../context';
import { ActionInterface, ProductInterface } from '../../globalTypes';
import '../../App.scss';
import { Helmet } from 'react-helmet';

interface ProductDetailProps {
  dispatch: React.Dispatch<ActionInterface>;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ dispatch }): JSX.Element => {
  const state = useContext(ctx);
  const { title } = useParams();
  const product: ProductInterface = state?.products.find(
    (product) => product.title.trim() === title?.trim()
  ) as ProductInterface;

  const handleClick = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setModalVisible(true);
    // Auto-dismiss the modal after 3 seconds (adjust the duration as needed)
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  const [isModalVisible, setModalVisible] = useState(false); // Modal state

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="separator"></div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <div className="product-description">
          <p>Description: {product.description}</p>
        </div>
        <p>Price: ${product.price}</p>
        <button className="add-to-cart" onClick={handleClick}>
          Add to cart
        </button>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div className="modal">
          <p>Product has been added to the cart</p>
        </div>
      )}
    </div>
  );
};

export { ProductDetail };
