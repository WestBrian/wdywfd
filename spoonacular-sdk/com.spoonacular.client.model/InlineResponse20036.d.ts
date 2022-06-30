export default InlineResponse20036
/**
 * The InlineResponse20036 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036
 * @version 1.0
 */
declare class InlineResponse20036 {
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
    nutrition: any,
    badges: any,
    breadcrumbs: any,
    imageType: any,
    likes: any,
    servings: any
  ): void
  /**
   * Constructs a <code>InlineResponse20036</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036} The populated <code>InlineResponse20036</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20036</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036
   * @param id {Number}
   * @param title {String}
   * @param restaurantChain {String}
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition}
   * @param badges {Array.<String>}
   * @param breadcrumbs {Array.<String>}
   * @param imageType {String}
   * @param likes {Number}
   * @param servings {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings}
   */
  constructor(
    id: number,
    title: string,
    restaurantChain: string,
    nutrition: any,
    badges: Array<string>,
    breadcrumbs: Array<string>,
    imageType: string,
    likes: number,
    servings: any
  )
  id: any
  title: any
  restaurantChain: any
  nutrition: any
  badges: any
  breadcrumbs: any
  generatedText: any
  imageType: any
  likes: any
  servings: any
  price: any
  spoonacularScore: any
}
//# sourceMappingURL=InlineResponse20036.d.ts.map
