import {PartDto} from "./part-dto-model";

export interface ProductDto {
    id: number;
    productName: string;
    status: string;
    parts: PartDto[];
}
