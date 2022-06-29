export default InlineResponse20020
/**
 * The InlineResponse20020 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20020
 * @version 1.0
 */
declare class InlineResponse20020 {
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
    aisle: any,
    image: any,
    meta: any,
    nutrition: any
  ): void
  /**
   * Constructs a <code>InlineResponse20020</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20020} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20020} The populated <code>InlineResponse20020</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20020</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20020
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
   * @param aisle {String}
   * @param image {String}
   * @param meta {Array.<String>}
   * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutrition}
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
    aisle: string,
    image: string,
    meta: Array<string>,
    nutrition: any
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
  aisle: any
  image: any
  meta: any
  nutrition: any
}
//# sourceMappingURL=InlineResponse20020.d.ts.map
