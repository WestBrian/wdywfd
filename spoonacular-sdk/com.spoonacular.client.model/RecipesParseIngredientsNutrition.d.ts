export default RecipesParseIngredientsNutrition
/**
 * The RecipesParseIngredientsNutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutrition
 * @version 1.0
 */
declare class RecipesParseIngredientsNutrition {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    nutrients: any,
    properties: any,
    flavonoids: any,
    caloricBreakdown: any,
    weightPerServing: any
  ): void
  /**
   * Constructs a <code>RecipesParseIngredientsNutrition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutrition} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutrition} The populated <code>RecipesParseIngredientsNutrition</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>RecipesParseIngredientsNutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutrition
   * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients>}
   * @param properties {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties>}
   * @param flavonoids {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties>}
   * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown}
   * @param weightPerServing {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionWeightPerServing}
   */
  constructor(
    nutrients: Array<module>,
    properties: Array<module>,
    flavonoids: Array<module>,
    caloricBreakdown: any,
    weightPerServing: any
  )
  nutrients: any
  properties: any
  flavonoids: any
  caloricBreakdown: any
  weightPerServing: any
}
//# sourceMappingURL=RecipesParseIngredientsNutrition.d.ts.map
