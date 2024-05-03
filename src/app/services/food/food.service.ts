import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'Fast food', count: 4 },
      { name: 'Non-Vegetarian', count: 2 },
      { name: 'Vegetarian', count: 6 },
      { name: 'Fruits', count: 1 },
      { name: 'Chinese', count: 2 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 500,
        name: 'Pizza',
        favorite: false,
        star: 4,
        tags: ['Fast food', 'Vegetarian'],
        imageUrl: '/assets/1.jpeg',
        cookTime: '20-30',
        origins: ['American'],
      },
      {
        id: 2,
        price: 100,
        name: 'Fish',
        favorite: false,
        star: 4.5,
        tags: ['Non-Vegetarian'],
        imageUrl: '/assets/2.jpeg',
        cookTime: '40-50',
        origins: ['Indian', 'Srilanka'],
      },
      {
        id: 3,
        price: 800,
        name: 'Mutton',
        favorite: false,
        star: 4.8,
        tags: ['Non-Vegetarian'],
        imageUrl: '/assets/3.jpeg',
        cookTime: '50-55',
        origins: ['Indian', 'USA', 'Russia'],
      },
      {
        id: 4,
        price: 50,
        name: 'Paani puri',
        favorite: false,
        star: 4.5,
        tags: ['Fast food', 'Vegetarian'],
        imageUrl: '/assets/4.jpeg',
        cookTime: '10-15',
        origins: ['Indian', 'Nepal', 'Srilanla'],
      },
      {
        id: 5,
        price: 100,
        name: 'Chowmein',
        favorite: false,
        star: 4.5,
        tags: ['Fast food', 'Chinese', 'Vegetarian'],
        imageUrl: '/assets/5.jpeg',
        cookTime: '15-20',
        origins: ['Italy', 'China'],
      },
      {
        id: 6,
        price: 150,
        name: 'Mango',
        favorite: false,
        star: 5,
        tags: ['Fruits', 'Vegetarian'],
        imageUrl: '/assets/6.jpeg',
        cookTime: '10-20',
        origins: ['India'],
      },
      {
        id: 7,
        price: 80,
        name: 'Momos',
        favorite: false,
        star: 3,
        tags: ['Fast food', 'Chinese', 'Vegetarian'],
        imageUrl: '/assets/7.jpeg',
        cookTime: '10-20',
        origins: ['India', 'China'],
      },
      {
        id: 8,
        price: 300,
        name: 'Indian Thali',
        favorite: false,
        star: 5,
        tags: ['Vegetarian'],
        imageUrl: '/assets/8.jpeg',
        cookTime: '20-30',
        origins: ['India'],
      },
    ];
  }
}
