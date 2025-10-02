import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../models/ingredient.model';
import { IngredientCard } from '../ingredient-card/ingredient-card';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-recipe-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, IngredientCard, DragDropModule],
  templateUrl: './recipe-panel.html',
  styleUrl: './recipe-panel.scss'
})
export class RecipePanel {
  @Input() selectedIngredients: { ingredient: Ingredient; grams: number }[] = [];

  onDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      // Przenoszenie w ramach tego samego kontenera (sortowanie)
      moveItemInArray(this.selectedIngredients, event.previousIndex, event.currentIndex);
    } else {
      // Przenoszenie z listy składników do panelu przepisu
      const ingredient: Ingredient = event.item.data;
      
      // Sprawdź czy składnik już istnieje
      const exists = this.selectedIngredients.find(si => si.ingredient.id === ingredient.id);
      if (!exists) {
        // Wstaw składnik w pozycji gdzie został upuszczony
        const newIngredient = { ingredient, grams: 100 };
        this.selectedIngredients.splice(event.currentIndex, 0, newIngredient);
      }
    }
  }

  trackByIngredient(index: number, item: { ingredient: Ingredient; grams: number }): any {
    return item.ingredient.id;
  }

  onRemoveIngredient(ingredient: Ingredient) {
    const index = this.selectedIngredients.findIndex(si => si.ingredient.id === ingredient.id);
    if (index > -1) {
      this.selectedIngredients.splice(index, 1);
    }
  }

  clearAll() {
    // Czyść tablicę zamiast przypisywać nową (zachowaj referencję)
    this.selectedIngredients.splice(0, this.selectedIngredients.length);
  }
}