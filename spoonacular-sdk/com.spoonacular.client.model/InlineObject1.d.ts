export default InlineObject1
/**
 * The InlineObject1 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject1
 * @version 1.0
 */
declare class InlineObject1 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, title: any, upc: any, pluCode: any): void
  /**
   * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject1} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject1} The populated <code>InlineObject1</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineObject1</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject1
   * @param title {String}
   * @param upc {String}
   * @param pluCode {String}
   */
  constructor(title: string, upc: string, pluCode: string)
  title: any
  upc: any
  plu_code: any
}
//# sourceMappingURL=InlineObject1.d.ts.map
