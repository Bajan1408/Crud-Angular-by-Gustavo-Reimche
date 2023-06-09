import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  base_url:string = 'http://localhost:3001/products';

  constructor(private snackbar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg:string) {
    this.snackbar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product:Product): Observable<Product> {
     return this.http.post<Product>(this.base_url, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base_url);
  }

  readById(id:string): Observable<Product> {
    return this.http.get<Product>(`${this.base_url}/${id}`);
  }

  update(product:Product): Observable<Product> {
    return this.http.put<Product>(`${this.base_url}/${product.id}`, product);
  }

  delete(id:number): Observable<Product> {
    return this.http.delete<Product>(`${this.base_url}/${id}`);
  }
}
 