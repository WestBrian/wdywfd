export default InlineResponse20016
/**
 * The InlineResponse20016 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20016
 * @version 1.0
 */
declare class InlineResponse20016 {
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
   * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20016} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20016</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20016
   * @param parsedInstructions {Array.<Object>}
   * @param ingredients {Array.<Object>}
   * @param equipment {Array.<Object>}
   */
  constructor(
    parsedInstructions: Array<Object>,
    ingredients: Array<Object>,
    equipment: Array<Object>
  )
  parsedInstructions: any
  ingredients: any
  equipment: any
}
//# sourceMappingURL=InlineResponse20016.d.ts.map
