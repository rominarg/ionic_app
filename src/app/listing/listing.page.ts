import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.models';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
categories: Category[] = [] 
  constructor() { }

  ngOnInit() {}

  getCategories () {
    this.categories = [
      {
        id:1,
        label:'all',
        image: 'asset/icon/all.png',
        active: false,
      },
      {
        id:2,
        label:'Burgers',
        image: 
        active: false,
      },
      {
        id:3,
        label:'dishes',
        image: 
        active: false,
      },
      {
        id:4,
        label:'sushi',
        image: 
        active: false,
      },
    ];
  }
}
