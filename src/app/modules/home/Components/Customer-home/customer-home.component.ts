import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product, ProductReadDTO } from '../../Models/product.model';
import { ProductService } from '../../ProductService/Products.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  products: Product[] = [];

  productsReadDTO: ProductReadDTO[] = [];
  producttoRead :ProductReadDTO = {
    name: "juice",

  }; 

  
  ServerBase = environment.ServerBase;
  DefaultImage = environment.DefaultImage;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe({
      next: (products) => {
        products.forEach(c => {
          if (!c.image) {
            c.image = this.DefaultImage;
          }

        });
        
        products.forEach(p => {
          this.producttoRead ={
            name: "juice",
          }
        
          this.producttoRead!.id = p.id;
          this.producttoRead!.name = p.name;
          this.producttoRead!.image = p.image;
          this.producttoRead!.price = p.price;
          this.producttoRead!.productCount = 0;
          this.productsReadDTO.push(this.producttoRead!);

          
        });
        // this.products = products;
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      },
    });

  }

}
