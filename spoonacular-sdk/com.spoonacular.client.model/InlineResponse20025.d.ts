export default InlineResponse20025
/**
 * The InlineResponse20025 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20025
 * @version 1.0
 */
declare class InlineResponse20025 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    results: any,
    offset: any,
    _number: any,
    totalResults: any
  ): void
  /**
   * Constructs a <code>InlineResponse20025</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20025} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20025} The populated <code>InlineResponse20025</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20025</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20025
   * @param results {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20025Results>}
   * @param offset {Number}
   * @param _number {Number}
   * @param totalResults {Number}
   */
  constructor(
    results: Array<module>,
    offset: number,
    _number: number,
    totalResults: number
  )
  results: any
  offset: any
  number: any
  totalResults: any
}
//# sourceMappingURL=InlineResponse20025.d.ts.map
