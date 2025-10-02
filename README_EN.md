# Nutrients Calculator

A modern nutrition calculator application built with Angular and TypeScript, designed to help users compose meals and calculate their nutritional values with ease.

## Overview

This application provides an intuitive interface for creating custom recipes and analyzing their nutritional content. Users can explore a comprehensive database of ingredients, build personalized meals, and track essential nutritional information through an interactive drag-and-drop interface.

## Key Features

### Interactive Ingredient Management
- **Drag & Drop Interface**: Seamlessly transfer ingredients from the ingredient panel to your recipe panel
- **Flexible Arrangement**: Reorder ingredients within your recipe by dragging them to new positions
- **Dynamic Quantity Control**: Adjust ingredient amounts using convenient sliders or by double-clicking quantity labels
- **Real-time Updates**: Nutritional values update instantly as you modify ingredients and quantities

### Advanced Filtering & Search
- **Category Filtering**: Filter ingredients by type including meat, dairy products, vegetables, grains, fruits, and fats
- **Alphabetical Sorting**: Browse ingredients alphabetically for quick navigation
- **Smart Search**: Use the search field to quickly find specific ingredients by name
- **Visual Color Coding**: Each ingredient category features distinct colors for easy identification

### Comprehensive Nutritional Analysis
- **Complete Recipe Summary**: View total nutritional values for your entire meal composition
- **Detailed Breakdown**: Access comprehensive nutritional information including calories, proteins, carbohydrates, and fats
- **Ingredient-by-ingredient Analysis**: See individual nutritional contributions from each recipe component

### Enhanced User Experience
- **3D Visualization**: Immersive Three.js-powered 3D scene with animated food model rendering
- **Responsive Design**: Optimized interface that works seamlessly across desktop and mobile devices
- **Frosted Glass Effects**: Modern UI with backdrop blur effects and neomorphic design elements

## Technical Stack

- **Frontend Framework**: Angular 20.3 with standalone components
- **Language**: TypeScript 5.0 for enhanced type safety
- **3D Rendering**: Three.js for WebGL-accelerated 3D graphics
- **Styling**: SCSS with modular color management and responsive design
- **Interactive Features**: Angular CDK for drag-and-drop functionality
- **Build System**: Vite for fast development and optimized production builds

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm start`
4. Navigate to `http://localhost:4200` to start building your recipes

## Usage Guide

### Building Your Recipe
1. **Browse Ingredients**: Explore the comprehensive ingredient database in the left panel
2. **Apply Filters**: Use category filters or alphabetical sorting to find specific ingredients
3. **Search Function**: Type ingredient names in the search field for quick access
4. **Add Ingredients**: Drag ingredients from the list to your recipe panel
5. **Adjust Quantities**: Use sliders or double-click values to modify ingredient amounts
6. **Reorder Items**: Drag ingredients within the recipe panel to change their order
7. **Remove Ingredients**: Drag items back to the ingredient list or use the remove button

### Nutritional Analysis
The application automatically calculates and displays:
- Total calories for your complete recipe
- Macronutrient breakdown (proteins, carbohydrates, fats)
- Individual ingredient contributions
- Real-time updates as you modify your recipe

### Visual Features
- Color-coded ingredient categories for easy identification
- 3D animated food model for enhanced visual appeal
- Smooth transitions and animations throughout the interface
- Responsive layout that adapts to different screen sizes

## Project Architecture

The application follows modern Angular best practices with a component-based architecture:

- **Modular Design**: Separate components for ingredient management, recipe composition, and nutritional analysis
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures

## Development Features

- **Hot Reload**: Instant feedback during development
- **CSS Modules**: Scoped styling with SCSS preprocessing
- **Testing**: Comprehensive unit test coverage with Jasmine and Karma

---

*Start exploring nutrition through interactive recipe creation and discover the nutritional value of your favorite meal combinations.*
