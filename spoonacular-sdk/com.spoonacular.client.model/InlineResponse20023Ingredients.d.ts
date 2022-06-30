export default InlineResponse20023Ingredients
/**
 * The InlineResponse20023Ingredients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023Ingredients
 * @version 1.0
 */
declare class InlineResponse20023Ingredients {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    original: any,
    glycemicIndex: any,
    glycemicLoad: any
  ): void
  /**
   * Constructs a <code>InlineResponse20023Ingredients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023Ingredients} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023Ingredients} The populated <code>InlineResponse20023Ingredients</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20023Ingredients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20023Ingredients
   * @param id {Number}
   * @param original {String}
   * @param glycemicIndex {Number}
   * @param glycemicLoad {Number}
   */
  constructor(
    id: number,
    original: string,
    glycemicIndex: number,
    glycemicLoad: number
  )
  id: any
  original: any
  glycemicIndex: any
  glycemicLoad: any
}
//# sourceMappingURL=InlineResponse20023Ingredients.d.ts.map
