export default InlineResponse2005
/**
 * The InlineResponse2005 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005
 * @version 1.0
 */
declare class InlineResponse2005 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    imageType: any,
    readyInMinutes: any,
    servings: any,
    sourceUrl: any
  ): void
  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2005
   * @param id {Number}
   * @param title {String}
   * @param imageType {String}
   * @param readyInMinutes {Number}
   * @param servings {Number}
   * @param sourceUrl {String}
   */
  constructor(
    id: number,
    title: string,
    imageType: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string
  )
  id: any
  title: any
  imageType: any
  readyInMinutes: any
  servings: any
  sourceUrl: any
}
//# sourceMappingURL=InlineResponse2005.d.ts.map
