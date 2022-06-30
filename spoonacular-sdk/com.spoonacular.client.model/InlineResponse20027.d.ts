export default InlineResponse20027
/**
 * The InlineResponse20027 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027
 * @version 1.0
 */
declare class InlineResponse20027 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    products: any,
    totalProducts: any,
    type: any,
    offset: any,
    _number: any
  ): void
  /**
   * Constructs a <code>InlineResponse20027</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027} The populated <code>InlineResponse20027</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20027</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027
   * @param products {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2007>}
   * @param totalProducts {Number}
   * @param type {String}
   * @param offset {Number}
   * @param _number {Number}
   */
  constructor(
    products: Array<module>,
    totalProducts: number,
    type: string,
    offset: number,
    _number: number
  )
  products: any
  totalProducts: any
  type: any
  offset: any
  number: any
}
//# sourceMappingURL=InlineResponse20027.d.ts.map
