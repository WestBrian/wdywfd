export default InlineResponse20031ComparableProducts
/**
 * The InlineResponse20031ComparableProducts model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts
 * @version 1.0
 */
declare class InlineResponse20031ComparableProducts {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    calories: any,
    likes: any,
    price: any,
    protein: any,
    spoonacularScore: any,
    sugar: any
  ): void
  /**
   * Constructs a <code>InlineResponse20031ComparableProducts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts} The populated <code>InlineResponse20031ComparableProducts</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20031ComparableProducts</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProducts
   * @param calories {Array.<Object>}
   * @param likes {Array.<Object>}
   * @param price {Array.<Object>}
   * @param protein {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>}
   * @param spoonacularScore {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein>}
   * @param sugar {Array.<Object>}
   */
  constructor(
    calories: Array<Object>,
    likes: Array<Object>,
    price: Array<Object>,
    protein: Array<module>,
    spoonacularScore: Array<module>,
    sugar: Array<Object>
  )
  calories: any
  likes: any
  price: any
  protein: any
  spoonacularScore: any
  sugar: any
}
//# sourceMappingURL=InlineResponse20031ComparableProducts.d.ts.map
