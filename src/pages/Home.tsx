import React, { Fragment, useContext, useState } from 'react';
import { Product } from "../containers/Product/Index"
import { StateInterface, ActionInterface, ProductInterface } from '../globalTypes';
import { ctx } from "../context";
import '../App.scss'
import { Helmet } from "react-helmet";


interface ProductDetailProps {
    dispatch: React.Dispatch<ActionInterface>
}

const Home: React.FC<ProductDetailProps> = ({ dispatch }): JSX.Element => {
    const state = useContext(ctx) as StateInterface;
    const [isModalVisible, setModalVisible] = useState(false);

    const addToCart = (product: ProductInterface) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        setModalVisible(true);

        // Auto-dismiss the modal after 3 seconds (adjust the duration as needed)
        setTimeout(() => {
            setModalVisible(false);
        }, 3000);
    }

    return (

        <Fragment>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Berkshire+Swash&display=swap" />
            </Helmet>
            <div className='product-grid-container'>
                <div className="product-grid">
                    {state.products.length ? (
                        <Fragment>
                            {state.products.map(product => (
                                <div className='product-item'>
                                    <Product
                                        key={product.id}
                                        image={product.image}
                                        title={product.title}
                                    />
                                    <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
                                </div>

                            ))}
                        </Fragment>
                    ) : (
                        <h2>Loading...</h2>
                    )}
                </div>
            </div>
            {isModalVisible && (
                <div className="modal">
                    <p>Product has been added to the cart</p>
                </div>
            )}
        </Fragment>
    );
}

export { Home }
