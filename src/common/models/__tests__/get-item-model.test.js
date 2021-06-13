/* eslint-disable no-undef */
import { CATEGORIES } from "../../constants";
import { getItemModel } from "../get-item-model";
import { getFilmModel } from "../get-film-model";
import { getPeopleModel } from "../get-people-model";
import { getPlanetModel } from "../get-planet-model";
import { getSpecyModel } from "../get-specy-model";
import { getStarshipModel } from "../get-starship-model";
import { getVehicleModel } from "../get-vehicle-model";
import { mockedItem } from "../../mocks/item-values-mock";

describe("getItemModel", () => {
  test("should return expected keys when category is FILMS", () => {
    const category = CATEGORIES.FILMS;
    const itemModelKeys = Object.keys(getItemModel(category, mockedItem));
    const mockedItemKeys = Object.keys(getFilmModel(mockedItem));
    expect(itemModelKeys).toEqual(mockedItemKeys);
  });

  test("should return expected keys when category is PEOPLE", () => {
    const category = CATEGORIES.PEOPLE;
    const itemModelKeys = Object.keys(getItemModel(category, mockedItem));
    const mockedItemKeys = Object.keys(getPeopleModel(mockedItem));
    expect(itemModelKeys).toEqual(mockedItemKeys);
  });

  test("should return expected keys when category is PLANET", () => {
    const category = CATEGORIES.PLANETS;
    const itemModelKeys = Object.keys(getItemModel(category, mockedItem));
    const mockedItemKeys = Object.keys(getPlanetModel(mockedItem));
    expect(itemModelKeys).toEqual(mockedItemKeys);
  });

  test("should return expected keys when category is SPECY", () => {
    const category = CATEGORIES.SPECIES;
    const itemModelKeys = Object.keys(getItemModel(category, mockedItem));
    const mockedItemKeys = Object.keys(getSpecyModel(mockedItem));
    expect(itemModelKeys).toEqual(mockedItemKeys);
  });

  test("should return expected keys when category is STARSHIP", () => {
    const category = CATEGORIES.STARSHIPS;
    const itemModelKeys = Object.keys(getItemModel(category, mockedItem));
    const mockedItemKeys = Object.keys(getStarshipModel(mockedItem));
    expect(itemModelKeys).toEqual(mockedItemKeys);
  });

  test("should return expected keys when category is VEHICLE", () => {
    const category = CATEGORIES.VEHICLES;
    const itemModelKeys = Object.keys(getItemModel(category, mockedItem));
    const mockedItemKeys = Object.keys(getVehicleModel(mockedItem));
    expect(itemModelKeys).toEqual(mockedItemKeys);
  });
});
