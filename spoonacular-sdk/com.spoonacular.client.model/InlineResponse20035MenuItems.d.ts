export default InlineResponse20035MenuItems
/**
 * The InlineResponse20035MenuItems model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems
 * @version 1.0
 */
declare class InlineResponse20035MenuItems {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    restaurantChain: any,
    image: any,
    imageType: any
  ): void
  /**
   * Constructs a <code>InlineResponse20035MenuItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems} The populated <code>InlineResponse20035MenuItems</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20035MenuItems</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems
   * @param id {Number}
   * @param title {String}
   * @param restaurantChain {String}
   * @param image {String}
   * @param imageType {String}
   */
  constructor(
    id: number,
    title: string,
    restaurantChain: string,
    image: string,
    imageType: string
  )
  id: any
  title: any
  restaurantChain: any
  image: any
  imageType: any
  servings: any
}
//# sourceMappingURL=InlineResponse20035MenuItems.d.ts.map
