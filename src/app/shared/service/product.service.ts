import {Injectable} from '@angular/core';
import * as productData from '../../../../public/data/products.json';
import {delay, Observable, of} from 'rxjs';
import {ProductDto} from './product-dto-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductDto[]> {
    return this.getJSON();
    //return of(productData).pipe(delay(2000));
  }

  public getJSON(): Observable<any> {
    return this.http.get("./data/products.json");
  }
}
