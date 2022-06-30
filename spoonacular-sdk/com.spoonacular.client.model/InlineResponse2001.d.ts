export default InlineResponse2001
/**
 * The InlineResponse2001 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001
 * @version 1.0
 */
declare class InlineResponse2001 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    image: any,
    imageType: any,
    likes: any,
    missedIngredientCount: any,
    missedIngredients: any,
    title: any,
    unusedIngredients: any,
    usedIngredientCount: any,
    usedIngredients: any
  ): void
  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2001
   * @param id {Number}
   * @param image {String}
   * @param imageType {String}
   * @param likes {Number}
   * @param missedIngredientCount {Number}
   * @param missedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients>}
   * @param title {String}
   * @param unusedIngredients {Array.<Object>}
   * @param usedIngredientCount {Number}
   * @param usedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients>}
   */
  constructor(
    id: number,
    image: string,
    imageType: string,
    likes: number,
    missedIngredientCount: number,
    missedIngredients: Array<module>,
    title: string,
    unusedIngredients: Array<Object>,
    usedIngredientCount: number,
    usedIngredients: Array<module>
  )
  id: any
  image: any
  imageType: any
  likes: any
  missedIngredientCount: any
  missedIngredients: any
  title: any
  unusedIngredients: any
  usedIngredientCount: any
  usedIngredients: any
  '': any
}
//# sourceMappingURL=InlineResponse2001.d.ts.map
