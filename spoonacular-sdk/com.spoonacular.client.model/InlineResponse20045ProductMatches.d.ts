export default InlineResponse20045ProductMatches
/**
 * The InlineResponse20045ProductMatches model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches
 * @version 1.0
 */
declare class InlineResponse20045ProductMatches {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    averageRating: any,
    imageUrl: any,
    link: any,
    price: any,
    ratingCount: any,
    score: any
  ): void
  /**
   * Constructs a <code>InlineResponse20045ProductMatches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches} The populated <code>InlineResponse20045ProductMatches</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20045ProductMatches</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045ProductMatches
   * @param id {Number}
   * @param title {String}
   * @param averageRating {Number}
   * @param imageUrl {String}
   * @param link {String}
   * @param price {String}
   * @param ratingCount {Number}
   * @param score {Number}
   */
  constructor(
    id: number,
    title: string,
    averageRating: number,
    imageUrl: string,
    link: string,
    price: string,
    ratingCount: number,
    score: number
  )
  id: any
  title: any
  averageRating: any
  description: any
  imageUrl: any
  link: any
  price: any
  ratingCount: any
  score: any
}
//# sourceMappingURL=InlineResponse20045ProductMatches.d.ts.map
