import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products:Product[] = [];

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }

}
