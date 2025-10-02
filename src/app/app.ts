import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipePanel } from './recipe-panel/recipe-panel';
import { IngredientsList } from './ingredients-list/ingredients-list';
import { RecipeSummary } from './recipe-summary/recipe-summary';
import { Ingredient } from './models/ingredient.model';
import { ThreeScene } from './three-scene/three-scene';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IngredientType } from './models/ingredientType.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipePanel, RecipeSummary, IngredientsList, ThreeScene, DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  // Dark mode state
  isDarkMode = signal(false);
  
  // Definiujemy typy składników
  ingredientTypes: IngredientType[] = [
    { id: 1, name: 'Mięso', color: '#FF6B6B' },
    { id: 2, name: 'Warzywa', color: '#4ECDC4' },
    { id: 3, name: 'Wyroby mleczne', color: '#45B7D1' },
    { id: 4, name: 'Zboża', color: '#FFA07A' },
    { id: 5, name: 'Owoce', color: '#98D8C8' },
    { id: 6, name: 'Tłuszcze', color: '#F7DC6F' }
  ];

  ingredients: Ingredient[] = [
    // MIĘSO (15 składników)
    { id: 1, name: 'Kurczak', caloriesPer100g: 165, proteinPer100g: 31, carbsPer100g: 0, fatPer100g: 3.6, ingredientType: this.ingredientTypes[0] },
    { id: 2, name: 'Wołowina', caloriesPer100g: 250, proteinPer100g: 26, carbsPer100g: 0, fatPer100g: 17, ingredientType: this.ingredientTypes[0] },
    { id: 3, name: 'Wieprzowina', caloriesPer100g: 242, proteinPer100g: 27, carbsPer100g: 0, fatPer100g: 14, ingredientType: this.ingredientTypes[0] },
    { id: 4, name: 'Indyk', caloriesPer100g: 189, proteinPer100g: 29, carbsPer100g: 0, fatPer100g: 7, ingredientType: this.ingredientTypes[0] },
    { id: 5, name: 'Łosoś', caloriesPer100g: 208, proteinPer100g: 25, carbsPer100g: 0, fatPer100g: 12, ingredientType: this.ingredientTypes[0] },
    { id: 6, name: 'Tuńczyk', caloriesPer100g: 144, proteinPer100g: 30, carbsPer100g: 0, fatPer100g: 1, ingredientType: this.ingredientTypes[0] },
    { id: 7, name: 'Dorsz', caloriesPer100g: 82, proteinPer100g: 18, carbsPer100g: 0, fatPer100g: 1, ingredientType: this.ingredientTypes[0] },
    { id: 8, name: 'Jajka', caloriesPer100g: 155, proteinPer100g: 13, carbsPer100g: 1, fatPer100g: 11, ingredientType: this.ingredientTypes[0] },
    { id: 9, name: 'Krewetki', caloriesPer100g: 99, proteinPer100g: 18, carbsPer100g: 0, fatPer100g: 1.5, ingredientType: this.ingredientTypes[0] },
    { id: 10, name: 'Baranina', caloriesPer100g: 294, proteinPer100g: 25, carbsPer100g: 0, fatPer100g: 21, ingredientType: this.ingredientTypes[0] },
    { id: 11, name: 'Kaczka', caloriesPer100g: 337, proteinPer100g: 19, carbsPer100g: 0, fatPer100g: 28, ingredientType: this.ingredientTypes[0] },
    { id: 12, name: 'Sardynki', caloriesPer100g: 208, proteinPer100g: 25, carbsPer100g: 0, fatPer100g: 11, ingredientType: this.ingredientTypes[0] },
    { id: 13, name: 'Makrela', caloriesPer100g: 305, proteinPer100g: 19, carbsPer100g: 0, fatPer100g: 25, ingredientType: this.ingredientTypes[0] },
    { id: 14, name: 'Cielęcina', caloriesPer100g: 172, proteinPer100g: 31, carbsPer100g: 0, fatPer100g: 5, ingredientType: this.ingredientTypes[0] },
    { id: 15, name: 'Królik', caloriesPer100g: 173, proteinPer100g: 33, carbsPer100g: 0, fatPer100g: 4, ingredientType: this.ingredientTypes[0] },

    // WARZYWA (15 składników)
    { id: 16, name: 'Marchew', caloriesPer100g: 41, proteinPer100g: 0.9, carbsPer100g: 10, fatPer100g: 0.2, ingredientType: this.ingredientTypes[1] },
    { id: 17, name: 'Brokuły', caloriesPer100g: 34, proteinPer100g: 2.8, carbsPer100g: 7, fatPer100g: 0.4, ingredientType: this.ingredientTypes[1] },
    { id: 18, name: 'Szpinak', caloriesPer100g: 23, proteinPer100g: 2.9, carbsPer100g: 3.6, fatPer100g: 0.4, ingredientType: this.ingredientTypes[1] },
    { id: 19, name: 'Pomidory', caloriesPer100g: 18, proteinPer100g: 0.9, carbsPer100g: 3.9, fatPer100g: 0.2, ingredientType: this.ingredientTypes[1] },
    { id: 20, name: 'Ogórki', caloriesPer100g: 16, proteinPer100g: 0.7, carbsPer100g: 4, fatPer100g: 0.1, ingredientType: this.ingredientTypes[1] },
    { id: 21, name: 'Kapusta', caloriesPer100g: 25, proteinPer100g: 1.3, carbsPer100g: 6, fatPer100g: 0.1, ingredientType: this.ingredientTypes[1] },
    { id: 22, name: 'Cebula', caloriesPer100g: 40, proteinPer100g: 1.1, carbsPer100g: 9, fatPer100g: 0.1, ingredientType: this.ingredientTypes[1] },
    { id: 23, name: 'Czosnek', caloriesPer100g: 149, proteinPer100g: 6.4, carbsPer100g: 33, fatPer100g: 0.5, ingredientType: this.ingredientTypes[1] },
    { id: 24, name: 'Papryka', caloriesPer100g: 31, proteinPer100g: 1, carbsPer100g: 7, fatPer100g: 0.3, ingredientType: this.ingredientTypes[1] },
    { id: 25, name: 'Kalafior', caloriesPer100g: 25, proteinPer100g: 1.9, carbsPer100g: 5, fatPer100g: 0.3, ingredientType: this.ingredientTypes[1] },
    { id: 26, name: 'Buraki', caloriesPer100g: 43, proteinPer100g: 1.6, carbsPer100g: 10, fatPer100g: 0.2, ingredientType: this.ingredientTypes[1] },
    { id: 27, name: 'Ziemniaki', caloriesPer100g: 77, proteinPer100g: 2, carbsPer100g: 17, fatPer100g: 0.1, ingredientType: this.ingredientTypes[1] },
    { id: 28, name: 'Bakłażan', caloriesPer100g: 25, proteinPer100g: 1, carbsPer100g: 6, fatPer100g: 0.2, ingredientType: this.ingredientTypes[1] },
    { id: 29, name: 'Cukinia', caloriesPer100g: 17, proteinPer100g: 1.2, carbsPer100g: 3, fatPer100g: 0.3, ingredientType: this.ingredientTypes[1] },
    { id: 30, name: 'Seler', caloriesPer100g: 16, proteinPer100g: 0.7, carbsPer100g: 3, fatPer100g: 0.2, ingredientType: this.ingredientTypes[1] },

    // WYROBY MLECZNE (15 składników)
    { id: 31, name: 'Mleko', caloriesPer100g: 42, proteinPer100g: 3.4, carbsPer100g: 5, fatPer100g: 1, ingredientType: this.ingredientTypes[2] },
    { id: 32, name: 'Ser żółty', caloriesPer100g: 113, proteinPer100g: 25, carbsPer100g: 1, fatPer100g: 3.4, ingredientType: this.ingredientTypes[2] },
    { id: 33, name: 'Jogurt naturalny', caloriesPer100g: 59, proteinPer100g: 10, carbsPer100g: 3.6, fatPer100g: 0.4, ingredientType: this.ingredientTypes[2] },
    { id: 34, name: 'Twaróg', caloriesPer100g: 98, proteinPer100g: 18, carbsPer100g: 3, fatPer100g: 1, ingredientType: this.ingredientTypes[2] },
    { id: 35, name: 'Masło', caloriesPer100g: 717, proteinPer100g: 0.9, carbsPer100g: 0.1, fatPer100g: 81, ingredientType: this.ingredientTypes[2] },
    { id: 36, name: 'Kefir', caloriesPer100g: 41, proteinPer100g: 2.9, carbsPer100g: 4, fatPer100g: 1, ingredientType: this.ingredientTypes[2] },
    { id: 37, name: 'Śmietana', caloriesPer100g: 193, proteinPer100g: 2.1, carbsPer100g: 3.4, fatPer100g: 20, ingredientType: this.ingredientTypes[2] },
    { id: 38, name: 'Ser feta', caloriesPer100g: 264, proteinPer100g: 14, carbsPer100g: 4, fatPer100g: 21, ingredientType: this.ingredientTypes[2] },
    { id: 39, name: 'Mozzarella', caloriesPer100g: 280, proteinPer100g: 28, carbsPer100g: 2.2, fatPer100g: 17, ingredientType: this.ingredientTypes[2] },
    { id: 40, name: 'Parmezan', caloriesPer100g: 431, proteinPer100g: 38, carbsPer100g: 4, fatPer100g: 29, ingredientType: this.ingredientTypes[2] },
    { id: 41, name: 'Camembert', caloriesPer100g: 299, proteinPer100g: 20, carbsPer100g: 0.5, fatPer100g: 24, ingredientType: this.ingredientTypes[2] },
    { id: 42, name: 'Ricotta', caloriesPer100g: 174, proteinPer100g: 11, carbsPer100g: 3, fatPer100g: 13, ingredientType: this.ingredientTypes[2] },
    { id: 43, name: 'Ser pleśniowy', caloriesPer100g: 353, proteinPer100g: 21, carbsPer100g: 2, fatPer100g: 29, ingredientType: this.ingredientTypes[2] },
    { id: 44, name: 'Mleko kokosowe', caloriesPer100g: 230, proteinPer100g: 2.3, carbsPer100g: 6, fatPer100g: 24, ingredientType: this.ingredientTypes[2] },
    { id: 45, name: 'Ser cottage', caloriesPer100g: 98, proteinPer100g: 11, carbsPer100g: 3.4, fatPer100g: 4.3, ingredientType: this.ingredientTypes[2] },

    // ZBOŻA (15 składników)
    { id: 46, name: 'Ryż', caloriesPer100g: 130, proteinPer100g: 2.7, carbsPer100g: 28, fatPer100g: 0.3, ingredientType: this.ingredientTypes[3] },
    { id: 47, name: 'Owies', caloriesPer100g: 389, proteinPer100g: 17, carbsPer100g: 66, fatPer100g: 7, ingredientType: this.ingredientTypes[3] },
    { id: 48, name: 'Pszenica', caloriesPer100g: 339, proteinPer100g: 13, carbsPer100g: 72, fatPer100g: 2, ingredientType: this.ingredientTypes[3] },
    { id: 49, name: 'Quinoa', caloriesPer100g: 368, proteinPer100g: 14, carbsPer100g: 64, fatPer100g: 6, ingredientType: this.ingredientTypes[3] },
    { id: 50, name: 'Bulgur', caloriesPer100g: 342, proteinPer100g: 12, carbsPer100g: 76, fatPer100g: 1.3, ingredientType: this.ingredientTypes[3] },
    { id: 51, name: 'Jęczmień', caloriesPer100g: 354, proteinPer100g: 12, carbsPer100g: 73, fatPer100g: 2.3, ingredientType: this.ingredientTypes[3] },
    { id: 52, name: 'Kasza gryczana', caloriesPer100g: 343, proteinPer100g: 13, carbsPer100g: 72, fatPer100g: 3.4, ingredientType: this.ingredientTypes[3] },
    { id: 53, name: 'Kasza jaglana', caloriesPer100g: 378, proteinPer100g: 11, carbsPer100g: 73, fatPer100g: 4.2, ingredientType: this.ingredientTypes[3] },
    { id: 54, name: 'Amarantus', caloriesPer100g: 371, proteinPer100g: 14, carbsPer100g: 65, fatPer100g: 7, ingredientType: this.ingredientTypes[3] },
    { id: 55, name: 'Chleb pełnoziarnisty', caloriesPer100g: 247, proteinPer100g: 13, carbsPer100g: 41, fatPer100g: 4.2, ingredientType: this.ingredientTypes[3] },
    { id: 56, name: 'Makaron pełnoziarnisty', caloriesPer100g: 348, proteinPer100g: 15, carbsPer100g: 67, fatPer100g: 2.5, ingredientType: this.ingredientTypes[3] },
    { id: 57, name: 'Płatki owsiane', caloriesPer100g: 389, proteinPer100g: 17, carbsPer100g: 66, fatPer100g: 7, ingredientType: this.ingredientTypes[3] },
    { id: 58, name: 'Ryż brązowy', caloriesPer100g: 111, proteinPer100g: 2.6, carbsPer100g: 23, fatPer100g: 0.9, ingredientType: this.ingredientTypes[3] },
    { id: 59, name: 'Żyto', caloriesPer100g: 338, proteinPer100g: 10, carbsPer100g: 76, fatPer100g: 1.6, ingredientType: this.ingredientTypes[3] },
    { id: 60, name: 'Chia', caloriesPer100g: 486, proteinPer100g: 17, carbsPer100g: 42, fatPer100g: 31, ingredientType: this.ingredientTypes[3] },

    // OWOCE (15 składników)
    { id: 61, name: 'Jabłko', caloriesPer100g: 52, proteinPer100g: 0.3, carbsPer100g: 14, fatPer100g: 0.2, ingredientType: this.ingredientTypes[4] },
    { id: 62, name: 'Banan', caloriesPer100g: 89, proteinPer100g: 1.1, carbsPer100g: 23, fatPer100g: 0.3, ingredientType: this.ingredientTypes[4] },
    { id: 63, name: 'Pomarańcza', caloriesPer100g: 47, proteinPer100g: 0.9, carbsPer100g: 12, fatPer100g: 0.1, ingredientType: this.ingredientTypes[4] },
    { id: 64, name: 'Truskawki', caloriesPer100g: 32, proteinPer100g: 0.7, carbsPer100g: 8, fatPer100g: 0.3, ingredientType: this.ingredientTypes[4] },
    { id: 65, name: 'Borówki', caloriesPer100g: 57, proteinPer100g: 0.7, carbsPer100g: 14, fatPer100g: 0.3, ingredientType: this.ingredientTypes[4] },
    { id: 66, name: 'Maliny', caloriesPer100g: 52, proteinPer100g: 1.2, carbsPer100g: 12, fatPer100g: 0.7, ingredientType: this.ingredientTypes[4] },
    { id: 67, name: 'Winogrona', caloriesPer100g: 69, proteinPer100g: 0.7, carbsPer100g: 16, fatPer100g: 0.2, ingredientType: this.ingredientTypes[4] },
    { id: 68, name: 'Kiwi', caloriesPer100g: 61, proteinPer100g: 1.1, carbsPer100g: 15, fatPer100g: 0.5, ingredientType: this.ingredientTypes[4] },
    { id: 69, name: 'Ananas', caloriesPer100g: 50, proteinPer100g: 0.5, carbsPer100g: 13, fatPer100g: 0.1, ingredientType: this.ingredientTypes[4] },
    { id: 70, name: 'Mango', caloriesPer100g: 60, proteinPer100g: 0.8, carbsPer100g: 15, fatPer100g: 0.4, ingredientType: this.ingredientTypes[4] },
    { id: 71, name: 'Gruszka', caloriesPer100g: 57, proteinPer100g: 0.4, carbsPer100g: 15, fatPer100g: 0.1, ingredientType: this.ingredientTypes[4] },
    { id: 72, name: 'Czereśnie', caloriesPer100g: 63, proteinPer100g: 1.1, carbsPer100g: 16, fatPer100g: 0.2, ingredientType: this.ingredientTypes[4] },
    { id: 73, name: 'Śliwki', caloriesPer100g: 46, proteinPer100g: 0.7, carbsPer100g: 11, fatPer100g: 0.3, ingredientType: this.ingredientTypes[4] },
    { id: 74, name: 'Awokado', caloriesPer100g: 160, proteinPer100g: 2, carbsPer100g: 9, fatPer100g: 15, ingredientType: this.ingredientTypes[4] },
    { id: 75, name: 'Cytryna', caloriesPer100g: 29, proteinPer100g: 1.1, carbsPer100g: 9, fatPer100g: 0.3, ingredientType: this.ingredientTypes[4] },

    // TŁUSZCZE (15 składników)
    { id: 76, name: 'Olej', caloriesPer100g: 884, proteinPer100g: 0, carbsPer100g: 0, fatPer100g: 100, ingredientType: this.ingredientTypes[5] },
    { id: 77, name: 'Oliwki', caloriesPer100g: 115, proteinPer100g: 0.8, carbsPer100g: 6, fatPer100g: 11, ingredientType: this.ingredientTypes[5] },
    { id: 78, name: 'Orzechy włoskie', caloriesPer100g: 654, proteinPer100g: 15, carbsPer100g: 14, fatPer100g: 65, ingredientType: this.ingredientTypes[5] },
    { id: 79, name: 'Migdały', caloriesPer100g: 579, proteinPer100g: 21, carbsPer100g: 22, fatPer100g: 50, ingredientType: this.ingredientTypes[5] },
    { id: 80, name: 'Orzechy laskowe', caloriesPer100g: 628, proteinPer100g: 15, carbsPer100g: 17, fatPer100g: 61, ingredientType: this.ingredientTypes[5] },
    { id: 81, name: 'Pistacje', caloriesPer100g: 560, proteinPer100g: 20, carbsPer100g: 28, fatPer100g: 45, ingredientType: this.ingredientTypes[5] },
    { id: 82, name: 'Nasiona słonecznika', caloriesPer100g: 584, proteinPer100g: 21, carbsPer100g: 20, fatPer100g: 51, ingredientType: this.ingredientTypes[5] },
    { id: 83, name: 'Nasiona dyni', caloriesPer100g: 559, proteinPer100g: 19, carbsPer100g: 54, fatPer100g: 49, ingredientType: this.ingredientTypes[5] },
    { id: 84, name: 'Len (nasiona)', caloriesPer100g: 534, proteinPer100g: 18, carbsPer100g: 29, fatPer100g: 42, ingredientType: this.ingredientTypes[5] },
    { id: 85, name: 'Tahini', caloriesPer100g: 595, proteinPer100g: 17, carbsPer100g: 21, fatPer100g: 54, ingredientType: this.ingredientTypes[5] },
    { id: 86, name: 'Olej kokosowy', caloriesPer100g: 862, proteinPer100g: 0, carbsPer100g: 0, fatPer100g: 100, ingredientType: this.ingredientTypes[5] },
    { id: 87, name: 'Masło orzechowe', caloriesPer100g: 588, proteinPer100g: 25, carbsPer100g: 20, fatPer100g: 50, ingredientType: this.ingredientTypes[5] },
    { id: 88, name: 'Orzechy pekan', caloriesPer100g: 691, proteinPer100g: 9, carbsPer100g: 14, fatPer100g: 72, ingredientType: this.ingredientTypes[5] },
    { id: 89, name: 'Orzechy brazylijskie', caloriesPer100g: 656, proteinPer100g: 14, carbsPer100g: 12, fatPer100g: 66, ingredientType: this.ingredientTypes[5] },
    { id: 90, name: 'Sezam', caloriesPer100g: 573, proteinPer100g: 18, carbsPer100g: 23, fatPer100g: 50, ingredientType: this.ingredientTypes[5] }
  ];

  // Dodajemy property dla aktualnie wybranego typu
  selectedIngredientType: IngredientType | null = null;

  selectedIngredients: { ingredient: Ingredient; grams: number }[] = [];

  onAddIngredient(ingredient: Ingredient){
    const existingIngr = this.selectedIngredients.find(si => si.ingredient.id === ingredient.id);
    if (existingIngr){
      existingIngr.grams += 50;
    } else {
      this.selectedIngredients.push({ingredient, grams: 100});
    }
  }

  // Metoda do wyboru typu składników
  selectIngredientType(type: IngredientType | null) {
    this.selectedIngredientType = type;
  }

  // Metoda do sprawdzenia czy typ jest aktywny
  isTypeSelected(type: IngredientType): boolean {
    return this.selectedIngredientType?.id === type.id;
  }

  // Metoda do przełączania dark mode
  toggleDarkMode() {
    this.isDarkMode.set(!this.isDarkMode());
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
}
