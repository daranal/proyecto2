import React, { useContext } from "react";
import { ctx } from "../../context";
import { StateInterface, ActionInterface, ProductInterface } from "../../globalTypes";
import "./Style.scss"

interface ProductDetailProps {
    dispatch: React.Dispatch<ActionInterface>
}

const Cart: React.FC<ProductDetailProps> = ({ dispatch }): JSX.Element => {
    const state = useContext(ctx) as StateInterface;

    const removeFromCart = (productId: number) => {

        dispatch({ type: "REMOVE_FROM_CART", payload: productId });
    };

    const proceedToCheckout = (event: React.MouseEvent<HTMLButtonElement>) => {
        // Implement your logic to proceed to checkout here
    };

    return (
        <div className="cart-container">
            {state.shoppingCart.length ? (
                <div>
                    {state.shoppingCart.map((product) => (
                        <div className="cart-item" key={product.id}>
                            <div className="cart-item-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="cart-item-details">
                                <h2>{product.title}</h2>
                                <p>Description: {product.description}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                            <div className="cart-item-actions">
                                <button
                                    className="remove-button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-actions">
                        <button className="proceed-to-checkout" onClick={proceedToCheckout}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="empty-cart-message">
                    <h2>Cart is empty</h2>
                </div>
            )}
        </div>
    );
};

export { Cart };
