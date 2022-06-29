export default InlineResponse20012
/**
 * The InlineResponse20012 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20012
 * @version 1.0
 */
declare class InlineResponse20012 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    calories: any,
    carbs: any,
    fat: any,
    protein: any,
    bad: any,
    good: any
  ): void
  /**
   * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20012} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20012</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20012
   * @param calories {String}
   * @param carbs {String}
   * @param fat {String}
   * @param protein {String}
   * @param bad {Array.<Object>}
   * @param good {Array.<Object>}
   */
  constructor(
    calories: string,
    carbs: string,
    fat: string,
    protein: string,
    bad: Array<Object>,
    good: Array<Object>
  )
  calories: any
  carbs: any
  fat: any
  protein: any
  bad: any
  good: any
}
//# sourceMappingURL=InlineResponse20012.d.ts.map
