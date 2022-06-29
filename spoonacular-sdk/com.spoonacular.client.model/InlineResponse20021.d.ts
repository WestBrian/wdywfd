export default InlineResponse20021
/**
 * The InlineResponse20021 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021
 * @version 1.0
 */
declare class InlineResponse20021 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    calories: any,
    carbs: any,
    fat: any,
    protein: any,
    recipesUsed: any
  ): void
  /**
   * Constructs a <code>InlineResponse20021</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021} The populated <code>InlineResponse20021</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20021</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021
   * @param calories {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories}
   * @param carbs {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories}
   * @param fat {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories}
   * @param protein {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20021Calories}
   * @param recipesUsed {Number}
   */
  constructor(
    calories: any,
    carbs: any,
    fat: any,
    protein: any,
    recipesUsed: number
  )
  calories: any
  carbs: any
  fat: any
  protein: any
  recipesUsed: any
}
//# sourceMappingURL=InlineResponse20021.d.ts.map
