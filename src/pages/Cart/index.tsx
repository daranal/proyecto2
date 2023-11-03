import { Fragment, useContext } from "react";
import { Product } from "../../containers/Product/Index";
import { ctx } from "../../context";
import { StateInterface } from "../../globalTypes";
import { JsxFragment } from "typescript";

const Cart: React.FC = (): JSX.Element => {
    const state = useContext(ctx) as StateInterface

    return(
        <Fragment>
        {state.shoppingCart.length ? (
            <Fragment>
            {state.shoppingCart.map(product => (
                <Product key={product.id}
                image={product.image}
                title={product.title} 
                />
            ))}
            </Fragment>
        ) : (
            <h2>Cart is empty</h2>
        )}
        </Fragment>
    )
}

export { Cart }