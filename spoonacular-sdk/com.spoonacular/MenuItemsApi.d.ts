/**
 * MenuItems service.
 * @module com.spoonacular.client/com.spoonacular/MenuItemsApi
 * @version 1.0
 */
export default class MenuItemsApi {
  /**
   * Constructs a new MenuItemsApi.
   * @alias module:com.spoonacular.client/com.spoonacular/MenuItemsApi
   * @class
   * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: any)
  apiClient: any
  /**
   * Callback function to receive the result of the autocompleteMenuItemSearch operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~autocompleteMenuItemSearchCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Autocomplete Menu Item Search
   * Generate suggestions for menu items based on a (partial) query. The matches will be found by looking in the title only.
   * @param {String} query The (partial) search query.
   * @param {Object} opts Optional parameters
   * @param {Number} opts._number The number of results to return (between 1 and 25).
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~autocompleteMenuItemSearchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20032}
   */
  autocompleteMenuItemSearch(
    query: string,
    opts: {
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getMenuItemInformation operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~getMenuItemInformationCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Get Menu Item Information
   * Use a menu item id to get all available information about a menu item, such as nutrition.
   * @param {Number} id The item's id.
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~getMenuItemInformationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20036}
   */
  getMenuItemInformation(id: number, callback: any): any
  /**
   * Callback function to receive the result of the menuItemNutritionByIDImage operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionByIDImageCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Menu Item Nutrition by ID Image
   * Visualize a menu item's nutritional information as HTML including CSS.
   * @param {Number} id The menu item id.
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  menuItemNutritionByIDImage(id: number, callback: any): any
  /**
   * Callback function to receive the result of the menuItemNutritionLabelImage operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelImageCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Menu Item Nutrition Label Image
   * Visualize a menu item's nutritional label information as an image.
   * @param {Number} id The menu item id.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
   * @param {Boolean} opts.showZeroValues Whether to show zero values.
   * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelImageCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  menuItemNutritionLabelImage(
    id: number,
    opts: {
      showOptionalNutrients: boolean
      showZeroValues: boolean
      showIngredients: boolean
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the menuItemNutritionLabelWidget operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelWidgetCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Menu Item Nutrition Label Widget
   * Visualize a menu item's nutritional label information as HTML including CSS.
   * @param {Number} id The menu item id.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
   * @param {Boolean} opts.showOptionalNutrients Whether to show optional nutrients.
   * @param {Boolean} opts.showZeroValues Whether to show zero values.
   * @param {Boolean} opts.showIngredients Whether to show a list of ingredients.
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~menuItemNutritionLabelWidgetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */
  menuItemNutritionLabelWidget(
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
   * Callback function to receive the result of the searchMenuItems operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~searchMenuItemsCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Search Menu Items
   * Search over 115,000 menu items from over 800 fast food and chain restaurants. For example, McDonald's Big Mac or Starbucks Mocha.
   * @param {Object} opts Optional parameters
   * @param {String} opts.query The (natural language) search query.
   * @param {Number} opts.minCalories The minimum amount of calories the menu item must have.
   * @param {Number} opts.maxCalories The maximum amount of calories the menu item can have.
   * @param {Number} opts.minCarbs The minimum amount of carbohydrates in grams the menu item must have.
   * @param {Number} opts.maxCarbs The maximum amount of carbohydrates in grams the menu item can have.
   * @param {Number} opts.minProtein The minimum amount of protein in grams the menu item must have.
   * @param {Number} opts.maxProtein The maximum amount of protein in grams the menu item can have.
   * @param {Number} opts.minFat The minimum amount of fat in grams the menu item must have.
   * @param {Number} opts.maxFat The maximum amount of fat in grams the menu item can have.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/Boolean} opts.addMenuItemInformation If set to true, you get more information about the menu items returned.
   * @param {Number} opts.offset The number of results to skip (between 0 and 900).
   * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~searchMenuItemsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20035}
   */
  searchMenuItems(
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
      addMenuItemInformation: any
      offset: number
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the visualizeMenuItemNutritionByID operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MenuItemsApi~visualizeMenuItemNutritionByIDCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Menu Item Nutrition by ID Widget
   * Visualize a menu item's nutritional information as HTML including CSS.
   * @param {Number} id The item's id.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.defaultCss Whether the default CSS should be added to the response. (default to true)
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
   * @param {module:com.spoonacular.client/com.spoonacular/MenuItemsApi~visualizeMenuItemNutritionByIDCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */
  visualizeMenuItemNutritionByID(
    id: number,
    opts: {
      defaultCss: boolean
      accept: any
    },
    callback: any
  ): any
}
//# sourceMappingURL=MenuItemsApi.d.ts.map
