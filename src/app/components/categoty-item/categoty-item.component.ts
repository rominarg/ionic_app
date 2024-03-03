import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category.models';

@Component({
  selector: 'app-categoty-item',
  templateUrl: './categoty-item.component.html',
  styleUrls: ['./categoty-item.component.scss'],
})
export class CategotyItemComponent {
@Input() item: Category;
}
