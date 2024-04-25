import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag=='All'?
     this.getAll(): this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      {name:"pizza",count:8},
      {name:"burger",count:5},
      {name:"Lunch",count:6},
      {name:"Dinner",count:13},
      {name:"fastfood",count:19},
      {name:"Golgappa",count:9},
      {name:"oizzapuff",count:3},
      {name:"drink",count:5}
    ];

  }

getAll():Foods[]{
  return [
   {
    id: 1,
    price: 100,
    name: 'Pizza',
    favorite:false,
    star:4.5,
    tags: ['Fast food','Pizza','Lunch'],
    imageUrl: "/assets/1.jpeg",
    cookTime: '10-20',
    origins: ['Italy'],
   },
   {
    id: 2,
    price: 200,
    name: 'Burger',
    favorite:false,
    star:4.5,
    tags: ['Fast food'],
    imageUrl: "/assets/2.jpeg",
    cookTime: '30-40',
    origins: ['Italy'],
   },
   {
    id: 3,
    price: 300,
    name: 'Pizza',
    favorite:false,
    star:4.5,
    tags: ['Pizza','Lunch'],
    imageUrl: "/assets/3.jpeg",
    cookTime: '10-20',
    origins: ['Italy'],
   },
   {
    id: 4,
    price: 400,
    name: 'Pizza',
    favorite:false,
    star:4.5,
    tags: ['Fast food','Lunch'],
    imageUrl: "/assets/4.jpeg",
    cookTime: '10-20',
    origins: ['Japan'],
   },
   {
    id: 5,
    price: 500,
    name: 'Pizza',
    favorite:false,
    star:4.5,
    tags: ['Fast food','Pizza','Lunch'],
    imageUrl: "/assets/5.jpeg",
    cookTime: '10-20',
    origins: ['Italy'],
   },
   {
    id: 6,
    price: 600,
    name: 'Pizza',
    favorite:false,
    star:4.5,
    tags: ['Fast food','Pizza','Lunch'],
    imageUrl: "/assets/6.jpeg",
    cookTime: '10-20',
    origins: ['Italy'],
   },
   {
    id: 7,
    price: 700,
    name: 'Pizza',
    favorite:false,
    star:4.5,
    tags: ['Fast food','Pizza'],
    imageUrl: "/assets/7.jpeg",
    cookTime: '10-20',
    origins: ['Italy'],
   },
   {
    id: 8,
    price: 800,
    name: 'Pizza',
    favorite:false,
    star:4.5,
    tags: ['Fast food','Pizza','Lunch'],
    imageUrl: "/assets/8.jpeg",
    cookTime: '10-20',
    origins: ['Italy'],
   },
  ]
}
}