export default InlineObject8
/**
 * The InlineObject8 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject8
 * @version 1.0
 */
declare class InlineObject8 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    username: any,
    startDate: any,
    endDate: any,
    hash: any
  ): void
  /**
   * Constructs a <code>InlineObject8</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8} The populated <code>InlineObject8</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineObject8</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8
   * @param username {String} The username.
   * @param startDate {String} The start date in the format yyyy-mm-dd.
   * @param endDate {String} The end date in the format yyyy-mm-dd.
   * @param hash {String} The private hash for the username.
   */
  constructor(
    username: string,
    startDate: string,
    endDate: string,
    hash: string
  )
  username: any
  'start-date': any
  'end-date': any
  hash: any
}
//# sourceMappingURL=InlineObject8.d.ts.map
