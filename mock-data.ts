import {
  randNumber,
  randFood,
  randImg,
  randText,
  randCompanyName,
  randUrl,
  randFloat,
  randBoolean,
  randSentence,
} from '@ngneat/falso'
import type { GetRandomRecipes200ResponseRecipesInner } from 'spoonacular-js-sdk'
import { arrMap } from './src/utils/arrMap'

export const mockRandomRecipe: GetRandomRecipes200ResponseRecipesInner = {
  id: 650858,
  title: 'Mangolicious Upside Down Cake',
  image: 'https://spoonacular.com/recipeImages/650858-556x370.jpg',
  imageType: 'jpg',
  servings: 2,
  readyInMinutes: 45,
  license: 'CC BY 3.0',
  sourceName: 'Foodista',
  sourceUrl: 'http://www.foodista.com/recipe/8H3JJ2WH/mangolicious-upside-cake',
  spoonacularSourceUrl:
    'https://spoonacular.com/mangolicious-upside-down-cake-650858',
  aggregateLikes: 67,
  healthScore: 1,
  pricePerServing: 67.67,
  cheap: false,
  creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
  dairyFree: false,
  gaps: 'no',
  glutenFree: false,
  instructions:
    '<ol><li>Preheat oven to 350F.</li><li>Butter 9x2-inch round cake pan.</li><li>Pat slices of mango dry with paper towels.</li><li>In small bowl, stir together butter and brown sugar and spread evenly in pan. Arrange mango pieces from two mangos on the sugar mixture.</li><li>Reserve the rest for mango puree and set aside.</li><li>In food processor, puree remaining mangos to make  cup.</li><li>Into small bowl sift together the flour, baking powder, salt and cinnamon.</li><li>In another bowl with electric mixer, cream butter and sugar until mixture is light and fluffy.</li><li>Add eggs, one at a time, beating well after each addition.</li><li>Beat in vanilla.</li><li>Add flour mixture alternately in batches with pureed mangos.</li><li>Beginning and ending with flour mixture and beating well after each addition. Pour batter into pan, spreading evenly.</li><li>Bake cake in middle of oven for 45 to 55 minutes, or until it tests done.</li><li>Let cake cool in the pan on a rack for 15 minutes.</li><li>Run a thin knife around the edge and invert onto a platter.</li></ol>',
  lowFodmap: false,
  sustainable: false,
  vegan: false,
  vegetarian: false,
  veryHealthy: false,
  veryPopular: false,
  weightWatcherSmartPoints: 12,
  summary:
    'Need a <b>vegetarian dessert</b>? Mangolicious Upside Down Cake could be a great recipe to try. This recipe makes 12 servings with <b>287 calories</b>, <b>3g of protein</b>, and <b>13g of fat</b> each. For <b>67 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. 67 people have made this recipe and would make it again. If you have vanilla, eggs, mangos, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 29%</b>. This score is not so amazing. Similar recipes include <a href="https://spoonacular.com/recipes/mangolicious-shake-471950">Mangolicious Shake</a>, <a href="https://spoonacular.com/recipes/eggless-apple-upside-down-cake-apple-upside-down-cake-488474">eggless apple upside down cake | apple upside down cake</a>, and <a href="https://spoonacular.com/recipes/blueberry-skillet-cake-a-berry-licious-upside-down-cake-496632">Blueberry Skillet Cake (a Berry-licious Upside-Down Cake)</a>.',
  analyzedInstructions: [
    {
      name: '',
      steps: [
        {
          number: 1,
          step: 'Preheat oven to 350F.Butter 9x2-inch round cake pan.Pat slices of mango dry with paper towels.In small bowl, stir together butter and brown sugar and spread evenly in pan. Arrange mango pieces from two mangos on the sugar mixture.Reserve the rest for mango puree and set aside.In food processor, puree remaining mangos to make  cup.Into small bowl sift together the flour, baking powder, salt and cinnamon.In another bowl with electric mixer, cream butter and sugar until mixture is light and fluffy.',
          ingredients: [
            {
              id: 18369,
              name: 'baking powder',
              localizedName: 'baking powder',
              image: 'white-powder.jpg',
            },
            {
              id: 19334,
              name: 'brown sugar',
              localizedName: 'brown sugar',
              image: 'dark-brown-sugar.png',
            },
            {
              id: 1009176,
              name: 'mango puree',
              localizedName: 'mango puree',
              image: 'mango-puree.png',
            },
            {
              id: 2010,
              name: 'cinnamon',
              localizedName: 'cinnamon',
              image: 'cinnamon.jpg',
            },
            {
              id: 1001,
              name: 'butter',
              localizedName: 'butter',
              image: 'butter-sliced.jpg',
            },
            {
              id: 9176,
              name: 'mango',
              localizedName: 'mango',
              image: 'mango.jpg',
            },
            {
              id: 0,
              name: 'spread',
              localizedName: 'spread',
              image: '',
            },
            {
              id: 1053,
              name: 'cream',
              localizedName: 'cream',
              image: 'fluid-cream.jpg',
            },
            {
              id: 20081,
              name: 'all purpose flour',
              localizedName: 'all purpose flour',
              image: 'flour.png',
            },
            {
              id: 19335,
              name: 'sugar',
              localizedName: 'sugar',
              image: 'sugar-in-bowl.png',
            },
            {
              id: 2047,
              name: 'salt',
              localizedName: 'salt',
              image: 'salt.jpg',
            },
          ],
          equipment: [
            {
              id: 404628,
              name: 'hand mixer',
              localizedName: 'hand mixer',
              image: 'hand-mixer.png',
            },
            {
              id: 404771,
              name: 'food processor',
              localizedName: 'food processor',
              image: 'food-processor.png',
            },
            {
              id: 405895,
              name: 'paper towels',
              localizedName: 'paper towels',
              image: 'paper-towels.jpg',
            },
            {
              id: 404747,
              name: 'cake form',
              localizedName: 'cake form',
              image: 'cake-pan.png',
            },
            {
              id: 404783,
              name: 'bowl',
              localizedName: 'bowl',
              image: 'bowl.jpg',
            },
            {
              id: 404784,
              name: 'oven',
              localizedName: 'oven',
              image: 'oven.jpg',
              temperature: {
                number: 350,
                unit: 'Fahrenheit',
              },
            },
          ],
        },
        {
          number: 2,
          step: 'Add eggs, one at a time, beating well after each addition.Beat in vanilla.',
          ingredients: [
            {
              id: 1052050,
              name: 'vanilla',
              localizedName: 'vanilla',
              image: 'vanilla.jpg',
            },
            {
              id: 1123,
              name: 'egg',
              localizedName: 'egg',
              image: 'egg.png',
            },
          ],
          equipment: [],
        },
        {
          number: 3,
          step: 'Add flour mixture alternately in batches with pureed mangos.Beginning and ending with flour mixture and beating well after each addition.',
          ingredients: [
            {
              id: 9176,
              name: 'mango',
              localizedName: 'mango',
              image: 'mango.jpg',
            },
            {
              id: 20081,
              name: 'all purpose flour',
              localizedName: 'all purpose flour',
              image: 'flour.png',
            },
          ],
          equipment: [],
        },
        {
          number: 4,
          step: 'Pour batter into pan, spreading evenly.',
          ingredients: [],
          equipment: [
            {
              id: 404645,
              name: 'frying pan',
              localizedName: 'frying pan',
              image: 'pan.png',
            },
          ],
        },
        {
          number: 5,
          step: 'Bake cake in middle of oven for 45 to 55 minutes, or until it tests done.',
          ingredients: [],
          equipment: [
            {
              id: 404784,
              name: 'oven',
              localizedName: 'oven',
              image: 'oven.jpg',
            },
          ],
          length: {
            number: 45,
            unit: 'minutes',
          },
        },
        {
          number: 6,
          step: 'Let cake cool in the pan on a rack for 15 minutes.Run a thin knife around the edge and invert onto a platter.',
          ingredients: [],
          equipment: [
            {
              id: 404745,
              name: 'knife',
              localizedName: 'knife',
              image: 'chefs-knife.jpg',
            },
            {
              id: 404645,
              name: 'frying pan',
              localizedName: 'frying pan',
              image: 'pan.png',
            },
          ],
          length: {
            number: 15,
            unit: 'minutes',
          },
        },
      ],
    },
  ],
  cuisines: [],
  diets: ['lacto ovo vegetarian'],
  occasions: [],
  dishTypes: ['side dish'],
  extendedIngredients: [
    {
      aisle: 'Baking',
      amount: 1,
      id: 18371,
      image: 'white-powder.jpg',
      name: 'baking powder',
      original: '1 teaspoon baking powder',
      originalName: 'baking powder',
      unit: 'teaspoon',
      measures: {
        metric: {
          amount: 1,
          unitLong: 'teaspoon',
          unitShort: 'tsp',
        },
        us: {
          amount: 1,
          unitLong: 'teaspoon',
          unitShort: 'tsp',
        },
      },
      meta: [],
    },
    {
      aisle: 'Baking',
      amount: 0.6666667,
      id: 19334,
      image: 'light-brown-sugar.jpg',
      name: 'brown sugar',
      original: '2/3 cup Brown Sugar, firmly packed',
      originalName: 'Brown Sugar, firmly packed',
      unit: 'cup',
      measures: {
        metric: {
          amount: 157.725,
          unitLong: 'milliliters',
          unitShort: 'ml',
        },
        us: {
          amount: 0.667,
          unitLong: 'cups',
          unitShort: 'cups',
        },
      },
      meta: ['packed'],
    },
    {
      aisle: 'Milk, Eggs, Other Dairy',
      amount: 0.25,
      id: 1001,
      image: 'butter-sliced.jpg',
      name: 'butter',
      original: '1/4 cup butter (½ stick), melted',
      originalName: 'butter (½ stick), melted',
      unit: 'cup',
      measures: {
        metric: {
          amount: 59.147,
          unitLong: 'milliliters',
          unitShort: 'ml',
        },
        us: {
          amount: 0.25,
          unitLong: 'cups',
          unitShort: 'cups',
        },
      },
      meta: ['melted', '()'],
    },
    {
      aisle: 'Milk, Eggs, Other Dairy',
      amount: 0.5,
      id: 1001,
      image: 'butter-sliced.jpg',
      name: 'butter',
      original: '1/2 cup butter (1 stick), softened',
      originalName: 'butter (1 stick), softened',
      unit: 'cup',
      measures: {
        metric: {
          amount: 118.294,
          unitLong: 'milliliters',
          unitShort: 'ml',
        },
        us: {
          amount: 0.5,
          unitLong: 'cups',
          unitShort: 'cups',
        },
      },
      meta: ['softened', '(1 stick)'],
    },
    {
      aisle: 'Spices and Seasonings',
      amount: 0.5,
      id: 2010,
      image: 'cinnamon.jpg',
      name: 'cinnamon',
      original: '1/2 tsp￼ Cinnamon',
      originalName: '￼ Cinnamon',
      unit: 'tsp',
      measures: {
        metric: {
          amount: 0.5,
          unitLong: 'teaspoons',
          unitShort: 'tsps',
        },
        us: {
          amount: 0.5,
          unitLong: 'teaspoons',
          unitShort: 'tsps',
        },
      },
      meta: [],
    },
    {
      aisle: 'Milk, Eggs, Other Dairy',
      amount: 2,
      id: 1123,
      image: 'egg.png',
      name: 'eggs',
      original: '2 eggs, large',
      originalName: 'eggs, large',
      unit: 'large',
      measures: {
        metric: {
          amount: 2,
          unitLong: 'larges',
          unitShort: 'large',
        },
        us: {
          amount: 2,
          unitLong: 'larges',
          unitShort: 'large',
        },
      },
      meta: [],
    },
    {
      aisle: 'Baking',
      amount: 1.3333334,
      id: 20081,
      image: 'flour.png',
      name: 'flour',
      original: '1 1/3 cups all-purpose flour',
      originalName: 'all-purpose flour',
      unit: 'cups',
      measures: {
        metric: {
          amount: 315.451,
          unitLong: 'milliliters',
          unitShort: 'ml',
        },
        us: {
          amount: 1.333,
          unitLong: 'cups',
          unitShort: 'cups',
        },
      },
      meta: ['all-purpose'],
    },
    {
      aisle: 'Baking',
      amount: 0.6666667,
      id: 19335,
      image: 'sugar-in-bowl.png',
      name: 'granulated sugar',
      original: '2/3 cup Granulated Sugar',
      originalName: 'Granulated Sugar',
      unit: 'cup',
      measures: {
        metric: {
          amount: 157.725,
          unitLong: 'milliliters',
          unitShort: 'ml',
        },
        us: {
          amount: 0.667,
          unitLong: 'cups',
          unitShort: 'cups',
        },
      },
      meta: [],
    },
    {
      aisle: 'Produce',
      amount: 4,
      id: 9176,
      image: 'mango.jpg',
      name: 'mangos',
      original: '4 mangos, peeled, pitted and sliced; divided',
      originalName: 'mangos, peeled, pitted and sliced; divided',
      unit: '',
      measures: {
        metric: {
          amount: 4,
          unitLong: '',
          unitShort: '',
        },
        us: {
          amount: 4,
          unitLong: '',
          unitShort: '',
        },
      },
      meta: ['divided', 'pitted', 'peeled', 'sliced'],
    },
    {
      aisle: 'Spices and Seasonings',
      amount: 0.5,
      id: 2047,
      image: 'salt.jpg',
      name: 'salt',
      original: '1/2 teaspoon salt',
      originalName: 'salt',
      unit: 'teaspoon',
      measures: {
        metric: {
          amount: 0.5,
          unitLong: 'teaspoons',
          unitShort: 'tsps',
        },
        us: {
          amount: 0.5,
          unitLong: 'teaspoons',
          unitShort: 'tsps',
        },
      },
      meta: [],
    },
    {
      aisle: 'Baking',
      amount: 1,
      id: 2050,
      image: 'vanilla-extract.jpg',
      name: 'vanilla',
      original: '1 teaspoon vanilla',
      originalName: 'vanilla',
      unit: 'teaspoon',
      measures: {
        metric: {
          amount: 1,
          unitLong: 'teaspoon',
          unitShort: 'tsp',
        },
        us: {
          amount: 1,
          unitLong: 'teaspoon',
          unitShort: 'tsp',
        },
      },
      meta: [],
    },
  ],
  spoonacularScore: undefined,
  ketogenic: undefined,
  whole30: undefined,
  winePairing: undefined,
}

