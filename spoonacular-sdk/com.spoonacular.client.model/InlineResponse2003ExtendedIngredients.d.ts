export default InlineResponse2003ExtendedIngredients
/**
 * The InlineResponse2003ExtendedIngredients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients
 * @version 1.0
 */
declare class InlineResponse2003ExtendedIngredients {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    aisle: any,
    amount: any,
    consitency: any,
    id: any,
    image: any,
    name: any,
    original: any,
    originalName: any,
    unit: any
  ): void
  /**
   * Constructs a <code>InlineResponse2003ExtendedIngredients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients} The populated <code>InlineResponse2003ExtendedIngredients</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2003ExtendedIngredients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003ExtendedIngredients
   * @param aisle {String}
   * @param amount {Number}
   * @param consitency {String}
   * @param id {Number}
   * @param image {String}
   * @param name {String}
   * @param original {String}
   * @param originalName {String}
   * @param unit {String}
   */
  constructor(
    aisle: string,
    amount: number,
    consitency: string,
    id: number,
    image: string,
    name: string,
    original: string,
    originalName: string,
    unit: string
  )
  aisle: any
  amount: any
  consitency: any
  id: any
  image: any
  measures: any
  meta: any
  name: any
  original: any
  originalName: any
  unit: any
}
//# sourceMappingURL=InlineResponse2003ExtendedIngredients.d.ts.map
