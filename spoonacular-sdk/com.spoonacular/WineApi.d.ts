/**
 * Wine service.
 * @module com.spoonacular.client/com.spoonacular/WineApi
 * @version 1.0
 */
export default class WineApi {
  /**
   * Constructs a new WineApi.
   * @alias module:com.spoonacular.client/com.spoonacular/WineApi
   * @class
   * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: any)
  apiClient: any
  /**
   * Callback function to receive the result of the getDishPairingForWine operation.
   * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getDishPairingForWineCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20044} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Dish Pairing for Wine
   * Find a dish that goes well with a given wine.
   * @param {String} wine The type of wine that should be paired, e.g. \"merlot\", \"riesling\", or \"malbec\".
   * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getDishPairingForWineCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20044}
   */
  getDishPairingForWine(wine: string, callback: any): any
  /**
   * Callback function to receive the result of the getWineDescription operation.
   * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWineDescriptionCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20046} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Wine Description
   * Get a simple description of a certain wine, e.g. \"malbec\", \"riesling\", or \"merlot\".
   * @param {String} wine The name of the wine that should be paired, e.g. \"merlot\", \"riesling\", or \"malbec\".
   * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWineDescriptionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20046}
   */
  getWineDescription(wine: string, callback: any): any
  /**
   * Callback function to receive the result of the getWinePairing operation.
   * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWinePairingCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Wine Pairing
   * Find a wine that goes well with a food. Food can be a dish name (\"steak\"), an ingredient name (\"salmon\"), or a cuisine (\"italian\").
   * @param {String} food The food to get a pairing for. This can be a dish (\"steak\"), an ingredient (\"salmon\"), or a cuisine (\"italian\").
   * @param {Object} opts Optional parameters
   * @param {Number} opts.maxPrice The maximum price for the specific wine recommendation in USD.
   * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWinePairingCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20045}
   */
  getWinePairing(
    food: string,
    opts: {
      maxPrice: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getWineRecommendation operation.
   * @callback module:com.spoonacular.client/com.spoonacular/WineApi~getWineRecommendationCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Wine Recommendation
   * Get a specific wine recommendation (concrete product) for a given wine type, e.g. \"merlot\".
   * @param {String} wine The type of wine to get a specific product recommendation for.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.maxPrice The maximum price for the specific wine recommendation in USD.
   * @param {Number} opts.minRating The minimum rating of the recommended wine between 0 and 1. For example, 0.8 equals 4 out of 5 stars.
   * @param {Number} opts._number The number of wine recommendations expected (between 1 and 100). (default to 10)
   * @param {module:com.spoonacular.client/com.spoonacular/WineApi~getWineRecommendationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20047}
   */
  getWineRecommendation(
    wine: string,
    opts: {
      maxPrice: number
      minRating: number
      _number: number
    },
    callback: any
  ): any
}
//# sourceMappingURL=WineApi.d.ts.map
