export const getPlanetModel = (planet) => {
  debugger
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population
  } = planet.result.properties

  return {
    header: name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population
  }
}
