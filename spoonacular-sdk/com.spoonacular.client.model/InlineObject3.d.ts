export default InlineObject3
/**
 * The InlineObject3 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject3
 * @version 1.0
 */
declare class InlineObject3 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, username: any, _date: any, hash: any): void
  /**
   * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3} The populated <code>InlineObject3</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineObject3</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3
   * @param username {String} The username.
   * @param _date {String} The date in the format yyyy-mm-dd.
   * @param hash {String} The private hash for the username.
   */
  constructor(username: string, _date: string, hash: string)
  username: any
  date: any
  hash: any
}
//# sourceMappingURL=InlineObject3.d.ts.map
