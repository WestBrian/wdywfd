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
exports.InlineResponse20028 =
  exports.InlineResponse20027 =
  exports.InlineResponse20026 =
  exports.InlineResponse20025Results =
  exports.InlineResponse20025 =
  exports.InlineResponse20024 =
  exports.InlineResponse20023Ingredients =
  exports.InlineResponse20023 =
  exports.InlineResponse20022Nutrition =
  exports.InlineResponse20022 =
  exports.InlineResponse20021CaloriesConfidenceRange95Percent =
  exports.InlineResponse20021Calories =
  exports.InlineResponse20021 =
  exports.InlineResponse20020 =
  exports.InlineResponse2002 =
  exports.InlineResponse20019 =
  exports.InlineResponse20018Ingredients =
  exports.InlineResponse20018Dishes =
  exports.InlineResponse20018 =
  exports.InlineResponse20017 =
  exports.InlineResponse20016 =
  exports.InlineResponse20015 =
  exports.InlineResponse20014 =
  exports.InlineResponse20013Steps =
  exports.InlineResponse20013ParsedInstructions =
  exports.InlineResponse20013Ingredients1 =
  exports.InlineResponse20013Ingredients =
  exports.InlineResponse20013 =
  exports.InlineResponse20012 =
  exports.InlineResponse20011Ingredients =
  exports.InlineResponse20011 =
  exports.InlineResponse20010Ingredients =
  exports.InlineResponse20010AmountMetric =
  exports.InlineResponse20010Amount =
  exports.InlineResponse20010 =
  exports.InlineResponse2001 =
  exports.InlineResponse200 =
  exports.InlineObject9 =
  exports.InlineObject8 =
  exports.InlineObject7 =
  exports.InlineObject6 =
  exports.InlineObject5 =
  exports.InlineObject4 =
  exports.InlineObject3 =
  exports.InlineObject2 =
  exports.InlineObject10 =
  exports.InlineObject1 =
  exports.InlineObject =
  exports.FoodIngredientsMapProducts =
  exports.ApiClient =
    void 0
exports.InlineResponse20047 =
  exports.InlineResponse20046 =
  exports.InlineResponse20045ProductMatches =
  exports.InlineResponse20045 =
  exports.InlineResponse20044 =
  exports.InlineResponse20043 =
  exports.InlineResponse20042Measures =
  exports.InlineResponse20042Items =
  exports.InlineResponse20042Aisles =
  exports.InlineResponse20042 =
  exports.InlineResponse20041Value =
  exports.InlineResponse20041Items =
  exports.InlineResponse20041Days =
  exports.InlineResponse20041 =
  exports.InlineResponse20040Value =
  exports.InlineResponse20040Items =
  exports.InlineResponse20040 =
  exports.InlineResponse2004 =
  exports.InlineResponse2003WinePairingProductMatches =
  exports.InlineResponse2003WinePairing =
  exports.InlineResponse2003MeasuresMetric =
  exports.InlineResponse2003Measures =
  exports.InlineResponse2003ExtendedIngredients =
  exports.InlineResponse20039 =
  exports.InlineResponse20038Value =
  exports.InlineResponse20038NutritionSummaryNutrients =
  exports.InlineResponse20038NutritionSummary =
  exports.InlineResponse20038Items =
  exports.InlineResponse20038Days =
  exports.InlineResponse20038 =
  exports.InlineResponse20037Nutrients =
  exports.InlineResponse20037 =
  exports.InlineResponse20036 =
  exports.InlineResponse20035MenuItems =
  exports.InlineResponse20035 =
  exports.InlineResponse20034 =
  exports.InlineResponse20033 =
  exports.InlineResponse20032Results =
  exports.InlineResponse20032 =
  exports.InlineResponse20031ComparableProductsProtein =
  exports.InlineResponse20031ComparableProducts =
  exports.InlineResponse20031 =
  exports.InlineResponse20030Ingredients =
  exports.InlineResponse20030 =
  exports.InlineResponse2003 =
  exports.InlineResponse20029CustomFoods =
  exports.InlineResponse20029 =
  exports.InlineResponse20028Servings =
  exports.InlineResponse20028Nutrition =
  exports.InlineResponse20028Ingredients =
    void 0
