import { Injectable, EventEmitter } from '@angular/core';

import {Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addedIngredient = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.addedIngredient.emit(this.ingredients.slice());
  }

  addIngredientToShop(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.addedIngredient.emit(this.ingredients.slice());
  }
}
