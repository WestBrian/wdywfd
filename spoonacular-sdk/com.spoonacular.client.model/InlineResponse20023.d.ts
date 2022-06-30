export default InlineResponse20023
/**
 * The InlineResponse20023 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023
 * @version 1.0
 */
declare class InlineResponse20023 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, totalGlycemicLoad: any, ingredients: any): void
  /**
   * Constructs a <code>InlineResponse20023</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023} The populated <code>InlineResponse20023</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20023</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023
   * @param totalGlycemicLoad {Number}
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023Ingredients>}
   */
  constructor(totalGlycemicLoad: number, ingredients: Array<module>)
  totalGlycemicLoad: any
  ingredients: any
}
//# sourceMappingURL=InlineResponse20023.d.ts.map
