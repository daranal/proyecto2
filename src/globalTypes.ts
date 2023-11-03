export interface ProductInterface{
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  }

export const initialState: StateInterface = {
    products: [],
    shoppingCart: []
}

export interface StateInterface {
    products: ProductInterface[],
    shoppingCart: ProductInterface[];
}

export interface ActionInterface{
    type: string;
    payload: unknown;
}