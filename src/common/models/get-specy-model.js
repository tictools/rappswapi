export const getSpecyModel = (specy) => {
  const {
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    language,
  } = specy.result.properties;

  return {
    header: name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    language,
  };
};
