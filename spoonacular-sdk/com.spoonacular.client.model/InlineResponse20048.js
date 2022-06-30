'use strict'
/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const ApiClient_1 = __importDefault(require('../ApiClient'))
/**
 * The InlineResponse20048 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048
 * @version 1.0
 */
class InlineResponse20048 {
  /**
   * Constructs a new <code>InlineResponse20048</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048
   * @param category {String}
   * @param probability {Number}
   */
  constructor(category, probability) {
    InlineResponse20048.initialize(this, category, probability)
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, category, probability) {
    obj['category'] = category
    obj['probability'] = probability
  }
  /**
   * Constructs a <code>InlineResponse20048</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048} The populated <code>InlineResponse20048</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20048()
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient_1.default.convertToType(
          data['category'],
          'String'
        )
      }
      if (data.hasOwnProperty('probability')) {
        obj['probability'] = ApiClient_1.default.convertToType(
          data['probability'],
          'Number'
        )
      }
    }
    return obj
  }
}
/**
 * @member {String} category
 */
InlineResponse20048.prototype['category'] = undefined
/**
 * @member {Number} probability
 */
InlineResponse20048.prototype['probability'] = undefined
exports.default = InlineResponse20048
