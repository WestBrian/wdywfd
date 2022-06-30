export default InlineResponse20049
/**
 * The InlineResponse20049 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049
 * @version 1.0
 */
declare class InlineResponse20049 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, nutrition: any, category: any, recipes: any): void
  /**
   * Constructs a <code>InlineResponse20049</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049} The populated <code>InlineResponse20049</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20049</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049Nutrition}
   * @param category {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049Category}
   * @param recipes {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049Recipes>}
   */
  constructor(nutrition: any, category: any, recipes: Array<module>)
  nutrition: any
  category: any
  recipes: any
}
//# sourceMappingURL=InlineResponse20049.d.ts.map
