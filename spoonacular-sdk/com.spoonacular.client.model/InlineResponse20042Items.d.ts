export default InlineResponse20042Items
/**
 * The InlineResponse20042Items model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042Items
 * @version 1.0
 */
declare class InlineResponse20042Items {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    name: any,
    pantryItem: any,
    aisle: any,
    cost: any,
    ingredientId: any
  ): void
  /**
   * Constructs a <code>InlineResponse20042Items</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042Items} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042Items} The populated <code>InlineResponse20042Items</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20042Items</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042Items
   * @param id {Number}
   * @param name {String}
   * @param pantryItem {Boolean}
   * @param aisle {String}
   * @param cost {Number}
   * @param ingredientId {Number}
   */
  constructor(
    id: number,
    name: string,
    pantryItem: boolean,
    aisle: string,
    cost: number,
    ingredientId: number
  )
  id: any
  name: any
  measures: any
  pantryItem: any
  aisle: any
  cost: any
  ingredientId: any
}
//# sourceMappingURL=InlineResponse20042Items.d.ts.map
