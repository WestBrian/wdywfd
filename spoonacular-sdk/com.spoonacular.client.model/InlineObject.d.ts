export default InlineObject
/**
 * The InlineObject model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject
 * @version 1.0
 */
declare class InlineObject {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, title: any, upc: any, pluCode: any): void
  /**
   * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject} The populated <code>InlineObject</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineObject</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject
   * @param title {String}
   * @param upc {String}
   * @param pluCode {String}
   */
  constructor(title: string, upc: string, pluCode: string)
  title: any
  upc: any
  plu_code: any
}
//# sourceMappingURL=InlineObject.d.ts.map
