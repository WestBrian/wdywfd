export default InlineResponse20042
/**
 * The InlineResponse20042 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042
 * @version 1.0
 */
declare class InlineResponse20042 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    aisles: any,
    cost: any,
    startDate: any,
    endDate: any
  ): void
  /**
   * Constructs a <code>InlineResponse20042</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} The populated <code>InlineResponse20042</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20042</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042
   * @param aisles {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042Aisles>}
   * @param cost {Number}
   * @param startDate {Number}
   * @param endDate {Number}
   */
  constructor(
    aisles: Array<module>,
    cost: number,
    startDate: number,
    endDate: number
  )
  aisles: any
  cost: any
  startDate: any
  endDate: any
}
//# sourceMappingURL=InlineResponse20042.d.ts.map
