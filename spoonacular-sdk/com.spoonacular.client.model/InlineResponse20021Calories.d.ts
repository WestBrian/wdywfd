export default InlineResponse20021Calories
/**
 * The InlineResponse20021Calories model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories
 * @version 1.0
 */
declare class InlineResponse20021Calories {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    confidenceRange95Percent: any,
    standardDeviation: any,
    unit: any,
    value: any
  ): void
  /**
   * Constructs a <code>InlineResponse20021Calories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories} The populated <code>InlineResponse20021Calories</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20021Calories</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories
   * @param confidenceRange95Percent {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021CaloriesConfidenceRange95Percent}
   * @param standardDeviation {Number}
   * @param unit {String}
   * @param value {Number}
   */
  constructor(
    confidenceRange95Percent: any,
    standardDeviation: number,
    unit: string,
    value: number
  )
  confidenceRange95Percent: any
  standardDeviation: any
  unit: any
  value: any
}
//# sourceMappingURL=InlineResponse20021Calories.d.ts.map
