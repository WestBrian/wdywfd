export default InlineResponse20047
/**
 * The InlineResponse20047 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047
 * @version 1.0
 */
declare class InlineResponse20047 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, recommendedWines: any, totalFound: any): void
  /**
   * Constructs a <code>InlineResponse20047</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} The populated <code>InlineResponse20047</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20047</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047
   * @param recommendedWines {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines>}
   * @param totalFound {Number}
   */
  constructor(recommendedWines: Array<module>, totalFound: number)
  recommendedWines: any
  totalFound: any
}
//# sourceMappingURL=InlineResponse20047.d.ts.map
