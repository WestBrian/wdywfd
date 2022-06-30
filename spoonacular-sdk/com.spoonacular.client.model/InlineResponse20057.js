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
const InlineResponse20057Suggests_1 = __importDefault(
  require('./InlineResponse20057Suggests')
)
/**
 * The InlineResponse20057 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057
 * @version 1.0
 */
class InlineResponse20057 {
  /**
   * Constructs a new <code>InlineResponse20057</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057
   * @param suggests {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057Suggests}
   * @param words {Array.<Object>}
   */
  constructor(suggests, words) {
    InlineResponse20057.initialize(this, suggests, words)
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, suggests, words) {
    obj['suggests'] = suggests
    obj['words'] = words
  }
  /**
   * Constructs a <code>InlineResponse20057</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057} The populated <code>InlineResponse20057</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20057()
      if (data.hasOwnProperty('suggests')) {
        obj['suggests'] =
          InlineResponse20057Suggests_1.default.constructFromObject(
            data['suggests']
          )
      }
      if (data.hasOwnProperty('words')) {
        obj['words'] = ApiClient_1.default.convertToType(data['words'], [
          Object,
        ])
      }
    }
    return obj
  }
}
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057Suggests} suggests
 */
InlineResponse20057.prototype['suggests'] = undefined
/**
 * @member {Array.<Object>} words
 */
InlineResponse20057.prototype['words'] = undefined
exports.default = InlineResponse20057
