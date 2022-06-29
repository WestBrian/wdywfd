export default InlineResponse20038Days
/**
 * The InlineResponse20038Days model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days
 * @version 1.0
 */
declare class InlineResponse20038Days {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, _date: any, day: any): void
  /**
   * Constructs a <code>InlineResponse20038Days</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days} The populated <code>InlineResponse20038Days</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20038Days</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Days
   * @param _date {Number}
   * @param day {String}
   */
  constructor(_date: number, day: string)
  nutritionSummary: any
  nutritionSummaryBreakfast: any
  nutritionSummaryLunch: any
  nutritionSummaryDinner: any
  date: any
  day: any
  items: any
}
//# sourceMappingURL=InlineResponse20038Days.d.ts.map
