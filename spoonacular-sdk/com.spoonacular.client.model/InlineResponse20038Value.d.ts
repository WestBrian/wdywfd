export default InlineResponse20038Value
/**
 * The InlineResponse20038Value model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Value
 * @version 1.0
 */
declare class InlineResponse20038Value {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    servings: any,
    id: any,
    title: any,
    imageType: any
  ): void
  /**
   * Constructs a <code>InlineResponse20038Value</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Value} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Value} The populated <code>InlineResponse20038Value</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20038Value</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038Value
   * @param servings {Number}
   * @param id {Number}
   * @param title {String}
   * @param imageType {String}
   */
  constructor(servings: number, id: number, title: string, imageType: string)
  servings: any
  id: any
  title: any
  imageType: any
}
//# sourceMappingURL=InlineResponse20038Value.d.ts.map