exports.WineApi =
  exports.RecipesApi =
  exports.ProductsApi =
  exports.MiscApi =
  exports.MenuItemsApi =
  exports.MealPlanningApi =
  exports.IngredientsApi =
  exports.RecipesParseIngredientsNutritionWeightPerServing =
  exports.RecipesParseIngredientsNutritionProperties =
  exports.RecipesParseIngredientsNutritionNutrients =
  exports.RecipesParseIngredientsNutritionCaloricBreakdown =
  exports.RecipesParseIngredientsNutrition =
  exports.RecipesParseIngredientsEstimatedCost =
  exports.RecipesFindByIngredientsMissedIngredients =
  exports.InlineResponse200Results =
  exports.InlineResponse2009 =
  exports.InlineResponse2008 =
  exports.InlineResponse2007 =
  exports.InlineResponse2006Recipes =
  exports.InlineResponse2006 =
  exports.InlineResponse20057Suggests =
  exports.InlineResponse20057 =
  exports.InlineResponse20056 =
  exports.InlineResponse20055 =
  exports.InlineResponse20054Videos =
  exports.InlineResponse20054 =
  exports.InlineResponse20053SearchResults =
  exports.InlineResponse20053Results =
  exports.InlineResponse20053 =
  exports.InlineResponse20052 =
  exports.InlineResponse20051 =
  exports.InlineResponse20050 =
  exports.InlineResponse2005 =
  exports.InlineResponse20049Recipes =
  exports.InlineResponse20049NutritionCaloriesConfidenceRange95Percent =
  exports.InlineResponse20049NutritionCalories =
  exports.InlineResponse20049Nutrition =
  exports.InlineResponse20049Category =
  exports.InlineResponse20049 =
  exports.InlineResponse20048 =
  exports.InlineResponse20047RecommendedWines =
    void 0
const ApiClient_1 = __importDefault(require('./ApiClient'))
exports.ApiClient = ApiClient_1.default
const FoodIngredientsMapProducts_1 = __importDefault(
  require('./com.spoonacular.client.model/FoodIngredientsMapProducts')
)
exports.FoodIngredientsMapProducts = FoodIngredientsMapProducts_1.default
const InlineObject_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject')
)
exports.InlineObject = InlineObject_1.default
const InlineObject1_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject1')
)
exports.InlineObject1 = InlineObject1_1.default
const InlineObject10_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject10')
)
exports.InlineObject10 = InlineObject10_1.default
const InlineObject2_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject2')
)
exports.InlineObject2 = InlineObject2_1.default
const InlineObject3_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject3')
)
exports.InlineObject3 = InlineObject3_1.default
const InlineObject4_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject4')
)
exports.InlineObject4 = InlineObject4_1.default
const InlineObject5_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject5')
)
exports.InlineObject5 = InlineObject5_1.default
const InlineObject6_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject6')
)
exports.InlineObject6 = InlineObject6_1.default
const InlineObject7_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject7')
)
exports.InlineObject7 = InlineObject7_1.default
const InlineObject8_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject8')
)
exports.InlineObject8 = InlineObject8_1.default
const InlineObject9_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineObject9')
)
exports.InlineObject9 = InlineObject9_1.default
const InlineResponse200_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse200')
)
exports.InlineResponse200 = InlineResponse200_1.default
const InlineResponse2001_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2001')
)
exports.InlineResponse2001 = InlineResponse2001_1.default
const InlineResponse20010_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20010')
)
exports.InlineResponse20010 = InlineResponse20010_1.default
const InlineResponse20010Amount_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20010Amount')
)
exports.InlineResponse20010Amount = InlineResponse20010Amount_1.default
const InlineResponse20010AmountMetric_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20010AmountMetric')
)
exports.InlineResponse20010AmountMetric =
  InlineResponse20010AmountMetric_1.default
const InlineResponse20010Ingredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20010Ingredients')
)
exports.InlineResponse20010Ingredients =
  InlineResponse20010Ingredients_1.default
const InlineResponse20011_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20011')
)
exports.InlineResponse20011 = InlineResponse20011_1.default
const InlineResponse20011Ingredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20011Ingredients')
)
exports.InlineResponse20011Ingredients =
  InlineResponse20011Ingredients_1.default
