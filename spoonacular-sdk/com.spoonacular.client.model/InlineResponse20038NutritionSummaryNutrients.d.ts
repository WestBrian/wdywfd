export default InlineResponse20038NutritionSummaryNutrients
/**
 * The InlineResponse20038NutritionSummaryNutrients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummaryNutrients
 * @version 1.0
 */
declare class InlineResponse20038NutritionSummaryNutrients {
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
    percentDailyNeeds: any
  ): void
  /**
   * Constructs a <code>InlineResponse20038NutritionSummaryNutrients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummaryNutrients} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummaryNutrients} The populated <code>InlineResponse20038NutritionSummaryNutrients</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20038NutritionSummaryNutrients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038NutritionSummaryNutrients
   * @param name {String}
   * @param amount {Number}
   * @param unit {String}
   * @param percentDailyNeeds {Number}
   */
  constructor(
    name: string,
    amount: number,
    unit: string,
    percentDailyNeeds: number
  )
  name: any
  amount: any
  unit: any
  percentDailyNeeds: any
}
//# sourceMappingURL=InlineResponse20038NutritionSummaryNutrients.d.ts.map
