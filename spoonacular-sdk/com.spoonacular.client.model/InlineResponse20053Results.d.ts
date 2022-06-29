export default InlineResponse20053Results
/**
 * The InlineResponse20053Results model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053Results
 * @version 1.0
 */
declare class InlineResponse20053Results {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    name: any,
    image: any,
    link: any,
    type: any,
    relevance: any,
    content: any
  ): void
  /**
   * Constructs a <code>InlineResponse20053Results</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053Results} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053Results} The populated <code>InlineResponse20053Results</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20053Results</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053Results
   * @param id {String}
   * @param name {String}
   * @param image {String}
   * @param link {String}
   * @param type {String}
   * @param relevance {Number}
   * @param content {String}
   */
  constructor(
    id: string,
    name: string,
    image: string,
    link: string,
    type: string,
    relevance: number,
    content: string
  )
  id: any
  name: any
  image: any
  link: any
  type: any
  relevance: any
  content: any
}
//# sourceMappingURL=InlineResponse20053Results.d.ts.map
