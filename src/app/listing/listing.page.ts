import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.models';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];

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
        image: 'URL_DE_LA_IMAGEN', // Reemplaza con la URL de la imagen
        active: false,
      },
      {
        id: 3,
        label: 'Dishes',
        image: 'URL_DE_LA_IMAGEN', // Reemplaza con la URL de la imagen
        active: false,
      },
      {
        id: 4,
        label: 'Sushi',
        image: 'URL_DE_LA_IMAGEN', // Reemplaza con la URL de la imagen
        active: false,
      },
    ];
  }
}
