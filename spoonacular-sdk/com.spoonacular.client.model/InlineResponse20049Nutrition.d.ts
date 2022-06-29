export default InlineResponse20049Nutrition
/**
 * The InlineResponse20049Nutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049Nutrition
 * @version 1.0
 */
declare class InlineResponse20049Nutrition {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    recipesUsed: any,
    calories: any,
    fat: any,
    protein: any,
    carbs: any
  ): void
  /**
   * Constructs a <code>InlineResponse20049Nutrition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049Nutrition} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049Nutrition} The populated <code>InlineResponse20049Nutrition</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20049Nutrition</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049Nutrition
   * @param recipesUsed {Number}
   * @param calories {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories}
   * @param fat {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories}
   * @param protein {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories}
   * @param carbs {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories}
   */
  constructor(
    recipesUsed: number,
    calories: any,
    fat: any,
    protein: any,
    carbs: any
  )
  recipesUsed: any
  calories: any
  fat: any
  protein: any
  carbs: any
}
//# sourceMappingURL=InlineResponse20049Nutrition.d.ts.map
