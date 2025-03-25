import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductDto} from './product-dto-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    /**
     * Returns all available products.
     */
    getProducts(): Observable<ProductDto[]> {
        return this.getJSON();
    }

    private getJSON(): Observable<any> {
        return this.http.get("./data/products.json");
    }
}
