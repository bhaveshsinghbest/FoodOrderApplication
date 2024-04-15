import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getAll():string[]{
  return [
    '/assets/1.jpeg',
    '/assets/2.jpeg',
    '/assets/3.jpeg',
    '/assets/4.jpeg',
    '/assets/5.jpeg',
    '/assets/6.jpeg',
    '/assets/7.jpeg',
    '/assets/8.jpeg'
  ]
}
}