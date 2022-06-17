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

