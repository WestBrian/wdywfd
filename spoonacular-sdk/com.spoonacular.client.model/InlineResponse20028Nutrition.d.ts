export default InlineResponse20028Nutrition
/**
 * The InlineResponse20028Nutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition
 * @version 1.0
 */
declare class InlineResponse20028Nutrition {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, nutrients: any, caloricBreakdown: any): void
  /**
   * Constructs a <code>InlineResponse20028Nutrition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} The populated <code>InlineResponse20028Nutrition</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20028Nutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition
   * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients>}
   * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown}
   */
  constructor(nutrients: Array<module>, caloricBreakdown: any)
  nutrients: any
  caloricBreakdown: any
}
//# sourceMappingURL=InlineResponse20028Nutrition.d.ts.map
