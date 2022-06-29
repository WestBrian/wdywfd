export default InlineResponse200
/**
 * The InlineResponse200 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse200
 * @version 1.0
 */
declare class InlineResponse200 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    offset: any,
    _number: any,
    results: any,
    totalResults: any
  ): void
  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200
   * @param offset {Number}
   * @param _number {Number}
   * @param results {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results>}
   * @param totalResults {Number}
   */
  constructor(
    offset: number,
    _number: number,
    results: Array<module>,
    totalResults: number
  )
  offset: any
  number: any
  results: any
  totalResults: any
}
//# sourceMappingURL=InlineResponse200.d.ts.map
