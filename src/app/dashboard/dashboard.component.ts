import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductService} from '../shared/service/product.service';
import {ProductDto} from '../shared/service/product-dto-model';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  products$: Observable<ProductDto[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts().pipe(takeUntilDestroyed());
  }


}
