export default InlineResponse20054
/**
 * The InlineResponse20054 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054
 * @version 1.0
 */
declare class InlineResponse20054 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, videos: any, totalResults: any): void
  /**
   * Constructs a <code>InlineResponse20054</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054} The populated <code>InlineResponse20054</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20054</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054
   * @param videos {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054Videos>}
   * @param totalResults {Number}
   */
  constructor(videos: Array<module>, totalResults: number)
  videos: any
  totalResults: any
}
//# sourceMappingURL=InlineResponse20054.d.ts.map
