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
const InlineResponse20047RecommendedWines_1 = __importDefault(
  require('./InlineResponse20047RecommendedWines')
)
/**
 * The InlineResponse20047 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047
 * @version 1.0
 */
class InlineResponse20047 {
  /**
   * Constructs a new <code>InlineResponse20047</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047
   * @param recommendedWines {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines>}
   * @param totalFound {Number}
   */
  constructor(recommendedWines, totalFound) {
    InlineResponse20047.initialize(this, recommendedWines, totalFound)
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, recommendedWines, totalFound) {
    obj['recommendedWines'] = recommendedWines
    obj['totalFound'] = totalFound
  }
  /**
   * Constructs a <code>InlineResponse20047</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} The populated <code>InlineResponse20047</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20047()
      if (data.hasOwnProperty('recommendedWines')) {
        obj['recommendedWines'] = ApiClient_1.default.convertToType(
          data['recommendedWines'],
          [InlineResponse20047RecommendedWines_1.default]
        )
      }
      if (data.hasOwnProperty('totalFound')) {
        obj['totalFound'] = ApiClient_1.default.convertToType(
          data['totalFound'],
          'Number'
        )
      }
    }
    return obj
  }
}
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines>} recommendedWines
 */
InlineResponse20047.prototype['recommendedWines'] = undefined
/**
 * @member {Number} totalFound
 */
InlineResponse20047.prototype['totalFound'] = undefined
exports.default = InlineResponse20047
