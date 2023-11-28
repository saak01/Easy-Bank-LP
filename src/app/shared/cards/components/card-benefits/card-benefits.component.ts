import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-benefits',
  templateUrl: './card-benefits.component.html',
  styleUrls: ['./card-benefits.component.scss']
})
export class CardBenefitsComponent {
  @Input() titleCard: String | undefined;
  @Input() text: String | undefined;
  @Input() imageUrl: String | undefined;
}
