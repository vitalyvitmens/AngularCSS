import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  products: IProduct[] = [];
  url: string = 'http://localhost:4200/products';

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 10 },
        }),
      })
      .pipe(
        delay(100),
        retry(2),
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap((prod) => {
          this.products.push(prod);
        })
      );
  }

  postProduct(product: IProduct) {
    return this.http.post<IProduct>(this.url, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  updateProduct(product: IProduct) {
    return this.http.put<IProduct>(`${this.url}/${product.id}`, product);
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
