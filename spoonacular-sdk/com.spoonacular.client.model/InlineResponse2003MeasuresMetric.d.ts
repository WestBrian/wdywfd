export default InlineResponse2003MeasuresMetric
/**
 * The InlineResponse2003MeasuresMetric model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003MeasuresMetric
 * @version 1.0
 */
declare class InlineResponse2003MeasuresMetric {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, amount: any, unitLong: any, unitShort: any): void
  /**
   * Constructs a <code>InlineResponse2003MeasuresMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003MeasuresMetric} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003MeasuresMetric} The populated <code>InlineResponse2003MeasuresMetric</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2003MeasuresMetric</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003MeasuresMetric
   * @param amount {Number}
   * @param unitLong {String}
   * @param unitShort {String}
   */
  constructor(amount: number, unitLong: string, unitShort: string)
  amount: any
  unitLong: any
  unitShort: any
}
//# sourceMappingURL=InlineResponse2003MeasuresMetric.d.ts.map
