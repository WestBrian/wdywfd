export default FoodIngredientsMapProducts
/**
 * The FoodIngredientsMapProducts model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/FoodIngredientsMapProducts
 * @version 1.0
 */
declare class FoodIngredientsMapProducts {
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj: any, id: any, title: any, upc: any): void
  /**
   * Constructs a <code>FoodIngredientsMapProducts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/FoodIngredientsMapProducts} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/FoodIngredientsMapProducts} The populated <code>FoodIngredientsMapProducts</code> instance.
   */
  static constructFromObject(data: Object, obj: any): any
  /**
   * Constructs a new <code>FoodIngredientsMapProducts</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/FoodIngredientsMapProducts
   * @param id {Number}
   * @param title {String}
   * @param upc {String}
   */
  constructor(id: number, title: string, upc: string)
  id: any
  title: any
  upc: any
}
//# sourceMappingURL=FoodIngredientsMapProducts.d.ts.map