const InlineResponse20012_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20012')
)
exports.InlineResponse20012 = InlineResponse20012_1.default
const InlineResponse20013_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20013')
)
exports.InlineResponse20013 = InlineResponse20013_1.default
const InlineResponse20013Ingredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20013Ingredients')
)
exports.InlineResponse20013Ingredients =
  InlineResponse20013Ingredients_1.default
const InlineResponse20013Ingredients1_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20013Ingredients1')
)
exports.InlineResponse20013Ingredients1 =
  InlineResponse20013Ingredients1_1.default
const InlineResponse20013ParsedInstructions_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20013ParsedInstructions')
)
exports.InlineResponse20013ParsedInstructions =
  InlineResponse20013ParsedInstructions_1.default
const InlineResponse20013Steps_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20013Steps')
)
exports.InlineResponse20013Steps = InlineResponse20013Steps_1.default
const InlineResponse20014_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20014')
)
exports.InlineResponse20014 = InlineResponse20014_1.default
const InlineResponse20015_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20015')
)
exports.InlineResponse20015 = InlineResponse20015_1.default
const InlineResponse20016_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20016')
)
exports.InlineResponse20016 = InlineResponse20016_1.default
const InlineResponse20017_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20017')
)
exports.InlineResponse20017 = InlineResponse20017_1.default
const InlineResponse20018_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20018')
)
exports.InlineResponse20018 = InlineResponse20018_1.default
const InlineResponse20018Dishes_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20018Dishes')
)
exports.InlineResponse20018Dishes = InlineResponse20018Dishes_1.default
const InlineResponse20018Ingredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20018Ingredients')
)
exports.InlineResponse20018Ingredients =
  InlineResponse20018Ingredients_1.default
const InlineResponse20019_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20019')
)
exports.InlineResponse20019 = InlineResponse20019_1.default
const InlineResponse2002_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2002')
)
exports.InlineResponse2002 = InlineResponse2002_1.default
const InlineResponse20020_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20020')
)
exports.InlineResponse20020 = InlineResponse20020_1.default
const InlineResponse20021_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20021')
)
exports.InlineResponse20021 = InlineResponse20021_1.default
const InlineResponse20021Calories_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20021Calories')
)
exports.InlineResponse20021Calories = InlineResponse20021Calories_1.default
const InlineResponse20021CaloriesConfidenceRange95Percent_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20021CaloriesConfidenceRange95Percent')
)
exports.InlineResponse20021CaloriesConfidenceRange95Percent =
  InlineResponse20021CaloriesConfidenceRange95Percent_1.default
const InlineResponse20022_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20022')
)
exports.InlineResponse20022 = InlineResponse20022_1.default
const InlineResponse20022Nutrition_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20022Nutrition')
)
exports.InlineResponse20022Nutrition = InlineResponse20022Nutrition_1.default
const InlineResponse20023_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20023')
)
exports.InlineResponse20023 = InlineResponse20023_1.default
const InlineResponse20023Ingredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20023Ingredients')
)
exports.InlineResponse20023Ingredients =
  InlineResponse20023Ingredients_1.default
const InlineResponse20024_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20024')
)
exports.InlineResponse20024 = InlineResponse20024_1.default
const InlineResponse20025_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20025')
)
exports.InlineResponse20025 = InlineResponse20025_1.default
const InlineResponse20025Results_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20025Results')
)
exports.InlineResponse20025Results = InlineResponse20025Results_1.default
const InlineResponse20026_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20026')
)
exports.InlineResponse20026 = InlineResponse20026_1.default
const InlineResponse20027_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20027')
)
exports.InlineResponse20027 = InlineResponse20027_1.default
const InlineResponse20028_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20028')
)
exports.InlineResponse20028 = InlineResponse20028_1.default
const InlineResponse20028Ingredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20028Ingredients')
)
exports.InlineResponse20028Ingredients =
  InlineResponse20028Ingredients_1.default
const InlineResponse20028Nutrition_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20028Nutrition')
)
exports.InlineResponse20028Nutrition = InlineResponse20028Nutrition_1.default
const InlineResponse20028Servings_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20028Servings')
)
exports.InlineResponse20028Servings = InlineResponse20028Servings_1.default
const InlineResponse20029_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20029')
)
exports.InlineResponse20029 = InlineResponse20029_1.default
const InlineResponse20029CustomFoods_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20029CustomFoods')
)
exports.InlineResponse20029CustomFoods =
  InlineResponse20029CustomFoods_1.default
