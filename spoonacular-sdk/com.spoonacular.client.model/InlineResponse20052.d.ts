export default InlineResponse20052
/**
 * The InlineResponse20052 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052
 * @version 1.0
 */
declare class InlineResponse20052 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    articles: any,
    groceryProducts: any,
    menuItems: any,
    recipes: any
  ): void
  /**
   * Constructs a <code>InlineResponse20052</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052} The populated <code>InlineResponse20052</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20052</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052
   * @param articles {Array.<Object>}
   * @param groceryProducts {Array.<Object>}
   * @param menuItems {Array.<Object>}
   * @param recipes {Array.<Object>}
   */
  constructor(
    articles: Array<Object>,
    groceryProducts: Array<Object>,
    menuItems: Array<Object>,
    recipes: Array<Object>
  )
  Articles: any
  'Grocery Products': any
  'Menu Items': any
  Recipes: any
}
//# sourceMappingURL=InlineResponse20052.d.ts.map
