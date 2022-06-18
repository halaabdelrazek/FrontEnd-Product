import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderReadDTO, Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   baseURL: string = 'https://localhost:44329/api';


  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get<Product[]>(this.baseURL+"/Product")}

    getAllOrders(){
      return this.httpClient.get<OrderReadDTO[]>(this.baseURL+"/Order")}

      AddOrder(productOrders:any){
        return this.httpClient.post<Order>(this.baseURL+"/Order",productOrders)}

        EditStatusOrder(orderStatus:any , id:string){
          return this.httpClient.put(this.baseURL+"/Order/"+id,orderStatus)}
  
}
