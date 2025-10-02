import { IngredientType } from "./ingredientType.model";

export interface Ingredient {
    id: number;
    name: string;
    caloriesPer100g: number;
    proteinPer100g: number;
    carbsPer100g: number;
    fatPer100g: number;
    ingredientType: IngredientType;
}