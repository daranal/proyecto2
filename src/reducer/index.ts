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
        default: return state
    }
}