const InlineResponse2003_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2003')
)
exports.InlineResponse2003 = InlineResponse2003_1.default
const InlineResponse20030_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20030')
)
exports.InlineResponse20030 = InlineResponse20030_1.default
const InlineResponse20030Ingredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20030Ingredients')
)
exports.InlineResponse20030Ingredients =
  InlineResponse20030Ingredients_1.default
const InlineResponse20031_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20031')
)
exports.InlineResponse20031 = InlineResponse20031_1.default
const InlineResponse20031ComparableProducts_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20031ComparableProducts')
)
exports.InlineResponse20031ComparableProducts =
  InlineResponse20031ComparableProducts_1.default
const InlineResponse20031ComparableProductsProtein_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20031ComparableProductsProtein')
)
exports.InlineResponse20031ComparableProductsProtein =
  InlineResponse20031ComparableProductsProtein_1.default
const InlineResponse20032_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20032')
)
exports.InlineResponse20032 = InlineResponse20032_1.default
const InlineResponse20032Results_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20032Results')
)
exports.InlineResponse20032Results = InlineResponse20032Results_1.default
const InlineResponse20033_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20033')
)
exports.InlineResponse20033 = InlineResponse20033_1.default
const InlineResponse20034_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20034')
)
exports.InlineResponse20034 = InlineResponse20034_1.default
const InlineResponse20035_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20035')
)
exports.InlineResponse20035 = InlineResponse20035_1.default
const InlineResponse20035MenuItems_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20035MenuItems')
)
exports.InlineResponse20035MenuItems = InlineResponse20035MenuItems_1.default
const InlineResponse20036_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20036')
)
exports.InlineResponse20036 = InlineResponse20036_1.default
const InlineResponse20037_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20037')
)
exports.InlineResponse20037 = InlineResponse20037_1.default
const InlineResponse20037Nutrients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20037Nutrients')
)
exports.InlineResponse20037Nutrients = InlineResponse20037Nutrients_1.default
const InlineResponse20038_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20038')
)
exports.InlineResponse20038 = InlineResponse20038_1.default
const InlineResponse20038Days_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20038Days')
)
exports.InlineResponse20038Days = InlineResponse20038Days_1.default
const InlineResponse20038Items_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20038Items')
)
exports.InlineResponse20038Items = InlineResponse20038Items_1.default
const InlineResponse20038NutritionSummary_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20038NutritionSummary')
)
exports.InlineResponse20038NutritionSummary =
  InlineResponse20038NutritionSummary_1.default
const InlineResponse20038NutritionSummaryNutrients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20038NutritionSummaryNutrients')
)
exports.InlineResponse20038NutritionSummaryNutrients =
  InlineResponse20038NutritionSummaryNutrients_1.default
const InlineResponse20038Value_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20038Value')
)
exports.InlineResponse20038Value = InlineResponse20038Value_1.default
const InlineResponse20039_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20039')
)
exports.InlineResponse20039 = InlineResponse20039_1.default
const InlineResponse2003ExtendedIngredients_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2003ExtendedIngredients')
)
exports.InlineResponse2003ExtendedIngredients =
  InlineResponse2003ExtendedIngredients_1.default
const InlineResponse2003Measures_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2003Measures')
)
exports.InlineResponse2003Measures = InlineResponse2003Measures_1.default
const InlineResponse2003MeasuresMetric_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2003MeasuresMetric')
)
exports.InlineResponse2003MeasuresMetric =
  InlineResponse2003MeasuresMetric_1.default
const InlineResponse2003WinePairing_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2003WinePairing')
)
exports.InlineResponse2003WinePairing = InlineResponse2003WinePairing_1.default
const InlineResponse2003WinePairingProductMatches_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches')
)
exports.InlineResponse2003WinePairingProductMatches =
  InlineResponse2003WinePairingProductMatches_1.default
