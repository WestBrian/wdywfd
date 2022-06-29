export default InlineResponse20033
/**
 * The InlineResponse20033 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033
 * @version 1.0
 */
declare class InlineResponse20033 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    cleanTitle: any,
    image: any,
    category: any,
    breadcrumbs: any,
    usdaCode: any
  ): void
  /**
   * Constructs a <code>InlineResponse20033</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033} The populated <code>InlineResponse20033</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20033</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033
   * @param cleanTitle {String}
   * @param image {String}
   * @param category {String}
   * @param breadcrumbs {Array.<String>}
   * @param usdaCode {Number}
   */
  constructor(
    cleanTitle: string,
    image: string,
    category: string,
    breadcrumbs: Array<string>,
    usdaCode: number
  )
  cleanTitle: any
  image: any
  category: any
  breadcrumbs: any
  usdaCode: any
}
//# sourceMappingURL=InlineResponse20033.d.ts.map
