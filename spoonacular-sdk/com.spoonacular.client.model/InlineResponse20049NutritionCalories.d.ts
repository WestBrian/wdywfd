export default InlineResponse20049NutritionCalories
/**
 * The InlineResponse20049NutritionCalories model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories
 * @version 1.0
 */
declare class InlineResponse20049NutritionCalories {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    value: any,
    unit: any,
    confidenceRange95Percent: any,
    standardDeviation: any
  ): void
  /**
   * Constructs a <code>InlineResponse20049NutritionCalories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories} The populated <code>InlineResponse20049NutritionCalories</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20049NutritionCalories</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCalories
   * @param value {Number}
   * @param unit {String}
   * @param confidenceRange95Percent {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049NutritionCaloriesConfidenceRange95Percent}
   * @param standardDeviation {Number}
   */
  constructor(
    value: number,
    unit: string,
    confidenceRange95Percent: any,
    standardDeviation: number
  )
  value: any
  unit: any
  confidenceRange95Percent: any
  standardDeviation: any
}
//# sourceMappingURL=InlineResponse20049NutritionCalories.d.ts.map
