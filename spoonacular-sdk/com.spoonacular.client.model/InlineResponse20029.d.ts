export default InlineResponse20029
/**
 * The InlineResponse20029 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029
 * @version 1.0
 */
declare class InlineResponse20029 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    customFoods: any,
    type: any,
    offset: any,
    _number: any
  ): void
  /**
   * Constructs a <code>InlineResponse20029</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029} The populated <code>InlineResponse20029</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20029</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029
   * @param customFoods {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029CustomFoods>}
   * @param type {String}
   * @param offset {Number}
   * @param _number {Number}
   */
  constructor(
    customFoods: Array<module>,
    type: string,
    offset: number,
    _number: number
  )
  customFoods: any
  type: any
  offset: any
  number: any
}
//# sourceMappingURL=InlineResponse20029.d.ts.map
