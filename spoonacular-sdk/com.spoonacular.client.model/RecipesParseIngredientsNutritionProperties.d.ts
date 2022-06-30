export default RecipesParseIngredientsNutritionProperties
/**
 * The RecipesParseIngredientsNutritionProperties model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties
 * @version 1.0
 */
declare class RecipesParseIngredientsNutritionProperties {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, name: any, amount: any, unit: any): void
  /**
   * Constructs a <code>RecipesParseIngredientsNutritionProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties} The populated <code>RecipesParseIngredientsNutritionProperties</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>RecipesParseIngredientsNutritionProperties</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties
   * @param name {String}
   * @param amount {Number}
   * @param unit {String}
   */
  constructor(name: string, amount: number, unit: string)
  name: any
  amount: any
  unit: any
}
//# sourceMappingURL=RecipesParseIngredientsNutritionProperties.d.ts.map
