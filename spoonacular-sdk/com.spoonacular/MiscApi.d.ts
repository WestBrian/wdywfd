/**
 * Misc service.
 * @module com.spoonacular.client/com.spoonacular/MiscApi
 * @version 1.0
 */
export default class MiscApi {
  /**
   * Constructs a new MiscApi.
   * @alias module:com.spoonacular.client/com.spoonacular/MiscApi
   * @class
   * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
   */
  constructor(apiClient?: any)
  apiClient: any
  /**
   * Callback function to receive the result of the detectFoodInText operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~detectFoodInTextCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20051} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Detect Food in Text
   * Take any text and find all mentions of food contained within it. This task is also called Named Entity Recognition (NER). In this case, the entities are foods. Either dishes, such as pizza or cheeseburger, or ingredients, such as cucumber or almonds.
   * @param {Object} opts Optional parameters
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~detectFoodInTextCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20051}
   */
  detectFoodInText(
    opts: {
      contentType: any
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getARandomFoodJoke operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getARandomFoodJokeCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Random Food Joke
   * Get a random joke that is related to food. Caution: this is an endpoint for adults!
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getARandomFoodJokeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055}
   */
  getARandomFoodJoke(callback: any): any
  /**
   * Callback function to receive the result of the getConversationSuggests operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getConversationSuggestsCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Conversation Suggests
   * This endpoint returns suggestions for things the user can say or ask the chatbot.
   * @param {String} query A (partial) query from the user. The endpoint will return if it matches topics it can talk about.
   * @param {Object} opts Optional parameters
   * @param {Number} opts._number The number of suggestions to return (between 1 and 25).
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getConversationSuggestsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20057}
   */
  getConversationSuggests(
    query: string,
    opts: {
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the getRandomFoodTrivia operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~getRandomFoodTriviaCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Random Food Trivia
   * Returns random food trivia.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~getRandomFoodTriviaCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20055}
   */
  getRandomFoodTrivia(callback: any): any
  /**
   * Callback function to receive the result of the imageAnalysisByURL operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~imageAnalysisByURLCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Image Analysis by URL
   * Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes.
   * @param {String} imageUrl The URL of the image to be analyzed.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~imageAnalysisByURLCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20049}
   */
  imageAnalysisByURL(imageUrl: string, callback: any): any
  /**
   * Callback function to receive the result of the imageClassificationByURL operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~imageClassificationByURLCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Image Classification by URL
   * Classify a food image.
   * @param {String} imageUrl The URL of the image to be classified.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~imageClassificationByURLCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20048}
   */
  imageClassificationByURL(imageUrl: string, callback: any): any
  /**
   * Callback function to receive the result of the searchAllFood operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchAllFoodCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Search All Food
   * Search all food content with one call. That includes recipes, grocery products, menu items, simple foods (ingredients), and food videos.
   * @param {String} query The search query.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.offset The number of results to skip (between 0 and 900).
   * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchAllFoodCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053}
   */
  searchAllFood(
    query: string,
    opts: {
      offset: number
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the searchCustomFoods operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchCustomFoodsCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Search Custom Foods
   * Search custom foods in a user's account.
   * @param {String} username The username.
   * @param {String} hash The private hash for the username.
   * @param {Object} opts Optional parameters
   * @param {String} opts.query The (natural language) search query.
   * @param {Number} opts.offset The number of results to skip (between 0 and 900).
   * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchCustomFoodsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20029}
   */
  searchCustomFoods(
    username: string,
    hash: string,
    opts: {
      query: string
      offset: number
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the searchFoodVideos operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchFoodVideosCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Search Food Videos
   * Find recipe and other food related videos.
   * @param {Object} opts Optional parameters
   * @param {String} opts.query The (natural language) search query.
   * @param {String} opts.type The type of the recipes. See a full list of supported meal types.
   * @param {String} opts.cuisine The cuisine(s) of the recipes. One or more, comma separated. See a full list of supported cuisines.
   * @param {String} opts.diet The diet for which the recipes must be suitable. See a full list of supported diets.
   * @param {String} opts.includeIngredients A comma-separated list of ingredients that the recipes should contain.
   * @param {String} opts.excludeIngredients A comma-separated list of ingredients or ingredient types that the recipes must not contain.
   * @param {Number} opts.minLength Minimum video length in seconds.
   * @param {Number} opts.maxLength Maximum video length in seconds.
   * @param {Number} opts.offset The number of results to skip (between 0 and 900).
   * @param {Number} opts._number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchFoodVideosCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20054}
   */
  searchFoodVideos(
    opts: {
      query: string
      type: string
      cuisine: string
      diet: string
      includeIngredients: string
      excludeIngredients: string
      minLength: number
      maxLength: number
      offset: number
      _number: number
    },
    callback: any
  ): any
  /**
   * Callback function to receive the result of the searchSiteContent operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~searchSiteContentCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Search Site Content
   * Search spoonacular's site content. You'll be able to find everything that you could also find using the search suggestions on spoonacular.com. This is a suggest API so you can send partial strings as queries.
   * @param {String} query The query to search for. You can also use partial queries such as \"spagh\" to already find spaghetti recipes, articles, grocery products, and other content.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~searchSiteContentCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20052}
   */
  searchSiteContent(query: string, callback: any): any
  /**
   * Callback function to receive the result of the talkToChatbot operation.
   * @callback module:com.spoonacular.client/com.spoonacular/MiscApi~talkToChatbotCallback
   * @param {String} error Error message, if any.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20056} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */
  /**
   * Talk to Chatbot
   * This endpoint can be used to have a conversation about food with the spoonacular chatbot. Use the \"Get Conversation Suggests\" endpoint to show your user what he or she can say.
   * @param {String} text The request / question / answer from the user to the chatbot.
   * @param {Object} opts Optional parameters
   * @param {String} opts.contextId An arbitrary globally unique id for your conversation. The conversation can contain states so you should pass your context id if you want the bot to be able to remember the conversation.
   * @param {module:com.spoonacular.client/com.spoonacular/MiscApi~talkToChatbotCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20056}
   */
  talkToChatbot(
    text: string,
    opts: {
      contextId: string
    },
    callback: any
  ): any
}
//# sourceMappingURL=MiscApi.d.ts.map
