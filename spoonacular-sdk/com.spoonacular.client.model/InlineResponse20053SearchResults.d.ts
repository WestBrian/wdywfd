export default InlineResponse20053SearchResults
/**
 * The InlineResponse20053SearchResults model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053SearchResults
 * @version 1.0
 */
declare class InlineResponse20053SearchResults {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, name: any, totalResults: any): void
  /**
   * Constructs a <code>InlineResponse20053SearchResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053SearchResults} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053SearchResults} The populated <code>InlineResponse20053SearchResults</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20053SearchResults</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053SearchResults
   * @param name {String}
   * @param totalResults {Number}
   */
  constructor(name: string, totalResults: number)
  name: any
  totalResults: any
  results: any
}
//# sourceMappingURL=InlineResponse20053SearchResults.d.ts.map
