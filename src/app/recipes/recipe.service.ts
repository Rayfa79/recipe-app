import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable ({
  providedIn: 'root'
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Coq au Vin', 'Julia Childs famous Coq au Vin', 'https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2022/07/04215149/Coq-Au-Vin-Horizontal-1.jpg',[
            new Ingredient('Chicken', 1),
            new Ingredient('Red Wine', 1)
        ]),
        new Recipe("Raina's Mac N Cheese", 'My families famous mac n cheese recipe', 'https://divascancook.com/wp-content/uploads/2009/12/southern-baked-macaroni-and-cheese-1.jpg',[
            new Ingredient('Box of elbow noodles', 1),
            new Ingredient('Mild Cheese', 2)
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
      return this.recipes.slice();
    }


    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

  }
