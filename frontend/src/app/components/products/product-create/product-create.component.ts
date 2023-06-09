import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductsService, private router: Router) { }

  createProduct():void {
    this.productService.create(this.product).subscribe(() => {
      return this.productService.showMessage('Sucesso!');
    }); 
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
  }

}
