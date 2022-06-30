export default RecipesParseIngredientsNutritionNutrients
/**
 * The RecipesParseIngredientsNutritionNutrients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients
 * @version 1.0
 */
declare class RecipesParseIngredientsNutritionNutrients {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    name: any,
    amount: any,
    unit: any,
    percentOfDailyNeeds: any
  ): void
  /**
   * Constructs a <code>RecipesParseIngredientsNutritionNutrients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients} The populated <code>RecipesParseIngredientsNutritionNutrients</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>RecipesParseIngredientsNutritionNutrients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients
   * @param name {String}
   * @param amount {Number}
   * @param unit {String}
   * @param percentOfDailyNeeds {Number}
   */
  constructor(
    name: string,
    amount: number,
    unit: string,
    percentOfDailyNeeds: number
  )
  name: any
  amount: any
  unit: any
  percentOfDailyNeeds: any
}
//# sourceMappingURL=RecipesParseIngredientsNutritionNutrients.d.ts.map
