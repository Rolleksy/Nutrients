import { Component, signal } from '@angular/core';
import { RecipePanel } from './recipe-panel/recipe-panel';
import { IngredientsList } from './ingredients-list/ingredients-list';
import { RecipeSummary } from './recipe-summary/recipe-summary';
import { Ingredient } from './models/ingredient.model';
import { ThreeScene } from './three-scene/three-scene';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IngredientType } from './models/ingredientType.model';
import { IngredientsDataService } from './services/ingredients-data.service';

@Component({
  selector: 'app-root',
  imports: [RecipePanel, RecipeSummary, IngredientsList, ThreeScene, DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  isDarkMode = signal(false);
  
  ingredientTypes: IngredientType[];
  ingredients: Ingredient[];
  selectedIngredientType: IngredientType | null = null;
  selectedIngredients: { ingredient: Ingredient; grams: number }[] = [];

  constructor(private ingredientsDataService: IngredientsDataService) {
    this.ingredientTypes = this.ingredientsDataService.getIngredientTypes();
    this.ingredients = this.ingredientsDataService.getIngredients();
  }

  onAddIngredient(ingredient: Ingredient){
    const existingIngr = this.selectedIngredients.find(si => si.ingredient.id === ingredient.id);
    if (existingIngr){
      existingIngr.grams += 50;
    } else {
      this.selectedIngredients.push({ingredient, grams: 100});
    }
  }

  selectIngredientType(type: IngredientType | null) {
    this.selectedIngredientType = type;
  }

  isTypeSelected(type: IngredientType): boolean {
    return this.selectedIngredientType?.id === type.id;
  }

  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
}
