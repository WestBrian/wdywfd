export default InlineResponse20053
/**
 * The InlineResponse20053 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053
 * @version 1.0
 */
declare class InlineResponse20053 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    query: any,
    totalResults: any,
    limit: any,
    offset: any,
    searchResults: any
  ): void
  /**
   * Constructs a <code>InlineResponse20053</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053} The populated <code>InlineResponse20053</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20053</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053
   * @param query {String}
   * @param totalResults {Number}
   * @param limit {Number}
   * @param offset {Number}
   * @param searchResults {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053SearchResults>}
   */
  constructor(
    query: string,
    totalResults: number,
    limit: number,
    offset: number,
    searchResults: Array<module>
  )
  query: any
  totalResults: any
  limit: any
  offset: any
  searchResults: any
}
//# sourceMappingURL=InlineResponse20053.d.ts.map
