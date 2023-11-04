import { ProductInterface, StateInterface, ActionInterface } from "../globalTypes"

export const initialState: StateInterface = {
    products: [],
    shoppingCart: []
}

export const reducerFn = (state: StateInterface, action: ActionInterface): StateInterface => {
    const { type, payload } = action

    switch (type) {
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: payload as ProductInterface[]
            }   
        case "ADD_TO_CART":
            const updatedCart = [...state.shoppingCart, payload as ProductInterface];
            return {
                ...state,
                shoppingCart: updatedCart
            }
        case "REMOVE_FROM_CART":
                const updatedCart2 = state.shoppingCart.filter((item) => item.id !== payload);
                return {
                    ...state,
                    shoppingCart: updatedCart2,
                };      
        default: return state
    }
}