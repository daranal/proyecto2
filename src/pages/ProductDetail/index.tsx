import React, { useContext } from 'react';
import { useParams } from "react-router-dom"
import { ctx } from '../../context'
import { ActionInterface, ProductInterface } from '../../globalTypes';
import "./index.scss"

interface ProductDetailProps {
    dispatch: React.Dispatch<ActionInterface>
}

const ProductDetail: React.FC<ProductDetailProps> = ({ dispatch }): JSX.Element => {
    const state = useContext(ctx)
    const { title } = useParams()
    const product: ProductInterface = state?.products.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    const handleClick = () => {
        dispatch({ type: "ADD_TO_CART", payload: product })
        
    }

    console.log("Product", product)
    return (
        <div className="product-detail-container">
            <h2>{product.title}</h2>
            <button onClick={handleClick}>Add to cart</button>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <img className="product-image" src={product.image} alt={product.title} />

        </div>
    )
}

export { ProductDetail }