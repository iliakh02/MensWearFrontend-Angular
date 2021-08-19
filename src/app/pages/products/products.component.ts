import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {
  }
  apiUrl: string = environment.apiUrl;
  products: any | undefined;
  itemsPerPage: number = 4;
  currPage: number | undefined;
  totalItems: number | undefined;

  ngOnInit(): void {
    this.getProductsPerPageEvent();
  }

  getProductsPerPageEvent(page: number = 1) {
    this.productService.getProductsPerPage(this.itemsPerPage, page)
      .subscribe(result => {
        console.log(result),
          this.products = result.products,
          this.itemsPerPage = result.pageSize,
          this.currPage = result.currentPage,
          this.totalItems = result.totalItems
      },
        errors => console.log(errors)
      );
  }
}
