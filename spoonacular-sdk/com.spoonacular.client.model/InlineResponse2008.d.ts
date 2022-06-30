export default InlineResponse2008
/**
 * The InlineResponse2008 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008
 * @version 1.0
 */
declare class InlineResponse2008 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    sweetness: any,
    saltiness: any,
    sourness: any,
    bitterness: any,
    savoriness: any,
    fattiness: any,
    spiciness: any
  ): void
  /**
   * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2008</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008
   * @param sweetness {Number}
   * @param saltiness {Number}
   * @param sourness {Number}
   * @param bitterness {Number}
   * @param savoriness {Number}
   * @param fattiness {Number}
   * @param spiciness {Number}
   */
  constructor(
    sweetness: number,
    saltiness: number,
    sourness: number,
    bitterness: number,
    savoriness: number,
    fattiness: number,
    spiciness: number
  )
  sweetness: any
  saltiness: any
  sourness: any
  bitterness: any
  savoriness: any
  fattiness: any
  spiciness: any
}
//# sourceMappingURL=InlineResponse2008.d.ts.map
