export default InlineObject2
/**
 * The InlineObject2 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject2
 * @version 1.0
 */
declare class InlineObject2 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, ingredients: any, servings: any): void
  /**
   * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject2} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject2} The populated <code>InlineObject2</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject2
   * @param ingredients {Array.<String>}
   * @param servings {Number}
   */
  constructor(ingredients: Array<string>, servings: number)
  ingredients: any
  servings: any
}
//# sourceMappingURL=InlineObject2.d.ts.map
