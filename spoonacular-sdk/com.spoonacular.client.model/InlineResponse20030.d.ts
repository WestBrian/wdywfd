export default InlineResponse20030
/**
 * The InlineResponse20030 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030
 * @version 1.0
 */
declare class InlineResponse20030 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    breadcrumbs: any,
    imageType: any,
    badges: any,
    importantBadges: any,
    ingredientCount: any,
    ingredientList: any,
    ingredients: any,
    likes: any,
    aisle: any,
    nutrition: any,
    price: any,
    servings: any,
    spoonacularScore: any
  ): void
  /**
   * Constructs a <code>InlineResponse20030</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030} The populated <code>InlineResponse20030</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20030</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030
   * @param id {Number}
   * @param title {String}
   * @param breadcrumbs {Array.<String>}
   * @param imageType {String}
   * @param badges {Array.<String>}
   * @param importantBadges {Array.<String>}
   * @param ingredientCount {Number}
   * @param ingredientList {String}
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030Ingredients>}
   * @param likes {Number}
   * @param aisle {String}
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition}
   * @param price {Number}
   * @param servings {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings}
   * @param spoonacularScore {Number}
   */
  constructor(
    id: number,
    title: string,
    breadcrumbs: Array<string>,
    imageType: string,
    badges: Array<string>,
    importantBadges: Array<string>,
    ingredientCount: number,
    ingredientList: string,
    ingredients: Array<module>,
    likes: number,
    aisle: string,
    nutrition: any,
    price: number,
    servings: any,
    spoonacularScore: number
  )
  id: any
  title: any
  breadcrumbs: any
  imageType: any
  badges: any
  importantBadges: any
  ingredientCount: any
  generatedText: any
  ingredientList: any
  ingredients: any
  likes: any
  aisle: any
  nutrition: any
  price: any
  servings: any
  spoonacularScore: any
}
//# sourceMappingURL=InlineResponse20030.d.ts.map
