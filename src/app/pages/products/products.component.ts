import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService) { }
  products: any | undefined;
  ngOnInit(): void {

    this.productService.getAllProducts()
      .subscribe(result => this.products = result,
        errors => console.log(errors)
    );
  }
}
