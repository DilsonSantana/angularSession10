import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Hamburgues', 2),
        new Ingredient('Alface', 1),
        new Ingredient('Queijo', 1),
        new Ingredient('Molho Especial', 1),
        new Ingredient('Cebola', 1),
        new Ingredient('Pickles', 2),
        new Ingredient('Pão', 1)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Queijo', 1),
        new Ingredient('Molho Especial', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShop(ingredient: Ingredient[]){
    this.slService.addIngredientToShop(ingredient);
  }

}
