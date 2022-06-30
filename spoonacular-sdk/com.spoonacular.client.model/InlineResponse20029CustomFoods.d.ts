export default InlineResponse20029CustomFoods
/**
 * The InlineResponse20029CustomFoods model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029CustomFoods
 * @version 1.0
 */
declare class InlineResponse20029CustomFoods {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    servings: any,
    imageUrl: any,
    price: any
  ): void
  /**
   * Constructs a <code>InlineResponse20029CustomFoods</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029CustomFoods} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029CustomFoods} The populated <code>InlineResponse20029CustomFoods</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20029CustomFoods</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029CustomFoods
   * @param id {Number}
   * @param title {String}
   * @param servings {Number}
   * @param imageUrl {String}
   * @param price {Number}
   */
  constructor(
    id: number,
    title: string,
    servings: number,
    imageUrl: string,
    price: number
  )
  id: any
  title: any
  servings: any
  imageUrl: any
  price: any
}
//# sourceMappingURL=InlineResponse20029CustomFoods.d.ts.map
