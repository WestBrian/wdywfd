export default InlineResponse20045
/**
 * The InlineResponse20045 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045
 * @version 1.0
 */
declare class InlineResponse20045 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    pairedWines: any,
    pairingText: any,
    productMatches: any
  ): void
  /**
   * Constructs a <code>InlineResponse20045</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045} The populated <code>InlineResponse20045</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20045</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045
   * @param pairedWines {Array.<String>}
   * @param pairingText {String}
   * @param productMatches {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches>}
   */
  constructor(
    pairedWines: Array<string>,
    pairingText: string,
    productMatches: Array<module>
  )
  pairedWines: any
  pairingText: any
  productMatches: any
}
//# sourceMappingURL=InlineResponse20045.d.ts.map
