import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: []
})
export class RecipeDetailComponent  {
   @Input() recipe: Recipe;

  constructor(private service: RecipesService) { 
    this.service.selectedRecipe
        .subscribe(
          (recipe: Recipe) => this.recipe = recipe
        )
  }

  addIngredient(){
    this.service.addIngredientToShop(this.recipe.ingredients);
  }

}
