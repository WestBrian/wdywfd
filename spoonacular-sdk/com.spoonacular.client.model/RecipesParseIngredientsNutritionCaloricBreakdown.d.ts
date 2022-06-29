export default RecipesParseIngredientsNutritionCaloricBreakdown
/**
 * The RecipesParseIngredientsNutritionCaloricBreakdown model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown
 * @version 1.0
 */
declare class RecipesParseIngredientsNutritionCaloricBreakdown {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    percentProtein: any,
    percentFat: any,
    percentCarbs: any
  ): void
  /**
   * Constructs a <code>RecipesParseIngredientsNutritionCaloricBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown} The populated <code>RecipesParseIngredientsNutritionCaloricBreakdown</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>RecipesParseIngredientsNutritionCaloricBreakdown</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown
   * @param percentProtein {Number}
   * @param percentFat {Number}
   * @param percentCarbs {Number}
   */
  constructor(percentProtein: number, percentFat: number, percentCarbs: number)
  percentProtein: any
  percentFat: any
  percentCarbs: any
}
//# sourceMappingURL=RecipesParseIngredientsNutritionCaloricBreakdown.d.ts.map
