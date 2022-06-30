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
const InlineResponse20040Value_1 = __importDefault(
  require('./InlineResponse20040Value')
)
/**
 * The InlineResponse20040Items model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items
 * @version 1.0
 */
class InlineResponse20040Items {
  /**
   * Constructs a new <code>InlineResponse20040Items</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items
   * @param day {Number}
   * @param slot {Number}
   * @param position {Number}
   * @param type {String}
   */
  constructor(day, slot, position, type) {
    InlineResponse20040Items.initialize(this, day, slot, position, type)
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, day, slot, position, type) {
    obj['day'] = day
    obj['slot'] = slot
    obj['position'] = position
    obj['type'] = type
  }
  /**
   * Constructs a <code>InlineResponse20040Items</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Items} The populated <code>InlineResponse20040Items</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20040Items()
      if (data.hasOwnProperty('day')) {
        obj['day'] = ApiClient_1.default.convertToType(data['day'], 'Number')
      }
      if (data.hasOwnProperty('slot')) {
        obj['slot'] = ApiClient_1.default.convertToType(data['slot'], 'Number')
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient_1.default.convertToType(
          data['position'],
          'Number'
        )
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient_1.default.convertToType(data['type'], 'String')
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = InlineResponse20040Value_1.default.constructFromObject(
          data['value']
        )
      }
    }
    return obj
  }
}
/**
 * @member {Number} day
 */
InlineResponse20040Items.prototype['day'] = undefined
/**
 * @member {Number} slot
 */
InlineResponse20040Items.prototype['slot'] = undefined
/**
 * @member {Number} position
 */
InlineResponse20040Items.prototype['position'] = undefined
/**
 * @member {String} type
 */
InlineResponse20040Items.prototype['type'] = undefined
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040Value} value
 */
InlineResponse20040Items.prototype['value'] = undefined
exports.default = InlineResponse20040Items
