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
 * The InlineResponse2002 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002
 * @version 1.0
 */
class InlineResponse2002 {
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
  constructor(calories, carbs, fat, id, image, imageType, protein, title) {
    InlineResponse2002.initialize(
      this,
      calories,
      carbs,
      fat,
      id,
      image,
      imageType,
      protein,
      title
    )
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj,
    calories,
    carbs,
    fat,
    id,
    image,
    imageType,
    protein,
    title
  ) {
    obj['calories'] = calories
    obj['carbs'] = carbs
    obj['fat'] = fat
    obj['id'] = id
    obj['image'] = image
    obj['imageType'] = imageType
    obj['protein'] = protein
    obj['title'] = title
  }
  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2002()
      if (data.hasOwnProperty('calories')) {
        obj['calories'] = ApiClient_1.default.convertToType(
          data['calories'],
          'Number'
        )
      }
      if (data.hasOwnProperty('carbs')) {
        obj['carbs'] = ApiClient_1.default.convertToType(
          data['carbs'],
          'String'
        )
      }
      if (data.hasOwnProperty('fat')) {
        obj['fat'] = ApiClient_1.default.convertToType(data['fat'], 'String')
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient_1.default.convertToType(data['id'], 'Number')
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient_1.default.convertToType(
          data['image'],
          'String'
        )
      }
      if (data.hasOwnProperty('imageType')) {
        obj['imageType'] = ApiClient_1.default.convertToType(
          data['imageType'],
          'String'
        )
      }
      if (data.hasOwnProperty('protein')) {
        obj['protein'] = ApiClient_1.default.convertToType(
          data['protein'],
          'String'
        )
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient_1.default.convertToType(
          data['title'],
          'String'
        )
      }
    }
    return obj
  }
}
/**
 * @member {Number} calories
 */
InlineResponse2002.prototype['calories'] = undefined
/**
 * @member {String} carbs
 */
InlineResponse2002.prototype['carbs'] = undefined
/**
 * @member {String} fat
 */
InlineResponse2002.prototype['fat'] = undefined
/**
 * @member {Number} id
 */
InlineResponse2002.prototype['id'] = undefined
/**
 * @member {String} image
 */
InlineResponse2002.prototype['image'] = undefined
/**
 * @member {String} imageType
 */
InlineResponse2002.prototype['imageType'] = undefined
/**
 * @member {String} protein
 */
InlineResponse2002.prototype['protein'] = undefined
/**
 * @member {String} title
 */
InlineResponse2002.prototype['title'] = undefined
exports.default = InlineResponse2002