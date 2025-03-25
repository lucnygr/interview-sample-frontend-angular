import {Component} from '@angular/core';
import {ProductEditComponent} from "./product-edit/product-edit.component";

@Component({
    selector: 'app-product-management',
    standalone: true,
    imports: [
        ProductEditComponent
    ],
    templateUrl: './product-management.component.html',
    styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {

    saveProduct() {
        // TODO implement save product and log user input to console
    }

}
