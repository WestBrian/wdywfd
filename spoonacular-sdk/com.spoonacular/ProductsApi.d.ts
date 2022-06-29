/**
 * Products service.
 * @module com.spoonacular.client/com.spoonacular/ProductsApi
 * @version 1.0
 */
export default class ProductsApi {
  /**
   * Constructs a new ProductsApi.
   * @alias module:com.spoonacular.client/com.spoonacular/ProductsApi
   * @class
   * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: any)
  apiClient: any
  /**
   * Callback function to receive the result of the autocompleteProductSearch operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~autocompleteProductSearchCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Autocomplete Product Search
   * Generate suggestions for grocery products based on a (partial) query. The matches will be found by looking in the title only.
   * @param {String} query The (partial) search query.
   * @param {Object} opts Optional parameters
   * @param {Number} opts._number The number of results to return (between 1 and 25).
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~autocompleteProductSearchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032}
   */
  autocompleteProductSearch(
    query: string,
    opts: {
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the classifyGroceryProduct operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Classify Grocery Product
   * This endpoint allows you to match a packaged food to a basic category, e.g. a specific brand of milk to the category milk.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject1} inlineObject1
   * @param {Object} opts Optional parameters
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.locale The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033}
   */
  classifyGroceryProduct(
    inlineObject1: any,
    opts: {
      locale: any
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the classifyGroceryProductBulk operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductBulkCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Classify Grocery Product Bulk
   * Provide a set of product jsons, get back classified products.
   * @param {Array.<InlineObject>} inlineObject
   * @param {Object} opts Optional parameters
   * @param {String} opts.locale The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~classifyGroceryProductBulkCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20033>}
   */
  classifyGroceryProductBulk(
    inlineObject: Array<InlineObject>,
    opts: {
      locale: string
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getComparableProducts operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~getComparableProductsCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Get Comparable Products
   * Find comparable products to the given one.
   * @param {Number} upc The UPC of the product for which you want to find comparable products.
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~getComparableProductsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20031}
   */
  getComparableProducts(upc: number, callback: any): any
  /**
   * Callback function to receive the result of the getProductInformation operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~getProductInformationCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Get Product Information
   * Use a product id to get full information about a product, such as ingredients, nutrition, etc. The nutritional information is per serving.
   * @param {Number} id The item's id.
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~getProductInformationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20030}
   */
  getProductInformation(id: number, callback: any): any
  /**
   * Callback function to receive the result of the productNutritionByIDImage operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionByIDImageCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Product Nutrition by ID Image
   * Visualize a product's nutritional information as an image.
   * @param {Number} id The id of the product.
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  productNutritionByIDImage(id: number, callback: any): any
  /**
   * Callback function to receive the result of the productNutritionLabelImage operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelImageCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Product Nutrition Label Image
   * Get a product's nutrition label as an image.
   * @param {Number} id The product id.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
   * @param {Boolean} opts.showZeroValues Whether to show zero values.
   * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelImageCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  productNutritionLabelImage(
    id: number,
    opts: {
      showOptionalNutrients: boolean
      showZeroValues: boolean
      showIngredients: boolean
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the productNutritionLabelWidget operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelWidgetCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Product Nutrition Label Widget
   * Get a product's nutrition label as an HTML widget.
   * @param {Number} id The product id.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
   * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
   * @param {Boolean} opts.showZeroValues Whether to show zero values.
   * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~productNutritionLabelWidgetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */
  productNutritionLabelWidget(
    id: number,
    opts: {
      defaultCss: boolean
      showOptionalNutrients: boolean
      showZeroValues: boolean
      showIngredients: boolean
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the searchGroceryProducts operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Search Grocery Products
   * Search packaged food products, such as frozen pizza or Greek yogurt.
   * @param {Object} opts Optional parameters
   * @param {String} opts.query The (natural language) search query.
   * @param {Number} opts.minCalories The minimum amount of calories the product must have.
   * @param {Number} opts.maxCalories The maximum amount of calories the product can have.
   * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the product must have.
   * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the product can have.
   * @param {Number} opts.minProtein The minimum amount of protein in grams the product must have.
   * @param {Number} opts.maxProtein The maximum amount of protein in grams the product can have.
   * @param {Number} opts.minFat The minimum amount of fat in grams the product must have.
   * @param {Number} opts.maxFat The maximum amount of fat in grams the product can have.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.addProductInformation If set to true, you get more information about the products returned.
   * @param {Number} opts.offset The number of results to skip (between 0 and 900).
   * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20027}
   */
  searchGroceryProducts(
    opts: {
      query: string
      minCalories: number
      maxCalories: number
      minCarbs: number
      maxCarbs: number
      minProtein: number
      maxProtein: number
      minFat: number
      maxFat: number
      addProductInformation: any
      offset: number
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the searchGroceryProductsByUPC operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsByUPCCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Search Grocery Products by UPC
   * Get information about a packaged food using its UPC.
   * @param {Number} upc The product's UPC.
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~searchGroceryProductsByUPCCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028}
   */
  searchGroceryProductsByUPC(upc: number, callback: any): any
  /**
   * Callback function to receive the result of the visualizeProductNutritionByID operation.
   * @callback module:com.spoonacular.client/com.spoonacular/ProductsApi~visualizeProductNutritionByIDCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Product Nutrition by ID Widget
   * Visualize a product's nutritional information as HTML including CSS.
   * @param {Number} id The item's id.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
   * @param {module:com.spoonacular.client/com.spoonacular/ProductsApi~visualizeProductNutritionByIDCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */
  visualizeProductNutritionByID(
    id: number,
    opts: {
      defaultCss: boolean
      accept: any
    },
    callback: any
  ): any
}
import InlineObject from '../com.spoonacular.client.model/InlineObject'
//# sourceMappingURL=ProductsApi.d.ts.map
