export default InlineResponse20034
/**
 * The InlineResponse20034 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034
 * @version 1.0
 */
declare class InlineResponse20034 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    original: any,
    originalName: any,
    ingredientImage: any,
    meta: any,
    products: any
  ): void
  /**
   * Constructs a <code>InlineResponse20034</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034} The populated <code>InlineResponse20034</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20034</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20034
   * @param original {String}
   * @param originalName {String}
   * @param ingredientImage {String}
   * @param meta {Array.<String>}
   * @param products {Array.<module:com.spoonacular.client/com.spoonacular.client.model/FoodIngredientsMapProducts>}
   */
  constructor(
    original: string,
    originalName: string,
    ingredientImage: string,
    meta: Array<string>,
    products: Array<module>
  )
  original: any
  originalName: any
  ingredientImage: any
  meta: any
  products: any
}
//# sourceMappingURL=InlineResponse20034.d.ts.map
