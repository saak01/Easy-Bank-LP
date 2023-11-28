import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent {
  @Input() titleCard: String | undefined;
  @Input() text: String | undefined;
  @Input() imageUrl: String | undefined;
  @Input() author: String | undefined;

}
