import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../models/ingredient.model';
import { IngredientType } from '../models/ingredientType.model';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],
  templateUrl: './ingredients-list.html',
  styleUrl: './ingredients-list.scss'
})
export class IngredientsList {
  @Input() ingredients: Ingredient[] = [];
  @Input() ingredientTypes: IngredientType[] = [];
  @Input() selectedIngredientType: IngredientType | null = null;
  
  @Output() ingredientDropped = new EventEmitter<Ingredient>();
  @Output() typeSelected = new EventEmitter<IngredientType | null>();
  @Output() ingredientDoubleClicked = new EventEmitter<Ingredient>();

  // Nowe właściwości dla wyszukiwania
  searchTerm: string = '';
  selectedLetter: string | null = null;

  // Alfabet polski
  alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Computed property dla dostępnych liter
  get availableLetters(): string[] {
    const usedLetters = new Set<string>();
    this.filteredIngredients.forEach(ing => {
      const firstLetter = ing.name.charAt(0).toUpperCase();
      usedLetters.add(firstLetter);
    });
    return this.alphabet.filter(letter => usedLetters.has(letter));
  }

  // Computed property dla filtrowanych składników
  get filteredIngredients(): Ingredient[] {
    let filtered = this.ingredients;

    // Filtruj według typu
    if (this.selectedIngredientType) {
      filtered = filtered.filter(ing => ing.ingredientType.id === this.selectedIngredientType!.id);
    }

    // Filtruj według wyszukiwanej frazy
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(ing => 
        ing.name.toLowerCase().includes(searchLower) ||
        ing.ingredientType.name.toLowerCase().includes(searchLower)
      );
    }

    // Filtruj według wybranej litery
    if (this.selectedLetter) {
      filtered = filtered.filter(ing => 
        ing.name.charAt(0).toUpperCase() === this.selectedLetter
      );
    }

    // Sortuj alfabetycznie po nazwie
    return filtered.sort((a, b) => a.name.localeCompare(b.name, 'pl'));
  }

  onDrop(event: CdkDragDrop<Ingredient[]>) {
    // Ta lista jest tylko źródłem - nie obsługujemy dropowania tutaj
    // Wszystkie drop eventy będą obsługiwane przez docelowe kontenery
  }

  selectType(type: IngredientType | null) {
    this.typeSelected.emit(type);
  }

  isTypeSelected(type: IngredientType): boolean {
    return this.selectedIngredientType?.id === type.id;
  }

  // Metoda do czyszczenia wyszukiwania
  clearSearch() {
    this.searchTerm = '';
  }

  // Metoda do wyboru litery
  selectLetter(letter: string | null) {
    this.selectedLetter = letter;
  }

  // Metoda sprawdzająca czy litera jest wybrana
  isLetterSelected(letter: string): boolean {
    return this.selectedLetter === letter;
  }

  // Metoda sprawdzająca czy litera ma składniki
  hasIngredientsForLetter(letter: string): boolean {
    return this.availableLetters.includes(letter);
  }

  // Metoda do sprawdzenia czy są jakieś wyniki
  get hasResults(): boolean {
    return this.filteredIngredients.length > 0;
  }

  // Metoda do sprawdzenia czy są zastosowane filtry
  get hasActiveFilters(): boolean {
    return this.searchTerm.trim() !== '' || this.selectedIngredientType !== null || this.selectedLetter !== null;
  }

  // Metoda do czyszczenia wszystkich filtrów
  clearAllFilters() {
    this.searchTerm = '';
    this.selectedLetter = null;
    this.selectType(null);
  }

  onIngredientDoubleClick(ingredient: Ingredient) {
    this.ingredientDoubleClicked.emit(ingredient);
  }
}

