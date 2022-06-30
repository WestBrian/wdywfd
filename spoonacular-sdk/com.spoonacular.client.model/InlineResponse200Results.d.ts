export default InlineResponse200Results
/**
 * The InlineResponse200Results model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results
 * @version 1.0
 */
declare class InlineResponse200Results {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj: any,
    id: any,
    title: any,
    calories: any,
    carbs: any,
    fat: any,
    image: any,
    imageType: any,
    protein: any
  ): void
  /**
   * Constructs a <code>InlineResponse200Results</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results} The populated <code>InlineResponse200Results</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>InlineResponse200Results</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse200Results
   * @param id {Number}
   * @param title {String}
   * @param calories {Number}
   * @param carbs {String}
   * @param fat {String}
   * @param image {String}
   * @param imageType {String}
   * @param protein {String}
   */
  constructor(
    id: number,
    title: string,
    calories: number,
    carbs: string,
    fat: string,
    image: string,
    imageType: string,
    protein: string
  )
  id: any
  title: any
  calories: any
  carbs: any
  fat: any
  image: any
  imageType: any
  protein: any
}
//# sourceMappingURL=InlineResponse200Results.d.ts.map