export function getRandomIngredient() {
  return {
    id: randNumber(),
    name: randFood(),
    localizedName: randFood(),
    image: randText(),
  }
}

export function getRandomEquipment() {
  return {
    id: randNumber(),
    name: randText(),
    localizedName: randText(),
    image: randText(),
  }
}

export function getRandomStep() {
  return {
    number: randNumber(),
    step: randSentence(),
    ingredients: arrMap(8, getRandomIngredient),
    equipment: arrMap(6, getRandomEquipment),
  }
}

export function getRandomExtendedIngredient() {
  return {
    aisle: randText(),
    amount: randNumber(),
    id: randNumber(),
    image: randText(),
    name: randText(),
    original: randSentence(),
    originalName: randText(),
    unit: randText(),
    measures: {
      metric: {
        amount: randNumber(),
        unitLong: randText(),
        unitShort: randText(),
      },
      us: {
        amount: randNumber(),
        unitLong: randText(),
        unitShort: randText(),
      },
    },
    meta: [],
  }
}

export function getRandomRecipe(): GetRandomRecipes200ResponseRecipesInner {
  return {
    id: randNumber(),
    title: randFood(),
    image: randImg(),
    imageType: randText(),
    servings: randNumber({ min: 1, max: 99 }),
    readyInMinutes: randNumber({ min: 1, max: 99 }),
    license: randText(),
    sourceName: randCompanyName(),
    sourceUrl: randUrl(),
    spoonacularSourceUrl: randUrl(),
    aggregateLikes: randNumber({ min: 1, max: 99 }),
    healthScore: randNumber({ min: 1, max: 99 }),
    pricePerServing: randFloat(),
    cheap: randBoolean(),
    creditsText: randText(),
    dairyFree: randBoolean(),
    gaps: randText(),
    glutenFree: randBoolean(),
    instructions: randText(),
    lowFodmap: randBoolean(),
    sustainable: randBoolean(),
    vegan: randBoolean(),
    vegetarian: randBoolean(),
    veryHealthy: randBoolean(),
    veryPopular: randBoolean(),
    weightWatcherSmartPoints: randNumber({ min: 1, max: 99 }),
    summary: randSentence(),
    analyzedInstructions: [
      {
        name: randText(),
        steps: arrMap(8, getRandomStep),
      },
    ],
    cuisines: randText({ length: 2 }),
    diets: randText({ length: 2 }),
    occasions: randText({ length: 2 }),
    dishTypes: randText({ length: 2 }),
    extendedIngredients: arrMap(10, getRandomExtendedIngredient),
    spoonacularScore: undefined,
    ketogenic: undefined,
    whole30: undefined,
    winePairing: undefined,
  }
}
