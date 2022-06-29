export default InlineResponse20013
/**
 * The InlineResponse20013 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013
 * @version 1.0
 */
declare class InlineResponse20013 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    parsedInstructions: any,
    ingredients: any,
    equipment: any
  ): void
  /**
   * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013
   * @param parsedInstructions {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013ParsedInstructions>}
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients1>}
   * @param equipment {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients1>}
   */
  constructor(
    parsedInstructions: Array<module>,
    ingredients: Array<module>,
    equipment: Array<module>
  )
  parsedInstructions: any
  ingredients: any
  equipment: any
}
//# sourceMappingURL=InlineResponse20013.d.ts.map
