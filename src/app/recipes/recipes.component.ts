import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

import { RecipesService } from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private serviceRecipe: RecipesService) { }

  ngOnInit() {
    this.serviceRecipe.selectedRecipe.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    )
  }

}
