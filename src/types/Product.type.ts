export  interface Product{
    id: number,
    price: number,
    description: string,
    stock: number,
    name: string,
    status: boolean,
    oldPrice: number
}


export interface Cart extends Product {
  qty: number;
}
