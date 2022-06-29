export default InlineResponse20048
/**
 * The InlineResponse20048 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048
 * @version 1.0
 */
declare class InlineResponse20048 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, category: any, probability: any): void
  /**
   * Constructs a <code>InlineResponse20048</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048} The populated <code>InlineResponse20048</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20048</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048
   * @param category {String}
   * @param probability {Number}
   */
  constructor(category: string, probability: number)
  category: any
  probability: any
}
//# sourceMappingURL=InlineResponse20048.d.ts.map
