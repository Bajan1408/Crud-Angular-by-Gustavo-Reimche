import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  this.productService.readById(id as string).subscribe(product => {
    this.product = product;
    console.log(product);
   })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id as number).subscribe(() => {
       this.productService.showMessage('Produto excluído com sucesso!');
    })
    this.router.navigate(['/products']);
 }
 
 
 cancel():void {
   this.router.navigate(['/products']);
 }
 



}


