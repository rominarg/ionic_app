import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
    providedIn: 'root'
})

export class FoodService {
    getFoods(): Food[] {
        return [
            { 
              id: 1,
              title: 'Sea Food',
              price: 12,
              image: 'assets/images/01.png',
              description: 'In addition on the...'
            },
            { 
              id: 2,
              title: 'Hamburger',
              price: 8,
              image: 'assets/images/02.png',
              description: 'Delicious hamburger with...'
            },
            { 
              id: 3,
              title: 'Mussels',
              price: 15,
              image: 'assets/images/03.png',
              description: 'Fresh mussels cooked with...'
            },
            { 
              id: 4,
              title: 'Pizza',
              price: 10,
              image: 'assets/images/04.png',
              description: 'Authentic Italian pizza topped with...'
            },
            { 
              id: 5,
              title: 'Breakfast',
              price: 7,
              image: 'assets/images/05.png',
              description: 'Hearty breakfast with eggs, bacon, and toast.'
            },
            // Agrega más comidas según sea necesario
        ];
    }

    getFood(id: number): Food | undefined {
        return this.getFoods().find((food) => food.id === id);
    }
}
