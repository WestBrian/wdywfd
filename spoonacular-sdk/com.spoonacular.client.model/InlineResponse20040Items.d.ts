export default InlineResponse20040Items
/**
 * The InlineResponse20040Items model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items
 * @version 1.0
 */
declare class InlineResponse20040Items {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    day: any,
    slot: any,
    position: any,
    type: any
  ): void
  /**
   * Constructs a <code>InlineResponse20040Items</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items} The populated <code>InlineResponse20040Items</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20040Items</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items
   * @param day {Number}
   * @param slot {Number}
   * @param position {Number}
   * @param type {String}
   */
  constructor(day: number, slot: number, position: number, type: string)
  day: any
  slot: any
  position: any
  type: any
  value: any
}
//# sourceMappingURL=InlineResponse20040Items.d.ts.map
