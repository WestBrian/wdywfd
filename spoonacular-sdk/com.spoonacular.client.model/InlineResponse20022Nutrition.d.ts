export default InlineResponse20022Nutrition
/**
 * The InlineResponse20022Nutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition
 * @version 1.0
 */
declare class InlineResponse20022Nutrition {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    nutrients: any,
    properties: any,
    caloricBreakdown: any,
    weightPerServing: any
  ): void
  /**
   * Constructs a <code>InlineResponse20022Nutrition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} The populated <code>InlineResponse20022Nutrition</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20022Nutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition
   * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients>}
   * @param properties {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties>}
   * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown}
   * @param weightPerServing {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionWeightPerServing}
   */
  constructor(
    nutrients: Array<module>,
    properties: Array<module>,
    caloricBreakdown: any,
    weightPerServing: any
  )
  nutrients: any
  properties: any
  caloricBreakdown: any
  weightPerServing: any
}
//# sourceMappingURL=InlineResponse20022Nutrition.d.ts.map
