export interface Product {
  id?: string;
  name: string;
  price?: number;
  image?: string;

}

export interface ProductReadDTO {
  id?: string,
  name: string,
  price?: number,
  image?: string,
  productCount?:number

}

export interface Order {
   id?:string,
  orderNumber: string,
  orderStatus: number,
  orderCreatedDate: Date
}

export enum OrderStatus{

  PendingReview = 1,
  Accepted,
  Canceled,
}

export interface OrderReadDTO{

  id?:string,
  orderNumber: string,
  orderStatus: number,
  orderCreatedDate: Date,
  productOrders?:[{
    product?:Product,
    productCount?:number

  }]

  totalPrice?: number,
  // statusSelect?: ObjectStataus []

}


export interface ObjectStataus{
  enumName?:string,
  enumValue?:number,
  isSelected?:boolean

}