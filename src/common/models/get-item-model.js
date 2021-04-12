import { CATEGORIES } from '../constants'
import {
  getFilmModel,
  getPlanetModel,
  getPeopleModel,
  getSpecyModel,
  getStarshipModel,
  getVehicleModel
} from './index'

export const getItemModel = (category, item) => {
  let itemModel
  switch (category) {
    case CATEGORIES.PLANETS:
      itemModel = getPlanetModel(item)
      break
    case CATEGORIES.PEOPLE:
      itemModel = getPeopleModel(item)
      break
    case CATEGORIES.FILMS:
      itemModel = getFilmModel(item)
      break
    case CATEGORIES.STARSHIPS:
      itemModel = getStarshipModel(item)
      break
    case CATEGORIES.VEHICLES:
      itemModel = getVehicleModel(item)
      break
    case CATEGORIES.SPECIES:
      itemModel = getSpecyModel(item)
      break
    default:
      return null
  }
  return itemModel
}
