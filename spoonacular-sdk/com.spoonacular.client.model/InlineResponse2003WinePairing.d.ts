export default InlineResponse2003WinePairing
/**
 * The InlineResponse2003WinePairing model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing
 * @version 1.0
 */
declare class InlineResponse2003WinePairing {
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
   * Constructs a <code>InlineResponse2003WinePairing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing} The populated <code>InlineResponse2003WinePairing</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2003WinePairing</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing
   * @param pairedWines {Array.<String>}
   * @param pairingText {String}
   * @param productMatches {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches>}
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
//# sourceMappingURL=InlineResponse2003WinePairing.d.ts.map
