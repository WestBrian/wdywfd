export default InlineResponse20028
/**
 * The InlineResponse20028 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028
 * @version 1.0
 */
declare class InlineResponse20028 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    badges: any,
    importantBadges: any,
    breadcrumbs: any,
    generatedText: any,
    imageType: any,
    ingredientList: any,
    ingredients: any,
    likes: any,
    nutrition: any,
    price: any,
    servings: any,
    spoonacularScore: any
  ): void
  /**
   * Constructs a <code>InlineResponse20028</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028} The populated <code>InlineResponse20028</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20028</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028
   * @param id {Number}
   * @param title {String}
   * @param badges {Array.<String>}
   * @param importantBadges {Array.<String>}
   * @param breadcrumbs {Array.<String>}
   * @param generatedText {String}
   * @param imageType {String}
   * @param ingredientList {String}
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Ingredients>}
   * @param likes {Number}
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition}
   * @param price {Number}
   * @param servings {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings}
   * @param spoonacularScore {Number}
   */
  constructor(
    id: number,
    title: string,
    badges: Array<string>,
    importantBadges: Array<string>,
    breadcrumbs: Array<string>,
    generatedText: string,
    imageType: string,
    ingredientList: string,
    ingredients: Array<module>,
    likes: number,
    nutrition: any,
    price: number,
    servings: any,
    spoonacularScore: number
  )
  id: any
  title: any
  badges: any
  importantBadges: any
  breadcrumbs: any
  generatedText: any
  imageType: any
  ingredientCount: any
  ingredientList: any
  ingredients: any
  likes: any
  nutrition: any
  price: any
  servings: any
  spoonacularScore: any
}
//# sourceMappingURL=InlineResponse20028.d.ts.map