const InlineResponse2004_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2004')
)
exports.InlineResponse2004 = InlineResponse2004_1.default
const InlineResponse20040_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20040')
)
exports.InlineResponse20040 = InlineResponse20040_1.default
const InlineResponse20040Items_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20040Items')
)
exports.InlineResponse20040Items = InlineResponse20040Items_1.default
const InlineResponse20040Value_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20040Value')
)
exports.InlineResponse20040Value = InlineResponse20040Value_1.default
const InlineResponse20041_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20041')
)
exports.InlineResponse20041 = InlineResponse20041_1.default
const InlineResponse20041Days_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20041Days')
)
exports.InlineResponse20041Days = InlineResponse20041Days_1.default
const InlineResponse20041Items_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20041Items')
)
exports.InlineResponse20041Items = InlineResponse20041Items_1.default
const InlineResponse20041Value_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20041Value')
)
exports.InlineResponse20041Value = InlineResponse20041Value_1.default
const InlineResponse20042_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20042')
)
exports.InlineResponse20042 = InlineResponse20042_1.default
const InlineResponse20042Aisles_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20042Aisles')
)
exports.InlineResponse20042Aisles = InlineResponse20042Aisles_1.default
const InlineResponse20042Items_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20042Items')
)
exports.InlineResponse20042Items = InlineResponse20042Items_1.default
const InlineResponse20042Measures_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20042Measures')
)
exports.InlineResponse20042Measures = InlineResponse20042Measures_1.default
const InlineResponse20043_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20043')
)
exports.InlineResponse20043 = InlineResponse20043_1.default
const InlineResponse20044_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20044')
)
exports.InlineResponse20044 = InlineResponse20044_1.default
const InlineResponse20045_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20045')
)
exports.InlineResponse20045 = InlineResponse20045_1.default
const InlineResponse20045ProductMatches_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20045ProductMatches')
)
exports.InlineResponse20045ProductMatches =
  InlineResponse20045ProductMatches_1.default
const InlineResponse20046_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20046')
)
exports.InlineResponse20046 = InlineResponse20046_1.default
const InlineResponse20047_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20047')
)
exports.InlineResponse20047 = InlineResponse20047_1.default
const InlineResponse20047RecommendedWines_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20047RecommendedWines')
)
exports.InlineResponse20047RecommendedWines =
  InlineResponse20047RecommendedWines_1.default
const InlineResponse20048_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20048')
)
exports.InlineResponse20048 = InlineResponse20048_1.default
const InlineResponse20049_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20049')
)
exports.InlineResponse20049 = InlineResponse20049_1.default
const InlineResponse20049Category_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20049Category')
)
exports.InlineResponse20049Category = InlineResponse20049Category_1.default
const InlineResponse20049Nutrition_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20049Nutrition')
)
exports.InlineResponse20049Nutrition = InlineResponse20049Nutrition_1.default
const InlineResponse20049NutritionCalories_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20049NutritionCalories')
)
exports.InlineResponse20049NutritionCalories =
  InlineResponse20049NutritionCalories_1.default
const InlineResponse20049NutritionCaloriesConfidenceRange95Percent_1 =
  __importDefault(
    require('./com.spoonacular.client.model/InlineResponse20049NutritionCaloriesConfidenceRange95Percent')
  )
exports.InlineResponse20049NutritionCaloriesConfidenceRange95Percent =
  InlineResponse20049NutritionCaloriesConfidenceRange95Percent_1.default
const InlineResponse20049Recipes_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20049Recipes')
)
exports.InlineResponse20049Recipes = InlineResponse20049Recipes_1.default
const InlineResponse2005_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2005')
)
exports.InlineResponse2005 = InlineResponse2005_1.default
const InlineResponse20050_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20050')
)
exports.InlineResponse20050 = InlineResponse20050_1.default
const InlineResponse20051_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20051')
)
exports.InlineResponse20051 = InlineResponse20051_1.default
const InlineResponse20052_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20052')
)
exports.InlineResponse20052 = InlineResponse20052_1.default
const InlineResponse20053_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20053')
)
exports.InlineResponse20053 = InlineResponse20053_1.default
const InlineResponse20053Results_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20053Results')
)
exports.InlineResponse20053Results = InlineResponse20053Results_1.default
const InlineResponse20053SearchResults_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20053SearchResults')
)
exports.InlineResponse20053SearchResults =
  InlineResponse20053SearchResults_1.default
