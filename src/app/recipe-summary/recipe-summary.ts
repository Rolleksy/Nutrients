import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-recipe-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-summary.html',
  styleUrl: './recipe-summary.scss'
})
export class RecipeSummary {
  @Input() selectedIngredients: { ingredient: Ingredient; grams: number}[] = [];

  get totalGrams() {
    return this.selectedIngredients
      .map(si => si.grams)
      .reduce((a, b) => a + b, 0);
  }

  get totalCalories() {
    return this.selectedIngredients
    .map(si => (si.grams/100) * si.ingredient.caloriesPer100g)
    .reduce((a, b) => a + b, 0);
  }

  get totalProtein(){
    return this.selectedIngredients
    .map(si => (si.grams/100) * si.ingredient.proteinPer100g)
    .reduce((a, b) => a + b, 0);
  }

  get totalCarbs() {
    return this.selectedIngredients
    .map(si => (si.grams/100) * si.ingredient.carbsPer100g)
    .reduce((a, b) => a + b, 0);
  }

  get totalFat() {
    return this.selectedIngredients
    .map(si => (si.grams/100) * si.ingredient.fatPer100g)
    .reduce((a, b) => a + b, 0);
  }

  get ingredientsCount() {
    return this.selectedIngredients.length;
  }
}
