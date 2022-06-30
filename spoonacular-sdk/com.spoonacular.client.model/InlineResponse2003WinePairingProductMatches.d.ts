export default InlineResponse2003WinePairingProductMatches
/**
 * The InlineResponse2003WinePairingProductMatches model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches
 * @version 1.0
 */
declare class InlineResponse2003WinePairingProductMatches {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    description: any,
    price: any,
    imageUrl: any,
    averageRating: any,
    ratingCount: any,
    score: any,
    link: any
  ): void
  /**
   * Constructs a <code>InlineResponse2003WinePairingProductMatches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches} The populated <code>InlineResponse2003WinePairingProductMatches</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2003WinePairingProductMatches</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches
   * @param id {Number}
   * @param title {String}
   * @param description {String}
   * @param price {String}
   * @param imageUrl {String}
   * @param averageRating {Number}
   * @param ratingCount {Number}
   * @param score {Number}
   * @param link {String}
   */
  constructor(
    id: number,
    title: string,
    description: string,
    price: string,
    imageUrl: string,
    averageRating: number,
    ratingCount: number,
    score: number,
    link: string
  )
  id: any
  title: any
  description: any
  price: any
  imageUrl: any
  averageRating: any
  ratingCount: any
  score: any
  link: any
}
//# sourceMappingURL=InlineResponse2003WinePairingProductMatches.d.ts.map
