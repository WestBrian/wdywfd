export default InlineResponse20022
/**
 * The InlineResponse20022 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022
 * @version 1.0
 */
declare class InlineResponse20022 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    original: any,
    originalName: any,
    name: any,
    nameClean: any,
    amount: any,
    unit: any,
    unitShort: any,
    unitLong: any,
    possibleUnits: any,
    estimatedCost: any,
    consistency: any,
    shoppingListUnits: any,
    aisle: any,
    image: any,
    meta: any,
    nutrition: any,
    categoryPath: any
  ): void
  /**
   * Constructs a <code>InlineResponse20022</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022} The populated <code>InlineResponse20022</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20022</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022
   * @param id {Number}
   * @param original {String}
   * @param originalName {String}
   * @param name {String}
   * @param nameClean {String}
   * @param amount {Number}
   * @param unit {String}
   * @param unitShort {String}
   * @param unitLong {String}
   * @param possibleUnits {Array.<String>}
   * @param estimatedCost {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsEstimatedCost}
   * @param consistency {String}
   * @param shoppingListUnits {Array.<String>}
   * @param aisle {String}
   * @param image {String}
   * @param meta {Array.<Object>}
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition}
   * @param categoryPath {Array.<String>}
   */
  constructor(
    id: number,
    original: string,
    originalName: string,
    name: string,
    nameClean: string,
    amount: number,
    unit: string,
    unitShort: string,
    unitLong: string,
    possibleUnits: Array<string>,
    estimatedCost: any,
    consistency: string,
    shoppingListUnits: Array<string>,
    aisle: string,
    image: string,
    meta: Array<Object>,
    nutrition: any,
    categoryPath: Array<string>
  )
  id: any
  original: any
  originalName: any
  name: any
  nameClean: any
  amount: any
  unit: any
  unitShort: any
  unitLong: any
  possibleUnits: any
  estimatedCost: any
  consistency: any
  shoppingListUnits: any
  aisle: any
  image: any
  meta: any
  nutrition: any
  categoryPath: any
}
//# sourceMappingURL=InlineResponse20022.d.ts.map