const InlineResponse20054_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20054')
)
exports.InlineResponse20054 = InlineResponse20054_1.default
const InlineResponse20054Videos_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20054Videos')
)
exports.InlineResponse20054Videos = InlineResponse20054Videos_1.default
const InlineResponse20055_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20055')
)
exports.InlineResponse20055 = InlineResponse20055_1.default
const InlineResponse20056_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20056')
)
exports.InlineResponse20056 = InlineResponse20056_1.default
const InlineResponse20057_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20057')
)
exports.InlineResponse20057 = InlineResponse20057_1.default
const InlineResponse20057Suggests_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse20057Suggests')
)
exports.InlineResponse20057Suggests = InlineResponse20057Suggests_1.default
const InlineResponse2006_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2006')
)
exports.InlineResponse2006 = InlineResponse2006_1.default
const InlineResponse2006Recipes_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2006Recipes')
)
exports.InlineResponse2006Recipes = InlineResponse2006Recipes_1.default
const InlineResponse2007_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2007')
)
exports.InlineResponse2007 = InlineResponse2007_1.default
const InlineResponse2008_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2008')
)
exports.InlineResponse2008 = InlineResponse2008_1.default
const InlineResponse2009_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse2009')
)
exports.InlineResponse2009 = InlineResponse2009_1.default
const InlineResponse200Results_1 = __importDefault(
  require('./com.spoonacular.client.model/InlineResponse200Results')
)
exports.InlineResponse200Results = InlineResponse200Results_1.default
const RecipesFindByIngredientsMissedIngredients_1 = __importDefault(
  require('./com.spoonacular.client.model/RecipesFindByIngredientsMissedIngredients')
)
exports.RecipesFindByIngredientsMissedIngredients =
  RecipesFindByIngredientsMissedIngredients_1.default
const RecipesParseIngredientsEstimatedCost_1 = __importDefault(
  require('./com.spoonacular.client.model/RecipesParseIngredientsEstimatedCost')
)
exports.RecipesParseIngredientsEstimatedCost =
  RecipesParseIngredientsEstimatedCost_1.default
const RecipesParseIngredientsNutrition_1 = __importDefault(
  require('./com.spoonacular.client.model/RecipesParseIngredientsNutrition')
)
exports.RecipesParseIngredientsNutrition =
  RecipesParseIngredientsNutrition_1.default
const RecipesParseIngredientsNutritionCaloricBreakdown_1 = __importDefault(
  require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown')
)
exports.RecipesParseIngredientsNutritionCaloricBreakdown =
  RecipesParseIngredientsNutritionCaloricBreakdown_1.default
const RecipesParseIngredientsNutritionNutrients_1 = __importDefault(
  require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients')
)
exports.RecipesParseIngredientsNutritionNutrients =
  RecipesParseIngredientsNutritionNutrients_1.default
const RecipesParseIngredientsNutritionProperties_1 = __importDefault(
  require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties')
)
exports.RecipesParseIngredientsNutritionProperties =
  RecipesParseIngredientsNutritionProperties_1.default
const RecipesParseIngredientsNutritionWeightPerServing_1 = __importDefault(
  require('./com.spoonacular.client.model/RecipesParseIngredientsNutritionWeightPerServing')
)
exports.RecipesParseIngredientsNutritionWeightPerServing =
  RecipesParseIngredientsNutritionWeightPerServing_1.default
const IngredientsApi_1 = __importDefault(
  require('./com.spoonacular/IngredientsApi')
)
exports.IngredientsApi = IngredientsApi_1.default
const MealPlanningApi_1 = __importDefault(
  require('./com.spoonacular/MealPlanningApi')
)
exports.MealPlanningApi = MealPlanningApi_1.default
const MenuItemsApi_1 = __importDefault(
  require('./com.spoonacular/MenuItemsApi')
)
exports.MenuItemsApi = MenuItemsApi_1.default
const MiscApi_1 = __importDefault(require('./com.spoonacular/MiscApi'))
exports.MiscApi = MiscApi_1.default
const ProductsApi_1 = __importDefault(require('./com.spoonacular/ProductsApi'))
exports.ProductsApi = ProductsApi_1.default
const RecipesApi_1 = __importDefault(require('./com.spoonacular/RecipesApi'))
exports.RecipesApi = RecipesApi_1.default
const WineApi_1 = __importDefault(require('./com.spoonacular/WineApi'))
exports.WineApi = WineApi_1.default