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
        image: 'asset/icon/all.png',
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
        label: 'dishes',
        image: 'URL_DE_LA_IMAGEN', // Reemplaza con la URL de la imagen
        active: false,
      },
      {
        id: 4,
        label: 'sushi',
        image: 'URL_DE_LA_IMAGEN', // Reemplaza con la URL de la imagen
        active: false,
      },
    ];
  }
}
