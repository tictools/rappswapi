export const DEFAULT_STRING = {
  EMPTY: '',
  APP: 'RAPPSWAPI',
  EMPTY_CATEGORY: 'May the search be with you',
  LOADING: 'Loading...',
  OPTION: '---'
}
export const CATEGORIES = {
  PLANETS: 'planets',
  PEOPLE: 'people',
  FILMS: 'films',
  STARSHIPS: 'starships',
  VEHICLES: 'vehicles',
  SPECIES: 'species'
}

export const MAPPED_ITEMS_RESOURCE = {
  NAME_AND_FILM: ['name', 'films'],
  TITLE_AND_CHARACTERS: ['title', 'characters']
}

export const ITEM_RESOURCE = {
  [CATEGORIES.PLANETS]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
  [CATEGORIES.PEOPLE]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
  [CATEGORIES.FILMS]: MAPPED_ITEMS_RESOURCE.TITLE_AND_CHARACTERS,
  [CATEGORIES.STARSHIPS]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
  [CATEGORIES.VEHICLES]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
  [CATEGORIES.SPECIES]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM
}

export const ITEM_KEYS = {
  TITLE: 'title',
  EPISODE_ID: 'episode_id',
  OPENING_CRAWL: 'opening_crawl',
  DIRECTOR: 'director',
  RELEASE_DATE: 'release_date',
  RESOURCE_TO_FETCH: 'resourceToFetch',
  NAME: 'name',
  HEIGHT: 'height',
  MASS: 'mass',
  HAIR_COLOR: 'hair_color',
  SKIN_COLOR: 'skin_color',
  EYE_COLOR: 'eye_color',
  BIRTH_YEAR: 'birth_year',
  GENDER: 'gender',
  FILMS: 'films',
  ROTATION_PERIOD: 'rotation_period',
  ORBITAL_PERIOD: 'orbital_period',
  DIAMETER: 'diameter',
  CLIMATE: 'climate',
  GRAVITY: 'gravity',
  TERRAIN: 'terrain',
  SURFACE_WATER: 'surface_water',
  POPULATION: 'population',
  CLASSIFICATION: 'classification',
  DESIGNATION: 'designation',
  AVERAGE_HEIGHT: 'average_height',
  SKIN_COLORS: 'skin_colors',
  HAIR_COLORS: 'hair_colors',
  EYE_COLORS: 'eye_colors',
  AVERAGE_LIFESPAN: 'average_lifespan',
  LANGUAGE: 'language',
  MODEL: 'model',
  MANUFACTURER: 'manufacturer',
  CREW: 'crew',
  PASSENGERS: 'passengers',
  COST_IN_CREDITS: 'cost_in_credits',
  LENGTH: 'length',
  MAX_ATMOSPHERIC_SPEED: 'max_atmosphering_speed',
  HYPERDRIVE_RATING: 'hyperdrive_rating',
  STARSHIP_CLASS: 'starship_class',
  VEHICLE_CLASS: 'vehicle_class',
  CHARACTERS: 'characters'
}

export const MAPPED_ITEM_KEYS = {
  [ITEM_KEYS.TITLE]: 'Title',
  [ITEM_KEYS.EPISODE_ID]: 'Episode',
  [ITEM_KEYS.OPENING_CRAWL]: 'Opening Crawl',
  [ITEM_KEYS.DIRECTOR]: 'Director',
  [ITEM_KEYS.RELEASE_DATE]: 'Release Date',
  [ITEM_KEYS.NAME]: 'Name',
  [ITEM_KEYS.HEIGHT]: 'Height',
  [ITEM_KEYS.MASS]: 'Mass',
  [ITEM_KEYS.HAIR_COLOR]: 'Hair Color',
  [ITEM_KEYS.SKIN_COLOR]: 'Skin Color',
  [ITEM_KEYS.EYE_COLOR]: 'Eye Color',
  [ITEM_KEYS.BIRTH_YEAR]: 'Birth Year',
  [ITEM_KEYS.GENDER]: 'Gender',
  [ITEM_KEYS.FILMS]: 'Films',
  [ITEM_KEYS.ROTATION_PERIOD]: 'Rotation Period',
  [ITEM_KEYS.ORBITAL_PERIOD]: 'Orbital Period',
  [ITEM_KEYS.DIAMETER]: 'Diameter',
  [ITEM_KEYS.CLIMATE]: 'Climate',
  [ITEM_KEYS.GRAVITY]: 'Gravity',
  [ITEM_KEYS.TERRAIN]: 'Terrain',
  [ITEM_KEYS.SURFACE_WATER]: 'Surface Water',
  [ITEM_KEYS.POPULATION]: 'Population',
  [ITEM_KEYS.CLASSIFICATION]: 'Classification',
  [ITEM_KEYS.DESIGNATION]: 'Designation',
  [ITEM_KEYS.AVERAGE_HEIGHT]: 'Average Height',
  [ITEM_KEYS.SKIN_COLORS]: 'Skin Colors',
  [ITEM_KEYS.HAIR_COLORS]: 'Hair Colors',
  [ITEM_KEYS.EYE_COLORS]: 'Eye Colors',
  [ITEM_KEYS.AVERAGE_LIFESPAN]: 'Average Lifespan',
  [ITEM_KEYS.LANGUAGE]: 'Language',
  [ITEM_KEYS.MODEL]: 'Model',
  [ITEM_KEYS.MANUFACTURER]: 'Manufacturer',
  [ITEM_KEYS.CREW]: 'Crew',
  [ITEM_KEYS.PASSENGERS]: 'Passengers',
  [ITEM_KEYS.COST_IN_CREDITS]: 'Cost in  Credits',
  [ITEM_KEYS.LENGTH]: 'Length',
  [ITEM_KEYS.MAX_ATMOSPHERIC_SPEED]: 'Max Atmosphering Speed',
  [ITEM_KEYS.HYPERDRIVE_RATING]: 'Hyperdrive Rating',
  [ITEM_KEYS.STARSHIP_CLASS]: 'Starship Class',
  [ITEM_KEYS.VEHICLE_CLASS]: 'Vehicle Class',
  [ITEM_KEYS.CHARACTERS]: 'Characters'
}

export const BASE_URL = 'https://www.swapi.tech/api'
