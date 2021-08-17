import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  apiUrl: string = environment.apiUrl;
  products: any | undefined;
  pageSize: number | undefined;
  currentSize: number | undefined
  ngOnInit(): void {

    this.productService.getProductsPerPage()
      .subscribe(result => {
          this.products = result.products,
          this.pageSize = result.pageSize,
          this.currentSize = result.currentPage
        },
        errors => console.log(errors)
    );
  }
}
