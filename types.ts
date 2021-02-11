export interface Recipe {
  vegetarian: boolean
  vegan: boolean
  glutenFree: boolean
  dairyFree: boolean
  veryHealthy: boolean
  cheap: boolean
  veryPopular: boolean
  sustainable: boolean
  weightWatcherSmartPoints: number
  gaps: string
  lowFodmap: boolean
  preparationMinutes: number
  cookingMinutes: number
  aggregateLikes: number
  spoonacularScore: number
  healthScore: number
  creditsText: string
  sourceName: string
  pricePerServing: number
  extendedIngredients?: ExtendedIngredientsEntity[] | null
  id: number
  title: string
  readyInMinutes: number
  servings: number
  sourceUrl: string
  image: string
  imageType: string
  nutrition: Nutrition
  summary: string
  cuisines?: string[] | null
  dishTypes?: string[] | null
  diets?: null[] | null
  occasions?: string[] | null
  winePairing: WinePairing
  instructions: string
  analyzedInstructions?: AnalyzedInstructionsEntity[] | null
  originalId?: null
}

export interface ExtendedIngredientsEntity {
  id: number
  aisle: string
  image: string
  consistency: string
  name: string
  original: string
  originalString: string
  originalName: string
  amount: number
  unit: string
  meta?: (string | null)[] | null
  metaInformation?: (string | null)[] | null
  measures: Measures
}

export interface Measures {
  us: UsOrMetric
  metric: UsOrMetric
}

export interface UsOrMetric {
  amount: number
  unitShort: string
  unitLong: string
}

export interface Nutrition {
  nutrients?: NutrientsEntity[] | null
  properties?: PropertiesEntityOrFlavanoidsEntityOrNutrientsEntity[] | null
  flavanoids?: PropertiesEntityOrFlavanoidsEntityOrNutrientsEntity[] | null
  ingredients?: IngredientsEntity[] | null
  caloricBreakdown: CaloricBreakdown
  weightPerServing: WeightPerServing
}

export interface NutrientsEntity {
  name: string
  title: string
  amount: number
  unit: string
  percentOfDailyNeeds: number
}

export interface PropertiesEntityOrFlavanoidsEntityOrNutrientsEntity {
  name: string
  title: string
  amount: number
  unit: string
}

export interface IngredientsEntity {
  id: number
  name: string
  amount: number
  unit: string
  nutrients?: PropertiesEntityOrFlavanoidsEntityOrNutrientsEntity[] | null
}

export interface CaloricBreakdown {
  percentProtein: number
  percentFat: number
  percentCarbs: number
}

export interface WeightPerServing {
  amount: number
  unit: string
}

export interface WinePairing {
  pairedWines?: string[] | null
  pairingText: string
  productMatches?: ProductMatchesEntity[] | null
}

export interface ProductMatchesEntity {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
  averageRating: number
  ratingCount: number
  score: number
  link: string
}

export interface AnalyzedInstructionsEntity {
  name: string
  steps?: StepsEntity[] | null
}

export interface StepsEntity {
  number: number
  step: string
  ingredients?: IngredientsEntity1[] | null
  equipment?: null[] | null
}

export interface IngredientsEntity1 {
  id: number
  name: string
  localizedName: string
  image: string
}
