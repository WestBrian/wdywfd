export default RecipesFindByIngredientsMissedIngredients
/**
 * The RecipesFindByIngredientsMissedIngredients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients
 * @version 1.0
 */
declare class RecipesFindByIngredientsMissedIngredients {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    aisle: any,
    amount: any,
    id: any,
    image: any,
    name: any,
    original: any,
    originalName: any,
    unit: any,
    unitLong: any,
    unitShort: any
  ): void
  /**
   * Constructs a <code>RecipesFindByIngredientsMissedIngredients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients} The populated <code>RecipesFindByIngredientsMissedIngredients</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>RecipesFindByIngredientsMissedIngredients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients
   * @param aisle {String}
   * @param amount {Number}
   * @param id {Number}
   * @param image {String}
   * @param name {String}
   * @param original {String}
   * @param originalName {String}
   * @param unit {String}
   * @param unitLong {String}
   * @param unitShort {String}
   */
  constructor(
    aisle: string,
    amount: number,
    id: number,
    image: string,
    name: string,
    original: string,
    originalName: string,
    unit: string,
    unitLong: string,
    unitShort: string
  )
  aisle: any
  amount: any
  id: any
  image: any
  meta: any
  name: any
  original: any
  originalName: any
  unit: any
  unitLong: any
  unitShort: any
}
//# sourceMappingURL=RecipesFindByIngredientsMissedIngredients.d.ts.map
