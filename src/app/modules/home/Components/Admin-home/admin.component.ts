import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectStataus, Order, OrderReadDTO, OrderStatus } from '../../Models/product.model';
import { ProductService } from '../../ProductService/Products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  orders: OrderReadDTO[] = [];

   statues = OrderStatus;


  constructor(private productService: ProductService,private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllOrders().subscribe({
      next: (responsce) => {
        for (let i = 0; i < responsce.length; i++) {
          let sum = 0;
          if (!responsce[i].productOrders!.length) {
            responsce[i].totalPrice = 0;
          } else {
            responsce[i].productOrders!.forEach((element) => {
              sum += element!.product?.price! * element.productCount!;
            });

            responsce[i].totalPrice = sum;
          }
        }

        debugger;
        
        this.orders = responsce;
        // this.orders.forEach((e)=>{
        //   e.statusSelect = this.setEnumObject(e.orderStatus)
        // })

      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      },
    });
  }




  getEnumValues():number[]{
    
        return Object.values(this.statues)
        .filter((value)=> !isNaN(Number(value)))
        .map((value)=> value as number);
  }


  SbmitChange(event: any, order: OrderReadDTO){
    console.log(order);

    this.productService.EditStatusOrder({orderStatus:Number(order.orderStatus)},order.id!).subscribe({
      next: (responsce) => {
       console.log(responsce);
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      },
    });

  }
  

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
