export default InlineResponse20024
/**
 * The InlineResponse20024 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20024
 * @version 1.0
 */
declare class InlineResponse20024 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    name: any,
    image: any,
    id: any,
    aisle: any,
    possibleUnits: any
  ): void
  /**
   * Constructs a <code>InlineResponse20024</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20024} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20024} The populated <code>InlineResponse20024</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse20024</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20024
   * @param name {String}
   * @param image {String}
   * @param id {Number}
   * @param aisle {String}
   * @param possibleUnits {Array.<String>}
   */
  constructor(
    name: string,
    image: string,
    id: number,
    aisle: string,
    possibleUnits: Array<string>
  )
  name: any
  image: any
  id: any
  aisle: any
  possibleUnits: any
}
//# sourceMappingURL=InlineResponse20024.d.ts.map
