export default InlineResponse20026
/**
 * The InlineResponse20026 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20026
 * @version 1.0
 */
declare class InlineResponse20026 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    ingredient: any,
    substitutes: any,
    message: any
  ): void
  /**
   * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20026} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20026</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20026
   * @param ingredient {String}
   * @param substitutes {Array.<String>}
   * @param message {String}
   */
  constructor(ingredient: string, substitutes: Array<string>, message: string)
  ingredient: any
  substitutes: any
  message: any
}
//# sourceMappingURL=InlineResponse20026.d.ts.map
