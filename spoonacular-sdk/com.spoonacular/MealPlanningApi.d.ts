/**
 * MealPlanning service.
 * @module com.spoonacular.client/com.spoonacular/MealPlanningApi
 * @version 1.0
 */
export default class MealPlanningApi {
  /**
   * Constructs a new MealPlanningApi.
   * @alias module:com.spoonacular.client/com.spoonacular/MealPlanningApi
   * @class
   * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: any)
  apiClient: any
  /**
   * Callback function to receive the result of the addMealPlanTemplate operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addMealPlanTemplateCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Add Meal Plan Template
   * Add a meal plan template for a user.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject6} inlineObject6
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20040}
   */
  addMealPlanTemplate(
    username: string,
    hash: string,
    inlineObject6: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the addToMealPlan operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToMealPlanCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Add to Meal Plan
   * Add an item to the user's meal plan.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject4} inlineObject4
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  addToMealPlan(
    username: string,
    hash: string,
    inlineObject4: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the addToShoppingList operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToShoppingListCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Add to Shopping List
   * Add an item to the current shopping list of a user.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject9} inlineObject9
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~addToShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042}
   */
  addToShoppingList(
    username: string,
    hash: string,
    inlineObject9: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the clearMealPlanDay operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~clearMealPlanDayCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Clear Meal Plan Day
   * Delete all planned items from the user's meal plan for a specific day.
   * @param {String} username The username.
   * @param {String} _date The date in the format yyyy-mm-dd.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3} inlineObject3
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~clearMealPlanDayCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  clearMealPlanDay(
    username: string,
    _date: string,
    hash: string,
    inlineObject3: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the connectUser operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~connectUserCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20043} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Connect User
   * In order to call user-specific endpoints, you need to connect your app's users to spoonacular users.
   * @param {Object} body
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~connectUserCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20043}
   */
  connectUser(body: Object, callback: any): any
  /**
   * Callback function to receive the result of the deleteFromMealPlan operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromMealPlanCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Delete from Meal Plan
   * Delete an item from the user's meal plan.
   * @param {String} username The username.
   * @param {Number} id The shopping list item id.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject5} inlineObject5
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  deleteFromMealPlan(
    username: string,
    id: number,
    hash: string,
    inlineObject5: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the deleteFromShoppingList operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromShoppingListCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Delete from Shopping List
   * Delete an item from the current shopping list of the user.
   * @param {String} username The username.
   * @param {Number} id The item's id.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject10} inlineObject10
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteFromShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  deleteFromShoppingList(
    username: string,
    id: number,
    hash: string,
    inlineObject10: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the deleteMealPlanTemplate operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteMealPlanTemplateCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Delete Meal Plan Template
   * Delete a meal plan template for a user.
   * @param {String} username The username.
   * @param {Number} id The item's id.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject7} inlineObject7
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~deleteMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  deleteMealPlanTemplate(
    username: string,
    id: number,
    hash: string,
    inlineObject7: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the generateMealPlan operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateMealPlanCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20037} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Generate Meal Plan
   * Generate a meal plan with three meals per day (breakfast, lunch, and dinner).
   * @param {Object} opts Optional parameters
   * @param {String} opts.timeFrame Either for one \"day\" or an entire \"week\".
   * @param {Number} opts.targetCalories What is the caloric target for one day? The meal plan generator will try to get as close as possible to that goal.
   * @param {String} opts.diet Enter a diet that the meal plan has to adhere to. See a full list of supported diets.
   * @param {String} opts.exclude A comma-separated list of allergens or ingredients that must be excluded.
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateMealPlanCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20037}
   */
  generateMealPlan(
    opts: {
      timeFrame: string
      targetCalories: number
      diet: string
      exclude: string
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the generateShoppingList operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateShoppingListCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Generate Shopping List
   * Generate the shopping list for a user from the meal planner in a given time frame.
   * @param {String} username The username.
   * @param {String} startDate The start date in the format yyyy-mm-dd.
   * @param {String} endDate The end date in the format yyyy-mm-dd.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8} inlineObject8
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~generateShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042}
   */
  generateShoppingList(
    username: string,
    startDate: string,
    endDate: string,
    hash: string,
    inlineObject8: any,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getMealPlanTemplate operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplateCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20041} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Get Meal Plan Template
   * Get information about a meal plan template.
   * @param {String} username The username.
   * @param {Number} id The item's id.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20041}
   */
  getMealPlanTemplate(
    username: string,
    id: number,
    hash: string,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getMealPlanTemplates operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplatesCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20039} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Get Meal Plan Templates
   * Get meal plan templates from user or public ones.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20039}
   */
  getMealPlanTemplates(username: string, hash: string, callback: any): any
  /**
   * Callback function to receive the result of the getMealPlanWeek operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanWeekCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Get Meal Plan Week
   * Retrieve a meal planned week for the given user. The username must be a spoonacular user and the hash must the the user's hash that can be found in his/her account.
   * @param {String} username The username.
   * @param {String} startDate The start date of the meal planned week in the format yyyy-mm-dd.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getMealPlanWeekCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20038}
   */
  getMealPlanWeek(
    username: string,
    startDate: string,
    hash: string,
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getShoppingList operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getShoppingListCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Get Shopping List
   * Get the current shopping list for the given user.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {module:com.spoonacular.client/com.spoonacular/MealPlanningApi~getShoppingListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20042}
   */
  getShoppingList(username: string, hash: string, callback: any): any
}
//# sourceMappingURL=MealPlanningApi.d.ts.map
