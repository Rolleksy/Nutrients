import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-ingredient-card',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './ingredient-card.html',
  styleUrls: ['./ingredient-card.scss']
})
export class IngredientCard {
  @Input() ingredient!: Ingredient;
  @Input() grams: number = 0;
  @Output() gramsChange = new EventEmitter<number>();
  @Output() removeIngredient = new EventEmitter<Ingredient>();

  isEditingGrams = false;
  tempGrams = 0;

  calcCalories() {
    return (this.grams / 100) * this.ingredient.caloriesPer100g;
  }
  calcProtein() {
    return (this.grams / 100) * this.ingredient.proteinPer100g;
  }
  calcCarbs() {
    return (this.grams / 100) * this.ingredient.carbsPer100g;
  }
  calcFat() {
    return (this.grams / 100) * this.ingredient.fatPer100g;
  }

  onRemove() {
    this.removeIngredient.emit(this.ingredient);
  }

  startEditingGrams() {
    this.isEditingGrams = true;
    this.tempGrams = this.grams;
  }

  confirmGramsEdit() {
    if (this.tempGrams >= 0 && this.tempGrams <= 500) {
      this.gramsChange.emit(this.tempGrams);
    }
    this.isEditingGrams = false;
  }

  cancelGramsEdit() {
    this.isEditingGrams = false;
    this.tempGrams = this.grams;
  }

  onGramsInputKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.confirmGramsEdit();
    } else if (event.key === 'Escape') {
      this.cancelGramsEdit();
    }
  }
}
