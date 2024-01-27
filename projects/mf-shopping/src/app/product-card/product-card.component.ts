import { Component, Input } from '@angular/core';
import { IProductCard } from '../interfaces/product-card.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: IProductCard;

 // constructor(private _commonsLibService: CommonsLibService) {}
  clickCard(): void {

    // this._commonsLibService.sendData({
    //   name: this.product!.name,
    //   price: this.product!.price,
    // });
  }
}
