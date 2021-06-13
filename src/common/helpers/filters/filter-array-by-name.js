import { INITIAL_VALUE, MAPPED_ITEMS_RESOURCE } from "../../constants";

export const filterArrayByName = (filter, data) => {
  const [NAME] = MAPPED_ITEMS_RESOURCE.NAME_AND_FILM;
  const [TITLE] = MAPPED_ITEMS_RESOURCE.TITLE_AND_CHARACTERS;
  const key = data && data[0].name ? NAME : TITLE;
  const dataToFilter =
    Array.isArray(data) && filter ? data : INITIAL_VALUE.LIST;
  return dataToFilter.filter((item) => {
    return item[key].toLowerCase().includes(filter.toLowerCase());
  });
};
