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
 * The InlineResponse20047RecommendedWines model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines
 * @version 1.0
 */
class InlineResponse20047RecommendedWines {
  /**
   * Constructs a new <code>InlineResponse20047RecommendedWines</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines
   * @param id {Number}
   * @param title {String}
   * @param averageRating {Number}
   * @param description {String}
   * @param imageUrl {String}
   * @param link {String}
   * @param price {String}
   * @param ratingCount {Number}
   * @param score {Number}
   */
  constructor(
    id,
    title,
    averageRating,
    description,
    imageUrl,
    link,
    price,
    ratingCount,
    score
  ) {
    InlineResponse20047RecommendedWines.initialize(
      this,
      id,
      title,
      averageRating,
      description,
      imageUrl,
      link,
      price,
      ratingCount,
      score
    )
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(
    obj,
    id,
    title,
    averageRating,
    description,
    imageUrl,
    link,
    price,
    ratingCount,
    score
  ) {
    obj['id'] = id
    obj['title'] = title
    obj['averageRating'] = averageRating
    obj['description'] = description
    obj['imageUrl'] = imageUrl
    obj['link'] = link
    obj['price'] = price
    obj['ratingCount'] = ratingCount
    obj['score'] = score
  }
  /**
   * Constructs a <code>InlineResponse20047RecommendedWines</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines} obj Optional instance to populate.
   * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047RecommendedWines} The populated <code>InlineResponse20047RecommendedWines</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20047RecommendedWines()
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient_1.default.convertToType(data['id'], 'Number')
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient_1.default.convertToType(
          data['title'],
          'String'
        )
      }
      if (data.hasOwnProperty('averageRating')) {
        obj['averageRating'] = ApiClient_1.default.convertToType(
          data['averageRating'],
          'Number'
        )
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient_1.default.convertToType(
          data['description'],
          'String'
        )
      }
      if (data.hasOwnProperty('imageUrl')) {
        obj['imageUrl'] = ApiClient_1.default.convertToType(
          data['imageUrl'],
          'String'
        )
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient_1.default.convertToType(data['link'], 'String')
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient_1.default.convertToType(
          data['price'],
          'String'
        )
      }
      if (data.hasOwnProperty('ratingCount')) {
        obj['ratingCount'] = ApiClient_1.default.convertToType(
          data['ratingCount'],
          'Number'
        )
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient_1.default.convertToType(
          data['score'],
          'Number'
        )
      }
    }
    return obj
  }
}
/**
 * @member {Number} id
 */
InlineResponse20047RecommendedWines.prototype['id'] = undefined
/**
 * @member {String} title
 */
InlineResponse20047RecommendedWines.prototype['title'] = undefined
/**
 * @member {Number} averageRating
 */
InlineResponse20047RecommendedWines.prototype['averageRating'] = undefined
/**
 * @member {String} description
 */
InlineResponse20047RecommendedWines.prototype['description'] = undefined
/**
 * @member {String} imageUrl
 */
InlineResponse20047RecommendedWines.prototype['imageUrl'] = undefined
/**
 * @member {String} link
 */
InlineResponse20047RecommendedWines.prototype['link'] = undefined
/**
 * @member {String} price
 */
InlineResponse20047RecommendedWines.prototype['price'] = undefined
/**
 * @member {Number} ratingCount
 */
InlineResponse20047RecommendedWines.prototype['ratingCount'] = undefined
/**
 * @member {Number} score
 */
InlineResponse20047RecommendedWines.prototype['score'] = undefined
exports.default = InlineResponse20047RecommendedWines
