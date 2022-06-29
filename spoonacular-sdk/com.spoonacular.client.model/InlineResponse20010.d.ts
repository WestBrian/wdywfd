export default InlineResponse20010
/**
 * The InlineResponse20010 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010
 * @version 1.0
 */
declare class InlineResponse20010 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    ingredients: any,
    totalCost: any,
    totalCostPerServing: any
  ): void
  /**
   * Constructs a <code>InlineResponse20010</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010} The populated <code>InlineResponse20010</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20010</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010Ingredients>}
   * @param totalCost {Number}
   * @param totalCostPerServing {Number}
   */
  constructor(
    ingredients: Array<module>,
    totalCost: number,
    totalCostPerServing: number
  )
  ingredients: any
  totalCost: any
  totalCostPerServing: any
}
//# sourceMappingURL=InlineResponse20010.d.ts.map
