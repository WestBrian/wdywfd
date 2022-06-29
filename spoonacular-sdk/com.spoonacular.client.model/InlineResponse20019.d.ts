export default InlineResponse20019
/**
 * The InlineResponse20019 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019
 * @version 1.0
 */
declare class InlineResponse20019 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    sourceAmount: any,
    sourceUnit: any,
    targetAmount: any,
    targetUnit: any,
    answer: any
  ): void
  /**
   * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20019</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20019
   * @param sourceAmount {Number}
   * @param sourceUnit {String}
   * @param targetAmount {Number}
   * @param targetUnit {String}
   * @param answer {String}
   */
  constructor(
    sourceAmount: number,
    sourceUnit: string,
    targetAmount: number,
    targetUnit: string,
    answer: string
  )
  sourceAmount: any
  sourceUnit: any
  targetAmount: any
  targetUnit: any
  answer: any
}
//# sourceMappingURL=InlineResponse20019.d.ts.map
