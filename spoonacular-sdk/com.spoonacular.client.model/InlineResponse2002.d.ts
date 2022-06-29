export default InlineResponse2002
/**
 * The InlineResponse2002 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002
 * @version 1.0
 */
declare class InlineResponse2002 {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    calories: any,
    carbs: any,
    fat: any,
    id: any,
    image: any,
    imageType: any,
    protein: any,
    title: any
  ): void
  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002
   * @param calories {Number}
   * @param carbs {String}
   * @param fat {String}
   * @param id {Number}
   * @param image {String}
   * @param imageType {String}
   * @param protein {String}
   * @param title {String}
   */
  constructor(
    calories: number,
    carbs: string,
    fat: string,
    id: number,
    image: string,
    imageType: string,
    protein: string,
    title: string
  )
  calories: any
  carbs: any
  fat: any
  id: any
  image: any
  imageType: any
  protein: any
  title: any
}
//# sourceMappingURL=InlineResponse2002.d.ts.map
