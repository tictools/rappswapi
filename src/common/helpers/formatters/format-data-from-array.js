import { DEFAULT_STRING, INITIAL_VALUE } from "../../constants";

export const formatDataFromArray = (arrayData) => {
  const data =
    (arrayData && arrayData.results) || arrayData.result || INITIAL_VALUE.LIST;
  return data.map((item) => {
    const { pathname } = item.properties
      ? new URL(item.properties.url)
      : new URL(item.url);
    const [resourcePath, index] = pathname
      .replace("/api/", DEFAULT_STRING.EMPTY)
      .split("/")
      .filter((item) => !!item);
    return item && item.properties
      ? {
          title: item.properties.title,
          resourcePath,
          index,
        }
      : {
          name: item.name,
          resourcePath,
          index,
        };
  });
};
