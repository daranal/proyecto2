import React, { useContext } from 'react';
import { useParams } from "react-router-dom"
import { ctx } from '../../context'
import { ProductInterface } from '../../globalTypes';
import "./index.css"

const ProductDetail: React.FC = (): JSX.Element => {
    const state = useContext(ctx)
    const { title } = useParams()
    const product: ProductInterface = state?.products.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    console.log("Product", product)
    return (
        <div className="product-detail-container">
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <img className="product-image" src={product.image} alt={product.title} />
        </div>
    )
}

export { ProductDetail }