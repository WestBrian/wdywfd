export default InlineResponse20017
/**
 * The InlineResponse20017 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20017
 * @version 1.0
 */
declare class InlineResponse20017 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    cuisine: any,
    cuisines: any,
    confidence: any
  ): void
  /**
   * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20017} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20017</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20017
   * @param cuisine {String}
   * @param cuisines {Array.<String>}
   * @param confidence {Number}
   */
  constructor(cuisine: string, cuisines: Array<string>, confidence: number)
  cuisine: any
  cuisines: any
  confidence: any
}
//# sourceMappingURL=InlineResponse20017.d.ts.map
