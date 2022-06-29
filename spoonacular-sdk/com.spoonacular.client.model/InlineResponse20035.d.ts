export default InlineResponse20035
/**
 * The InlineResponse20035 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035
 * @version 1.0
 */
declare class InlineResponse20035 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    menuItems: any,
    totalMenuItems: any,
    type: any,
    offset: any,
    _number: any
  ): void
  /**
   * Constructs a <code>InlineResponse20035</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035} The populated <code>InlineResponse20035</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20035</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035
   * @param menuItems {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035MenuItems>}
   * @param totalMenuItems {Number}
   * @param type {String}
   * @param offset {Number}
   * @param _number {Number}
   */
  constructor(
    menuItems: Array<module>,
    totalMenuItems: number,
    type: string,
    offset: number,
    _number: number
  )
  menuItems: any
  totalMenuItems: any
  type: any
  offset: any
  number: any
}
//# sourceMappingURL=InlineResponse20035.d.ts.map
