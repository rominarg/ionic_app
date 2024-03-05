import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.models';
import { Food } from '../models/food.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  food: Food[] = [];
  constructor() { }

  ngOnInit() {
    // Llama al método getCategories al iniciar la página
    this.getCategories();
  }

  getCategories() {
    // Asigna las categorías al array
    this.categories = [
      {
        id: 1,
        label: 'all',
        image: 'assets/images/restaurant.svg',
        active: false,
      },
      {
        id: 2,
        label: 'Burgers',
        image: 'assets/images/burguer.svg', 
        active: false,
      },
      {
        id: 3,
        label: 'Pizza',
        image: 'assets/images/pizza.svg', 
        active: false,
      },
      {
        id: 4,
        label: 'Ice Cream',
        image: 'assets/images/icecream.svg', 
        active: false,
      },
    ];
  }
}
