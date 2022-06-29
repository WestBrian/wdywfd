export default InlineResponse20018
/**
 * The InlineResponse20018 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018
 * @version 1.0
 */
declare class InlineResponse20018 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    dishes: any,
    ingredients: any,
    cuisines: any,
    modifiers: any
  ): void
  /**
   * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018
   * @param dishes {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018Dishes>}
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20018Ingredients>}
   * @param cuisines {Array.<String>}
   * @param modifiers {Array.<String>}
   */
  constructor(
    dishes: Array<module>,
    ingredients: Array<module>,
    cuisines: Array<string>,
    modifiers: Array<string>
  )
  dishes: any
  ingredients: any
  cuisines: any
  modifiers: any
}
//# sourceMappingURL=InlineResponse20018.d.ts.map
